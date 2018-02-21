INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Client', NULL, 'oma@mail.com', '1234', 'Omar', 'Sta', 'client', '2018-02-01 00:00:00', NULL, '023154578', '3 rue de lile', b'1', '1', 'marie');

INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Administrateur', NULL, 'benj@mail.com', '1234', 'Benjamin', 'Lombart', 'admin', '2018-02-01 00:00:00', NULL, '023157845', '3 rue de lomme', b'1', '1', 'pacsé');

INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Agent', NULL, 'abder@mail.com', '1234', 'Abder', 'Hadjaz', 'agent', '2018-02-01 00:00:00', NULL, '023157845', '3 rue de lomme', b'1', '1', 'pacsé');


INSERT INTO `sbdb`.`compte` (`type_compte`, `id`, `dateCreation`, `decouvertAutorise`, `numCompte`, `rib`, `solde`, `tauxAgios`, `montantRemu`, `tauxInteret`) VALUES ('Compte', NULL, '2018-02-02 00:00:00', '100', '1', '123456465465', '0', '0', NULL, NULL);

INSERT INTO `sbdb`.`user_compte` (`user_id`, `comptes_id`) VALUES ('1', '1');

--Creation demande chequier
INSERT INTO `sbdb`.`demande` (`type_demande`, `id`, `dateDemande`, `libelle`, `status`, `newCompte_id`) VALUES ('chequier', 10, '2018-02-14 00:00:00', 'demande chequier', 'non traitee', NULL);
INSERT INTO `sbdb`.`demande` (`type_demande`, `id`, `dateDemande`, `libelle`, `status`, `newCompte_id`) VALUES ('chequier', 20, '2018-02-14 00:00:00', 'demande chequier', 'non traitee', NULL);
INSERT INTO `sbdb`.`demande` (`type_demande`, `id`, `dateDemande`, `libelle`, `status`, `newCompte_id`) VALUES ('chequier', 30, '2018-02-14 00:00:00', 'demande chequier', 'non traitee', NULL);
INSERT INTO `sbdb`.`demande` (`type_demande`, `id`, `dateDemande`, `libelle`, `status`, `newCompte_id`) VALUES ('chequier', 40, '2018-02-14 00:00:00', 'demande chequier', 'non traitee', NULL);
INSERT INTO `sbdb`.`demande` (`type_demande`, `id`, `dateDemande`, `libelle`, `status`, `newCompte_id`) VALUES ('chequier', 50, '2018-02-14 00:00:00', 'demande chequier', 'non traitee', NULL);

--liaison demande-client
INSERT INTO `sbdb`.`user_demande` (`user_id`, `demandes_id`) VALUES ('1', '10');
INSERT INTO `sbdb`.`user_demande` (`user_id`, `demandes_id`) VALUES ('1', '20');
INSERT INTO `sbdb`.`user_demande` (`user_id`, `demandes_id`) VALUES ('1', '30');
INSERT INTO `sbdb`.`user_demande` (`user_id`, `demandes_id`) VALUES ('1', '40');
INSERT INTO `sbdb`.`user_demande` (`user_id`, `demandes_id`) VALUES ('1', '50');

--liaison agent client
INSERT INTO `sbdb`.`user_user` (`user_id`, `clients_id`) VALUES ('3', '1');