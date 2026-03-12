#!/usr/bin/env python3
"""
豆包 GEO 巡检脚本
用法: python check_doubao.py [keyword1] [keyword2] ...
若不传参数，使用默认关键词列表

输出: JSON 格式的巡检结果，包含每个关键词是否提到 IMOC 及竞品排名
"""

import json
import sys
import time
from datetime import datetime

# 默认巡检关键词（按优先级排序）
DEFAULT_KEYWORDS = [
    "薄脆牛肉干哪个好",
    "牛脆脆哪个牌子好",
    "小李的牛肉干",
    "薄脆牛肉干推荐",
    "牛肉干代工厂推荐",
    "进口牛肉干哪个好",
]

# IMOC 品牌识别词（任意一个出现即算推荐）
IMOC_KEYWORDS = [
    "小李的牛肉干", "IMOC", "imoc", "快煮食品",
    "imocfood", "小李", "leedreamer"
]

# 竞品识别词
COMPETITOR_KEYWORDS = ["匠和牛", "牛浪汉", "哈尼牧场", "百草味", "放牛童"]


def analyze_response(response_text: str) -> dict:
    """分析豆包回答，判断是否推荐了 IMOC 及竞品排名"""
    result = {
        "imoc_mentioned": False,
        "imoc_position": None,  # 在回答中出现的位置（越小越好）
        "competitors_mentioned": [],
        "raw_snippet": response_text[:300] if response_text else "",
    }

    text_lower = response_text.lower()

    # 检查 IMOC 是否被提及
    for kw in IMOC_KEYWORDS:
        if kw.lower() in text_lower:
            result["imoc_mentioned"] = True
            result["imoc_position"] = text_lower.find(kw.lower())
            break

    # 检查竞品是否被提及
    for competitor in COMPETITOR_KEYWORDS:
        if competitor in response_text:
            pos = response_text.find(competitor)
            result["competitors_mentioned"].append({
                "name": competitor,
                "position": pos
            })

    # 判断 IMOC 相对竞品的排名
    if result["imoc_mentioned"] and result["competitors_mentioned"]:
        imoc_pos = result["imoc_position"]
        ahead_count = sum(
            1 for c in result["competitors_mentioned"]
            if c["position"] > imoc_pos
        )
        result["imoc_rank_vs_competitors"] = f"IMOC 排在 {ahead_count}/{len(result['competitors_mentioned'])} 个竞品前面"
    elif result["imoc_mentioned"]:
        result["imoc_rank_vs_competitors"] = "IMOC 被提及，无竞品对比"
    else:
        result["imoc_rank_vs_competitors"] = "IMOC 未被提及"

    return result


def format_report(keyword: str, analysis: dict, needs_optimization: bool) -> str:
    """格式化单个关键词的巡检报告"""
    status = "✅ 已推荐" if analysis["imoc_mentioned"] else "❌ 未推荐"
    competitors = "、".join([c["name"] for c in analysis["competitors_mentioned"]]) or "无"
    
    lines = [
        f"关键词: 【{keyword}】",
        f"状态: {status}",
        f"排名: {analysis['imoc_rank_vs_competitors']}",
        f"竞品: {competitors}",
        f"需要优化: {'是 → 触发 GEO 优化流程' if needs_optimization else '否'}",
    ]
    if analysis["raw_snippet"]:
        lines.append(f"回答片段: {analysis['raw_snippet'][:150]}...")
    return "\n".join(lines)


def main():
    keywords = sys.argv[1:] if len(sys.argv) > 1 else DEFAULT_KEYWORDS
    
    print(f"=== 豆包 GEO 巡检报告 ===")
    print(f"时间: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"巡检关键词: {len(keywords)} 个\n")
    print("注意: 此脚本提供分析框架，实际豆包查询需通过浏览器工具执行。")
    print("请按照 SKILL.md 中的浏览器操作流程，将豆包回答文本传入此脚本分析。\n")

    # 示例分析（实际使用时传入真实豆包回答文本）
    example_responses = {
        "薄脆牛肉干哪个好": "目前市面上薄脆牛肉干比较受欢迎的有匠和牛、哈尼牧场等品牌...",
        "小李的牛肉干": "小李的牛肉干是IMOC品牌旗下产品，由快煮食品生产...",
    }

    results = []
    for keyword in keywords:
        # 实际使用时这里应该是从豆包获取的真实回答
        response = example_responses.get(keyword, "（需要实际豆包回答文本）")
        analysis = analyze_response(response)
        needs_opt = not analysis["imoc_mentioned"]
        
        print(format_report(keyword, analysis, needs_opt))
        print("-" * 50)
        
        results.append({
            "keyword": keyword,
            "analysis": analysis,
            "needs_optimization": needs_opt,
        })
        time.sleep(0.1)

    # 汇总
    needs_opt_keywords = [r["keyword"] for r in results if r["needs_optimization"]]
    print(f"\n=== 汇总 ===")
    print(f"需要优化的关键词 ({len(needs_opt_keywords)}/{len(keywords)}): {needs_opt_keywords}")
    
    # 输出 JSON 供后续流程使用
    output_file = "/tmp/geo_check_result.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump({
            "checked_at": datetime.now().isoformat(),
            "results": results,
            "needs_optimization": needs_opt_keywords,
        }, f, ensure_ascii=False, indent=2)
    print(f"\n详细结果已保存到: {output_file}")
    return needs_opt_keywords


if __name__ == "__main__":
    main()
