
--Creation de l'admin--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Administrateur', 1, 'admin@mail.com', 'admin', 'admin', 'admin', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
--Creation de l'agent--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Agent', 2, 'agent@mail.com', '1234', 'Lombart', 'benjamin', 'agent', '2018-02-01 00:00:00', 'A001', NULL, NULL, NULL, NULL, NULL);
--Creation du client demandeur--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Client', 3, 'client@mail.com', 'client', 'client', 'client', 'client', NULL, NULL, '0321546585', 'lille', b'0', '2', 'marié');
--Creation de la demanded'ouverture de compte contenant le client precedent
INSERT INTO `sbdb`.`demandeouverturecompte` (`id`, `Status`, `dateAffectation`, `dateDemande`, `idClient`, `isAffected`, `isValid`) VALUES (NULL, 'Non traitee', NULL, '2018-02-21 00:00:00', '3', b'0', NULL);

--Creation d'un client--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Client', '4', 'toto@mail.com', 'client', 'OTOT', 'toto', 'client', NULL, NULL, '0321545685', '135 avenue de bretagne 59000 LILLE', b'1', '3', 'pacsé');
INSERT INTO `sbdb`.`compte` (`type_compte`, `id`, `dateCreation`, `decouvertAutorise`, `numCompte`, `rib`, `solde`, `tauxAgios`, `montantRemu`, `tauxInteret`) VALUES ('Compte', NULL, '2018-02-01 00:00:00', '0', '0001', 'Fr2154658794456521', '500', '10', NULL, NULL);
INSERT INTO `sbdb`.`compte` (`type_compte`, `id`, `dateCreation`, `decouvertAutorise`, `numCompte`, `rib`, `solde`, `tauxAgios`, `montantRemu`, `tauxInteret`) VALUES ('CompteEpargne', NULL, '2017-05-17 00:00:00', '0', '0002', 'Fr2154658756458481', '1500', '0', '500', '13');
INSERT INTO `sbdb`.`user_compte` (`User_id`, `comptes_id`) VALUES ('4', '1');
INSERT INTO `sbdb`.`user_compte` (`User_id`, `comptes_id`) VALUES ('4', '2');