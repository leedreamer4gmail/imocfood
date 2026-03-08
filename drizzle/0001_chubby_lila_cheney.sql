CREATE TABLE `news_articles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titleZh` varchar(500) NOT NULL,
	`titleEn` varchar(500),
	`contentZh` text NOT NULL,
	`contentEn` text,
	`summaryZh` varchar(500),
	`summaryEn` varchar(500),
	`author` varchar(100),
	`published` boolean NOT NULL DEFAULT false,
	`coverImageUrl` text,
	`category` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `news_articles_id` PRIMARY KEY(`id`)
);
