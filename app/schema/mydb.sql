-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Час створення: Гру 23 2014 р., 18:41
-- Версія сервера: 5.6.20
-- Версія PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База даних: `mydb`
--

-- --------------------------------------------------------

--
-- Структура таблиці `patients`
--

CREATE TABLE IF NOT EXISTS `patients` (
`idpatients` int(11) NOT NULL,
  `card` varchar(45) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Дамп даних таблиці `patients`
--

INSERT INTO `patients` (`idpatients`, `card`, `name`, `userid`) VALUES
(1, 'A25', 'Петров Сергей Юрьевич', 1),
(2, 'B12', 'Сергиенко Иван Игоревич', 2),
(6, '3452', 'Михайленко Сергей Олегович', 2);

-- --------------------------------------------------------

--
-- Структура таблиці `pressure`
--

CREATE TABLE IF NOT EXISTS `pressure` (
`idpressure` int(11) NOT NULL,
  `idpatients` int(11) NOT NULL,
  `date` varchar(45) NOT NULL,
  `systolic` int(11) NOT NULL,
  `diastolic` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Дамп даних таблиці `pressure`
--

INSERT INTO `pressure` (`idpressure`, `idpatients`, `date`, `systolic`, `diastolic`) VALUES
(1, 1, '10.02(у)', 140, 90),
(2, 1, '10.02(в)', 145, 90),
(3, 1, '10.03(у)', 120, 80),
(4, 1, '10.03(в)', 130, 90),
(5, 1, '10.04(у)', 140, 80),
(6, 1, '10.04(в)', 120, 90),
(7, 2, '10.02(у)', 170, 110),
(8, 2, '10.02(в)', 150, 110),
(9, 2, '10.03(у)', 130, 90),
(10, 2, '10.04(у)', 120, 90),
(12, 2, '10.04(в)', 145, 110),
(13, 6, '10.01(у)', 140, 80),
(14, 6, '10.01(в)', 120, 80),
(15, 6, '10.02(у)', 120, 70),
(16, 6, '10.02(в)', 110, 70);

-- --------------------------------------------------------

--
-- Структура таблиці `pulse`
--

CREATE TABLE IF NOT EXISTS `pulse` (
`idpulse` int(11) NOT NULL,
  `idpatients` int(11) NOT NULL,
  `date` varchar(45) NOT NULL,
  `pulse` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- Дамп даних таблиці `pulse`
--

INSERT INTO `pulse` (`idpulse`, `idpatients`, `date`, `pulse`) VALUES
(1, 1, '10.02(у)', 78),
(2, 1, '10.02(в)', 87),
(3, 1, '10.03(у)', 70),
(4, 1, '10.03(в)', 70),
(5, 1, '10.04(у)', 80),
(6, 1, '10.04(в)', 80),
(7, 2, '10.02(у)', 70),
(8, 2, '10.02(в)', 90),
(9, 2, '10.03(у)', 70),
(10, 2, '10.04(у)', 80),
(11, 2, '10.04(в)', 100),
(12, 2, '10.05(у)', 99),
(13, 6, '10.01(у)', 70),
(14, 6, '10.02(в)', 80),
(15, 6, '10.03(у)', 85),
(16, 6, '10.04(в)', 86),
(17, 6, '10.05(у)', 87),
(18, 6, '10.05(в)', 82),
(19, 1, '10.05(у)', 72);

-- --------------------------------------------------------

--
-- Структура таблиці `temparature`
--

CREATE TABLE IF NOT EXISTS `temparature` (
`idtemparature` int(11) NOT NULL,
  `date` varchar(45) DEFAULT NULL,
  `temparature` double DEFAULT NULL,
  `patients_idpatients` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=34 ;

--
-- Дамп даних таблиці `temparature`
--

INSERT INTO `temparature` (`idtemparature`, `date`, `temparature`, `patients_idpatients`) VALUES
(1, '10.02(у)', 37.3, 1),
(2, '10.02(в)', 37.5, 1),
(3, '10.02(у)', 36.6, 2),
(4, '10.02(в)', 37.3, 2),
(5, '10.03(у)', 37.6, 1),
(6, '10.03(в)', 37.4, 1),
(7, '10.04(у)', 37.2, 1),
(8, '10.04(в)', 37, 1),
(9, '10.03(у)', 37.8, 2),
(10, '10.03(в)', 38.2, 2),
(11, '10.04(у)', 38.9, 2),
(12, '10.04(в)', 37.2, 2),
(13, '10.02(в)', 37.2, 6),
(14, '10.03(у)', 37.1, 6),
(15, '10.03(в)', 36.6, 6),
(16, '10.04(у)', 37.6, 6),
(17, '10.05(в)', 37.2, 6),
(18, '10.06(у)', 37.6, 6),
(19, '10.06(в)', 36.8, 6),
(20, '10.07(у)', 36.6, 6),
(21, '10.07(в)', 36.8, 6),
(22, '10.08(у)', 37, 6),
(23, '10.05(у)', 37.2, 1),
(24, '10.04(у)', 37.3, 2),
(25, '10.04(в)', 37.4, 2),
(26, '10.05(в)', 37.3, 1),
(27, '10.05(у)', 37.2, 1),
(28, '10.05(у)', 36.9, 1),
(29, '10.05(у)', 37.2, 2),
(30, '10.05(в)', 36.8, 2),
(31, '10.06(у)', 38.1, 1),
(32, '10.06(e)', 36.6, 2),
(33, '10.06(у)', 37.9, 1);

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`userid` int(11) NOT NULL,
  `login` varchar(120) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`userid`, `login`, `password`) VALUES
(1, 'admin', 'admin'),
(2, 'myadmin', '1111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
 ADD PRIMARY KEY (`idpatients`);

--
-- Indexes for table `pressure`
--
ALTER TABLE `pressure`
 ADD PRIMARY KEY (`idpressure`), ADD KEY `idpatients` (`idpatients`);

--
-- Indexes for table `pulse`
--
ALTER TABLE `pulse`
 ADD PRIMARY KEY (`idpulse`), ADD KEY `idpatients` (`idpatients`);

--
-- Indexes for table `temparature`
--
ALTER TABLE `temparature`
 ADD PRIMARY KEY (`idtemparature`,`patients_idpatients`), ADD KEY `fk_temparature_patients_idx` (`patients_idpatients`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`userid`), ADD UNIQUE KEY `login` (`login`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
MODIFY `idpatients` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `pressure`
--
ALTER TABLE `pressure`
MODIFY `idpressure` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `pulse`
--
ALTER TABLE `pulse`
MODIFY `idpulse` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `temparature`
--
ALTER TABLE `temparature`
MODIFY `idtemparature` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `pressure`
--
ALTER TABLE `pressure`
ADD CONSTRAINT `pressure_ibfk_1` FOREIGN KEY (`idpatients`) REFERENCES `patients` (`idpatients`);

--
-- Обмеження зовнішнього ключа таблиці `pulse`
--
ALTER TABLE `pulse`
ADD CONSTRAINT `pulse_ibfk_1` FOREIGN KEY (`idpatients`) REFERENCES `patients` (`idpatients`);

--
-- Обмеження зовнішнього ключа таблиці `temparature`
--
ALTER TABLE `temparature`
ADD CONSTRAINT `fk_temparature_patients` FOREIGN KEY (`patients_idpatients`) REFERENCES `patients` (`idpatients`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
