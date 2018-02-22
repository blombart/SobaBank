
--Creation de l'admin--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Administrateur', null, 'admin@mail.com', 'admin', 'admin', 'admin', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--Creation de l'agent--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Agent', null, 'lombart@mail.com', '1234', 'Lombart', 'benjamin', 'agent', '2018-02-01 00:00:00', 'A002', NULL, NULL, NULL, NULL, NULL),('Agent', 5, 'sta@mail.com', '1234', 'Sta', 'Omar', 'agent', '2018-02-11 00:00:00', 'A005', NULL, NULL, NULL, NULL, NULL);

--Creation du client demandeur--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Client', null, 'client@mail.com', 'client', 'client', 'client', 'client', NULL, NULL, '0321546585', 'lille', b'0', '2', 'marié');

--Creation de la demande d'ouverture de compte n°1 contenant le client precedent n°3--
INSERT INTO `sbdb`.`demandeouverturecompte` (`id`, `Status`, `dateAffectation`, `dateDemande`, `idClient`, `isAffected`, `isValid`) VALUES (null, 'Non traitee', NULL, '2018-02-21 00:00:00', '3', b'0', NULL);

--Creation d'un client--
INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Client', '4', 'toto@mail.com', 'client', 'OTOT', 'toto', 'client', NULL, NULL, '0321545685', '135 avenue de bretagne 59000 LILLE', b'1', '3', 'pacsé');
--Creation de compte --
INSERT INTO `sbdb`.`compte` (`type_compte`, `id`, `dateCreation`, `decouvertAutorise`, `numCompte`, `rib`, `solde`, `tauxAgios`, `montantRemu`, `tauxInteret`) VALUES ('Compte', null, '2018-02-01 00:00:00', '0', '0001', 'Fr2154658794456521', '500', '10', NULL, NULL);
INSERT INTO `sbdb`.`compte` (`type_compte`, `id`, `dateCreation`, `decouvertAutorise`, `numCompte`, `rib`, `solde`, `tauxAgios`, `montantRemu`, `tauxInteret`) VALUES ('CompteEpargne', null, '2017-05-17 00:00:00', '0', '0002', 'Fr2154658756458481', '1500', '0', '500', '13');

--Liaison des comtptes 1 et 2 avec le client n°4
INSERT INTO `sbdb`.`user_compte` (`User_id`, `comptes_id`) VALUES ('4', '1');
INSERT INTO `sbdb`.`user_compte` (`User_id`, `comptes_id`) VALUES ('4', '2');

--Creation de demande
INSERT INTO `sbdb`.`demande` (`type_demande`, `id`, `dateDemande`, `libelle`, `status`, `newCompte_id`) VALUES ('chequier', 'null', '2018-02-08 00:00:00', 'demande de chequier', 'Non traitee', NULL),('chequier', '2', '2018-02-06 00:00:00', 'demande de chequier', 'Traitee', NULL);

--Liaision des demandes de chequier avec le client 4
INSERT INTO `sbdb`.`user_demande` (`User_id`, `demandes_id`) VALUES ('4', '1'), ('4', '2');

--liaison client 4 avec l'agent 2
INSERT INTO `sbdb`.`user_user` (`User_id`, `clients_id`) VALUES ('2', '4');

