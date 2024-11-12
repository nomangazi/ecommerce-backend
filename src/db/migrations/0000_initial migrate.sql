CREATE TABLE `log_request` (
	`id` int AUTO_INCREMENT NOT NULL,
	`hostname` varchar(255) NOT NULL,
	`method` varchar(20) NOT NULL,
	`url` varchar(1000) NOT NULL,
	`ip` varchar(255) NOT NULL DEFAULT '0',
	`createdAt` int NOT NULL DEFAULT 1731428091,
	`updatedAt` int NOT NULL DEFAULT 1731428091,
	`deletedAt` int NOT NULL DEFAULT 0,
	CONSTRAINT `log_request_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`shopId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`nikeName` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL DEFAULT 'customer',
	`email` varchar(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`currency` varchar(255) NOT NULL,
	`photoUrl` varchar(1000) NOT NULL,
	`permission` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`localeLanguage` varchar(255) NOT NULL,
	`status` varchar(255) NOT NULL DEFAULT 'active',
	`ipInfo` varchar(255) NOT NULL,
	`creator` int NOT NULL DEFAULT 0,
	`createdAt` int NOT NULL DEFAULT 1731428091,
	`updatedAt` int NOT NULL DEFAULT 1731428091,
	`deletedAt` int NOT NULL DEFAULT 0,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
