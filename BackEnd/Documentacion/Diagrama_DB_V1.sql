CREATE TABLE `Users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `typeUsers` ENUM ('ALUMNO', 'ENCARGADO', 'ADMIN1', 'ADMIN2'),
  `email` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);
