export const skills = {
social_entertainer_novice: {
  title: "Novice Entertainer",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_entertainer_novice",
    "musician",
    "dancer",
    "imagedesigner",
    "startDance",
    "stopDance",
    "startMusic",
    "stopMusic",
    "flourish+1",
    "flourish+2",
    "flourish+3",
    "flourish+4",
    "flourish+5",
    "flourish+6",
    "flourish+7",
    "flourish+8",
    "startDance+basic",
    "startDance+rhythmic",
    "startMusic+starwars1",
    "slitherhorn",
  ],
  skillModifiers: {
    healing_dance_wound: 5,
    healing_music_wound: 5,
    healing_music_ability: 5,
    healing_dance_ability: 5,
    hair: 1,
    face: 1,
  },
  schematics: ["craftInstrumentGroupA"]
},
social_entertainer_master: {
  title: "Master Entertainer",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_hairstyle_04",
    "social_entertainer_music_04",
    "social_entertainer_dance_04",
    "social_entertainer_healing_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_entertainer_master",
    "startDance+footloose2",
    "startDance+formal2",
    "startMusic+ceremonial",
    "mandoviol",
  ],
  skillModifiers: {
    healing_dance_ability: 10,
    healing_music_ability: 10,
    healing_dance_wound: 10,
    healing_music_wound: 10,
  },
  schematics: [""]
},
social_entertainer_hairstyle_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_novice",
  ],
  xp: { id: "imagedesigner", cost: 1000 },
  commands: [
    "private_entertainer_hair_1",
  ],
  skillModifiers: {
    hair: 1,
  },
  schematics: [""]
},
social_entertainer_hairstyle_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_hairstyle_01",
  ],
  xp: { id: "imagedesigner", cost: 5000 },
  commands: [
    "private_entertainer_hair_2",
  ],
  skillModifiers: {
    markings: 1,
    face: 1,
  },
  schematics: [""]
},
social_entertainer_hairstyle_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_hairstyle_02",
  ],
  xp: { id: "imagedesigner", cost: 10000 },
  commands: [
    "private_entertainer_hair_3",
  ],
  skillModifiers: {
    hair: 1,
  },
  schematics: [""]
},
social_entertainer_hairstyle_04: {
  title: "Hairstylist",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_hairstyle_03",
  ],
  xp: { id: "imagedesigner", cost: 15000 },
  commands: [
    "private_entertainer_hair_4",
  ],
  skillModifiers: {
    hair: 1,
    face: 1,
  },
  schematics: [""]
},
social_entertainer_music_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_novice",
  ],
  xp: { id: "music", cost: 1000 },
  commands: [
    "private_entertainer_music_1",
    "startMusic+rock",
    "fizz",
  ],
  skillModifiers: {
    healing_music_ability: 5,
  },
  schematics: [""]
},
social_entertainer_music_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_music_01",
  ],
  xp: { id: "music", cost: 5000 },
  commands: [
    "private_entertainer_music_2",
    "startMusic+starwars2",
  ],
  skillModifiers: {
    healing_music_ability: 5,
  },
  schematics: ["craftInstrumentGroupB"]
},
social_entertainer_music_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_music_02",
  ],
  xp: { id: "music", cost: 15000 },
  commands: [
    "private_entertainer_music_3",
    "startMusic+folk",
    "fanfar",
  ],
  skillModifiers: {
    healing_music_ability: 5,
  },
  schematics: [""]
},
social_entertainer_music_04: {
  title: "Apprentice Musician",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_music_03",
  ],
  xp: { id: "music", cost: 45000 },
  commands: [
    "private_entertainer_music_4",
    "startMusic+starwars3",
    "kloohorn",
  ],
  skillModifiers: {
    healing_music_ability: 10,
  },
  schematics: [""]
},
social_entertainer_dance_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_novice",
  ],
  xp: { id: "dance", cost: 1000 },
  commands: [
    "private_entertainer_dance_1",
    "startDance+basic2",
  ],
  skillModifiers: {
    healing_dance_ability: 5,
  },
  schematics: [""]
},
social_entertainer_dance_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_dance_01",
  ],
  xp: { id: "dance", cost: 5000 },
  commands: [
    "private_entertainer_dance_2",
    "startDance+rhythmic2",
  ],
  skillModifiers: {
    healing_dance_ability: 5,
  },
  schematics: [""]
},
social_entertainer_dance_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_dance_02",
  ],
  xp: { id: "dance", cost: 15000 },
  commands: [
    "private_entertainer_dance_3",
    "startDance+footloose",
  ],
  skillModifiers: {
    healing_dance_ability: 5,
  },
  schematics: [""]
},
social_entertainer_dance_04: {
  title: "Apprentice Dancer",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_dance_03",
  ],
  xp: { id: "dance", cost: 45000 },
  commands: [
    "private_entertainer_dance_4",
    "startDance+formal",
  ],
  skillModifiers: {
    healing_dance_ability: 10,
  },
  schematics: [""]
},
social_entertainer_healing_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_novice",
  ],
  xp: { id: "entertainer_healing", cost: 1000 },
  commands: [
    "private_entertainer_healing_1",
  ],
  skillModifiers: {
    healing_dance_wound: 5,
    healing_music_wound: 5,
  },
  schematics: [""]
},
social_entertainer_healing_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_healing_01",
  ],
  xp: { id: "entertainer_healing", cost: 5000 },
  commands: [
    "private_entertainer_healing_2",
  ],
  skillModifiers: {
    healing_dance_wound: 5,
    healing_music_wound: 5,
  },
  schematics: [""]
},
social_entertainer_healing_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_healing_02",
  ],
  xp: { id: "entertainer_healing", cost: 10000 },
  commands: [
    "private_entertainer_healing_3",
  ],
  skillModifiers: {
    healing_dance_wound: 5,
    healing_music_wound: 5,
  },
  schematics: [""]
},
social_entertainer_healing_04: {
  title: "Apprentice Performer",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_healing_03",
  ],
  xp: { id: "entertainer_healing", cost: 25000 },
  commands: [
    "private_entertainer_healing_4",
  ],
  skillModifiers: {
    healing_dance_wound: 5,
    healing_music_wound: 5,
  },
  schematics: [""]
},
outdoors_scout_novice: {
  title: "Novice Scout",
  skillPoints: 5,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_scout_novice",
    "harvestCorpse",
  ],
  skillModifiers: {
    trapping: 5,
    camp: 5,
    creature_knowledge: 5,
    creature_harvesting: 15,
  },
  schematics: ["craftScoutCampGroupA","craftScoutTrapGroupNovice"]
},
outdoors_scout_master: {
  title: "Master Scout",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_movement_04",
    "outdoors_scout_tools_04",
    "outdoors_scout_harvest_04",
    "outdoors_scout_camp_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_scout_master",
  ],
  skillModifiers: {
    slope_move: 10,
    burst_run: 10,
    camp: 10,
    foraging: 15,
    creature_knowledge: 10,
    creature_harvesting: 5,
    mask_scent: 30,
    trapping: 20,
  },
  schematics: [""]
},
outdoors_scout_movement_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_novice",
  ],
  xp: { id: "scout", cost: 1000 },
  commands: [
    "private_scout_movement_1",
  ],
  skillModifiers: {
    slope_move: 20,
  },
  schematics: [""]
},
outdoors_scout_movement_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_movement_01",
  ],
  xp: { id: "scout", cost: 5000 },
  commands: [
    "private_scout_movement_2",
    "maskscent",
  ],
  skillModifiers: {
    burst_run: 20,
    mask_scent: 20,
  },
  schematics: [""]
},
outdoors_scout_movement_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_movement_02",
  ],
  xp: { id: "scout", cost: 10000 },
  commands: [
    "private_scout_movement_3",
  ],
  skillModifiers: {
    slope_move: 20,
    mask_scent: 20,
  },
  schematics: [""]
},
outdoors_scout_movement_04: {
  title: "Explorer",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_movement_03",
  ],
  xp: { id: "scout", cost: 15000 },
  commands: [
    "private_scout_movement_4",
  ],
  skillModifiers: {
    burst_run: 20,
    mask_scent: 30,
  },
  schematics: [""]
},
outdoors_scout_tools_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_novice",
  ],
  xp: { id: "trapping", cost: 1000 },
  commands: [
    "private_scout_tools_1",
  ],
  skillModifiers: {
    trapping: 5,
  },
  schematics: ["craftScoutTrapGroupA"]
},
outdoors_scout_tools_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_tools_01",
  ],
  xp: { id: "trapping", cost: 5000 },
  commands: [
    "private_scout_tools_2",
  ],
  skillModifiers: {
    trapping: 5,
  },
  schematics: ["craftScoutTrapGroupB"]
},
outdoors_scout_tools_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_tools_02",
  ],
  xp: { id: "trapping", cost: 10000 },
  commands: [
    "private_scout_tools_3",
  ],
  skillModifiers: {
    trapping: 5,
  },
  schematics: ["craftScoutTrapGroupC"]
},
outdoors_scout_tools_04: {
  title: "Trapper",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_tools_03",
  ],
  xp: { id: "trapping", cost: 15000 },
  commands: [
    "private_scout_tools_4",
  ],
  skillModifiers: {
    trapping: 10,
  },
  schematics: ["craftScoutTrapGroupD"]
},
outdoors_scout_harvest_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_novice",
  ],
  xp: { id: "scout", cost: 1000 },
  commands: [
    "private_scout_harvest_1",
  ],
  skillModifiers: {
    creature_knowledge: 5,
    creature_harvesting: 5,
  },
  schematics: [""]
},
outdoors_scout_harvest_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_harvest_01",
  ],
  xp: { id: "scout", cost: 5000 },
  commands: [
    "private_scout_harvest_2",
  ],
  skillModifiers: {
    creature_knowledge: 10,
    creature_harvesting: 10,
    creature_hit_bonus: 10,
  },
  schematics: [""]
},
outdoors_scout_harvest_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_harvest_02",
  ],
  xp: { id: "scout", cost: 10000 },
  commands: [
    "private_scout_harvest_3",
  ],
  skillModifiers: {
    creature_knowledge: 10,
    creature_harvesting: 5,
  },
  schematics: [""]
},
outdoors_scout_harvest_04: {
  title: "Hunter",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_harvest_03",
  ],
  xp: { id: "scout", cost: 15000 },
  commands: [
    "private_scout_harvest_4",
  ],
  skillModifiers: {
    creature_knowledge: 10,
    creature_harvesting: 10,
  },
  schematics: [""]
},
outdoors_scout_camp_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_novice",
  ],
  xp: { id: "camp", cost: 1000 },
  commands: [
    "private_scout_camp_1",
    "forage",
  ],
  skillModifiers: {
    camp: 5,
    foraging: 5,
  },
  schematics: [""]
},
outdoors_scout_camp_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_camp_01",
  ],
  xp: { id: "camp", cost: 5000 },
  commands: [
    "private_scout_camp_2",
  ],
  skillModifiers: {
    camp: 10,
    foraging: 10,
  },
  schematics: ["craftScoutCampGroupB"]
},
outdoors_scout_camp_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_camp_02",
  ],
  xp: { id: "camp", cost: 10000 },
  commands: [
    "private_scout_camp_3",
  ],
  skillModifiers: {
    camp: 10,
    foraging: 10,
  },
  schematics: [""]
},
outdoors_scout_camp_04: {
  title: "Survivalist",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_camp_03",
  ],
  xp: { id: "camp", cost: 20000 },
  commands: [
    "private_scout_camp_4",
  ],
  skillModifiers: {
    camp: 10,
    foraging: 10,
  },
  schematics: ["craftScoutCampGroupC"]
},
science_medic_novice: {
  title: "Novice Medic",
  skillPoints: 5,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_medic_novice",
    "healDamage",
    "healWound",
    "medicalForage",
    "tendWound",
    "tendDamage",
    "diagnose",
  ],
  skillModifiers: {
    healing_injury_treatment: 5,
    healing_wound_treatment: 5,
    healing_ability: 5,
    healing_injury_speed: 5,
    medicine_assembly: 10,
    medicine_experimentation: 10,
    medical_foraging: 10,
  },
  schematics: ["craftMedicineComponentGroupA","craftMedicineStimpackGroupA"]
},
science_medic_master: {
  title: "Master Medic",
  skillPoints: 1,
  preReqs: [
    "science_medic_injury_04",
    "science_medic_injury_speed_04",
    "science_medic_ability_04",
    "science_medic_crafting_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_medic_master",
  ],
  skillModifiers: {
    healing_injury_treatment: 25,
    healing_ability: 10,
    medical_foraging: 25,
  },
  schematics: ["craftMedicineStimpackGroupD"]
},
science_medic_injury_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_novice",
  ],
  xp: { id: "medical", cost: 1000 },
  commands: [
    "private_medic_injury_1",
  ],
  skillModifiers: {
    healing_injury_treatment: 15,
  },
  schematics: [""]
},
science_medic_injury_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_injury_01",
  ],
  xp: { id: "medical", cost: 5000 },
  commands: [
    "private_medic_injury_2",
    "firstAid",
  ],
  skillModifiers: {
    healing_injury_treatment: 15,
  },
  schematics: [""]
},
science_medic_injury_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_injury_02",
  ],
  xp: { id: "medical", cost: 10000 },
  commands: [
    "private_medic_injury_3",
  ],
  skillModifiers: {
    healing_injury_treatment: 15,
  },
  schematics: [""]
},
science_medic_injury_04: {
  title: "Field Stabilizer",
  skillPoints: 1,
  preReqs: [
    "science_medic_injury_03",
  ],
  xp: { id: "medical", cost: 15000 },
  commands: [
    "private_medic_injury_4",
    "quickHeal",
  ],
  skillModifiers: {
    healing_injury_treatment: 25,
  },
  schematics: [""]
},
science_medic_injury_speed_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_novice",
  ],
  xp: { id: "medical", cost: 1000 },
  commands: [
    "private_medic_speed_1",
  ],
  skillModifiers: {
    healing_injury_speed: 15,
  },
  schematics: [""]
},
science_medic_injury_speed_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_injury_speed_01",
  ],
  xp: { id: "medical", cost: 5000 },
  commands: [
    "private_medic_speed_2",
    "dragIncapacitatedPlayer",
  ],
  skillModifiers: {
    healing_injury_speed: 15,
  },
  schematics: [""]
},
science_medic_injury_speed_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_injury_speed_02",
  ],
  xp: { id: "medical", cost: 10000 },
  commands: [
    "private_medic_speed_3",
  ],
  skillModifiers: {
    healing_injury_speed: 15,
  },
  schematics: [""]
},
science_medic_injury_speed_04: {
  title: "Emergency Technician",
  skillPoints: 1,
  preReqs: [
    "science_medic_injury_speed_03",
  ],
  xp: { id: "medical", cost: 15000 },
  commands: [
    "private_medic_speed_4",
  ],
  skillModifiers: {
    healing_injury_speed: 25,
  },
  schematics: [""]
},
science_medic_ability_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_novice",
  ],
  xp: { id: "medical", cost: 1000 },
  commands: [
    "private_medic_ability_1",
  ],
  skillModifiers: {
    healing_ability: 5,
    medical_foraging: 15,
  },
  schematics: [""]
},
science_medic_ability_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_ability_01",
  ],
  xp: { id: "medical", cost: 5000 },
  commands: [
    "private_medic_ability_2",
  ],
  skillModifiers: {
    healing_ability: 10,
    medical_foraging: 15,
  },
  schematics: [""]
},
science_medic_ability_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_ability_02",
  ],
  xp: { id: "medical", cost: 10000 },
  commands: [
    "private_medic_ability_3",
  ],
  skillModifiers: {
    healing_ability: 10,
    medical_foraging: 15,
  },
  schematics: [""]
},
science_medic_ability_04: {
  title: "First Responder",
  skillPoints: 1,
  preReqs: [
    "science_medic_ability_03",
  ],
  xp: { id: "medical", cost: 15000 },
  commands: [
    "private_medic_ability_4",
  ],
  skillModifiers: {
    healing_ability: 10,
    medical_foraging: 20,
  },
  schematics: [""]
},
science_medic_crafting_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_novice",
  ],
  xp: { id: "crafting_medicine_general", cost: 500 },
  commands: [
    "private_medic_crafting_1",
  ],
  skillModifiers: {
    medicine_assembly: 10,
    medicine_experimentation: 10,
  },
  schematics: ["craftMedpackGroupA"]
},
science_medic_crafting_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_crafting_01",
  ],
  xp: { id: "crafting_medicine_general", cost: 1000 },
  commands: [
    "private_medic_crafting_2",
  ],
  skillModifiers: {
    medicine_assembly: 10,
    medicine_experimentation: 10,
  },
  schematics: ["craftMedicineComponentGroupB","craftMedicineStimpackGroupB"]
},
science_medic_crafting_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "science_medic_crafting_02",
  ],
  xp: { id: "crafting_medicine_general", cost: 3000 },
  commands: [
    "private_medic_crafting_3",
  ],
  skillModifiers: {
    medicine_assembly: 10,
    medicine_experimentation: 10,
  },
  schematics: ["craftMedpackBGroupA","craftMedpackGroupB"]
},
science_medic_crafting_04: {
  title: "Stimpack Chemist",
  skillPoints: 1,
  preReqs: [
    "science_medic_crafting_03",
  ],
  xp: { id: "crafting_medicine_general", cost: 6000 },
  commands: [
    "private_medic_crafting_4",
  ],
  skillModifiers: {
    medicine_assembly: 10,
    medicine_experimentation: 10,
  },
  schematics: ["craftMedicineStimpackGroupC","craftMedicineComponentGroupD","craftMedpackBGroupB"]
},
crafting_artisan_novice: {
  title: "Novice Artisan",
  skillPoints: 5,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_artisan_novice",
    "sample",
    "survey",
  ],
  skillModifiers: {
    surveying: 20,
    general_assembly: 20,
    general_experimentation: 20,
    clothing_customization: 20,
    armor_customization: 20,
  },
  schematics: ["craftArtisanNewbieGroupA","craftArtisanNewbieGroupB","craftArtisanSurveyGroupA"]
},
crafting_artisan_master: {
  title: "Master Artisan",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_engineering_04",
    "crafting_artisan_domestic_04",
    "crafting_artisan_business_04",
    "crafting_artisan_survey_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_artisan_master",
    "customizeVehicle",
  ],
  skillModifiers: {},
  schematics: ["craftArtisanMasterGroupA","craftArtisanVehicle"]
},
crafting_artisan_engineering_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_novice",
  ],
  xp: { id: "crafting_general", cost: 500 },
  commands: [
    "private_artisan_engineering_1",
  ],
  skillModifiers: {
    general_assembly: 10,
    general_experimentation: 10,
    armor_customization: 20,
  },
  schematics: ["craftArtisanEngineeringGroupA","craftArtisanToolGroupA"]
},
crafting_artisan_engineering_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_engineering_01",
  ],
  xp: { id: "crafting_general", cost: 1000 },
  commands: [
    "private_artisan_engineering_2",
  ],
  skillModifiers: {
    general_assembly: 10,
    general_experimentation: 10,
    armor_customization: 20,
  },
  schematics: ["craftArtisanEngineeringGroupB"]
},
crafting_artisan_engineering_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_engineering_02",
  ],
  xp: { id: "crafting_general", cost: 3000 },
  commands: [
    "private_artisan_engineering_3",
  ],
  skillModifiers: {
    general_assembly: 10,
    general_experimentation: 10,
    armor_customization: 20,
  },
  schematics: ["craftArtisanEngineeringGroupC"]
},
crafting_artisan_engineering_04: {
  title: "Engineer",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_engineering_03",
  ],
  xp: { id: "crafting_general", cost: 6000 },
  commands: [
    "private_artisan_engineering_4",
  ],
  skillModifiers: {
    general_assembly: 10,
    general_experimentation: 10,
    armor_customization: 20,
  },
  schematics: ["craftArtisanEngineeringGroupD"]
},
crafting_artisan_domestic_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_novice",
  ],
  xp: { id: "crafting_general", cost: 500 },
  commands: [
    "private_artisan_domestic_1",
  ],
  skillModifiers: {
    general_assembly: 10,
    general_experimentation: 10,
    clothing_customization: 20,
  },
  schematics: ["craftArtisanDomesticGroupA"]
},
crafting_artisan_domestic_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_domestic_01",
  ],
  xp: { id: "crafting_general", cost: 1000 },
  commands: [
    "private_artisan_domestic_2",
  ],
  skillModifiers: {
    general_assembly: 10,
    general_experimentation: 10,
    clothing_customization: 20,
  },
  schematics: ["craftArtisanDomesticGroupB"]
},
crafting_artisan_domestic_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_domestic_02",
  ],
  xp: { id: "crafting_general", cost: 3000 },
  commands: [
    "private_artisan_domestic_3",
  ],
  skillModifiers: {
    general_assembly: 10,
    general_experimentation: 10,
    clothing_customization: 20,
  },
  schematics: ["craftArtisanDomesticGroupC"]
},
crafting_artisan_domestic_04: {
  title: "Homemaker",
  skillPoints: 1,
  preReqs: [
    "crafting_artisan_domestic_03",
  ],
  xp: { id: "crafting_general", cost: 6000 },
  commands: [
    "private_artisan_domestic_4",
  ],
  skillModifiers: {
    general_assembly: 10,
    general_experimentation: 10,
    clothing_customization: 20,
  },
  schematics: ["craftArtisanDomesticGroupD"]
},
crafting_artisan_business_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_novice",
  ],
  xp: { id: "crafting_general", cost: 500 },
  commands: [
    "private_artisan_business_1",
    "access_fee",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_artisan_business_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_business_01",
  ],
  xp: { id: "crafting_general", cost: 1000 },
  commands: [
    "private_artisan_business_2",
    "premium_auctions",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_artisan_business_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_business_02",
  ],
  xp: { id: "crafting_general", cost: 3000 },
  commands: [
    "private_artisan_business_3",
  ],
  skillModifiers: {
    manage_vendor: 1,
    hiring: 10,
    vendor_item_limit: 100,
  },
  schematics: [""]
},
crafting_artisan_business_04: {
  title: "Businessman",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_business_03",
  ],
  xp: { id: "crafting_general", cost: 6000 },
  commands: [
    "private_artisan_business_4",
  ],
  skillModifiers: {
    manage_vendor: 1,
    hiring: 10,
    vendor_item_limit: 150,
  },
  schematics: [""]
},
crafting_artisan_survey_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_novice",
  ],
  xp: { id: "resource_harvesting_inorganic", cost: 500 },
  commands: [
    "private_artisan_survey_1",
  ],
  skillModifiers: {
    surveying: 15,
  },
  schematics: [""]
},
crafting_artisan_survey_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_survey_01",
  ],
  xp: { id: "resource_harvesting_inorganic", cost: 2500 },
  commands: [
    "private_artisan_survey_2",
  ],
  skillModifiers: {
    surveying: 20,
  },
  schematics: [""]
},
crafting_artisan_survey_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_survey_02",
  ],
  xp: { id: "resource_harvesting_inorganic", cost: 5000 },
  commands: [
    "private_artisan_survey_3",
  ],
  skillModifiers: {
    surveying: 20,
  },
  schematics: [""]
},
crafting_artisan_survey_04: {
  title: "Surveyor",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_survey_03",
  ],
  xp: { id: "resource_harvesting_inorganic", cost: 10000 },
  commands: [
    "private_artisan_survey_4",
  ],
  skillModifiers: {
    surveying: 25,
  },
  schematics: [""]
},
combat_brawler_novice: {
  title: "Novice Brawler",
  skillPoints: 5,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_brawler_novice",
    "polearmLunge1",
    "unarmedLunge1",
    "melee1hLunge1",
    "melee2hLunge1",
    "taunt",
    "warcry1",
    "intimidate1",
    "berserk1",
    "cert_knife_dagger",
    "centerOfBeing",
  ],
  skillModifiers: {
    unarmed_accuracy: 10,
    unarmed_damage: 15,
    unarmed_speed: 5,
    polearm_accuracy: 10,
    polearm_speed: 5,
    onehandmelee_accuracy: 10,
    onehandmelee_speed: 5,
    twohandmelee_accuracy: 10,
    twohandmelee_speed: 5,
    private_onehandmelee_combat_difficulty: 100,
    private_twohandmelee_combat_difficulty: 100,
    private_unarmed_combat_difficulty: 100,
    private_polearm_combat_difficulty: 100,
    taunt: 10,
    unarmed_center_of_being_efficacy: 10,
    polearm_center_of_being_efficacy: 10,
    onehandmelee_center_of_being_efficacy: 10,
    twohandmelee_center_of_being_efficacy: 10,
    center_of_being_duration_unarmed: 5,
    center_of_being_duration_onehandmelee: 5,
    center_of_being_duration_twohandmelee: 5,
    center_of_being_duration_polearm: 5,
  },
  schematics: [""]
},
combat_brawler_master: {
  title: "Master Brawler",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_unarmed_04",
    "combat_brawler_1handmelee_04",
    "combat_brawler_2handmelee_04",
    "combat_brawler_polearm_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_brawler_master",
    "polearmLunge2",
    "unarmedLunge2",
    "melee1hLunge2",
    "melee2hLunge2",
    "warcry2",
    "intimidate2",
    "berserk2",
  ],
  skillModifiers: {
    warcry: 20,
    intimidate: 20,
    berserk: 20,
    unarmed_accuracy: 5,
    unarmed_speed: 5,
    onehandmelee_speed: 5,
    onehandmelee_accuracy: 5,
    twohandmelee_speed: 5,
    twohandmelee_accuracy: 5,
    polearm_speed: 5,
    polearm_accuracy: 5,
    melee_defense: 5,
    ranged_defense: 5,
    private_onehandmelee_combat_difficulty: 100,
    private_twohandmelee_combat_difficulty: 100,
    private_unarmed_combat_difficulty: 100,
    private_polearm_combat_difficulty: 100,
    taunt: 30,
    polearm_toughness: 5,
    onehandmelee_toughness: 5,
    twohandmelee_toughness: 5,
    unarmed_toughness: 5,
    unarmed_center_of_being_efficacy: 10,
    polearm_center_of_being_efficacy: 10,
    onehandmelee_center_of_being_efficacy: 10,
    twohandmelee_center_of_being_efficacy: 10,
    center_of_being_duration_onehandmelee: 5,
    center_of_being_duration_twohandmelee: 5,
    center_of_being_duration_polearm: 5,
  },
  schematics: [""]
},
combat_brawler_unarmed_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_novice",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 1000 },
  commands: [
    "private_brawler_unarmed_1",
    "unarmedHit1",
  ],
  skillModifiers: {
    unarmed_speed: 5,
    unarmed_accuracy: 10,
    private_unarmed_combat_difficulty: 100,
    unarmed_damage: 5,
    unarmed_center_of_being_efficacy: 10,
    center_of_being_duration_unarmed: 2,
  },
  schematics: [""]
},
combat_brawler_unarmed_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_unarmed_01",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 5000 },
  commands: [
    "private_brawler_unarmed_2",
    "unarmedStun1",
  ],
  skillModifiers: {
    unarmed_speed: 5,
    unarmed_accuracy: 10,
    private_unarmed_combat_difficulty: 100,
    unarmed_damage: 10,
    unarmed_center_of_being_efficacy: 10,
    center_of_being_duration_unarmed: 2,
  },
  schematics: [""]
},
combat_brawler_unarmed_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_unarmed_02",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 15000 },
  commands: [
    "private_brawler_unarmed_3",
    "unarmedBlind1",
  ],
  skillModifiers: {
    unarmed_speed: 5,
    unarmed_accuracy: 10,
    private_unarmed_combat_difficulty: 100,
    unarmed_toughness: 10,
    unarmed_damage: 10,
    unarmed_center_of_being_efficacy: 5,
    center_of_being_duration_unarmed: 2,
  },
  schematics: [""]
},
combat_brawler_unarmed_04: {
  title: "Teras Kasi Student",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_unarmed_03",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 70000 },
  commands: [
    "private_brawler_unarmed_4",
    "unarmedSpinAttack1",
  ],
  skillModifiers: {
    unarmed_speed: 5,
    unarmed_accuracy: 10,
    melee_defense: 2,
    private_unarmed_combat_difficulty: 100,
    unarmed_toughness: 10,
    unarmed_damage: 10,
    unarmed_center_of_being_efficacy: 10,
    center_of_being_duration_unarmed: 2,
  },
  schematics: [""]
},
combat_brawler_1handmelee_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_novice",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 1000 },
  commands: [
    "private_brawler_1hand_1",
    "melee1hHit1",
    "cert_sword_01",
    "cert_baton_gaderiffi",
    "cert_sword_02",
  ],
  skillModifiers: {
    onehandmelee_speed: 5,
    onehandmelee_accuracy: 10,
    private_onehandmelee_combat_difficulty: 100,
    center_of_being_duration_onehandmelee: 2,
    onehandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_1handmelee_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_1handmelee_01",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 5000 },
  commands: [
    "private_brawler_1hand_2",
    "melee1hBodyHit1",
    "cert_knife_vibroblade",
  ],
  skillModifiers: {
    onehandmelee_speed: 5,
    onehandmelee_accuracy: 10,
    private_onehandmelee_combat_difficulty: 100,
    center_of_being_duration_onehandmelee: 2,
    onehandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_1handmelee_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_1handmelee_02",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 15000 },
  commands: [
    "private_brawler_1hand_3",
    "melee1hDizzyHit1",
    "cert_sword_blade_ryyk",
  ],
  skillModifiers: {
    onehandmelee_speed: 5,
    onehandmelee_accuracy: 10,
    private_onehandmelee_combat_difficulty: 100,
    onehandmelee_toughness: 10,
    center_of_being_duration_onehandmelee: 2,
    onehandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_1handmelee_04: {
  title: "Apprentice Swordsman",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_1handmelee_03",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 70000 },
  commands: [
    "private_brawler_1hand_4",
    "melee1hSpinAttack1",
    "cert_sword_blade_rantok",
  ],
  skillModifiers: {
    onehandmelee_speed: 5,
    onehandmelee_accuracy: 10,
    private_onehandmelee_combat_difficulty: 100,
    onehandmelee_toughness: 10,
    center_of_being_duration_onehandmelee: 2,
    onehandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_2handmelee_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_novice",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 1000 },
  commands: [
    "private_brawler_2hand_1",
    "melee2hHit1",
    "cert_sword_2h_axe",
  ],
  skillModifiers: {
    twohandmelee_speed: 5,
    twohandmelee_accuracy: 10,
    private_twohandmelee_combat_difficulty: 100,
    center_of_being_duration_twohandmelee: 2,
    twohandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_2handmelee_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_2handmelee_01",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 5000 },
  commands: [
    "private_brawler_2hand_2",
    "melee2hHeadHit1",
    "cert_sword_2h_katana",
  ],
  skillModifiers: {
    twohandmelee_speed: 5,
    twohandmelee_accuracy: 10,
    private_twohandmelee_combat_difficulty: 100,
    center_of_being_duration_twohandmelee: 2,
    twohandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_2handmelee_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_2handmelee_02",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 15000 },
  commands: [
    "private_brawler_2hand_3",
    "melee2hSweep1",
    "cert_axe_vibro",
  ],
  skillModifiers: {
    twohandmelee_speed: 5,
    twohandmelee_accuracy: 10,
    private_twohandmelee_combat_difficulty: 100,
    twohandmelee_toughness: 10,
    center_of_being_duration_twohandmelee: 2,
    twohandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_2handmelee_04: {
  title: "Apprentice Heavy Swordsman",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_2handmelee_03",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 70000 },
  commands: [
    "private_brawler_2hand_4",
    "melee2hSpinAttack1",
    "cert_sword_2h_cleaver",
  ],
  skillModifiers: {
    twohandmelee_speed: 5,
    twohandmelee_accuracy: 10,
    private_twohandmelee_combat_difficulty: 100,
    twohandmelee_toughness: 10,
    center_of_being_duration_twohandmelee: 2,
    twohandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_polearm_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_novice",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 1000 },
  commands: [
    "private_brawler_polearm_1",
    "polearmHit1",
    "cert_lance_staff_wood_s2",
    "cert_lance_staff_metal",
  ],
  skillModifiers: {
    polearm_speed: 5,
    polearm_accuracy: 10,
    private_polearm_combat_difficulty: 100,
    center_of_being_duration_polearm: 2,
    polearm_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_polearm_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_polearm_01",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 5000 },
  commands: [
    "private_brawler_polearm_2",
    "polearmLegHit1",
    "cert_lance_controllerfp",
  ],
  skillModifiers: {
    polearm_speed: 5,
    polearm_accuracy: 10,
    private_polearm_combat_difficulty: 100,
    center_of_being_duration_polearm: 2,
    polearm_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_polearm_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_polearm_02",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 15000 },
  commands: [
    "private_brawler_polearm_3",
    "polearmStun1",
    "cert_lance_vibro_axe",
  ],
  skillModifiers: {
    polearm_speed: 5,
    polearm_accuracy: 10,
    private_polearm_combat_difficulty: 100,
    polearm_toughness: 4,
    center_of_being_duration_polearm: 2,
    polearm_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_brawler_polearm_04: {
  title: "Apprentice Pikeman",
  skillPoints: 1,
  preReqs: [
    "combat_brawler_polearm_03",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 70000 },
  commands: [
    "private_brawler_polearm_4",
    "polearmSpinAttack1",
  ],
  skillModifiers: {
    polearm_speed: 5,
    polearm_accuracy: 10,
    private_polearm_combat_difficulty: 100,
    polearm_toughness: 4,
    center_of_being_duration_polearm: 1,
    polearm_center_of_being_efficacy: 5,
  },
  schematics: [""]
},
combat_marksman_novice: {
  title: "Novice Marksman",
  skillPoints: 5,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_marksman_novice",
    "pointBlankArea1",
    "pointBlankSingle1",
    "overChargeShot1",
    "cert_rifle_dlt20",
    "cert_pistol_d18",
    "cert_carbine_dh17",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 5,
    rifle_accuracy: 10,
    rifle_speed: 5,
    carbine_speed: 5,
    carbine_accuracy: 10,
    private_rifle_combat_difficulty: 100,
    private_carbine_combat_difficulty: 100,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_master: {
  title: "Master Marksman",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_rifle_04",
    "combat_marksman_pistol_04",
    "combat_marksman_carbine_04",
    "combat_marksman_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_marksman_master",
    "overChargeShot2",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 5,
    rifle_accuracy: 10,
    rifle_speed: 5,
    carbine_speed: 5,
    carbine_accuracy: 10,
    ranged_defense: 5,
    private_rifle_combat_difficulty: 100,
    private_carbine_combat_difficulty: 100,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_rifle_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_novice",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 1000 },
  commands: [
    "private_marksman_rifle_1",
    "headShot1",
    "cert_rifle_dlt20a",
    "cert_rifle_tusken",
  ],
  skillModifiers: {
    rifle_accuracy: 10,
    rifle_speed: 5,
    private_rifle_combat_difficulty: 100,
    rifle_concealment_chance: 5,
  },
  schematics: [""]
},
combat_marksman_rifle_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_rifle_01",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 5000 },
  commands: [
    "private_marksman_rifle_2",
    "takeCover",
    "cert_rifle_sg82",
    "cert_rifle_laser",
  ],
  skillModifiers: {
    rifle_accuracy: 10,
    rifle_speed: 5,
    private_rifle_combat_difficulty: 100,
    rifle_concealment_chance: 5,
  },
  schematics: [""]
},
combat_marksman_rifle_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_rifle_02",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 15000 },
  commands: [
    "private_marksman_rifle_3",
    "headShot2",
    "cert_rifle_spraystick",
  ],
  skillModifiers: {
    rifle_accuracy: 10,
    rifle_speed: 5,
    private_rifle_combat_difficulty: 100,
    rifle_concealment_chance: 5,
  },
  schematics: [""]
},
combat_marksman_rifle_04: {
  title: "Apprentice Sharpshooter",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_rifle_03",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 70000 },
  commands: [
    "private_marksman_rifle_4",
    "mindShot1",
    "cert_rifle_jawa_ion",
    "cert_rifle_e11",
  ],
  skillModifiers: {
    rifle_accuracy: 10,
    rifle_speed: 5,
    ranged_defense: 2,
    private_rifle_combat_difficulty: 100,
    rifle_concealment_chance: 5,
  },
  schematics: [""]
},
combat_marksman_pistol_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_novice",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 1000 },
  commands: [
    "private_marksman_pistol_1",
    "bodyShot1",
    "cert_pistol_dl44",
    "cert_pistol_dl44_metal",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 5,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_pistol_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_pistol_01",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 5000 },
  commands: [
    "private_marksman_pistol_2",
    "rollShot",
    "diveShot",
    "kipUpShot",
    "cert_pistol_scout_blaster",
    "cert_pistol_dh17",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 5,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_pistol_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_pistol_02",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 15000 },
  commands: [
    "private_marksman_pistol_3",
    "bodyShot2",
    "cert_pistol_striker",
    "cert_pistol_power5",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 5,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_pistol_04: {
  title: "Apprentice Gunfighter",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_pistol_03",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 70000 },
  commands: [
    "private_marksman_pistol_4",
    "healthShot1",
    "cert_pistol_srcombat",
    "cert_pistol_tangle",
    "cert_pistol_fwg5",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 5,
    ranged_defense: 2,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_carbine_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_novice",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 1000 },
  commands: [
    "private_marksman_carbine_1",
    "legShot1",
    "cert_carbine_dh17_snubnose",
  ],
  skillModifiers: {
    carbine_speed: 5,
    carbine_accuracy: 10,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_carbine_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_carbine_01",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 5000 },
  commands: [
    "private_marksman_carbine_2",
    "fullAutoSingle1",
    "cert_carbine_e11",
  ],
  skillModifiers: {
    carbine_speed: 5,
    carbine_accuracy: 10,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_carbine_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_carbine_02",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 15000 },
  commands: [
    "private_marksman_carbine_3",
    "legShot2",
    "cert_carbine_laser",
  ],
  skillModifiers: {
    carbine_speed: 5,
    carbine_accuracy: 10,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_carbine_04: {
  title: "Apprentice Carbine Specialist",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_carbine_03",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 70000 },
  commands: [
    "private_marksman_carbine_4",
    "actionShot1",
    "cert_carbine_dxr6",
    "cert_carbine_ee3",
  ],
  skillModifiers: {
    carbine_speed: 5,
    carbine_accuracy: 10,
    ranged_defense: 2,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_marksman_support_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_novice",
  ],
  xp: { id: "combat_general", cost: 300 },
  commands: [
    "private_marksman_support_1",
    "threatenShot",
    "aim",
  ],
  skillModifiers: {
    ranged_defense: 2,
    aim: 10,
  },
  schematics: [""]
},
combat_marksman_support_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_support_01",
  ],
  xp: { id: "combat_general", cost: 2250 },
  commands: [
    "private_marksman_support_2",
    "tumbleToProne",
    "tumbleToKneeling",
    "tumbleToStanding",
  ],
  skillModifiers: {
    melee_defense: 2,
    aim: 10,
  },
  schematics: [""]
},
combat_marksman_support_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_support_02",
  ],
  xp: { id: "combat_general", cost: 6000 },
  commands: [
    "private_marksman_support_3",
    "warningShot",
  ],
  skillModifiers: {
    ranged_defense: 2,
    aim: 5,
  },
  schematics: [""]
},
combat_marksman_support_04: {
  title: "Guardsman",
  skillPoints: 1,
  preReqs: [
    "combat_marksman_support_03",
  ],
  xp: { id: "combat_general", cost: 22000 },
  commands: [
    "private_marksman_support_4",
    "suppressionFire1",
  ],
  skillModifiers: {
    alert: 10,
    ranged_defense: 2,
    aim: 5,
  },
  schematics: [""]
},
combat_rifleman_novice: {
  title: "Novice Rifleman",
  skillPoints: 6,
  preReqs: [
    "combat_marksman_rifle_04",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 125000 },
  commands: [
    "private_rifle_novice",
    "strafeShot1",
    "cert_rifle_t21",
  ],
  skillModifiers: {
    rifle_accuracy: 5,
    rifle_speed: 5,
    private_rifle_combat_difficulty: 100,
    block: 10,
    rifle_concealment_chance: 15,
  },
  schematics: [""]
},
combat_rifleman_master: {
  title: "Master Rifleman",
  skillPoints: 1,
  preReqs: [
    "combat_rifleman_accuracy_04",
    "combat_rifleman_speed_04",
    "combat_rifleman_ability_04",
    "combat_rifleman_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_rifle_master",
    "strafeShot2",
    "ranged_damage_mitigation_3",
  ],
  skillModifiers: {
    rifle_accuracy: 40,
    rifle_speed: 15,
    rifle_hit_while_moving: 10,
    rifle_aim: 40,
    ranged_defense: 15,
    private_rifle_combat_difficulty: 100,
    block: 10,
    rifle_concealment_chance: 5,
  },
  schematics: [""]
},
combat_rifleman_accuracy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_rifleman_novice",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 175000 },
  commands: [
    "private_rifle_accuracy_1",
    "mindShot2",
  ],
  skillModifiers: {
    rifle_accuracy: 10,
    rifle_aim: 15,
    private_rifle_combat_difficulty: 125,
    rifle_concealment_chance: 15,
  },
  schematics: [""]
},
combat_rifleman_accuracy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_rifleman_accuracy_01",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 250000 },
  commands: [
    "private_rifle_accuracy_2",
    "headShot3",
  ],
  skillModifiers: {
    rifle_accuracy: 15,
    rifle_aim: 15,
    private_rifle_combat_difficulty: 100,
    rifle_concealment_chance: 15,
  },
  schematics: [""]
},
combat_rifleman_accuracy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_rifleman_accuracy_02",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 350000 },
  commands: [
    "private_rifle_accuracy_3",
    "surpriseShot",
  ],
  skillModifiers: {
    rifle_accuracy: 20,
    rifle_aim: 15,
    private_rifle_combat_difficulty: 100,
    rifle_concealment_chance: 15,
  },
  schematics: [""]
},
combat_rifleman_accuracy_04: {
  title: "Sniper",
  skillPoints: 2,
  preReqs: [
    "combat_rifleman_accuracy_03",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 450000 },
  commands: [
    "private_rifle_accuracy_4",
    "sniperShot",
  ],
  skillModifiers: {
    rifle_accuracy: 20,
    rifle_aim: 15,
    private_rifle_combat_difficulty: 125,
    rifle_concealment_chance: 15,
  },
  schematics: [""]
},
combat_rifleman_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_rifleman_novice",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 175000 },
  commands: [
    "private_rifle_speed_1",
    "concealShot",
    "ranged_damage_mitigation_1",
  ],
  skillModifiers: {
    ranged_defense: 10,
    take_cover: 20,
    private_rifle_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_rifleman_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_rifleman_speed_01",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 250000 },
  commands: [
    "private_rifle_speed_2",
  ],
  skillModifiers: {
    ranged_defense: 10,
    take_cover: 20,
    private_rifle_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_rifleman_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_rifleman_speed_02",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 350000 },
  commands: [
    "private_rifle_speed_3",
    "sneak",
    "ranged_damage_mitigation_2",
  ],
  skillModifiers: {
    ranged_defense: 10,
    take_cover: 20,
    private_rifle_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_rifleman_speed_04: {
  title: "Assassin",
  skillPoints: 2,
  preReqs: [
    "combat_rifleman_speed_03",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 450000 },
  commands: [
    "private_rifle_speed_4",
  ],
  skillModifiers: {
    ranged_defense: 10,
    take_cover: 20,
    private_rifle_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_rifleman_ability_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_rifleman_novice",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 175000 },
  commands: [
    "private_rifle_ability_1",
    "flushingShot1",
  ],
  skillModifiers: {
    block: 15,
    private_rifle_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_rifleman_ability_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_rifleman_ability_01",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 250000 },
  commands: [
    "private_rifle_ability_2",
    "startleShot1",
  ],
  skillModifiers: {
    block: 15,
    private_rifle_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_rifleman_ability_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_rifleman_ability_02",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 350000 },
  commands: [
    "private_rifle_ability_3",
    "flushingShot2",
  ],
  skillModifiers: {
    block: 15,
    posture_change_up_defense: 30,
    stun_defense: 10,
    blind_defense: 10,
    dizzy_defense: 10,
    private_rifle_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_rifleman_ability_04: {
  title: "Gunner",
  skillPoints: 2,
  preReqs: [
    "combat_rifleman_ability_03",
  ],
  xp: { id: "combat_rangedspecialize_rifle", cost: 450000 },
  commands: [
    "private_rifle_ability_4",
    "startleShot2",
  ],
  skillModifiers: {
    block: 15,
    ranged_defense: 15,
    private_rifle_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_rifleman_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_rifleman_novice",
  ],
  xp: { id: "combat_general", cost: 60000 },
  commands: [
    "private_rifle_support_1",
    "flurryShot1",
  ],
  skillModifiers: {
    melee_defense: 10,
    rifle_speed: 5,
    private_rifle_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_rifleman_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_rifleman_support_01",
  ],
  xp: { id: "combat_general", cost: 85000 },
  commands: [
    "private_rifle_support_2",
  ],
  skillModifiers: {
    melee_defense: 10,
    rifle_speed: 5,
    private_rifle_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_rifleman_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_rifleman_support_02",
  ],
  xp: { id: "combat_general", cost: 120000 },
  commands: [
    "private_rifle_support_3",
    "flurryShot2",
  ],
  skillModifiers: {
    melee_defense: 10,
    rifle_speed: 5,
    private_rifle_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_rifleman_support_04: {
  title: "Soldier",
  skillPoints: 2,
  preReqs: [
    "combat_rifleman_support_03",
  ],
  xp: { id: "combat_general", cost: 150000 },
  commands: [
    "private_rifle_support_4",
  ],
  skillModifiers: {
    melee_defense: 10,
    rifle_speed: 5,
    private_rifle_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_pistol_novice: {
  title: "Novice Pistoleer",
  skillPoints: 6,
  preReqs: [
    "combat_marksman_pistol_04",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 125000 },
  commands: [
    "private_pistol_novice",
    "healthShot2",
    "cert_pistol_dx2",
    "cert_pistol_republic_blaster",
  ],
  skillModifiers: {
    pistol_accuracy: 5,
    pistol_speed: 5,
    private_pistol_combat_difficulty: 100,
    dodge: 10,
  },
  schematics: [""]
},
combat_pistol_master: {
  title: "Master Pistoleer",
  skillPoints: 1,
  preReqs: [
    "combat_pistol_accuracy_04",
    "combat_pistol_speed_04",
    "combat_pistol_ability_04",
    "combat_pistol_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_pistol_master",
    "multiTargetPistolShot",
    "disarmingShot2",
    "ranged_damage_mitigation_3",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 21,
    pistol_hit_while_moving: 10,
    pistol_aim: 4,
    ranged_defense: 5,
    melee_defense: 5,
    private_pistol_combat_difficulty: 100,
    dodge: 25,
  },
  schematics: [""]
},
combat_pistol_accuracy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_pistol_novice",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 175000 },
  commands: [
    "private_pistol_accuracy_1",
    "pointBlankSingle2",
  ],
  skillModifiers: {
    private_pistol_combat_difficulty: 125,
    dodge: 15,
  },
  schematics: [""]
},
combat_pistol_accuracy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_pistol_accuracy_01",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 250000 },
  commands: [
    "private_pistol_accuracy_2",
  ],
  skillModifiers: {
    dodge: 15,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_pistol_accuracy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_pistol_accuracy_02",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 350000 },
  commands: [
    "private_pistol_accuracy_3",
    "bodyShot3",
  ],
  skillModifiers: {
    dodge: 20,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_pistol_accuracy_04: {
  title: "Gunslinger",
  skillPoints: 2,
  preReqs: [
    "combat_pistol_accuracy_03",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 450000 },
  commands: [
    "private_pistol_accuracy_4",
    "pointBlankArea2",
  ],
  skillModifiers: {
    dodge: 20,
    private_pistol_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_pistol_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_pistol_novice",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 175000 },
  commands: [
    "private_pistol_speed_1",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_hit_while_moving: 5,
    pistol_aim: 3,
    private_pistol_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_pistol_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_pistol_speed_01",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 250000 },
  commands: [
    "private_pistol_speed_2",
  ],
  skillModifiers: {
    pistol_accuracy: 5,
    pistol_hit_while_moving: 5,
    pistol_aim: 3,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_pistol_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_pistol_speed_02",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 350000 },
  commands: [
    "private_pistol_speed_3",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_hit_while_moving: 5,
    pistol_aim: 3,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_pistol_speed_04: {
  title: "Dead-Eye",
  skillPoints: 2,
  preReqs: [
    "combat_pistol_speed_03",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 450000 },
  commands: [
    "private_pistol_speed_4",
  ],
  skillModifiers: {
    pistol_accuracy: 5,
    pistol_hit_while_moving: 5,
    pistol_aim: 3,
    private_pistol_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_pistol_ability_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_pistol_novice",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 175000 },
  commands: [
    "private_pistol_ability_1",
    "disarmingShot1",
    "ranged_damage_mitigation_1",
  ],
  skillModifiers: {
    stun_defense: 40,
    private_pistol_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_pistol_ability_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_pistol_ability_01",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 250000 },
  commands: [
    "private_pistol_ability_2",
    "doubleTap",
  ],
  skillModifiers: {
    blind_defense: 40,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_pistol_ability_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_pistol_ability_02",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 350000 },
  commands: [
    "private_pistol_ability_3",
    "stoppingShot",
    "ranged_damage_mitigation_2",
  ],
  skillModifiers: {
    dizzy_defense: 40,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_pistol_ability_04: {
  title: "Trickshot",
  skillPoints: 2,
  preReqs: [
    "combat_pistol_ability_03",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 450000 },
  commands: [
    "private_pistol_ability_4",
    "fanShot",
  ],
  skillModifiers: {
    posture_change_down_defense: 20,
    knockdown_defense: 50,
    private_pistol_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_pistol_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_pistol_novice",
  ],
  xp: { id: "combat_general", cost: 60000 },
  commands: [
    "private_pistol_defense_1",
    "pistolMeleeDefense1",
  ],
  skillModifiers: {
    melee_defense: 10,
    pistol_speed: 6,
    private_pistol_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_pistol_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_pistol_support_01",
  ],
  xp: { id: "combat_general", cost: 85000 },
  commands: [
    "private_pistol_defense_2",
  ],
  skillModifiers: {
    melee_defense: 10,
    pistol_speed: 6,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_pistol_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_pistol_support_02",
  ],
  xp: { id: "combat_general", cost: 120000 },
  commands: [
    "private_pistol_defense_3",
    "pistolMeleeDefense2",
  ],
  skillModifiers: {
    melee_defense: 10,
    pistol_speed: 6,
    pistol_accuracy_while_standing: 15,
    private_pistol_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_pistol_support_04: {
  title: "Quickdraw",
  skillPoints: 2,
  preReqs: [
    "combat_pistol_support_03",
  ],
  xp: { id: "combat_general", cost: 150000 },
  commands: [
    "private_pistol_defense_4",
  ],
  skillModifiers: {
    melee_defense: 10,
    pistol_speed: 6,
    private_pistol_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_carbine_novice: {
  title: "Novice Carbineer",
  skillPoints: 6,
  preReqs: [
    "combat_marksman_carbine_04",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 125000 },
  commands: [
    "private_carbine_novice",
    "actionShot2",
    "fullAutoSingle2",
    "cert_carbine_elite",
    "cert_carbine_nym_slugthrower",
  ],
  skillModifiers: {
    carbine_speed: 5,
    carbine_accuracy: 5,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_master: {
  title: "Master Carbineer",
  skillPoints: 1,
  preReqs: [
    "combat_carbine_support_04",
    "combat_carbine_speed_04",
    "combat_carbine_ability_04",
    "combat_carbine_accuracy_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_carbine_master",
    "ranged_damage_mitigation_3",
  ],
  skillModifiers: {
    carbine_speed: 15,
    carbine_accuracy: 20,
    carbine_hit_while_moving: 10,
    carbine_aim: 25,
    ranged_defense: 25,
    private_carbine_combat_difficulty: 100,
    counterattack: 25,
  },
  schematics: [""]
},
combat_carbine_accuracy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_carbine_novice",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 175000 },
  commands: [
    "private_carbine_accuracy_1",
    "scatterShot1",
  ],
  skillModifiers: {
    carbine_speed: 5,
    private_carbine_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_carbine_accuracy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_carbine_accuracy_01",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 250000 },
  commands: [
    "private_carbine_accuracy_2",
    "wildShot1",
  ],
  skillModifiers: {
    carbine_speed: 5,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_accuracy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_carbine_accuracy_02",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 350000 },
  commands: [
    "private_carbine_accuracy_3",
    "scatterShot2",
  ],
  skillModifiers: {
    carbine_speed: 5,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_accuracy_04: {
  title: "Mercenary",
  skillPoints: 2,
  preReqs: [
    "combat_carbine_accuracy_03",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 450000 },
  commands: [
    "private_carbine_accuracy_4",
    "wildShot2",
  ],
  skillModifiers: {
    carbine_speed: 5,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_carbine_novice",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 175000 },
  commands: [
    "private_carbine_speed_1",
    "legShot3",
  ],
  skillModifiers: {
    carbine_accuracy: 5,
    private_carbine_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_carbine_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_carbine_speed_01",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 250000 },
  commands: [
    "private_carbine_speed_2",
  ],
  skillModifiers: {
    carbine_accuracy: 10,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_carbine_speed_02",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 350000 },
  commands: [
    "private_carbine_speed_3",
    "cripplingShot",
  ],
  skillModifiers: {
    carbine_accuracy: 15,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_speed_04: {
  title: "Marauder",
  skillPoints: 2,
  preReqs: [
    "combat_carbine_speed_03",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 450000 },
  commands: [
    "private_carbine_speed_4",
  ],
  skillModifiers: {
    carbine_accuracy: 25,
    private_carbine_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_carbine_ability_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_carbine_novice",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 175000 },
  commands: [
    "private_carbine_ability_1",
    "burstShot1",
    "ranged_damage_mitigation_1",
  ],
  skillModifiers: {
    counterattack: 20,
    private_carbine_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_carbine_ability_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_carbine_ability_01",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 250000 },
  commands: [
    "private_carbine_ability_2",
  ],
  skillModifiers: {
    knockdown_defense: 15,
    intimidate_defense: 25,
    counterattack: 20,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_ability_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_carbine_ability_02",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 350000 },
  commands: [
    "private_carbine_ability_3",
    "burstShot2",
    "ranged_damage_mitigation_2",
  ],
  skillModifiers: {
    counterattack: 20,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_ability_04: {
  title: "Infiltrator",
  skillPoints: 2,
  preReqs: [
    "combat_carbine_ability_03",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 450000 },
  commands: [
    "private_carbine_ability_4",
    "suppressionFire2",
  ],
  skillModifiers: {
    counterattack: 20,
    private_carbine_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_carbine_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_carbine_novice",
  ],
  xp: { id: "combat_general", cost: 60000 },
  commands: [
    "private_carbine_support_1",
    "fullAutoArea1",
  ],
  skillModifiers: {
    carbine_hit_while_moving: 5,
    private_carbine_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_carbine_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_carbine_support_01",
  ],
  xp: { id: "combat_general", cost: 85000 },
  commands: [
    "private_carbine_support_2",
    "chargeShot1",
  ],
  skillModifiers: {
    carbine_hit_while_moving: 5,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_carbine_support_02",
  ],
  xp: { id: "combat_general", cost: 120000 },
  commands: [
    "private_carbine_support_3",
    "fullAutoArea2",
  ],
  skillModifiers: {
    carbine_hit_while_moving: 5,
    private_carbine_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_carbine_support_04: {
  title: "Assaulter",
  skillPoints: 2,
  preReqs: [
    "combat_carbine_support_03",
  ],
  xp: { id: "combat_general", cost: 150000 },
  commands: [
    "private_carbine_support_4",
    "chargeShot2",
  ],
  skillModifiers: {
    carbine_hit_while_moving: 5,
    private_carbine_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_unarmed_novice: {
  title: "Teras Kasi Novice",
  skillPoints: 6,
  preReqs: [
    "combat_brawler_unarmed_04",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 125000 },
  commands: [
    "private_unarmed_novice",
    "unarmedHit2",
    "meditate",
    "cert_vibroknuckler",
  ],
  skillModifiers: {
    unarmed_damage: 70,
    combat_equillibrium: 10,
    unarmed_speed: 10,
    unarmed_accuracy: 20,
    private_unarmed_combat_difficulty: 100,
    meditate: 15,
    unarmed_toughness: 4,
    private_med_dot: 5,
    unarmed_passive_defense: 15,
    unarmed_center_of_being_efficacy: 15,
    center_of_being_duration_unarmed: 5,
  },
  schematics: [""]
},
combat_unarmed_master: {
  title: "Teras Kasi Master",
  skillPoints: 1,
  preReqs: [
    "combat_unarmed_accuracy_04",
    "combat_unarmed_speed_04",
    "combat_unarmed_ability_04",
    "combat_unarmed_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_unarmed_master",
    "unarmedHit3",
    "melee_damage_mitigation_3",
  ],
  skillModifiers: {
    unarmed_damage: 70,
    combat_equillibrium: 15,
    unarmed_speed: 20,
    unarmed_accuracy: 35,
    private_unarmed_combat_difficulty: 100,
    meditate: 25,
    private_med_dot: 10,
    private_med_wound: 10,
    unarmed_passive_defense: 25,
    unarmed_center_of_being_efficacy: 10,
    center_of_being_duration_unarmed: 5,
  },
  schematics: [""]
},
combat_unarmed_accuracy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_unarmed_novice",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 175000 },
  commands: [
    "private_unarmed_accuarcy_1",
  ],
  skillModifiers: {
    private_unarmed_combat_difficulty: 125,
    meditate: 15,
    private_med_dot: 5,
  },
  schematics: [""]
},
combat_unarmed_accuracy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_unarmed_accuracy_01",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 250000 },
  commands: [
    "private_unarmed_accuarcy_2",
    "powerBoost",
  ],
  skillModifiers: {
    private_unarmed_combat_difficulty: 100,
    meditate: 15,
    private_med_dot: 10,
    private_med_wound: 5,
  },
  schematics: [""]
},
combat_unarmed_accuracy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_unarmed_accuracy_02",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 350000 },
  commands: [
    "private_unarmed_accuracy_3",
  ],
  skillModifiers: {
    private_unarmed_combat_difficulty: 100,
    meditate: 15,
    private_med_dot: 10,
    private_med_wound: 5,
  },
  schematics: [""]
},
combat_unarmed_accuracy_04: {
  title: "Teras Kasi Mystic",
  skillPoints: 2,
  preReqs: [
    "combat_unarmed_accuracy_03",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 450000 },
  commands: [
    "private_unarmed_accuracy_4",
    "forceOfWill",
  ],
  skillModifiers: {
    private_unarmed_combat_difficulty: 100,
    meditate: 15,
    private_med_dot: 10,
    private_med_wound: 5,
  },
  schematics: [""]
},
combat_unarmed_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_unarmed_novice",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 175000 },
  commands: [
    "private_unarmed_speed_1",
    "unarmedKnockdown1",
    "melee_damage_mitigation_1",
  ],
  skillModifiers: {
    combat_equillibrium: 10,
    blind_defense: 10,
    posture_change_down_defense: 10,
    private_unarmed_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_unarmed_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_unarmed_speed_01",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 250000 },
  commands: [
    "private_unarmed_speed_2",
  ],
  skillModifiers: {
    stun_defense: 10,
    combat_equillibrium: 10,
    posture_change_down_defense: 10,
    private_unarmed_combat_difficulty: 100,
    unarmed_toughness: 15,
  },
  schematics: [""]
},
combat_unarmed_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_unarmed_speed_02",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 350000 },
  commands: [
    "private_unarmed_speed_3",
    "melee_damage_mitigation_2",
  ],
  skillModifiers: {
    stun_defense: 5,
    combat_equillibrium: 10,
    posture_change_down_defense: 10,
    dizzy_defense: 5,
    knockdown_defense: 20,
    private_unarmed_combat_difficulty: 100,
    unarmed_toughness: 4,
  },
  schematics: [""]
},
combat_unarmed_speed_04: {
  title: "Teras Kasi Monk",
  skillPoints: 2,
  preReqs: [
    "combat_unarmed_speed_03",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 450000 },
  commands: [
    "private_unarmed_speed_4",
    "unarmedKnockdown2",
  ],
  skillModifiers: {
    private_unarmed_combat_difficulty: 125,
    unarmed_toughness: 4,
  },
  schematics: [""]
},
combat_unarmed_ability_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_unarmed_novice",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 175000 },
  commands: [
    "private_unarmed_ability_1",
    "unarmedDizzy1",
  ],
  skillModifiers: {
    unarmed_damage: 15,
    unarmed_speed: 15,
    private_unarmed_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_unarmed_ability_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_unarmed_ability_01",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 250000 },
  commands: [
    "private_unarmed_ability_2",
    "unarmedCombo1",
  ],
  skillModifiers: {
    unarmed_damage: 15,
    unarmed_speed: 15,
    private_unarmed_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_unarmed_ability_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_unarmed_ability_02",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 350000 },
  commands: [
    "private_unarmed_ability_3",
    "unarmedSpinAttack2",
  ],
  skillModifiers: {
    unarmed_damage: 15,
    unarmed_speed: 15,
    private_unarmed_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_unarmed_ability_04: {
  title: "Teras Kasi Expert",
  skillPoints: 2,
  preReqs: [
    "combat_unarmed_ability_03",
  ],
  xp: { id: "combat_meleespecialize_unarmed", cost: 450000 },
  commands: [
    "private_unarmed_ability_4",
    "unarmedCombo2",
  ],
  skillModifiers: {
    unarmed_damage: 15,
    unarmed_speed: 15,
    private_unarmed_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_unarmed_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_unarmed_novice",
  ],
  xp: { id: "combat_general", cost: 60000 },
  commands: [
    "private_unarmed_support_1",
    "unarmedBodyHit1",
  ],
  skillModifiers: {
    melee_defense: 15,
    ranged_defense: 5,
    unarmed_accuracy: 30,
    private_unarmed_combat_difficulty: 125,
    unarmed_passive_defense: 15,
    unarmed_center_of_being_efficacy: 10,
    center_of_being_duration_unarmed: 2,
  },
  schematics: [""]
},
combat_unarmed_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_unarmed_support_01",
  ],
  xp: { id: "combat_general", cost: 85000 },
  commands: [
    "private_unarmed_support_2",
    "unarmedLegHit1",
  ],
  skillModifiers: {
    private_unarmed_combat_difficulty: 100,
    melee_defense: 15,
    ranged_defense: 10,
    unarmed_accuracy: 20,
    unarmed_toughness: 5,
    unarmed_passive_defense: 11,
    unarmed_center_of_being_efficacy: 5,
    center_of_being_duration_unarmed: 2,
  },
  schematics: [""]
},
combat_unarmed_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_unarmed_support_02",
  ],
  xp: { id: "combat_general", cost: 120000 },
  commands: [
    "private_unarmed_support_3",
  ],
  skillModifiers: {
    melee_defense: 15,
    ranged_defense: 15,
    unarmed_accuracy: 30,
    private_unarmed_combat_difficulty: 100,
    unarmed_passive_defense: 15,
    unarmed_center_of_being_efficacy: 10,
    center_of_being_duration_unarmed: 2,
  },
  schematics: [""]
},
combat_unarmed_support_04: {
  title: "Teras Kasi Warrior",
  skillPoints: 2,
  preReqs: [
    "combat_unarmed_support_03",
  ],
  xp: { id: "combat_general", cost: 150000 },
  commands: [
    "private_unarmed_support_4",
    "unarmedHeadHit1",
  ],
  skillModifiers: {
    private_unarmed_combat_difficulty: 100,
    melee_defense: 15,
    ranged_defense: 15,
    unarmed_accuracy: 20,
    unarmed_toughness: 5,
    unarmed_passive_defense: 15,
    unarmed_center_of_being_efficacy: 10,
    center_of_being_duration_unarmed: 1,
  },
  schematics: [""]
},
combat_1hsword_novice: {
  title: "Novice Fencer",
  skillPoints: 6,
  preReqs: [
    "combat_brawler_1handmelee_04",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 125000 },
  commands: [
    "private_1hand_novice",
    "melee1hHit2",
    "cert_baton_stun",
  ],
  skillModifiers: {
    onehandmelee_accuracy: 20,
    onehandmelee_speed: 5,
    melee_defense: 15,
    ranged_defense: 15,
    dodge: 15,
    private_onehandmelee_combat_difficulty: 100,
    onehandmelee_toughness: 4,
    center_of_being_duration_onehandmelee: 5,
    onehandmelee_center_of_being_efficacy: 15,
  },
  schematics: [""]
},
combat_1hsword_master: {
  title: "Master Fencer",
  skillPoints: 1,
  preReqs: [
    "combat_1hsword_accuracy_04",
    "combat_1hsword_speed_04",
    "combat_1hsword_ability_04",
    "combat_1hsword_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_1hand_master",
    "melee1hHit3",
    "melee_damage_mitigation_3",
  ],
  skillModifiers: {
    onehandmelee_accuracy: 20,
    onehandmelee_speed: 5,
    alert: 10,
    melee_defense: 5,
    combat_equillibrium: 10,
    dodge: 15,
    private_onehandmelee_combat_difficulty: 100,
    center_of_being_duration_onehandmelee: 5,
    onehandmelee_center_of_being_efficacy: 15,
  },
  schematics: [""]
},
combat_1hsword_accuracy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_1hsword_novice",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 175000 },
  commands: [
    "private_1hand_accuracy_1",
    "melee1hScatterHit1",
  ],
  skillModifiers: {
    melee_defense: 12,
    ranged_defense: 12,
    private_onehandmelee_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_1hsword_accuracy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_1hsword_accuracy_01",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 250000 },
  commands: [
    "private_1hand_accuracy_2",
  ],
  skillModifiers: {
    ranged_defense: 15,
    melee_defense: 15,
    private_onehandmelee_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_1hsword_accuracy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_1hsword_accuracy_02",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 350000 },
  commands: [
    "private_1hand_accuracy_3",
    "melee1hDizzyHit2",
  ],
  skillModifiers: {
    melee_defense: 12,
    ranged_defense: 12,
    private_onehandmelee_combat_difficulty: 100,
    onehandmelee_toughness: 4,
  },
  schematics: [""]
},
combat_1hsword_accuracy_04: {
  title: "Duelist",
  skillPoints: 2,
  preReqs: [
    "combat_1hsword_accuracy_03",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 450000 },
  commands: [
    "private_1hand_accuracy_4",
    "melee1hScatterHit2",
  ],
  skillModifiers: {
    ranged_defense: 15,
    melee_defense: 15,
    private_onehandmelee_combat_difficulty: 125,
    onehandmelee_toughness: 4,
  },
  schematics: [""]
},
combat_1hsword_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_1hsword_novice",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 175000 },
  commands: [
    "private_1hand_speed_1",
    "melee1hHealthHit1",
  ],
  skillModifiers: {
    onehandmelee_speed: 5,
    private_onehandmelee_combat_difficulty: 125,
    center_of_being_duration_onehandmelee: 2,
    onehandmelee_center_of_being_efficacy: 5,
  },
  schematics: [""]
},
combat_1hsword_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_1hsword_speed_01",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 250000 },
  commands: [
    "private_1hand_speed_2",
  ],
  skillModifiers: {
    posture_change_down_defense: 20,
    knockdown_defense: 20,
    onehandmelee_speed: 20,
    private_onehandmelee_combat_difficulty: 100,
    center_of_being_duration_onehandmelee: 2,
    onehandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_1hsword_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_1hsword_speed_02",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 350000 },
  commands: [
    "private_1hand_speed_3",
    "melee1hSpinAttack2",
  ],
  skillModifiers: {
    private_onehandmelee_combat_difficulty: 100,
    center_of_being_duration_onehandmelee: 2,
    onehandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_1hsword_speed_04: {
  title: "Swashbuckler",
  skillPoints: 2,
  preReqs: [
    "combat_1hsword_speed_03",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 450000 },
  commands: [
    "private_1hand_speed_4",
    "melee1hHealthHit2",
  ],
  skillModifiers: {
    posture_change_down_defense: 30,
    knockdown_defense: 30,
    onehandmelee_speed: 20,
    dodge: 15,
    private_onehandmelee_combat_difficulty: 125,
    center_of_being_duration_onehandmelee: 2,
    onehandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_1hsword_ability_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_1hsword_novice",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 175000 },
  commands: [
    "private_1hand_ability_1",
    "melee1hBodyHit2",
    "melee_damage_mitigation_1",
  ],
  skillModifiers: {
    private_onehandmelee_combat_difficulty: 125,
    dodge: 15,
  },
  schematics: [""]
},
combat_1hsword_ability_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_1hsword_ability_01",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 250000 },
  commands: [
    "private_1hand_ability_2",
  ],
  skillModifiers: {
    blind_defense: 10,
    dizzy_defense: 10,
    intimidate_defense: 10,
    private_onehandmelee_combat_difficulty: 100,
    dodge: 15,
  },
  schematics: [""]
},
combat_1hsword_ability_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_1hsword_ability_02",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 350000 },
  commands: [
    "private_1hand_ability_3",
    "melee1hBodyHit3",
    "melee_damage_mitigation_2",
  ],
  skillModifiers: {
    private_onehandmelee_combat_difficulty: 100,
    dodge: 15,
  },
  schematics: [""]
},
combat_1hsword_ability_04: {
  title: "Bladesmaster",
  skillPoints: 2,
  preReqs: [
    "combat_1hsword_ability_03",
  ],
  xp: { id: "combat_meleespecialize_onehand", cost: 450000 },
  commands: [
    "private_1hand_ability_4",
  ],
  skillModifiers: {
    blind_defense: 30,
    dizzy_defense: 30,
    intimidate_defense: 10,
    dodge: 15,
    private_onehandmelee_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_1hsword_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_1hsword_novice",
  ],
  xp: { id: "combat_general", cost: 60000 },
  commands: [
    "private_1hand_support_1",
    "melee1hBlindHit1",
  ],
  skillModifiers: {
    private_onehandmelee_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_1hsword_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_1hsword_support_01",
  ],
  xp: { id: "combat_general", cost: 85000 },
  commands: [
    "private_1hand_support_2",
  ],
  skillModifiers: {
    combat_equillibrium: 10,
    onehandmelee_accuracy: 30,
    private_onehandmelee_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_1hsword_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_1hsword_support_02",
  ],
  xp: { id: "combat_general", cost: 120000 },
  commands: [
    "private_1hand_support_3",
    "melee1hBlindHit2",
  ],
  skillModifiers: {
    private_onehandmelee_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_1hsword_support_04: {
  title: "Blade Weaver",
  skillPoints: 2,
  preReqs: [
    "combat_1hsword_support_03",
  ],
  xp: { id: "combat_general", cost: 150000 },
  commands: [
    "private_1hand_support_4",
  ],
  skillModifiers: {
    combat_equillibrium: 10,
    onehandmelee_accuracy: 30,
    private_onehandmelee_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_2hsword_novice: {
  title: "Novice Swordsman",
  skillPoints: 6,
  preReqs: [
    "combat_brawler_2handmelee_04",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 125000 },
  commands: [
    "private_2hand_novice",
    "melee2hHit2",
    "cert_sword_2h_maul",
  ],
  skillModifiers: {
    twohandmelee_accuracy: 15,
    twohandmelee_speed: 5,
    melee_defense: 5,
    counterattack: 15,
    private_twohandmelee_combat_difficulty: 100,
    twohandmelee_toughness: 15,
    center_of_being_duration_twohandmelee: 5,
    twohandmelee_center_of_being_efficacy: 15,
  },
  schematics: [""]
},
combat_2hsword_master: {
  title: "Master Swordsman",
  skillPoints: 1,
  preReqs: [
    "combat_2hsword_accuracy_04",
    "combat_2hsword_speed_04",
    "combat_2hsword_ability_04",
    "combat_2hsword_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_2hand_master",
    "melee2hHit3",
    "melee_damage_mitigation_3",
  ],
  skillModifiers: {
    twohandmelee_accuracy: 15,
    twohandmelee_speed: 5,
    melee_defense: 5,
    stun_defense: 30,
    blind_defense: 10,
    knockdown_defense: 10,
    ranged_defense: 5,
    counterattack: 25,
    private_twohandmelee_combat_difficulty: 100,
    center_of_being_duration_twohandmelee: 5,
    twohandmelee_center_of_being_efficacy: 15,
  },
  schematics: [""]
},
combat_2hsword_accuracy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_2hsword_novice",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 175000 },
  commands: [
    "private_2hand_accuracy_1",
    "melee2hArea1",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_2hsword_accuracy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_2hsword_accuracy_01",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 250000 },
  commands: [
    "private_2hand_accuracy_2",
    "melee2hArea2",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_2hsword_accuracy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_2hsword_accuracy_02",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 350000 },
  commands: [
    "private_2hand_accuracy_3",
  ],
  skillModifiers: {
    intimidate_defense: 20,
    dizzy_defense: 20,
    stun_defense: 20,
    private_twohandmelee_combat_difficulty: 100,
    twohandmelee_toughness: 4,
  },
  schematics: [""]
},
combat_2hsword_accuracy_04: {
  title: "Cleaver",
  skillPoints: 2,
  preReqs: [
    "combat_2hsword_accuracy_03",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 450000 },
  commands: [
    "private_2hand_accuracy_4",
    "melee2hArea3",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 125,
    twohandmelee_toughness: 4,
  },
  schematics: [""]
},
combat_2hsword_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_2hsword_novice",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 175000 },
  commands: [
    "private_2hand_speed_1",
    "melee2hHeadHit2",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_2hsword_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_2hsword_speed_01",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 250000 },
  commands: [
    "private_2hand_speed_2",
  ],
  skillModifiers: {
    twohandmelee_speed: 15,
    private_twohandmelee_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_2hsword_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_2hsword_speed_02",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 350000 },
  commands: [
    "melee2hHeadHit3",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_2hsword_speed_04: {
  title: "Battlemaster",
  skillPoints: 2,
  preReqs: [
    "combat_2hsword_speed_03",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    twohandmelee_speed: 15,
    private_twohandmelee_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_2hsword_ability_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_2hsword_novice",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 175000 },
  commands: [
    "melee2hSpinAttack2",
    "melee_damage_mitigation_1",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 125,
    counterattack: 15,
    center_of_being_duration_twohandmelee: 2,
    twohandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_2hsword_ability_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_2hsword_ability_01",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
    ranged_defense: 5,
    posture_change_down_defense: 10,
    private_twohandmelee_combat_difficulty: 100,
    counterattack: 15,
    center_of_being_duration_twohandmelee: 2,
    twohandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_2hsword_ability_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_2hsword_ability_02",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 350000 },
  commands: [
    "melee2hSweep2",
    "melee_damage_mitigation_2",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 100,
    counterattack: 15,
    center_of_being_duration_twohandmelee: 2,
    twohandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_2hsword_ability_04: {
  title: "Expert Heavy Swordsman",
  skillPoints: 2,
  preReqs: [
    "combat_2hsword_ability_03",
  ],
  xp: { id: "combat_meleespecialize_twohand", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
    ranged_defense: 5,
    knockdown_defense: 15,
    counterattack: 15,
    private_twohandmelee_combat_difficulty: 125,
    center_of_being_duration_twohandmelee: 2,
    twohandmelee_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_2hsword_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_2hsword_novice",
  ],
  xp: { id: "combat_general", cost: 60000 },
  commands: [
    "melee2hMindHit1",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_2hsword_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_2hsword_support_01",
  ],
  xp: { id: "combat_general", cost: 85000 },
  commands: [
    "",
  ],
  skillModifiers: {
    twohandmelee_accuracy: 20,
    private_twohandmelee_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_2hsword_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_2hsword_support_02",
  ],
  xp: { id: "combat_general", cost: 120000 },
  commands: [
    "melee2hMindHit2",
    "cert_sword_2h_scythe",
  ],
  skillModifiers: {
    private_twohandmelee_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_2hsword_support_04: {
  title: "Warrior",
  skillPoints: 2,
  preReqs: [
    "combat_2hsword_support_03",
  ],
  xp: { id: "combat_general", cost: 150000 },
  commands: [
    "",
  ],
  skillModifiers: {
    twohandmelee_accuracy: 30,
    private_twohandmelee_combat_difficulty: 125,
    counterattack: 10,
  },
  schematics: [""]
},
combat_polearm_novice: {
  title: "Novice Pikeman",
  skillPoints: 6,
  preReqs: [
    "combat_brawler_polearm_04",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 125000 },
  commands: [
    "private_polearm_novice",
    "polearmHit2",
    "cert_lance_vibrolance",
  ],
  skillModifiers: {
    polearm_accuracy: 20,
    polearm_speed: 10,
    melee_defense: 5,
    block: 25,
    private_polearm_combat_difficulty: 100,
    polearm_toughness: 10,
    center_of_being_duration_polearm: 5,
    polearm_center_of_being_efficacy: 15,
  },
  schematics: [""]
},
combat_polearm_master: {
  title: "Master Pikeman",
  skillPoints: 1,
  preReqs: [
    "combat_polearm_accuracy_04",
    "combat_polearm_speed_04",
    "combat_polearm_ability_04",
    "combat_polearm_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_polearm_master",
    "polearmHit3",
    "melee_damage_mitigation_3",
  ],
  skillModifiers: {
    polearm_accuracy: 20,
    polearm_speed: 10,
    melee_defense: 15,
    ranged_defense: 15,
    posture_change_down_defense: 10,
    dizzy_defense: 20,
    stun_defense: 30,
    block: 30,
    private_polearm_combat_difficulty: 100,
    center_of_being_duration_polearm: 5,
    polearm_center_of_being_efficacy: 15,
  },
  schematics: [""]
},
combat_polearm_accuracy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_polearm_novice",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 175000 },
  commands: [
    "private_polearm_accuracy_1",
    "polearmStun2",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_polearm_accuracy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_polearm_accuracy_01",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 250000 },
  commands: [
    "private_polearm_accuracy_2",
  ],
  skillModifiers: {
    polearm_speed: 15,
    private_polearm_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_polearm_accuracy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_polearm_accuracy_02",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 350000 },
  commands: [
    "private_polearm_accuracy_3",
    "polearmSpinAttack2",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_polearm_accuracy_04: {
  title: "Heavy Cleaver",
  skillPoints: 2,
  preReqs: [
    "combat_polearm_accuracy_03",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 450000 },
  commands: [
    "private_polearm_accuracy_4",
  ],
  skillModifiers: {
    polearm_speed: 15,
    private_polearm_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_polearm_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_polearm_novice",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 175000 },
  commands: [
    "polearmLegHit2",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_polearm_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_polearm_speed_01",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 250000 },
  commands: [
    "polearmArea1",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_polearm_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_polearm_speed_02",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 350000 },
  commands: [
    "polearmLegHit3",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_polearm_speed_04: {
  title: "Pike Weaver",
  skillPoints: 2,
  preReqs: [
    "combat_polearm_speed_03",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 450000 },
  commands: [
    "polearmArea2",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 125,
  },
  schematics: [""]
},
combat_polearm_ability_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_polearm_novice",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 175000 },
  commands: [
    "polearmSweep1",
    "melee_damage_mitigation_1",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 125,
    block: 15,
    center_of_being_duration_polearm: 2,
    polearm_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_polearm_ability_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_polearm_ability_01",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
    ranged_defense: 5,
    knockdown_defense: 10,
    posture_change_down_defense: 10,
    dizzy_defense: 10,
    stun_defense: 10,
    blind_defense: 10,
    private_polearm_combat_difficulty: 100,
    block: 15,
    center_of_being_duration_polearm: 2,
    polearm_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_polearm_ability_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_polearm_ability_02",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 350000 },
  commands: [
    "polearmSweep2",
    "melee_damage_mitigation_2",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 100,
    block: 15,
    center_of_being_duration_polearm: 2,
    polearm_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_polearm_ability_04: {
  title: "Foot Soldier",
  skillPoints: 2,
  preReqs: [
    "combat_polearm_ability_03",
  ],
  xp: { id: "combat_meleespecialize_polearm", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
    ranged_defense: 5,
    knockdown_defense: 10,
    posture_change_down_defense: 10,
    dizzy_defense: 10,
    stun_defense: 10,
    blind_defense: 10,
    block: 15,
    private_polearm_combat_difficulty: 125,
    polearm_toughness: 4,
    center_of_being_duration_polearm: 2,
    polearm_center_of_being_efficacy: 10,
  },
  schematics: [""]
},
combat_polearm_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_polearm_novice",
  ],
  xp: { id: "combat_general", cost: 60000 },
  commands: [
    "polearmActionHit1",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 125,
    polearm_toughness: 4,
  },
  schematics: [""]
},
combat_polearm_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_polearm_support_01",
  ],
  xp: { id: "combat_general", cost: 85000 },
  commands: [
    "",
  ],
  skillModifiers: {
    polearm_accuracy: 30,
    private_polearm_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_polearm_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_polearm_support_02",
  ],
  xp: { id: "combat_general", cost: 120000 },
  commands: [
    "polearmActionHit2",
  ],
  skillModifiers: {
    private_polearm_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_polearm_support_04: {
  title: "Sentinel",
  skillPoints: 2,
  preReqs: [
    "combat_polearm_support_03",
  ],
  xp: { id: "combat_general", cost: 150000 },
  commands: [
    "",
  ],
  skillModifiers: {
    polearm_accuracy: 30,
    private_polearm_combat_difficulty: 125,
  },
  schematics: [""]
},
social_dancer_novice: {
  title: "Novice Dancer",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_dance_04",
    "social_entertainer_healing_04",
  ],
  xp: { id: "dance", cost: 50000 },
  commands: [
    "startDance+popular",
    "startDance+poplock",
    "registerWithLocation",
  ],
  skillModifiers: {
    healing_dance_ability: 10,
    healing_dance_wound: 5,
    healing_dance_shock: 10,
    healing_dance_mind: 10,
  },
  schematics: [""]
},
social_dancer_master: {
  title: "Master Dancer",
  skillPoints: 0,
  preReqs: [
    "social_dancer_ability_04",
    "social_dancer_wound_04",
    "social_dancer_knowledge_04",
    "social_dancer_shock_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "startDance+lyrical2",
    "startDance+exotic3",
    "startDance+exotic4",
    "place_cantina",
    "place_theater",
  ],
  skillModifiers: {
    healing_dance_ability: 10,
    healing_dance_wound: 15,
    healing_dance_shock: 25,
    healing_dance_mind: 25,
    melee_defense: 7,
    ranged_defense: 7,
    private_place_cantina: 100,
    private_place_theater: 100,
  },
  schematics: [""]
},
social_dancer_ability_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_novice",
  ],
  xp: { id: "dance", cost: 87500 },
  commands: [
    "spotlight",
    "colorlights",
    "dazzle",
  ],
  skillModifiers: {
    healing_dance_mind: 10,
  },
  schematics: [""]
},
social_dancer_ability_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_ability_01",
  ],
  xp: { id: "dance", cost: 125000 },
  commands: [
    "distract",
  ],
  skillModifiers: {
    healing_dance_mind: 10,
  },
  schematics: [""]
},
social_dancer_ability_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_ability_02",
  ],
  xp: { id: "dance", cost: 175000 },
  commands: [
    "smokebomb",
  ],
  skillModifiers: {
    healing_dance_mind: 20,
  },
  schematics: [""]
},
social_dancer_ability_04: {
  title: "Dazzler",
  skillPoints: 0,
  preReqs: [
    "social_dancer_ability_03",
  ],
  xp: { id: "dance", cost: 225000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_mind: 25,
  },
  schematics: [""]
},
social_dancer_wound_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_novice",
  ],
  xp: { id: "entertainer_healing", cost: 25000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_wound: 5,
  },
  schematics: [""]
},
social_dancer_wound_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_wound_01",
  ],
  xp: { id: "entertainer_healing", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_wound: 10,
  },
  schematics: [""]
},
social_dancer_wound_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_wound_02",
  ],
  xp: { id: "entertainer_healing", cost: 100000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_wound: 10,
  },
  schematics: [""]
},
social_dancer_wound_04: {
  title: "Captivator",
  skillPoints: 0,
  preReqs: [
    "social_dancer_wound_03",
  ],
  xp: { id: "entertainer_healing", cost: 125000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_wound: 15,
  },
  schematics: [""]
},
social_dancer_knowledge_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_novice",
  ],
  xp: { id: "dance", cost: 87500 },
  commands: [
    "startDance+popular2",
    "startDance+tumble",
  ],
  skillModifiers: {
    healing_dance_ability: 10,
  },
  schematics: [""]
},
social_dancer_knowledge_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_knowledge_01",
  ],
  xp: { id: "dance", cost: 125000 },
  commands: [
    "startDance+poplock2",
    "startDance+tumble2",
  ],
  skillModifiers: {
    healing_dance_ability: 10,
  },
  schematics: [""]
},
social_dancer_knowledge_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_knowledge_02",
  ],
  xp: { id: "dance", cost: 175000 },
  commands: [
    "startDance+lyrical",
    "startDance+breakdance",
  ],
  skillModifiers: {
    healing_dance_ability: 10,
  },
  schematics: [""]
},
social_dancer_knowledge_04: {
  title: "Choreographer",
  skillPoints: 0,
  preReqs: [
    "social_dancer_knowledge_03",
  ],
  xp: { id: "dance", cost: 225000 },
  commands: [
    "startDance+breakdance2",
    "startDance+exotic",
    "startDance+exotic2",
  ],
  skillModifiers: {
    healing_dance_ability: 10,
  },
  schematics: [""]
},
social_dancer_shock_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_novice",
  ],
  xp: { id: "entertainer_healing", cost: 25000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_shock: 10,
  },
  schematics: [""]
},
social_dancer_shock_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_shock_01",
  ],
  xp: { id: "entertainer_healing", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_shock: 10,
  },
  schematics: [""]
},
social_dancer_shock_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_dancer_shock_02",
  ],
  xp: { id: "entertainer_healing", cost: 100000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_shock: 20,
  },
  schematics: [""]
},
social_dancer_shock_04: {
  title: "Enthraller",
  skillPoints: 0,
  preReqs: [
    "social_dancer_shock_03",
  ],
  xp: { id: "entertainer_healing", cost: 125000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_dance_shock: 25,
  },
  schematics: [""]
},
social_musician_novice: {
  title: "Novice Musician",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_music_04",
    "social_entertainer_healing_04",
  ],
  xp: { id: "music", cost: 50000 },
  commands: [
    "traz",
    "registerWithLocation",
    "startMusic+starwars4",
  ],
  skillModifiers: {
    healing_music_ability: 5,
    healing_music_wound: 5,
    healing_music_shock: 10,
    healing_music_mind: 10,
    instrument_assembly: 10,
  },
  schematics: ["craftInstrumentGroupC"]
},
social_musician_master: {
  title: "Master Musician",
  skillPoints: 0,
  preReqs: [
    "social_musician_ability_04",
    "social_musician_wound_04",
    "social_musician_knowledge_04",
    "social_musician_shock_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "startMusic+virtuoso",
    "nalargon",
    "place_cantina",
    "place_theater",
  ],
  skillModifiers: {
    healing_music_ability: 15,
    healing_music_wound: 15,
    healing_music_shock: 25,
    healing_music_mind: 25,
    instrument_assembly: 25,
    ranged_defense: 7,
    melee_defense: 7,
    private_place_cantina: 100,
    private_place_theater: 100,
  },
  schematics: [""]
},
social_musician_ability_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_novice",
  ],
  xp: { id: "music", cost: 87500 },
  commands: [
    "spotlight",
    "colorlights",
    "dazzle",
  ],
  skillModifiers: {
    instrument_assembly: 10,
    healing_music_mind: 10,
  },
  schematics: [""]
},
social_musician_ability_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_ability_01",
  ],
  xp: { id: "music", cost: 125000 },
  commands: [
    "firejet",
  ],
  skillModifiers: {
    instrument_assembly: 15,
    healing_music_mind: 10,
  },
  schematics: ["craftInstrumentGroupD"]
},
social_musician_ability_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_ability_02",
  ],
  xp: { id: "music", cost: 175000 },
  commands: [
    "ventriloquism",
  ],
  skillModifiers: {
    instrument_assembly: 15,
    healing_music_mind: 20,
  },
  schematics: ["craftInstrumentGroupE"]
},
social_musician_ability_04: {
  title: "Virtuoso",
  skillPoints: 0,
  preReqs: [
    "social_musician_ability_03",
  ],
  xp: { id: "music", cost: 225000 },
  commands: [
    "",
  ],
  skillModifiers: {
    instrument_assembly: 25,
    healing_music_mind: 25,
  },
  schematics: ["craftInstrumentGroupF"]
},
social_musician_wound_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_novice",
  ],
  xp: { id: "entertainer_healing", cost: 25000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_music_wound: 5,
  },
  schematics: [""]
},
social_musician_wound_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_wound_01",
  ],
  xp: { id: "entertainer_healing", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_music_wound: 10,
  },
  schematics: [""]
},
social_musician_wound_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_wound_02",
  ],
  xp: { id: "entertainer_healing", cost: 100000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_music_wound: 10,
  },
  schematics: [""]
},
social_musician_wound_04: {
  title: "Skilled Musician",
  skillPoints: 0,
  preReqs: [
    "social_musician_wound_03",
  ],
  xp: { id: "entertainer_healing", cost: 125000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_music_wound: 15,
  },
  schematics: [""]
},
social_musician_knowledge_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_novice",
  ],
  xp: { id: "music", cost: 87500 },
  commands: [
    "startMusic+ballad",
  ],
  skillModifiers: {
    healing_music_ability: 5,
  },
  schematics: [""]
},
social_musician_knowledge_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_knowledge_01",
  ],
  xp: { id: "music", cost: 125000 },
  commands: [
    "bandfill",
    "startMusic+funk",
  ],
  skillModifiers: {
    healing_music_ability: 10,
  },
  schematics: [""]
},
social_musician_knowledge_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_knowledge_02",
  ],
  xp: { id: "music", cost: 175000 },
  commands: [
    "startMusic+waltz",
    "flutedroopy",
  ],
  skillModifiers: {
    healing_music_ability: 10,
  },
  schematics: [""]
},
social_musician_knowledge_04: {
  title: "Composer",
  skillPoints: 0,
  preReqs: [
    "social_musician_knowledge_03",
  ],
  xp: { id: "music", cost: 225000 },
  commands: [
    "startMusic+jazz",
    "omnibox",
  ],
  skillModifiers: {
    healing_music_ability: 15,
  },
  schematics: [""]
},
social_musician_shock_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_novice",
  ],
  xp: { id: "entertainer_healing", cost: 25000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_music_shock: 10,
  },
  schematics: [""]
},
social_musician_shock_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_shock_01",
  ],
  xp: { id: "entertainer_healing", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_music_shock: 10,
  },
  schematics: [""]
},
social_musician_shock_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_musician_shock_02",
  ],
  xp: { id: "entertainer_healing", cost: 100000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_music_shock: 20,
  },
  schematics: [""]
},
social_musician_shock_04: {
  title: "Mesmerizer",
  skillPoints: 0,
  preReqs: [
    "social_musician_shock_03",
  ],
  xp: { id: "entertainer_healing", cost: 125000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_music_shock: 25,
  },
  schematics: [""]
},
science_doctor_novice: {
  title: "Novice Doctor",
  skillPoints: 6,
  preReqs: [
    "science_medic_master",
  ],
  xp: { id: "medical", cost: 11250 },
  commands: [
    "healState",
    "registerWithLocation",
  ],
  skillModifiers: {
    healing_wound_treatment: 5,
    healing_wound_speed: 5,
    medicine_assembly: 10,
    medicine_experimentation: 10,
    healing_ability: 5,
  },
  schematics: ["craftCurePoisonGroupA","craftStimpackStateGroupA"]
},
science_doctor_master: {
  title: "Master Doctor",
  skillPoints: 1,
  preReqs: [
    "science_doctor_wound_speed_04",
    "science_doctor_wound_04",
    "science_doctor_ability_04",
    "science_doctor_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "place_hospital",
  ],
  skillModifiers: {
    healing_wound_treatment: 25,
    healing_wound_speed: 25,
    healing_ability: 10,
    private_place_hospital: 100,
  },
  schematics: ["craftMedpackGroupE","craftMedpackBGroupE","craftCureDiseaseGroupC","craftMedpackBEnhanceGroupD"]
},
science_doctor_wound_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "science_doctor_novice",
  ],
  xp: { id: "medical", cost: 15000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_wound_speed: 15,
  },
  schematics: [""]
},
science_doctor_wound_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "science_doctor_wound_speed_01",
  ],
  xp: { id: "medical", cost: 30000 },
  commands: [
    "curePoison",
  ],
  skillModifiers: {
    healing_wound_speed: 15,
  },
  schematics: [""]
},
science_doctor_wound_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "science_doctor_wound_speed_02",
  ],
  xp: { id: "medical", cost: 45000 },
  commands: [
    "extinguishFire",
  ],
  skillModifiers: {
    healing_wound_speed: 15,
  },
  schematics: [""]
},
science_doctor_wound_speed_04: {
  title: "Field Surgeon",
  skillPoints: 2,
  preReqs: [
    "science_doctor_wound_speed_03",
  ],
  xp: { id: "medical", cost: 60000 },
  commands: [
    "cureDisease",
  ],
  skillModifiers: {
    healing_wound_speed: 25,
  },
  schematics: [""]
},
science_doctor_wound_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "science_doctor_novice",
  ],
  xp: { id: "medical", cost: 15000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_wound_treatment: 10,
  },
  schematics: [""]
},
science_doctor_wound_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "science_doctor_wound_01",
  ],
  xp: { id: "medical", cost: 30000 },
  commands: [
    "healEnhance",
  ],
  skillModifiers: {
    healing_wound_treatment: 15,
  },
  schematics: [""]
},
science_doctor_wound_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "science_doctor_wound_02",
  ],
  xp: { id: "medical", cost: 45000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_wound_treatment: 15,
  },
  schematics: [""]
},
science_doctor_wound_04: {
  title: "Master Surgeon",
  skillPoints: 2,
  preReqs: [
    "science_doctor_wound_03",
  ],
  xp: { id: "medical", cost: 60000 },
  commands: [
    "revivePlayer",
  ],
  skillModifiers: {
    healing_wound_treatment: 25,
  },
  schematics: [""]
},
science_doctor_ability_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "science_doctor_novice",
  ],
  xp: { id: "medical", cost: 15000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_ability: 5,
  },
  schematics: [""]
},
science_doctor_ability_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "science_doctor_ability_01",
  ],
  xp: { id: "medical", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_ability: 10,
  },
  schematics: [""]
},
science_doctor_ability_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "science_doctor_ability_02",
  ],
  xp: { id: "medical", cost: 45000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_ability: 10,
  },
  schematics: [""]
},
science_doctor_ability_04: {
  title: "Medical Professor",
  skillPoints: 2,
  preReqs: [
    "science_doctor_ability_03",
  ],
  xp: { id: "medical", cost: 60000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_ability: 10,
  },
  schematics: [""]
},
science_doctor_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "science_doctor_novice",
  ],
  xp: { id: "crafting_medicine_general", cost: 15000 },
  commands: [
    "",
  ],
  skillModifiers: {
    medicine_assembly: 10,
    medicine_experimentation: 10,
  },
  schematics: ["craftCureDiseaseGroupA","craftMedpackEnhanceGroupA","craftStimpackStateGroupB"]
},
science_doctor_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "science_doctor_support_01",
  ],
  xp: { id: "crafting_medicine_general", cost: 21000 },
  commands: [
    "",
  ],
  skillModifiers: {
    medicine_assembly: 10,
    medicine_experimentation: 10,
  },
  schematics: ["craftMedpackGroupC","craftCurePoisonGroupB","craftMedpackEnhanceGroupB","craftMedpackBEnhanceGroupA"]
},
science_doctor_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "science_doctor_support_02",
  ],
  xp: { id: "crafting_medicine_general", cost: 27000 },
  commands: [
    "",
  ],
  skillModifiers: {
    medicine_assembly: 10,
    medicine_experimentation: 10,
  },
  schematics: ["craftMedicineStimpackGroupE","craftMedpackBGroupC","craftCureDiseaseGroupB","craftMedpackEnhanceGroupC","craftMedpackBEnhanceGroupB"]
},
science_doctor_support_04: {
  title: "Master Chemist",
  skillPoints: 2,
  preReqs: [
    "science_doctor_support_03",
  ],
  xp: { id: "crafting_medicine_general", cost: 33000 },
  commands: [
    "",
  ],
  skillModifiers: {
    medicine_assembly: 10,
    medicine_experimentation: 10,
  },
  schematics: ["craftMedpackGroupD","craftMedpackBGroupD","craftCurePoisonGroupC","craftMedpackEnhanceGroupD","craftMedpackBEnhanceGroupC"]
},
outdoors_ranger_novice: {
  title: "Novice Ranger",
  skillPoints: 6,
  preReqs: [
    "outdoors_scout_master",
  ],
  xp: { id: "scout", cost: 15000 },
  commands: [
    "areatrack",
    "areatrack_animal",
  ],
  skillModifiers: {
    slope_move: 5,
    camp: 5,
    foraging: 5,
    creature_knowledge: 5,
    creature_harvesting: 5,
    private_areatrack: 10,
  },
  schematics: ["craftRangerCampGroupA"]
},
outdoors_ranger_master: {
  title: "Master Ranger",
  skillPoints: 1,
  preReqs: [
    "outdoors_ranger_movement_04",
    "outdoors_ranger_tracking_04",
    "outdoors_ranger_harvest_04",
    "outdoors_ranger_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    camouflage: 20,
    camp: 5,
    foraging: 5,
    creature_knowledge: 10,
    creature_harvesting: 60,
    trapping: 10,
    rescue: 10,
    ranged_defense: 10,
    melee_defense: 10,
  },
  schematics: ["craftRangerCamoGroupMaster"]
},
outdoors_ranger_movement_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "outdoors_ranger_novice",
  ],
  xp: { id: "scout", cost: 20000 },
  commands: [
    "conceal",
  ],
  skillModifiers: {
    camouflage: 40,
  },
  schematics: ["craftRangerCamoGroupA"]
},
outdoors_ranger_movement_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "outdoors_ranger_movement_01",
  ],
  xp: { id: "scout", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    slope_move: 20,
    burst_run: 10,
  },
  schematics: ["craftRangerCamoGroupB"]
},
outdoors_ranger_movement_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "outdoors_ranger_movement_02",
  ],
  xp: { id: "scout", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    camouflage: 40,
  },
  schematics: ["craftRangerCamoGroupC"]
},
outdoors_ranger_movement_04: {
  title: "Wayfarer",
  skillPoints: 2,
  preReqs: [
    "outdoors_ranger_movement_03",
  ],
  xp: { id: "scout", cost: 70000 },
  commands: [
    "",
  ],
  skillModifiers: {
    slope_move: 20,
    burst_run: 10,
  },
  schematics: ["craftRangerCamoGroupD"]
},
outdoors_ranger_tracking_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "outdoors_ranger_novice",
  ],
  xp: { id: "camp", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    camp: 10,
    foraging: 10,
  },
  schematics: [""]
},
outdoors_ranger_tracking_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "outdoors_ranger_tracking_01",
  ],
  xp: { id: "camp", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    camp: 10,
    foraging: 10,
  },
  schematics: ["craftRangerCampGroupB"]
},
outdoors_ranger_tracking_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "outdoors_ranger_tracking_02",
  ],
  xp: { id: "camp", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    camp: 10,
    foraging: 10,
  },
  schematics: [""]
},
outdoors_ranger_tracking_04: {
  title: "Frontiersman",
  skillPoints: 2,
  preReqs: [
    "outdoors_ranger_tracking_03",
  ],
  xp: { id: "camp", cost: 60000 },
  commands: [
    "",
  ],
  skillModifiers: {
    camp: 10,
    foraging: 10,
  },
  schematics: ["craftRangerCampGroupC"]
},
outdoors_ranger_harvest_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "outdoors_ranger_novice",
  ],
  xp: { id: "scout", cost: 20000 },
  commands: [
    "areatrack_direction",
  ],
  skillModifiers: {
    creature_knowledge: 5,
    creature_harvesting: 5,
    private_areatrack: 10,
  },
  schematics: [""]
},
outdoors_ranger_harvest_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "outdoors_ranger_harvest_01",
  ],
  xp: { id: "scout", cost: 30000 },
  commands: [
    "areatrack_npc",
  ],
  skillModifiers: {
    creature_knowledge: 10,
    creature_harvesting: 10,
    creature_hit_bonus: 10,
    private_areatrack: 10,
  },
  schematics: [""]
},
outdoors_ranger_harvest_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "outdoors_ranger_harvest_02",
  ],
  xp: { id: "scout", cost: 50000 },
  commands: [
    "areatrack_distance",
  ],
  skillModifiers: {
    creature_knowledge: 10,
    creature_harvesting: 10,
    private_areatrack: 10,
  },
  schematics: [""]
},
outdoors_ranger_harvest_04: {
  title: "Tracker",
  skillPoints: 2,
  preReqs: [
    "outdoors_ranger_harvest_03",
  ],
  xp: { id: "scout", cost: 70000 },
  commands: [
    "areatrack_player",
  ],
  skillModifiers: {
    creature_knowledge: 10,
    creature_harvesting: 10,
    creature_hit_bonus: 5,
    private_areatrack: 10,
  },
  schematics: [""]
},
outdoors_ranger_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "outdoors_ranger_novice",
  ],
  xp: { id: "trapping", cost: 20000 },
  commands: [
    "rescue",
  ],
  skillModifiers: {
    trapping: 10,
    rescue: 10,
  },
  schematics: [""]
},
outdoors_ranger_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "outdoors_ranger_support_01",
  ],
  xp: { id: "trapping", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    trapping: 10,
    rescue: 10,
  },
  schematics: ["craftRangerTrapGroupA"]
},
outdoors_ranger_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "outdoors_ranger_support_02",
  ],
  xp: { id: "trapping", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    trapping: 10,
    rescue: 10,
  },
  schematics: ["craftRangerTrapGroupB"]
},
outdoors_ranger_support_04: {
  title: "Trap Master",
  skillPoints: 2,
  preReqs: [
    "outdoors_ranger_support_03",
  ],
  xp: { id: "trapping", cost: 70000 },
  commands: [
    "",
  ],
  skillModifiers: {
    trapping: 10,
    rescue: 10,
  },
  schematics: [""]
},
outdoors_creaturehandler_novice: {
  title: "Novice Creature Handler",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_movement_04",
    "outdoors_scout_harvest_04",
  ],
  xp: { id: "scout", cost: 17500 },
  commands: [
    "pet_follow",
    "pet_release",
    "pet_attack",
    "tame",
  ],
  skillModifiers: {
    stored_pets: 4,
    keep_creature: 1,
    tame_non_aggro: 5,
    tame_level: 12,
  },
  schematics: [""]
},
outdoors_creaturehandler_master: {
  title: "Master Creature Handler",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_taming_04",
    "outdoors_creaturehandler_training_04",
    "outdoors_creaturehandler_healing_04",
    "outdoors_creaturehandler_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "pet_transfer",
    "pet_rangedattack",
  ],
  skillModifiers: {
    keep_creature: 1,
    tame_non_aggro: 5,
    tame_aggro: 15,
    private_creature_empathy: 10,
    private_creature_training: 10,
    private_creature_management: 10,
    tame_level: 10,
    stored_pets: 4,
  },
  schematics: [""]
},
outdoors_creaturehandler_taming_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_novice",
  ],
  xp: { id: "creaturehandler", cost: 17500 },
  commands: [
    "",
  ],
  skillModifiers: {
    tame_non_aggro: 5,
    tame_level: 2,
  },
  schematics: [""]
},
outdoors_creaturehandler_taming_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_taming_01",
  ],
  xp: { id: "creaturehandler", cost: 52500 },
  commands: [
    "",
  ],
  skillModifiers: {
    tame_non_aggro: 5,
    tame_aggro: 10,
    tame_level: 2,
  },
  schematics: [""]
},
outdoors_creaturehandler_taming_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_taming_02",
  ],
  xp: { id: "creaturehandler", cost: 87500 },
  commands: [
    "pet_specialattack1",
  ],
  skillModifiers: {
    tame_non_aggro: 5,
    tame_aggro: 10,
    tame_level: 3,
  },
  schematics: [""]
},
outdoors_creaturehandler_taming_04: {
  title: "Creature Tamer",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_taming_03",
  ],
  xp: { id: "creaturehandler", cost: 140000 },
  commands: [
    "pet_specialattack2",
  ],
  skillModifiers: {
    tame_non_aggro: 5,
    tame_aggro: 15,
    tame_level: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_training_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_novice",
  ],
  xp: { id: "creaturehandler", cost: 17500 },
  commands: [
    "pet_stay",
  ],
  skillModifiers: {
    private_creature_training: 10,
    tame_level: 2,
    stored_pets: 2,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_training_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_training_01",
  ],
  xp: { id: "creaturehandler", cost: 52500 },
  commands: [
    "pet_guard",
  ],
  skillModifiers: {
    stored_pets: 3,
    private_creature_training: 10,
    tame_level: 2,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_training_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_training_02",
  ],
  xp: { id: "creaturehandler", cost: 87500 },
  commands: [
    "pet_patrol",
  ],
  skillModifiers: {
    private_creature_training: 10,
    tame_level: 3,
    stored_pets: 3,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_training_04: {
  title: "Creature Trainer",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_training_03",
  ],
  xp: { id: "creaturehandler", cost: 140000 },
  commands: [
    "pet_formation",
  ],
  skillModifiers: {
    stored_pets: 4,
    private_creature_training: 10,
    tame_level: 5,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_healing_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_novice",
  ],
  xp: { id: "creaturehandler", cost: 17500 },
  commands: [
    "trick1",
  ],
  skillModifiers: {
    private_creature_empathy: 10,
    tame_level: 2,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_healing_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_healing_01",
  ],
  xp: { id: "creaturehandler", cost: 52500 },
  commands: [
    "emboldenpets",
  ],
  skillModifiers: {
    private_creature_empathy: 10,
    tame_level: 2,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_healing_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_healing_02",
  ],
  xp: { id: "creaturehandler", cost: 87500 },
  commands: [
    "trick2",
  ],
  skillModifiers: {
    private_creature_empathy: 10,
    tame_level: 3,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_healing_04: {
  title: "Creature Empath",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_healing_03",
  ],
  xp: { id: "creaturehandler", cost: 140000 },
  commands: [
    "enragepets",
  ],
  skillModifiers: {
    private_creature_empathy: 10,
    tame_level: 5,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_support_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_novice",
  ],
  xp: { id: "creaturehandler", cost: 17500 },
  commands: [
    "pet_group",
  ],
  skillModifiers: {
    private_creature_management: 10,
    tame_level: 2,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_support_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_support_01",
  ],
  xp: { id: "creaturehandler", cost: 52500 },
  commands: [
    "pet_followother",
  ],
  skillModifiers: {
    private_creature_management: 10,
    tame_level: 2,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_support_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_support_02",
  ],
  xp: { id: "creaturehandler", cost: 87500 },
  commands: [
    "pet_friend",
  ],
  skillModifiers: {
    keep_creature: 1,
    private_creature_management: 10,
    tame_level: 3,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_creaturehandler_support_04: {
  title: "Pack Master",
  skillPoints: 1,
  preReqs: [
    "outdoors_creaturehandler_support_03",
  ],
  xp: { id: "creaturehandler", cost: 140000 },
  commands: [
    "train_mount",
  ],
  skillModifiers: {
    private_creature_management: 10,
    tame_level: 5,
    tame_non_aggro: 5,
  },
  schematics: [""]
},
outdoors_bio_engineer_novice: {
  title: "Novice Bio-Engineer",
  skillPoints: 6,
  preReqs: [
    "outdoors_scout_harvest_04",
    "science_medic_crafting_04",
  ],
  xp: { id: "crafting_medicine_general", cost: 10000 },
  commands: [
    "sampleDNA",
  ],
  skillModifiers: {
    bio_engineer_assembly: 10,
    bio_engineer_experimentation: 10,
    dna_harvesting: 15,
  },
  schematics: ["craftBasicTissueGroup","craftBasicCreatureGroup"]
},
outdoors_bio_engineer_master: {
  title: "Master Bio-Engineer",
  skillPoints: 1,
  preReqs: [
    "outdoors_bio_engineer_creature_04",
    "outdoors_bio_engineer_tissue_04",
    "outdoors_bio_engineer_dna_harvesting_04",
    "outdoors_bio_engineer_production_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    bio_engineer_assembly: 25,
    bio_engineer_experimentation: 25,
    dna_harvesting: 25,
  },
  schematics: ["craftAdvancedTissueGroup","craftAdvancedCreatureGroup"]
},
outdoors_bio_engineer_creature_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "outdoors_bio_engineer_novice",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftDomesticCreatureGroupA"]
},
outdoors_bio_engineer_creature_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "outdoors_bio_engineer_creature_01",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftAggressiveCreatureGroupA"]
},
outdoors_bio_engineer_creature_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "outdoors_bio_engineer_creature_02",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftDomesticCreatureGroupB"]
},
outdoors_bio_engineer_creature_04: {
  title: "Breeder",
  skillPoints: 2,
  preReqs: [
    "outdoors_bio_engineer_creature_03",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 80000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftAggressiveCreatureGroupB"]
},
outdoors_bio_engineer_tissue_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "outdoors_bio_engineer_novice",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftTissueGroupA"]
},
outdoors_bio_engineer_tissue_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "outdoors_bio_engineer_tissue_01",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftTissueGroupB"]
},
outdoors_bio_engineer_tissue_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "outdoors_bio_engineer_tissue_02",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftTissueGroupC"]
},
outdoors_bio_engineer_tissue_04: {
  title: "Expert Bio-Engineer",
  skillPoints: 2,
  preReqs: [
    "outdoors_bio_engineer_tissue_03",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 80000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftTissueGroupD"]
},
outdoors_bio_engineer_dna_harvesting_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "outdoors_bio_engineer_novice",
  ],
  xp: { id: "bio_engineer_dna_harvesting", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    dna_harvesting: 15,
  },
  schematics: [""]
},
outdoors_bio_engineer_dna_harvesting_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "outdoors_bio_engineer_dna_harvesting_01",
  ],
  xp: { id: "bio_engineer_dna_harvesting", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    dna_harvesting: 15,
  },
  schematics: [""]
},
outdoors_bio_engineer_dna_harvesting_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "outdoors_bio_engineer_dna_harvesting_02",
  ],
  xp: { id: "bio_engineer_dna_harvesting", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    dna_harvesting: 15,
  },
  schematics: [""]
},
outdoors_bio_engineer_dna_harvesting_04: {
  title: "Field Scientist",
  skillPoints: 2,
  preReqs: [
    "outdoors_bio_engineer_dna_harvesting_03",
  ],
  xp: { id: "bio_engineer_dna_harvesting", cost: 80000 },
  commands: [
    "",
  ],
  skillModifiers: {
    dna_harvesting: 15,
  },
  schematics: [""]
},
outdoors_bio_engineer_production_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "outdoors_bio_engineer_novice",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    bio_engineer_assembly: 10,
    bio_engineer_experimentation: 10,
  },
  schematics: [""]
},
outdoors_bio_engineer_production_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "outdoors_bio_engineer_production_01",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    bio_engineer_assembly: 15,
    bio_engineer_experimentation: 15,
  },
  schematics: [""]
},
outdoors_bio_engineer_production_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "outdoors_bio_engineer_production_02",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    bio_engineer_assembly: 15,
    bio_engineer_experimentation: 15,
  },
  schematics: [""]
},
outdoors_bio_engineer_production_04: {
  title: "Geneticist",
  skillPoints: 2,
  preReqs: [
    "outdoors_bio_engineer_production_03",
  ],
  xp: { id: "crafting_bio_engineer_creature", cost: 80000 },
  commands: [
    "",
  ],
  skillModifiers: {
    bio_engineer_assembly: 25,
    bio_engineer_experimentation: 25,
  },
  schematics: [""]
},
crafting_armorsmith_novice: {
  title: "Novice Armorsmith",
  skillPoints: 6,
  preReqs: [
    "crafting_artisan_engineering_04",
  ],
  xp: { id: "crafting_general", cost: 16800 },
  commands: [
    "",
  ],
  skillModifiers: {
    armor_assembly: 10,
    armor_experimentation: 10,
    armor_customization: 20,
  },
  schematics: ["craftArmorPersonalGroupA"]
},
crafting_armorsmith_master: {
  title: "Master Armorsmith",
  skillPoints: 1,
  preReqs: [
    "crafting_armorsmith_personal_04",
    "crafting_armorsmith_heavy_04",
    "crafting_armorsmith_deflectors_04",
    "crafting_armorsmith_complexity_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    armor_assembly: 25,
    armor_experimentation: 25,
    armor_customization: 55,
  },
  schematics: ["craftArmorLightLayersGroupE","craftArmorPersonalGroupF"]
},
crafting_armorsmith_personal_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_armorsmith_novice",
  ],
  xp: { id: "crafting_clothing_armor", cost: 28000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorPersonalGroupB"]
},
crafting_armorsmith_personal_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_armorsmith_personal_01",
  ],
  xp: { id: "crafting_clothing_armor", cost: 39200 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorPersonalGroupC"]
},
crafting_armorsmith_personal_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_armorsmith_personal_02",
  ],
  xp: { id: "crafting_clothing_armor", cost: 50400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorPersonalGroupD"]
},
crafting_armorsmith_personal_04: {
  title: "Master of Armor Design",
  skillPoints: 2,
  preReqs: [
    "crafting_armorsmith_personal_03",
  ],
  xp: { id: "crafting_clothing_armor", cost: 61600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorPersonalGroupE"]
},
crafting_armorsmith_heavy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_armorsmith_novice",
  ],
  xp: { id: "crafting_clothing_armor", cost: 28000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorLightLayersGroupA"]
},
crafting_armorsmith_heavy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_armorsmith_heavy_01",
  ],
  xp: { id: "crafting_clothing_armor", cost: 39200 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorLightLayersGroupB"]
},
crafting_armorsmith_heavy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_armorsmith_heavy_02",
  ],
  xp: { id: "crafting_clothing_armor", cost: 50400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorLightLayersGroupC"]
},
crafting_armorsmith_heavy_04: {
  title: "Materials Specialist",
  skillPoints: 2,
  preReqs: [
    "crafting_armorsmith_heavy_03",
  ],
  xp: { id: "crafting_clothing_armor", cost: 61600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorLightLayersGroupD"]
},
crafting_armorsmith_deflectors_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_armorsmith_novice",
  ],
  xp: { id: "crafting_clothing_armor", cost: 28000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorShieldsGroupA"]
},
crafting_armorsmith_deflectors_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_armorsmith_deflectors_01",
  ],
  xp: { id: "crafting_clothing_armor", cost: 39200 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorShieldsGroupB"]
},
crafting_armorsmith_deflectors_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_armorsmith_deflectors_02",
  ],
  xp: { id: "crafting_clothing_armor", cost: 50400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorShieldsGroupC"]
},
crafting_armorsmith_deflectors_04: {
  title: "Deflector Technologist",
  skillPoints: 2,
  preReqs: [
    "crafting_armorsmith_deflectors_03",
  ],
  xp: { id: "crafting_clothing_armor", cost: 61600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftArmorShieldsGroupD"]
},
crafting_armorsmith_complexity_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_armorsmith_novice",
  ],
  xp: { id: "crafting_clothing_armor", cost: 28000 },
  commands: [
    "",
  ],
  skillModifiers: {
    armor_assembly: 10,
    armor_experimentation: 10,
    armor_customization: 20,
  },
  schematics: [""]
},
crafting_armorsmith_complexity_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_armorsmith_complexity_01",
  ],
  xp: { id: "crafting_clothing_armor", cost: 39200 },
  commands: [
    "",
  ],
  skillModifiers: {
    armor_assembly: 15,
    armor_experimentation: 15,
    armor_customization: 20,
  },
  schematics: [""]
},
crafting_armorsmith_complexity_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_armorsmith_complexity_02",
  ],
  xp: { id: "crafting_clothing_armor", cost: 50400 },
  commands: [
    "",
  ],
  skillModifiers: {
    armor_assembly: 20,
    armor_experimentation: 20,
    armor_customization: 20,
  },
  schematics: [""]
},
crafting_armorsmith_complexity_04: {
  title: "Expert Armorsmith",
  skillPoints: 2,
  preReqs: [
    "crafting_armorsmith_complexity_03",
  ],
  xp: { id: "crafting_clothing_armor", cost: 61600 },
  commands: [
    "",
  ],
  skillModifiers: {
    armor_assembly: 20,
    armor_experimentation: 20,
    armor_customization: 20,
  },
  schematics: [""]
},
crafting_weaponsmith_novice: {
  title: "Novice Weaponsmith",
  skillPoints: 6,
  preReqs: [
    "crafting_artisan_engineering_04",
  ],
  xp: { id: "crafting_general", cost: 21000 },
  commands: [
    "",
  ],
  skillModifiers: {
    weapon_assembly: 10,
    weapon_experimentation: 10,
  },
  schematics: ["craftWeaponMeleeGroupA","craftWeaponRangedGroupA","craftMunitionsGroupA"]
},
crafting_weaponsmith_master: {
  title: "Master Weaponsmith",
  skillPoints: 1,
  preReqs: [
    "crafting_weaponsmith_melee_04",
    "crafting_weaponsmith_firearms_04",
    "crafting_weaponsmith_munitions_04",
    "crafting_weaponsmith_techniques_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    weapon_assembly: 25,
    weapon_experimentation: 25,
  },
  schematics: ["craftWeaponRangedGroupF","craftMunitionsGroupF","craftWeaponMeleeGroupF"]
},
crafting_weaponsmith_melee_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_weaponsmith_novice",
  ],
  xp: { id: "crafting_weapons_general", cost: 35000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftWeaponMeleeGroupB"]
},
crafting_weaponsmith_melee_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_weaponsmith_melee_01",
  ],
  xp: { id: "crafting_weapons_general", cost: 49000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftWeaponMeleeGroupC"]
},
crafting_weaponsmith_melee_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_weaponsmith_melee_02",
  ],
  xp: { id: "crafting_weapons_general", cost: 63000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftWeaponMeleeGroupD"]
},
crafting_weaponsmith_melee_04: {
  title: "Swordsmith",
  skillPoints: 2,
  preReqs: [
    "crafting_weaponsmith_melee_03",
  ],
  xp: { id: "crafting_weapons_general", cost: 77000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftWeaponMeleeGroupE"]
},
crafting_weaponsmith_firearms_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_weaponsmith_novice",
  ],
  xp: { id: "crafting_weapons_general", cost: 35000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftWeaponRangedGroupB"]
},
crafting_weaponsmith_firearms_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_weaponsmith_firearms_01",
  ],
  xp: { id: "crafting_weapons_general", cost: 49000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftWeaponRangedGroupC"]
},
crafting_weaponsmith_firearms_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_weaponsmith_firearms_02",
  ],
  xp: { id: "crafting_weapons_general", cost: 63000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftWeaponRangedGroupD"]
},
crafting_weaponsmith_firearms_04: {
  title: "Gunsmith",
  skillPoints: 2,
  preReqs: [
    "crafting_weaponsmith_firearms_03",
  ],
  xp: { id: "crafting_weapons_general", cost: 77000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftWeaponRangedGroupE"]
},
crafting_weaponsmith_munitions_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_weaponsmith_novice",
  ],
  xp: { id: "crafting_weapons_general", cost: 35000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftMunitionsGroupB"]
},
crafting_weaponsmith_munitions_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_weaponsmith_munitions_01",
  ],
  xp: { id: "crafting_weapons_general", cost: 49000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftMunitionsGroupC"]
},
crafting_weaponsmith_munitions_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_weaponsmith_munitions_02",
  ],
  xp: { id: "crafting_weapons_general", cost: 63000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftMunitionsGroupD"]
},
crafting_weaponsmith_munitions_04: {
  title: "Explosives Manufacturer",
  skillPoints: 2,
  preReqs: [
    "crafting_weaponsmith_munitions_03",
  ],
  xp: { id: "crafting_weapons_general", cost: 77000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftMunitionsGroupE"]
},
crafting_weaponsmith_techniques_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_weaponsmith_novice",
  ],
  xp: { id: "crafting_weapons_general", cost: 35000 },
  commands: [
    "",
  ],
  skillModifiers: {
    weapon_assembly: 10,
    weapon_experimentation: 10,
  },
  schematics: [""]
},
crafting_weaponsmith_techniques_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_weaponsmith_techniques_01",
  ],
  xp: { id: "crafting_weapons_general", cost: 49000 },
  commands: [
    "",
  ],
  skillModifiers: {
    weapon_assembly: 15,
    weapon_experimentation: 15,
  },
  schematics: [""]
},
crafting_weaponsmith_techniques_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_weaponsmith_techniques_02",
  ],
  xp: { id: "crafting_weapons_general", cost: 63000 },
  commands: [
    "",
  ],
  skillModifiers: {
    weapon_assembly: 20,
    weapon_experimentation: 20,
  },
  schematics: [""]
},
crafting_weaponsmith_techniques_04: {
  title: "Expert Weaponsmith",
  skillPoints: 2,
  preReqs: [
    "crafting_weaponsmith_techniques_03",
  ],
  xp: { id: "crafting_weapons_general", cost: 77000 },
  commands: [
    "",
  ],
  skillModifiers: {
    weapon_assembly: 20,
    weapon_experimentation: 20,
  },
  schematics: [""]
},
crafting_chef_novice: {
  title: "Novice Chef",
  skillPoints: 6,
  preReqs: [
    "crafting_artisan_domestic_04",
  ],
  xp: { id: "crafting_general", cost: 19200 },
  commands: [
    "",
  ],
  skillModifiers: {
    food_assembly: 20,
    food_experimentation: 20,
  },
  schematics: ["craftFoodNoviceGroupA","craftFoodNoviceGroupB","craftFoodNoviceGroupC"]
},
crafting_chef_master: {
  title: "Master Chef",
  skillPoints: 1,
  preReqs: [
    "crafting_chef_drink_04",
    "crafting_chef_dish_04",
    "crafting_chef_dessert_04",
    "crafting_chef_techniques_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "place_cantina",
  ],
  skillModifiers: {
    food_assembly: 10,
    food_experimentation: 10,
    private_place_cantina: 100,
  },
  schematics: ["craftFoodMaster"]
},
crafting_chef_dish_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_chef_novice",
  ],
  xp: { id: "crafting_food_general", cost: 32000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDishGroupA"]
},
crafting_chef_dish_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_chef_dish_01",
  ],
  xp: { id: "crafting_food_general", cost: 44800 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDishGroupB"]
},
crafting_chef_dish_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_chef_dish_02",
  ],
  xp: { id: "crafting_food_general", cost: 57600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDishGroupC"]
},
crafting_chef_dish_04: {
  title: "Iron Chef",
  skillPoints: 2,
  preReqs: [
    "crafting_chef_dish_03",
  ],
  xp: { id: "crafting_food_general", cost: 70400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDishGroupD"]
},
crafting_chef_dessert_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_chef_novice",
  ],
  xp: { id: "crafting_food_general", cost: 32000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDessertGroupA"]
},
crafting_chef_dessert_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_chef_dessert_01",
  ],
  xp: { id: "crafting_food_general", cost: 44800 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDessertGroupB"]
},
crafting_chef_dessert_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_chef_dessert_02",
  ],
  xp: { id: "crafting_food_general", cost: 57600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDessertGroupC"]
},
crafting_chef_dessert_04: {
  title: "Accomplished Baker",
  skillPoints: 2,
  preReqs: [
    "crafting_chef_dessert_03",
  ],
  xp: { id: "crafting_food_general", cost: 70400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDessertGroupD"]
},
crafting_chef_drink_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_chef_novice",
  ],
  xp: { id: "crafting_food_general", cost: 32000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDrinkGroupA"]
},
crafting_chef_drink_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_chef_drink_01",
  ],
  xp: { id: "crafting_food_general", cost: 44800 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDrinkGroupB"]
},
crafting_chef_drink_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_chef_drink_02",
  ],
  xp: { id: "crafting_food_general", cost: 57600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDrinkGroupC"]
},
crafting_chef_drink_04: {
  title: "Expert Bartender",
  skillPoints: 2,
  preReqs: [
    "crafting_chef_drink_03",
  ],
  xp: { id: "crafting_food_general", cost: 70400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftFoodDrinkGroupD"]
},
crafting_chef_techniques_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_chef_novice",
  ],
  xp: { id: "crafting_food_general", cost: 32000 },
  commands: [
    "",
  ],
  skillModifiers: {
    food_assembly: 10,
    food_experimentation: 10,
  },
  schematics: [""]
},
crafting_chef_techniques_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_chef_techniques_01",
  ],
  xp: { id: "crafting_food_general", cost: 44800 },
  commands: [
    "",
  ],
  skillModifiers: {
    food_assembly: 20,
    food_experimentation: 20,
  },
  schematics: [""]
},
crafting_chef_techniques_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_chef_techniques_02",
  ],
  xp: { id: "crafting_food_general", cost: 57600 },
  commands: [
    "",
  ],
  skillModifiers: {
    food_assembly: 20,
    food_experimentation: 20,
  },
  schematics: [""]
},
crafting_chef_techniques_04: {
  title: "Culinary Master",
  skillPoints: 2,
  preReqs: [
    "crafting_chef_techniques_03",
  ],
  xp: { id: "crafting_food_general", cost: 70400 },
  commands: [
    "",
  ],
  skillModifiers: {
    food_assembly: 20,
    food_experimentation: 20,
  },
  schematics: [""]
},
crafting_tailor_novice: {
  title: "Novice Tailor",
  skillPoints: 6,
  preReqs: [
    "crafting_artisan_domestic_04",
  ],
  xp: { id: "crafting_general", cost: 19200 },
  commands: [
    "",
  ],
  skillModifiers: {
    clothing_assembly: 20,
    clothing_experimentation: 20,
    clothing_customization: 20,
  },
  schematics: ["craftClothingNoviceGroupA","craftClothingNoviceGroupB","craftClothingNoviceGroupC"]
},
crafting_tailor_master: {
  title: "Master Tailor",
  skillPoints: 1,
  preReqs: [
    "crafting_tailor_casual_04",
    "crafting_tailor_field_04",
    "crafting_tailor_formal_04",
    "crafting_tailor_production_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    clothing_assembly: 10,
    clothing_experimentation: 20,
    clothing_customization: 55,
  },
  schematics: ["craftClothingMaster"]
},
crafting_tailor_casual_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_tailor_novice",
  ],
  xp: { id: "crafting_clothing_general", cost: 32000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingCasualGroupA"]
},
crafting_tailor_casual_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_tailor_casual_01",
  ],
  xp: { id: "crafting_clothing_general", cost: 44800 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingCasualGroupB"]
},
crafting_tailor_casual_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_tailor_casual_02",
  ],
  xp: { id: "crafting_clothing_general", cost: 57600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingCasualGroupC"]
},
crafting_tailor_casual_04: {
  title: "Clothier",
  skillPoints: 2,
  preReqs: [
    "crafting_tailor_casual_03",
  ],
  xp: { id: "crafting_clothing_general", cost: 70400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingCasualGroupD"]
},
crafting_tailor_field_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_tailor_novice",
  ],
  xp: { id: "crafting_clothing_general", cost: 32000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingFieldGroupA"]
},
crafting_tailor_field_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_tailor_field_01",
  ],
  xp: { id: "crafting_clothing_general", cost: 44800 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingFieldGroupB"]
},
crafting_tailor_field_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_tailor_field_02",
  ],
  xp: { id: "crafting_clothing_general", cost: 57600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingFieldGroupC"]
},
crafting_tailor_field_04: {
  title: "Uniform Marshal",
  skillPoints: 2,
  preReqs: [
    "crafting_tailor_field_03",
  ],
  xp: { id: "crafting_clothing_general", cost: 70400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingFieldGroupD"]
},
crafting_tailor_formal_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_tailor_novice",
  ],
  xp: { id: "crafting_clothing_general", cost: 32000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingFormalGroupA"]
},
crafting_tailor_formal_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_tailor_formal_01",
  ],
  xp: { id: "crafting_clothing_general", cost: 44800 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingFormalGroupB"]
},
crafting_tailor_formal_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_tailor_formal_02",
  ],
  xp: { id: "crafting_clothing_general", cost: 57600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingFormalGroupC"]
},
crafting_tailor_formal_04: {
  title: "Costumier",
  skillPoints: 2,
  preReqs: [
    "crafting_tailor_formal_03",
  ],
  xp: { id: "crafting_clothing_general", cost: 70400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftClothingFormalGroupD"]
},
crafting_tailor_production_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_tailor_novice",
  ],
  xp: { id: "crafting_clothing_general", cost: 32000 },
  commands: [
    "",
  ],
  skillModifiers: {
    clothing_assembly: 10,
    clothing_experimentation: 15,
    clothing_customization: 20,
  },
  schematics: [""]
},
crafting_tailor_production_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_tailor_production_01",
  ],
  xp: { id: "crafting_clothing_general", cost: 44800 },
  commands: [
    "",
  ],
  skillModifiers: {
    clothing_assembly: 20,
    clothing_experimentation: 15,
    clothing_customization: 20,
  },
  schematics: [""]
},
crafting_tailor_production_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_tailor_production_02",
  ],
  xp: { id: "crafting_clothing_general", cost: 57600 },
  commands: [
    "",
  ],
  skillModifiers: {
    clothing_assembly: 20,
    clothing_experimentation: 15,
    clothing_customization: 20,
  },
  schematics: [""]
},
crafting_tailor_production_04: {
  title: "Expert Tailor",
  skillPoints: 2,
  preReqs: [
    "crafting_tailor_production_03",
  ],
  xp: { id: "crafting_clothing_general", cost: 70400 },
  commands: [
    "",
  ],
  skillModifiers: {
    clothing_assembly: 20,
    clothing_experimentation: 15,
    clothing_customization: 20,
  },
  schematics: [""]
},
crafting_architect_novice: {
  title: "Novice Architect",
  skillPoints: 6,
  preReqs: [
    "crafting_artisan_engineering_04",
  ],
  xp: { id: "crafting_general", cost: 33000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_assembly: 20,
    structure_experimentation: 20,
  },
  schematics: ["craftFurnitureGroupAA","craftStructureGroupAA","craftInstallationGroupAA"]
},
crafting_architect_master: {
  title: "Master Architect",
  skillPoints: 1,
  preReqs: [
    "crafting_architect_production_04",
    "crafting_architect_techniques_04",
    "crafting_architect_harvesting_04",
    "crafting_architect_blueprints_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_assembly: 10,
    structure_experimentation: 10,
  },
  schematics: ["craftStructureGroupE","craftFurnitureGroupE","craftPlayerCityE"]
},
crafting_architect_production_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_architect_novice",
  ],
  xp: { id: "crafting_structure_general", cost: 55000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_assembly: 10,
  },
  schematics: ["craftFurnitureGroupA"]
},
crafting_architect_production_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_architect_production_01",
  ],
  xp: { id: "crafting_structure_general", cost: 77000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_assembly: 20,
  },
  schematics: ["craftFurnitureGroupB"]
},
crafting_architect_production_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_architect_production_02",
  ],
  xp: { id: "crafting_structure_general", cost: 99000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_assembly: 20,
  },
  schematics: ["craftFurnitureGroupC"]
},
crafting_architect_production_04: {
  title: "Interior Designer",
  skillPoints: 2,
  preReqs: [
    "crafting_architect_production_03",
  ],
  xp: { id: "crafting_structure_general", cost: 121000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_assembly: 20,
  },
  schematics: ["craftFurnitureGroupD"]
},
crafting_architect_techniques_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_architect_novice",
  ],
  xp: { id: "crafting_structure_general", cost: 55000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_experimentation: 10,
  },
  schematics: ["craftPlayerCityA"]
},
crafting_architect_techniques_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_architect_techniques_01",
  ],
  xp: { id: "crafting_structure_general", cost: 77000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_experimentation: 20,
  },
  schematics: ["craftPlayerCityB"]
},
crafting_architect_techniques_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_architect_techniques_02",
  ],
  xp: { id: "crafting_structure_general", cost: 99000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_experimentation: 20,
  },
  schematics: ["craftPlayerCityC"]
},
crafting_architect_techniques_04: {
  title: "Foreman",
  skillPoints: 2,
  preReqs: [
    "crafting_architect_techniques_03",
  ],
  xp: { id: "crafting_structure_general", cost: 121000 },
  commands: [
    "",
  ],
  skillModifiers: {
    structure_experimentation: 20,
  },
  schematics: ["craftPlayerCityD"]
},
crafting_architect_harvesting_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_architect_novice",
  ],
  xp: { id: "crafting_structure_general", cost: 55000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftInstallationGroupA"]
},
crafting_architect_harvesting_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_architect_harvesting_01",
  ],
  xp: { id: "crafting_structure_general", cost: 77000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftInstallationGroupB"]
},
crafting_architect_harvesting_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_architect_harvesting_02",
  ],
  xp: { id: "crafting_structure_general", cost: 99000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftInstallationGroupC"]
},
crafting_architect_harvesting_04: {
  title: "Installation Designer",
  skillPoints: 2,
  preReqs: [
    "crafting_architect_harvesting_03",
  ],
  xp: { id: "crafting_structure_general", cost: 121000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftInstallationGroupD"]
},
crafting_architect_blueprints_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_architect_novice",
  ],
  xp: { id: "crafting_structure_general", cost: 55000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftStructureGroupA"]
},
crafting_architect_blueprints_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_architect_blueprints_01",
  ],
  xp: { id: "crafting_structure_general", cost: 77000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftStructureGroupB"]
},
crafting_architect_blueprints_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_architect_blueprints_02",
  ],
  xp: { id: "crafting_structure_general", cost: 99000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftStructureGroupC"]
},
crafting_architect_blueprints_04: {
  title: "Home Designer",
  skillPoints: 2,
  preReqs: [
    "crafting_architect_blueprints_03",
  ],
  xp: { id: "crafting_structure_general", cost: 121000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftStructureGroupD"]
},
crafting_droidengineer_novice: {
  title: "Novice Droid Engineer",
  skillPoints: 6,
  preReqs: [
    "crafting_artisan_engineering_04",
  ],
  xp: { id: "crafting_general", cost: 28800 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_assembly: 20,
    droid_experimentation: 20,
    droid_customization: 32,
  },
  schematics: ["craftdroidGroupA","craftdroiddefmodGroupA","craftdroidgenmodGroupA","craftDroidRepairCompA"]
},
crafting_droidengineer_master: {
  title: "Master Droid Engineer",
  skillPoints: 1,
  preReqs: [
    "crafting_droidengineer_production_04",
    "crafting_droidengineer_techniques_04",
    "crafting_droidengineer_refinement_04",
    "crafting_droidengineer_blueprints_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_assembly: 10,
    droid_experimentation: 10,
  },
  schematics: ["craftdroidGroupF","craftdroidgenmodGroupF","craftdroiddefmodGroupF","craftDroidRepairCompB"]
},
crafting_droidengineer_production_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_droidengineer_novice",
  ],
  xp: { id: "crafting_droid_general", cost: 48000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftdroidgenmodGroupB"]
},
crafting_droidengineer_production_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_droidengineer_production_01",
  ],
  xp: { id: "crafting_droid_general", cost: 67200 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftdroidgenmodGroupC"]
},
crafting_droidengineer_production_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_droidengineer_production_02",
  ],
  xp: { id: "crafting_droid_general", cost: 86400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftdroidgenmodGroupD","craftdroidgenmodGroupDD"]
},
crafting_droidengineer_production_04: {
  title: "Droid Builder",
  skillPoints: 2,
  preReqs: [
    "crafting_droidengineer_production_03",
  ],
  xp: { id: "crafting_droid_general", cost: 105600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftdroidgenmodGroupE"]
},
crafting_droidengineer_techniques_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_droidengineer_novice",
  ],
  xp: { id: "crafting_droid_general", cost: 48000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftdroiddefmodGroupB","craftDroidWoundRepairA"]
},
crafting_droidengineer_techniques_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_droidengineer_techniques_01",
  ],
  xp: { id: "crafting_droid_general", cost: 67200 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftdroiddefmodGroupC","craftDroidWoundRepairB"]
},
crafting_droidengineer_techniques_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_droidengineer_techniques_02",
  ],
  xp: { id: "crafting_droid_general", cost: 86400 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftdroiddefmodGroupD","craftDroidWoundRepairC"]
},
crafting_droidengineer_techniques_04: {
  title: "Expert Droid Engineer",
  skillPoints: 2,
  preReqs: [
    "crafting_droidengineer_techniques_03",
  ],
  xp: { id: "crafting_droid_general", cost: 105600 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: ["craftdroiddefmodGroupE","craftDroidWoundRepairD"]
},
crafting_droidengineer_refinement_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_droidengineer_novice",
  ],
  xp: { id: "crafting_droid_general", cost: 48000 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_experimentation: 10,
    droid_customization: 8,
  },
  schematics: ["craftDroidDamageRepairA"]
},
crafting_droidengineer_refinement_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_droidengineer_refinement_01",
  ],
  xp: { id: "crafting_droid_general", cost: 67200 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_experimentation: 20,
    droid_customization: 8,
  },
  schematics: ["craftDroidDamageRepairB"]
},
crafting_droidengineer_refinement_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_droidengineer_refinement_02",
  ],
  xp: { id: "crafting_droid_general", cost: 86400 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_experimentation: 20,
    droid_customization: 8,
  },
  schematics: ["craftDroidDamageRepairC"]
},
crafting_droidengineer_refinement_04: {
  title: "Droid Refiner",
  skillPoints: 2,
  preReqs: [
    "crafting_droidengineer_refinement_03",
  ],
  xp: { id: "crafting_droid_general", cost: 105600 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_experimentation: 20,
    droid_customization: 8,
  },
  schematics: ["craftDroidDamageRepairD"]
},
crafting_droidengineer_blueprints_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_droidengineer_novice",
  ],
  xp: { id: "crafting_droid_general", cost: 48000 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_assembly: 10,
  },
  schematics: ["craftdroidGroupB"]
},
crafting_droidengineer_blueprints_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_droidengineer_blueprints_01",
  ],
  xp: { id: "crafting_droid_general", cost: 67200 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_assembly: 20,
  },
  schematics: ["craftdroidGroupC"]
},
crafting_droidengineer_blueprints_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_droidengineer_blueprints_02",
  ],
  xp: { id: "crafting_droid_general", cost: 86400 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_assembly: 20,
  },
  schematics: ["craftdroidGroupD"]
},
crafting_droidengineer_blueprints_04: {
  title: "Droid Designer",
  skillPoints: 2,
  preReqs: [
    "crafting_droidengineer_blueprints_03",
  ],
  xp: { id: "crafting_droid_general", cost: 105600 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_assembly: 20,
  },
  schematics: ["craftdroidGroupE"]
},
crafting_merchant_novice: {
  title: "Novice Merchant",
  skillPoints: 0,
  preReqs: [
    "crafting_artisan_business_04",
  ],
  xp: { id: "merchant", cost: 5000 },
  commands: [
    "",
  ],
  skillModifiers: {
    manage_vendor: 1,
    hiring: 10,
    vendor_item_limit: 500,
  },
  schematics: [""]
},
crafting_merchant_master: {
  title: "Master Merchant",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_advertising_04",
    "crafting_merchant_sales_04",
    "crafting_merchant_hiring_04",
    "crafting_merchant_management_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "vendor_fees_1",
  ],
  skillModifiers: {
    manage_vendor: 2,
    hiring: 10,
    vendor_item_limit: 1000,
  },
  schematics: [""]
},
crafting_merchant_advertising_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_novice",
  ],
  xp: { id: "merchant", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_merchant_advertising_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_advertising_01",
  ],
  xp: { id: "merchant", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_merchant_advertising_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_advertising_02",
  ],
  xp: { id: "merchant", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_merchant_advertising_04: {
  title: "Propagandist",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_advertising_03",
  ],
  xp: { id: "merchant", cost: 40000 },
  commands: [
    "ad_fees_1",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_merchant_sales_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_novice",
  ],
  xp: { id: "merchant", cost: 10000 },
  commands: [
    "merchant_fees_1",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_merchant_sales_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_sales_01",
  ],
  xp: { id: "merchant", cost: 20000 },
  commands: [
    "vendor_fees_1",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_merchant_sales_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_sales_02",
  ],
  xp: { id: "merchant", cost: 30000 },
  commands: [
    "merchant_fees_1",
  ],
  skillModifiers: {
    vendor_item_limit: 100,
  },
  schematics: [""]
},
crafting_merchant_sales_04: {
  title: "Entrepreneur",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_sales_03",
  ],
  xp: { id: "merchant", cost: 40000 },
  commands: [
    "maintenance_fees_1",
    "place_merchant_tent",
  ],
  skillModifiers: {
    manage_vendor: 1,
    private_place_merchant_tent: 100,
    vendor_item_limit: 150,
  },
  schematics: [""]
},
crafting_merchant_hiring_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_novice",
  ],
  xp: { id: "merchant", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hiring: 20,
  },
  schematics: [""]
},
crafting_merchant_hiring_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_hiring_01",
  ],
  xp: { id: "merchant", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hiring: 10,
  },
  schematics: [""]
},
crafting_merchant_hiring_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_hiring_02",
  ],
  xp: { id: "merchant", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hiring: 15,
  },
  schematics: [""]
},
crafting_merchant_hiring_04: {
  title: "Recruiter",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_hiring_03",
  ],
  xp: { id: "merchant", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hiring: 15,
  },
  schematics: [""]
},
crafting_merchant_management_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_novice",
  ],
  xp: { id: "merchant", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    manage_vendor: 1,
    shop_sign: 1,
    vendor_item_limit: 500,
  },
  schematics: [""]
},
crafting_merchant_management_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_management_01",
  ],
  xp: { id: "merchant", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    manage_vendor: 1,
    shop_sign: 1,
    vendor_item_limit: 500,
  },
  schematics: [""]
},
crafting_merchant_management_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_management_02",
  ],
  xp: { id: "merchant", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    manage_vendor: 2,
    shop_sign: 1,
    vendor_item_limit: 500,
  },
  schematics: [""]
},
crafting_merchant_management_04: {
  title: "Manager",
  skillPoints: 0,
  preReqs: [
    "crafting_merchant_management_03",
  ],
  xp: { id: "merchant", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    manage_vendor: 2,
    shop_sign: 1,
    vendor_item_limit: 500,
  },
  schematics: [""]
},
combat_smuggler_novice: {
  title: "Novice Smuggler",
  skillPoints: 6,
  preReqs: [
    "combat_marksman_pistol_04",
    "combat_brawler_unarmed_04",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 50000 },
  commands: [
    "slice_containers",
  ],
  skillModifiers: {
    spice_assembly: 20,
    spice_experimentation: 20,
  },
  schematics: ["craftSmugglerSpiceNovice","craftSmugglerToolsA"]
},
combat_smuggler_master: {
  title: "Master Smuggler",
  skillPoints: 1,
  preReqs: [
    "combat_smuggler_underworld_04",
    "combat_smuggler_slicing_04",
    "combat_smuggler_combat_04",
    "combat_smuggler_spice_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_smuggler_underworld_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_smuggler_novice",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 75000 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_all_comprehend: 100,
  },
  schematics: [""]
},
combat_smuggler_underworld_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_smuggler_underworld_01",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 100000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_smuggler_underworld_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_smuggler_underworld_02",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 200000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_smuggler_underworld_04: {
  title: "Fixer",
  skillPoints: 2,
  preReqs: [
    "combat_smuggler_underworld_03",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 300000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_smuggler_slicing_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_smuggler_novice",
  ],
  xp: { id: "slicing", cost: 5000 },
  commands: [
    "slice_terminals",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_smuggler_slicing_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_smuggler_slicing_01",
  ],
  xp: { id: "slicing", cost: 10000 },
  commands: [
    "slice_weaponsbasic",
  ],
  skillModifiers: {},
  schematics: ["craftSmugglerToolsB"]
},
combat_smuggler_slicing_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_smuggler_slicing_02",
  ],
  xp: { id: "slicing", cost: 25000 },
  commands: [
    "slice_armor",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_smuggler_slicing_04: {
  title: "Slicer",
  skillPoints: 2,
  preReqs: [
    "combat_smuggler_slicing_03",
  ],
  xp: { id: "slicing", cost: 50000 },
  commands: [
    "slice_weaponsadvanced",
  ],
  skillModifiers: {},
  schematics: ["craftSmugglerToolsC"]
},
combat_smuggler_combat_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_smuggler_novice",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 175000 },
  commands: [
    "feignDeath",
    "ranged_damage_mitigation_1",
  ],
  skillModifiers: {
    feign_death: 45,
  },
  schematics: [""]
},
combat_smuggler_combat_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_smuggler_combat_01",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 250000 },
  commands: [
    "panicShot",
  ],
  skillModifiers: {
    feign_death: 5,
  },
  schematics: [""]
},
combat_smuggler_combat_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_smuggler_combat_02",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 350000 },
  commands: [
    "lowBlow",
    "melee_damage_mitigation_1",
  ],
  skillModifiers: {
    feign_death: 10,
  },
  schematics: [""]
},
combat_smuggler_combat_04: {
  title: "Rogue",
  skillPoints: 2,
  preReqs: [
    "combat_smuggler_combat_03",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 450000 },
  commands: [
    "lastDitch",
  ],
  skillModifiers: {
    feign_death: 10,
  },
  schematics: [""]
},
combat_smuggler_spice_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_smuggler_novice",
  ],
  xp: { id: "crafting_spice", cost: 8000 },
  commands: [
    "",
  ],
  skillModifiers: {
    spice_assembly: 20,
    spice_experimentation: 20,
  },
  schematics: ["craftSmugglerSpiceA"]
},
combat_smuggler_spice_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_smuggler_spice_01",
  ],
  xp: { id: "crafting_spice", cost: 12000 },
  commands: [
    "",
  ],
  skillModifiers: {
    spice_assembly: 20,
    spice_experimentation: 20,
  },
  schematics: ["craftSmugglerSpiceB"]
},
combat_smuggler_spice_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_smuggler_spice_02",
  ],
  xp: { id: "crafting_spice", cost: 16000 },
  commands: [
    "",
  ],
  skillModifiers: {
    spice_assembly: 20,
    spice_experimentation: 20,
  },
  schematics: ["craftSmugglerSpiceC"]
},
combat_smuggler_spice_04: {
  title: "Fence",
  skillPoints: 2,
  preReqs: [
    "combat_smuggler_spice_03",
  ],
  xp: { id: "crafting_spice", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    spice_assembly: 20,
    spice_experimentation: 20,
  },
  schematics: ["craftSmugglerSpiceD"]
},
combat_bountyhunter_novice: {
  title: "Novice Bounty Hunter",
  skillPoints: 6,
  preReqs: [
    "combat_marksman_master",
    "outdoors_scout_movement_04",
  ],
  xp: { id: "combat_general", cost: 40000 },
  commands: [
    "cert_pistol_scatter",
    "cert_rifle_lightning",
  ],
  skillModifiers: {
    bounty_mission_level: 1,
    heavy_rifle_lightning_accuracy: 20,
    heavy_rifle_lightning_speed: 10,
    private_heavyweapon_combat_difficulty: 1600,
  },
  schematics: [""]
},
combat_bountyhunter_master: {
  title: "Master Bounty Hunter",
  skillPoints: 1,
  preReqs: [
    "combat_bountyhunter_investigation_04",
    "combat_bountyhunter_droidcontrol_04",
    "combat_bountyhunter_droidresponse_04",
    "combat_bountyhunter_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "sprayShot",
    "fastBlast",
    "fireLightningCone2",
    "ranged_damage_mitigation_3",
  ],
  skillModifiers: {
    droid_tracks: 4,
    droid_track_chance: 10,
    droid_find_chance: 10,
    droid_find_speed: 10,
    droid_track_speed: 10,
    ranged_defense: 7,
    pistol_accuracy: 10,
    carbine_accuracy: 10,
    private_heavyweapon_combat_difficulty: 100,
    private_carbine_difficulty: 100,
    private_pistol_difficulty: 100,
  },
  schematics: [""]
},
combat_bountyhunter_investigation_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_bountyhunter_novice",
  ],
  xp: { id: "bountyhunter", cost: 1000 },
  commands: [
    "droid_find",
    "ranged_damage_mitigation_1",
  ],
  skillModifiers: {
    droid_find_chance: 70,
    droid_find_speed: 10,
    bounty_mission_level: 1,
  },
  schematics: [""]
},
combat_bountyhunter_investigation_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_bountyhunter_investigation_01",
  ],
  xp: { id: "bountyhunter", cost: 5000 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_find_chance: 50,
    droid_find_speed: 40,
  },
  schematics: [""]
},
combat_bountyhunter_investigation_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_bountyhunter_investigation_02",
  ],
  xp: { id: "bountyhunter", cost: 10000 },
  commands: [
    "droid_track",
    "ranged_damage_mitigation_2",
  ],
  skillModifiers: {
    droid_tracks: 4,
    droid_track_chance: 50,
    droid_track_speed: 40,
    droid_find_speed: 30,
    bounty_mission_level: 1,
  },
  schematics: [""]
},
combat_bountyhunter_investigation_04: {
  title: "Stalker",
  skillPoints: 0,
  preReqs: [
    "combat_bountyhunter_investigation_03",
  ],
  xp: { id: "bountyhunter", cost: 18000 },
  commands: [
    "",
  ],
  skillModifiers: {
    droid_tracks: 4,
    droid_track_chance: 40,
    droid_track_speed: 30,
  },
  schematics: [""]
},
combat_bountyhunter_droidcontrol_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_bountyhunter_novice",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 150000 },
  commands: [
    "underHandShot",
  ],
  skillModifiers: {
    carbine_accuracy: 10,
    carbine_speed: 10,
    private_carbine_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_droidcontrol_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_bountyhunter_droidcontrol_01",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    carbine_accuracy: 10,
    carbine_speed: 10,
    private_carbine_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_droidcontrol_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_bountyhunter_droidcontrol_02",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 350000 },
  commands: [
    "knockdownFire",
  ],
  skillModifiers: {
    carbine_accuracy: 20,
    carbine_speed: 20,
    private_carbine_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_droidcontrol_04: {
  title: "Enforcer",
  skillPoints: 2,
  preReqs: [
    "combat_bountyhunter_droidcontrol_03",
  ],
  xp: { id: "combat_rangedspecialize_carbine", cost: 450000 },
  commands: [
    "confusionShot",
  ],
  skillModifiers: {
    carbine_accuracy: 10,
    carbine_speed: 10,
    private_carbine_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_droidresponse_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_bountyhunter_novice",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 150000 },
  commands: [
    "bleedingShot",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 10,
    private_pistol_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_droidresponse_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_bountyhunter_droidresponse_01",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 250000 },
  commands: [
    "eyeShot",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 10,
    private_pistol_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_droidresponse_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_bountyhunter_droidresponse_02",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    pistol_accuracy: 20,
    pistol_speed: 20,
    private_pistol_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_droidresponse_04: {
  title: "Desperado",
  skillPoints: 2,
  preReqs: [
    "combat_bountyhunter_droidresponse_03",
  ],
  xp: { id: "combat_rangedspecialize_pistol", cost: 450000 },
  commands: [
    "torsoShot",
  ],
  skillModifiers: {
    pistol_accuracy: 10,
    pistol_speed: 10,
    private_pistol_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_bountyhunter_novice",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 150000 },
  commands: [
    "fireLightningSingle1",
  ],
  skillModifiers: {
    heavy_rifle_lightning_speed: 10,
    heavy_rifle_lightning_accuracy: 10,
    private_heavyweapon_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_bountyhunter_support_01",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 250000 },
  commands: [
    "fireLightningCone1",
  ],
  skillModifiers: {
    heavy_rifle_lightning_speed: 10,
    heavy_rifle_lightning_accuracy: 10,
    private_heavyweapon_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_bountyhunter_support_02",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    heavy_rifle_lightning_speed: 20,
    heavy_rifle_lightning_accuracy: 20,
    private_heavyweapon_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_bountyhunter_support_04: {
  title: "Avenger",
  skillPoints: 2,
  preReqs: [
    "combat_bountyhunter_support_03",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 450000 },
  commands: [
    "fireLightningSingle2",
  ],
  skillModifiers: {
    heavy_rifle_lightning_speed: 10,
    heavy_rifle_lightning_accuracy: 10,
    private_heavyweapon_combat_difficulty: 200,
  },
  schematics: [""]
},
combat_commando_novice: {
  title: "Novice Commando",
  skillPoints: 6,
  preReqs: [
    "combat_marksman_master",
    "combat_brawler_unarmed_04",
  ],
  xp: { id: "combat_general", cost: 40000 },
  commands: [
    "cert_rocket_launcher",
    "cert_pistol_launcher",
    "cert_rifle_flame_thrower",
    "cert_rifle_acid_beam",
    "cert_grenade_fragmentation",
  ],
  skillModifiers: {
    heavy_flame_thrower_accuracy: 10,
    heavy_rifle_acid_accuracy: 10,
    private_heavyweapon_combat_difficulty: 1700,
    thrown_accuracy: 15,
  },
  schematics: [""]
},
combat_commando_master: {
  title: "Master Commando",
  skillPoints: 1,
  preReqs: [
    "combat_commando_heavyweapon_accuracy_04",
    "combat_commando_heavyweapon_speed_04",
    "combat_commando_thrownweapon_04",
    "combat_commando_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "cert_grenade_proton",
    "flameCone2",
    "fireAcidCone2",
    "ranged_damage_mitigation_3",
  ],
  skillModifiers: {
    heavy_rocket_launcher_accuracy: 40,
    thrown_accuracy: 40,
    heavy_flame_thrower_accuracy: 30,
    heavy_rifle_acid_accuracy: 30,
    melee_defense: 25,
    ranged_defense: 25,
  },
  schematics: [""]
},
combat_commando_heavyweapon_accuracy_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_commando_novice",
  ],
  xp: { id: "combat_general", cost: 50000 },
  commands: [
    "cert_grenade_cryoban",
    "ranged_damage_mitigation_1",
  ],
  skillModifiers: {
    thrown_accuracy: 10,
    thrown_speed: 10,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_commando_heavyweapon_accuracy_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_commando_heavyweapon_accuracy_01",
  ],
  xp: { id: "combat_general", cost: 80000 },
  commands: [
    "cert_grenade_glop",
  ],
  skillModifiers: {
    thrown_speed: 10,
    knockdown_defense: 5,
  },
  schematics: [""]
},
combat_commando_heavyweapon_accuracy_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_commando_heavyweapon_accuracy_02",
  ],
  xp: { id: "combat_general", cost: 100000 },
  commands: [
    "cert_grenade_imperial_detonator",
    "ranged_damage_mitigation_2",
  ],
  skillModifiers: {
    thrown_accuracy: 10,
    thrown_speed: 10,
    ranged_defense: 5,
  },
  schematics: [""]
},
combat_commando_heavyweapon_accuracy_04: {
  title: "Grenadier",
  skillPoints: 2,
  preReqs: [
    "combat_commando_heavyweapon_accuracy_03",
  ],
  xp: { id: "combat_general", cost: 130000 },
  commands: [
    "cert_grenade_thermal_detonator",
  ],
  skillModifiers: {
    thrown_accuracy: 10,
    thrown_speed: 10,
    melee_defense: 5,
  },
  schematics: [""]
},
combat_commando_heavyweapon_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_commando_novice",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 100000 },
  commands: [
    "cert_heavy_particle_beam",
  ],
  skillModifiers: {
    heavy_rocket_launcher_accuracy: 20,
    heavy_rocket_launcher_speed: 20,
    heavy_particle_beam_accuracy: 10,
    heavy_particle_beam_speed: 10,
  },
  schematics: [""]
},
combat_commando_heavyweapon_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_commando_heavyweapon_speed_01",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 200000 },
  commands: [
    "cert_heavy_acid_beam",
  ],
  skillModifiers: {
    heavy_rocket_launcher_accuracy: 20,
    heavy_rocket_launcher_speed: 20,
    heavy_particle_beam_accuracy: 20,
    heavy_particle_beam_speed: 20,
    heavy_acid_beam_speed: 10,
    heavy_acid_beam_accuracy: 10,
  },
  schematics: [""]
},
combat_commando_heavyweapon_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_commando_heavyweapon_speed_02",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 300000 },
  commands: [
    "cert_heavy_lightning_beam",
  ],
  skillModifiers: {
    heavy_lightning_beam_speed: 10,
    heavy_lightning_beam_accuracy: 10,
    heavy_rocket_launcher_accuracy: 20,
    heavy_rocket_launcher_speed: 20,
    heavy_particle_beam_accuracy: 20,
    heavy_particle_beam_speed: 20,
    heavy_acid_beam_speed: 20,
    heavy_acid_beam_accuracy: 20,
  },
  schematics: [""]
},
combat_commando_heavyweapon_speed_04: {
  title: "Demolitionist",
  skillPoints: 2,
  preReqs: [
    "combat_commando_heavyweapon_speed_03",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 400000 },
  commands: [
    "",
  ],
  skillModifiers: {
    heavy_lightning_beam_speed: 30,
    heavy_lightning_beam_accuracy: 30,
    heavy_particle_beam_accuracy: 20,
    heavy_particle_beam_speed: 20,
    heavy_acid_beam_speed: 20,
    heavy_acid_beam_accuracy: 20,
  },
  schematics: [""]
},
combat_commando_thrownweapon_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_commando_novice",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 150000 },
  commands: [
    "flameSingle1",
  ],
  skillModifiers: {
    heavy_flame_thrower_accuracy: 15,
    heavy_flame_thrower_speed: 10,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_commando_thrownweapon_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_commando_thrownweapon_01",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 250000 },
  commands: [
    "flameCone1",
  ],
  skillModifiers: {
    heavy_flame_thrower_accuracy: 15,
    heavy_flame_thrower_speed: 10,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_commando_thrownweapon_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_commando_thrownweapon_02",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    heavy_flame_thrower_accuracy: 25,
    heavy_flame_thrower_speed: 15,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_commando_thrownweapon_04: {
  title: "Shock Trooper",
  skillPoints: 2,
  preReqs: [
    "combat_commando_thrownweapon_03",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 450000 },
  commands: [
    "flameSingle2",
  ],
  skillModifiers: {
    heavy_flame_thrower_accuracy: 15,
    heavy_flame_thrower_speed: 10,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_commando_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "combat_commando_novice",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 175000 },
  commands: [
    "fireAcidSingle1",
  ],
  skillModifiers: {
    heavy_rifle_acid_accuracy: 15,
    heavy_rifle_acid_speed: 10,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_commando_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "combat_commando_support_01",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 250000 },
  commands: [
    "fireAcidCone1",
  ],
  skillModifiers: {
    heavy_rifle_acid_accuracy: 15,
    heavy_rifle_acid_speed: 10,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_commando_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "combat_commando_support_02",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    heavy_rifle_acid_accuracy: 25,
    heavy_rifle_acid_speed: 15,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
combat_commando_support_04: {
  title: "Heavy Infantry",
  skillPoints: 2,
  preReqs: [
    "combat_commando_support_03",
  ],
  xp: { id: "combat_rangedspecialize_heavy", cost: 450000 },
  commands: [
    "fireAcidSingle2",
  ],
  skillModifiers: {
    heavy_rifle_acid_accuracy: 15,
    heavy_rifle_acid_speed: 10,
    private_heavyweapon_combat_difficulty: 100,
  },
  schematics: [""]
},
science_combatmedic_novice: {
  title: "Novice Combat Medic",
  skillPoints: 6,
  preReqs: [
    "combat_marksman_support_04",
    "science_medic_master",
  ],
  xp: { id: "medical", cost: 12500 },
  commands: [
    "applyPoison",
  ],
  skillModifiers: {
    healing_range: 5,
    healing_range_speed: 5,
    combat_medicine_assembly: 20,
    combat_medicine_experimentation: 20,
    combat_healing_ability: 5,
    combat_medic_effectiveness: 5,
  },
  schematics: ["craftStimpackRangeGroupA","craftApplyPoisonGroupA","craftMedicineComponentGroupC"]
},
science_combatmedic_master: {
  title: "Master Combat Medic",
  skillPoints: 1,
  preReqs: [
    "science_combatmedic_healing_range_04",
    "science_combatmedic_healing_range_speed_04",
    "science_combatmedic_medicine_04",
    "science_combatmedic_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "place_hospital",
  ],
  skillModifiers: {
    healing_range: 25,
    healing_range_speed: 25,
    slope_move: 10,
    combat_healing_ability: 25,
    combat_medic_effectiveness: 25,
    private_place_hospital: 100,
  },
  schematics: ["craftApplyPoisonAreaGroupC","craftApplyDiseaseGroupC","craftApplyDiseaseAreaGroupC"]
},
science_combatmedic_healing_range_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "science_combatmedic_novice",
  ],
  xp: { id: "medical", cost: 12500 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_range: 15,
    combat_medic_effectiveness: 15,
  },
  schematics: [""]
},
science_combatmedic_healing_range_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "science_combatmedic_healing_range_01",
  ],
  xp: { id: "medical", cost: 25000 },
  commands: [
    "applyDisease",
  ],
  skillModifiers: {
    healing_range: 15,
    combat_medic_effectiveness: 15,
  },
  schematics: [""]
},
science_combatmedic_healing_range_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "science_combatmedic_healing_range_02",
  ],
  xp: { id: "medical", cost: 37500 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_range: 15,
    combat_medic_effectiveness: 15,
  },
  schematics: [""]
},
science_combatmedic_healing_range_04: {
  title: "Medical Tactician",
  skillPoints: 2,
  preReqs: [
    "science_combatmedic_healing_range_03",
  ],
  xp: { id: "medical", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_range: 25,
    combat_medic_effectiveness: 25,
  },
  schematics: [""]
},
science_combatmedic_healing_range_speed_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "science_combatmedic_novice",
  ],
  xp: { id: "medical", cost: 12500 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_range_speed: 15,
  },
  schematics: [""]
},
science_combatmedic_healing_range_speed_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "science_combatmedic_healing_range_speed_01",
  ],
  xp: { id: "medical", cost: 25000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_range_speed: 15,
  },
  schematics: [""]
},
science_combatmedic_healing_range_speed_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "science_combatmedic_healing_range_speed_02",
  ],
  xp: { id: "medical", cost: 37500 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_range_speed: 15,
  },
  schematics: [""]
},
science_combatmedic_healing_range_speed_04: {
  title: "Chemical Warfare Expert",
  skillPoints: 2,
  preReqs: [
    "science_combatmedic_healing_range_speed_03",
  ],
  xp: { id: "medical", cost: 50000 },
  commands: [
    "healMind",
  ],
  skillModifiers: {
    healing_range_speed: 25,
  },
  schematics: [""]
},
science_combatmedic_medicine_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "science_combatmedic_novice",
  ],
  xp: { id: "crafting_medicine_general", cost: 12500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_medicine_assembly: 20,
    combat_medicine_experimentation: 20,
  },
  schematics: ["craftStimpackRangeGroupB","craftApplyPoisonAreaGroupA","craftApplyDiseaseGroupA"]
},
science_combatmedic_medicine_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "science_combatmedic_medicine_01",
  ],
  xp: { id: "crafting_medicine_general", cost: 17500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_medicine_assembly: 20,
    combat_medicine_experimentation: 20,
  },
  schematics: ["craftStimpackRangeGroupC","craftApplyPoisonGroupB","craftApplyDiseaseAreaGroupA","craftMedicineComponentGroupE"]
},
science_combatmedic_medicine_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "science_combatmedic_medicine_02",
  ],
  xp: { id: "crafting_medicine_general", cost: 22500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_medicine_assembly: 20,
    combat_medicine_experimentation: 20,
  },
  schematics: ["craftStimpackRangeGroupD","craftApplyPoisonAreaGroupB","craftApplyDiseaseGroupB"]
},
science_combatmedic_medicine_04: {
  title: "Toxicologist",
  skillPoints: 2,
  preReqs: [
    "science_combatmedic_medicine_03",
  ],
  xp: { id: "crafting_medicine_general", cost: 27500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_medicine_assembly: 20,
    combat_medicine_experimentation: 20,
  },
  schematics: ["craftStimpackRangeGroupE","craftApplyPoisonGroupC","craftApplyDiseaseAreaGroupB"]
},
science_combatmedic_support_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "science_combatmedic_novice",
  ],
  xp: { id: "medical", cost: 12500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_healing_ability: 15,
    slope_move: 10,
  },
  schematics: [""]
},
science_combatmedic_support_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "science_combatmedic_support_01",
  ],
  xp: { id: "medical", cost: 25000 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_healing_ability: 15,
    slope_move: 10,
  },
  schematics: [""]
},
science_combatmedic_support_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "science_combatmedic_support_02",
  ],
  xp: { id: "medical", cost: 37500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_healing_ability: 15,
    slope_move: 10,
  },
  schematics: [""]
},
science_combatmedic_support_04: {
  title: "Expert Combat Medic",
  skillPoints: 2,
  preReqs: [
    "science_combatmedic_support_03",
  ],
  xp: { id: "medical", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_healing_ability: 25,
    slope_move: 10,
    burst_run: 10,
  },
  schematics: [""]
},
social_imagedesigner_novice: {
  title: "Novice Image Designer",
  skillPoints: 0,
  preReqs: [
    "social_entertainer_hairstyle_04",
  ],
  xp: { id: "imagedesigner", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hair: 1,
    body: 1,
    face: 1,
  },
  schematics: [""]
},
social_imagedesigner_master: {
  title: "Master Image Designer",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_hairstyle_04",
    "social_imagedesigner_exotic_04",
    "social_imagedesigner_bodyform_04",
    "social_imagedesigner_markings_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    markings: 2,
    body: 2,
    face: 2,
  },
  schematics: [""]
},
social_imagedesigner_hairstyle_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_novice",
  ],
  xp: { id: "imagedesigner", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hair: 1,
  },
  schematics: [""]
},
social_imagedesigner_hairstyle_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_hairstyle_01",
  ],
  xp: { id: "imagedesigner", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hair: 2,
  },
  schematics: [""]
},
social_imagedesigner_hairstyle_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_hairstyle_02",
  ],
  xp: { id: "imagedesigner", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hair: 2,
  },
  schematics: [""]
},
social_imagedesigner_hairstyle_04: {
  title: "Expert Hairstylist",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_hairstyle_03",
  ],
  xp: { id: "imagedesigner", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    hair: 2,
  },
  schematics: [""]
},
social_imagedesigner_exotic_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_novice",
  ],
  xp: { id: "imagedesigner", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    face: 1,
  },
  schematics: [""]
},
social_imagedesigner_exotic_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_exotic_01",
  ],
  xp: { id: "imagedesigner", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    face: 1,
  },
  schematics: [""]
},
social_imagedesigner_exotic_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_exotic_02",
  ],
  xp: { id: "imagedesigner", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    face: 2,
  },
  schematics: [""]
},
social_imagedesigner_exotic_04: {
  title: "Plastic Surgeon",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_exotic_03",
  ],
  xp: { id: "imagedesigner", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    face: 2,
  },
  schematics: [""]
},
social_imagedesigner_bodyform_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_novice",
  ],
  xp: { id: "imagedesigner", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    body: 1,
  },
  schematics: [""]
},
social_imagedesigner_bodyform_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_bodyform_01",
  ],
  xp: { id: "imagedesigner", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    body: 1,
  },
  schematics: [""]
},
social_imagedesigner_bodyform_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_bodyform_02",
  ],
  xp: { id: "imagedesigner", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    body: 2,
  },
  schematics: [""]
},
social_imagedesigner_bodyform_04: {
  title: "Personal Trainer",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_bodyform_03",
  ],
  xp: { id: "imagedesigner", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    body: 2,
  },
  schematics: [""]
},
social_imagedesigner_markings_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_novice",
  ],
  xp: { id: "imagedesigner", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    markings: 1,
  },
  schematics: [""]
},
social_imagedesigner_markings_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_markings_01",
  ],
  xp: { id: "imagedesigner", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    markings: 1,
  },
  schematics: [""]
},
social_imagedesigner_markings_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_markings_02",
  ],
  xp: { id: "imagedesigner", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    markings: 2,
  },
  schematics: [""]
},
social_imagedesigner_markings_04: {
  title: "Tattoo Artist",
  skillPoints: 0,
  preReqs: [
    "social_imagedesigner_markings_03",
  ],
  xp: { id: "imagedesigner", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    markings: 2,
  },
  schematics: [""]
},
outdoors_squadleader_novice: {
  title: "Novice Squad Leader",
  skillPoints: 1,
  preReqs: [
    "outdoors_scout_movement_04",
    "outdoors_scout_camp_04",
    "combat_marksman_support_04",
  ],
  xp: { id: "combat_general", cost: 7500 },
  commands: [
    "sysgroup",
  ],
  skillModifiers: {},
  schematics: [""]
},
outdoors_squadleader_master: {
  title: "Master Squad Leader",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_movement_04",
    "outdoors_squadleader_offense_04",
    "outdoors_squadleader_defense_04",
    "outdoors_squadleader_support_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_melee_defense: 5,
    group_ranged_defense: 5,
    group_burst_run: 10,
    group_slope_move: 10,
  },
  schematics: [""]
},
outdoors_squadleader_movement_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_novice",
  ],
  xp: { id: "squadleader", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_slope_move: 25,
  },
  schematics: [""]
},
outdoors_squadleader_movement_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_movement_01",
  ],
  xp: { id: "squadleader", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_burst_run: 25,
  },
  schematics: [""]
},
outdoors_squadleader_movement_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_movement_02",
  ],
  xp: { id: "squadleader", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_slope_move: 25,
  },
  schematics: [""]
},
outdoors_squadleader_movement_04: {
  title: "Field Commander",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_movement_03",
  ],
  xp: { id: "squadleader", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_burst_run: 25,
  },
  schematics: [""]
},
outdoors_squadleader_offense_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_novice",
  ],
  xp: { id: "squadleader", cost: 175000 },
  commands: [
    "steadyaim",
  ],
  skillModifiers: {},
  schematics: [""]
},
outdoors_squadleader_offense_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_offense_01",
  ],
  xp: { id: "squadleader", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    steadyaim: 10,
  },
  schematics: [""]
},
outdoors_squadleader_offense_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_offense_02",
  ],
  xp: { id: "squadleader", cost: 350000 },
  commands: [
    "volleyFire",
  ],
  skillModifiers: {},
  schematics: [""]
},
outdoors_squadleader_offense_04: {
  title: "Strategist",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_offense_03",
  ],
  xp: { id: "squadleader", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    volley: 10,
  },
  schematics: [""]
},
outdoors_squadleader_defense_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_novice",
  ],
  xp: { id: "squadleader", cost: 175000 },
  commands: [
    "formup",
  ],
  skillModifiers: {},
  schematics: [""]
},
outdoors_squadleader_defense_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_defense_01",
  ],
  xp: { id: "squadleader", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_melee_defense: 10,
  },
  schematics: [""]
},
outdoors_squadleader_defense_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_defense_02",
  ],
  xp: { id: "squadleader", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_melee_defense: 15,
  },
  schematics: [""]
},
outdoors_squadleader_defense_04: {
  title: "Commissar",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_defense_03",
  ],
  xp: { id: "squadleader", cost: 450000 },
  commands: [
    "boostmorale",
  ],
  skillModifiers: {},
  schematics: [""]
},
outdoors_squadleader_support_01: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_novice",
  ],
  xp: { id: "squadleader", cost: 175000 },
  commands: [
    "rally",
  ],
  skillModifiers: {},
  schematics: [""]
},
outdoors_squadleader_support_02: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_support_01",
  ],
  xp: { id: "squadleader", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_ranged_defense: 10,
  },
  schematics: [""]
},
outdoors_squadleader_support_03: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_support_02",
  ],
  xp: { id: "squadleader", cost: 350000 },
  commands: [
    "retreat",
  ],
  skillModifiers: {},
  schematics: [""]
},
outdoors_squadleader_support_04: {
  title: "Tactician",
  skillPoints: 1,
  preReqs: [
    "outdoors_squadleader_support_03",
  ],
  xp: { id: "squadleader", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    group_ranged_defense: 15,
  },
  schematics: [""]
},
social_politician_novice: {
  title: "Novice Politician",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "place_cityhall",
    "manage_taxes",
    "grantZoningRights",
  ],
  skillModifiers: {
    private_place_cityhall: 100,
  },
  schematics: [""]
},
social_politician_master: {
  title: "Master Politician",
  skillPoints: 0,
  preReqs: [
    "social_politician_fiscal_04",
    "social_politician_martial_04",
    "social_politician_civic_04",
    "social_politician_urban_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_fiscal_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_novice",
  ],
  xp: { id: "political", cost: 1000 },
  commands: [
    "city_map",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_fiscal_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_fiscal_01",
  ],
  xp: { id: "political", cost: 2500 },
  commands: [
    "place_bank",
    "place_shuttleport",
  ],
  skillModifiers: {
    private_place_bank: 100,
    private_place_shuttleport: 100,
  },
  schematics: [""]
},
social_politician_fiscal_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_fiscal_02",
  ],
  xp: { id: "political", cost: 5000 },
  commands: [
    "city_spec_industry",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_fiscal_04: {
  title: "Accountant",
  skillPoints: 0,
  preReqs: [
    "social_politician_fiscal_03",
  ],
  xp: { id: "political", cost: 10000 },
  commands: [
    "city_spec_research",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_martial_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_novice",
  ],
  xp: { id: "political", cost: 1000 },
  commands: [
    "manage_militia",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_martial_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_martial_01",
  ],
  xp: { id: "political", cost: 2500 },
  commands: [
    "place_cloning",
    "city_spec_cloning",
  ],
  skillModifiers: {
    private_place_cloning: 100,
  },
  schematics: [""]
},
social_politician_martial_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_martial_02",
  ],
  xp: { id: "political", cost: 5000 },
  commands: [
    "city_spec_stronghold",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_martial_04: {
  title: "Warmaster",
  skillPoints: 0,
  preReqs: [
    "social_politician_martial_03",
  ],
  xp: { id: "political", cost: 10000 },
  commands: [
    "place_faction_terminal",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_civic_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_novice",
  ],
  xp: { id: "political", cost: 1000 },
  commands: [
    "installMissionTerminal",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_civic_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_civic_01",
  ],
  xp: { id: "political", cost: 2500 },
  commands: [
    "recruitSkillTrainer",
    "place_garage",
  ],
  skillModifiers: {
    private_place_garage: 100,
  },
  schematics: [""]
},
social_politician_civic_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_civic_02",
  ],
  xp: { id: "political", cost: 5000 },
  commands: [
    "city_spec_entertainer",
    "city_spec_doctor",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_civic_04: {
  title: "Statesman",
  skillPoints: 0,
  preReqs: [
    "social_politician_civic_03",
  ],
  xp: { id: "political", cost: 10000 },
  commands: [
    "city_spec_missions",
    "city_spec_sample_rich",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_urban_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_novice",
  ],
  xp: { id: "political", cost: 1000 },
  commands: [
    "place_streetlamp",
    "place_statue",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_urban_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_urban_01",
  ],
  xp: { id: "political", cost: 2500 },
  commands: [
    "place_fountain",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_politician_urban_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "social_politician_urban_02",
  ],
  xp: { id: "political", cost: 5000 },
  commands: [
    "place_small_garden",
    "place_medium_garden",
  ],
  skillModifiers: {
    private_place_small_garden: 100,
    private_place_medium_garden: 100,
  },
  schematics: [""]
},
social_politician_urban_04: {
  title: "Urban Planner",
  skillPoints: 0,
  preReqs: [
    "social_politician_urban_03",
  ],
  xp: { id: "political", cost: 10000 },
  commands: [
    "place_large_garden",
    "place_exotic_garden",
  ],
  skillModifiers: {
    private_place_large_garden: 100,
    private_place_exotic_garden: 100,
  },
  schematics: [""]
},
social_language: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_basic: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_basic_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_basic_speak: 100,
  },
  schematics: [""]
},
social_language_basic_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_basic_comprehend: 100,
  },
  schematics: [""]
},
social_language_rodian: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_rodian_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+rodese",
  ],
  skillModifiers: {
    language_rodian_speak: 100,
  },
  schematics: [""]
},
social_language_rodian_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_rodian_comprehend: 100,
  },
  schematics: [""]
},
social_language_trandoshan: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_trandoshan_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+dosh",
  ],
  skillModifiers: {
    language_trandoshan_speak: 100,
  },
  schematics: [""]
},
social_language_trandoshan_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_trandoshan_comprehend: 100,
  },
  schematics: [""]
},
social_language_moncalamari: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_moncalamari_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+moncalamarian",
  ],
  skillModifiers: {
    language_moncalamari_speak: 100,
  },
  schematics: [""]
},
social_language_moncalamari_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_moncalamari_comprehend: 100,
  },
  schematics: [""]
},
social_language_wookiee: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_wookiee_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+shyriiwook",
  ],
  skillModifiers: {
    language_wookiee_speak: 100,
  },
  schematics: [""]
},
social_language_wookiee_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_wookiee_comprehend: 100,
  },
  schematics: [""]
},
social_language_bothan: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_bothan_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+bothese",
  ],
  skillModifiers: {
    language_bothan_speak: 100,
  },
  schematics: [""]
},
social_language_bothan_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_bothan_comprehend: 100,
  },
  schematics: [""]
},
social_language_twilek: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_twilek_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+ryl",
  ],
  skillModifiers: {
    language_twilek_speak: 100,
  },
  schematics: [""]
},
social_language_twilek_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_twilek_comprehend: 100,
  },
  schematics: [""]
},
social_language_zabrak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_zabrak_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+zabrak",
  ],
  skillModifiers: {
    language_zabrak_speak: 100,
  },
  schematics: [""]
},
social_language_zabrak_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_zabrak_comprehend: 100,
  },
  schematics: [""]
},
social_language_lekku: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "unobtainable", cost: 1 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_lekku_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "unobtainable", cost: 1 },
  commands: [
    "language+lekku",
  ],
  skillModifiers: {
    language_lekku_speak: 100,
  },
  schematics: [""]
},
social_language_lekku_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "unobtainable", cost: 1 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_lekku_comprehend: 100,
  },
  schematics: [""]
},
social_language_ithorian: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_ithorian_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+ithorian",
  ],
  skillModifiers: {
    language_ithorian_speak: 100,
  },
  schematics: [""]
},
social_language_ithorian_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_ithorian_comprehend: 100,
  },
  schematics: [""]
},
social_language_sullustan: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
social_language_sullustan_speak: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "language+sullustan",
  ],
  skillModifiers: {
    language_sullustan_speak: 100,
  },
  schematics: [""]
},
social_language_sullustan_comprehend: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    language_sullustan_comprehend: 100,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "fs_combat", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_sensitive_combat_prowess_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_ranged_accuracy_04",
    "force_sensitive_combat_prowess_ranged_speed_04",
    "force_sensitive_combat_prowess_melee_accuracy_04",
    "force_sensitive_combat_prowess_melee_speed_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_sensitive_combat_prowess_ranged_accuracy_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_novice",
  ],
  xp: { id: "fs_combat", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_accuracy: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_ranged_accuracy_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_ranged_accuracy_01",
  ],
  xp: { id: "fs_combat", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_accuracy: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_ranged_accuracy_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_ranged_accuracy_02",
  ],
  xp: { id: "fs_combat", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_accuracy: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_ranged_accuracy_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_ranged_accuracy_03",
  ],
  xp: { id: "fs_combat", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_accuracy: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_ranged_speed_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_novice",
  ],
  xp: { id: "fs_combat", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_speed: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_ranged_speed_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_ranged_speed_01",
  ],
  xp: { id: "fs_combat", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_speed: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_ranged_speed_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_ranged_speed_02",
  ],
  xp: { id: "fs_combat", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_speed: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_ranged_speed_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_ranged_speed_03",
  ],
  xp: { id: "fs_combat", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_speed: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_melee_accuracy_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_novice",
  ],
  xp: { id: "fs_combat", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_accuracy: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_melee_accuracy_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_melee_accuracy_01",
  ],
  xp: { id: "fs_combat", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_accuracy: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_melee_accuracy_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_melee_accuracy_02",
  ],
  xp: { id: "fs_combat", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_accuracy: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_melee_accuracy_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_melee_accuracy_03",
  ],
  xp: { id: "fs_combat", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_accuracy: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_melee_speed_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_novice",
  ],
  xp: { id: "fs_combat", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_speed: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_melee_speed_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_melee_speed_01",
  ],
  xp: { id: "fs_combat", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_speed: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_melee_speed_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_melee_speed_02",
  ],
  xp: { id: "fs_combat", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_speed: 3,
  },
  schematics: [""]
},
force_sensitive_combat_prowess_melee_speed_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_combat_prowess_melee_speed_03",
  ],
  xp: { id: "fs_combat", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_speed: 3,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "fs_reflex", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_sensitive_enhanced_reflexes_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_ranged_defense_04",
    "force_sensitive_enhanced_reflexes_melee_defense_04",
    "force_sensitive_enhanced_reflexes_vehicle_control_04",
    "force_sensitive_enhanced_reflexes_survival_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_sensitive_enhanced_reflexes_ranged_defense_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_novice",
  ],
  xp: { id: "fs_reflex", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_defense: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_ranged_defense_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_ranged_defense_01",
  ],
  xp: { id: "fs_reflex", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_defense: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_ranged_defense_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_ranged_defense_02",
  ],
  xp: { id: "fs_reflex", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_defense: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_ranged_defense_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_ranged_defense_03",
  ],
  xp: { id: "fs_reflex", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_defense: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_melee_defense_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_novice",
  ],
  xp: { id: "fs_reflex", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_melee_defense_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_melee_defense_01",
  ],
  xp: { id: "fs_reflex", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_melee_defense_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_melee_defense_02",
  ],
  xp: { id: "fs_reflex", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_melee_defense_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_melee_defense_03",
  ],
  xp: { id: "fs_reflex", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_vehicle_control_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_novice",
  ],
  xp: { id: "fs_reflex", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_vehicle_control: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_vehicle_control_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_vehicle_control_01",
  ],
  xp: { id: "fs_reflex", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_vehicle_control: 5,
    force_vehicle_speed: 1,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_vehicle_control_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_vehicle_control_02",
  ],
  xp: { id: "fs_reflex", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_vehicle_control: 5,
    force_vehicle_speed: 1,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_vehicle_control_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_vehicle_control_03",
  ],
  xp: { id: "fs_reflex", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_vehicle_control: 5,
    force_vehicle_speed: 1,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_survival_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_novice",
  ],
  xp: { id: "fs_reflex", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    camp: 5,
    foraging: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_survival_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_survival_01",
  ],
  xp: { id: "fs_reflex", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    trapping: 5,
    mask_scent: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_survival_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_survival_02",
  ],
  xp: { id: "fs_reflex", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    slope_move: 5,
  },
  schematics: [""]
},
force_sensitive_enhanced_reflexes_survival_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_enhanced_reflexes_survival_03",
  ],
  xp: { id: "fs_reflex", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    creature_knowledge: 5,
    creature_harvesting: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "fs_crafting", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_sensitive_crafting_mastery_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_experimentation_04",
    "force_sensitive_crafting_mastery_assembly_04",
    "force_sensitive_crafting_mastery_repair_04",
    "force_sensitive_crafting_mastery_technique_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_sensitive_crafting_mastery_experimentation_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_novice",
  ],
  xp: { id: "fs_crafting", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_experimentation: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_experimentation_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_experimentation_01",
  ],
  xp: { id: "fs_crafting", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_experimentation: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_experimentation_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_experimentation_02",
  ],
  xp: { id: "fs_crafting", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_experimentation: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_experimentation_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_experimentation_03",
  ],
  xp: { id: "fs_crafting", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_experimentation: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_assembly_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_novice",
  ],
  xp: { id: "fs_crafting", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_assembly: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_assembly_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_assembly_01",
  ],
  xp: { id: "fs_crafting", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_assembly: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_assembly_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_assembly_02",
  ],
  xp: { id: "fs_crafting", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_assembly: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_assembly_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_assembly_03",
  ],
  xp: { id: "fs_crafting", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_assembly: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_repair_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_novice",
  ],
  xp: { id: "fs_crafting", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_repair_bonus: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_repair_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_repair_01",
  ],
  xp: { id: "fs_crafting", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_repair_bonus: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_repair_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_repair_02",
  ],
  xp: { id: "fs_crafting", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_repair_bonus: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_repair_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_repair_03",
  ],
  xp: { id: "fs_crafting", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_repair_bonus: 5,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_technique_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_novice",
  ],
  xp: { id: "fs_crafting", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_failure_reduction: 1,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_technique_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_technique_01",
  ],
  xp: { id: "fs_crafting", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_failure_reduction: 1,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_technique_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_technique_02",
  ],
  xp: { id: "fs_crafting", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_failure_reduction: 1,
  },
  schematics: [""]
},
force_sensitive_crafting_mastery_technique_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_crafting_mastery_technique_03",
  ],
  xp: { id: "fs_crafting", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_failure_reduction: 1,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "fs_senses", cost: 50000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_sensitive_heightened_senses_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_healing_04",
    "force_sensitive_heightened_senses_surveying_04",
    "force_sensitive_heightened_senses_persuasion_04",
    "force_sensitive_heightened_senses_luck_04",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_sensitive_heightened_senses_healing_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_novice",
  ],
  xp: { id: "fs_senses", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_injury_treatment: 5,
    healing_dance_wound: 5,
    healing_music_wound: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_healing_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_healing_01",
  ],
  xp: { id: "fs_senses", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_injury_speed: 5,
    healing_dance_wound: 5,
    healing_music_wound: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_healing_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_healing_02",
  ],
  xp: { id: "fs_senses", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_injury_treatment: 5,
    healing_dance_wound: 5,
    healing_music_wound: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_healing_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_healing_03",
  ],
  xp: { id: "fs_senses", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    healing_injury_speed: 5,
    healing_dance_wound: 5,
    healing_music_wound: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_surveying_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_novice",
  ],
  xp: { id: "fs_senses", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    surveying: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_surveying_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_surveying_01",
  ],
  xp: { id: "fs_senses", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    surveying: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_surveying_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_surveying_02",
  ],
  xp: { id: "fs_senses", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    surveying: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_surveying_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_surveying_03",
  ],
  xp: { id: "fs_senses", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    surveying: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_persuasion_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_novice",
  ],
  xp: { id: "fs_senses", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_persuade: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_persuasion_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_persuasion_01",
  ],
  xp: { id: "fs_senses", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_persuade: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_persuasion_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_persuasion_02",
  ],
  xp: { id: "fs_senses", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_persuade: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_persuasion_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_persuasion_03",
  ],
  xp: { id: "fs_senses", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_persuade: 5,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_luck_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_novice",
  ],
  xp: { id: "fs_senses", cost: 175000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_luck: 1,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_luck_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_luck_01",
  ],
  xp: { id: "fs_senses", cost: 250000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_luck: 1,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_luck_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_luck_02",
  ],
  xp: { id: "fs_senses", cost: 350000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_luck: 1,
  },
  schematics: [""]
},
force_sensitive_heightened_senses_luck_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_sensitive_heightened_senses_luck_03",
  ],
  xp: { id: "fs_senses", cost: 450000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_luck: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_novice: {
  title: "",
  skillPoints: 8,
  preReqs: [],
  xp: { id: "jedi_general", cost: 20000 },
  commands: [
    "saberPolearmHit1",
    "saber1hHit1",
    "saber2hHit1",
    "cert_onehandlightsaber_gen1",
    "cert_polearmlightsaber_gen1",
    "cert_twohandlightsaber_gen1",
  ],
  skillModifiers: {
    onehandlightsaber_accuracy: 25,
    onehandlightsaber_speed: 25,
    twohandlightsaber_accuracy: 25,
    twohandlightsaber_speed: 25,
    polearmlightsaber_accuracy: 25,
    polearmlightsaber_speed: 25,
    saber_block: 10,
    lightsaber_toughness: 10,
    jedi_saber_assembly: 10,
    jedi_saber_experimentation: 10,
    private_onehandlightsaber_combat_difficulty: 200,
    private_twohandlightsaber_combat_difficulty: 200,
    private_polearmlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 200,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_master: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_light_saber_one_hand_04",
    "force_discipline_light_saber_two_hand_04",
    "force_discipline_light_saber_polearm_04",
    "force_discipline_light_saber_technique_04",
  ],
  xp: { id: "jedi_general", cost: 3200000 },
  commands: [
    "saberThrow3",
    "saber1hFlurry2",
    "saber2hPhantom",
    "saberPolearmDervish2",
    "cert_onehandlightsaber_gen4",
    "cert_polearmlightsaber_gen4",
    "cert_twohandlightsaber_gen4",
  ],
  skillModifiers: {
    onehandlightsaber_accuracy: 25,
    onehandlightsaber_speed: 25,
    twohandlightsaber_accuracy: 25,
    twohandlightsaber_speed: 25,
    polearmlightsaber_accuracy: 25,
    polearmlightsaber_speed: 25,
    saber_block: 25,
    lightsaber_toughness: 15,
    jedi_saber_assembly: 30,
    jedi_saber_experimentation: 25,
    jedi_force_power_max: 500,
    jedi_force_power_regen: 5,
  },
  schematics: ["craftSaberMaster"]
},
force_discipline_light_saber_one_hand_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_light_saber_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "saber1hHeadHit1",
    "saber1hComboHit1",
  ],
  skillModifiers: {
    onehandlightsaber_accuracy: 5,
    onehandlightsaber_speed: 5,
    private_onehandlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_one_hand_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_light_saber_one_hand_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "saber1hHit2",
    "saber1hHeadHit2",
    "cert_onehandlightsaber_gen2",
  ],
  skillModifiers: {
    onehandlightsaber_accuracy: 10,
    onehandlightsaber_speed: 10,
    private_onehandlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: ["craftSaberOneHand2"]
},
force_discipline_light_saber_one_hand_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_light_saber_one_hand_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "saber1hComboHit2",
    "saber1hHeadHit3",
  ],
  skillModifiers: {
    onehandlightsaber_accuracy: 15,
    onehandlightsaber_speed: 15,
    private_onehandlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_one_hand_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_light_saber_one_hand_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "saber1hHit3",
    "saber1hComboHit3",
    "saber1hFlurry",
    "cert_onehandlightsaber_gen3",
  ],
  skillModifiers: {
    onehandlightsaber_accuracy: 20,
    onehandlightsaber_speed: 20,
    private_onehandlightsaber_combat_difficulty: 300,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: ["craftSaberOneHand3"]
},
force_discipline_light_saber_two_hand_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_light_saber_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "saber2hBodyHit1",
    "saber2hSweep1",
  ],
  skillModifiers: {
    twohandlightsaber_accuracy: 5,
    twohandlightsaber_speed: 5,
    private_twohandlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_two_hand_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_light_saber_two_hand_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "saber2hHit2",
    "saber2hBodyHit2",
    "cert_twohandlightsaber_gen2",
  ],
  skillModifiers: {
    twohandlightsaber_accuracy: 10,
    twohandlightsaber_speed: 10,
    private_twohandlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: ["craftSaberTwoHand2"]
},
force_discipline_light_saber_two_hand_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_light_saber_two_hand_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "saber2hBodyHit3",
    "saber2hSweep2",
  ],
  skillModifiers: {
    twohandlightsaber_accuracy: 15,
    twohandlightsaber_speed: 15,
    private_twohandlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_two_hand_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_light_saber_two_hand_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "saber2hHit3",
    "saber2hSweep3",
    "saber2hFrenzy",
    "cert_twohandlightsaber_gen3",
  ],
  skillModifiers: {
    twohandlightsaber_accuracy: 20,
    twohandlightsaber_speed: 20,
    private_twohandlightsaber_combat_difficulty: 300,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: ["craftSaberTwoHand3"]
},
force_discipline_light_saber_polearm_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_light_saber_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "saberPolearmLegHit1",
    "saberPolearmSpinAttack1",
  ],
  skillModifiers: {
    polearmlightsaber_accuracy: 5,
    polearmlightsaber_speed: 5,
    private_polearmlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_polearm_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_light_saber_polearm_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "saberPolearmHit2",
    "saberPolearmLegHit2",
    "cert_polearmlightsaber_gen2",
  ],
  skillModifiers: {
    polearmlightsaber_accuracy: 10,
    polearmlightsaber_speed: 10,
    private_polearmlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: ["craftSaberPoleArm2"]
},
force_discipline_light_saber_polearm_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_light_saber_polearm_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "saberPolearmLegHit3",
    "saberPolearmSpinAttack2",
  ],
  skillModifiers: {
    polearmlightsaber_accuracy: 15,
    polearmlightsaber_speed: 15,
    private_polearmlightsaber_combat_difficulty: 200,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_polearm_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_light_saber_polearm_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "saberPolearmHit3",
    "saberPolearmSpinAttack3",
    "saberPolearmDervish",
    "cert_polearmlightsaber_gen3",
  ],
  skillModifiers: {
    polearmlightsaber_accuracy: 20,
    polearmlightsaber_speed: 20,
    private_polearmlightsaber_combat_difficulty: 300,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: ["craftSaberPoleArm3"]
},
force_discipline_light_saber_technique_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_light_saber_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "saberSlash1",
  ],
  skillModifiers: {
    saber_block: 5,
    lightsaber_toughness: 5,
    jedi_saber_assembly: 15,
    jedi_saber_experimentation: 10,
    private_onehandlightsaber_combat_difficulty: 100,
    private_twohandlightsaber_combat_difficulty: 100,
    private_polearmlightsaber_combat_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_technique_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_light_saber_technique_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "saberThrow1",
  ],
  skillModifiers: {
    saber_block: 10,
    lightsaber_toughness: 5,
    jedi_saber_assembly: 15,
    jedi_saber_experimentation: 15,
    private_onehandlightsaber_combat_difficulty: 100,
    private_twohandlightsaber_combat_difficulty: 100,
    private_polearmlightsaber_combat_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_technique_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_light_saber_technique_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "saberSlash2",
  ],
  skillModifiers: {
    saber_block: 15,
    lightsaber_toughness: 10,
    jedi_saber_assembly: 15,
    jedi_saber_experimentation: 20,
    private_onehandlightsaber_combat_difficulty: 100,
    private_twohandlightsaber_combat_difficulty: 100,
    private_polearmlightsaber_combat_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_light_saber_technique_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_light_saber_technique_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "saberThrow2",
  ],
  skillModifiers: {
    saber_block: 20,
    lightsaber_toughness: 10,
    jedi_saber_assembly: 15,
    jedi_saber_experimentation: 20,
    private_onehandlightsaber_combat_difficulty: 100,
    private_twohandlightsaber_combat_difficulty: 100,
    private_polearmlightsaber_combat_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_powers_novice: {
  title: "",
  skillPoints: 8,
  preReqs: [],
  xp: { id: "jedi_general", cost: 20000 },
  commands: [
    "animalScare",
  ],
  skillModifiers: {
    private_jedi_difficulty: 50,
    jedi_force_power_max: 200,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_master: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_powers_lightning_04",
    "force_discipline_powers_mental_04",
    "force_discipline_powers_debuff_04",
    "force_discipline_powers_push_04",
  ],
  xp: { id: "jedi_general", cost: 3200000 },
  commands: [
    "jediMindTrick",
    "forceChoke",
    "forceKnockdown3",
  ],
  skillModifiers: {
    forceintimidate_accuracy: 35,
    forcethrow_accuracy: 30,
    forceknockdown_accuracy: 35,
    forceweaken_accuracy: 30,
    mindblast_accuracy: 30,
    forcelightning_accuracy: 30,
    force_choke: 5,
    private_jedi_difficulty: 200,
    jedi_force_power_max: 500,
    jedi_force_power_regen: 5,
  },
  schematics: [""]
},
force_discipline_powers_lightning_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_powers_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "forceLightningSingle1",
  ],
  skillModifiers: {
    private_force_lightning_single_power: 1,
    forcelightning_accuracy: 20,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_lightning_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_powers_lightning_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "forceLightningCone1",
  ],
  skillModifiers: {
    private_force_lightning_cone_power: 1,
    forcelightning_accuracy: 20,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_lightning_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_powers_lightning_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "forceLightningSingle2",
  ],
  skillModifiers: {
    private_force_lightning_single_power: 2,
    forcelightning_accuracy: 20,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_lightning_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_powers_lightning_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "forceLightningCone2",
  ],
  skillModifiers: {
    private_force_lightning_cone_power: 2,
    forcelightning_accuracy: 20,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_powers_mental_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_powers_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "mindBlast1",
  ],
  skillModifiers: {
    mindblast_accuracy: 20,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_mental_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_powers_mental_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "animalCalm",
  ],
  skillModifiers: {
    mindblast_accuracy: 20,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_mental_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_powers_mental_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "mindBlast2",
  ],
  skillModifiers: {
    mindblast_accuracy: 20,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_mental_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_powers_mental_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "animalAttack",
  ],
  skillModifiers: {
    mindblast_accuracy: 20,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_powers_debuff_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_powers_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "forceWeaken1",
  ],
  skillModifiers: {
    forceweaken_accuracy: 20,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_debuff_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_powers_debuff_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "forceIntimidate1",
  ],
  skillModifiers: {
    forceweaken_accuracy: 20,
    forceintimidate_accuracy: 25,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_debuff_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_powers_debuff_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "forceWeaken2",
  ],
  skillModifiers: {
    forceweaken_accuracy: 20,
    forceintimidate_accuracy: 25,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_debuff_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_powers_debuff_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "forceIntimidate2",
  ],
  skillModifiers: {
    forceweaken_accuracy: 20,
    forceintimidate_accuracy: 25,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_powers_push_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_powers_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "forceThrow1",
  ],
  skillModifiers: {
    forcethrow_accuracy: 20,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_push_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_powers_push_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "forceKnockdown1",
  ],
  skillModifiers: {
    forcethrow_accuracy: 20,
    forceknockdown_accuracy: 25,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_push_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_powers_push_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "forceThrow2",
  ],
  skillModifiers: {
    forcethrow_accuracy: 20,
    forceknockdown_accuracy: 25,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_powers_push_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_powers_push_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "forceKnockdown2",
  ],
  skillModifiers: {
    forcethrow_accuracy: 20,
    forceknockdown_accuracy: 25,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_healing_novice: {
  title: "",
  skillPoints: 8,
  preReqs: [],
  xp: { id: "jedi_general", cost: 20000 },
  commands: [
    "healHealthSelf1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 50,
    jedi_force_power_max: 200,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_master: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_healing_damage_04",
    "force_discipline_healing_wound_04",
    "force_discipline_healing_other_04",
    "force_discipline_healing_states_04",
  ],
  xp: { id: "jedi_general", cost: 3200000 },
  commands: [
    "totalHealSelf",
    "totalHealOther",
  ],
  skillModifiers: {
    private_jedi_difficulty: 200,
    jedi_force_power_max: 500,
    jedi_force_power_regen: 5,
  },
  schematics: [""]
},
force_discipline_healing_damage_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_healing_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "healMindSelf1",
    "healActionSelf1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_damage_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_healing_damage_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "healAllSelf1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_damage_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_healing_damage_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "healMindSelf2",
    "healActionSelf2",
    "healHealthSelf2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_damage_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_healing_damage_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "healAllSelf2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_healing_wound_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_healing_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "healHealthWoundSelf1",
    "healActionWoundSelf1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_wound_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_healing_wound_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "healMindWoundSelf1",
    "healBattleFatigueSelf1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_wound_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_healing_wound_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "healActionWoundSelf2",
    "healHealthWoundSelf2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_wound_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_healing_wound_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "healBattleFatigueSelf2",
    "healMindWoundSelf2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_healing_other_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_healing_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "healMindWoundOther1",
    "healHealthWoundOther1",
    "healActionWoundOther1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_other_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_healing_other_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "healAllOther1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_other_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_healing_other_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "healHealthWoundOther2",
    "healActionWoundOther2",
    "healMindWoundOther2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_other_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_healing_other_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "healAllOther2",
    "healStatesOther",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_healing_states_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_healing_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "stopBleeding",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_states_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_healing_states_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "forceCureDisease",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_states_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_healing_states_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "forceCurePoison",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_healing_states_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_healing_states_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "healStatesSelf",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_enhancements_novice: {
  title: "",
  skillPoints: 8,
  preReqs: [],
  xp: { id: "jedi_general", cost: 20000 },
  commands: [
    "forceAbsorb1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 50,
    jedi_force_power_max: 200,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_master: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_enhancements_movement_04",
    "force_discipline_enhancements_protection_04",
    "force_discipline_enhancements_resistance_04",
    "force_discipline_enhancements_synergy_04",
  ],
  xp: { id: "jedi_general", cost: 3200000 },
  commands: [
    "forceRun3",
    "regainConsciousness",
  ],
  skillModifiers: {
    private_jedi_difficulty: 200,
    jedi_force_power_max: 500,
    jedi_force_power_regen: 5,
  },
  schematics: [""]
},
force_discipline_enhancements_movement_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_enhancements_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "forceSpeed1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 125,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_movement_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_enhancements_movement_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "forceRun1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_movement_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_enhancements_movement_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "forceSpeed2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_movement_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_enhancements_movement_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "forceRun2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 125,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_enhancements_protection_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_enhancements_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "forceFeedback1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 125,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_protection_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_enhancements_protection_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "forceArmor1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_protection_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_enhancements_protection_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "forceFeedback2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_protection_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_enhancements_protection_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "forceAbsorb2",
    "forceArmor2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 125,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_enhancements_resistance_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_enhancements_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "forceResistBleeding",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_resistance_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_enhancements_resistance_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "forceResistDisease",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_resistance_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_enhancements_resistance_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "forceResistPoison",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_resistance_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_enhancements_resistance_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "forceResistStates",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_enhancements_synergy_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_enhancements_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "transferForce",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_synergy_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_enhancements_synergy_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "channelForce",
    "forceShield1",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_synergy_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_enhancements_synergy_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "drainForce",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_enhancements_synergy_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_enhancements_synergy_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "forceMeditate",
    "forceShield2",
  ],
  skillModifiers: {
    private_jedi_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_defender_novice: {
  title: "",
  skillPoints: 8,
  preReqs: [],
  xp: { id: "jedi_general", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 20,
    ranged_defense: 15,
    force_defense: 20,
    jedi_state_defense: 15,
    jedi_toughness: 5,
    private_jedi_difficulty: 50,
    jedi_force_power_max: 200,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_master: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_defender_melee_defense_04",
    "force_discipline_defender_ranged_defense_04",
    "force_discipline_defender_force_defense_04",
    "force_discipline_defender_preternatural_defense_04",
  ],
  xp: { id: "jedi_general", cost: 3200000 },
  commands: [
    "avoidIncapacitation",
  ],
  skillModifiers: {
    melee_defense: 25,
    ranged_defense: 20,
    force_defense: 25,
    jedi_state_defense: 15,
    jedi_toughness: 8,
    private_jedi_difficulty: 200,
    jedi_force_power_max: 500,
    jedi_force_power_regen: 5,
  },
  schematics: [""]
},
force_discipline_defender_melee_defense_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_defender_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 5,
    jedi_toughness: 1,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_melee_defense_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_defender_melee_defense_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 10,
    jedi_toughness: 1,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_melee_defense_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_defender_melee_defense_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 15,
    jedi_toughness: 2,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_melee_defense_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_defender_melee_defense_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "",
  ],
  skillModifiers: {
    melee_defense: 20,
    jedi_toughness: 4,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_defender_ranged_defense_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_defender_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_defense: 5,
    jedi_toughness: 1,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_ranged_defense_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_defender_ranged_defense_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_defense: 10,
    jedi_toughness: 1,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_ranged_defense_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_defender_ranged_defense_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_defense: 10,
    jedi_toughness: 2,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_ranged_defense_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_defender_ranged_defense_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "",
  ],
  skillModifiers: {
    ranged_defense: 15,
    jedi_toughness: 4,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_defender_force_defense_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_defender_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_defense: 10,
    jedi_toughness: 1,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_force_defense_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_defender_force_defense_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_defense: 10,
    jedi_toughness: 1,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_force_defense_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_defender_force_defense_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_defense: 15,
    jedi_toughness: 2,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_force_defense_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_defender_force_defense_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_defense: 20,
    jedi_toughness: 4,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_discipline_defender_preternatural_defense_01: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "force_discipline_defender_novice",
  ],
  xp: { id: "jedi_general", cost: 200000 },
  commands: [
    "",
  ],
  skillModifiers: {
    jedi_state_defense: 5,
    jedi_toughness: 1,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_preternatural_defense_02: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "force_discipline_defender_preternatural_defense_01",
  ],
  xp: { id: "jedi_general", cost: 400000 },
  commands: [
    "",
  ],
  skillModifiers: {
    jedi_state_defense: 5,
    jedi_toughness: 1,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 100,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_preternatural_defense_03: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "force_discipline_defender_preternatural_defense_02",
  ],
  xp: { id: "jedi_general", cost: 800000 },
  commands: [
    "",
  ],
  skillModifiers: {
    jedi_state_defense: 10,
    jedi_toughness: 2,
    private_jedi_difficulty: 100,
    jedi_force_power_max: 150,
    jedi_force_power_regen: 1,
  },
  schematics: [""]
},
force_discipline_defender_preternatural_defense_04: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "force_discipline_defender_preternatural_defense_03",
  ],
  xp: { id: "jedi_general", cost: 1600000 },
  commands: [
    "",
  ],
  skillModifiers: {
    jedi_state_defense: 15,
    jedi_toughness: 4,
    private_jedi_difficulty: 125,
    jedi_force_power_max: 175,
    jedi_force_power_regen: 2,
  },
  schematics: [""]
},
force_rank_light_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "force_rank_xp", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 5,
    force_manipulation_light: 5,
    force_control_light: 5,
  },
  schematics: [""]
},
force_rank_light_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_10",
  ],
  xp: { id: "force_rank_xp", cost: 500000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 20,
    force_manipulation_light: 15,
    force_control_light: 20,
  },
  schematics: [""]
},
force_rank_light_rank_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_novice",
  ],
  xp: { id: "force_rank_xp", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 5,
    force_manipulation_light: 3,
    force_control_light: 5,
  },
  schematics: [""]
},
force_rank_light_rank_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_01",
  ],
  xp: { id: "force_rank_xp", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 5,
    force_manipulation_light: 4,
    force_control_light: 5,
  },
  schematics: [""]
},
force_rank_light_rank_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_02",
  ],
  xp: { id: "force_rank_xp", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 5,
    force_manipulation_light: 4,
    force_control_light: 5,
  },
  schematics: [""]
},
force_rank_light_rank_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_03",
  ],
  xp: { id: "force_rank_xp", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 5,
    force_manipulation_light: 4,
    force_control_light: 5,
  },
  schematics: [""]
},
force_rank_light_rank_05: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_04",
  ],
  xp: { id: "force_rank_xp", cost: 60000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 10,
    force_manipulation_light: 5,
    force_control_light: 10,
  },
  schematics: [""]
},
force_rank_light_rank_06: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_05",
  ],
  xp: { id: "force_rank_xp", cost: 80000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 10,
    force_manipulation_light: 5,
    force_control_light: 10,
  },
  schematics: [""]
},
force_rank_light_rank_07: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_06",
  ],
  xp: { id: "force_rank_xp", cost: 100000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 10,
    force_manipulation_light: 5,
    force_control_light: 10,
  },
  schematics: [""]
},
force_rank_light_rank_08: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_07",
  ],
  xp: { id: "force_rank_xp", cost: 150000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 15,
    force_manipulation_light: 10,
    force_control_light: 15,
  },
  schematics: [""]
},
force_rank_light_rank_09: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_08",
  ],
  xp: { id: "force_rank_xp", cost: 200000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 15,
    force_manipulation_light: 10,
    force_control_light: 15,
  },
  schematics: [""]
},
force_rank_light_rank_10: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_light_rank_09",
  ],
  xp: { id: "force_rank_xp", cost: 300000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_light: 15,
    force_manipulation_light: 10,
    force_control_light: 15,
  },
  schematics: [""]
},
force_rank_dark_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "force_rank_xp", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 5,
    force_manipulation_dark: 5,
    force_control_dark: 5,
  },
  schematics: [""]
},
force_rank_dark_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_10",
  ],
  xp: { id: "force_rank_xp", cost: 500000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 20,
    force_manipulation_dark: 15,
    force_control_dark: 20,
  },
  schematics: [""]
},
force_rank_dark_rank_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_novice",
  ],
  xp: { id: "force_rank_xp", cost: 10000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 5,
    force_manipulation_dark: 3,
    force_control_dark: 5,
  },
  schematics: [""]
},
force_rank_dark_rank_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_01",
  ],
  xp: { id: "force_rank_xp", cost: 20000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 5,
    force_manipulation_dark: 4,
    force_control_dark: 5,
  },
  schematics: [""]
},
force_rank_dark_rank_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_02",
  ],
  xp: { id: "force_rank_xp", cost: 30000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 5,
    force_manipulation_dark: 4,
    force_control_dark: 5,
  },
  schematics: [""]
},
force_rank_dark_rank_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_03",
  ],
  xp: { id: "force_rank_xp", cost: 40000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 5,
    force_manipulation_dark: 4,
    force_control_dark: 5,
  },
  schematics: [""]
},
force_rank_dark_rank_05: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_04",
  ],
  xp: { id: "force_rank_xp", cost: 60000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 10,
    force_manipulation_dark: 5,
    force_control_dark: 10,
  },
  schematics: [""]
},
force_rank_dark_rank_06: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_05",
  ],
  xp: { id: "force_rank_xp", cost: 80000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 10,
    force_manipulation_dark: 5,
    force_control_dark: 10,
  },
  schematics: [""]
},
force_rank_dark_rank_07: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_06",
  ],
  xp: { id: "force_rank_xp", cost: 100000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 10,
    force_manipulation_dark: 5,
    force_control_dark: 10,
  },
  schematics: [""]
},
force_rank_dark_rank_08: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_07",
  ],
  xp: { id: "force_rank_xp", cost: 150000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 15,
    force_manipulation_dark: 10,
    force_control_dark: 15,
  },
  schematics: [""]
},
force_rank_dark_rank_09: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_08",
  ],
  xp: { id: "force_rank_xp", cost: 200000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 15,
    force_manipulation_dark: 10,
    force_control_dark: 15,
  },
  schematics: [""]
},
force_rank_dark_rank_10: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_rank_dark_rank_09",
  ],
  xp: { id: "force_rank_xp", cost: 300000 },
  commands: [
    "",
  ],
  skillModifiers: {
    force_power_dark: 15,
    force_manipulation_dark: 10,
    force_control_dark: 15,
  },
  schematics: [""]
},
force_title_jedi_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_title_jedi_rank_04",
  ],
  xp: { id: "jedi_general", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_title_jedi_rank_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_title_jedi_novice",
  ],
  xp: { id: "jedi_general", cost: 0 },
  commands: [
    "cert_onehandlightsaber_training",
  ],
  skillModifiers: {
    private_onehandlightsaber_combat_difficulty: 500,
    private_twohandlightsaber_combat_difficulty: 500,
    private_polearmlightsaber_combat_difficulty: 500,
  },
  schematics: ["craftSaberTraining","craftJediTool"]
},
force_title_jedi_rank_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_title_jedi_rank_01",
  ],
  xp: { id: "jedi_general", cost: 0 },
  commands: [
    "cert_onehandlightsaber_gen1",
    "cert_polearmlightsaber_gen1",
    "cert_twohandlightsaber_gen1",
  ],
  skillModifiers: {
    jedi_force_power_max: 750,
    jedi_force_power_regen: 15,
    onehandlightsaber_accuracy: 50,
    twohandlightsaber_accuracy: 50,
    polearmlightsaber_accuracy: 50,
  },
  schematics: ["craftSaberNovice"]
},
force_title_jedi_rank_03: {
  title: "",
  skillPoints: 0,
  preReqs: [],
  xp: { id: "jedi_general", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
force_title_jedi_rank_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "force_title_jedi_rank_03",
  ],
  xp: { id: "jedi_general", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
crafting_shipwright_novice: {
  title: "",
  skillPoints: 6,
  preReqs: [
    "crafting_artisan_engineering_04",
  ],
  xp: { id: "crafting_general", cost: 30000 },
  commands: [
    "private_shipwright_novice",
  ],
  skillModifiers: {
    chassis_assembly: 10,
    engine_assembly: 10,
    booster_assembly: 10,
    power_systems: 10,
    weapon_systems: 10,
    shields_assembly: 10,
    advanced_assembly: 10,
    chassis_experimentation: 10,
    weapon_systems_experimentation: 20,
    engine_experimentation: 20,
    booster_experimentation: 20,
    power_systems_experimentation: 10,
    shields_experimentation: 10,
    advanced_ship_experimentation: 10,
    defense_reverse: 1,
    propulsion_reverse: 1,
    engineering_reverse: 1,
    systems_reverse: 1,
  },
  schematics: ["craftShipwrightNoviceGroupA"]
},
crafting_shipwright_master: {
  title: "",
  skillPoints: 1,
  preReqs: [
    "crafting_shipwright_engineering_04",
    "crafting_shipwright_propulsion_04",
    "crafting_shipwright_systems_04",
    "crafting_shipwright_defense_04",
  ],
  xp: { id: "shipwright", cost: 200000 },
  commands: [
    "private_shipwright_master",
  ],
  skillModifiers: {
    chassis_assembly: 25,
    chassis_experimentation: 25,
    weapon_systems_experimentation: 25,
    weapon_systems: 25,
    engine_experimentation: 25,
    engine_assembly: 25,
    booster_experimentation: 25,
    booster_assembly: 25,
    power_systems_experimentation: 25,
    power_systems: 25,
    shields_experimentation: 25,
    shields_assembly: 25,
    advanced_ship_experimentation: 25,
    advanced_assembly: 25,
    defense_reverse: 1,
    propulsion_reverse: 1,
    systems_reverse: 1,
    engineering_reverse: 1,
  },
  schematics: ["craftShipwrightMaster"]
},
crafting_shipwright_engineering_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_shipwright_novice",
  ],
  xp: { id: "shipwright", cost: 20000 },
  commands: [
    "private_shipwright_engineering_1",
  ],
  skillModifiers: {
    chassis_assembly: 10,
    chassis_experimentation: 10,
    engineering_reverse: 2,
  },
  schematics: ["craftShipwrightEngGroupA"]
},
crafting_shipwright_engineering_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_shipwright_engineering_01",
  ],
  xp: { id: "shipwright", cost: 50000 },
  commands: [
    "private_shipwright_engineering_2",
  ],
  skillModifiers: {
    chassis_assembly: 15,
    chassis_experimentation: 15,
    engineering_reverse: 2,
  },
  schematics: ["craftShipwrightEngGroupB"]
},
crafting_shipwright_engineering_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_shipwright_engineering_02",
  ],
  xp: { id: "shipwright", cost: 100000 },
  commands: [
    "private_shipwright_engineering_3",
  ],
  skillModifiers: {
    chassis_assembly: 20,
    chassis_experimentation: 20,
    engineering_reverse: 2,
  },
  schematics: ["craftShipwrightEngGroupC"]
},
crafting_shipwright_engineering_04: {
  title: "",
  skillPoints: 2,
  preReqs: [
    "crafting_shipwright_engineering_03",
  ],
  xp: { id: "shipwright", cost: 150000 },
  commands: [
    "private_shipwright_engineering_4",
  ],
  skillModifiers: {
    chassis_assembly: 20,
    chassis_experimentation: 20,
    engineering_reverse: 2,
  },
  schematics: ["craftShipwrightEngGroupD"]
},
crafting_shipwright_propulsion_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_shipwright_novice",
  ],
  xp: { id: "shipwright", cost: 20000 },
  commands: [
    "private_shipwright_propulsion_1",
  ],
  skillModifiers: {
    engine_assembly: 10,
    booster_assembly: 10,
    engine_experimentation: 20,
    booster_experimentation: 20,
    propulsion_reverse: 2,
  },
  schematics: ["craftShipwrightPropulsionGroupA"]
},
crafting_shipwright_propulsion_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_shipwright_propulsion_01",
  ],
  xp: { id: "shipwright", cost: 50000 },
  commands: [
    "private_shipwright_propulsion_2",
  ],
  skillModifiers: {
    engine_assembly: 15,
    booster_assembly: 15,
    engine_experimentation: 25,
    booster_experimentation: 25,
    propulsion_reverse: 2,
  },
  schematics: ["craftShipwrightPropulsionGroupB"]
},
crafting_shipwright_propulsion_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_shipwright_propulsion_02",
  ],
  xp: { id: "shipwright", cost: 100000 },
  commands: [
    "private_shipwright_propulsion_3",
  ],
  skillModifiers: {
    engine_assembly: 20,
    booster_assembly: 20,
    engine_experimentation: 30,
    booster_experimentation: 30,
    propulsion_reverse: 2,
  },
  schematics: ["craftShipwrightPropulsionGroupC"]
},
crafting_shipwright_propulsion_04: {
  title: "",
  skillPoints: 2,
  preReqs: [
    "crafting_shipwright_propulsion_03",
  ],
  xp: { id: "shipwright", cost: 150000 },
  commands: [
    "private_shipwright_propulsion_4",
  ],
  skillModifiers: {
    engine_assembly: 20,
    booster_assembly: 20,
    engine_experimentation: 30,
    booster_experimentation: 30,
    propulsion_reverse: 2,
  },
  schematics: ["craftShipwrightPropulsionGroupD"]
},
crafting_shipwright_systems_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_shipwright_novice",
  ],
  xp: { id: "shipwright", cost: 20000 },
  commands: [
    "private_shipwright_systems_1",
  ],
  skillModifiers: {
    power_systems: 10,
    advanced_assembly: 10,
    power_systems_experimentation: 10,
    advanced_ship_experimentation: 10,
    systems_reverse: 2,
  },
  schematics: ["craftShipwrightSystemsGroupA"]
},
crafting_shipwright_systems_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_shipwright_systems_01",
  ],
  xp: { id: "shipwright", cost: 50000 },
  commands: [
    "private_shipwright_systems_2",
  ],
  skillModifiers: {
    power_systems: 15,
    advanced_assembly: 15,
    power_systems_experimentation: 15,
    advanced_ship_experimentation: 15,
    systems_reverse: 2,
  },
  schematics: ["craftShipwrightSystemsGroupB"]
},
crafting_shipwright_systems_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_shipwright_systems_02",
  ],
  xp: { id: "shipwright", cost: 100000 },
  commands: [
    "private_shipwright_systems_3",
  ],
  skillModifiers: {
    power_systems: 20,
    advanced_assembly: 20,
    power_systems_experimentation: 20,
    advanced_ship_experimentation: 20,
    systems_reverse: 2,
  },
  schematics: ["craftShipwrightSystemsGroupC"]
},
crafting_shipwright_systems_04: {
  title: "",
  skillPoints: 2,
  preReqs: [
    "crafting_shipwright_systems_03",
  ],
  xp: { id: "shipwright", cost: 150000 },
  commands: [
    "private_shipwright_systems_4",
  ],
  skillModifiers: {
    power_systems: 20,
    advanced_assembly: 20,
    power_systems_experimentation: 20,
    advanced_ship_experimentation: 20,
    systems_reverse: 2,
  },
  schematics: ["craftShipwrightSystemsGroupD"]
},
crafting_shipwright_defense_01: {
  title: "",
  skillPoints: 5,
  preReqs: [
    "crafting_shipwright_novice",
  ],
  xp: { id: "shipwright", cost: 20000 },
  commands: [
    "private_shipwright_defense_1",
  ],
  skillModifiers: {
    weapon_systems: 10,
    weapon_systems_experimentation: 20,
    defense_reverse: 2,
    shields_assembly: 10,
    shields_experimentation: 10,
  },
  schematics: ["craftShipwrightDefenseGroupA"]
},
crafting_shipwright_defense_02: {
  title: "",
  skillPoints: 4,
  preReqs: [
    "crafting_shipwright_defense_01",
  ],
  xp: { id: "shipwright", cost: 50000 },
  commands: [
    "private_shipwright_defense_2",
  ],
  skillModifiers: {
    weapon_systems: 15,
    weapon_systems_experimentation: 25,
    defense_reverse: 2,
    shields_assembly: 15,
    shields_experimentation: 15,
  },
  schematics: ["craftShipwrightDefenseGroupB"]
},
crafting_shipwright_defense_03: {
  title: "",
  skillPoints: 3,
  preReqs: [
    "crafting_shipwright_defense_02",
  ],
  xp: { id: "shipwright", cost: 100000 },
  commands: [
    "private_shipwright_defense_3",
  ],
  skillModifiers: {
    weapon_systems: 20,
    weapon_systems_experimentation: 30,
    defense_reverse: 2,
    shields_assembly: 20,
    shields_experimentation: 20,
  },
  schematics: ["craftShipwrightDefenseGroupC"]
},
crafting_shipwright_defense_04: {
  title: "",
  skillPoints: 2,
  preReqs: [
    "crafting_shipwright_defense_03",
  ],
  xp: { id: "shipwright", cost: 150000 },
  commands: [
    "private_shipwright_defense_4",
  ],
  skillModifiers: {
    weapon_systems: 20,
    weapon_systems_experimentation: 30,
    defense_reverse: 2,
    shields_assembly: 20,
    shields_experimentation: 20,
  },
  schematics: ["craftShipwrightDefenseGroupD"]
},
pilot: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_rebel_navy_novice",
    "cert_starships_z95headhunter",
    "cert_ordnance_level1",
    "cert_droid_astromech_1",
    "droidcommand_mutedroid",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_04",
    "pilot_rebel_navy_weapons_04",
    "pilot_rebel_navy_procedures_04",
    "pilot_rebel_navy_droid_04",
  ],
  xp: { id: "space_combat_general", cost: 7500000 },
  commands: [
    "private_rebel_navy_master",
    "cert_starships_bwing",
    "cert_starships_ykl37r",
    "cert_ordnance_level9",
    "cert_ordnance_levelten",
    "cert_droid_astromech_6",
    "jstart3",
    "inspacerr",
    "cert_starships_firespray",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_rebel_navy_starships_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "private_rebel_navy_starships_1",
    "cert_starships_ywing",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_starships_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_01",
    "pilot_rebel_navy_weapons_01",
    "pilot_rebel_navy_procedures_01",
    "pilot_rebel_navy_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "private_rebel_navy_starships_2",
    "cert_starships_ywinglongprobe",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_starships_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_02",
    "pilot_rebel_navy_weapons_02",
    "pilot_rebel_navy_procedures_02",
    "pilot_rebel_navy_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "private_rebel_navy_starships_3",
    "cert_starships_xwing",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_starships_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_03",
    "pilot_rebel_navy_weapons_03",
    "pilot_rebel_navy_procedures_03",
    "pilot_rebel_navy_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "private_rebel_navy_starships_4",
    "cert_starships_awing",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_weapons_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "cert_ordnance_level2",
    "cert_ordnance_level3",
  ],
  skillModifiers: {
    missile_launching: 65,
  },
  schematics: [""]
},
pilot_rebel_navy_weapons_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_01",
    "pilot_rebel_navy_weapons_01",
    "pilot_rebel_navy_procedures_01",
    "pilot_rebel_navy_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "cert_ordnance_level4",
    "cert_ordnance_level5",
  ],
  skillModifiers: {
    missile_launching: 10,
  },
  schematics: [""]
},
pilot_rebel_navy_weapons_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_02",
    "pilot_rebel_navy_weapons_02",
    "pilot_rebel_navy_procedures_02",
    "pilot_rebel_navy_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "cert_ordnance_level6",
    "cert_ordnance_level7",
  ],
  skillModifiers: {
    missile_launching: 10,
  },
  schematics: [""]
},
pilot_rebel_navy_weapons_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_03",
    "pilot_rebel_navy_weapons_03",
    "pilot_rebel_navy_procedures_03",
    "pilot_rebel_navy_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "cert_ordnance_level8",
  ],
  skillModifiers: {
    missile_launching: 15,
  },
  schematics: [""]
},
pilot_rebel_navy_procedures_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "iffscramble",
    "jstart1",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_rebel_navy_procedures_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_01",
    "pilot_rebel_navy_weapons_01",
    "pilot_rebel_navy_procedures_01",
    "pilot_rebel_navy_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "eshields",
    "vrepair",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_rebel_navy_procedures_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_02",
    "pilot_rebel_navy_weapons_02",
    "pilot_rebel_navy_procedures_02",
    "pilot_rebel_navy_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "jstart2",
    "inspacerepair",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_rebel_navy_procedures_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_03",
    "pilot_rebel_navy_weapons_03",
    "pilot_rebel_navy_procedures_03",
    "pilot_rebel_navy_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "inspacereload",
    "vrepairother",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_rebel_navy_droid_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "private_rebel_navy_droid_1",
    "droidcommand_shieldnormalize",
    "droidcommand_shieldbacktofronttwenty",
    "droidcommand_shieldfronttobacktwenty",
    "droidcommand_shieldadjustfrontone",
    "droidcommand_shieldadjustrearone",
    "cert_droid_astromech_2",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_droid_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_01",
    "pilot_rebel_navy_weapons_01",
    "pilot_rebel_navy_procedures_01",
    "pilot_rebel_navy_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "private_rebel_navy_droid_2",
    "droidcommand_shieldbacktofrontfifty",
    "droidcommand_shieldfronttobackfifty",
    "droidcommand_shieldadjustfronttwo",
    "droidcommand_shieldadjustreartwo",
    "cert_droid_astromech_3",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_droid_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_02",
    "pilot_rebel_navy_weapons_02",
    "pilot_rebel_navy_procedures_02",
    "pilot_rebel_navy_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "private_rebel_navy_droid_3",
    "droidcommand_shieldbacktofronteighty",
    "droidcommand_shieldfronttobackeighty",
    "droidcommand_shieldadjustfrontthree",
    "droidcommand_shieldadjustrearthree",
    "cert_droid_astromech_4",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_rebel_navy_droid_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_rebel_navy_starships_03",
    "pilot_rebel_navy_weapons_03",
    "pilot_rebel_navy_procedures_03",
    "pilot_rebel_navy_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "private_rebel_navy_droid_4",
    "droidcommand_shieldbacktofronthundred",
    "droidcommand_shieldfronttobackhundred",
    "droidcommand_shieldadjustfrontfour",
    "droidcommand_shieldadjustrearfour",
    "cert_droid_astromech_5",
    "droidcommand_shieldemergencyfront",
    "droidcommand_shieldemergencyrear",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_imperial_navy_novice",
    "cert_starships_tiefighterlight",
    "cert_ordnance_level1",
    "cert_droid_astromech_1",
    "droidcommand_mutedroid",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_04",
    "pilot_imperial_navy_weapons_04",
    "pilot_imperial_navy_procedures_04",
    "pilot_imperial_navy_droid_04",
  ],
  xp: { id: "space_combat_general", cost: 7500000 },
  commands: [
    "private_imperial_navy_master",
    "cert_starships_decimator",
    "cert_starships_tieoppressor",
    "cert_ordnance_level9",
    "cert_ordnance_levelten",
    "cert_droid_astromech_6",
    "bstrike3",
    "cert_starships_firespray",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_imperial_navy_starships_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "private_imperial_navy_starships_1",
    "cert_starships_tiefighter",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_starships_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_01",
    "pilot_imperial_navy_weapons_01",
    "pilot_imperial_navy_procedures_01",
    "pilot_imperial_navy_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "private_imperial_navy_starships_2",
    "cert_starships_tiefighterin",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_starships_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_02",
    "pilot_imperial_navy_weapons_02",
    "pilot_imperial_navy_procedures_02",
    "pilot_imperial_navy_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "private_imperial_navy_starships_3",
    "cert_starships_tieinterceptor",
    "cert_starships_tiebomber",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_starships_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_03",
    "pilot_imperial_navy_weapons_03",
    "pilot_imperial_navy_procedures_03",
    "pilot_imperial_navy_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "private_imperial_navy_starships_4",
    "cert_starships_tieadvanced",
    "cert_starships_tieaggressor",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_weapons_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "cert_ordnance_level2",
    "cert_ordnance_level3",
  ],
  skillModifiers: {
    missile_launching: 65,
  },
  schematics: [""]
},
pilot_imperial_navy_weapons_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_01",
    "pilot_imperial_navy_weapons_01",
    "pilot_imperial_navy_procedures_01",
    "pilot_imperial_navy_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "cert_ordnance_level4",
    "cert_ordnance_level5",
  ],
  skillModifiers: {
    missile_launching: 10,
  },
  schematics: [""]
},
pilot_imperial_navy_weapons_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_02",
    "pilot_imperial_navy_weapons_02",
    "pilot_imperial_navy_procedures_02",
    "pilot_imperial_navy_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "cert_ordnance_level6",
    "cert_ordnance_level7",
  ],
  skillModifiers: {
    missile_launching: 10,
  },
  schematics: [""]
},
pilot_imperial_navy_weapons_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_03",
    "pilot_imperial_navy_weapons_03",
    "pilot_imperial_navy_procedures_03",
    "pilot_imperial_navy_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "cert_ordnance_level8",
  ],
  skillModifiers: {
    missile_launching: 15,
  },
  schematics: [""]
},
pilot_imperial_navy_procedures_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "pumpreactor",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_imperial_navy_procedures_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_01",
    "pilot_imperial_navy_weapons_01",
    "pilot_imperial_navy_procedures_01",
    "pilot_imperial_navy_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "eweapons",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_imperial_navy_procedures_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_02",
    "pilot_imperial_navy_weapons_02",
    "pilot_imperial_navy_procedures_02",
    "pilot_imperial_navy_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "bstrike1",
    "nblast",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_imperial_navy_procedures_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_03",
    "pilot_imperial_navy_weapons_03",
    "pilot_imperial_navy_procedures_03",
    "pilot_imperial_navy_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "bstrike2",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_imperial_navy_droid_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "private_imperial_navy_droid_1",
    "droidcommand_weaponoverloadone",
    "droidcommand_weaponeffeciencyone",
    "droidcommand_weaponnormalize",
    "droidcommand_engineoverloadone",
    "droidcommand_engineefficiencyone",
    "droidcommand_enginenormalize",
    "cert_droid_astromech_2",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_droid_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_01",
    "pilot_imperial_navy_weapons_01",
    "pilot_imperial_navy_procedures_01",
    "pilot_imperial_navy_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "private_imperial_navy_droid_2",
    "droidcommand_weaponoverloadtwo",
    "droidcommand_weaponeffeciencytwo",
    "droidcommand_engineoverloadtwo",
    "droidcommand_engineefficiencytwo",
    "cert_droid_astromech_3",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_droid_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_02",
    "pilot_imperial_navy_weapons_02",
    "pilot_imperial_navy_procedures_02",
    "pilot_imperial_navy_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "private_imperial_navy_droid_3",
    "droidcommand_weaponoverloadthree",
    "droidcommand_weaponeffeciencythree",
    "droidcommand_engineoverloadthree",
    "droidcommand_engineefficiencythree",
    "cert_droid_astromech_4",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_imperial_navy_droid_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_imperial_navy_starships_03",
    "pilot_imperial_navy_weapons_03",
    "pilot_imperial_navy_procedures_03",
    "pilot_imperial_navy_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "private_imperial_navy_droid_4",
    "droidcommand_weaponoverloadfour",
    "droidcommand_weaponeffeciencyfour",
    "droidcommand_engineoverloadfour",
    "droidcommand_engineefficiencyfour",
    "cert_droid_astromech_5",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "", cost: 0 },
  commands: [
    "private_neutral_novice",
    "cert_starships_lighthuttfighter",
    "cert_ordnance_level1",
    "cert_droid_astromech_1",
    "droidcommand_mutedroid",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_04",
    "pilot_neutral_weapons_04",
    "pilot_neutral_procedures_04",
    "pilot_neutral_droid_04",
  ],
  xp: { id: "space_combat_general", cost: 7500000 },
  commands: [
    "private_neutral_master",
    "cert_starships_yt1300",
    "cert_ordnance_level9",
    "cert_ordnance_levelten",
    "cert_droid_astromech_6",
    "ptrap2",
    "epulse3",
    "cert_starships_firespray",
    "cert_starships_hutt_turret_ship",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_neutral_starships_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "private_neutral_starships_1",
    "cert_starships_mediumhuttfighter",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_starships_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_01",
    "pilot_neutral_weapons_01",
    "pilot_neutral_procedures_01",
    "pilot_neutral_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "private_neutral_starships_2",
    "cert_starships_heavyhuttfighter",
    "cert_starships_lightblacksunfighter",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_starships_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_02",
    "pilot_neutral_weapons_02",
    "pilot_neutral_procedures_02",
    "pilot_neutral_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "private_neutral_starships_3",
    "cert_starships_mediumblacksunfighter",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_starships_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_03",
    "pilot_neutral_weapons_03",
    "pilot_neutral_procedures_03",
    "pilot_neutral_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "private_neutral_starships_4",
    "cert_starships_heavyblacksunfighter",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_weapons_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "cert_ordnance_level2",
    "cert_ordnance_level3",
  ],
  skillModifiers: {
    missile_launching: 65,
  },
  schematics: [""]
},
pilot_neutral_weapons_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_01",
    "pilot_neutral_weapons_01",
    "pilot_neutral_procedures_01",
    "pilot_neutral_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "cert_ordnance_level4",
    "cert_ordnance_level5",
  ],
  skillModifiers: {
    missile_launching: 10,
  },
  schematics: [""]
},
pilot_neutral_weapons_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_02",
    "pilot_neutral_weapons_02",
    "pilot_neutral_procedures_02",
    "pilot_neutral_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "cert_ordnance_level6",
    "cert_ordnance_level7",
  ],
  skillModifiers: {
    missile_launching: 10,
  },
  schematics: [""]
},
pilot_neutral_weapons_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_03",
    "pilot_neutral_weapons_03",
    "pilot_neutral_procedures_03",
    "pilot_neutral_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "cert_ordnance_level8",
  ],
  skillModifiers: {
    missile_launching: 15,
  },
  schematics: [""]
},
pilot_neutral_procedures_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "ethrust",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_neutral_procedures_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_01",
    "pilot_neutral_weapons_01",
    "pilot_neutral_procedures_01",
    "pilot_neutral_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "ptrap1",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_neutral_procedures_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_02",
    "pilot_neutral_weapons_02",
    "pilot_neutral_procedures_02",
    "pilot_neutral_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "iffscramble",
    "epulse1",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_neutral_procedures_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_03",
    "pilot_neutral_weapons_03",
    "pilot_neutral_procedures_03",
    "pilot_neutral_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "epulse2",
  ],
  skillModifiers: {
    pilot_special_tactics: 20,
  },
  schematics: [""]
},
pilot_neutral_droid_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_novice",
  ],
  xp: { id: "space_combat_general", cost: 7500 },
  commands: [
    "private_neutral_droid_1",
    "droidcommand_reactoroverloadone",
    "droidcommand_reactornormalize",
    "cert_droid_astromech_2",
    "droidcommand_weapcappowerupone",
    "droidcommand_weapcapequalize",
    "droidcommand_weapcaptoshieldone",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_droid_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_01",
    "pilot_neutral_weapons_01",
    "pilot_neutral_procedures_01",
    "pilot_neutral_droid_01",
  ],
  xp: { id: "space_combat_general", cost: 60000 },
  commands: [
    "private_neutral_droid_2",
    "droidcommand_reactoroverloadtwo",
    "cert_droid_astromech_3",
    "droidcommand_weapcappoweruptwo",
    "droidcommand_weapcaptoshieldtwo",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_droid_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_02",
    "pilot_neutral_weapons_02",
    "pilot_neutral_procedures_02",
    "pilot_neutral_droid_02",
  ],
  xp: { id: "space_combat_general", cost: 200000 },
  commands: [
    "private_neutral_droid_3",
    "droidcommand_reactoroverloadthree",
    "cert_droid_astromech_4",
    "droidcommand_weapcappowerupthree",
    "droidcommand_weapcaptoshieldthree",
  ],
  skillModifiers: {},
  schematics: [""]
},
pilot_neutral_droid_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "pilot_neutral_starships_03",
    "pilot_neutral_weapons_03",
    "pilot_neutral_procedures_03",
    "pilot_neutral_droid_03",
  ],
  xp: { id: "space_combat_general", cost: 1000000 },
  commands: [
    "private_neutral_droid_4",
    "droidcommand_reactoroverloadfour",
    "cert_droid_astromech_5",
    "droidcommand_weapcappowerupfour",
    "droidcommand_weapcaptoshieldfour",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_gladiator_novice: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "",
  ],
  xp: { id: "combat_gladiator", cost: 5000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_gladiator_master: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_thraex_04",
    "combat_gladiator_murmillo_04",
    "combat_gladiator_dimachaerus_04",
    "combat_gladiator_secutor_04",
  ],
  xp: { id: "combat_gladiator", cost: 25000 },
  commands: [
    "",
  ],
  skillModifiers: {},
  schematics: [""]
},
combat_gladiator_thraex_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_novice",
  ],
  xp: { id: "combat_gladiator", cost: 6250 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_thraex_hit: 1,
  },
  schematics: [""]
},
combat_gladiator_thraex_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_thraex_01",
  ],
  xp: { id: "combat_gladiator", cost: 9375 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_thraex_hit: 2,
  },
  schematics: [""]
},
combat_gladiator_thraex_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_thraex_02",
  ],
  xp: { id: "combat_gladiator", cost: 12500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_thraex_hit: 3,
  },
  schematics: [""]
},
combat_gladiator_thraex_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_thraex_03",
  ],
  xp: { id: "combat_gladiator", cost: 18750 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_thraex_hit: 4,
  },
  schematics: [""]
},
combat_gladiator_murmillo_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_novice",
  ],
  xp: { id: "combat_gladiator", cost: 6250 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_murmillo_defense: 1,
  },
  schematics: [""]
},
combat_gladiator_murmillo_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_murmillo_01",
  ],
  xp: { id: "combat_gladiator", cost: 9375 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_murmillo_defense: 2,
  },
  schematics: [""]
},
combat_gladiator_murmillo_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_murmillo_02",
  ],
  xp: { id: "combat_gladiator", cost: 12500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_murmillo_defense: 3,
  },
  schematics: [""]
},
combat_gladiator_murmillo_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_murmillo_03",
  ],
  xp: { id: "combat_gladiator", cost: 18750 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_murmillo_defense: 4,
  },
  schematics: [""]
},
combat_gladiator_dimachaerus_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_novice",
  ],
  xp: { id: "combat_gladiator", cost: 6250 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_dimachaerus_hit: 1,
  },
  schematics: [""]
},
combat_gladiator_dimachaerus_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_dimachaerus_01",
  ],
  xp: { id: "combat_gladiator", cost: 9375 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_dimachaerus_hit: 2,
  },
  schematics: [""]
},
combat_gladiator_dimachaerus_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_dimachaerus_02",
  ],
  xp: { id: "combat_gladiator", cost: 12500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_dimachaerus_hit: 3,
  },
  schematics: [""]
},
combat_gladiator_dimachaerus_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_dimachaerus_03",
  ],
  xp: { id: "combat_gladiator", cost: 18750 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_dimachaerus_hit: 4,
  },
  schematics: [""]
},
combat_gladiator_secutor_01: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_novice",
  ],
  xp: { id: "combat_gladiator", cost: 6250 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_secutor_defense: 1,
  },
  schematics: [""]
},
combat_gladiator_secutor_02: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_secutor_01",
  ],
  xp: { id: "combat_gladiator", cost: 9375 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_secutor_defense: 2,
  },
  schematics: [""]
},
combat_gladiator_secutor_03: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_secutor_02",
  ],
  xp: { id: "combat_gladiator", cost: 12500 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_secutor_defense: 3,
  },
  schematics: [""]
},
combat_gladiator_secutor_04: {
  title: "",
  skillPoints: 0,
  preReqs: [
    "combat_gladiator_secutor_03",
  ],
  xp: { id: "combat_gladiator", cost: 18750 },
  commands: [
    "",
  ],
  skillModifiers: {
    combat_secutor_defense: 4,
  },
  schematics: [""]
},
};
