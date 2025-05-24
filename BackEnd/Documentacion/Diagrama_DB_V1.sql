CREATE TABLE `User` (
  `id` integer PRIMARY KEY,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `typeUser` ENUM ('ALUMNO', 'ENCARGADO', 'ADMIN1', 'ADMIN2'),
  `email` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);
