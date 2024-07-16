-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 08:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recruitment_wmw_thaksin_p`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` char(2) NOT NULL,
  `admin_user` varchar(30) NOT NULL,
  `admin_password` varchar(255) NOT NULL,
  `admin_Fname` varchar(25) NOT NULL,
  `admin_Lname` varchar(25) NOT NULL,
  `admin_image` varchar(100) DEFAULT NULL,
  `admin_tel` char(10) NOT NULL,
  `admin_email` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_user`, `admin_password`, `admin_Fname`, `admin_Lname`, `admin_image`, `admin_tel`, `admin_email`, `created_at`, `updated_at`) VALUES
('01', 'warawut_TD', '25d55ad283aa400af464c76d713c07ad', 'warawut', 'ninrat', 'image1', '0973099633', 'warawut@gmail.com', '2024-07-16 03:30:13', '2024-07-16 03:30:13'),
('02', 'disaya', 'e10adc3949ba59abbe56e057f20f883e', 'Ditsaya', 'Khongdee', 'image2', '0973078888', 'Disaya@gmail.com', '2024-07-16 06:32:32', '2024-07-16 06:32:32');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `PROJECTID` int(11) NOT NULL,
  `Projects` varchar(30) NOT NULL,
  `FILE` varchar(100) NOT NULL,
  `DATE_START` timestamp NULL DEFAULT current_timestamp(),
  `DATE_LASTTIME` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `PROJECTID` int(11) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `DATE` date NOT NULL,
  `Sex` enum('ชาย','หญิง','อื่นๆ') NOT NULL,
  `Rank` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `PROJECTID`, `Name`, `DATE`, `Sex`, `Rank`) VALUES
(1, 1, 'Peter', '2024-07-16', 'ชาย', 'Ceo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`PROJECTID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `PROJECTID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
