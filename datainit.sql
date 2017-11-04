SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Records of asignaciones
-- ----------------------------
INSERT INTO `asignaciones` VALUES ('2017-10-07', NULL, NULL, '2:00 AM', NULL, 'mayra pedraza', '84745', '10.4913577', 'cll 4a #20a-91', 'Valledupar, Cesar', '-73.26914190000002', 'vigente', 500, 1, 1, 1, '2017-10-06 01:59:42');
INSERT INTO `asignaciones` VALUES ('2017-10-06', NULL, NULL, '4:00 AM', NULL, 'Marcela Daza Ramirez', '3005181402', '10.4913577', 'Cll 4A #20a-91', 'Valledupar, Cesar', '-73.26914190000002', 'vigente', 0, 5, 2, 2, '2017-10-06 03:07:11');
INSERT INTO `asignaciones` VALUES ('2017-10-06', NULL, NULL, '10:00 AM', NULL, 'Universidad Popular del cesar', '77589890', '10.4501396', 'diag 21 #29-92', 'Valledupar, Cesar', '-73.26914190000002', 'vigente', 0, 5, 2, 3, '2017-10-06 09:47:09');
INSERT INTO `asignaciones` VALUES ('2017-10-07', '2017-10-17', NULL, '8:33 AM', '20:18 PM', 'Bernardo Campo', '566', '10.4512434', 'Cll 39 #5A-21', 'Valledupar, Cesar', '-73.2330814', 'finalizado', 27, 1, 1, 4, '2017-10-07 08:34:56');
INSERT INTO `asignaciones` VALUES ('2017-10-07', NULL, NULL, '11:30 AM', NULL, 'Mayra Pedraza', '3120987876', '10.4836168', 'cl. 4a #13', 'Valledupar, Cesar', '-73.27069', 'vigente', 0, 1, 1, 5, '2017-10-07 10:46:38');
INSERT INTO `asignaciones` VALUES ('2017-10-07', NULL, NULL, '12:00 AM', NULL, 'Jose Soto', '3015941826', '10.4836168', 'cl. 4a #13', 'Valledupar, Cesar', '-73.27069', 'vigente', 0, 2, 1, 6, '2017-10-07 11:38:13');
INSERT INTO `asignaciones` VALUES ('2017-10-07', NULL, NULL, '11:57 AM', NULL, 'Jose Miguel Soto Acosta', '3015941826', '10.4836168', 'cl 4a #13', 'Valledupar, Cesar', '-73.27069', 'vigente', 0, 2, 1, 7, '2017-10-07 11:58:07');
INSERT INTO `asignaciones` VALUES ('2017-10-07', NULL, NULL, '2:25 PM', NULL, 'Jose Soto', '3015941826', '10.4836168', 'Cl. 4a #13', 'Valledupar, Cesar', '-73.27069', 'vigente', 36, 6, 1, 8, '2017-10-07 14:24:25');
INSERT INTO `asignaciones` VALUES ('2017-10-07', NULL, NULL, '2:25 PM', NULL, 'Jose Soto', '3015941826', '10.4836168', 'Cl. 4a #13', 'Valledupar, Cesar', '-73.27069', 'vigente', 120, 1, 1, 9, '2017-10-07 14:42:24');

-- ----------------------------
-- Records of empleados
-- ----------------------------
INSERT INTO `empleados` VALUES ('123456789', 'Mayra Alejandra', 'Pedraza Moya', NULL, '55550495', '1983-08-16', '2017-08-15', 'Cll 39 #5A-21 urbanizacion panama', 'mayra@mayra.com', 'ocupado', 1, 'ILLR-4059', NULL, 2, 8, 2, '2017-08-15 08:12:31', '2017-10-07 11:58:07');
INSERT INTO `empleados` VALUES ('1234567888', 'Juan Manuel', 'Perez Bernier', NULL, '3018878909', '1999-09-22', '2017-10-06', 'cll 30 #20-30 Alamos 1', 'juanma@hotmail.com', 'disponible', 1, 'AK2-332', 'KS:33:44:A2:45:AS', 2, 9, 3, '2017-10-06 02:21:36', '2017-10-06 02:21:36');
INSERT INTO `empleados` VALUES ('1887384948', 'Cristiam David', 'Mendoza Ramirez', NULL, '3153892837', '1962-09-13', '2001-08-07', 'Cll 30 #30-04', 'cdaviramirez@hotmail.com', 'disponible', 0, 'QEO-309', '12:34:AS:54:A4:34', 2, 10, 4, '2017-10-06 02:54:14', '2017-10-07 12:21:05');
INSERT INTO `empleados` VALUES ('893849873759', 'Julian Andres', 'Fernandez Arregoces', '8jnTtRju9pcnIZdxHFPN6tZE5.png', '3005181402', '1974-09-18', '2002-02-12', 'Mz 6 casa 1 Alamos 2', 'julianfernandez@gmail.com', 'ocupado', 1, 'KIO-299', '00:21:13:00:A6:99', 1, 11, 5, '2017-10-06 02:58:36', '2017-10-06 10:30:31');
INSERT INTO `empleados` VALUES ('123456788', 'Alejandra', 'Pedraza', NULL, '3224988948', '1961-10-04', '1998-03-04', 'Cll 4a #13 valledupar cesar', 'alepedraza@hotmail.com', 'ocupado', 1, 'HUE-233', '00:21:13:00:A6:99', 1, 12, 6, '2017-10-07 14:21:20', '2017-10-07 14:24:25');

-- ----------------------------
-- Records of empresas
-- ----------------------------
INSERT INTO `empresas` VALUES ('123456-7', 'Empresa uno', NULL, NULL, NULL, NULL, NULL, 1, 3, 1, '2017-07-18 11:16:15');
INSERT INTO `empresas` VALUES ('938495-23', 'Empresa dos', NULL, NULL, NULL, NULL, NULL, 1, 4, 2, '2017-07-18 11:24:13');
INSERT INTO `empresas` VALUES ('654321-5', 'Empresa tres', NULL, NULL, NULL, NULL, NULL, 0, 5, 3, '2017-07-18 11:29:24');

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', '$2y$10$pDRyzcGHDc9jkwkgS/UoQ.P5gyLtxcHtdQb86heqoH3v.WcK/VbMq', 'jomisoac@gmail.com', 'SUPER_ADM', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `user` VALUES ('empresa1', '$2a$10$bUCxDtVuqE3ud3nl17KBCuPo.rRvIgOHO.P9qD43BWqFLm2wTeqWm', NULL, 'EMPRESA', NULL, 3, '2017-07-18 11:16:15', '2017-07-18 11:16:15');
INSERT INTO `user` VALUES ('empresa2', '$2a$10$sel5UEdAcgU9s5FfEDO6XuGAE1O4oXdYBs.exP9hTn6faV4xBVhzW', NULL, 'EMPRESA', NULL, 4, '2017-07-18 11:24:13', '2017-07-18 11:24:13');
INSERT INTO `user` VALUES ('empresa3', '$2a$10$.gRNc4jnGYTXWAz83BmIa.mFLEDSmAyOSfUJTaQpcA.YRbh61jeS.', NULL, 'EMPRESA', NULL, 5, '2017-07-18 11:29:24', '2017-07-18 11:29:24');
INSERT INTO `user` VALUES ('1120746041', '$2a$10$bUCxDtVuqE3ud3nl17KBCuPo.rRvIgOHO.P9qD43BWqFLm2wTeqWm', 'jomisoac@gmail.com', 'EMPLEADO', 'null', 7, '2017-07-18 23:42:47', '2017-10-18 16:47:31');
INSERT INTO `user` VALUES ('123456789', '$2a$10$ojhNJ4LHd2UANZUqdoldCuojWl/mEiSFOzPIcQQUjrem2F092RriO', 'fulano@fulano.com', 'EMPLEADO', 'c3WkqbhwuzQ:APA91bEmyyWFVafhUeKWbrOkgmvWb-66JXgvBk-xsOfu1MT5JBsXgqUBSyh_wQPuyGrtXIftft9sxh4tEsdFEBuFHoEexJnRoYcKyUJH7mUtw5XKMVsoIO5U2b88JXeaFDmqcG2GBHXi', 8, '2017-08-15 08:12:31', '2017-10-07 15:41:11');
INSERT INTO `user` VALUES ('1234567888', '$2a$10$KqlvIQ1KBweVCRtXAxbma.SYQyZ8bURwrVrSdd6SyzAtcjfWQcsEi', 'juanma@hotmail.com', 'EMPLEADO', NULL, 9, '2017-10-06 02:21:36', '2017-10-06 02:21:36');
INSERT INTO `user` VALUES ('1887384948', '$2a$10$hdCEcjjraPifs8RGDD0gMObpzkL4bBhYm0SAgUqH1ugYNmGvzqpGS', 'cdaviramirez@hotmail.com', 'EMPLEADO', NULL, 10, '2017-10-06 02:54:14', '2017-10-06 02:54:14');
INSERT INTO `user` VALUES ('893849873759', '$2a$10$.tEN5Dze57VsjqLNpe5CMuxTJy17OfS3r7B0GpJqxv0KaGAN9BAaG', 'julianfernandez@gmail.com', 'EMPLEADO', 'fyQNLYBqWs4:APA91bGq_6vnbOMIfMGcT5MKAR8jx6KgHahFmGL2FfLwFcSnSOnK_cmzI6e8tDzcxLfr0VukOq8Aa-_hspSWNSCJvjLvX8UXL9dBbVpYsQxizD6VwWVAQREfuC_joOUJJysrudMbxecG', 11, '2017-10-06 02:58:36', '2017-10-06 10:59:10');
INSERT INTO `user` VALUES ('123456788', '$2a$10$NhHGBnJ/w/Z.X9GveLp8RuEChYhlR0WioHdCg4yWpVC3CdrIOhUTe', 'alepedraza@hotmail.com', 'EMPLEADO', 'fIBAu2rO35o:APA91bHX-6nk8CkxOynVvi_YW0TAio1Q_iHKQqZ75ZCOy7HTtkNYYgIgCXB1Ngt3XBRtYvtuTk1pNeRo9YaqIrRyOtFcDTlsW71DIV4Ae0dHSiW8IIxj1cvSjNsVNJ1LlYDmYqcwGWfs', 12, '2017-10-07 14:21:20', '2017-10-07 16:01:15');

SET FOREIGN_KEY_CHECKS = 1;