INSERT INTO `sbdb`.`user` (`type`, `id`, `email`, `mdp`, `nom`, `prenom`, `role`, `dateDebutContrat`, `matricule`, `numTel`, `adresse`, `isClient`, `nbEnfants`, `situationMatrimonial`) VALUES ('Client', NULL, 'oma@mail.com', '1234', 'Omar', 'Sta', 'client', '2018-02-01 00:00:00', NULL, '023154578', '3 rue de lile', b'1', '1', 'marie');

INSERT INTO `sbdb`.`compte` (`type_compte`, `id`, `dateCreation`, `decouvertAutorise`, `numCompte`, `rib`, `solde`, `tauxAgios`, `montantRemu`, `tauxInteret`) VALUES ('Compte', NULL, '2018-02-02 00:00:00', '100', '1', '123456465465', '0', '0', NULL, NULL);

INSERT INTO `sbdb`.`user_compte` (`user_id`, `comptes_id`) VALUES ('1', '1');