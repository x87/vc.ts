// Generated from main/inital.sc

import { $ } from "../utils/vars.mts";

export async function inital() {
  // MissionBoundary


  // SCRIPT_NAME initial


  $.mission_trigger_wait_time = 250;


  $.one_sixteenth = 0.0625;


  $.one_thirtysecond = $.one_sixteenth / 2.0;


  $.one_sixtyfourth = $.one_thirtysecond / 2.0;
  $.blob_flag = 0;
  $.day_flag = 0;
  $.day_counter = 0;
  $.hours_s = 0;
  $.minutes_s = 0;
  $.flag_stadium_doors = 0;
  $.button_pressed = 0;
  $.skip_flag = 0;
  $.print_save_game_help = 0;
  $.print_first_help = 0;
  $.print_help_for_radar = 0;
  $.import_car_generator1_created = 0;
  $.import_car_generator2_created = 0;
  $.import_car_generator3_created = 0;
  $.import_car_generator4_created = 0;
  $.switch_off_starfish_gates = 0;
  $.print_help_for_jacking = 0;
  $.played_reminder_help = 0;
  $.car_help_played = 0;
  $.remove_mansion_pickup = 0;
  $.drive_by_help = 0;
  $.goto_hotel_contact_blip = 0;
  $.bike_help = 0;
  $.flag_kickstart_passed_1stime = 0;
  $.flag_intro_passed = 0;
  $.flag_hotel_mission1_passed = 0;
  $.flag_lawyer_mission1_passed = 0;
  $.flag_lawyer_mission2_passed = 0;
  $.flag_lawyer_mission3_passed = 0;
  $.flag_lawyer_mission4_passed = 0;
  $.flag_general_mission1_passed = 0;
  $.flag_general_mission2_passed = 0;
  $.flag_general_mission3_passed = 0;
  $.flag_general_mission4_passed = 0;
  $.flag_general_mission5_passed = 0;
  $.flag_baron_mission1_passed = 0;
  $.flag_baron_mission2_passed = 0;
  $.flag_baron_mission3_passed = 0;
  $.flag_baron_mission4_passed = 0;
  $.flag_baron_mission5_passed = 0;
  $.start_baron1_script_flag = 0;
  $.flag_kent_mission1_passed = 0;
  $.flag_sergio_mission1_passed = 0;
  $.flag_sergio_mission2_passed = 0;
  $.flag_sergio_mission3_passed = 0;
  $.flag_bankjob_mission1_passed = 0;
  $.flag_bankjob_mission2_passed = 0;
  $.flag_bankjob_mission3_passed = 0;
  $.flag_bankjob_mission4_passed = 0;
  $.flag_porn_mission1_passed = 0;
  $.flag_porn_mission2_passed = 0;
  $.flag_porn_mission3_passed = 0;
  $.flag_porn_mission4_passed = 0;
  $.flag_protect_mission1_passed = 0;
  $.flag_protect_mission2_passed = 0;
  $.flag_finale_mission1_passed = 0;
  $.flag_finale_mission2_passed = 0;
  $.flag_counter_mission1_passed = 0;
  $.flag_counter_mission2_passed = 0;
  $.flag_bikers_mission1_passed = 0;
  $.flag_bikers_mission2_passed = 0;
  $.flag_bikers_mission3_passed = 0;
  $.flag_cuban_mission1_passed = 0;
  $.flag_cuban_mission2_passed = 0;
  $.flag_cuban_mission3_passed = 0;
  $.flag_cuban_mission4_passed = 0;
  $.flag_haitian_mission1_passed = 0;
  $.flag_haitian_mission2_passed = 0;
  $.flag_haitian_mission3_passed = 0;
  $.flag_rock_mission1_passed = 0;
  $.flag_rock_mission2_passed = 0;
  $.flag_rock_mission3_passed = 0;
  $.flag_rock_mission4_passed = 0;
  $.counter_number_of_bat_assin_done = 0;
  $.counter_number_of_sniper_assin_done = 0;
  $.flag_assin_mission1_passed = 0;
  $.flag_assin_mission2_passed = 0;
  $.flag_assin_mission3_passed = 0;
  $.flag_assin_mission4_passed = 0;
  $.flag_assin_mission5_passed = 0;
  $.counter_number_of_car_assin_done = 0;
  $.flag_taxicut_mission1_passed = 0;
  $.flag_taxiwar_mission1_passed = 0;
  $.flag_taxiwar_mission2_passed = 0;
  $.flag_taxiwar_mission3_passed = 0;
  $.created_players_cab = 0;
  ONMISSION = 0;
  $.flag_player_on_oddjob = 0;
  $.ambulance_pager_flag = 0;
  $.total_saved_peds = 0;
  $.total_fires_exting = 0;
  $.flag_icecream_mission1_passed = 0;
  $.got_siren_help_before = 0;
  $.passed_usj_counter = 0;
  $.been_in_a_gang_car1_before = 0;
  $.flag_player_on_gang_car1_mission = 0;
  $.been_in_a_gang_car2_before = 0;
  $.flag_player_on_gang_car2_mission = 0;
  $.been_in_a_gang_car3_before = 0;
  $.flag_player_on_gang_car3_mission = 0;
  $.been_in_a_gang_car4_before = 0;
  $.flag_player_on_gang_car4_mission = 0;
  $.been_in_a_garbage_truck_before = 0;
  $.flag_player_on_garbage_mission = 0;
  $.flag_just_done_carbomb_mission = 0;
  $.flag_just_done_speed_mission = 0;
  $.flag_icecut_mission1_passed = 0;
  $.flag_intro1_before = 0;
  $.flag_intro2_before = 0;
  $.flag_intro3_before = 0;
  $.flag_intro_carpark1_before = 0;
  $.flag_4x4_mission1_passed = 0;
  $.flag_4x4_mission2_passed = 0;
  $.flag_4x4_mission3_passed = 0;
  $.flag_carpark1_passed = 0;
  $.flag_4x4one_trigger = 0;
  $.flag_4x4two_trigger = 0;
  $.flag_4x4three_trigger = 0;
  $.flag_carpark1_trigger = 0;
  $.flag_launch_4x4_1_ok = 0;
  $.flag_kickstart_mission1_passed = 0;
  $.kick_trigger = 0;
  $.flag_bmx_1_passed = 0;
  $.flag_bmx_2_passed = 0;
  $.flag_bmx_3_passed = 0;
  $.bmx_1_x = -425.0;
  $.bmx_1_y = 1410.0;
  $.bmx_1_z = 10.0;
  $.flag_taxi1_mission_launched = 0;
  $.been_in_a_taxi_before = 0;
  $.been_in_taxi1_before = 0;
  $.taxi_passed = 0;
  $.done_taxi_help = 0;
  $.new_taxi_created_before = 0;
  $.flag_just_done_rc_mission = 0;
  $.rec_rc1 = 0;
  $.rec_rc2 = 0;
  $.rec_rc3 = 0;
  $.rec_rc4 = 0;
  $.rec_rc5 = 0;
  $.rec_rc6 = 0;
  $.flag_rc1_passed = 0;
  $.flag_rc2_passed = 0;
  $.flag_rc3_passed = 0;
  $.flag_rc4_passed = 0;
  $.remove_nbmnbuy_pickup = 0;
  $.flag_mission_hooker1_passed = 0;
  $.flag_hooker_mission1_launched = 0;
  $.flag_pizza_mission_passed = 0;
  $.flag_pizza_trigger = 0;
  $.flag_mm_mission_passed = 0;
  $.flag_mm_trigger = 0;
  $.has_player_just_done_rcheli_mission = 0;
  $.flag_complete_rcheli_once = 0;
  $.has_player_just_done_rcrace_mission = 0;
  $.has_player_just_done_rcplane_mission = 0;
  $.race1_best_position = 99999999;
  $.race1_best_time = 99999999;
  $.race2_best_position = 99999999;
  $.race2_best_time = 99999999;
  $.race3_best_position = 99999999;
  $.race3_best_time = 99999999;
  $.race4_best_position = 99999999;
  $.race4_best_time = 99999999;
  $.race5_best_position = 99999999;
  $.race5_best_time = 99999999;
  $.race6_best_position = 99999999;
  $.race6_best_time = 99999999;
  $.heli1_checkpoint_best_time = 99999999;
  $.heli2_checkpoint_best_time = 99999999;
  $.heli3_checkpoint_best_time = 99999999;
  $.heli4_checkpoint_best_time = 99999999;
  $.got_money_help_print = 0;
  $.remove_hotel_pickup = 0;
  $.flag_phil_mission1_passed = 0;
  $.flag_phil_mission2_passed = 0;
  $.serg_mission3_start = 0;
  $.wasted_help = 0;
  $.wanted_help = 0;
  $.police_bribe_help = 0;
  $.wanted_star_help = 0;
  $.flag_played_rock3_before = 0;
  $.player_had_reload_award = 0;
  $.flag_played_bank2_before = 0;


  $.heli1X = -569.1451;
  $.heli1Y = 851.0923;
  $.heli1Z = 22.8402;


  $.heli2X = 28.4463;
  $.heli2Y = -1311.7614;
  $.heli2Z = 16.4712;


  $.heli3X = 375.8450;
  $.heli3Y = 332.9194;
  $.heli3Z = 11.5155;


  $.heli4X = -886.5938;
  $.heli4Y = 236.5693;
  $.heli4Z = 13.9773;


  $.baron2X = -244.6;
  $.baron2Y = -491.3;
  $.baron2Z = 10.6;


  $.ammu1X = -63.4;
  $.ammu1Y = -1481.8;
  $.ammu1Z = 9.4;


  $.ammu2X = 364.9;
  $.ammu2Y = 1055.7;
  $.ammu2Z = 18.2;


  $.ammu3X = -677.0;
  $.ammu3Y = 1205.6;
  $.ammu3Z = 10.0;


  $.hard1X = 202.7;
  $.hard1Y = -474.1;
  $.hard1Z = 10.1;


  $.hard2X = 364.9;
  $.hard2Y = 1078.0;
  $.hard2Z = 18.0;


  $.hard3X = -967.5;
  $.hard3Y = -693.2;
  $.hard3Z = 10.3;


  $.ass_1_x = 36.798;
  $.ass_1_Y = -1024.404;
  $.ass_1_Z = 9.451;


  $.ass_2_x = 482.5293;
  $.ass_2_Y = 244.276;
  $.ass_2_Z = 10.09;


  $.ass_3_x = 38.244;
  $.ass_3_Y = -1024.251;
  $.ass_3_Z = 9.451;


  $.ass_4_x = -1481.8719;
  $.ass_4_Y = -825.3049;
  $.ass_4_Z = 13.8777;


  $.ass_5_x = -978.0145;
  $.ass_5_Y = -530.7043;
  $.ass_5_Z = 9.9513;


  $.ind_saveX = 893.5;
  $.ind_saveY = -306.1;
  $.ind_saveZ = -100.0;


  $.com_saveX = 103.0;
  $.com_saveY = -484.2;
  $.com_saveZ = -100.0;


  $.sub_saveX = -665.0;
  $.sub_saveY = -6.5;
  $.sub_saveZ = -100.0;


  $.spray_taxi_indX = 925.0;
  $.spray_taxi_indY = -359.5;
  $.spray_taxi_indZ = -100.0;


  $.spray_taxi_comX = 379.0;
  $.spray_taxi_comY = -493.8;
  $.spray_taxi_comZ = -100.0;


  $.spray_taxi_subX = -1128.0;
  $.spray_taxi_subY = 32.58;
  $.spray_taxi_subZ = -100.0;


  // VAR_INT flag_had_taxi_jump_help


  $.flag_had_taxi_jump_help = 0;


  // VAR_INT done_ambulance_progress
  $.done_ambulance_progress = 0;


  // VAR_INT done_copcar_progress
  $.done_copcar_progress = 0;


  // VAR_INT done_firetruck_progress
  $.done_firetruck_progress = 0;


  // VAR_INT done_heli1_progress done_heli2_progress done_heli3_progress done_heli4_progress
  $.done_heli1_progress = 0;
  $.done_heli2_progress = 0;
  $.done_heli3_progress = 0;
  $.done_heli4_progress = 0;


  // VAR_INT done_race1_progress done_race2_progress done_race3_progress
  // VAR_INT done_race4_progress done_race5_progress done_race6_progress
  $.done_race1_progress = 0;
  $.done_race2_progress = 0;
  $.done_race3_progress = 0;
  $.done_race4_progress = 0;
  $.done_race5_progress = 0;
  $.done_race6_progress = 0;


  // VAR_INT nascar_best_lap_time nascar_best_time best_nascar_result
  $.nascar_best_lap_time = 999999;
  $.nascar_best_time = 999999;
  $.best_nascar_result = 999999;

  //stuff for trophies

  // VAR_INT done_ovalring_progress
  $.done_ovalring_progress = 0;
  // VAR_INT mm_mission_passed_once
  $.mm_mission_passed_once = 0;

  //Avery scripted cut variables

  // VAR_FLOAT vect_x vect_y vect_z
  // VAR_INT scripted_cut_limo


  // VAR_INT flag_player_on_army_ped_mission
  $.flag_player_on_army_ped_mission = 0;


  // VAR_INT flag_passed_range
  $.flag_passed_range = 0;

  // ********* 4x4 VARIABLES ***************************************************************************


  // VAR_INT player_4x4 wanted_4x4
  // VAR_INT counter_4x4_pickups
  // VAR_INT timer_4x4_secs
  // VAR_INT checkpoint_time_limit
  // VAR_INT flag_intro_jump
  // VAR_INT pcj_minutes
  // VAR_INT pcj_reward
  // VAR_INT flag_timer timer_4x4 timer_bonus


  // VAR_INT flag_truck_1 flag_truck_2 truck_1 truck_2 truck_driver1 truck_driver2
  // VAR_INT blip_1 blip_2 blip_3
  // VAR_INT blip_4 blip_5 blip_6
  // VAR_INT blip_7 blip_8 blip_9
  // VAR_INT blip_10 blip_11 blip_12
  // VAR_INT blip_13 blip_14 blip_15
  // VAR_INT blip_16 blip_17 blip_18
  // VAR_INT blip_19 blip_20 blip_21
  // VAR_INT blip_22 blip_23 blip_24


  // VAR_INT flag_blip_1 flag_blip_2 flag_blip_3 flag_blip_4
  // VAR_INT flag_blip_5 flag_blip_6 flag_blip_7 flag_blip_8
  // VAR_INT flag_blip_9 flag_blip_10 flag_blip_11 flag_blip_12
  // VAR_INT flag_blip_13 flag_blip_14 flag_blip_15 flag_blip_16
  // VAR_INT flag_blip_17 flag_blip_18 flag_blip_19 flag_blip_20
  // VAR_INT flag_blip_21 flag_blip_22 flag_blip_23 flag_blip_24


  // VAR_FLOAT x_1 y_1 z_1
  // VAR_FLOAT x_2 y_2 z_2
  // VAR_FLOAT x_3 y_3 z_3
  // VAR_FLOAT x_4 y_4 z_4
  // VAR_FLOAT x_5 y_5 z_5
  // VAR_FLOAT x_6 y_6 z_6
  // VAR_FLOAT x_7 y_7 z_7
  // VAR_FLOAT x_8 y_8 z_8
  // VAR_FLOAT x_9 y_9 z_9
  // VAR_FLOAT x_10 y_10 z_10
  // VAR_FLOAT x_11 y_11 z_11
  // VAR_FLOAT x_12 y_12 z_12
  // VAR_FLOAT x_13 y_13 z_13
  // VAR_FLOAT x_14 y_14 z_14
  // VAR_FLOAT x_15 y_15 z_15
  // VAR_FLOAT x_16 y_16 z_16
  // VAR_FLOAT x_17 y_17 z_17
  // VAR_FLOAT x_18 y_18 z_18
  // VAR_FLOAT x_19 y_19 z_19
  // VAR_FLOAT x_20 y_20 z_20
  // VAR_FLOAT x_21 y_21 z_21
  // VAR_FLOAT x_22 y_22 z_22
  // VAR_FLOAT x_23 y_23 z_23
  // VAR_FLOAT x_24 y_24 z_24
  // VAR_FLOAT cam_4x4_X
  // VAR_FLOAT cam_4x4_y
  // VAR_FLOAT cam_4x4_z


  // VAR_INT counter_laps counter_gates
  // VAR_INT time_lapsed time_now time_start
  // VAR_INT time_off_bike time_bailed time_left_to_find_bike time_left_to_find_bike_secs
  // VAR_INT record_bmx_1
  // VAR_INT counter_bmx_1_reward bmx_1_reward
  // VAR_INT flag_bmx1_print bmx1_minutes
  // VAR_INT kwayzee_biker1 kwayzee_biker2 kwayzee_biker3
  // VAR_INT kwayzee_moto1 kwayzee_moto2 kwayzee_moto3
  // VAR_INT flag_kwayzee1 flag_kwayzee2 flag_kwayzee3
  // VAR_INT var_kwayzee var_moto var_flag


  // VAR_INT record_bmx_2
  // VAR_INT flag_bmx2_print
  // VAR_INT counter_bmx_2_reward bmx_2_reward
  // VAR_INT bmx2_minutes


  // VAR_INT irrate_bloke blokes_car



  //bank_pivot_x = -1106.876
  //bank_pivot_y = -335.845
  //bank_pivot_z = 19.218
  //
  //entire_bank_s_x = bank_pivot_x + 47.017
  //entire_bank_s_y = bank_pivot_y + 23.431
  //entire_bank_s_z = bank_pivot_z + 9.163
  //entire_bank_l_x = bank_pivot_x + -47.773
  //entire_bank_l_y = bank_pivot_y + -23.431
  //entire_bank_l_z = bank_pivot_z + -9.154

  // ***************************************BLIPS******************************************************
  //13.9685 -1500.9684 12.7//safehouse with garage near stripclub
  ////mansion in north beach with garage
  //CHANGE_GARAGE_TYPE nbmnbuy_save_garage GARAGE_HIDEOUT_FOUR
  //415.9304 640.0891 12.9833 416.2365 639.1425 13.0847
  //431.1143 614.5876 19.6257 430.9002 613.8718 18.9610
  //427.8130 650.6702 15.3209 428.6758 650.2003 15.1346
  //428.3730 608.9806 11.6898 0.6338

  //-834.5308 1306.4335 11.0//downtown safehouse with 3 garages & warp to heli pad
  //garage_1: (-848.225 1303.119 10.421) (-853.657 1318.901) (-836.832 1307.033) (15.816)

  //304.8555 376.3351 12.7//block of flats with garage in northbeach


  // FIRST HALF BLIPS

  //ADD_SHORT_RANGE_SPRITE_BLIP_FOR_COORD taxibuyX taxibuyY taxibuyZ RADAR_SPRITE_HOUSEG taxibuy_blip
  //REMOVE_BLIP	taxibuy_blip


  $.weapon_shop1_blip = Blip.AddShortRangeSpriteForCoord($.ammu1X, $.ammu1Y, $.ammu1Z, 16 /* RADAR_SPRITE_GUN */);
  $.weapon_shop2_blip = Blip.AddShortRangeSpriteForCoord(364.8, 1051.5, 21.0, 16 /* RADAR_SPRITE_GUN */);
  $.weapon_shop3_blip = Blip.AddShortRangeSpriteForCoord($.ammu3X, $.ammu3Y, $.ammu3Z, 16 /* RADAR_SPRITE_GUN */);
  $.hardware_shop1 = Blip.AddShortRangeSpriteForCoord($.hard1X, $.hard1Y, $.hard1Z, 18 /* RADAR_SPRITE_HARDWARE */);
  $.hardware_shop2 = Blip.AddShortRangeSpriteForCoord(364.8, 1086.5, 21.0, 18 /* RADAR_SPRITE_HARDWARE */);
  $.hardware_shop3 = Blip.AddShortRangeSpriteForCoord($.hard3X, $.hard3Y, $.hard3Z, 18 /* RADAR_SPRITE_HARDWARE */);


  $.spray_shop1 = Blip.AddShortRangeSpriteForCoord(-3.8, -1265.8, 12.0, 27 /* RADAR_SPRITE_SPRAY */); //South beach
  $.spray_shop2 = Blip.AddShortRangeSpriteForCoord(319.0, 441.3, 12.0, 27 /* RADAR_SPRITE_SPRAY */); //Vice Point
  $.spray_shop3 = Blip.AddShortRangeSpriteForCoord(-903.0, -1261.1, 12.0, 27 /* RADAR_SPRITE_SPRAY */); //Docks
  $.spray_shop5 = Blip.AddShortRangeSpriteForCoord(-876.2, -105.5, 12.0, 27 /* RADAR_SPRITE_SPRAY */); //Main road haiti

  //CHANGE_BLIP_DISPLAY hotel_contact_blip BLIP_ONLY



  // ***************************************POLICE AND HOSPITAL RESTARTS****************************************
  // BEACH RESTARTS

  Restart.AddHospital(493.5, 703.1, 11.1, 90.0); // (north)
  Restart.AddPolice(508.9, 506.8, 10.3, 174.0); // (north)


  Restart.AddHospital(-108.3, -974.4, 9.4, 283.9); // (south)
  Restart.AddPolice(398.8, -469.7, 10.7, 323.0); // (south)


  Shortcut.SetPickupPoint(407.6, 725.3, 10.5, 177.0); //Vice point hospital
  Shortcut.SetPickupPoint(-102.6, -947.7, 9.6, 192.7); //South Beach hospital
  Shortcut.SetPickupPoint(-784.4, 1189.3, 10.2, 90.0); //Downtown hospital
  Shortcut.SetPickupPoint(-850.8, -483.9, 10.2, 189.8); //Havana hospital


  Shortcut.SetPickupPoint(492.5, 475.1, 10.6, 274.2); //Vice point Cop Shop
  Shortcut.SetPickupPoint(418.5, -422.6, 9.3, 58.7); //South Beach Cop Shop
  Shortcut.SetPickupPoint(-665.3, 793.7, 10.5, 180.0); //Downtown Cop Shop
  Shortcut.SetPickupPoint(-873.0, -641.8, 10.5, 97.1); //Havana Cop Shop

  // **************************************GLOBAL ZONES********************************************************

  // Gang1 = GANG_CUBAN
  // Gang2 = GANG_HAITIAN
  // Gang3 = GANG_STREET
  // Gang4 = GANG_DIAZ
  // Gang5 = GANG_SECURITY
  // Gang6 = GANG_BIKER
  // Gang7 = GANG_PLAYER
  // Gang8 = GANG_GOLFER
  // Gang9 = ???

  //SET_ZONE_CIVILIAN_CAR_INFO ZoneName Day/Night Normal PoorFamily RichFamily Executive Worker Big Taxis Mopeds Motorbikes Leisureboats Workerboats
  //SET_ZONE_CAR_INFO Zone Name Day/Night CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_PED_INFO	ZoneName Day/Night PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police

  // these are using old Washington values


  Zone.SetPedInfo("STREET4", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetPedInfo("STREET4", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetCarInfo("STREET4", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("STREET4", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("STREET4", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 50, 0, 500, 500);
  Zone.SetCivilianCarInfo("STREET4", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("STREET4", 1 /* DAY */, 7 /* STREET4_PEDGRP */);
  Zone.SetGroup("STREET4", 0 /* NIGHT */, 8 /* STREET4_NIGHT_PEDGRP */);


  Zone.SetPedInfo("RICH2", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("RICH2", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("RICH2", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("RICH2", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("RICH2", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 50, 0, 500, 500);
  Zone.SetCivilianCarInfo("RICH2", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("RICH2", 1 /* DAY */, 27 /* RICH2_PEDGRP */);
  Zone.SetGroup("RICH2", 0 /* NIGHT */, 28 /* RICH2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("CLUB2", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("CLUB2", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("CLUB2", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("CLUB2", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("CLUB2", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 50, 0, 500, 500);
  Zone.SetCivilianCarInfo("CLUB2", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("CLUB2", 1 /* DAY */, 57 /* CLUB2_PEDGRP */);
  Zone.SetGroup("CLUB2", 0 /* NIGHT */, 58 /* CLUB2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("SHOP3", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("SHOP3", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("SHOP3", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("SHOP3", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("SHOP3", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 50, 0, 500, 500);
  Zone.SetCivilianCarInfo("SHOP3", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("SHOP3", 1 /* DAY */, 35 /* SHOP3_PEDGRP */);
  Zone.SetGroup("SHOP3", 0 /* NIGHT */, 36 /* SHOP3_NIGHT_PEDGRP */);


  Zone.SetPedInfo("STREET3", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("STREET3", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("STREET3", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("STREET3", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("STREET3", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 50, 0, 500, 500);
  Zone.SetCivilianCarInfo("STREET3", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("STREET3", 1 /* DAY */, 5 /* STREET3_PEDGRP */);
  Zone.SetGroup("STREET3", 0 /* NIGHT */, 6 /* STREET3_NIGHT_PEDGRP */);


  Zone.SetPedInfo("SHOP2", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("SHOP2", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("SHOP2", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("SHOP2", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("SHOP2", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 50, 0, 500, 500);
  Zone.SetCivilianCarInfo("SHOP2", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("SHOP2", 1 /* DAY */, 33 /* SHOP2_PEDGRP */);
  Zone.SetGroup("SHOP2", 0 /* NIGHT */, 34 /* SHOP2_NIGHT_PEDGRP */);

  //SET_ZONE_PED_INFO	ZoneName Day/Night PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CAR_INFO Zone Name Day/Night CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CIVILIAN_CAR_INFO ZoneName Day/Night Normal PoorFamily RichFamily Executive Worker Big Taxis Mopeds Motorbikes Leisureboats Workerboats


  Zone.SetPedInfo("OCEAND1", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetPedInfo("OCEAND1", 0 /* NIGHT */, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("OCEAND1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetCarInfo("OCEAND1", 0 /* NIGHT */, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCivilianCarInfo("OCEAND1", 1 /* DAY */, 200, 0, 250, 300, 0, 0, 150, 100, 0, 500, 500);
  Zone.SetCivilianCarInfo("OCEAND1", 0 /* NIGHT */, 200, 0, 250, 350, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("OCEAND1", 1 /* DAY */, 63 /* OCEAND1_PEDGRP */);
  Zone.SetGroup("OCEAND1", 0 /* NIGHT */, 64 /* OCEAND1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("OCEAND2", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetPedInfo("OCEAND2", 0 /* NIGHT */, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("OCEAND2", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetCarInfo("OCEAND2", 0 /* NIGHT */, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCivilianCarInfo("OCEAND2", 1 /* DAY */, 200, 0, 250, 300, 0, 0, 150, 100, 0, 500, 500);
  Zone.SetCivilianCarInfo("OCEAND2", 0 /* NIGHT */, 200, 0, 250, 350, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("OCEAND2", 1 /* DAY */, 65 /* OCEAND2_PEDGRP */);
  Zone.SetGroup("OCEAND2", 0 /* NIGHT */, 66 /* OCEAND2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("BEACH1", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("BEACH1", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("BEACH1", 1 /* DAY */, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("BEACH1", 0 /* NIGHT */, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("BEACH1", 1 /* DAY */, 300, 0, 250, 300, 0, 0, 100, 50, 0, 500, 500);
  Zone.SetCivilianCarInfo("BEACH1", 0 /* NIGHT */, 300, 0, 250, 300, 0, 0, 150, 0, 0, 500, 500);
  Zone.SetGroup("BEACH1", 1 /* DAY */, 45 /* BEACH1_PEDGRP */);
  Zone.SetGroup("BEACH1", 0 /* NIGHT */, 46 /* BEACH1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("BEACH2", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("BEACH2", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("BEACH2", 1 /* DAY */, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("BEACH2", 0 /* NIGHT */, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("BEACH2", 1 /* DAY */, 260, 0, 240, 300, 0, 0, 100, 100, 0, 500, 500);
  Zone.SetCivilianCarInfo("BEACH2", 0 /* NIGHT */, 200, 0, 300, 350, 0, 0, 100, 50, 0, 500, 500);
  Zone.SetGroup("BEACH2", 1 /* DAY */, 47 /* BEACH2_PEDGRP */);
  Zone.SetGroup("BEACH2", 0 /* NIGHT */, 48 /* BEACH2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("BEACH3", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("BEACH3", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("BEACH3", 1 /* DAY */, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("BEACH3", 0 /* NIGHT */, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("BEACH3", 1 /* DAY */, 200, 0, 200, 300, 0, 0, 100, 100, 100, 500, 500);
  Zone.SetCivilianCarInfo("BEACH3", 0 /* NIGHT */, 200, 0, 300, 300, 0, 0, 100, 0, 100, 500, 500);
  Zone.SetGroup("BEACH3", 1 /* DAY */, 49 /* BEACH3_PEDGRP */);
  Zone.SetGroup("BEACH3", 0 /* NIGHT */, 50 /* BEACH3_NIGHT_PEDGRP */);


  Zone.SetPedInfo("STREET2", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("STREET2", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("STREET2", 1 /* DAY */, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("STREET2", 0 /* NIGHT */, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("STREET2", 1 /* DAY */, 325, 0, 350, 200, 0, 0, 75, 50, 0, 500, 500);
  Zone.SetCivilianCarInfo("STREET2", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 50, 0, 500, 500);
  Zone.SetGroup("STREET2", 1 /* DAY */, 3 /* STREET2_PEDGRP */);
  Zone.SetGroup("STREET2", 0 /* NIGHT */, 4 /* STREET2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("CONSTRU", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("CONSTRU", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("CONSTRU", 1 /* DAY */, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("CONSTRU", 0 /* NIGHT */, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("CONSTRU", 1 /* DAY */, 200, 200, 0, 0, 500, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("CONSTRU", 0 /* NIGHT */, 200, 200, 0, 0, 500, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("CONSTRU", 1 /* DAY */, 17 /* CONSTRUCTION_PEDGRP */);
  Zone.SetGroup("CONSTRU", 0 /* NIGHT */, 18 /* CONSTRUCTION_NIGHT_PEDGRP */);


  Zone.SetPedInfo("CLUB1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("CLUB1", 0 /* NIGHT */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("CLUB1", 1 /* DAY */, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("CLUB1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCivilianCarInfo("CLUB1", 1 /* DAY */, 170, 0, 350, 350, 0, 0, 100, 0, 30, 500, 500);
  Zone.SetCivilianCarInfo("CLUB1", 0 /* NIGHT */, 170, 0, 350, 350, 0, 0, 100, 0, 30, 500, 500);
  Zone.SetGroup("CLUB1", 1 /* DAY */, 55 /* CLUB1_PEDGRP */);
  Zone.SetGroup("CLUB1", 0 /* NIGHT */, 56 /* CLUB1_NIGHT_PEDGRP */);

  //SET_ZONE_PED_INFO	ZoneName Day/Night PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CAR_INFO Zone Name Day/Night CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CIVILIAN_CAR_INFO ZoneName Day/Night Normal PoorFamily RichFamily Executive Worker Big Taxis Mopeds Motorbikes Leisureboats Workerboats


  Zone.SetPedInfo("GOLF1", 1 /* DAY */, 3, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
  Zone.SetPedInfo("GOLF1", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
  Zone.SetCarInfo("GOLF1", 1 /* DAY */, 3, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
  Zone.SetCarInfo("GOLF1", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
  Zone.SetGroup("GOLF1", 1 /* DAY */, 41 /* GOLF1_PEDGRP */);
  Zone.SetGroup("GOLF1", 0 /* NIGHT */, 42 /* GOLF1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("GOLF2", 1 /* DAY */, 2, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
  Zone.SetPedInfo("GOLF2", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
  Zone.SetCarInfo("GOLF2", 1 /* DAY */, 2, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
  Zone.SetCarInfo("GOLF2", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
  Zone.SetGroup("GOLF2", 1 /* DAY */, 43 /* GOLF2_PEDGRP */);
  Zone.SetGroup("GOLF2", 0 /* NIGHT */, 44 /* GOLF2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("STREET1", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("STREET1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("STREET1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("STREET1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("STREET1", 1 /* DAY */, 225, 550, 100, 0, 0, 0, 75, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("STREET1", 0 /* NIGHT */, 250, 500, 100, 0, 0, 0, 100, 0, 50, 500, 500);
  Zone.SetGroup("STREET1", 1 /* DAY */, 1 /* STREET1_PEDGRP */);
  Zone.SetGroup("STREET1", 0 /* NIGHT */, 2 /* STREET1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("RICH1", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("RICH1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("RICH1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("RICH1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("RICH1", 1 /* DAY */, 100, 0, 400, 400, 0, 0, 100, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("RICH1", 0 /* NIGHT */, 100, 0, 400, 400, 0, 0, 100, 0, 0, 500, 500);
  Zone.SetGroup("RICH1", 1 /* DAY */, 25 /* RICH1_PEDGRP */);
  Zone.SetGroup("RICH1", 0 /* NIGHT */, 26 /* RICH1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("SHOP1", 1 /* DAY */, 200, 0, 0, 0, 0, 20, 0, 0, 0, 0, 30); // Big Mall
  Zone.SetPedInfo("SHOP1", 0 /* NIGHT */, 200, 0, 0, 0, 0, 20, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("SHOP1", 1 /* DAY */, 12, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("SHOP1", 0 /* NIGHT */, 9, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("SHOP1", 1 /* DAY */, 250, 250, 200, 0, 100, 0, 200, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("SHOP1", 0 /* NIGHT */, 250, 250, 200, 0, 100, 0, 200, 0, 0, 500, 500);
  Zone.SetGroup("SHOP1", 1 /* DAY */, 31 /* SHOP1_PEDGRP */);
  Zone.SetGroup("SHOP1", 0 /* NIGHT */, 32 /* SHOP1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("TOUR1", 1 /* DAY */, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetPedInfo("TOUR1", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("TOUR1", 1 /* DAY */, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("TOUR1", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCivilianCarInfo("TOUR1", 1 /* DAY */, 900, 0, 0, 0, 0, 0, 50, 0, 50, 800, 200);
  Zone.SetCivilianCarInfo("TOUR1", 0 /* NIGHT */, 900, 0, 0, 0, 0, 0, 50, 0, 50, 800, 200);
  Zone.SetGroup("TOUR1", 1 /* DAY */, 19 /* TOURIST1_PEDGRP */);
  Zone.SetGroup("TOUR1", 0 /* NIGHT */, 20 /* TOURIST1_NIGHT_PEDGRP */);

  //SET_ZONE_PED_INFO	ZoneName Day/Night PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CAR_INFO Zone Name Day/Night CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CIVILIAN_CAR_INFO ZoneName Day/Night Normal PoorFamily RichFamily Executive Worker Big Taxis Mopeds Motorbikes Leisureboats Workerboats


  Zone.SetPedInfo("TOUR2", 1 /* DAY */, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetPedInfo("TOUR2", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("TOUR2", 1 /* DAY */, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("TOUR2", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCivilianCarInfo("TOUR2", 1 /* DAY */, 900, 0, 0, 0, 0, 0, 50, 0, 50, 800, 200);
  Zone.SetCivilianCarInfo("TOUR2", 0 /* NIGHT */, 900, 0, 0, 0, 0, 0, 50, 0, 50, 800, 200);
  Zone.SetGroup("TOUR2", 1 /* DAY */, 21 /* TOURIST2_PEDGRP */);
  Zone.SetGroup("TOUR2", 0 /* NIGHT */, 22 /* TOURIST2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("AIRPORT", 1 /* DAY */, 13, 0, 0, 0, 0, 50, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("AIRPORT", 0 /* NIGHT */, 10, 0, 0, 0, 0, 50, 0, 0, 0, 0, 30);
  Gang.SetCarModel(4 /* GANG_SECURITY */, BAGGAGE);
  Zone.SetCarInfo("AIRPORT", 1 /* DAY */, 12, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("AIRPORT", 0 /* NIGHT */, 12, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("AIRPORT", 1 /* DAY */, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 900, 100);
  Zone.SetCivilianCarInfo("AIRPORT", 0 /* NIGHT */, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 900, 100);
  Zone.SetGroup("AIRPORT", 1 /* DAY */, 51 /* AIRPORT_PEDGRP */);
  Zone.SetGroup("AIRPORT", 0 /* NIGHT */, 52 /* AIRPORT_NIGHT_PEDGRP */);


  Zone.SetPedInfo("TERMINL", 1 /* DAY */, 13, 0, 0, 0, 0, 50, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("TERMINL", 0 /* NIGHT */, 8, 0, 0, 0, 0, 50, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("TERMINL", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("TERMINL", 0 /* NIGHT */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("TERMINL", 1 /* DAY */, 200, 0, 300, 300, 0, 0, 200, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("TERMINL", 0 /* NIGHT */, 200, 0, 300, 300, 0, 0, 200, 0, 0, 500, 500);
  Zone.SetGroup("TERMINL", 1 /* DAY */, 53 /* TERMINAL_PEDGRP */);
  Zone.SetGroup("TERMINL", 0 /* NIGHT */, 54 /* TERMINAL_NIGHT_PEDGRP */);


  Zone.SetPedInfo("DOCKS", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("DOCKS", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("DOCKS", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("DOCKS", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("DOCKS", 1 /* DAY */, 0, 100, 0, 0, 700, 200, 0, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("DOCKS", 0 /* NIGHT */, 0, 100, 0, 0, 700, 200, 0, 0, 0, 500, 500);
  Zone.SetGroup("DOCKS", 1 /* DAY */, 15 /* DOCKS_PEDGRP */);
  Zone.SetGroup("DOCKS", 0 /* NIGHT */, 16 /* DOCKS_NIGHT_PEDGRP */);


  Zone.SetPedInfo("STREET6", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("STREET6", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("STREET6", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("STREET6", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("STREET6", 1 /* DAY */, 200, 0, 300, 300, 0, 0, 200, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("STREET6", 0 /* NIGHT */, 200, 0, 300, 300, 0, 0, 200, 0, 0, 500, 500);
  Zone.SetGroup("STREET6", 1 /* DAY */, 23 /* STREET6_PEDGRP */);
  Zone.SetGroup("STREET6", 0 /* NIGHT */, 24 /* STREET6_NIGHT_PEDGRP */);


  Zone.SetPedInfo("STREET5", 1 /* DAY */, 4, 0, 0, 100, 0, 0, 0, 0, 0, 0, 40);
  Zone.SetPedInfo("STREET5", 0 /* NIGHT */, 5, 0, 0, 200, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("STREET5", 1 /* DAY */, 6, 0, 0, 100, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("STREET5", 0 /* NIGHT */, 6, 0, 0, 200, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("STREET5", 1 /* DAY */, 200, 700, 0, 0, 70, 0, 30, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("STREET5", 0 /* NIGHT */, 200, 700, 0, 0, 70, 0, 30, 0, 0, 500, 500);
  Zone.SetGroup("STREET5", 1 /* DAY */, 9 /* STREET5_PEDGRP */);
  Zone.SetGroup("STREET5", 0 /* NIGHT */, 10 /* STREET5_NIGHT_PEDGRP */);

  //SET_ZONE_PED_INFO	ZoneName Day/Night PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CAR_INFO Zone Name Day/Night CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CIVILIAN_CAR_INFO ZoneName Day/Night Normal PoorFamily RichFamily Executive Worker Big Taxis Mopeds Motorbikes Leisureboats Workerboats


  Zone.SetPedInfo("SHOP4", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40); //Downtown
  Zone.SetPedInfo("SHOP4", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("SHOP4", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("SHOP4", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("SHOP4", 1 /* DAY */, 300, 350, 50, 0, 100, 0, 100, 0, 100, 500, 500);
  Zone.SetCivilianCarInfo("SHOP4", 0 /* NIGHT */, 300, 350, 50, 0, 100, 0, 100, 0, 100, 500, 500);
  Zone.SetGroup("SHOP4", 1 /* DAY */, 37 /* SHOP4_PEDGRP */);
  Zone.SetGroup("SHOP4", 0 /* NIGHT */, 38 /* SHOP4_NIGHT_PEDGRP */);


  Zone.SetPedInfo("SHOP5", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40); //Downtown
  Zone.SetPedInfo("SHOP5", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("SHOP5", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("SHOP5", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("SHOP5", 1 /* DAY */, 300, 350, 50, 0, 100, 0, 100, 0, 100, 500, 500);
  Zone.SetCivilianCarInfo("SHOP5", 0 /* NIGHT */, 300, 350, 50, 0, 100, 0, 100, 0, 100, 500, 500);
  Zone.SetGroup("SHOP5", 1 /* DAY */, 39 /* SHOP5_PEDGRP */);
  Zone.SetGroup("SHOP5", 0 /* NIGHT */, 40 /* SHOP5_NIGHT_PEDGRP */);


  Zone.SetPedInfo("BUSINES", 1 /* DAY */, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40); //Downtown
  Zone.SetPedInfo("BUSINES", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetCarInfo("BUSINES", 1 /* DAY */, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("BUSINES", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("BUSINES", 1 /* DAY */, 50, 0, 350, 350, 0, 0, 100, 0, 150, 500, 500);
  Zone.SetCivilianCarInfo("BUSINES", 0 /* NIGHT */, 50, 0, 250, 250, 0, 0, 300, 0, 150, 500, 500);
  Zone.SetGroup("BUSINES", 1 /* DAY */, 11 /* BUSINESS_PEDGRP */);
  Zone.SetGroup("BUSINES", 0 /* NIGHT */, 12 /* BUSINESS_NIGHT_PEDGRP */);


  Zone.SetPedInfo("TESTT", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); //Dirt bike course
  Zone.SetPedInfo("TESTT", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("TESTT", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("TESTT", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetGroup("TESTT", 1 /* DAY */, 11 /* BUSINESS_PEDGRP */);
  Zone.SetGroup("TESTT", 0 /* NIGHT */, 12 /* BUSINESS_NIGHT_PEDGRP */);


  Zone.SetPedInfo("BIKAREA", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20); //Bikers Downtown
  Zone.SetPedInfo("BIKAREA", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("BIKAREA", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 100, 0, 0, 0, 10);
  Zone.SetCarInfo("BIKAREA", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 100, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("BIKAREA", 1 /* DAY */, 350, 300, 0, 0, 100, 0, 100, 0, 150, 500, 500);
  Zone.SetCivilianCarInfo("BIKAREA", 0 /* NIGHT */, 350, 300, 0, 0, 100, 0, 100, 0, 150, 500, 500);
  Zone.SetGroup("BIKAREA", 1 /* DAY */, 13 /* BIKER_AREA_PEDGRP */);
  Zone.SetGroup("BIKAREA", 0 /* NIGHT */, 14 /* BIKER_AREA_NIGHT_PEDGRP */);


  Zone.SetPedInfo("GANG2", 1 /* DAY */, 13, 0, 250, 0, 0, 0, 0, 0, 0, 0, 10); //Haitians
  Zone.SetPedInfo("GANG2", 0 /* NIGHT */, 10, 0, 250, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GANG2", 1 /* DAY */, 12, 0, 250, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GANG2", 0 /* NIGHT */, 10, 0, 250, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("GANG2", 1 /* DAY */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("GANG2", 0 /* NIGHT */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("GANG2", 1 /* DAY */, 59 /* GHETTO1_PEDGRP */);
  Zone.SetGroup("GANG2", 0 /* NIGHT */, 59 /* GHETTO1_PEDGRP */);


  Zone.SetPedInfo("GHETTO1", 1 /* DAY */, 13, 0, 150, 0, 0, 0, 0, 0, 0, 0, 10); //Haitians
  Zone.SetPedInfo("GHETTO1", 0 /* NIGHT */, 10, 0, 150, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO1", 1 /* DAY */, 12, 0, 150, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO1", 0 /* NIGHT */, 10, 0, 150, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("GHETTO1", 1 /* DAY */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("GHETTO1", 0 /* NIGHT */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("GHETTO1", 1 /* DAY */, 59 /* GHETTO1_PEDGRP */);
  Zone.SetGroup("GHETTO1", 0 /* NIGHT */, 60 /* GHETTO1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("GHETTO2", 1 /* DAY */, 13, 150, 0, 0, 0, 0, 0, 0, 0, 0, 10); //Cubans
  Zone.SetPedInfo("GHETTO2", 0 /* NIGHT */, 10, 150, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO2", 1 /* DAY */, 12, 200, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO2", 0 /* NIGHT */, 10, 200, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("GHETTO2", 1 /* DAY */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("GHETTO2", 0 /* NIGHT */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("GHETTO2", 1 /* DAY */, 61 /* GHETTO2_PEDGRP */);
  Zone.SetGroup("GHETTO2", 0 /* NIGHT */, 62 /* GHETTO2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("RICH3", 1 /* DAY */, 13, 0, 0, 0, 0, 50, 0, 0, 0, 0, 40); //Starfish island
  Zone.SetPedInfo("RICH3", 0 /* NIGHT */, 10, 0, 0, 0, 0, 50, 0, 0, 0, 0, 40);
  Zone.SetCarInfo("RICH3", 1 /* DAY */, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCarInfo("RICH3", 0 /* NIGHT */, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50);
  Zone.SetCivilianCarInfo("RICH3", 1 /* DAY */, 50, 0, 400, 400, 50, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("RICH3", 0 /* NIGHT */, 50, 0, 400, 400, 50, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("RICH3", 1 /* DAY */, 29 /* RICH3_PEDGRP */);
  Zone.SetGroup("RICH3", 0 /* NIGHT */, 30 /* RICH3_NIGHT_PEDGRP */);


  Zone.SetPedInfo("GANG1", 1 /* DAY */, 13, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 0); // Mansion
  Zone.SetPedInfo("GANG1", 0 /* NIGHT */, 13, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("GANG1", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("GANG1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCivilianCarInfo("GANG1", 1 /* DAY */, 50, 0, 400, 400, 50, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("GANG1", 0 /* NIGHT */, 50, 0, 400, 400, 50, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("GANG1", 1 /* DAY */, 59 /* GHETTO1_PEDGRP */);
  Zone.SetGroup("GANG1", 0 /* NIGHT */, 60 /* GHETTO1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("Baggag", 1 /* DAY */, 5, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0); // Airport
  Zone.SetPedInfo("Baggag", 0 /* NIGHT */, 5, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("Baggag", 1 /* DAY */, 3, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("Baggag", 0 /* NIGHT */, 3, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0);
  //SET_ZONE_CIVILIAN_CAR_INFO TERMINL DAY   50 0 400 400 50 0 50 0 50 500 500
  //SET_ZONE_CIVILIAN_CAR_INFO TERMINL NIGHT 50 0 400 400 50 0 50 0 50 500 500

  Zone.SetGroup("TERMINL", 1 /* DAY */, 59 /* GHETTO1_PEDGRP */);
  Zone.SetGroup("TERMINL", 0 /* NIGHT */, 60 /* GHETTO1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("ICCREAM", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetPedInfo("ICCREAM", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("ICCREAM", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("ICCREAM", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("ICCREAM", 1 /* DAY */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("ICCREAM", 0 /* NIGHT */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("ICCREAM", 1 /* DAY */, 61 /* GHETTO2_PEDGRP */);
  Zone.SetGroup("ICCREAM", 0 /* NIGHT */, 62 /* GHETTO2_NIGHT_PEDGRP */);


  Zone.SetPedInfo("BOATYRD", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("BOATYRD", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("BOATYRD", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("BOATYRD", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("BOATYRD", 1 /* DAY */, 0, 100, 0, 0, 700, 200, 0, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("BOATYRD", 0 /* NIGHT */, 0, 100, 0, 0, 700, 200, 0, 0, 0, 500, 500);
  Zone.SetGroup("BOATYRD", 1 /* DAY */, 15 /* DOCKS_PEDGRP */);
  Zone.SetGroup("BOATYRD", 0 /* NIGHT */, 16 /* DOCKS_NIGHT_PEDGRP */);


  Zone.SetPedInfo("KAUFCAB", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetPedInfo("KAUFCAB", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("KAUFCAB", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("KAUFCAB", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("KAUFCAB", 1 /* DAY */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("KAUFCAB", 0 /* NIGHT */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("KAUFCAB", 1 /* DAY */, 59 /* GHETTO1_PEDGRP */);
  Zone.SetGroup("KAUFCAB", 0 /* NIGHT */, 59 /* GHETTO1_PEDGRP */);


  Zone.SetPedInfo("PRINTWK", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetPedInfo("PRINTWK", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("PRINTWK", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("PRINTWK", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("PRINTWK", 1 /* DAY */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("PRINTWK", 0 /* NIGHT */, 200, 600, 0, 0, 100, 0, 50, 0, 50, 500, 500);
  Zone.SetGroup("PRINTWK", 1 /* DAY */, 59 /* GHETTO1_PEDGRP */);
  Zone.SetGroup("PRINTWK", 0 /* NIGHT */, 60 /* GHETTO1_NIGHT_PEDGRP */);


  Zone.SetPedInfo("CARYRD", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("CARYRD", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("CARYRD", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("CARYRD", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCivilianCarInfo("CARYRD", 1 /* DAY */, 200, 0, 300, 300, 0, 0, 200, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("CARYRD", 0 /* NIGHT */, 200, 0, 300, 300, 0, 0, 200, 0, 0, 500, 500);
  Zone.SetGroup("CARYRD", 1 /* DAY */, 23 /* STREET6_PEDGRP */);
  Zone.SetGroup("CARYRD", 0 /* NIGHT */, 24 /* STREET6_NIGHT_PEDGRP */);


  Zone.SetPedInfo("PORNSTU", 1 /* DAY */, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("PORNSTU", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("PORNSTU", 1 /* DAY */, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("PORNSTU", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCivilianCarInfo("PORNSTU", 1 /* DAY */, 200, 700, 0, 0, 70, 0, 30, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("PORNSTU", 0 /* NIGHT */, 200, 700, 0, 0, 70, 0, 30, 0, 0, 500, 500);
  Zone.SetGroup("PORNSTU", 1 /* DAY */, 9 /* STREET5_PEDGRP */);
  Zone.SetGroup("PORNSTU", 0 /* NIGHT */, 10 /* STREET5_NIGHT_PEDGRP */);


  Zone.SetPedInfo("ARMYBAS", 1 /* DAY */, 18, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("ARMYBAS", 0 /* NIGHT */, 18, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("ARMYBAS", 1 /* DAY */, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("ARMYBAS", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetGroup("ARMYBAS", 1 /* DAY */, 51 /* AIRPORT_PEDGRP */);
  Zone.SetGroup("ARMYBAS", 0 /* NIGHT */, 52 /* AIRPORT_NIGHT_PEDGRP */);

  /*
  SET_ZONE_PED_INFO STREET2 DAY   (14) 0 0 0 0 0 0 0 0 0 20
  SET_ZONE_PED_INFO STREET2 NIGHT (16) 0 0 0 0 0 0 0 0 0 10
  SET_ZONE_CAR_INFO STREET2 DAY   (13) 0 0 0 0 0 0 0 0 0 10
  SET_ZONE_CAR_INFO STREET2 NIGHT (10) 0 0 0 0 0 0 0 0 0 10
  SET_ZONE_CIVILIAN_CAR_INFO STREET2 DAY   325 0 350 200 0 0 75 0 50 500 500
  SET_ZONE_CIVILIAN_CAR_INFO STREET2 NIGHT 250 0 300 250 0 0 150 0 50 500 500
  SET_ZONE_GROUP STREET2 DAY STREET2_PEDGRP
  SET_ZONE_GROUP STREET2 NIGHT STREET2_NIGHT_PEDGRP
  */
  //SET_ZONE_PED_INFO	ZoneName Day/Night PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CAR_INFO Zone Name Day/Night CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Gang8 Gang9 Police
  //SET_ZONE_CIVILIAN_CAR_INFO ZoneName Day/Night Normal PoorFamily RichFamily Executive Worker Big Taxis Mopeds Motorbikes Leisureboats Workerboats

  // ****************************VICECITY SWITCHED OFF ROAD AND PED NODES*********************

  // ped nodes

  //SWITCH_PED_ROADS_OFF -665.92 -1051.05 2.0 -694.58 -1481.50 50.0 // Counterfeiting boat
  //SWITCH_PED_ROADS_OFF -1351.75 210.05 5.0 -1233.96 0.31 30.0 // Scrap Yard
  //SWITCH_PED_ROADS_OFF -761.90 1193.19 6.0 -671.44 1311.88 40.0 // Compound behind Ammunation for Bike3

  Path.SwitchPedRoadsOff(-956.0, -355.0, 5.0, -898.0, -328.0, 25.0); // El Banco Corrupto Grande
  Path.SwitchPedRoadsOff(411.0, -600.0, -10.0, 451.0, -553.0, 30.0); //Ocean drive back alleyway (Middle)
  Path.SwitchPedRoadsOff(450.0, -509.0, -10.0, 472.0, -489.0, 30.0); //Ocean drive back alleyway (North)
  Path.SwitchPedRoadsOff(355.0, -773.0, -10.0, 324.0, -808.0, 30.0); //Ocean drive back alleyway (South)
  Path.SwitchPedRoadsOff(371.0, -503.0, -10.0, 403.0, -490.0, 30.0); //Cop shop (South beach)
  Path.SwitchPedRoadsOff(357.0, -506.0, -10.0, 384.0, -475.0, 30.0); //Cop shop (South beach)
  Path.SwitchPedRoadsOff(363.0, -476.0, -10.0, 378.0, -468.0, 30.0); //Cop shop (South beach)
  Path.SwitchPedRoadsOff(383.0, -488.0, -10.0, 398.3, -470.5, 30.0); //Cop shop (South beach)
  Path.SwitchPedRoadsOff(376.66, -453.85, -10.00, 328.91, -504.02, 30.0); //Cop Shop (Used in bank1)
  Path.SwitchPedRoadsOff(-395.0, -579.0, 19.0, -338.0, -560.0, 30.0); // Diaz Mansion
  Path.SwitchPedRoadsOff(-671.71, 1236.53, 20.0, -667.16, 1231.51, 25.0); // Roof of Bike3 mission
  Path.SwitchPedRoadsOff(-733.84, 1255.72, 8.0, -728.34, 1259.73, 20.0); // inside Bike3 compound
  Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // BIG MALL
  Path.SwitchPedRoadsOff(236.0, -1281.5, 0.0, 232.3, -1267.6, 32.0); // Front of Hotel
  Path.SwitchPedRoadsOff(-395.6, -658.6, 0.0, -363.2, -636.7, 32.0); // Back of mansion
  Path.SwitchPedRoadsOff(-237.8, -1387.1, 0.0, -228.7, -1331.8, 32.0); // Next to Colonels boat

  //SWITCH_PED_ROADS_OFF -614.6 -1518.0 0.0 -579.5 -1479.1 30.0 //  Boat house
  //SWITCH_PED_ROADS_OFF -664.3 -1498.8 0.0 -620.0 -1469.4 30.0 //  Boat house

  Path.SwitchPedRoadsOff(-692.193, -1522.901, 0.0, -575.311, -1453.378, 30.0); //BOAT YARD
  Path.SwitchPedRoadsOff(-896.098, -593.101, 0.0, -855.09, -548.64, 30.0); //ICECREAM
  Path.SwitchPedRoadsOff(-1031.494, -902.312, 0.0, -949.479, -821.592, 30.0); //CAR YARD
  Path.SwitchPedRoadsOff(-1176.038, -266.898, 0.0, -1012.796, -158.26, 30.0); //PRINTWORKS
  Path.SwitchPedRoadsOff(-112.495, 920.349, 0.0, 9.705, 1025.694, 30.0); //PORNSTUDIO
  Path.SwitchPedRoadsOff(-1012.06, 181.561, 0.0, -982.06, 216.561, 30.0); //TAXIFIRM


  Path.SwitchPedRoadsOff(-787.8, -519.4, 10.0, -657.5, -475.2, 20.0); // Star Island gates mainland
  Path.SwitchPedRoadsOff(-230.0, -464.5, 10.0, 56.85, -459.8, 20.0); // Star Island gates ocean beach
  Path.SwitchPedRoadsOff(-99.8, 1041.9, 0.0, -129.0, 1097.4, 30.0); //  porn island road block
  Path.SwitchPedRoadsOff(-214.6, -948.8, 0.0, -258.7, -920.6, 30.0); //  South road block
  Path.SwitchPedRoadsOff(189.8, 230.3, 0.0, 248.0, 258.5, 30.0); //  Golf course road block
  Path.SwitchPedRoadsOff(-38.0, 84.3, 0.0, -102.3, 95.1, 30.0); //  Golf course road block
  Path.SwitchPedRoadsOff(-396.4, -583.6, 15.0, -360.5, -555.6, 33.0); //  Mansion main hall
  Path.SwitchPedRoadsOff(468.0, -77.0, 0.0, 490.0, -54.0, 30.0); // MALIBU
  Path.SwitchPedRoadsOff(354.9, -483.1, 21.0, 406.0, -490.0, 0.0); // POLICE STATION
  // car nodes


  Path.SwitchRoadsOff(-583.92, 1371.84, 8.0, -383.40, 1531.17, 25.0); // Dirtbike track
  //SWITCH_ROADS_OFF -693.19 1169.85 8.0 -658.35 754.23 15.0 // alleyway infront of AnnuNation for Bike2

  Path.SwitchRoadsOff(86.0, 250.0, 15.0, -100.0, 281.0, 30.0); // entrance to golf club
  Path.SwitchRoadsOff(411.0, -600.0, -10.0, 451.0, -553.0, 30.0); //Ocean drive back alleyway (Middle)
  Path.SwitchRoadsOff(450.0, -509.0, -10.0, 472.0, -489.0, 30.0); //Ocean drive back alleyway (North)
  Path.SwitchRoadsOff(355.0, -773.0, -10.0, 324.0, -808.0, 30.0); //Ocean drive back alleyway (South)
  Path.SwitchRoadsOff(259.0, -941.0, -10.0, 284.0, -925.0, 30.0); //Ocean drive back alleyway (South South)
  Path.SwitchRoadsOff(-1102.0, 76.0, -10.0, -1126.0, 58.9, .0, 30.0); //Haitian Base
  Path.SwitchRoadsOff(-787.8, -519.4, 10.0, -657.5, -475.2, 20.0); // Star Island gates	mainland
  Path.SwitchRoadsOff(-230.0, -464.5, 10.0, 165.85, -459.8, 20.0); // Star Island gates ocean beach
  Path.SwitchRoadsOff(-99.8, 1041.9, 0.0, -129.0, 1097.4, 30.0); // porn island road block
  Path.SwitchRoadsOff(-214.6, -948.8, 0.0, -258.7, -920.6, 30.0); //  South road block
  Path.SwitchRoadsOff(189.8, 230.3, 0.0, 248.0, 258.5, 30.0); //  Golf course road block
  Path.SwitchRoadsOff(-38.0, 84.3, 0.0, -102.3, 95.1, 30.0); //  Golf course road block
  Path.SwitchRoadsOff(175.0, 236.1, 0.0, 161.0, 242.4, 30.0); //  Golf course road block
  Path.SwitchRoadsOff(149.8, 231.4, 0.0, 136.0, 235.3, 30.0); //  Golf course road block
  Path.SwitchRoadsOff(63.4, 188.6, 0.0, 49.4, 189.7, 30.0); //  Golf course road block



  //MARK_ROADS_BETWEEN_LEVELS 496.7 75.5 -30.0 484.0 44.2 0.0


  // ***************************************** GANGS*******************************************


  Gang.SetCarModel(0 /* GANG_CUBAN */, cuban);
  Gang.SetCarModel(1 /* GANG_HAITIAN */, voodoo);
  Gang.SetCarModel(2 /* GANG_STREET */, gangbur);
  Gang.SetCarModel(5 /* GANG_BIKER */, angel);


  Gang.SetAttackPlayerWithCops(4 /* GANG_SECURITY */, true /* TRUE */);
  Gang.SetWeapons(0 /* GANG_CUBAN */, 17 /* WEAPONTYPE_PISTOL */, 0 /* WEAPONTYPE_UNARMED */);
  Gang.SetWeapons(1 /* GANG_HAITIAN */, 17 /* WEAPONTYPE_PISTOL */, 0 /* WEAPONTYPE_UNARMED */);
  Gang.SetWeapons(2 /* GANG_STREET */, 17 /* WEAPONTYPE_PISTOL */, 0 /* WEAPONTYPE_UNARMED */);
  Gang.SetWeapons(3 /* GANG_DIAZ */, 17 /* WEAPONTYPE_PISTOL */, 17 /* WEAPONTYPE_PISTOL */);
  Gang.SetWeapons(4 /* GANG_SECURITY */, 17 /* WEAPONTYPE_PISTOL */, 17 /* WEAPONTYPE_PISTOL */);
  Gang.SetWeapons(5 /* GANG_BIKER */, 17 /* WEAPONTYPE_PISTOL */, 0 /* WEAPONTYPE_UNARMED */);
  Gang.SetWeapons(6 /* GANG_PLAYER */, 17 /* WEAPONTYPE_PISTOL */, 17 /* WEAPONTYPE_PISTOL */);

  //SET_THREAT_FOR_PED_TYPE PEDTYPE_GANG_COLOMBIAN THREAT_PLAYER1


  Game.SetThreatForPedType(7 /* PEDTYPE_GANG_CUBAN */, 256 /* THREAT_GANG_HAITIAN */);
  Game.SetThreatForPedType(8 /* PEDTYPE_GANG_HAITIAN */, 128 /* THREAT_GANG_CUBAN */);

  //SET_GANG_PLAYER_ATTITUDE GANG_PLAYER LOVES Player1




  // ****************************************OBJECTS***********************************************

  // ***************************BRIDGE BLOCKS***********************************

  //STARFISH GATES


  // VAR_INT strike_gate star_gate_1 star_gate_2


  $.star_gate_1 = ScriptObject.CreateNoOffset(comgate1closed, -715.082, -489.689, 12.549);
  $.star_gate_1.dontRemove();
  $.star_gate_2 = ScriptObject.CreateNoOffset(comgate2closed, -181.451, -472.61, 11.353);
  $.star_gate_2.setHeading(102.0);
  $.star_gate_2.dontRemove();

  //PORN STUDIO ROADBLOCK

  // VAR_INT porn_roadblock


  $.porn_roadblock = ScriptObject.CreateNoOffset(nt_roadblockCI, -97.3, 1061.8, 11.6);
  $.porn_roadblock.dontRemove();

  //GOLF COURSE ROADBLOCK

  // VAR_INT golf_roadblock


  $.golf_roadblock = ScriptObject.CreateNoOffset(nt_roadblockGF, -81.46, 81.358, 21.04);
  //SET_OBJECT_HEADING golf_roadblock 35.0

  $.golf_roadblock.dontRemove();

  //GOLF COURSE GATES
  /*VAR_INT golf_gates_closed

  CREATE_OBJECT_NO_OFFSET golf_gatesclosed 107.671 -227.729 20.634 golf_gates_closed
  DONT_REMOVE_OBJECT golf_gates_closed
  */

  //SOUTH ROADBLOCK

  // VAR_INT south_roadblock pier_closed taxi_closed boat_closed
  // VAR_INT mansion_doors mansion_closed mansion_open


  $.south_roadblock = ScriptObject.CreateNoOffset(wsh_roadblock, -242.671, -935.667, 16.198);
  $.south_roadblock.dontRemove();


  $.mansion_doors = ScriptObject.CreateNoOffset(mansion_new_doors, -391.19, -575.906, 24.071);
  $.mansion_doors.dontRemove();


  $.mansion_closed = ScriptObject.CreateNoOffset(man_doorclosed, -378.542, -554.006, 20.067);
  $.mansion_closed.dontRemove();


  $.pier_closed = ScriptObject.CreateNoOffset(wshperdrclsd, -266.496, -1214.563, 9.02);
  $.pier_closed.dontRemove();


  $.taxi_closed = ScriptObject.CreateNoOffset(haitaxidr, -1010.466, 199.125, 11.95);
  $.taxi_closed.dontRemove();


  $.boat_closed = ScriptObject.CreateNoOffset(b_hse_doors, -640.012, -1485.941, 15.457);
  $.boat_closed.dontRemove();


  $.strip_doors = ScriptObject.CreateNoOffset(stripclbdrclsd, 97.203, -1469.731, 10.578);
  $.strip_doors.dontRemove();



  // VAR_INT strip_door_poledance
  $.strip_door_poledance = ScriptObject.CreateNoOffset(strpbckdrclsd, 68.988, -1444.242, 10.727);
  $.strip_door_poledance.dontRemove();

  // ***************************************************************************

  //drugs factory gate

  // VAR_INT haitian_gate


  $.haitian_gate = ScriptObject.CreateNoOffset(electricgate, -1114.1, 67.0, 10.1);
  $.haitian_gate.setHeading(90.0);
  $.haitian_gate.dontRemove();

  //cabmagedon_gate

  // VAR_INT cabmagedon_gate


  $.strike_gate = ScriptObject.CreateNoOffset(electricgate, 298.0, -313.6, 11.0);
  //SET_OBJECT_HEADING strike_gate 180.0

  $.strike_gate.dontRemove();


  $.cabmagedon_gate = ScriptObject.CreateNoOffset(electricgate, -989.9, -1252.2, 10.4);
  $.cabmagedon_gate.setHeading(249.0);
  $.cabmagedon_gate.dontRemove();


  // Cam Jones Door for Bank Van Robbing

  // VAR_INT cams_door
  $.cams_door = ScriptObject.CreateNoOffset(dk_camjonesdoor, -837.134, -901.672, 12.03);
  $.cams_door.dontRemove();
  $.cams_door.setHeading(0.0);


  //varint for property stuff - andy

  // VAR_INT skumole_bought Hyman_condo_bought washington_1102_bought vice_point_3321_bought Elswanko_bought links_view_bought ocean_heights_bought

  //LIFT DOORS - G-SPOTLIGHT

  // VAR_INT left_bottom
  $.left_bottom = ScriptObject.CreateNoOffset(dts_gs_liftdoorL, -559.476, 783.107, 23.279);
  $.left_bottom.dontRemove();


  // VAR_INT right_bottom
  $.right_bottom = ScriptObject.CreateNoOffset(dts_gs_liftdoorR, -559.476, 781.34, 23.279);
  $.right_bottom.dontRemove();


  // VAR_INT left_top
  $.left_top = ScriptObject.CreateNoOffset(dts_gs_liftdoorL, -553.563, 788.895, 97.917);
  $.left_top.dontRemove();


  // VAR_INT right_top
  $.right_top = ScriptObject.CreateNoOffset(dts_gs_liftdoorR, -553.563, 787.127, 97.917);
  $.right_top.dontRemove();

  //G-spotlight

  // VAR_INT spotlight
  $.spotlight = ScriptObject.CreateNoOffset(dts_spot_a, -354.531, 989.975, 45.8);
  $.spotlight.rotate(160.0, 160.0, false /* FALSE */);
  $.spotlight.dontRemove();


  // VAR_INT spotlight_shining_to_sea
  $.spotlight_shining_to_sea = ScriptObject.CreateNoOffset(dts_soapytitwank_a, -324.797, 991.184, 71.708);
  $.spotlight_shining_to_sea.dontRemove();


  // VAR_INT gspot_stairs
  $.gspot_stairs = ScriptObject.CreateNoOffset(dt_gspot_stairs, -573.897, 1374.25, 15.657);
  $.gspot_stairs.dontRemove();
  //ROTATE_OBJECT gspot_stairs 140.0 140.0 FALSE


  // VAR_INT gspot_stairs2
  $.gspot_stairs2 = ScriptObject.CreateNoOffset(dt_gspot_stairs, -367.067, 913.038, 16.058);
  $.gspot_stairs2.dontRemove();
  $.gspot_stairs2.rotate(157.0, 157.0, false /* FALSE */);




  //Police cell door for Cam jones

  // VAR_INT cams_celldoor
  $.cams_celldoor = ScriptObject.CreateNoOffset(od_celldoor02, 384.098, -505.893, 9.68);
  $.cams_celldoor.setAreaVisible(12 /* VIS_POLICE_STATION */);
  $.cams_celldoor.dontRemove();
  $.cams_celldoor.setHeading(0.0);


  //jetty door at porn island

  // VAR_INT jetty_door_open
  // VAR_INT jetty_door_closed
  $.jetty_door_closed = ScriptObject.CreateNoOffset(ci_jetygatesclosed, -116.738, 1027.729, 11.34);
  $.jetty_door_closed.dontRemove();

  //COUNTERFEIT 2 DOORS

  // VAR_INT cnt2_left_door cnt2_right_door


  $.cnt2_left_door = ScriptObject.CreateNoOffset(nhaitplatdr, -981.114, 265.419, 8.939);
  $.cnt2_left_door.dontRemove();


  $.cnt2_right_door = ScriptObject.CreateNoOffset(nhaitplatdrr, -981.114, 267.607, 8.937);
  $.cnt2_right_door.dontRemove();

  //sex pad doors
  //Top doors

  // VAR_INT top_sexpad_doors
  $.top_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed1, 465.375, 30.336, 33.181);
  $.top_sexpad_doors.dontRemove();

  //Middle doors

  // VAR_INT middle_sexpad_doors
  $.middle_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed2, 465.375, 30.336, 33.181);
  $.middle_sexpad_doors.dontRemove();

  //Bottom doors

  // VAR_INT bottom_sexpad_doors
  $.bottom_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed3, 464.663, 30.336, 23.881);
  $.bottom_sexpad_doors.dontRemove();

  //photobuilding (across from sex pad)

  // VAR_INT photobuilding_closed
  $.photobuilding_closed = ScriptObject.CreateNoOffset(ph_build_dr_closed, 569.925, 52.00, 14.616);
  $.photobuilding_closed.dontRemove();
  $.photobuilding_closed.rotate(270.0, 270.0, false /* FALSE */);


  //VAR_INT import_export_sign1	import_export_sign2 import_export_sign3 import_export_sign4
  //CREATE_OBJECT_NO_OFFSET lh_imp_exp01 -981.754 -841.278 8.586 import_export_sign1
  //DONT_REMOVE_OBJECT import_export_sign1

  //Assasin 5 - Loose Ends gate near back of ice cream factory

  // VAR_INT ice_gate
  $.ice_gate = ScriptObject.CreateNoOffset(electricgate, -973.664, -519.65, 10.092);
  $.ice_gate.setHeading(98.5);
  $.ice_gate.dontRemove();

  //icecream factory door

  // VAR_INT ice_door
  $.ice_door = ScriptObject.CreateNoOffset(icedoor, -866.689, -572.095, 12.173);
  $.ice_door.dontRemove();

  //biker door

  // VAR_INT biker_door
  $.biker_door = ScriptObject.CreateNoOffset(dts_bbdoor, -598.017, 651.207, 12.025);
  $.biker_door.dontRemove();


  // VAR_INT golf_gates
  $.golf_gates = ScriptObject.CreateNoOffset(golf_gatesclosed, 107.671, 227.729, 20.634);
  $.golf_gates.dontRemove();

  // Printworks door

  // VAR_INT printworks_door
  $.printworks_door = ScriptObject.CreateNoOffset(printdooor, -1063.773, -278.932, 13.024);
  $.printworks_door.dontRemove();

  //Bank windows

  // VAR_INT bank_windows
  $.bank_windows = ScriptObject.CreateNoOffset(unrocketed_win1, -899.851, -341.061, 14.318);
  $.bank_windows.setAreaVisible(3 /* VIS_BANK */);
  $.bank_windows.dontRemove();

  //Bank Grills

  // VAR_INT grill_1 grill_2 grill_3 grill_4 grill_5 grill_6
  $.grill_1 = ScriptObject.CreateNoOffset(Bnk_grill01, -899.214, -333.656, 21.233);
  $.grill_1.setAreaVisible(3 /* VIS_BANK */);
  $.grill_1.setCollision(false /* FALSE */);
  $.grill_1.setDynamic(false /* FALSE */);
  $.grill_1.dontRemove();


  $.grill_2 = ScriptObject.CreateNoOffset(Bnk_grill01, -899.214, -348.466, 21.233);
  $.grill_2.setAreaVisible(3 /* VIS_BANK */);
  $.grill_2.setCollision(false /* FALSE */);
  $.grill_2.setDynamic(false /* FALSE */);
  $.grill_2.dontRemove();


  $.grill_3 = ScriptObject.CreateNoOffset(Bnk_grill01, -907.307, -336.618, 23.987);
  $.grill_3.setAreaVisible(3 /* VIS_BANK */);
  $.grill_3.setCollision(false /* FALSE */);
  $.grill_3.setDynamic(false /* FALSE */);
  $.grill_3.dontRemove();


  $.grill_4 = ScriptObject.CreateNoOffset(Bnk_grill01, -907.307, -345.504, 23.987);
  $.grill_4.setAreaVisible(3 /* VIS_BANK */);
  $.grill_4.setCollision(false /* FALSE */);
  $.grill_4.setDynamic(false /* FALSE */);
  $.grill_4.dontRemove();


  $.grill_5 = ScriptObject.CreateNoOffset(Bnk_grill01, -915.401, -336.6184, 23.987);
  $.grill_5.setAreaVisible(3 /* VIS_BANK */);
  $.grill_5.setCollision(false /* FALSE */);
  $.grill_5.setDynamic(false /* FALSE */);
  $.grill_5.dontRemove();


  $.grill_6 = ScriptObject.CreateNoOffset(Bnk_grill01, -915.401, -345.50, 23.987);
  $.grill_6.setAreaVisible(3 /* VIS_BANK */);
  $.grill_6.setCollision(false /* FALSE */);
  $.grill_6.setDynamic(false /* FALSE */);
  $.grill_6.dontRemove();



  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // *************************************VICE BEACH CAR GENERATORS***************************

  // VAR_INT gen_car1 gen_car2 gen_car3 gen_car4 gen_car5 gen_car6 gen_car7 gen_car8 gen_car9 gen_car10
  // VAR_INT gen_car11 gen_car12 gen_car13 gen_car14 gen_car15 gen_car16 gen_car17 gen_car18 gen_car19 gen_car20
  // VAR_INT gen_car21 gen_car22 gen_car23 gen_car24 gen_car25 gen_car26 gen_car27 gen_car28 gen_car29 gen_car30
  // VAR_INT gen_car31 gen_car32 gen_car33 gen_car34 gen_car35 gen_car36 gen_car37 gen_car38 gen_car39 gen_car40
  // VAR_INT gen_car41 gen_car42 gen_car43 gen_car44 gen_car45 gen_car46 gen_car47 gen_car48 gen_car49 gen_car50
  // VAR_INT gen_car51 gen_car52 gen_car53 gen_car54 gen_car55 gen_car56 gen_car57 gen_car58 gen_car59 gen_car60
  // VAR_INT gen_car61 gen_car62 gen_car63 gen_car64 gen_car65 gen_car66 gen_car67 gen_car68 gen_car69 gen_car70
  // VAR_INT gen_car71 gen_car72 gen_car73 gen_car74 gen_car75 gen_car76 gen_car77 gen_car78 gen_car79 gen_car80
  // VAR_INT gen_car81 gen_car82 gen_car83 gen_car84 gen_car85 gen_car86 gen_car87 gen_car88 gen_car89 gen_car90
  // VAR_INT gen_car91 gen_car92 gen_car93 gen_car94 gen_car95 gen_car96 gen_car97 gen_car98 gen_car99 gen_car100
  // VAR_INT gen_car101 gen_car102 gen_car103 gen_car104 gen_car105 gen_car106 gen_car107 gen_car108 gen_car109 gen_car110
  // VAR_INT gen_car111 gen_car112 gen_car113 gen_car114 gen_car115 gen_car116 gen_car117 gen_car118 gen_car119 gen_car120
  // VAR_INT gen_car121 gen_car122 gen_car123 gen_car124 gen_car125 gen_car126 gen_car127 gen_car128 gen_car129 gen_car130
  // VAR_INT gen_car131 gen_car132 gen_car133 gen_car134 gen_car135 gen_car136 gen_car137 gen_car138 gen_car139 gen_car140
  // VAR_INT gen_car141 gen_car142 gen_car143 gen_car144 gen_car145 gen_car146 gen_car147 gen_car148 gen_car149 gen_car150
  // VAR_INT gen_car151 gen_car152 gen_car153 gen_car154 gen_car155 gen_car156 gen_car157 gen_car158 gen_car159 gen_car160
  // VAR_INT gen_car161 gen_car162 gen_car163 gen_car164

  //CREATE_CAR_GENERATOR Remap1 Remap2 ParkedFlag ChanceOfCarAlarm ChanceOfLocked MinDelay MaxDelay CarGenID


  $.gen_car163 = CarGenerator.Create(-401.2715, -534.6655, 11.7534, 149.2032, ADMIRAL, 8 /* CARCOLOUR_LIGHTBLUEGREY */, 8 /* CARCOLOUR_LIGHTBLUEGREY */, false, 50, 0, 0, 10000); //mansion
  $.gen_car163.switch(101);


  $.gen_car162 = CarGenerator.Create(-870.4673, -717.2427, 10.1069, 94.1213, VICECHEE, -1, -1, false, 0, 0, 0, 10000); //little haiti cop shop
  $.gen_car162.switch(101);


  $.gen_car161 = CarGenerator.Create(-865.2949, 1158.3594, 9.8204, 2.3470, LOVEFIST, -1, -1, false, 0, 0, 0, 10000); //outside recording studio
  $.gen_car161.switch(0);


  $.gen_car160 = CarGenerator.Create(-1034.8889, -1452.7750, 10.7000, 248.8739, FLATBED, -1, -1, false, 0, 0, 0, 10000); //south west corner of docks
  $.gen_car160.switch(101);


  $.gen_car15 = CarGenerator.Create(403.0317, -178.5811, 5.7, 350.0462, DINGHY, -1, -1, false, 0, 0, 0, 10000); //near malibu
  $.gen_car15.switch(0);


  $.gen_car38 = CarGenerator.Create(231.0536, -130.1794, 5.7, 357.5423, DINGHY, -1, -1, false, 0, 0, 0, 10000); //east from malibu
  $.gen_car38.switch(0);



  $.gen_car164 = CarGenerator.Create(-853.6609, 1353.7854, 68.6104, 0.0, MAVERICK, -1, -1, false, 0, 0, 0, 10000); //human condo
  $.gen_car164.switch(101);


  $.gen_car13 = CarGenerator.Create(-69.2982, 72.6166, 5.7, 104.6175, PREDATOR, -1, -1, false, 0, 0, 0, 10000); //under golf course bridge
  $.gen_car13.switch(0);


  $.gen_car14 = CarGenerator.Create(237.4778, 302.2366, 5.7, 86.2011, TROPIC, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car14.switch(0);


  $.gen_car16 = CarGenerator.Create(-1268.2502, 83.8330, 10.4182, 179.5490, TRASH, -1, -1, false, 0, 0, 0, 10000); //in junkyard
  $.gen_car16.switch(101);


  $.gen_car23 = CarGenerator.Create(-870.2545, -353.9059, 10.0475, 357.8359, SECURICA, -1, -1, false, 0, 70, 0, 10000); //outside the bank
  $.gen_car23.switch(101);


  $.gen_car39 = CarGenerator.Create(-1184.3601, -1312.6200, 13.7274, 64.6821, BUS, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car39.switch(101);


  $.gen_car40 = CarGenerator.Create(-1709.0242, -287.6807, 13.8276, 0.0000, BARRACKS, -1, -1, false, 0, 10, 0, 10000); //army base
  $.gen_car40.switch(101);


  $.gen_car47 = CarGenerator.Create(-1742.6489, -214.2183, 13.8276, 102.0596, BARRACKS, -1, -1, false, 0, 30, 0, 10000); //army base
  $.gen_car47.switch(101);


  $.gen_car124 = CarGenerator.Create(-1701.3724, -234.7718, 13.8276, 87.8929, PATRIOT, 43 /* CARCOLOUR_GREEN4 */, 72 /* CARCOLOUR_GREY3 */, false, 0, 0, 0, 10000); //army base
  $.gen_car124.switch(101);



  // VAR_INT carshowroom_cargen
  $.carshowroom_cargen = CarGenerator.Create(-1033.2114, -856.8564, 12.0452, 210.2780, SENTINEL, -1, -1, false, 0, 0, 0, 10000); //CARSHOWROOM CARGEN
  $.carshowroom_cargen.switch(101);

  //STADIUM AFTER COMPLETING BLOODRING


  $.gen_car125 = CarGenerator.Create(-1131.4, 1236.6, 8.4, 241.0, BLOODRB, -1, -1, true /* TRUE */, 0, 0, 0, 10000); //right of stadium
  $.gen_car125.switch(0);


  $.gen_car126 = CarGenerator.Create(-1115.4, 1265.1, 8.4, 238.0, BLOODRA, -1, -1, true /* TRUE */, 0, 0, 0, 10000); //right of stadium
  $.gen_car126.switch(0);



  //HELI CHECKPOINT CAR GENS

  // VAR_INT heli1_cargen heli2_cargen heli3_cargen heli4_cargen


  $.heli1_cargen = CarGenerator.Create($.heli1X, $.heli1Y, $.heli1Z, 88.2256, SPARROW, -1, -1, false, 0, 0, 0, 10000); //HELI ODDJOB
  $.heli1_cargen.switch(0);


  $.heli2_cargen = CarGenerator.Create($.heli2X, $.heli2Y, $.heli2Z, 0.0, SPARROW, -1, -1, false, 0, 0, 0, 10000); //HELI ODDJOB
  $.heli2_cargen.switch(0);


  $.heli3_cargen = CarGenerator.Create($.heli3X, $.heli3Y, $.heli3Z, 0.0, SPARROW, -1, -1, false, 0, 0, 0, 10000); //HELI ODDJOB
  $.heli3_cargen.switch(0);


  $.heli4_cargen = CarGenerator.Create($.heli4X, $.heli4Y, $.heli4Z, 180.0, SPARROW, -1, -1, false, 0, 0, 0, 10000); //HELI ODDJOB
  $.heli4_cargen.switch(0);


  //OCEAN BEACH

  $.gen_car3 = CarGenerator.Create(242.6, -1274.6, 10.0, 165.0, OCEANIC, 6 /* CARCOLOUR_TAXIYELLOW */, 1 /* CARCOLOUR_WHITE */, false, 0, 0, 0, 10000); //Outside the hotel
  $.gen_car3.switch(101);


  $.gen_car24 = CarGenerator.Create(11.5, -1382.0, 9.6, 261.0, -1, -1, -1, false, 0, 0, 0, 10000); //Mini car park round from scarface flat
  $.gen_car24.switch(101);



  $.gen_car27 = CarGenerator.Create(19.8, -991.8, 9.7, 0.0, -1, -1, -1, false, 0, 0, 0, 10000); //Mini mall
  $.gen_car27.switch(101);


  $.gen_car28 = CarGenerator.Create(-6.4, -991.3, 9.7, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //Mini mall
  $.gen_car28.switch(101);


  $.gen_car29 = CarGenerator.Create(12.8, -1015.1, 9.7, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //Mini mall
  $.gen_car29.switch(101);


  $.gen_car78 = CarGenerator.Create(-35.7, -1013.6, 9.7, 0.0, -1, -1, -1, false, 20, 0, 0, 10000); //Mini mall
  $.gen_car78.switch(101);


  $.gen_car79 = CarGenerator.Create(81.3, -871.8, 9.7, 57.0, -1, -1, -1, false, 0, 0, 0, 10000); //round the corner from Mini mall
  $.gen_car79.switch(101);


  $.gen_car80 = CarGenerator.Create(-7.1, -1205.1, 9.6, 181.0, PCJ600, -1, -1, false, 0, 0, 0, 10000); //in car park next to chris's double insane jump
  $.gen_car80.switch(101);


  $.gen_car81 = CarGenerator.Create(37.9, -1320.4, 9.6, 355.0, HERMES, -1, -1, false, 0, 0, 0, 10000); //Outside flats
  $.gen_car81.switch(101);


  $.gen_car8 = CarGenerator.Create(127.0, -1158.0, 32.0, 180.0, STALLION, -1, -1, false, 0, 0, 0, 10000); //Top of multistorey, South Washington Drive (4x4 mission car)
  $.gen_car8.switch(101);


  $.gen_car9 = CarGenerator.Create(507.4, -308.8, 12.8, 176.0, PCJ600, -1, -1, false, 0, 0, 0, 10000); //End of Ocean Drive! (4x4 mission car)
  $.gen_car9.switch(101);


  $.gen_car10 = CarGenerator.Create(19.8, -1246.9, 10.1, 0.0, BANSHEE, -1, -1, false, 70, 0, 0, 10000); //Back of Washington (4x4 mission car)
  $.gen_car10.switch(101);


  $.gen_car30 = CarGenerator.Create(307.9, 1254.6, 27.5, 180.5, TOPFUN, -1, -1, false, 0, 0, 0, 10000); //RC plane race ontop of car park
  $.gen_car30.switch(101);


  $.gen_car32 = CarGenerator.Create(277.4, -1175.3, 11.0, 350.0, -1, -1, -1, false, 30, 0, 0, 10000); // Ocean Drive
  $.gen_car32.switch(101);


  $.gen_car33 = CarGenerator.Create(278.8, -1074.0, 11.0, 172.0, -1, -1, -1, false, 30, 0, 0, 10000); // Ocean Drive
  $.gen_car33.switch(101);


  $.gen_car74 = CarGenerator.Create(365.3, -837.9, 11.0, 335.0, -1, -1, -1, false, 60, 0, 0, 10000); // Ocean Drive
  $.gen_car74.switch(101);


  $.gen_car82 = CarGenerator.Create(237.2, -1377.5, 10.9, 170.0, -1, -1, -1, false, 50, 0, 0, 10000); // Ocean Drive
  $.gen_car82.switch(101);


  $.gen_car83 = CarGenerator.Create(127.4, -818.5, 9.5, 250.6, FAGGIO, -1, -1, false, 0, 0, 0, 10000); // Lawyers office
  $.gen_car83.switch(0);



  $.gen_car75 = CarGenerator.Create(382.2, -632.8, 11.0, 9.9, FAGGIO, -1, -1, false, 0, 0, 0, 10000); //Washington
  $.gen_car75.switch(101);


  $.gen_car76 = CarGenerator.Create(235.7, -893.3, 11.0, 150.0, -1, -1, -1, false, 0, 0, 0, 10000); //Washington
  $.gen_car76.switch(101);


  $.gen_car77 = CarGenerator.Create(150.6, -995.6, 11.0, 353.0, -1, -1, -1, false, 0, 0, 0, 10000); //Washington
  $.gen_car77.switch(101);


  $.gen_car85 = CarGenerator.Create(122.3, -1107.7, 9.7, 175.0, -1, -1, -1, false, 0, 0, 0, 10000); //Washington
  $.gen_car85.switch(101);



  $.gen_car34 = CarGenerator.Create(-313.4, -1236.4, 5.0, 180.0, RIO, -1, -1, false, 0, 0, 0, 10000); // Boat
  $.gen_car34.switch(101);


  $.gen_car35 = CarGenerator.Create(-328.4, -1317.7, 5.0, 0.0, SPEEDER, -1, -1, false, 0, 0, 0, 10000); // Boat
  $.gen_car35.switch(101);


  $.gen_car36 = CarGenerator.Create(-286.8, -1353.1, 5.0, 90.0, REEFER, -1, -1, false, 0, 0, 0, 10000); // Boat
  $.gen_car36.switch(101);


  $.gen_car37 = CarGenerator.Create(-314.0, -1318.3, 5.0, 0.0, MARQUIS, -1, -1, false, 0, 0, 0, 10000); // Boat
  $.gen_car37.switch(101);


  $.gen_car55 = CarGenerator.Create(376.9, 477.0, 11.2, 282.0, FAGGIO, -1, -1, false, 0, 0, 0, 10000); // next to rooftop chase
  $.gen_car55.switch(101);


  $.gen_car22 = CarGenerator.Create(718.4650, 701.3998, 12.3940, 320.7776, TOPFUN, -1, -1, false, 0, 0, 0, 10000); //RC car race, ON the beach
  $.gen_car22.switch(101);


  $.gen_car26 = CarGenerator.Create(-256.6, -1275.4, 7.4, 348.0, PCJ600, -1, -1, false, 0, 0, 0, 10000); //Bike generator next to Colonels boat
  $.gen_car26.switch(101);


  $.gen_car120 = CarGenerator.Create(-236.6, -1374.6, 7.1, 280.3, CHEETAH, -1, -1, false, 0, 0, 0, 10000); //next to Colonels boat
  $.gen_car120.switch(101);


  $.gen_car121 = CarGenerator.Create(-168.9, -1392.2, 3.1, 280.0, -1, -1, -1, false, 30, 0, 0, 10000); //next to Colonels boat
  $.gen_car121.switch(101);


  $.gen_car122 = CarGenerator.Create(-140.2, -1414.1, 3.1, 108.7, -1, -1, -1, false, 60, 0, 0, 10000); //next to Colonels boat
  $.gen_car122.switch(101);


  $.gen_car123 = CarGenerator.Create(-142.1, -1373.0, 3.1, 287.3, -1, -1, -1, false, 0, 0, 0, 10000); //next to Colonels boat
  $.gen_car123.switch(101);


  $.gen_car31 = CarGenerator.Create(393.9, -1736.4, 8.8, 249.6, CADDY, -1, -1, false, 0, 0, 0, 10000); //Lighthouse (Hidden)
  $.gen_car31.switch(101);


  //WASHINGTON BEACH


  $.gen_car102 = CarGenerator.Create(198.2, -504.9, 10.9, 90.0, -1, -1, -1, false, 0, 0, 0, 10000); //Hardware store
  $.gen_car102.switch(101);


  $.gen_car103 = CarGenerator.Create(128.8, -515.2, 13.1, 270.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car103.switch(101);


  $.gen_car104 = CarGenerator.Create(215.7, -418.6, 9.7, 170.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car104.switch(101);


  $.gen_car105 = CarGenerator.Create(222.7, -351.1, 9.9, 73.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car105.switch(101);


  $.gen_car106 = CarGenerator.Create(228.2, -222.2, 10.9, 250.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car106.switch(101);


  $.gen_car107 = CarGenerator.Create(456.5, 2.8, 10.0, 97.4, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car107.switch(101);


  $.gen_car108 = CarGenerator.Create(478.5, -15.9, 9.8, 99.7, -1, -1, -1, false, 20, 0, 0, 10000); //
  $.gen_car108.switch(101);



  //VICE POINT

  $.gen_car6 = CarGenerator.Create(413.8, 97.7, 10.5, 301.3, PIZZABOY, -1, -1, false, 0, 0, 0, 10000); //Vice Point Area Pizza Hut
  $.gen_car6.switch(101);


  $.gen_car84 = CarGenerator.Create(483.9, -42.8, 9.1, 0.0, RUMPO, -1, -1, false, 0, 0, 0, 10000); //Behind Malibu
  $.gen_car84.switch(101);


  $.gen_car109 = CarGenerator.Create(301.2, 265.6, 15.3, 278.4, FREEWAY, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car109.switch(101);


  $.gen_car111 = CarGenerator.Create(286.3, 394.4, 12.3, 265.2, -1, -1, -1, false, 0, 0, 0, 10000); // Pull away from the edge for large vehicles
  $.gen_car111.switch(101);


  $.gen_car112 = CarGenerator.Create(573.0, 586.1, 12.5, 74.0, -1, -1, -1, false, 40, 0, 0, 10000); //
  $.gen_car112.switch(101);


  $.gen_car113 = CarGenerator.Create(604.4, 758.8, 12.6, 90.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car113.switch(101);


  $.gen_car114 = CarGenerator.Create(388.6, 834.5, 11.9, 273.0, FREEWAY, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car114.switch(101);


  $.gen_car115 = CarGenerator.Create(255.4, 1297.5, 16.5, 193.4, -1, -1, -1, false, 20, 0, 0, 10000); //
  $.gen_car115.switch(101);


  $.gen_car116 = CarGenerator.Create(552.5, 1246.8, 15.9, 88.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car116.switch(101);


  $.gen_car117 = CarGenerator.Create(555.1, 1032.6, 17.9, 9.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car117.switch(101);


  $.gen_car118 = CarGenerator.Create(563.4, 1053.6, 17.6, 98.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car118.switch(101);


  $.gen_car119 = CarGenerator.Create(430.3, 957.0, 12.3, 294.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car119.switch(101);


  $.gen_car151 = CarGenerator.Create(309.2, 1204.4, 16.2, 91.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car151.switch(101);


  //PRAWN ISLAND

  $.gen_car41 = CarGenerator.Create(-101.6, 1011.5, 11.5, 270.3, PACKER, -1, -1, false, 0, 0, 0, 10000); //Porn Studios
  $.gen_car41.switch(101);


  $.gen_car43 = CarGenerator.Create(-36.8, 874.0, 11.1, 194.2, PATRIOT, -1, -1, false, 0, 0, 0, 10000); //Porn Studios
  $.gen_car43.switch(101);


  $.gen_car42 = CarGenerator.Create(-6.4, 957.1, 9.4, 355.1, PCJ600, -1, -1, false, 0, 0, 0, 10000); //Porn Studios
  $.gen_car42.switch(101);


  $.gen_car100 = CarGenerator.Create(-141.1, 1030.4, 5.5, 180.0, SKIMMER, -1, -1, true /* TRUE */, 0, 0, 0, 10000); //starts AFTER porn 2
  $.gen_car100.switch(0);


  $.gen_car159 = CarGenerator.Create(16.4, 1139.9, 18.5, 265.0, GANGBUR, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car159.switch(101);


  //STARFISH ISLAND

  $.gen_car51 = CarGenerator.Create(-363.0, -532.2, 12.0, 355.5, INFERNUS, -1, -1, false, 0, 0, 0, 10000); //Mansion
  $.gen_car51.switch(101);


  $.gen_car52 = CarGenerator.Create(-394.7, -533.7, 12.0, 355.5, STRETCH, -1, -1, false, 0, 0, 0, 10000); //Mansion
  $.gen_car52.switch(101);


  $.gen_car158 = CarGenerator.Create(-391.0, -573.0, 40.0, 355.5, MAVERICK, -1, -1, false, 0, 0, 0, 10000); //Mansion
  $.gen_car158.switch(0);


  $.gen_car91 = CarGenerator.Create(-221.3, -422.7, 11.2, 90.0, CHEETAH, -1, -1, false, 0, 0, 0, 10000); //Mansion1
  $.gen_car91.switch(101);

  //CREATE_CAR_GENERATOR -353.3 -409.1 9.0 180.0 RANCHER -1 -1 0 0 0 0 10000 gen_car92 //Mansion2
  //SWITCH_CAR_GENERATOR gen_car92 101


  $.gen_car93 = CarGenerator.Create(-492.8, -429.4, 10.6, 0.0, STINGER, -1, -1, false, 0, 0, 0, 10000); //Mansion3
  $.gen_car93.switch(101);


  $.gen_car94 = CarGenerator.Create(-558.8, -450.7, 10.4, 0.0, BANSHEE, -1, -1, false, 0, 0, 0, 10000); //Mansion4
  $.gen_car94.switch(101);


  $.gen_car95 = CarGenerator.Create(-678.8, -415.1, 9.5, 0.0, ADMIRAL, -1, -1, false, 0, 0, 0, 10000); //Mansion5
  $.gen_car95.switch(101);


  $.gen_car96 = CarGenerator.Create(-593.6, -318.3, 10.4, 130.0, LANDSTAL, -1, -1, false, 0, 0, 0, 10000); //Mansion6
  $.gen_car96.switch(101);


  $.gen_car97 = CarGenerator.Create(-523.8, -295.8, 9.7, 180.0, INFERNUS, -1, -1, false, 0, 0, 0, 10000); //Mansion7
  $.gen_car97.switch(101);


  $.gen_car98 = CarGenerator.Create(-388.6, -287.7, 9.6, 270.0, PHEONIX, -1, -1, false, 0, 0, 0, 10000); //Mansion8
  $.gen_car98.switch(101);


  $.gen_car99 = CarGenerator.Create(-267.0, -303.6, 9.5, 160.0, COMET, -1, -1, false, 0, 0, 0, 10000); //Mansion9
  $.gen_car99.switch(101);


  $.gen_car5 = CarGenerator.Create(-350.8, -534.9, 11.4, 86.5, PIZZABOY, -1, -1, false, 0, 0, 0, 10000); //Mansion after completing pizza missions
  $.gen_car5.switch(0);



  //DOCKS

  $.gen_car44 = CarGenerator.Create(-751.5, -1359.4, 10.6, 69.0, LINERUN, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car44.switch(101);


  $.gen_car45 = CarGenerator.Create(-717.2, -1462.2, 10.3, 0.0, PONY, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car45.switch(101);


  $.gen_car48 = CarGenerator.Create(-741.7, -1549.5, 11.5, 336.0, RUMPO, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car48.switch(101);


  $.gen_car49 = CarGenerator.Create(-898.9971, -1462.0464, 10.9400, 10.8204, BOXVILLE, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car49.switch(101);


  $.gen_car50 = CarGenerator.Create(-946.3, -1379.5, 11.5, 69.0, PACKER, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car50.switch(101);


  $.gen_car61 = CarGenerator.Create(-947.7, -1264.1, 11.3, 164.0, BENSON, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car61.switch(101);

  //Boat Yard

  $.gen_car153 = CarGenerator.Create(-592.3, -1510.3, 5.0, 250.0, JETMAX, -1, -1, true /* TRUE */, 0, 0, 0, 10000);
  $.gen_car153.switch(0);


  $.gen_car154 = CarGenerator.Create(-576.4, -1505.2, 5.0, 250.0, SQUALO, -1, -1, true /* TRUE */, 0, 0, 0, 10000);
  $.gen_car154.switch(0);


  $.gen_car156 = CarGenerator.Create(-755.9, -1077.5, 5.0, 0.0, COASTG, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car156.switch(101);


  //Beach

  $.gen_car86 = CarGenerator.Create(643.4, -208.1, 9.5, 33.0, BFINJECT, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car86.switch(101);

  //LITTLE HAITI

  $.gen_car1 = CarGenerator.Create(-1003.1, 207.4, 11.0, 166.6, KAUFMAN, -1, -1, true /* TRUE */, 0, 0, 0, 10000); //Taxi rank
  $.gen_car1.switch(101);


  $.gen_car4 = CarGenerator.Create(-1028.2, 82.2, 11.2, 171.9, PIZZABOY, -1, -1, false, 0, 0, 0, 10000); //Haitian Gang Area Pizza Hut
  $.gen_car4.switch(101);


  $.gen_car53 = CarGenerator.Create(-1107.6, 292.9, 11.5, 268.3, PATRIOT, -1, -1, false, 0, 0, 0, 10000); //Phils shed
  $.gen_car53.switch(101);


  $.gen_car54 = CarGenerator.Create(-964.94, 133.54, 8.23, 271.61, VOODOO, -1, -1, false, 0, 0, 0, 10000); // Auntie Poulets area
  $.gen_car54.switch(101);


  //LITTLE HAVANA

  $.gen_car12 = CarGenerator.Create(-867.6105, -572.2039, 10.11294, 277.5232, MRWHOOP, -1, -1, true /* TRUE */, 0, 0, 0, 10000);
  $.gen_car12.switch(0);

  //DOWNTOWN

  $.gen_car2 = CarGenerator.Create(-904.2, 808.9, 10.5, 269.6, PIZZABOY, -1, -1, false, 0, 0, 0, 10000); //Downtown Area Pizza Hut
  $.gen_car2.switch(101);


  $.gen_car17 = CarGenerator.Create(-426.0, 1412.5, 10.5, 80.0, LANDSTAL, -1, -1, false, 0, 0, 0, 10000); //BMX TRACK
  $.gen_car17.switch(101);


  $.gen_car157 = CarGenerator.Create(-425.8, 1407.0, 9.8, 80.0, SANCHEZ, -1, -1, false, 0, 0, 0, 10000); //BMX TRACK
  $.gen_car157.switch(101);


  $.gen_car46 = CarGenerator.Create(-872.843, 692.633, 10.997, 359.746, FBICAR, -1, -1, false, 0, 0, 0, 10000); // On the take mission small pavement behind rock city
  $.gen_car46.switch(101);


  $.gen_car56 = CarGenerator.Create(-592.301, 655.117, 10.06, 9.794, ANGEL, -1, -1, true /* TRUE */, 0, 0, 0, 10000); // Outside biker bar
  $.gen_car56.switch(101);


  $.gen_car152 = CarGenerator.Create(-589.212, 655.117, 10.06, 9.794, ANGEL, -1, -1, false, 0, 0, 0, 10000); // Outside biker bar
  $.gen_car152.switch(101);


  $.gen_car101 = CarGenerator.Create(-596.17, 676.928, 11.271, 180.0, PCJ600, -1, -1, false, 0, 0, 0, 10000); // Inside Howln' Petes shop
  $.gen_car101.switch(101);



  $.gen_car127 = CarGenerator.Create(-756.7, 976.3, 10.4, 0.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car127.switch(101);


  $.gen_car128 = CarGenerator.Create(-803.3, 964.1, 10.4, 270.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car128.switch(101);



  $.gen_car129 = CarGenerator.Create(-752.6, 1003.0, 10.4, 0.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car129.switch(101);


  $.gen_car130 = CarGenerator.Create(-781.5, 996.5, 10.4, 90.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car130.switch(101);


  $.gen_car131 = CarGenerator.Create(-772.7, 1031.8, 10.4, 270.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car131.switch(101);


  $.gen_car132 = CarGenerator.Create(-781.7, 1077.9, 10.4, 90.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car132.switch(101);



  $.gen_car133 = CarGenerator.Create(-821.7, 563.4, 10.5, 0.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car133.switch(101);


  $.gen_car134 = CarGenerator.Create(-851.0, 581.3, 10.5, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car134.switch(101);


  $.gen_car135 = CarGenerator.Create(-869.5, 533.0, 10.5, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car135.switch(101);


  $.gen_car136 = CarGenerator.Create(-821.6, 499.7, 10.5, 90.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car136.switch(101);



  $.gen_car137 = CarGenerator.Create(-1324.5, 1137.0, 9.3, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car137.switch(101);


  $.gen_car138 = CarGenerator.Create(-1353.8, 1158.0, 9.3, 0.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car138.switch(101);


  $.gen_car139 = CarGenerator.Create(-1444.8, 1162.7, 9.3, 160.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car139.switch(101);


  $.gen_car140 = CarGenerator.Create(-1543.8, 1227.0, 9.3, 30.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car140.switch(101);


  $.gen_car141 = CarGenerator.Create(-1562.9, 1282.4, 9.3, 98.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car141.switch(101);


  $.gen_car142 = CarGenerator.Create(-1587.7, 1313.8, 9.3, 87.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car142.switch(101);


  $.gen_car143 = CarGenerator.Create(-1568.1, 1351.0, 9.3, 261.9, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car143.switch(101);


  $.gen_car144 = CarGenerator.Create(-1562.7, 1406.9, 9.3, 150.1, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car144.switch(101);


  $.gen_car145 = CarGenerator.Create(-1445.3, 1499.0, 9.3, 20.6, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car145.switch(101);


  $.gen_car146 = CarGenerator.Create(-1349.1, 1503.7, 9.3, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car146.switch(101);


  $.gen_car147 = CarGenerator.Create(-1318.7, 1524.1, 9.3, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //
  $.gen_car147.switch(101);



  $.gen_car92 = CarGenerator.Create(-469.0, 1123.5, 64.7, 270.0, VCNMAV, -1, -1, false, 0, 0, 0, 10000); //VCN Chopper
  $.gen_car92.switch(101);



  //MALL

  $.gen_car20 = CarGenerator.Create(386.0, 1227.0, 19.4, 90.0, INFERNUS, -1, -1, true /* TRUE */, 80, 0, 0, 10000); //PRIZE CAR
  $.gen_car20.switch(101);

  //AIRPORT

  $.gen_car19 = CarGenerator.Create(-1377.7, -961.4, 14.4, 177.9, PACKER, -1, -1, false, 0, 0, 0, 10000); //Packer Truck at Airport near airplanes
  $.gen_car19.switch(101);


  $.gen_car18 = CarGenerator.Create(-1142.5, -939.3, 14.6, 89.6, SENTXS, -1, -1, false, 0, 0, 0, 10000); //Survivor Car mission
  $.gen_car18.switch(101);


  $.gen_car21 = CarGenerator.Create(-1235.171, -1235.171, 14.77, 337.839, TOPFUN, -1, -1, false, 0, 0, 0, 10000); //RC Helicopter Toyz van
  $.gen_car21.switch(101);


  $.gen_car62 = CarGenerator.Create(-1414.8, -1268.1, 13.9, 40.0, BAGGAGE, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car62.switch(101);


  $.gen_car63 = CarGenerator.Create(-1474.9, -961.7, 13.9, 282.0, BAGGAGE, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car63.switch(101);


  $.gen_car64 = CarGenerator.Create(-1808.5, -1090.8, 13.9, 274.0, BAGGAGE, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car64.switch(101);


  $.gen_car65 = CarGenerator.Create(-1533.3, -805.9, 13.9, 178.0, BAGGAGE, -1, -1, false, 0, 0, 0, 10000);
  $.gen_car65.switch(101);



  $.gen_car66 = CarGenerator.Create(-1584.2, -656.4, 14.0, 0.0, -1, -1, -1, false, 0, 0, 0, 10000); //CAR PARK
  $.gen_car66.switch(101);


  $.gen_car67 = CarGenerator.Create(-1606.5, -633.8, 14.0, 180.0, -1, -1, -1, false, 20, 0, 0, 10000); //CAR PARK
  $.gen_car67.switch(101);


  $.gen_car68 = CarGenerator.Create(-1628.0, -667.0, 14.0, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //CAR PARK
  $.gen_car68.switch(101);


  $.gen_car69 = CarGenerator.Create(-1637.5, -624.6, 14.0, 0.0, -1, -1, -1, false, 30, 0, 0, 10000); //CAR PARK
  $.gen_car69.switch(101);


  $.gen_car70 = CarGenerator.Create(-1659.6, -646.4, 14.0, 180.0, -1, -1, -1, false, 0, 0, 0, 10000); //CAR PARK
  $.gen_car70.switch(101);


  $.gen_car71 = CarGenerator.Create(-1706.0, -655.9, 14.0, 90.0, -1, -1, -1, false, 30, 0, 0, 10000); //CAR PARK
  $.gen_car71.switch(101);


  $.gen_car72 = CarGenerator.Create(-1691.5, -614.8, 14.0, 0.0, -1, -1, -1, false, 50, 0, 0, 10000); //CAR PARK
  $.gen_car72.switch(101);


  $.gen_car73 = CarGenerator.Create(-1573.3, -614.7, 14.0, 0.0, -1, -1, -1, false, 0, 0, 0, 10000); //CAR PARK
  $.gen_car73.switch(101);

  // Gneric for kickstart ( will have to BE MOVED )


  $.gen_car57 = CarGenerator.Create(516.1, 503.1, 10.5, 0.0, POLICE, -1, -1, false, 0, 30, 0, 10000); //Vice point cop shop
  $.gen_car57.switch(101);


  $.gen_car90 = CarGenerator.Create(493.2045, 503.6830, 10.4612, 179.9753, ENFORCER, -1, -1, false, 0, 40, 0, 10000); //Vice point cop shop
  $.gen_car90.switch(101);



  $.gen_car58 = CarGenerator.Create(355.7, -511.4, 11.6, 320.0, POLICE, -1, -1, false, 0, 30, 0, 10000); //Ocean beach cop shop
  $.gen_car58.switch(101);


  $.gen_car87 = CarGenerator.Create(372.3, -525.7, 11.6, 140.0, POLICE, -1, -1, false, 0, 30, 0, 10000); //Ocean beach cop shop
  $.gen_car87.switch(101);



  $.gen_car59 = CarGenerator.Create(-855.4, -665.4, 10.6, 0.0, POLICE, -1, -1, false, 0, 30, 0, 10000); //Little havana cop shop
  $.gen_car59.switch(101);


  $.gen_car89 = CarGenerator.Create(-844.8, -675.6, 10.6, 90.0, POLICE, -1, -1, false, 0, 30, 0, 10000); //Little havana cop shop
  $.gen_car89.switch(101);



  $.gen_car25 = CarGenerator.Create(-665.2, 777.6, 11.0, 180.0, POLICE, -1, -1, false, 0, 10, 0, 10000); //Downtown cop shop
  $.gen_car25.switch(101);



  $.gen_car7 = CarGenerator.Create(472.5, 701.2, 10.5, 90.0, AMBULAN, -1, -1, false, 0, 10, 0, 10000); //Vice Point Hospital
  $.gen_car7.switch(101);



  $.gen_car11 = CarGenerator.Create(-111.9, -949.9, 10.2, 280.0, AMBULAN, -1, -1, false, 0, 10, 0, 10000); //Ocean beach Hospital
  $.gen_car11.switch(101);



  $.gen_car60 = CarGenerator.Create(-776.1, 1135.1, 11.5, 0.0, AMBULAN, -1, -1, false, 0, 10, 0, 10000); //Downtown hospital
  $.gen_car60.switch(101);



  $.gen_car88 = CarGenerator.Create(-694.9, 917.3, 10.8, 270.0, FIRETRUK, -1, -1, false, 0, 0, 0, 10000); //Downtown hospital
  $.gen_car88.switch(101);

  //LEAF LINKS GOLF CLUB

  $.gen_car155 = CarGenerator.Create(114.6977, 252.3439, 20.6832, 105.6803, COMET, -1, -1, false, 0, 0, 0, 10000); //outside golf club
  $.gen_car155.switch(101);


  $.buddys_lambo = CarGenerator.Create(-363.0, -532.2, 12.0, 0.0, infernus, 1 /* CARCOLOUR_WHITE */, 1 /* CARCOLOUR_WHITE */, true /* TRUE */, 0, 0, 0, 10000); //Mansion
  $.buddys_lambo.switch(0);


  $.gen_car110 = CarGenerator.Create(-1003.1, 207.4, 11.0, 166.6, zebra, -1, -1, false, 0, 0, 0, 10000); //Taxi rank
  $.gen_car110.switch(0);


  $.police_chopper = CarGenerator.Create(-614.0, 804.0, 30.0, 0.0, polmav, -1, -1, false, 0, 0, 0, 10000); //at south beach
  $.police_chopper.switch(101);

  // ***************************************************PICKUPS********************************************************
  /*
  X runs from -2400 to 1600
  Y from -2000 to 2000
  Z from -100 to 100
  */
  //WEAPONS********************************************************************************


  // VAR_INT gun_beach1 gun_beach2 gun_beach3 gun_beach4 gun_beach5 gun_beach6 gun_beach7 gun_beach8 gun_beach9 gun_beach10
  // VAR_INT gun_beach11 gun_beach12 gun_beach13 gun_beach14 gun_beach15 gun_beach16 prawn_gun1 prawn_gun2 golf_gun1 star_gun1 star_gun2 star_gun5
  // VAR_INT gun_main1 gun_main2 gun_main3 gun_main4 gun_main5 gun_main6 gun_main7 gun_main8 gun_main9 gun_main10 gun_main11 gun_main12 gun_main13 gun_main14 Chainsaw1
  // VAR_INT gun_beach17

  //BEACH

  $.chainsaw1 = Pickup.Create(chnsaw, 2 /* PICKUP_ON_STREET */, 30.0, -1330.9, 13.0); //Scarface chainsaw room
  $.gun_beach1 = Pickup.Create(bat, 2 /* PICKUP_ON_STREET */, 206.7, -1254.4, 12.0); //Behind Ocean View
  $.gun_beach2 = Pickup.CreateWithAmmo(colt45, 15 /* PICKUP_ON_STREET_SLOW */, 34, -228.4, -1318.2, 9.1); //down the Ocean Bay Marina
  $.gun_beach3 = Pickup.CreateWithAmmo(colt45, 15 /* PICKUP_ON_STREET_SLOW */, 34, 340.5, -249.5, 12.5); //At Construction Site (Tex's)
  $.gun_beach4 = Pickup.CreateWithAmmo(chromegun, 15 /* PICKUP_ON_STREET_SLOW */, 16, 42.3, -959.2, 21.8); //Top of Small Mall
  $.gun_beach5 = Pickup.CreateWithAmmo(chromegun, 15 /* PICKUP_ON_STREET_SLOW */, 16, 568.9, -449.3, 11.1); //Top of the walway along Beach
  $.gun_beach6 = Pickup.CreateWithAmmo(tec9, 15 /* PICKUP_ON_STREET_SLOW */, 100, 287.9, 50.7, 10.8); //Just off small road that used to lead onto golfcourse
  $.gun_beach7 = Pickup.CreateWithAmmo(grenade, 15 /* PICKUP_ON_STREET_SLOW */, 4, 362.2, -500.5, 12.3); //behind police station
  $.gun_beach8 = Pickup.Create(cleaver, 15 /* PICKUP_ON_STREET_SLOW */, 402.6, 102.5, 11.4); //Behind North Pizza Hut
  $.gun_beach9 = Pickup.CreateWithAmmo(ruger, 15 /* PICKUP_ON_STREET_SLOW */, 60, 418.9, 589.9, 18.3); //On top of swank house
  $.gun_beach10 = Pickup.Create(katana, 15 /* PICKUP_ON_STREET_SLOW */, 476.9, 1014.9, 19.2); //Inside Tarbrush Coffee
  $.gun_beach11 = Pickup.Create(nitestick, 15 /* PICKUP_ON_STREET_SLOW */, 402.4, -488.3, 12.4); //Inside Police Station
  $.gun_beach13 = Pickup.Create(brassknuckle, 15 /* PICKUP_ON_STREET_SLOW */, 224.0, -1207.5, 11.0); //behind Moonlite Hotel on Ocean Drive
  $.gun_beach14 = Pickup.Create(knifecur, 15 /* PICKUP_ON_STREET_SLOW */, 118.7, -1546.1, 10.8); //behind Northstar Hotel on Ocean Drive
  $.gun_beach15 = Pickup.Create(machete, 15 /* PICKUP_ON_STREET_SLOW */, 56.6, -459.3, 11.4); //On bridge leadign to star island
  $.gun_beach16 = Pickup.CreateWithAmmo(uzi, 15 /* PICKUP_ON_STREET_SLOW */, 60, 5.4, -1277.0, 10.4); //Behind paint n spray in washington
  $.gun_beach17 = Pickup.CreateWithAmmo(uzi, 15 /* PICKUP_ON_STREET_SLOW */, 60, 157.0, -895.3, 12.3); //in middle of washington next to swimming pool
  $.gun_beach12 = Pickup.CreateWithAmmo(bomb, 15 /* PICKUP_ON_STREET_SLOW */, 4, 556.6, 207.4, 14.5); //building tall hotel next to beach in South vice point

  //PORN ISLAND

  $.prawn_gun1 = Pickup.CreateWithAmmo(m4, 15 /* PICKUP_ON_STREET_SLOW */, 60, -32.8, 1019.2, 13.0); //Inside Studio B
  $.prawn_gun2 = Pickup.CreateWithAmmo(uzi, 15 /* PICKUP_ON_STREET_SLOW */, 60, 17.3, 1145.7, 23.5); //At front of Street Gang building

  //GOLF ISLAND

  $.golf_gun1 = Pickup.Create(golfclub, 2 /* PICKUP_ON_STREET */, 95.0, 279.2, 21.8); //On Golf Course

  //STAR ISLAND

  $.star_gun1 = Pickup.CreateWithAmmo(flame, 15 /* PICKUP_ON_STREET_SLOW */, 300, -546.0, -418.9, 9.8); //In the star of R* symbol
  $.star_gun2 = Pickup.CreateWithAmmo(7 /* sniper */, 15 /* PICKUP_ON_STREET_SLOW */, 20, -476.4, -571.2, 12.9); //In the Maze
  $.star_gun5 = Pickup.Create(katana, 15 /* PICKUP_ON_STREET_SLOW */, -554.11, -547.7, 10.7); //Inside garage of house next to mansion

  //MAINLAND

  $.gun_main1 = Pickup.CreateWithAmmo(molotov, 15 /* PICKUP_ON_STREET_SLOW */, 4, -755.7, 1347.5, 11.8); //Taco Shop
  $.gun_main2 = Pickup.CreateWithAmmo(uzi, 15 /* PICKUP_ON_STREET_SLOW */, 60, -545.8, 694.6, 11.0); //Across from biker bar
  $.gun_main3 = Pickup.CreateWithAmmo(m4, 15 /* PICKUP_ON_STREET_SLOW */, 60, -980.4, 118.7, 9.3); //Between Haitain Houses
  $.gun_main4 = Pickup.CreateWithAmmo(m4, 15 /* PICKUP_ON_STREET_SLOW */, 60, -1221.0, -641.6, 11.7); //Behind house across from Umberto's
  $.gun_main5 = Pickup.CreateWithAmmo(7 /* sniper */, 15 /* PICKUP_ON_STREET_SLOW */, 20, -742.1, -949.9, 9.9); //Behind Toll Booth on last bridge on way to Beach
  $.gun_main6 = Pickup.CreateWithAmmo(rocketla, 15 /* PICKUP_ON_STREET_SLOW */, 4, -995.1, -1178.1, 13.6); //In Hooker Inn Swimming Pool.
  $.gun_main7 = Pickup.CreateWithAmmo(ingramsl, 15 /* PICKUP_ON_STREET_SLOW */, 60, -713.3, -1466.0, 11.2); //Across from fastest boat Boat Shed
  $.gun_main8 = Pickup.CreateWithAmmo(flame, 15 /* PICKUP_ON_STREET_SLOW */, 300, -1015.1, -1392.9, 11.5); //beside Bomb SHop in Docks
  $.gun_main9 = Pickup.CreateWithAmmo(shotgspa, 15 /* PICKUP_ON_STREET_SLOW */, 14, -1359.0, -742.2, 14.9); //Across from main terminal at airport
  $.gun_main10 = Pickup.CreateWithAmmo(M60, 15 /* PICKUP_ON_STREET_SLOW */, 100, -1744.9, -288.9, 29.7); //left hand tower at Army Hanger
  $.gun_main11 = Pickup.CreateWithAmmo(grenade, 15 /* PICKUP_ON_STREET_SLOW */, 4, -939.8, -464.9, 10.9); //In basketball courts close to ice cream factory
  $.gun_main12 = Pickup.CreateWithAmmo(python, 15 /* PICKUP_ON_STREET_SLOW */, 12, -1182.7, -61.1, 11.4); //South Across water from junkyard
  $.gun_main13 = Pickup.CreateWithAmmo(buddyshot, 15 /* PICKUP_ON_STREET_SLOW */, 10, -1305.2, 177.1, 11.4); //Behind large hanger from junkyard
  $.gun_main14 = Pickup.CreateWithAmmo(laser, 15 /* PICKUP_ON_STREET_SLOW */, 14, -1114.3, -602.0, 26.0); //Next to Kaufmann cabs sign in Lttle Havana (close to cuban cafe)




  //HEALTH********************************************************************************

  // VAR_INT beach_health1 beach_health2 beach_health3 beach_health4 beach_health5 beach_health8 beach_health9
  // VAR_INT porn_health1 golf_health1 star_health1 star_health2 main_health1 main_health2 main_health3 main_health4 main_health5 main_health6
  // VAR_INT main_health7 main_health9 main_health10 main_health11 main_health12 main_health13 main_health14 health_pickup

  //BEACH

  $.beach_health1 = Pickup.Create(health, 1 /* PICKUP_IN_SHOP */, -113.2, -975.7, 10.4); //Ocean View Hospital
  $.beach_health2 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -225.1, -1158.1, 9.1); //On Windy Path Along from marina
  $.beach_health3 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, 456.2, -471.4, 16.6); //On roof next to Protect the Deal shootout
  $.beach_health4 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, 377.4, 467.7, 11.6); //Next to garbage can where THE CHASE guy falls onto
  $.beach_health5 = Pickup.Create(health, 1 /* PICKUP_IN_SHOP */, 469.6, 697.4, 11.7); //Shady Palms Hospital
  $.beach_health8 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, 385.3, 1210.9, 19.4); //Inside Cup in Big Mall (behind free car)
  $.beach_health9 = Pickup.Create(health, 1 /* PICKUP_IN_SHOP */, 384.3, 756.6, 11.7); //Inside Dispensary at middle of Vice Point

  //PORN ISLAND

  $.porn_health1 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, 10.7, 1099.0, 16.6); //In front of Fish Fountain

  //GOLF ISLAND

  $.golf_health1 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, 85.3, 402.7, 19.8); //On Bridge near tennis Courts

  //STAR ISLAND

  $.star_health1 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -711.7, -501.7, 11.3); //Near Mainland gate
  $.star_health2 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -404.0, -588.0, 11.6); //In bottom of Mansion
  $.health_pickup = Pickup.Create(health, 2 /* PICKUP_ON_STREET */, -406.2503, -566.4947, 19.5804); //in mansion (for chris' finale)

  //MAINLAND

  $.main_health1 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -478.1, 1438.5, 16.1); //Dirtbike Track
  $.main_health2 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -675.0, 1263.3, 25.1); //On top of Roof in Downtown near Fight for Harley
  $.main_health3 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -821.8, 1144.8, 26.1); //Near Fifth Jump in G-Spotlight Course
  $.main_health4 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -1139.4, 55.4, 11.2); //Next to steps leading out of haitian Drug Factory
  $.main_health5 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -1290.9, 91.9, 26.9); //Top of Garbage Lift in Garbage Dump
  $.main_health6 = Pickup.Create(health, 1 /* PICKUP_IN_SHOP */, -885.4, -483.4, 13.1); //Westhaven Hospital
  $.main_health7 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -925.1, -638.3, 16.0); //Roof leading to Ice Cream roofs
  $.main_health9 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -692.4, -1283.8, 11.1); //underneath stairs leading to ship
  $.main_health10 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -655.1, -1506.3, 8.1); //Off jetty at fastest boat yard
  $.main_health11 = Pickup.Create(health, 15 /* PICKUP_ON_STREET_SLOW */, -1399.4, -865.9, 20.9); //Upstairs in Airport terminal
  $.main_health12 = Pickup.Create(health, 1 /* PICKUP_IN_SHOP */, -822.6, 1137.3, 12.4); //Downtown Hospital
  $.main_health13 = Pickup.Create(health, 1 /* PICKUP_IN_SHOP */, -851.4, -78.8, 11.5); //In pharmacy
  $.main_health14 = Pickup.Create(health, 1 /* PICKUP_IN_SHOP */, -834.2, 740.6, 11.3); //In DOWNTOWN dispensary



  //ARMOUR********************************************************************************


  // VAR_INT beach_arm1 beach_arm2 beach_arm3 beach_arm4 beach_arm5 beach_arm6 beach_arm7 beach_arm8 porn_arm1 golf_arm2
  // VAR_INT main_arm1 main_arm2 main_arm3 main_arm4 main_arm5 main_arm8 main_arm10 main_arm11

  //BEACH

  $.beach_arm1 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 4.9, -1239.2, 19.2); //Up stairs in middle of Washington (behind pay n spray)
  $.beach_arm2 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 205.7, -885.7, 12.2); //End of swimming pool middle of washington
  $.beach_arm3 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 148.8, -349.9, 8.7); //In Construction Yard
  $.beach_arm4 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 520.2, -171.2, 13.9); //Standing Vice point Hotel (not far from Club)
  $.beach_arm5 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 430.8, 162.1, 11.8); //Close to basketball courts in middle of Vice Point
  $.beach_arm6 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 416.1, 517.7, 11.2); //In centre of Wooden Drinks Shack @ swank house in vice point
  $.beach_arm7 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 350.2, 884.8, 25.5); //In House Near Big Mall with ramp inside it
  $.beach_arm8 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 535.3, 1214.1, 18.9); //Near Big Mall Garages

  //PORN ISLAND

  $.porn_arm1 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 42.8, 951.1, 11.0); //Across from porn studios in run down back yard

  //GOLF ISLAND

  $.golf_arm2 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -70.8, 510.6, 11.6); //In Bunker at golf course

  //STAR ISLAND

  //MAINLAND

  $.main_arm1 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -1695.6, -289.4, 29.7); //In the Right Tower at the army hanger
  $.main_arm2 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -567.6, 1370.36, 16.4); //Next to flip down ladder on gspotlight course
  $.main_arm3 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -921.9, 722.9, 11.0); //Behind Rock City
  $.main_arm5 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -1058.9, -240.6, 18.2); //Upstairs from Printing Studios
  $.main_arm8 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -625.5, 622.2, 11.7); //Behind Bikers bar
  $.main_arm10 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -733.5, -1294.7, 12.4); //Across from Plates Ship
  $.main_arm11 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -1177.0, -915.3, 14.9); //Airport Car Park
  $.main_arm4 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -1171.0, -457.4, 10.7); //Airport Car Park



  //ADRENALINE********************************************************************************


  // VAR_INT beach_adrn1 beach_adrn2 beach_adrn3 beach_adrn4 beach_adrn5 beach_adrn6 star_adrn1 star_adrn2
  // VAR_INT main_adrn1 main_adrn2 main_adrn3 main_adrn4 main_adrn5 main_adrn6 main_adrn7 main_adrn8

  //BEACH

  $.beach_adrn1 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -37.7, -938.3, 10.5); //In Small Mall
  $.beach_adrn2 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, 471.1, -444.1, 10.6); //In the alleyway behind Ocean Drive (close to the Protect the Deal location)
  $.beach_adrn3 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, 448.6, 16.6, 11.0); //Behind Sex Pad
  $.beach_adrn4 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, 425.6, 221.1, 16.2); //Across from The Chase House
  $.beach_adrn5 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, 428.4, 947.5, 13.2); //Across from The Big Mall
  $.beach_adrn6 = Pickup.Create(adrenaline, 1 /* PICKUP_IN_SHOP */, 385.6, 752.3, 11.7); //Inside Dispensary at middle of Vice Point

  //PORN ISLAND

  //GOLF ISLAND

  //STAR ISLAND

  $.star_adrn1 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -366.6, -500.3, 11.3); //In Front of Mansion in trees
  $.star_adrn2 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -342.2, -591.5, 36.9); //On top of Mansion

  //MAINLAND

  $.main_adrn1 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -381.2, 1065.2, 13.0); //Next to main bridge in downtown
  $.main_adrn2 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -730.1, 1226.3, 24.2); //On "Free the Harley" roof in downtown between ramps
  $.main_adrn3 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -1095.1, 99.4, 12.3); //Up steps close to cuban shop next to Haitian Drugs Factory
  $.main_adrn4 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -967.1, -62.6, 11.0); //Across from second drugs pickup point from Hait 1
  $.main_adrn5 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -1022.1, -547.0, 11.2); //Across the road from the Assassin phone behind the drugs factory
  $.main_adrn6 = Pickup.Create(adrenaline, 15 /* PICKUP_ON_STREET_SLOW */, -882.0, 111.2, 9.3); //Close to the Dirty Lickin's roof
  $.main_adrn7 = Pickup.Create(adrenaline, 1 /* PICKUP_IN_SHOP */, -857.1, -83.6, 11.5); //In pharmacy
  $.main_adrn8 = Pickup.Create(adrenaline, 1 /* PICKUP_IN_SHOP */, -839.0, 740.6, 11.3); //In DOWNTOWN dispensary





  //COLLECTABLES********************************************************************************
  //BEACH

  Game.CreateCollectable(479.6, -1718.5, 15.6); //Top of Lighthouse
  Game.CreateCollectable(708.4, -498.2, 12.3); //In Lifeguard hut on beach
  Game.CreateCollectable(-213.0, -1647.1, 13.1); //On Rocks near Wooden huts in water
  Game.CreateCollectable(-368.4, -1733.2, 11.6); //On desecrated Wooden hut in water
  Game.CreateCollectable(-104.3, -1600.3, 10.4); //Next to door of Southerly most house


  Game.CreateCollectable(-234.7, -1082.6, 13.6); //Behind West Research and development Building
  Game.CreateCollectable(88.0, -991.7, 19.1); //on top of pizza hut in Washington
  Game.CreateCollectable(205.4, -888.9, 12.1); //End of swimming pool middle of washington
  Game.CreateCollectable(183.1, -652.9, 10.8); //Next to Bridge leading to construction yard
  Game.CreateCollectable(370.9, -469.5, 13.8); //Upstairs inside police station


  Game.CreateCollectable(298.8, -278.5, 11.9); //Back of Spandexpress delivery firm
  Game.CreateCollectable(321.8, -774.3, 22.8); //On top of DBP Security Roof
  Game.CreateCollectable(491.8, -45.3, 10.0); //Behind Malibu
  Game.CreateCollectable(472.8, 116.0, 11.2); //In House next to North Pizza Hut
  Game.CreateCollectable(379.6, 212.9, 11.3); //In Jewellery shop at middle of vice point


  Game.CreateCollectable(290.1, 295.4, 13.5); //Next to shit looking house near bridge leading to golf course
  Game.CreateCollectable(470.9, 1123.6, 24.5); //Upstairs in Big Mall
  Game.CreateCollectable(407.6, 1018.2, 25.3); //Upstairs in Gash in Big Mall
  Game.CreateCollectable(561.6, 1157.1, 18.9); //Behind house to the East of the Big Mall
  Game.CreateCollectable(891.8, 873.8, 16.4); //On beach next RC Bandit track


  Game.CreateCollectable(353.7, -564.3, 56.4); //On top of building (north Washington Beach)
  Game.CreateCollectable(306.9, 1177.5, 17.4); //In multi storey car park
  Game.CreateCollectable(271.3, 932.9, 9.8); //Next to bridge leading to porn island
  Game.CreateCollectable(328.7, 717.2, 22.8); //On top of highest diving board next to hotel near BIG MALL
  Game.CreateCollectable(473.3, 16.4, 33.0); //Top of the Sex Pad


  Game.CreateCollectable(352.5, 282.2, 19.6); //On The Chase roof
  Game.CreateCollectable(70.1, -479.6, 13.6); //In multi coloured things next to Starfish islands
  Game.CreateCollectable(53.6, -446.5, 7.6); //Underneath bridge leading to starfish island
  Game.CreateCollectable(266.3, -249.9, 36.1); //At end of strut on top of construction site
  Game.CreateCollectable(413.9, 1217.4, 18.4); //At back of Big Mall


  Game.CreateCollectable(-172.4, -1341.3, 3.9); //underground car park at marina
  Game.CreateCollectable(-233.1, -931.2, 9.8); //under bridge that leads to the mainland
  Game.CreateCollectable(69.7, -796.6, 11.7); //near Strange red glowing building near small mall
  Game.CreateCollectable(107.5, -551.9, 14.7); //in corner of buildings south of construction yard
  Game.CreateCollectable(233.9, -132.2, 8.0); //off jetty close to golf course


  Game.CreateCollectable(424.5, 89.3, 11.3); //inside north Pizza hut
  Game.CreateCollectable(401.6, 431.1, 11.4); //North point of the grassy area across from the North pay n spray
  Game.CreateCollectable(193.9, 678.8, 12.9); //Corner of building just north of golf course
  Game.CreateCollectable(589.4, 36.0, 16.7); //Behind WK chariot hotel
  Game.CreateCollectable(519.9, -135.4, 35.2); //On top of the old sex pad


  //40 pickups

  //PORN ISLAND

  Game.CreateCollectable(-41.8, 922.4, 19.4); //Top of Porn studios
  Game.CreateCollectable(-16.1, 991.7, 10.9); //Inside Porn studio C
  Game.CreateCollectable(60.7, 916.5, 10.8); //Under Small Jump (east of island)
  Game.CreateCollectable(-68.9, 1124.0, 17.0); //Near West desecrated building
  Game.CreateCollectable(82.7, 1113.8, 18.7); //In East desecrated building

  //GOLF ISLAND

  Game.CreateCollectable(70.5, 599.3, 14.5); //On the far tee off from the driving range
  Game.CreateCollectable(162.4, 246.4, 12.2); //under bridge leading to the beach
  Game.CreateCollectable(43.1, -150.9, 12.2); //South bridge over water
  Game.CreateCollectable(-46.6, 257.7, 24.5); //West bunker (middle bit of course)
  Game.CreateCollectable(43.4, -15.0, 17.3); //Middle of the lonely Island

  //STAR ISLAND

  Game.CreateCollectable(-236.9, -588.1, 10.3); //Easterly most point of the Mansion
  Game.CreateCollectable(-519.0, -599.3, 10.3); //Westerly most point of the Mansion (down wee alley going towards the sea)
  Game.CreateCollectable(-580.5, -422.6, 19.8); //Upstairs in rockstar house
  Game.CreateCollectable(-310.4, -415.5, 10.1); //In jacuzzi (east of island)
  Game.CreateCollectable(-245.4, -323.8, 10.2); //In NE house
  //55 pickups

  //MAINLAND

  Game.CreateCollectable(-246.9, 1219.5, 10.9); //Behind penultimate G-spotlight jump
  Game.CreateCollectable(-451.0, 1286.6, 12.6); //In the VAJ finance sculpture
  Game.CreateCollectable(-764.3, 1266.0, 11.5); //Close to Free the Harley Complex
  Game.CreateCollectable(-1550.1, 1403.1, 8.7); //Behind the Stadium
  Game.CreateCollectable(-790.8, 1119.4, 9.8); //Behind Downtown hospital


  Game.CreateCollectable(-451.5, 1119.7, 61.7); //Beside helipad in downtown (SOUTH of VAJ finance)
  Game.CreateCollectable(-567.4, 776.1, 22.8); //Inside Downtown Office
  Game.CreateCollectable(-898.7, 430.4, 10.9); //near HUGE carpark between haiti and downtown
  Game.CreateCollectable(-979.2, 266.7, 8.9); //Down small set of stairs in little Hiati
  Game.CreateCollectable(-856.3, 228.5, 12.9); //Inside little dip in roof of building in North Haiti


  Game.CreateCollectable(-1072.5, 351.7, 11.2); //Inside Phil's Shed
  Game.CreateCollectable(-1161.6, 431.1, 11.0); //Behind Phil's Place
  Game.CreateCollectable(-975.1, 191.9, 12.6); //Behind Kaufmann Cabs
  Game.CreateCollectable(-1033.4, 44.0, 11.1); //on skeleton behind funeraria romero
  Game.CreateCollectable(-994.0, -250.3, 10.7); //Under Big sign close to Print works (Little Haiti - Life's a Bitch)


  Game.CreateCollectable(-1104.9, -120.9, 20.1); //In between generators on roof next to print works
  Game.CreateCollectable(-1131.6, -355.4, 15.0); //In house at North end of Little Havana
  Game.CreateCollectable(-1195.2, -317.7, 10.9); //At back of Laundramat in Little Havana
  Game.CreateCollectable(-1093.7, -600.1, 26.0); //on Kaufmann Cabs sign along from umberto's
  Game.CreateCollectable(-1179.9, -576.3, 12.0); //Across from umberto's cafe


  Game.CreateCollectable(-1018.2, -874.1, 17.9); //Upstairs in car showroom
  Game.CreateCollectable(-855.3, -631.8, 11.3); //Inside Doughnut shop
  Game.CreateCollectable(-1179.2, -718.8, 22.8); //SOUTH WEST little havana
  Game.CreateCollectable(-802.9, -1184.6, 11.1); //Across from NAVAL ENGAGEMENT pick up point
  Game.CreateCollectable(-620.8, -1342.4, 16.3); //On back of plates boat


  Game.CreateCollectable(-1024.6, -1494.6, 19.4); //on les cargo ship
  Game.CreateCollectable(-1090.2, -1199.2, 11.2); //near most northerly building at docks
  Game.CreateCollectable(-829.2, -1461.0, 12.6); //Under Vice City Port Authority Main Building sign
  Game.CreateCollectable(-1160.6, -1333.8, 14.9); //In office of SeaPlanes Tours warehouse
  Game.CreateCollectable(-1369.3, -1255.7, 18.2); //On top of south most helipad at the airport


  Game.CreateCollectable(-1280.9, -1146.5, 22.2); //On top South Warehouse in the airport
  Game.CreateCollectable(-1773.8, -1053.2, 14.8); //INside WEST taylor Warehouse at airport
  Game.CreateCollectable(-1187.3, -1041.4, 14.8); //At Main Airport Carpark
  Game.CreateCollectable(-1477.3, -881.0, 32.4); //On top of airport terminal
  Game.CreateCollectable(-1561.8, -1059.5, 14.8); //Under South West airplane parked at terminal


  Game.CreateCollectable(-1349.1, -1090.4, 24.5); //at end of EAST terminal bit that lets u onto planes
  Game.CreateCollectable(-1567.3, -1055.5, 21.3); //On top of airplane off EAST terminal bit that lets u onto planes
  Game.CreateCollectable(-1366.4, -928.0, 20.8); //at end of internal terminal bit
  Game.CreateCollectable(-1523.5, -819.1, 14.8); //at back of airport terminal
  Game.CreateCollectable(-1829.1, -887.6, 14.8); //Behind Fire Station at airport


  Game.CreateCollectable(-1726.5, -419.2, 14.8); //Under Aeroplane behind NE airport
  Game.CreateCollectable(-1737.2, -299.2, 14.8); //Behind Vice City Air Reserve Fort Baxter Air Base
  Game.CreateCollectable(-1328.0, -537.1, 13.9); //Corner of MONDO collection of signage that leads into Airport
  Game.CreateCollectable(-1063.5, -965.5, 14.8); //Between the 4 HUGE pipes EAST of airport
  Game.CreateCollectable(-1265.8, -1346.9, 29.6); //On top of SOUTH EAST building at airport (Vice City International Airport Freight and Cargo Terminal)


  // VAR_INT starting_tracksuit hunter_created south_beach_hunter
  $.starting_tracksuit = Pickup.CreateClothes(-1200.3, -322.9, 10.9, 11);
  $.hunter_created = 0;

  // OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO
  //     OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO
  // OOOO    OOOO    OOOO    OOOO    OOOO         COP SET PIECES             OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO
  //     OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO    OOOO
  //ADD_SET_PIECE SetPieceType ActivationMinX ActivationMinY ActivationMaxX ActivationMaxY Generation1X Generation1Y Helper1X Helper1Y Generation2X Generation2Y Helper2X Helper2Y


  // ************************** VICE BEACH *************************************************************************************************

  //COP CARS IN ALLEY

  World.AddSetPiece(1 /* SETPIECE_TWOCOPCARSINALLEY */, 225.0, -1244.0, 227.4, -1248.5, 249.0, -1255.0, 246.0, -1250.6, 208.4, -1238.4, 209.6, -1243.5);


  //COP CARS BLOCKING PLAYER

  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, 235.3, -1299.6, 261.1, -1270.7, 212.2, -1309.6, 228.0, -1311.3, 221.2, -1309.6, 228.0, -1311.3); //Ocean Drive outside Ocean View
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, 220.0, -1144.0, 232.0, -1136.0, 190.5, -1101.5, 185.5, -1122.7, 278.8, -1112.0, 269.0, -1140.5); //big alleyway between Ocean Dr. and Washington
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -112.5, -1275.0, -120.5, -1267.0, -37.7, -1244.15, -36.7, -1270.0, -189.5, -1295.4, -190.0, -1279.3); // Road perpendicular to Colonel docks


  //COP CARS RAMMING PLAYER FROM THE SIDE

  World.AddSetPiece(3 /* SETPIECE_CARRAMMINGPLAYERFROMSIDE */, 324.0, -735.5, 332.0, -727.5, 361.6, -715.0, 338.6, -705.5, -189.5, -1295.4, -190.0, -1279.3); // Washington drive
  World.AddSetPiece(3 /* SETPIECE_CARRAMMINGPLAYERFROMSIDE */, 385.6, -602.2, 377.6, -594.2, 374.6, -559.0, 394.6, -571.5, -189.5, -1295.4, -190.0, -1279.3); // washington drive nr cop shop


  World.AddSetPiece(3 /* SETPIECE_CARRAMMINGPLAYERFROMSIDE */, 146.6, -450.2, 154.6, -440.2, 183.9, -480.0, 184.6, -447.5, -189.5, -1295.4, -190.0, -1279.3); // road from star island towards beach.
  World.AddSetPiece(3 /* SETPIECE_CARRAMMINGPLAYERFROMSIDE */, 250.6, -457.2, 240.6, -449.2, 346.8, -466.4, 311.5, -461.5, -189.5, -1295.4, -190.0, -1279.3); // following on from above


  World.AddSetPiece(7 /* SETPIECE_TWOCARSRAMMINGPLAYERFROMSIDE */, 171.0, -549.2, 179.0, -557.2, 161.8, -693.4, 168.5, -650.5, 169.5, -693.4, 173.0, -660.0); // humpbacked bridge supeer doubler!
  World.AddSetPiece(2 /* SETPIECE_CARBLOCKINGPLAYERFROMSIDE */, 305.6, -183.2, 315.6, -191.2, 269.2, -197.8, 276.6, -180.5, -189.5, -1295.4, -190.0, -1279.3);
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, 316.5, -65.0, 322.5, -58.0, 296.5, 6.9, 315.7, -11.0, 369.5, 12.2, 342.0, -9.7); //


  World.AddSetPiece(7 /* SETPIECE_TWOCARSRAMMINGPLAYERFROMSIDE */, 364.0, 236.2, 372.0, 244.2, 336.1, 271.4, 337.8, 249.5, 401.5, 213.4, 401.0, 234.0); // humpbacked bridge super doubler!
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, 364.5, 169.0, 372.5, 177.0, 406.7, 151.15, 398.7, 170.0, 326.5, 182.4, 346.0, 164.3); // Road perpendicular to Colonel docks


  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -87.0, -937.0, -99.0, -947.0, -136.0, -912.15, -115.0, -901.6, -56.0, -875.0, -95.5, -893.3); // Road perpendicular to Colonel docks
  World.AddSetPiece(7 /* SETPIECE_TWOCARSRAMMINGPLAYERFROMSIDE */, 536.0, 696.2, 546.0, 706.2, 516.0, 753.6, 541.5, 753.5, 506.2, 654.4, 534.0, 657.0); // humpbacked bridge supeer doubler!


  World.AddSetPiece(2 /* SETPIECE_CARBLOCKINGPLAYERFROMSIDE */, 314.0, 906.0, 322.0, 914.0, 348.3, 864.0, 316.0, 870.8, -189.5, -1295.4, -190.0, -1279.3);
  World.AddSetPiece(7 /* SETPIECE_TWOCARSRAMMINGPLAYERFROMSIDE */, 356.0, 748.0, 364.0, 756.0, 335.0, 667.6, 356.2, 685.2, 388.5, 846.2, 366.0, 828.0); // humpbacked bridge supeer doubler!

  // ****************** PRAWN ISLAND ***************************************************************************************************


  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -34.0, 1041.0, -26.0, 1049.0, 23.3, 1075.0, 28.0, 1030.8, 35.5, 993.4, 39.0, 1023.3);
  World.AddSetPiece(2 /* SETPIECE_CARBLOCKINGPLAYERFROMSIDE */, 16.0, 930.0, 24.0, 938.0, 28.3, 874.0, 10.0, 881.8, -189.5, -1295.4, -190.0, -1279.3);

  // ****************** STARFISH ISLAND ***************************************************************************************************


  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -368.0, -480.0, -378.0, -490.0, -253.5, -439.0, -252.5, -470.5, -451.2, -452.4, -442.0, -480.0);
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -533.0, -480.0, -543.0, -490.0, -647.0, -449.0, -637.5, -481.5, -451.2, -452.4, -457.0, -480.0);


  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -255.0, -435.0, -245.0, -443.0, -210.8, -470.0, -241.5, -472.0, -298.2, -485.0, -257.0, -477.5);
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -645.0, -446.0, -637.0, -454.0, -610.8, -482.0, -635.5, -472.0, -684.2, -492.0, -651.0, -480.5);


  // ****************** MAINLAND (docks) ***************************************************************************************************


  World.AddSetPiece(3 /* SETPIECE_CARRAMMINGPLAYERFROMSIDE */, -790.0, -1490.2, -798.0, -1498.2, -815.8, -1450.5, -822.0, -1469.0, -189.5, -1295.4, -190.0, -1279.3);
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -809.0, -1436.7, -800.0, -1428.0, -853.3, -1466.0, -824.5, -1474.8, -808.5, -1382.4, -788.0, -1392.3);
  World.AddSetPiece(7 /* SETPIECE_TWOCARSRAMMINGPLAYERFROMSIDE */, -870.0, -1335.7, -862.0, -1327.0, -902.3, -1343.0, -882.5, -1348.8, -880.5, -1297.4, -860.0, -1307.3);
  World.AddSetPiece(3 /* SETPIECE_CARRAMMINGPLAYERFROMSIDE */, -924.0, -1248.0, -916.0, -1240.0, -909.8, -1270.5, -920.0, -1265.0, -189.5, -1295.4, -190.0, -1279.3);
  World.AddSetPiece(3 /* SETPIECE_CARRAMMINGPLAYERFROMSIDE */, -1224.0, -788.0, -1216.0, -780.0, -1260.8, -737.5, -1258.0, -780.0, -189.5, -1295.4, -190.0, -1279.3);
  World.AddSetPiece(3 /* SETPIECE_CARRAMMINGPLAYERFROMSIDE */, -884.0, -1070.0, -876.0, -1078.0, -925.0, -1044.5, -901.0, -1074.0, -189.5, -1295.4, -190.0, -1279.3);


  // ****************** MAINLAND (L Havana) ***************************************************************************************************


  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -1130.0, -711.7, -1138.0, -719.7, -1111.3, -683.0, -1134.5, -686.4, -1166.0, -691.4, -1144.7, -690.3);
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -986.0, -713.0, -978.0, -721.0, -1011.8, -577.4, -989.7, -575.4, -945.5, -660.0, -969.4, -661.6);
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -1012.0, -392.0, -1004.0, -384.0, -1044.3, -337.8, -1023.7, -336.4, -975.0, -444.0, -1000.4, -445.6);
  World.AddSetPiece(6 /* SETPIECE_TWOCARSBLOCKINGPLAYERFROMSIDE */, -1112.0, -372.0, -1104.0, -364.0, -1078.3, -337.0, -1101.5, -339.4, -1138.0, -348.4, -1117.3, -346.3);

  // ****************** MAINLAND (airport) ***************************************************************************************************

  //ADD_SET_PIECE SETPIECE_TWOCARSRAMMINGPLAYERFROMSIDE   -1635.0 -1260.7 -1615.0 -1240.0    -1565.8 -1249.7 -1575.5 -1278.8   -880.5 -1297.4 -860.0 -1307.3
  //ADD_SET_PIECE SETPIECE_CARRAMMINGPLAYERFROMSIDE   -1714.0 -1364.2 -1706.0 -1356.2    -1686.8 -1334.5 -1708.0 -1334.6   -189.5 -1295.4 -190.0 -1279.3
  //ADD_SET_PIECE SETPIECE_TWOCARSRAMMINGPLAYERFROMSIDE   -1330.0 -835.7 -1300.0 -805.0    -1388.2 -8906.7 -1362.5 -875.8   -1231.5 -889.4 -1258.0 -891.3


  // MissionBoundary
}
