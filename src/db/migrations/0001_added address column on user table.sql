ALTER TABLE `log_request` MODIFY COLUMN `createdAt` int NOT NULL DEFAULT 1731432496;--> statement-breakpoint
ALTER TABLE `log_request` MODIFY COLUMN `updatedAt` int NOT NULL DEFAULT 1731432496;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `createdAt` int NOT NULL DEFAULT 1731432496;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `updatedAt` int NOT NULL DEFAULT 1731432496;--> statement-breakpoint
ALTER TABLE `user` ADD `address` text NOT NULL;