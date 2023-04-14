CREATE TABLE `Post` (
	`word` varchar(191) NOT NULL,
	`definition` varchar(191) NOT NULL,
	`example` varchar(191),
	`authorName` varchar(191),
	`createdAt` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL
);
