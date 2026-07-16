module.exports. PROFESSIONS = {
  basic: [
    "Artisan",
    "Brawler",
    "Entertainer",
    "Gladiator",
    "Marksman",
    "Medic",
    "Scout",
    "Politician",
  ],
  elite: [
    "Architect",
    "Armorsmith",
    "Bio-Engineer",
    "Bounty Hunter",
    "Combat Medic",
    "Carbineer",
    "Chef",
    "Creature Handler",
    "Commando",
    "Dancer",
    "Doctor",
    "Droid Engineer",
    "Fencer",
    "Image Designer",
    "Merchant",
    "Musician",
    "Pikeman",
    "Pistoleer",
    "Ranger",
    "Rifleman",
    "Smuggler",
    "Squad Leader",
    "Swordsman",
    "Tailor",
    "Teras Kasi Artist",
    "Weaponsmith",
  ],
  forceSensitive: [
    "Combat Prowess",
    "Enhanced Reflexes",
    "Crafting Mastery",
    "Heightened Senses",
  ],
  jedi: ["Lightsaber", "Powers", "Healing", "Enchancements", "Defender"],
};


module.exports. ALL_PROFESSIONS = {
  social_entertainer: {
    master_links: [],
    master: "social_entertainer_master",
    branch_1: {
      links: ["social_imagedesigner"],
      skills: [
        "social_entertainer_hairstyle_01",
        "social_entertainer_hairstyle_02",
        "social_entertainer_hairstyle_03",
        "social_entertainer_hairstyle_04",
      ],
    },
    branch_2: {
      links: ["social_musician"],
      skills: [
        "social_entertainer_music_01",
        "social_entertainer_music_02",
        "social_entertainer_music_03",
        "social_entertainer_music_04",
      ],
    },
    branch_3: {
      links: ["social_dancer"],
      skills: [
        "social_entertainer_dance_01",
        "social_entertainer_dance_02",
        "social_entertainer_dance_03",
        "social_entertainer_dance_04",
      ],
    },
    branch_4: {
      links: ["social_musician", "social_dancer"],
      skills: [
        "social_entertainer_healing_01",
        "social_entertainer_healing_02",
        "social_entertainer_healing_03",
        "social_entertainer_healing_04",
      ],
    },
    novice: "social_entertainer_novice",
    novice_links: [""],
  },
  outdoors_scout: {
    master_links: ["outdoors_ranger"],
    master: "outdoors_scout_master",
    branch_1: {
      links: [
        "outdoors_creaturehandler",
        "combat_bountyhunter",
        "outdoors_squadleader",
      ],
      skills: [
        "outdoors_scout_movement_01",
        "outdoors_scout_movement_02",
        "outdoors_scout_movement_03",
        "outdoors_scout_movement_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "outdoors_scout_tools_01",
        "outdoors_scout_tools_02",
        "outdoors_scout_tools_03",
        "outdoors_scout_tools_04",
      ],
    },
    branch_3: {
      links: ["outdoors_creaturehandler", "outdoors_bio_engineer"],
      skills: [
        "outdoors_scout_harvest_01",
        "outdoors_scout_harvest_02",
        "outdoors_scout_harvest_03",
        "outdoors_scout_harvest_04",
      ],
    },
    branch_4: {
      links: ["outdoors_squadleader"],
      skills: [
        "outdoors_scout_camp_01",
        "outdoors_scout_camp_02",
        "outdoors_scout_camp_03",
        "outdoors_scout_camp_04",
      ],
    },
    novice: "outdoors_scout_novice",
    novice_links: [""],
  },
  science_medic: {
    master_links: ["science_doctor", "science_combatmedic"],
    master: "science_medic_master",
    branch_1: {
      links: [],
      skills: [
        "science_medic_injury_01",
        "science_medic_injury_02",
        "science_medic_injury_03",
        "science_medic_injury_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "science_medic_injury_speed_01",
        "science_medic_injury_speed_02",
        "science_medic_injury_speed_03",
        "science_medic_injury_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "science_medic_ability_01",
        "science_medic_ability_02",
        "science_medic_ability_03",
        "science_medic_ability_04",
      ],
    },
    branch_4: {
      links: ["outdoors_bio_engineer"],
      skills: [
        "science_medic_crafting_01",
        "science_medic_crafting_02",
        "science_medic_crafting_03",
        "science_medic_crafting_04",
      ],
    },
    novice: "science_medic_novice",
    novice_links: [""],
  },
  crafting_artisan: {
    master_links: [],
    master: "crafting_artisan_master",
    branch_1: {
      links: [
        "crafting_armorsmith",
        "crafting_weaponsmith",
        "crafting_architect",
        "crafting_droidengineer",
      ],
      skills: [
        "crafting_artisan_engineering_01",
        "crafting_artisan_engineering_02",
        "crafting_artisan_engineering_03",
        "crafting_artisan_engineering_04",
      ],
    },
    branch_2: {
      links: ["crafting_chef", "crafting_tailor"],
      skills: [
        "crafting_artisan_domestic_01",
        "crafting_artisan_domestic_02",
        "crafting_artisan_domestic_03",
        "crafting_artisan_domestic_04",
      ],
    },
    branch_3: {
      links: ["crafting_merchant"],
      skills: [
        "crafting_artisan_business_01",
        "crafting_artisan_business_02",
        "crafting_artisan_business_03",
        "crafting_artisan_business_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "crafting_artisan_survey_01",
        "crafting_artisan_survey_02",
        "crafting_artisan_survey_03",
        "crafting_artisan_survey_04",
      ],
    },
    novice: "crafting_artisan_novice",
    novice_links: [""],
  },
  combat_brawler: {
    master_links: [],
    master: "combat_brawler_master",
    branch_1: {
      links: ["combat_unarmed", "combat_smuggler", "combat_commando"],
      skills: [
        "combat_brawler_unarmed_01",
        "combat_brawler_unarmed_02",
        "combat_brawler_unarmed_03",
        "combat_brawler_unarmed_04",
      ],
    },
    branch_2: {
      links: ["combat_1hsword"],
      skills: [
        "combat_brawler_1handmelee_01",
        "combat_brawler_1handmelee_02",
        "combat_brawler_1handmelee_03",
        "combat_brawler_1handmelee_04",
      ],
    },
    branch_3: {
      links: ["combat_2hsword"],
      skills: [
        "combat_brawler_2handmelee_01",
        "combat_brawler_2handmelee_02",
        "combat_brawler_2handmelee_03",
        "combat_brawler_2handmelee_04",
      ],
    },
    branch_4: {
      links: ["combat_polearm"],
      skills: [
        "combat_brawler_polearm_01",
        "combat_brawler_polearm_02",
        "combat_brawler_polearm_03",
        "combat_brawler_polearm_04",
      ],
    },
    novice: "combat_brawler_novice",
    novice_links: [""],
  },
  combat_marksman: {
    master_links: ["combat_bountyhunter", "combat_commando"],
    master: "combat_marksman_master",
    branch_1: {
      links: ["combat_rifleman"],
      skills: [
        "combat_marksman_rifle_01",
        "combat_marksman_rifle_02",
        "combat_marksman_rifle_03",
        "combat_marksman_rifle_04",
      ],
    },
    branch_2: {
      links: ["combat_pistol", "combat_smuggler"],
      skills: [
        "combat_marksman_pistol_01",
        "combat_marksman_pistol_02",
        "combat_marksman_pistol_03",
        "combat_marksman_pistol_04",
      ],
    },
    branch_3: {
      links: ["combat_carbine"],
      skills: [
        "combat_marksman_carbine_01",
        "combat_marksman_carbine_02",
        "combat_marksman_carbine_03",
        "combat_marksman_carbine_04",
      ],
    },
    branch_4: {
      links: ["science_combatmedic", "outdoors_squadleader"],
      skills: [
        "combat_marksman_support_01",
        "combat_marksman_support_02",
        "combat_marksman_support_03",
        "combat_marksman_support_04",
      ],
    },
    novice: "combat_marksman_novice",
    novice_links: [""],
  },
  combat_rifleman: {
    master_links: [],
    master: "combat_rifleman_master",
    branch_1: {
      links: [],
      skills: [
        "combat_rifleman_accuracy_01",
        "combat_rifleman_accuracy_02",
        "combat_rifleman_accuracy_03",
        "combat_rifleman_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_rifleman_speed_01",
        "combat_rifleman_speed_02",
        "combat_rifleman_speed_03",
        "combat_rifleman_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_rifleman_ability_01",
        "combat_rifleman_ability_02",
        "combat_rifleman_ability_03",
        "combat_rifleman_ability_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_rifleman_support_01",
        "combat_rifleman_support_02",
        "combat_rifleman_support_03",
        "combat_rifleman_support_04",
      ],
    },
    novice: "combat_rifleman_novice",
    novice_links: ["combat_marksman"],
  },
  combat_pistol: {
    master_links: [],
    master: "combat_pistol_master",
    branch_1: {
      links: [],
      skills: [
        "combat_pistol_accuracy_01",
        "combat_pistol_accuracy_02",
        "combat_pistol_accuracy_03",
        "combat_pistol_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_pistol_speed_01",
        "combat_pistol_speed_02",
        "combat_pistol_speed_03",
        "combat_pistol_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_pistol_ability_01",
        "combat_pistol_ability_02",
        "combat_pistol_ability_03",
        "combat_pistol_ability_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_pistol_support_01",
        "combat_pistol_support_02",
        "combat_pistol_support_03",
        "combat_pistol_support_04",
      ],
    },
    novice: "combat_pistol_novice",
    novice_links: ["combat_marksman"],
  },
  combat_carbine: {
    master_links: [],
    master: "combat_carbine_master",
    branch_1: {
      links: [],
      skills: [
        "combat_carbine_accuracy_01",
        "combat_carbine_accuracy_02",
        "combat_carbine_accuracy_03",
        "combat_carbine_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_carbine_speed_01",
        "combat_carbine_speed_02",
        "combat_carbine_speed_03",
        "combat_carbine_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_carbine_ability_01",
        "combat_carbine_ability_02",
        "combat_carbine_ability_03",
        "combat_carbine_ability_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_carbine_support_01",
        "combat_carbine_support_02",
        "combat_carbine_support_03",
        "combat_carbine_support_04",
      ],
    },
    novice: "combat_carbine_novice",
    novice_links: ["combat_marksman"],
  },
  combat_unarmed: {
    master_links: [],
    master: "combat_unarmed_master",
    branch_1: {
      links: [],
      skills: [
        "combat_unarmed_accuracy_01",
        "combat_unarmed_accuracy_02",
        "combat_unarmed_accuracy_03",
        "combat_unarmed_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_unarmed_speed_01",
        "combat_unarmed_speed_02",
        "combat_unarmed_speed_03",
        "combat_unarmed_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_unarmed_ability_01",
        "combat_unarmed_ability_02",
        "combat_unarmed_ability_03",
        "combat_unarmed_ability_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_unarmed_support_01",
        "combat_unarmed_support_02",
        "combat_unarmed_support_03",
        "combat_unarmed_support_04",
      ],
    },
    novice: "combat_unarmed_novice",
    novice_links: ["combat_brawler"],
  },
  combat_1hsword: {
    master_links: [],
    master: "combat_1hsword_master",
    branch_1: {
      links: [],
      skills: [
        "combat_1hsword_accuracy_01",
        "combat_1hsword_accuracy_02",
        "combat_1hsword_accuracy_03",
        "combat_1hsword_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_1hsword_speed_01",
        "combat_1hsword_speed_02",
        "combat_1hsword_speed_03",
        "combat_1hsword_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_1hsword_ability_01",
        "combat_1hsword_ability_02",
        "combat_1hsword_ability_03",
        "combat_1hsword_ability_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_1hsword_support_01",
        "combat_1hsword_support_02",
        "combat_1hsword_support_03",
        "combat_1hsword_support_04",
      ],
    },
    novice: "combat_1hsword_novice",
    novice_links: ["combat_brawler"],
  },
  combat_2hsword: {
    master_links: [],
    master: "combat_2hsword_master",
    branch_1: {
      links: [],
      skills: [
        "combat_2hsword_accuracy_01",
        "combat_2hsword_accuracy_02",
        "combat_2hsword_accuracy_03",
        "combat_2hsword_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_2hsword_speed_01",
        "combat_2hsword_speed_02",
        "combat_2hsword_speed_03",
        "combat_2hsword_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_2hsword_ability_01",
        "combat_2hsword_ability_02",
        "combat_2hsword_ability_03",
        "combat_2hsword_ability_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_2hsword_support_01",
        "combat_2hsword_support_02",
        "combat_2hsword_support_03",
        "combat_2hsword_support_04",
      ],
    },
    novice: "combat_2hsword_novice",
    novice_links: ["combat_brawler"],
  },
  combat_polearm: {
    master_links: [],
    master: "combat_polearm_master",
    branch_1: {
      links: [],
      skills: [
        "combat_polearm_accuracy_01",
        "combat_polearm_accuracy_02",
        "combat_polearm_accuracy_03",
        "combat_polearm_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_polearm_speed_01",
        "combat_polearm_speed_02",
        "combat_polearm_speed_03",
        "combat_polearm_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_polearm_ability_01",
        "combat_polearm_ability_02",
        "combat_polearm_ability_03",
        "combat_polearm_ability_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_polearm_support_01",
        "combat_polearm_support_02",
        "combat_polearm_support_03",
        "combat_polearm_support_04",
      ],
    },
    novice: "combat_polearm_novice",
    novice_links: ["combat_brawler"],
  },
  social_dancer: {
    master_links: [],
    master: "social_dancer_master",
    branch_1: {
      links: [],
      skills: [
        "social_dancer_ability_01",
        "social_dancer_ability_02",
        "social_dancer_ability_03",
        "social_dancer_ability_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "social_dancer_wound_01",
        "social_dancer_wound_02",
        "social_dancer_wound_03",
        "social_dancer_wound_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "social_dancer_knowledge_01",
        "social_dancer_knowledge_02",
        "social_dancer_knowledge_03",
        "social_dancer_knowledge_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "social_dancer_shock_01",
        "social_dancer_shock_02",
        "social_dancer_shock_03",
        "social_dancer_shock_04",
      ],
    },
    novice: "social_dancer_novice",
    novice_links: ["social_entertainer"],
  },
  social_musician: {
    master_links: [],
    master: "social_musician_master",
    branch_1: {
      links: [],
      skills: [
        "social_musician_ability_01",
        "social_musician_ability_02",
        "social_musician_ability_03",
        "social_musician_ability_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "social_musician_wound_01",
        "social_musician_wound_02",
        "social_musician_wound_03",
        "social_musician_wound_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "social_musician_knowledge_01",
        "social_musician_knowledge_02",
        "social_musician_knowledge_03",
        "social_musician_knowledge_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "social_musician_shock_01",
        "social_musician_shock_02",
        "social_musician_shock_03",
        "social_musician_shock_04",
      ],
    },
    novice: "social_musician_novice",
    novice_links: ["social_entertainer"],
  },
  science_doctor: {
    master_links: [],
    master: "science_doctor_master",
    branch_1: {
      links: [],
      skills: [
        "science_doctor_wound_speed_01",
        "science_doctor_wound_speed_02",
        "science_doctor_wound_speed_03",
        "science_doctor_wound_speed_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "science_doctor_wound_01",
        "science_doctor_wound_02",
        "science_doctor_wound_03",
        "science_doctor_wound_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "science_doctor_ability_01",
        "science_doctor_ability_02",
        "science_doctor_ability_03",
        "science_doctor_ability_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "science_doctor_support_01",
        "science_doctor_support_02",
        "science_doctor_support_03",
        "science_doctor_support_04",
      ],
    },
    novice: "science_doctor_novice",
    novice_links: ["science_medic"],
  },
  outdoors_ranger: {
    master_links: [],
    master: "outdoors_ranger_master",
    branch_1: {
      links: [],
      skills: [
        "outdoors_ranger_movement_01",
        "outdoors_ranger_movement_02",
        "outdoors_ranger_movement_03",
        "outdoors_ranger_movement_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "outdoors_ranger_tracking_01",
        "outdoors_ranger_tracking_02",
        "outdoors_ranger_tracking_03",
        "outdoors_ranger_tracking_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "outdoors_ranger_harvest_01",
        "outdoors_ranger_harvest_02",
        "outdoors_ranger_harvest_03",
        "outdoors_ranger_harvest_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "outdoors_ranger_support_01",
        "outdoors_ranger_support_02",
        "outdoors_ranger_support_03",
        "outdoors_ranger_support_04",
      ],
    },
    novice: "outdoors_ranger_novice",
    novice_links: ["outdoors_scout"],
  },
  outdoors_creaturehandler: {
    master_links: [],
    master: "outdoors_creaturehandler_master",
    branch_1: {
      links: [],
      skills: [
        "outdoors_creaturehandler_taming_01",
        "outdoors_creaturehandler_taming_02",
        "outdoors_creaturehandler_taming_03",
        "outdoors_creaturehandler_taming_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "outdoors_creaturehandler_training_01",
        "outdoors_creaturehandler_training_02",
        "outdoors_creaturehandler_training_03",
        "outdoors_creaturehandler_training_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "outdoors_creaturehandler_healing_01",
        "outdoors_creaturehandler_healing_02",
        "outdoors_creaturehandler_healing_03",
        "outdoors_creaturehandler_healing_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "outdoors_creaturehandler_support_01",
        "outdoors_creaturehandler_support_02",
        "outdoors_creaturehandler_support_03",
        "outdoors_creaturehandler_support_04",
      ],
    },
    novice: "outdoors_creaturehandler_novice",
    novice_links: ["outdoors_scout"],
  },
  outdoors_bio_engineer: {
    master_links: [],
    master: "outdoors_bio_engineer_master",
    branch_1: {
      links: [],
      skills: [
        "outdoors_bio_engineer_creature_01",
        "outdoors_bio_engineer_creature_02",
        "outdoors_bio_engineer_creature_03",
        "outdoors_bio_engineer_creature_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "outdoors_bio_engineer_tissue_01",
        "outdoors_bio_engineer_tissue_02",
        "outdoors_bio_engineer_tissue_03",
        "outdoors_bio_engineer_tissue_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "outdoors_bio_engineer_dna_harvesting_01",
        "outdoors_bio_engineer_dna_harvesting_02",
        "outdoors_bio_engineer_dna_harvesting_03",
        "outdoors_bio_engineer_dna_harvesting_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "outdoors_bio_engineer_production_01",
        "outdoors_bio_engineer_production_02",
        "outdoors_bio_engineer_production_03",
        "outdoors_bio_engineer_production_04",
      ],
    },
    novice: "outdoors_bio_engineer_novice",
    novice_links: ["outdoors_scout", "science_medic"],
  },
  crafting_armorsmith: {
    master_links: [],
    master: "crafting_armorsmith_master",
    branch_1: {
      links: [],
      skills: [
        "crafting_armorsmith_personal_01",
        "crafting_armorsmith_personal_02",
        "crafting_armorsmith_personal_03",
        "crafting_armorsmith_personal_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "crafting_armorsmith_heavy_01",
        "crafting_armorsmith_heavy_02",
        "crafting_armorsmith_heavy_03",
        "crafting_armorsmith_heavy_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "crafting_armorsmith_deflectors_01",
        "crafting_armorsmith_deflectors_02",
        "crafting_armorsmith_deflectors_03",
        "crafting_armorsmith_deflectors_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "crafting_armorsmith_complexity_01",
        "crafting_armorsmith_complexity_02",
        "crafting_armorsmith_complexity_03",
        "crafting_armorsmith_complexity_04",
      ],
    },
    novice: "crafting_armorsmith_novice",
    novice_links: ["crafting_artisan"],
  },
  crafting_weaponsmith: {
    master_links: [],
    master: "crafting_weaponsmith_master",
    branch_1: {
      links: [],
      skills: [
        "crafting_weaponsmith_melee_01",
        "crafting_weaponsmith_melee_02",
        "crafting_weaponsmith_melee_03",
        "crafting_weaponsmith_melee_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "crafting_weaponsmith_firearms_01",
        "crafting_weaponsmith_firearms_02",
        "crafting_weaponsmith_firearms_03",
        "crafting_weaponsmith_firearms_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "crafting_weaponsmith_munitions_01",
        "crafting_weaponsmith_munitions_02",
        "crafting_weaponsmith_munitions_03",
        "crafting_weaponsmith_munitions_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "crafting_weaponsmith_techniques_01",
        "crafting_weaponsmith_techniques_02",
        "crafting_weaponsmith_techniques_03",
        "crafting_weaponsmith_techniques_04",
      ],
    },
    novice: "crafting_weaponsmith_novice",
    novice_links: ["crafting_artisan"],
  },
  crafting_chef: {
    master_links: [],
    master: "crafting_chef_master",
    branch_1: {
      links: [],
      skills: [
        "crafting_chef_dish_01",
        "crafting_chef_dish_02",
        "crafting_chef_dish_03",
        "crafting_chef_dish_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "crafting_chef_dessert_01",
        "crafting_chef_dessert_02",
        "crafting_chef_dessert_03",
        "crafting_chef_dessert_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "crafting_chef_drink_01",
        "crafting_chef_drink_02",
        "crafting_chef_drink_03",
        "crafting_chef_drink_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "crafting_chef_techniques_01",
        "crafting_chef_techniques_02",
        "crafting_chef_techniques_03",
        "crafting_chef_techniques_04",
      ],
    },
    novice: "crafting_chef_novice",
    novice_links: ["crafting_artisan"],
  },
  crafting_tailor: {
    master_links: [],
    master: "crafting_tailor_master",
    branch_1: {
      links: [],
      skills: [
        "crafting_tailor_casual_01",
        "crafting_tailor_casual_02",
        "crafting_tailor_casual_03",
        "crafting_tailor_casual_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "crafting_tailor_field_01",
        "crafting_tailor_field_02",
        "crafting_tailor_field_03",
        "crafting_tailor_field_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "crafting_tailor_formal_01",
        "crafting_tailor_formal_02",
        "crafting_tailor_formal_03",
        "crafting_tailor_formal_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "crafting_tailor_production_01",
        "crafting_tailor_production_02",
        "crafting_tailor_production_03",
        "crafting_tailor_production_04",
      ],
    },
    novice: "crafting_tailor_novice",
    novice_links: ["crafting_artisan"],
  },
  crafting_architect: {
    master_links: [],
    master: "crafting_architect_master",
    branch_1: {
      links: [],
      skills: [
        "crafting_architect_production_01",
        "crafting_architect_production_02",
        "crafting_architect_production_03",
        "crafting_architect_production_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "crafting_architect_techniques_01",
        "crafting_architect_techniques_02",
        "crafting_architect_techniques_03",
        "crafting_architect_techniques_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "crafting_architect_harvesting_01",
        "crafting_architect_harvesting_02",
        "crafting_architect_harvesting_03",
        "crafting_architect_harvesting_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "crafting_architect_blueprints_01",
        "crafting_architect_blueprints_02",
        "crafting_architect_blueprints_03",
        "crafting_architect_blueprints_04",
      ],
    },
    novice: "crafting_architect_novice",
    novice_links: ["crafting_artisan"],
  },
  crafting_droidengineer: {
    master_links: [],
    master: "crafting_droidengineer_master",
    branch_1: {
      links: [],
      skills: [
        "crafting_droidengineer_production_01",
        "crafting_droidengineer_production_02",
        "crafting_droidengineer_production_03",
        "crafting_droidengineer_production_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "crafting_droidengineer_techniques_01",
        "crafting_droidengineer_techniques_02",
        "crafting_droidengineer_techniques_03",
        "crafting_droidengineer_techniques_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "crafting_droidengineer_refinement_01",
        "crafting_droidengineer_refinement_02",
        "crafting_droidengineer_refinement_03",
        "crafting_droidengineer_refinement_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "crafting_droidengineer_blueprints_01",
        "crafting_droidengineer_blueprints_02",
        "crafting_droidengineer_blueprints_03",
        "crafting_droidengineer_blueprints_04",
      ],
    },
    novice: "crafting_droidengineer_novice",
    novice_links: ["crafting_artisan"],
  },
  crafting_merchant: {
    master_links: [],
    master: "crafting_merchant_master",
    branch_1: {
      links: [],
      skills: [
        "crafting_merchant_advertising_01",
        "crafting_merchant_advertising_02",
        "crafting_merchant_advertising_03",
        "crafting_merchant_advertising_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "crafting_merchant_sales_01",
        "crafting_merchant_sales_02",
        "crafting_merchant_sales_03",
        "crafting_merchant_sales_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "crafting_merchant_hiring_01",
        "crafting_merchant_hiring_02",
        "crafting_merchant_hiring_03",
        "crafting_merchant_hiring_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "crafting_merchant_management_01",
        "crafting_merchant_management_02",
        "crafting_merchant_management_03",
        "crafting_merchant_management_04",
      ],
    },
    novice: "crafting_merchant_novice",
    novice_links: ["crafting_artisan"],
  },
  combat_smuggler: {
    master_links: [],
    master: "combat_smuggler_master",
    branch_1: {
      links: [],
      skills: [
        "combat_smuggler_underworld_01",
        "combat_smuggler_underworld_02",
        "combat_smuggler_underworld_03",
        "combat_smuggler_underworld_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_smuggler_slicing_01",
        "combat_smuggler_slicing_02",
        "combat_smuggler_slicing_03",
        "combat_smuggler_slicing_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_smuggler_combat_01",
        "combat_smuggler_combat_02",
        "combat_smuggler_combat_03",
        "combat_smuggler_combat_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_smuggler_spice_01",
        "combat_smuggler_spice_02",
        "combat_smuggler_spice_03",
        "combat_smuggler_spice_04",
      ],
    },
    novice: "combat_smuggler_novice",
    novice_links: ["combat_marksman", "combat_brawler"],
  },
  combat_bountyhunter: {
    master_links: [],
    master: "combat_bountyhunter_master",
    branch_1: {
      links: [],
      skills: [
        "combat_bountyhunter_investigation_01",
        "combat_bountyhunter_investigation_02",
        "combat_bountyhunter_investigation_03",
        "combat_bountyhunter_investigation_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_bountyhunter_droidcontrol_01",
        "combat_bountyhunter_droidcontrol_02",
        "combat_bountyhunter_droidcontrol_03",
        "combat_bountyhunter_droidcontrol_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_bountyhunter_droidresponse_01",
        "combat_bountyhunter_droidresponse_02",
        "combat_bountyhunter_droidresponse_03",
        "combat_bountyhunter_droidresponse_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_bountyhunter_support_01",
        "combat_bountyhunter_support_02",
        "combat_bountyhunter_support_03",
        "combat_bountyhunter_support_04",
      ],
    },
    novice: "combat_bountyhunter_novice",
    novice_links: ["combat_marksman", "outdoors_scout"],
  },
  combat_commando: {
    master_links: [],
    master: "combat_commando_master",
    branch_1: {
      links: [],
      skills: [
        "combat_commando_heavyweapon_accuracy_01",
        "combat_commando_heavyweapon_accuracy_02",
        "combat_commando_heavyweapon_accuracy_03",
        "combat_commando_heavyweapon_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_commando_heavyweapon_speed_01",
        "combat_commando_heavyweapon_speed_02",
        "combat_commando_heavyweapon_speed_03",
        "combat_commando_heavyweapon_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_commando_thrownweapon_01",
        "combat_commando_thrownweapon_02",
        "combat_commando_thrownweapon_03",
        "combat_commando_thrownweapon_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_commando_support_01",
        "combat_commando_support_02",
        "combat_commando_support_03",
        "combat_commando_support_04",
      ],
    },
    novice: "combat_commando_novice",
    novice_links: ["combat_marksman", "combat_brawler"],
  },
  science_combatmedic: {
    master_links: [],
    master: "science_combatmedic_master",
    branch_1: {
      links: [],
      skills: [
        "science_combatmedic_healing_range_01",
        "science_combatmedic_healing_range_02",
        "science_combatmedic_healing_range_03",
        "science_combatmedic_healing_range_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "science_combatmedic_healing_range_speed_01",
        "science_combatmedic_healing_range_speed_02",
        "science_combatmedic_healing_range_speed_03",
        "science_combatmedic_healing_range_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "science_combatmedic_medicine_01",
        "science_combatmedic_medicine_02",
        "science_combatmedic_medicine_03",
        "science_combatmedic_medicine_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "science_combatmedic_support_01",
        "science_combatmedic_support_02",
        "science_combatmedic_support_03",
        "science_combatmedic_support_04",
      ],
    },
    novice: "science_combatmedic_novice",
    novice_links: ["combat_marksman", "science_medic"],
  },
  social_imagedesigner: {
    master_links: [],
    master: "social_imagedesigner_master",
    branch_1: {
      links: [],
      skills: [
        "social_imagedesigner_hairstyle_01",
        "social_imagedesigner_hairstyle_02",
        "social_imagedesigner_hairstyle_03",
        "social_imagedesigner_hairstyle_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "social_imagedesigner_exotic_01",
        "social_imagedesigner_exotic_02",
        "social_imagedesigner_exotic_03",
        "social_imagedesigner_exotic_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "social_imagedesigner_bodyform_01",
        "social_imagedesigner_bodyform_02",
        "social_imagedesigner_bodyform_03",
        "social_imagedesigner_bodyform_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "social_imagedesigner_markings_01",
        "social_imagedesigner_markings_02",
        "social_imagedesigner_markings_03",
        "social_imagedesigner_markings_04",
      ],
    },
    novice: "social_imagedesigner_novice",
    novice_links: ["social_entertainer"],
  },
  outdoors_squadleader: {
    master_links: [],
    master: "outdoors_squadleader_master",
    branch_1: {
      links: [],
      skills: [
        "outdoors_squadleader_movement_01",
        "outdoors_squadleader_movement_02",
        "outdoors_squadleader_movement_03",
        "outdoors_squadleader_movement_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "outdoors_squadleader_offense_01",
        "outdoors_squadleader_offense_02",
        "outdoors_squadleader_offense_03",
        "outdoors_squadleader_offense_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "outdoors_squadleader_defense_01",
        "outdoors_squadleader_defense_02",
        "outdoors_squadleader_defense_03",
        "outdoors_squadleader_defense_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "outdoors_squadleader_support_01",
        "outdoors_squadleader_support_02",
        "outdoors_squadleader_support_03",
        "outdoors_squadleader_support_04",
      ],
    },
    novice: "outdoors_squadleader_novice",
    novice_links: ["outdoors_scout", "combat_marksman"],
  },
  social_politician: {
    master_links: [],
    master: "social_politician_master",
    branch_1: {
      links: [],
      skills: [
        "social_politician_fiscal_01",
        "social_politician_fiscal_02",
        "social_politician_fiscal_03",
        "social_politician_fiscal_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "social_politician_martial_01",
        "social_politician_martial_02",
        "social_politician_martial_03",
        "social_politician_martial_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "social_politician_civic_01",
        "social_politician_civic_02",
        "social_politician_civic_03",
        "social_politician_civic_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "social_politician_urban_01",
        "social_politician_urban_02",
        "social_politician_urban_03",
        "social_politician_urban_04",
      ],
    },
    novice: "social_politician_novice",
    novice_links: [""],
  },
  force_sensitive_combat_prowess: {
    master_links: [],
    master: "force_sensitive_combat_prowess_master",
    branch_1: {
      links: [],
      skills: [
        "force_sensitive_combat_prowess_ranged_accuracy_01",
        "force_sensitive_combat_prowess_ranged_accuracy_02",
        "force_sensitive_combat_prowess_ranged_accuracy_03",
        "force_sensitive_combat_prowess_ranged_accuracy_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_sensitive_combat_prowess_ranged_speed_01",
        "force_sensitive_combat_prowess_ranged_speed_02",
        "force_sensitive_combat_prowess_ranged_speed_03",
        "force_sensitive_combat_prowess_ranged_speed_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_sensitive_combat_prowess_melee_accuracy_01",
        "force_sensitive_combat_prowess_melee_accuracy_02",
        "force_sensitive_combat_prowess_melee_accuracy_03",
        "force_sensitive_combat_prowess_melee_accuracy_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_sensitive_combat_prowess_melee_speed_01",
        "force_sensitive_combat_prowess_melee_speed_02",
        "force_sensitive_combat_prowess_melee_speed_03",
        "force_sensitive_combat_prowess_melee_speed_04",
      ],
    },
    novice: "force_sensitive_combat_prowess_novice",
    novice_links: [],
  },
  force_sensitive_enhanced_reflexes: {
    master_links: [],
    master: "force_sensitive_enhanced_reflexes_master",
    branch_1: {
      links: [],
      skills: [
        "force_sensitive_enhanced_reflexes_ranged_defense_01",
        "force_sensitive_enhanced_reflexes_ranged_defense_02",
        "force_sensitive_enhanced_reflexes_ranged_defense_03",
        "force_sensitive_enhanced_reflexes_ranged_defense_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_sensitive_enhanced_reflexes_melee_defense_01",
        "force_sensitive_enhanced_reflexes_melee_defense_02",
        "force_sensitive_enhanced_reflexes_melee_defense_03",
        "force_sensitive_enhanced_reflexes_melee_defense_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_sensitive_enhanced_reflexes_vehicle_control_01",
        "force_sensitive_enhanced_reflexes_vehicle_control_02",
        "force_sensitive_enhanced_reflexes_vehicle_control_03",
        "force_sensitive_enhanced_reflexes_vehicle_control_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_sensitive_enhanced_reflexes_survival_01",
        "force_sensitive_enhanced_reflexes_survival_02",
        "force_sensitive_enhanced_reflexes_survival_03",
        "force_sensitive_enhanced_reflexes_survival_04",
      ],
    },
    novice: "force_sensitive_enhanced_reflexes_novice",
    novice_links: [],
  },
  force_sensitive_crafting_mastery: {
    master_links: [],
    master: "force_sensitive_crafting_mastery_master",
    branch_1: {
      links: [],
      skills: [
        "force_sensitive_crafting_mastery_experimentation_01",
        "force_sensitive_crafting_mastery_experimentation_02",
        "force_sensitive_crafting_mastery_experimentation_03",
        "force_sensitive_crafting_mastery_experimentation_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_sensitive_crafting_mastery_assembly_01",
        "force_sensitive_crafting_mastery_assembly_02",
        "force_sensitive_crafting_mastery_assembly_03",
        "force_sensitive_crafting_mastery_assembly_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_sensitive_crafting_mastery_repair_01",
        "force_sensitive_crafting_mastery_repair_02",
        "force_sensitive_crafting_mastery_repair_03",
        "force_sensitive_crafting_mastery_repair_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_sensitive_crafting_mastery_technique_01",
        "force_sensitive_crafting_mastery_technique_02",
        "force_sensitive_crafting_mastery_technique_03",
        "force_sensitive_crafting_mastery_technique_04",
      ],
    },
    novice: "force_sensitive_crafting_novicey_novice",
    novice_links: [],
  },
  force_sensitive_heightened_senses: {
    master_links: [],
    master: "force_sensitive_heightened_senses_master",
    branch_1: {
      links: [],
      skills: [
        "force_sensitive_heightened_senses_healing_01",
        "force_sensitive_heightened_senses_healing_02",
        "force_sensitive_heightened_senses_healing_03",
        "force_sensitive_heightened_senses_healing_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_sensitive_heightened_senses_surveying_01",
        "force_sensitive_heightened_senses_surveying_02",
        "force_sensitive_heightened_senses_surveying_03",
        "force_sensitive_heightened_senses_surveying_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_sensitive_heightened_senses_persuasion_01",
        "force_sensitive_heightened_senses_persuasion_02",
        "force_sensitive_heightened_senses_persuasion_03",
        "force_sensitive_heightened_senses_persuasion_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_sensitive_heightened_senses_luck_01",
        "force_sensitive_heightened_senses_luck_02",
        "force_sensitive_heightened_senses_luck_03",
        "force_sensitive_heightened_senses_luck_04",
      ],
    },
    novice: "force_sensitive_heightened_senses_novice",
    novice_links: [],
  },
  force_discipline_light_saber: {
    master_links: [],
    master: "force_discipline_light_saber_master",
    branch_1: {
      links: [],
      skills: [
        "force_discipline_light_saber_one_hand_01",
        "force_discipline_light_saber_one_hand_02",
        "force_discipline_light_saber_one_hand_03",
        "force_discipline_light_saber_one_hand_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_discipline_light_saber_two_hand_01",
        "force_discipline_light_saber_two_hand_02",
        "force_discipline_light_saber_two_hand_03",
        "force_discipline_light_saber_two_hand_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_discipline_light_saber_polearm_01",
        "force_discipline_light_saber_polearm_02",
        "force_discipline_light_saber_polearm_03",
        "force_discipline_light_saber_polearm_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_discipline_light_saber_technique_01",
        "force_discipline_light_saber_technique_02",
        "force_discipline_light_saber_technique_03",
        "force_discipline_light_saber_technique_04",
      ],
    },
    novice: "force_discipline_light_saber_novice",
    novice_links: [],
  },
  force_discipline_powers: {
    master_links: [],
    master: "force_discipline_powers_master",
    branch_1: {
      links: [],
      skills: [
        "force_discipline_powers_lightning_01",
        "force_discipline_powers_lightning_02",
        "force_discipline_powers_lightning_03",
        "force_discipline_powers_lightning_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_discipline_powers_mental_01",
        "force_discipline_powers_mental_02",
        "force_discipline_powers_mental_03",
        "force_discipline_powers_mental_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_discipline_powers_debuff_01",
        "force_discipline_powers_debuff_02",
        "force_discipline_powers_debuff_03",
        "force_discipline_powers_debuff_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_discipline_powers_push_01",
        "force_discipline_powers_push_02",
        "force_discipline_powers_push_03",
        "force_discipline_powers_push_04",
      ],
    },
    novice: "force_discipline_powers_novice",
    novice_links: [],
  },
  force_discipline_healing: {
    master_links: [],
    master: "force_discipline_healing_master",
    branch_1: {
      links: [],
      skills: [
        "force_discipline_healing_damage_01",
        "force_discipline_healing_damage_02",
        "force_discipline_healing_damage_03",
        "force_discipline_healing_damage_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_discipline_healing_wound_01",
        "force_discipline_healing_wound_02",
        "force_discipline_healing_wound_03",
        "force_discipline_healing_wound_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_discipline_healing_other_01",
        "force_discipline_healing_other_02",
        "force_discipline_healing_other_03",
        "force_discipline_healing_other_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_discipline_healing_states_01",
        "force_discipline_healing_states_02",
        "force_discipline_healing_states_03",
        "force_discipline_healing_states_04",
      ],
    },
    novice: "force_discipline_healing_novice",
    novice_links: [],
  },
  force_discipline_enhancements: {
    master_links: [],
    master: "force_discipline_enhancements_master",
    branch_1: {
      links: [],
      skills: [
        "force_discipline_enhancements_movement_01",
        "force_discipline_enhancements_movement_02",
        "force_discipline_enhancements_movement_03",
        "force_discipline_enhancements_movement_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_discipline_enhancements_protection_01",
        "force_discipline_enhancements_protection_02",
        "force_discipline_enhancements_protection_03",
        "force_discipline_enhancements_protection_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_discipline_enhancements_resistance_01",
        "force_discipline_enhancements_resistance_02",
        "force_discipline_enhancements_resistance_03",
        "force_discipline_enhancements_resistance_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_discipline_enhancements_synergy_01",
        "force_discipline_enhancements_synergy_02",
        "force_discipline_enhancements_synergy_03",
        "force_discipline_enhancements_synergy_04",
      ],
    },
    novice: "force_discipline_enhancements_novice",
    novice_links: [],
  },
  force_discipline_defender: {
    master_links: [],
    master: "force_discipline_defender_master",
    branch_1: {
      links: [],
      skills: [
        "force_discipline_defender_melee_defense_01",
        "force_discipline_defender_melee_defense_02",
        "force_discipline_defender_melee_defense_03",
        "force_discipline_defender_melee_defense_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "force_discipline_defender_ranged_defense_01",
        "force_discipline_defender_ranged_defense_02",
        "force_discipline_defender_ranged_defense_03",
        "force_discipline_defender_ranged_defense_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "force_discipline_defender_force_defense_01",
        "force_discipline_defender_force_defense_02",
        "force_discipline_defender_force_defense_03",
        "force_discipline_defender_force_defense_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "force_discipline_defender_preternatural_defense_01",
        "force_discipline_defender_preternatural_defense_02",
        "force_discipline_defender_preternatural_defense_03",
        "force_discipline_defender_preternatural_defense_04",
      ],
    },
    novice: "force_discipline_defender_novice",
    novice_links: [],
  },
  combat_gladiator: {
    master_links: [],
    master: "combat_gladiator_master",
    branch_1: {
      links: [],
      skills: [
        "combat_gladiator_thraex_01",
        "combat_gladiator_thraex_02",
        "combat_gladiator_thraex_03",
        "combat_gladiator_thraex_04",
      ],
    },
    branch_2: {
      links: [],
      skills: [
        "combat_gladiator_murmillo_01",
        "combat_gladiator_murmillo_02",
        "combat_gladiator_murmillo_03",
        "combat_gladiator_murmillo_04",
      ],
    },
    branch_3: {
      links: [],
      skills: [
        "combat_gladiator_dimachaerus_01",
        "combat_gladiator_dimachaerus_02",
        "combat_gladiator_dimachaerus_03",
        "combat_gladiator_dimachaerus_04",
      ],
    },
    branch_4: {
      links: [],
      skills: [
        "combat_gladiator_secutor_01",
        "combat_gladiator_secutor_02",
        "combat_gladiator_secutor_03",
        "combat_gladiator_secutor_04",
      ],
    },
    novice: "combat_gladiator_novice",
    novice_links: [],
  },
};

