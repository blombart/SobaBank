
--Creation de l'admin--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Administrateur', null, 'admin@mail.com', 'admin', 'admin', 'admin', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--Creation du client demandeur--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Client', null, 'client@mail.com', 'client', 'client', 'client', 'client', NULL, NULL, '0321546585', 'lille', b'1', '2', 'marié');

--Creation de compte --
INSERT INTO `sbdb`.`compte` (`type_compte`, `id`, `dateCreation`, `decouvertAutorise`, `numCompte`, `rib`, `solde`, `tauxAgios`, `montantRemu`, `tauxInteret`) VALUES ('Compte', null, '2018-02-01 00:00:00', '0', '0001', 'Fr2154658794456521', '500', '10', NULL, NULL);
INSERT INTO `sbdb`.`compte` (`type_compte`, `id`, `dateCreation`, `decouvertAutorise`, `numCompte`, `rib`, `solde`, `tauxAgios`, `montantRemu`, `tauxInteret`) VALUES ('CompteEpargne', null, '2017-05-17 00:00:00', '0', '0002', 'Fr2154658756458481', '1500', '0', '500', '13');

--Liaison des comtptes 1 et 2 avec le client n°4
INSERT INTO `sbdb`.`user_compte` (`User_id`, `comptes_id`) VALUES ('2', '1');
INSERT INTO `sbdb`.`user_compte` (`User_id`, `comptes_id`) VALUES ('2', '2');



