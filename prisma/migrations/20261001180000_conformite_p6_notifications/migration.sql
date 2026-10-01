-- Conformité CDC — Phase 6 (notifications, §11.2).

-- Rappels envoyés une seule fois : avant la fin d'un essai, avant une session de formation.
ALTER TABLE `abonnements_module` ADD COLUMN `rappel_expiration_envoye_le` DATETIME(3) NULL;
ALTER TABLE `reservations` ADD COLUMN `rappel_envoye_le` DATETIME(3) NULL;

-- Délais des rappels : le CDC ne les fixe pas ; valeurs par défaut modifiables
-- par l'administrateur dans /admin/parametres.
INSERT IGNORE INTO `parametres_plateforme` (`id`, `cle`, `valeur`, `type`, `description`, `valeur_defaut`, `created_at`, `updated_at`) VALUES
  ('param-delai-rappel-essai', 'delai_rappel_essai_jours', '7', 'entier', 'Nombre de jours avant la fin d''un essai gratuit où le rappel est envoyé au responsable du compte.', '7', NOW(3), NOW(3)),
  ('param-delai-rappel-formation', 'delai_rappel_formation_jours', '2', 'entier', 'Nombre de jours avant une session de formation où le rappel est envoyé au participant.', '2', NOW(3), NOW(3));
