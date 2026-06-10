// Generated from main/general4.sc

import { $ } from "../vars.mts";
import { timed } from "../scm.mts";

// *****************************************************************************************
// *********************************** General Mission 4 ***********************************
// ********************************* Attack Military Convoy ********************************
// *****************************************************************************************
// *** The General has a buyer for a Sherman Tank and knows the perfect place to get one.***
// *** There is a military convoy transporting the tank across the map, the player1 must ***
// *** steal the tank by any means possible.  Then get it back to the General.			 ***
// *****************************************************************************************

async function body() {


  ONMISSION = 1;
  $.flag_player_on_army_ped_mission = 1;


  // SCRIPT_NAME COL_4


  Stat.RegisterMissionGiven();


  await asyncWait(0);


  // LVAR_FLOAT escort1_x escort1_y escort1_z tank_x tank_y tank_z
  // LVAR_FLOAT escort2_x escort2_y escort2_z escort2_speed army_vehicle_z
  // LVAR_FLOAT escort3_x escort3_y escort3_z escort3_speed


  Text.LoadMissionText("GENERA4");
  Shortcut.SetDropoffPointForMission(-163.0, -1439.4, 9.0, 201.5);


  escort2_speed = 7.5;
  escort3_speed = 7.5;
  $.tank_speed = 7.5;


  $.car_obstacle = -1;
  $.army_vehicle = -1;
  $.army_soldier = -1;


  $.escort1_dude2_car_obstacle = -1;
  $.escort2_dude2_car_obstacle = -1;
  $.tank_dude2_car_obstacle = -1;
  $.escort3_dude2_car_obstacle = -1;


  $.army_soldier_vehicle = -1;
  $.escort1_dude2_car = -1;
  $.escort2_dude2_car = -1;
  $.tank_dude2_car = -1;
  $.escort3_dude2_car = -1;
  $.players_tank = -1;


  $.flag_escort1_unusable = 0;
  $.flag_escort2_unusable = 0;
  $.attack_player = 0;
  $.player_close_to_tank = 0;
  $.convoy_stop_flag = 0;
  $.obstruction_of_vehicle_flag = 0;


  $.player_in_tank_flag = 0;
  $.another_fucking_flag = 0;
  $.move_car_timeout = 0;
  $.unlock_tank_timer = 0;
  $.unlock_tank_flag = 0;
  $.tank_mission_flag = 0;
  $.tank_detonation_timer = 0;
  $.tank_detonation_timer_float = 0.0;


  $.escort1_dude2_obstruction_flag = 0;
  $.escort2_dude2_obstruction_flag = 0;
  $.tank_dude2_obstruction_flag = 0;
  $.escort3_dude2_obstruction_flag = 0;


  $.escort2_attached_01_flag = 0;
  $.escort2_attached_02_flag = 0;
  $.escort2_attached_03_flag = 0;
  $.escort2_attached_04_flag = 0;


  $.escort3_attached_01_flag = 0;
  $.escort3_attached_02_flag = 0;
  $.escort3_attached_03_flag = 0;
  $.escort3_attached_04_flag = 0;


  $.escort1_dude2_timeout = 0;
  $.escort2_dude2_timeout = 0;
  $.tank_dude2_timeout = 0;
  $.escort3_dude2_timeout = 0;


  $.tank_attached_dude_flag = 0;
  $.tank_attached_dude_timer = 0;


  $.escort1_attack_player = 0;
  $.escort2_attack_player = 0;
  $.escort3_attack_player = 0;
  $.escort1_ram_player_counter = 0;
  $.escort2_ram_player_counter = 0;
  $.escort3_ram_player_counter = 0;


  $.escort1_dude2_obstacle_x = 0.0;
  $.escort1_dude2_obstacle_y = 0.0;
  $.escort2_dude2_obstacle_x = 0.0;
  $.escort2_dude2_obstacle_y = 0.0;
  $.tank_dude2_obstacle_x = 0.0;
  $.tank_dude2_obstacle_y = 0.0;
  $.escort3_dude2_obstacle_x = 0.0;
  $.escort3_dude2_obstacle_y = 0.0;


  army_vehicle_z = -100.0;


  $.vector_x = 0.0;
  $.vector_y = 0.0;


  $.escort1_dist_from_dest = 0.0;
  $.escort2_dist_from_dest = 0.0;
  $.tank_dist_from_dest = 0.0;
  $.escort3_dist_from_dest = 0.0;


  $.donut_stop_flag = 0;
  $.donut_stop_timer = 0;


  $.last_convoy_stop_flag = 0;
  $.initiate_seft_destruct_timer = 0;
  $.initiate_seft_destruct_flag = 0;


  $.is_audio_in_use = 0;
  $.audio_1_flag = 0;
  $.audio_2_flag = 0;
  $.audio_3_flag = 0;
  $.audio_4_flag = 0;
  $.audio_5_flag = 0;
  $.audio_6_flag = 0;
  $.audio_7_flag = 0;
  $.audio_8_flag = 0;
  $.audio_9_flag = 0;
  $.audio_10_flag = 0;
  $.audio_11_flag = 0;
  $.audio_12_flag = 0;
  $.audio_13_flag = 0;
  $.audio_14_flag = 0;
  $.audio_15_flag = 0;
  $.audio_16_flag = 0;
  $.audio_17_flag = 0;
  $.audio_18_flag = 0;
  $.audio_19_flag = 0;
  $.audio_20_flag = 0;
  $.audio_21_flag = 0;


  $.audio_5_timeout = 0;
  $.audio_18_timeout = 0;
  $.audio_20_timeout = 0;


  $.opened_garage_stuff = 0;
  $.player_hiding_in_warehouse = 0;
  $.got_garage_help = 0;
  $.player_near_tank_flag = 0;
  $.got_steal_tank_message = 0;
  $.garage_guard1_flag = 0;
  $.garage_guard2_flag = 0;
  $.player_in_warehouse_flag = 0;
  $.next_to_centres = 0;
  $.frame_counter = 0;
  $.tank_not_home = 0;


  $.formation_ped1_counter = 0;
  $.formation_ped2_counter = 0;
  $.formation_ped3_counter = 0;
  $.formation_ped4_counter = 0;
  $.formation_ped5_counter = 0;
  $.formation_ped6_counter = 0;
  $.tank_dude1_counter = 0;
  $.tank_dude2_counter = 0;
  $.tank_attached_dude_counter = 0;
  $.escort1_dude1_counter = 0;
  $.escort1_dude2_counter = 0;


  $.dudes_go_into_doorway = 0;


  $.print_timer = 0;
  $.got_locked_tank_message = 0;


  $.vehicle_stopped_timer = 0;
  $.escort1_stopped_timer = 0;
  $.escort2_stopped_timer = 0;
  $.tank_stopped_timer = 0;
  $.escort3_stopped_timer = 0;


  $.done_tank_on_fire_bit = 0;
  $.done_this_audio_bit = 0;


  $.escort1_has_been_rammed_by_player = 0;
  $.escort2_has_been_rammed_by_player = 0;
  $.escort3_has_been_rammed_by_player = 0;
  $.rammed_attack_timer = 0;
  $.close_to_tank_timer = 0;
  $.gosub_armydude_counter = 0;
  $.player_nearish_to_tank_flag = 0;

  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "cscolo");


  Streaming.RequestModel(yt_main_body);
  Streaming.RequestModel(yt_main_body2);
  Streaming.RequestModel(yt_doors14);
  Streaming.RequestModel(yt_tmp_boat);
  Streaming.RequestModel(lodmain_body);
  Streaming.RequestModel(big_poly_tings);
  Streaming.RequestModel(yt_gangplnk_tmp);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(yt_main_body)) || !(Streaming.HasModelLoaded(yt_main_body2)) || !(Streaming.HasModelLoaded(yt_doors14)) || !(Streaming.HasModelLoaded(yt_tmp_boat)) || !(Streaming.HasModelLoaded(lodmain_body)) || !(Streaming.HasModelLoaded(big_poly_tings))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(yt_gangplnk_tmp))) {
    await asyncWait(0);
  }


  Camera.SetNearClip(0.1);
  Cutscene.Load("COL_4A");


  const _res210 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res210.x;
$.the_yacht_y = _res210.y;
$.the_yacht_z = _res210.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Cutscene.SetOffset($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("cscolo");


  Streaming.RequestCollision(-244.2799, -1360.6704);
  World.ClearArea(-244.2799, -1360.6704, 7.0786, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-244.2799, -1360.6704, 7.0786);
  $.player1.setHeading(279.1362);
  Camera.SetBehindPlayer();


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  $.cs_time_limit = 210;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_01", 10000, 1); //Diaz was pleased with you and would like to meet you again.


  $.cs_time_limit = 2773;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_02", 10000, 1); //Is that a good thing?


  $.cs_time_limit = 3669;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_03", 10000, 1); //Of course! Although I'm starting to think that Diaz was responsible for our unfortunate loss...


  $.cs_time_limit = 8935;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_04", 10000, 1); //What makes you say that?


  $.cs_time_limit = 10386;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_05", 10000, 1); //One does not wave accusations at a man like Diaz, I'm merely thinking out loud


  $.cs_time_limit = 14243;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_06", 10000, 1); //no matter, I have a proposal that you could profit from...


  $.cs_time_limit = 16762;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_07", 10000, 1); //I don't have time to run more errands, Cortez.


  $.cs_time_limit = 19154;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_08", 10000, 1); //I would have thought a man with such dangerous debts would be hungry for opportunities. At least hear me out.


  $.cs_time_limit = 25653;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL4_09", 10000, 1); //Go on...


  $.cs_time_limit = 26526;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL410", 10000, 1); //I have a buyer for a piece of military hardware that is being taken through town. Pick it up for me...


  $.cs_time_limit = 32640;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Text.PrintNow("COL411", 10000, 1); //and once you get it, I want you to call me immediately, then...


  $.cs_time_limit = 34964;
  await wait_for_cs_time_col4();  // SCM GOSUB wait_for_cs_time_col4
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  Streaming.MarkModelAsNoLongerNeeded(yt_main_body);
  Streaming.MarkModelAsNoLongerNeeded(yt_main_body2);
  Streaming.MarkModelAsNoLongerNeeded(yt_doors14);
  Streaming.MarkModelAsNoLongerNeeded(yt_tmp_boat);
  Streaming.MarkModelAsNoLongerNeeded(lodmain_body);
  Streaming.MarkModelAsNoLongerNeeded(big_poly_tings);
  Streaming.MarkModelAsNoLongerNeeded(yt_gangplnk_tmp);

  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////


  $.player1.setMood(PLAYER_MOOD_PISSED_OFF, 60000);


  Streaming.RequestModel(RHINO);
  Streaming.RequestModel(BARRACKS);
  Streaming.RequestModel(ARMY);
  Streaming.RequestModel(PATRIOT);
  Streaming.RequestModel(RUGER);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(RHINO)) || !(Streaming.HasModelLoaded(BARRACKS)) || !(Streaming.HasModelLoaded(ARMY)) || !(Streaming.HasModelLoaded(PATRIOT)) || !(Streaming.HasModelLoaded(RUGER))) {
    await asyncWait(0);
  }


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.player1.addArmour(200);


  $.temp_int = $.player1.getHealth();
  if ($.temp_int < 100) {
    $.player1.setHealth(100);
  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintNow("COL4_B1", 20000, 1); //"Go steal the tank"

  //SWITCH_ROADS_OFF -877.0355 -1502.6396 -2.4916 -477.6842 685.0324 52.1452

  Path.SwitchRoadsOff(-721.211, 243.998, 5.0, -651.211, 693.998, 25.0);
  Path.SwitchRoadsOff(-760.362, 101.883, 5.0, -700.362, 251.883, 25.0);
  Path.SwitchRoadsOff(-783.906, -46.826, 5.0, -723.906, 103.174, 25.0);
  Path.SwitchRoadsOff(-853.397, -149.692, 5.0, -773.397, 0.308, 25.0);
  Path.SwitchRoadsOff(-870.656, -594.54, 5.0, -810.656, -144.54, 25.0);
  Path.SwitchRoadsOff(-837.282, -1041.814, 5.0, -770.282, -591.814, 25.0);
  Path.SwitchRoadsOff(-827.532, -1539.617, 5.0, -747.532, -1039.617, 25.0);


  Char.SetEnterCarRangeMultiplier(6.0);

  /////////////////////////////////////////////////
  //ESCORT1////////////////////////////////////////

  $.escort1 = Car.Create(PATRIOT, -751.1733, 113.8836, 9.8756); //-676.0 698.9212 9.9 escort1
  $.escort1.setHeading(167.7853); //180.0
  $.escort1.setCruiseSpeed(escort2_speed);
  $.escort1.setDrivingStyle(4);
  $.escort1.setChangeLane(false /* FALSE */);
  $.escort1.changeColor(43 /* CARCOLOUR_GREEN4 */, 72 /* CARCOLOUR_GREY3 */);
  $.escort1.setOnlyDamagedByPlayer(true /* TRUE */);

  //ESCORT1 PASSENGERS

  $.escort1_dude1 = Char.CreateInsideCar($.escort1, 4 /* PEDTYPE_CIVMALE */, ARMY);
  $.dude = $.escort1_dude1;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff


  $.escort1_dude2 = Char.CreateAsPassenger($.escort1, 4 /* PEDTYPE_CIVMALE */, ARMY, 0);
  $.dude = $.escort1_dude2;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff


  $.escort1.gotoCoordinatesAccurate(-843.4301, -1503.7, 11.9556);

  /////////////////////////////////////////////////
  //ESCORT2////////////////////////////////////////

  Car.SetModelComponents(BARRACKS, -1, 1);
  $.escort2 = Car.Create(BARRACKS, -749.1604, 123.1814, 9.8749); //-676.0 709.3193 9.9 escort2
  $.escort2.setHeading(167.7853); //180.0
  $.escort2.setCruiseSpeed(1.0);
  $.escort2.setDrivingStyle(4);
  $.escort2.setChangeLane(false /* FALSE */);
  $.escort2.setOnlyDamagedByPlayer(true /* TRUE */);

  //ESCORT2 PASSENGERS

  $.escort2_dude1 = Char.CreateInsideCar($.escort2, 4 /* PEDTYPE_CIVMALE */, ARMY);
  $.dude = $.escort2_dude1;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff


  $.escort2_dude2 = Char.CreateAsPassenger($.escort2, 4 /* PEDTYPE_CIVMALE */, ARMY, 0);
  $.dude = $.escort2_dude2;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff

  //ESCORT2 ATTACHED CHARS

  $.escort2_attached_01 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 665.0, 10.1);
  $.dude = $.escort2_attached_01;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.escort2_attached_01.attachToCar($.escort2, 0.4242, -0.0679, 1.1322, 3 /* FACING_RIGHT */, 270.0, WEAPONTYPE_RUGER); //FRONT RIGHT


  $.escort2_attached_02 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 664.0, 10.1);
  $.dude = $.escort2_attached_02;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.escort2_attached_02.attachToCar($.escort2, -0.7608, -1.4, 1.1138, 1 /* FACING_LEFT */, 270.0, WEAPONTYPE_RUGER); //FRONT LEFT


  $.escort2_attached_03 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 663.0, 10.1);
  $.dude = $.escort2_attached_03;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.escort2_attached_03.attachToCar($.escort2, -0.7595, -3.5704, 1.1108, 2 /* FACING_BACK */, 270.0, WEAPONTYPE_RUGER); //BACK LEFT


  $.escort2_attached_04 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 662.0, 10.1);
  $.dude = $.escort2_attached_04;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.escort2_attached_04.attachToCar($.escort2, 0.7158, -3.6996, 1.1162, 2 /* FACING_BACK */, 270.0, WEAPONTYPE_RUGER); //BACK RIGHT


  $.escort2.gotoCoordinatesAccurate(-848.7084, -1482.7328, 10.9920);

  /////////////////////////////////////////////////
  //TANK///////////////////////////////////////////

  $.tank = Car.Create(RHINO, -747.1234, 132.5895, 9.8742); //-676.0 720.3492 9.9 tank
  $.tank.setHeading(167.7853); //180.0
  $.tank.setCruiseSpeed(1.0);
  $.tank.setDrivingStyle(4);
  $.tank.setChangeLane(false /* FALSE */);
  $.tank_blip = Blip.AddForCar($.tank);
  $.tank.setDetonateCars(false /* FALSE */);

  //TANK PASSENGERS

  $.tank_dude1 = Char.CreateInsideCar($.tank, 4 /* PEDTYPE_CIVMALE */, ARMY);
  $.dude = $.tank_dude1;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff


  $.tank_dude2 = Char.CreateAsPassenger($.tank, 4 /* PEDTYPE_CIVMALE */, ARMY, 0);
  $.dude = $.tank_dude2;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff

  //TANK ATTACHED CHARS

  $.tank_attached_dude = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 662.0, 10.1);
  $.dude = $.tank_attached_dude;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.tank_attached_dude.attachToCar($.tank, 0.0455, -1.0043, 1.9962, 0 /* FACING_FORWARD */, 360.0, WEAPONTYPE_RUGER); //BACK RIGHT


  $.tank.gotoCoordinatesAccurate(-838.3314, -1492.5, 11.0623);

  /////////////////////////////////////////////////
  //ESCORT3////////////////////////////////////////

  Car.SetModelComponents(BARRACKS, -1, 1);
  $.escort3 = Car.Create(BARRACKS, -744.8403, 143.1341, 9.8734); //-676.0 732.0956 9.9 escort3
  $.escort3.setHeading(167.7853); //180.0
  $.escort3.setDrivingStyle(4);
  $.escort3.setCruiseSpeed(1.0);
  $.escort3.setChangeLane(false /* FALSE */);
  $.escort3.setOnlyDamagedByPlayer(true /* TRUE */);

  //ESCORT3 PASSENGERS

  $.escort3_dude1 = Char.CreateInsideCar($.escort3, 4 /* PEDTYPE_CIVMALE */, ARMY);
  $.dude = $.escort3_dude1;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff


  $.escort3_dude2 = Char.CreateAsPassenger($.escort3, 4 /* PEDTYPE_CIVMALE */, ARMY, 0);
  $.dude = $.escort3_dude2;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff

  //ESCORT3 ATTACHED CHARS

  $.escort3_attached_01 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 665.0, 10.1);
  $.dude = $.escort3_attached_01;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.escort3_attached_01.attachToCar($.escort3, 0.4242, -0.0679, 1.1322, 3 /* FACING_RIGHT */, 270.0, WEAPONTYPE_RUGER); //FRONT RIGHT


  $.escort3_attached_02 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 664.0, 10.1);
  $.dude = $.escort3_attached_02;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.escort3_attached_02.attachToCar($.escort3, -0.7608, -1.4, 1.1138, 1 /* FACING_LEFT */, 270.0, WEAPONTYPE_RUGER); //FRONT LEFT


  $.escort3_attached_03 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 663.0, 10.1);
  $.dude = $.escort3_attached_03;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.escort3_attached_03.attachToCar($.escort3, -0.7595, -3.5704, 1.1108, 2 /* FACING_BACK */, 270.0, WEAPONTYPE_RUGER); //BACK LEFT


  $.escort3_attached_04 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -686.0, 662.0, 10.1);
  $.dude = $.escort3_attached_04;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.escort3_attached_04.attachToCar($.escort3, 0.7158, -3.6996, 1.1162, 2 /* FACING_BACK */, 270.0, WEAPONTYPE_RUGER); //BACK RIGHT


  $.escort3.gotoCoordinatesAccurate(-856.1463, -1480.3773, 10.9387);

  /////////////////////////////////////////////////
  //TANK FROMATION DUDES///////////////////////////

  const _res211 = $.tank.getOffsetInWorldCoords(5.0, 2.0, 0.0);
$.x = _res211.x;
$.y = _res211.y;
$.z = _res211.z;
  $.formation_ped1 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, $.x, $.y, 10.0);
  $.dude = $.formation_ped1;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.formation_ped1.setOnlyDamagedByPlayer(true /* TRUE */);


  const _res212 = $.tank.getOffsetInWorldCoords(5.0, -1.0, 0.0);
$.x = _res212.x;
$.y = _res212.y;
$.z = _res212.z;
  $.formation_ped2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, $.x, $.y, 10.0);
  $.dude = $.formation_ped2;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.formation_ped2.setOnlyDamagedByPlayer(true /* TRUE */);


  const _res213 = $.tank.getOffsetInWorldCoords(5.0, -4.0, 0.0);
$.x = _res213.x;
$.y = _res213.y;
$.z = _res213.z;
  $.formation_ped3 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, $.x, $.y, 10.0);
  $.dude = $.formation_ped3;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.formation_ped3.setOnlyDamagedByPlayer(true /* TRUE */);


  const _res214 = $.tank.getOffsetInWorldCoords(-5.0, 2.0, 0.0);
$.x = _res214.x;
$.y = _res214.y;
$.z = _res214.z;
  $.formation_ped4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, $.x, $.y, 10.0);
  $.dude = $.formation_ped4;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.formation_ped4.setOnlyDamagedByPlayer(true /* TRUE */);


  const _res215 = $.tank.getOffsetInWorldCoords(-5.0, -1.0, 0.0);
$.x = _res215.x;
$.y = _res215.y;
$.z = _res215.z;
  $.formation_ped5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, $.x, $.y, 10.0);
  $.dude = $.formation_ped5;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.formation_ped5.setOnlyDamagedByPlayer(true /* TRUE */);


  const _res216 = $.tank.getOffsetInWorldCoords(-5.0, -4.0, 0.0);
$.x = _res216.x;
$.y = _res216.y;
$.z = _res216.z;
  $.formation_ped6 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, $.x, $.y, 10.0);
  $.dude = $.formation_ped6;
  await setup_initial_ped_stuff();  // SCM GOSUB setup_initial_ped_stuff
  $.formation_ped6.setOnlyDamagedByPlayer(true /* TRUE */);
}


/////////////////////////////////////////////////
//ROADBLOCKS SOUTH 2 NORTH///////////////////////
//CREATE_SCRIPT_ROADBLOCK -885.9499 -1442.2649 11.0349 -891.6244 -1456.6609 10.9687//by final warehouse
//CREATE_SCRIPT_ROADBLOCK -807.0514 -1388.8850 10.6476 -801.7827 -1374.5934 10.5058//next off road in docks
//CREATE_SCRIPT_ROADBLOCK -786.6721 -1343.5258 10.5875 -780.6464 -1329.5001 10.4440//2nd off road in docks
//CREATE_SCRIPT_ROADBLOCK -834.2352 -1057.6764 10.5529 -837.0213 -1045.5490 10.7284//turning from main drag into airport
//CREATE_SCRIPT_ROADBLOCK -789.1951 -930.0892 9.6729 -788.2363 -915.2332 9.6729//southernmost bridge
//CREATE_SCRIPT_ROADBLOCK -849.7534 -658.3314 10.6090	-851.6252 -643.2387 10.4786//icecream turning
//CREATE_SCRIPT_ROADBLOCK -812.9766 -526.0633 10.1554	-817.8110 -501.2489 9.9922//starisland bridge
//CREATE_SCRIPT_ROADBLOCK -876.0130 -291.4716 9.9119 -875.7681 -277.5194 10.1305//turning to printworks
//CREATE_SCRIPT_ROADBLOCK -811.8735 -8.3261 10.5396 -804.6509 5.3036 10.5061//next end of printworks 'U'
//CREATE_SCRIPT_ROADBLOCK -749.2551 193.4344 10.6401 -747.0237 207.8837 10.4886//south of rooftop diner
//CREATE_SCRIPT_ROADBLOCK -732.3436 287.1511 10.4862 -731.0121 302.1729 10.5000//north of rooftop diner


async function mission_general4_loop() {
  // SCM GOTO → mission_general4_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    ++$.frame_counter;
    if ($.frame_counter > 3) {
      $.frame_counter = 0;
    }


    $.game_timer = Clock.GetGameTimer();
    //SET_PLAYER_HEALTH player1 100

    //////////////////////////////////////////////////////////////////////////
    //ESCORT1 STUFF///////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    if ($.frame_counter == 0) {
      if (!(Car.IsDead($.escort1))) {
        if (!($.player1.isInCar($.escort1))) {
          if (!(Char.IsDead($.escort1_dude1))) {
            if ($.escort1_dude1.isInCar($.escort1)) {
              [escort1_x, escort1_y, escort1_z] = $.escort1.getCoordinates();
              $.x_temp = escort1_x - -837.0244;
              $.y_temp = escort1_y - -1509.2794;
              $.x_temp = $.x_temp * $.x_temp;
              $.y_temp = $.y_temp * $.y_temp;
              $.sum_x_y_temp = $.x_temp + $.y_temp;
              $.escort1_dist_from_dest = Math.Sqrt($.sum_x_y_temp);
              if ($.attack_player == 0) {
                if (!(Char.IsDead($.escort1_dude2))) {
                  if ($.escort1_dude2_counter == 0) {
                    if ($.escort1_dude2_obstruction_flag == 5) {
                      if ($.escort1_dude2.isInCar($.escort1)) {
                        $.escort1_dude2_obstruction_flag = 0;
                        if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
                          $.convoy_stop_flag = 0;
                        }
                      }
                      else {
                        if ($.escort1_dude2.isInAnyCar()) {
                          $.escort1_dude2_car = $.escort1_dude2.storeCarIsInNoSave();
                          $.escort1_dude2.setObjLeaveCar($.escort1_dude2_car);
                        }
                        else {
                          $.escort1_dude2.setObjEnterCarAsPassenger($.escort1);
                        }
                      }
                    }
                  }
                }
                else {
                  if (!($.escort1_dude2_counter == 3)) {
                    if ($.attack_player == 0) {
                      $.attack_player = 1;
                    }
                  }
                }
                if (Char.IsDead($.escort1_dude1)) {
                  if (!($.escort1_dude1_counter == 3)) {
                    if ($.attack_player == 0) {
                      $.attack_player = 1;
                    }
                  }
                }
                if ($.escort1.hasBeenDamagedByWeapon(16 /* WEAPONTYPE_RAMMEDBYCAR */)) {
                  if ($.player1.locateAnyMeansCar2D($.escort1, 20.0, 20.0, false)) {
                    $.escort1_has_been_rammed_by_player = 1;
                  }
                }
                if ($.escort1.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
                  $.escort1_health = $.escort1.getHealth();
                  if ($.escort1_health < 800) {
                    $.attack_player = 1;
                  }
                }
                $.escort1.clearLastWeaponDamage();
                if (!($.escort1.locate2D(-838.3314, -1490.4927, 50.0, 50.0, false))) {
                  $.escort1_distance_from_vehicle_behind = $.escort2_dist_from_dest - $.escort1_dist_from_dest;
                  if ($.escort1_distance_from_vehicle_behind > 20.0) {
                    $.escort1.setCruiseSpeed(0.0);
                    $.escort1.setTempAction(1 /* TEMPACT_WAIT */, 200);
                  }
                  else {
                    $.escort1.setCruiseSpeed(7.5);
                  }
                }
                if (!($.escort1_dude2_counter == 3)) {
                  $.army_vehicle = $.escort1;
                  $.army_soldier = $.escort1_dude2;
                  army_vehicle_z = escort1_z;
                  await if_in_front_of_army_vehicle();  // SCM GOSUB if_in_front_of_army_vehicle
                }
                if ($.convoy_stop_flag == 1) {
                  $.escort1.setCruiseSpeed(0.0);
                  $.escort1.setTempAction(1 /* TEMPACT_WAIT */, 500);
                }
              }
              else {
                if ($.player_nearish_to_tank_flag == 1) {
                  if ($.escort1_attack_player == 2 || $.escort1_attack_player == 3) {
                    $.escort1_attack_player = 0;
                  }
                  if ($.escort1_attack_player == 0) {
                    $.escort1.setCruiseSpeed(100.0);
                    $.escort1.setDrivingStyle(2);
                    $.escort1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                    $.escort1_attack_player = 1;
                  }
                  if ($.escort1_attack_player == 1) {
                    if ($.escort1_ram_player_counter == 10) {
                      if ($.player1.locateAnyMeansCar2D($.escort1, 20.0, 20.0, false)) {
                        if (!(Char.IsDead($.escort1_dude2))) {
                          $.escort1_dude2.setObjKillPlayerOnFoot($.player1);
                        }
                      }
                      $.escort1_ram_player_counter = 0;
                    }
                    else {
                      ++$.escort1_ram_player_counter;
                    }
                  }
                }
                else {
                  if ($.escort1_attack_player == 0 || $.escort1_attack_player == 1) {
                    $.escort1_attack_player = 2;
                  }
                  if ($.escort1_attack_player == 2) {
                    $.escort1.setCruiseSpeed(100.0);
                    $.escort1.setDrivingStyle(2);
                    $.escort1.gotoCoordinates(tank_x, tank_y, tank_z);
                    $.escort1_attack_player = 3;
                  }
                  if ($.escort1_attack_player == 3) {
                    if ($.escort1.locate2D(tank_x, tank_y, 20.0, 20.0, false)) {
                      $.escort1.setMission(11 /* MISSION_STOP_FOREVER */);
                      $.escort1.setTempAction(1 /* TEMPACT_WAIT */, 500);
                    }
                  }
                }
              }
            }
            else {
              if (!($.escort1_dude1_counter == 3)) {
                $.flag_escort1_unusable = 1;
                if ($.attack_player == 0) {
                  $.attack_player = 1;
                }
              }
            }
          }
          else {
            if (!($.escort1_dude1_counter == 3)) {
              $.flag_escort1_unusable = 1;
              if ($.attack_player == 0) {
                $.attack_player = 1;
              }
            }
          }
        }
        else {
          $.escort1.setOnlyDamagedByPlayer(false /* FALSE */);
          if (!(Char.IsDead($.escort1_dude1))) {
            $.escort1_dude1.setObjKillPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.escort1_dude2))) {
            $.escort1_dude2.setObjKillPlayerOnFoot($.player1);
          }
          if ($.attack_player == 0) {
            $.attack_player = 1;
          }
          $.flag_escort1_unusable = 1;
        }
      }
      else {
        if ($.attack_player == 0) {
          $.attack_player = 1;
        }
        $.flag_escort1_unusable = 1;
      }
    }

    //////////////////////////////////////////////////////////////////////////
    //ESCORT2 STUFF///////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    if ($.frame_counter == 1) {
      if (!(Car.IsDead($.escort2))) {
        if (!($.player1.isInCar($.escort2))) {
          if (!(Char.IsDead($.escort2_dude1))) {
            if ($.escort2_dude1.isInCar($.escort2)) {
              [escort2_x, escort2_y, escort2_z] = $.escort2.getCoordinates();
              $.x_temp = escort2_x - -837.0244;
              $.y_temp = escort2_y - -1509.2794;
              $.x_temp = $.x_temp * $.x_temp;
              $.y_temp = $.y_temp * $.y_temp;
              $.sum_x_y_temp = $.x_temp + $.y_temp;
              $.escort2_dist_from_dest = Math.Sqrt($.sum_x_y_temp);
              if ($.attack_player == 0) {
                if (!(Char.IsDead($.escort2_dude2))) {
                  if ($.escort2_dude2_obstruction_flag == 5) {
                    if ($.escort2_dude2.isInCar($.escort2)) {
                      $.escort2_dude2_obstruction_flag = 0;
                      if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
                        $.convoy_stop_flag = 0;
                      }
                    }
                    else {
                      if ($.escort2_dude2.isInAnyCar()) {
                        $.escort2_dude2_car = $.escort2_dude2.storeCarIsInNoSave();
                        $.escort2_dude2.setObjLeaveCar($.escort2_dude2_car);
                      }
                      else {
                        $.escort2_dude2.setObjEnterCarAsPassenger($.escort2);
                      }
                    }
                  }
                }
                else {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
                if (Char.IsDead($.escort2_dude1)) {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
                if ($.escort2.hasBeenDamagedByWeapon(16 /* WEAPONTYPE_RAMMEDBYCAR */)) {
                  if ($.player1.locateAnyMeansCar2D($.escort2, 20.0, 20.0, false)) {
                    $.escort2_has_been_rammed_by_player = 1;
                  }
                }
                if ($.escort2.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
                  $.escort2_health = $.escort2.getHealth();
                  if ($.escort2_health < 800) {
                    $.attack_player = 1;
                  }
                }
                $.escort2.clearLastWeaponDamage();
                if (!($.flag_escort1_unusable == 1)) {
                  $.x_temp = escort2_x - escort1_x;
                  $.y_temp = escort2_y - escort1_y;
                  $.x_temp = $.x_temp * $.x_temp;
                  $.y_temp = $.y_temp * $.y_temp;
                  $.sum_x_y_temp = $.x_temp + $.y_temp;
                  $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
                  escort2_speed = $.sum_x_y_temp - 3.0;
                  if (escort2_speed > 100.0) {
                    escort2_speed = 100.0;
                  }
                  if (escort2_speed < 0.0) {
                    escort2_speed = 0.0;
                  }
                  if (!($.escort2.locate2D(-838.3314, -1490.4927, 50.0, 50.0, false))) {
                    if ($.escort1_dist_from_dest > $.escort2_dist_from_dest) {
                      escort2_speed = 0.0;
                    }
                    $.escort2_distance_from_vehicle_behind = $.tank_dist_from_dest - $.escort2_dist_from_dest;
                    if ($.escort2_distance_from_vehicle_behind > 20.0) {
                      escort2_speed = 0.0;
                    }
                  }
                  else {
                    $.escort2.setStraightLineDistance(40);
                  }
                }
                else {
                  escort2_speed = 12.0;
                }
                $.army_vehicle = $.escort2;
                $.army_soldier = $.escort2_dude2;
                army_vehicle_z = escort2_z;
                await if_in_front_of_army_vehicle();  // SCM GOSUB if_in_front_of_army_vehicle
                if ($.convoy_stop_flag == 0) {
                  if (escort2_speed == 0.0) {
                    $.escort2.setTempAction(1 /* TEMPACT_WAIT */, 200);
                  }
                  else {
                    $.escort2.setCruiseSpeed(escort2_speed);
                  }
                }
                else {
                  escort2_speed = 0.0;
                  $.escort2.setTempAction(1 /* TEMPACT_WAIT */, 500);
                }
              }
              else {
                if ($.player_nearish_to_tank_flag == 1) {
                  if ($.escort2_attack_player == 2 || $.escort2_attack_player == 3) {
                    $.escort2_attack_player = 0;
                  }
                  if ($.escort2_attack_player == 0) {
                    $.escort2.setCruiseSpeed(100.0);
                    $.escort2.setDrivingStyle(2);
                    $.escort2.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                    $.escort2_attack_player = 1;
                  }
                  if ($.escort2_attack_player == 1) {
                    if ($.escort2_ram_player_counter == 10) {
                      if ($.player1.locateAnyMeansCar2D($.escort2, 20.0, 20.0, false)) {
                        if (!(Char.IsDead($.escort2_dude2))) {
                          $.escort2_dude2.setObjKillPlayerOnFoot($.player1);
                        }
                      }
                      $.escort2_ram_player_counter = 0;
                    }
                    else {
                      ++$.escort2_ram_player_counter;
                    }
                  }
                }
                else {
                  if ($.escort2_attack_player == 0 || $.escort2_attack_player == 1) {
                    $.escort2_attack_player = 2;
                  }
                  if ($.escort2_attack_player == 2) {
                    $.escort2.setCruiseSpeed(100.0);
                    $.escort2.setDrivingStyle(2);
                    $.escort2.gotoCoordinates(tank_x, tank_y, tank_z);
                    $.escort2_attack_player = 3;
                  }
                  if ($.escort2_attack_player == 3) {
                    if ($.escort2.locate2D(tank_x, tank_y, 20.0, 20.0, false)) {
                      $.escort2.setMission(11 /* MISSION_STOP_FOREVER */);
                      $.escort2.setTempAction(1 /* TEMPACT_WAIT */, 500);
                    }
                  }
                }
              }
            }
            else {
              if ($.attack_player == 0) {
                $.attack_player = 1;
              }
              $.flag_escort2_unusable = 1;
            }
          }
          else {
            if ($.attack_player == 0) {
              $.attack_player = 1;
            }
            $.flag_escort2_unusable = 1;
          }
        }
        else {
          $.escort2.setOnlyDamagedByPlayer(false /* FALSE */);
          if (!(Char.IsDead($.escort2_dude1))) {
            $.escort2_dude1.setObjKillPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.escort2_dude2))) {
            $.escort2_dude2.setObjKillPlayerOnFoot($.player1);
          }
          if ($.attack_player == 0) {
            $.attack_player = 1;
          }
          $.flag_escort2_unusable = 1;
        }
      }
      else {
        if ($.attack_player == 0) {
          $.attack_player = 1;
        }
        $.flag_escort2_unusable = 1;
      }

      //////////////////////////////////////////////////////////////////////////
      //SHOOTING FROM ESCORT2 STUFF/////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
      $.shooting_ped = $.escort2_attached_01;
      $.shooting_peds_car = $.escort2;
      $.shooting_peds_car_driver = $.escort2_dude1;
      $.shooting_ped_flag = $.escort2_attached_01_flag;
      await shooting_from_vehicle_stuff();  // SCM GOSUB shooting_from_vehicle_stuff
      $.escort2_attached_01_flag = $.shooting_ped_flag;
      $.shooting_ped = $.escort2_attached_02;
      $.shooting_peds_car = $.escort2;
      $.shooting_peds_car_driver = $.escort2_dude1;
      $.shooting_ped_flag = $.escort2_attached_02_flag;
      await shooting_from_vehicle_stuff();  // SCM GOSUB shooting_from_vehicle_stuff
      $.escort2_attached_02_flag = $.shooting_ped_flag;
      $.shooting_ped = $.escort2_attached_03;
      $.shooting_peds_car = $.escort2;
      $.shooting_peds_car_driver = $.escort2_dude1;
      $.shooting_ped_flag = $.escort2_attached_03_flag;
      await shooting_from_vehicle_stuff();  // SCM GOSUB shooting_from_vehicle_stuff
      $.escort2_attached_03_flag = $.shooting_ped_flag;
      $.shooting_ped = $.escort2_attached_04;
      $.shooting_peds_car = $.escort2;
      $.shooting_peds_car_driver = $.escort2_dude1;
      $.shooting_ped_flag = $.escort2_attached_04_flag;
      await shooting_from_vehicle_stuff();  // SCM GOSUB shooting_from_vehicle_stuff
      $.escort2_attached_04_flag = $.shooting_ped_flag;


    }

    //////////////////////////////////////////////////////////////////////////
    //TANK STUFF//////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    if ($.frame_counter == 2) {
      if (!(Car.IsDead($.tank))) {
        if (!($.player1.isInCar($.tank))) {
          if ($.garage_col4_destination.isClosed() && $.opened_garage_stuff > 0) {
            Text.PrintNow("COL4_B2", 5000, 1); //"~r~The tank arrived at its destination safely"
            // SCM GOTO → mission_general4_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_general4_failed"); // fallback: would break linear control flow
          }
          if ($.opened_garage_stuff == 1) {
            //IF IS_CAR_STOPPED_IN_ANGLED_AREA_3D tank -823.448 -1488.083 10.852 -841.991 -1480.591 16.165 30.0 0
            if ($.tank.locate2D(-836.007, -1500.523, 13.5, 13.5, false)) {
              if ($.player1.isInAngledArea3D(-823.448, -1488.083, 10.852, -841.991, -1480.591, 16.165, 30.0, false)) {
                if ($.player1.locateAnyMeans3D(-833.708, -1509.877, 12.489, 4.0, 6.0, 1.5, false)) {
                  if ($.dudes_go_into_doorway == 0) {
                    $.dudes_go_into_doorway = 1;
                  }
                }
                else {
                  if ($.formation_ped1_counter < 3 || $.escort1_dude1_counter < 3 || $.formation_ped3_counter < 3 || $.formation_ped4_counter < 3 || $.escort1_dude2_counter < 3 || $.formation_ped6_counter < 3) {
                    if ($.attack_player == 0) {
                      $.attack_player = 1;
                    }
                  }
                  $.opened_garage_stuff = 2;
                }
              }
            }
          }
          if ($.player1.locateAnyMeansCar2D($.tank, 60.0, 60.0, false)) {
            $.player_near_tank_flag = 1;
            if ($.got_steal_tank_message == 0) {
              Text.PrintNow("COL4_B6", 5000, 1); //Find a way to steal the tank!
              $.print_timer = $.game_timer + 5000;
              $.got_steal_tank_message = 1;
            }
            $.player1.alterWantedLevel(0);
          }
          else {
            $.player_near_tank_flag = 0;
          }
          if ($.player1.locateAnyMeansCar2D($.tank, 250.0, 250.0, false)) {
            $.player_nearish_to_tank_flag = 1;
          }
          else {
            $.player_nearish_to_tank_flag = 0;
          }
          [tank_x, tank_y, tank_z] = $.tank.getCoordinates();
          $.x_temp = tank_x - -837.0244;
          $.y_temp = tank_y - -1509.2794;
          $.x_temp = $.x_temp * $.x_temp;
          $.y_temp = $.y_temp * $.y_temp;
          $.sum_x_y_temp = $.x_temp + $.y_temp;
          $.tank_dist_from_dest = Math.Sqrt($.sum_x_y_temp);
          if (Char.IsDead($.tank_dude1)) {
            if (!($.tank_dude1_counter == 3)) {
              if ($.attack_player == 0) {
                if (Char.DoesExist($.tank_dude1)) {
                  const _res217 = World.GetDeadCharPickupCoords($.tank_dude1);
$.x = _res217.x;
$.y = _res217.y;
$.z = _res217.z;
                  $.tank_dude1_bodyarmour = Pickup.Create(1364 /* bodyarmour */, 3 /* PICKUP_ONCE */, $.x, $.y, $.z);
                }
                $.attack_player = 1;
              }
            }
          }
          if (Char.IsDead($.tank_dude2)) {
            if (!($.tank_dude2_counter == 3)) {
              if ($.attack_player == 0) {
                if (Char.DoesExist($.tank_dude2)) {
                  const _res218 = World.GetDeadCharPickupCoords($.tank_dude2);
$.x = _res218.x;
$.y = _res218.y;
$.z = _res218.z;
                  $.tank_dude2_bodyarmour = Pickup.Create(1364 /* bodyarmour */, 3 /* PICKUP_ONCE */, $.x, $.y, $.z);
                }
                $.attack_player = 1;
              }
            }
          }
          if ($.got_locked_tank_message == 0) {
            if (!($.unlock_tank_flag == 2)) {
              if (!($.player1.isOnFoot())) {
                const _res219 = $.tank.getOffsetInWorldCoords(-2.5017, 0.3918, -0.1973);
$.x = _res219.x;
$.y = _res219.y;
$.z = _res219.z;
                if ($.player1.locateOnFoot2D($.x, $.y, 1.0, 1.0, false)) {
                  Text.PrintNow("COL4_B4", 5000, 1); //"~g~The Tank is locked, find a way to open it."
                  $.print_timer = $.game_timer + 5000;
                  $.got_locked_tank_message = 1;
                }
              }
            }
          }

          //TANK ON FIRE BIT
          if ($.done_tank_on_fire_bit == 0) {
            if ($.tank.isOnFire()) {
              if (!(Char.IsDead($.tank_dude1))) {
                if ($.tank_dude1.isInCar($.tank)) {
                  $.tank_dude1.setObjFleePlayerOnFootTillSafe($.player1);
                }
              }
              if (!(Char.IsDead($.tank_dude2))) {
                if ($.tank_dude2.isInCar($.tank)) {
                  $.tank_dude2.setObjFleePlayerOnFootTillSafe($.player1);
                }
              }
              if ($.audio_7_flag == 0) {
                $.audio_7_flag = 1;
                $.audio_7_timeout = $.game_timer + 6000;
              }
              $.tank.lockDoors(1 /* CARLOCK_UNLOCKED */);
              $.unlock_tank_flag = 2;
              if ($.attack_player == 0) {
                $.attack_player = 1;
              }
              $.done_tank_on_fire_bit = 1;
            }
          }
          if (!($.tank_attached_dude_counter == 3)) {
            if (!(Char.IsDead($.tank_attached_dude))) {
              if ($.attack_player == 0) {
                if ($.tank_attached_dude_counter == 0) {
                  $.heading = $.tank.getHeading();
                  $.tank_attached_dude.setHeading($.heading);
                }
              }
              else {
                $.tank_attached_dude.setObjKillPlayerOnFoot($.player1);
              }
            }
            else {
              if ($.attack_player == 0) {
                if ($.tank_attached_dude_flag == 0) {
                  $.convoy_stop_flag = 1;
                  $.tank_attached_dude_flag = 1;
                  $.tank_attached_dude_timer = $.game_timer + 2000;
                }
                if ($.tank_attached_dude_flag == 1) {
                  if ($.game_timer > $.tank_attached_dude_timer) {
                    if ($.audio_12_flag == 0) {
                      $.audio_12_flag = 1;
                      $.audio_12_timeout = $.game_timer + 6000;
                    }
                    if ($.audio_21_flag == 0) {
                      $.audio_21_flag = 1;
                      $.audio_21_timeout = $.game_timer + 8000;
                    }
                    $.tank_attached_dude_flag = 2;
                  }
                }
                if ($.tank_attached_dude_flag == 2) {
                  if (!(Char.IsDead($.tank_dude1))) {
                    const _res220 = $.tank.getOffsetInWorldCoords(-5.0, 0.0, 0.0);
$.x = _res220.x;
$.y = _res220.y;
$.z = _res220.z;
                    $.tank_dude1.setObjRunToCoord($.x, $.y);
                    $.tank.lockDoors(1 /* CARLOCK_UNLOCKED */);
                    $.unlock_tank_flag = 2;
                    if ($.tank_dude1.locateOnFoot2D($.x, $.y, 1.0, 1.0, false)) {
                      $.tank_dude1.setObjNoObj();
                      const _res221 = $.tank.getCoordinates();
$.x = _res221.x;
$.y = _res221.y;
$.z = _res221.z;
                      if ($.audio_8_flag == 0) {
                        $.audio_8_flag = 1;
                        $.audio_8_timeout = $.game_timer + 6000;
                      }
                      $.tank_dude1.turnToFaceCoord($.x, $.y, $.z);
                      $.tank_attached_dude_flag = 3;
                      $.tank_attached_dude_timer = $.game_timer + 2000;
                    }
                  }
                }
                if ($.tank_attached_dude_flag == 3) {
                  if ($.game_timer > $.tank_attached_dude_timer) {
                    if ($.attack_player == 0) {
                      $.attack_player = 1;
                    }
                  }
                }
              }
              else {
                $.tank_attached_dude.detachFromCar();
              }
            }
          }
          if ($.attack_player == 0) {


            if ($.formation_ped1_counter == 0) {
              if (!(Char.IsDead($.formation_ped1))) {
                const _res222 = $.tank.getOffsetInWorldCoords(5.0, 2.0, 0.0);
$.x = _res222.x;
$.y = _res222.y;
$.z = _res222.z;
                if ($.convoy_stop_flag == 0) {
                  $.formation_ped1.setUsePednodeSeek(false /* FALSE */);
                  $.formation_ped1.setObjRunToCoord($.x, $.y);
                  $.formation_ped1.setUsePednodeSeek(false /* FALSE */);
                }
              }
              else {
                if (!($.formation_ped1_counter == 3)) {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
              }
            }
            if ($.formation_ped2_counter == 0) {
              if (!(Char.IsDead($.formation_ped2))) {
                const _res223 = $.tank.getOffsetInWorldCoords(5.0, -1.0, 0.0);
$.x = _res223.x;
$.y = _res223.y;
$.z = _res223.z;
                $.formation_ped2.setUsePednodeSeek(false /* FALSE */);
                $.formation_ped2.setObjRunToCoord($.x, $.y);
                $.formation_ped2.setUsePednodeSeek(false /* FALSE */);
              }
              else {
                if (!($.formation_ped2_counter == 3)) {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
              }
            }
            if ($.formation_ped3_counter == 0) {
              if (!(Char.IsDead($.formation_ped3))) {
                if ($.escort1_has_been_rammed_by_player == 1 || $.escort2_has_been_rammed_by_player == 1 || $.escort3_has_been_rammed_by_player == 1) {
                  if ($.done_this_audio_bit == 0) {
                    if ($.audio_19_flag == 0) {
                      $.audio_19_flag = 1;
                      $.audio_19_timeout = $.game_timer + 6000;
                    }
                    $.done_this_audio_bit = 1;
                  }
                  $.formation_ped3.setStayInSamePlace(true /* TRUE */);
                  if ($.player1.isInAnyCar()) {
                    $.players_car = $.player1.storeCarIsInNoSave();
                    $.formation_ped3.setObjDestroyCar($.players_car);
                  }
                  else {
                    $.formation_ped3.setObjKillPlayerOnFoot($.player1);
                  }
                  if ($.rammed_attack_timer < $.game_timer) {
                    $.escort1_has_been_rammed_by_player = 0;
                    $.escort2_has_been_rammed_by_player = 0;
                    $.escort3_has_been_rammed_by_player = 0;
                    $.done_this_audio_bit = 0;
                  }
                }
                else {
                  $.formation_ped3.setStayInSamePlace(false /* FALSE */);
                  $.rammed_attack_timer = $.game_timer + 6000;
                  const _res224 = $.tank.getOffsetInWorldCoords(5.0, -4.0, 0.0);
$.x = _res224.x;
$.y = _res224.y;
$.z = _res224.z;
                  $.formation_ped3.setUsePednodeSeek(false /* FALSE */);
                  $.formation_ped3.setObjRunToCoord($.x, $.y);
                  $.formation_ped3.setUsePednodeSeek(false /* FALSE */);
                }
              }
              else {
                if (!($.formation_ped3_counter == 3)) {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
              }
            }
            if ($.tank.locate2D(-860.463, -204.449, 8.0, 75.0, false)) {
              $.next_to_centres = 1;
            }
            else {
              $.next_to_centres = 0;
            }
            if ($.formation_ped4_counter == 0) {
              if (!(Char.IsDead($.formation_ped4))) {
                if ($.next_to_centres == 1) {
                  const _res225 = $.tank.getOffsetInWorldCoords(-3.5, -4.0, 0.0);
$.x = _res225.x;
$.y = _res225.y;
$.z = _res225.z;
                }
                else {
                  const _res226 = $.tank.getOffsetInWorldCoords(-5.0, 2.0, 0.0);
$.x = _res226.x;
$.y = _res226.y;
$.z = _res226.z;
                }
                if ($.convoy_stop_flag == 0) {
                  $.formation_ped4.setUsePednodeSeek(false /* FALSE */);
                  $.formation_ped4.setObjRunToCoord($.x, $.y);
                  $.formation_ped4.setUsePednodeSeek(false /* FALSE */);
                }
              }
              else {
                if (!($.formation_ped4_counter == 3)) {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
              }
            }
            if ($.formation_ped5_counter == 0) {
              if (!(Char.IsDead($.formation_ped5))) {
                if ($.escort1_has_been_rammed_by_player == 1 || $.escort2_has_been_rammed_by_player == 1 || $.escort3_has_been_rammed_by_player == 1) {
                  if (Char.IsDead($.formation_ped3)) {
                    if ($.done_this_audio_bit == 0) {
                      if ($.audio_19_flag == 0) {
                        $.audio_19_flag = 1;
                        $.audio_19_timeout = $.game_timer + 6000;
                      }
                      $.done_this_audio_bit = 1;
                    }
                  }
                  $.formation_ped5.setStayInSamePlace(true /* TRUE */);
                  if ($.player1.isInAnyCar()) {
                    $.players_car = $.player1.storeCarIsInNoSave();
                    $.formation_ped5.setObjDestroyCar($.players_car);
                  }
                  else {
                    $.formation_ped5.setObjKillPlayerOnFoot($.player1);
                  }
                  if (Char.IsDead($.formation_ped3)) {
                    if ($.rammed_attack_timer < $.game_timer) {
                      $.escort1_has_been_rammed_by_player = 0;
                      $.escort2_has_been_rammed_by_player = 0;
                      $.escort3_has_been_rammed_by_player = 0;
                      $.done_this_audio_bit = 0;
                    }
                  }
                }
                else {
                  if (Char.IsDead($.formation_ped3)) {
                    $.rammed_attack_timer = $.game_timer + 6000;
                  }
                  else {
                    $.formation_ped3.setStayInSamePlace(false /* FALSE */);
                  }
                  if ($.next_to_centres == 1) {
                    const _res227 = $.tank.getOffsetInWorldCoords(-3.5, -1.0, 0.0);
$.x = _res227.x;
$.y = _res227.y;
$.z = _res227.z;
                  }
                  else {
                    const _res228 = $.tank.getOffsetInWorldCoords(-5.0, -1.0, 0.0);
$.x = _res228.x;
$.y = _res228.y;
$.z = _res228.z;
                  }
                  $.formation_ped5.setUsePednodeSeek(false /* FALSE */);
                  $.formation_ped5.setObjRunToCoord($.x, $.y);
                  $.formation_ped5.setUsePednodeSeek(false /* FALSE */);
                }
              }
              else {
                if (!($.formation_ped5_counter == 3)) {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
              }
            }
            if ($.formation_ped6_counter == 0) {
              if (!(Char.IsDead($.formation_ped6))) {
                if ($.next_to_centres == 1) {
                  const _res229 = $.tank.getOffsetInWorldCoords(-3.5, 2.0, 0.0);
$.x = _res229.x;
$.y = _res229.y;
$.z = _res229.z;
                }
                else {
                  const _res230 = $.tank.getOffsetInWorldCoords(-5.0, -4.0, 0.0);
$.x = _res230.x;
$.y = _res230.y;
$.z = _res230.z;
                }
                $.formation_ped6.setUsePednodeSeek(false /* FALSE */);
                $.formation_ped6.setObjRunToCoord($.x, $.y);
                $.formation_ped6.setUsePednodeSeek(false /* FALSE */);
              }
              else {
                if (!($.formation_ped6_counter == 3)) {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
              }
            }
            if (!(Char.IsDead($.tank_dude2))) {
              if ($.tank_dude2_counter == 0) {
                if ($.tank_dude2_obstruction_flag == 5) {
                  if ($.tank_dude2.isInCar($.tank)) {
                    $.tank_dude2_obstruction_flag = 0;
                    if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
                      $.convoy_stop_flag = 0;
                    }
                  }
                  else {
                    if ($.tank_dude2.isInAnyCar()) {
                      $.tank_dude2_car = $.tank_dude2.storeCarIsInNoSave();
                      $.tank_dude2.setObjLeaveCar($.tank_dude2_car);
                    }
                    else {
                      $.tank_dude2.setObjEnterCarAsPassenger($.tank);
                    }
                  }
                }
              }
            }
            else {
              if (!($.tank_dude2_counter == 3)) {
                if ($.attack_player == 0) {
                  $.attack_player = 1;
                }
              }
            }
          }
          else {
            if ($.unlock_tank_flag == 0) {
              $.unlock_tank_timer = $.game_timer + 100000;
              $.unlock_tank_flag = 1;
            }
            if ($.unlock_tank_flag == 1) {
              if (Car.IsDead($.escort1)) {
                if (Car.IsDead($.escort2)) {
                  if (Car.IsDead($.escort3)) {
                    if (Char.IsDead($.formation_ped1)) {
                      if (Char.IsDead($.formation_ped2)) {
                        if (Char.IsDead($.formation_ped3)) {
                          if (Char.IsDead($.formation_ped4)) {
                            if (Char.IsDead($.formation_ped5)) {
                              if (Char.IsDead($.formation_ped6)) {
                                $.unlock_tank_timer = $.game_timer - 500;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              if ($.game_timer > $.unlock_tank_timer) {
                if (!(Char.IsDead($.tank_dude1))) {
                  $.tank_dude1.setObjFleePlayerOnFootTillSafe($.player1);
                }
                if (!(Char.IsDead($.tank_dude2))) {
                  $.tank_dude2.setObjFleePlayerOnFootTillSafe($.player1);
                }
                if ($.audio_7_flag == 0) {
                  $.audio_7_flag = 1;
                  $.audio_7_timeout = $.game_timer + 6000;
                }
                $.tank.lockDoors(1 /* CARLOCK_UNLOCKED */);
                $.unlock_tank_flag = 2;
              }
            }
            if (!(Char.IsDead($.formation_ped1))) {
              $.formation_ped1.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead($.formation_ped2))) {
              $.formation_ped2.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead($.formation_ped3))) {
              $.formation_ped3.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead($.formation_ped4))) {
              $.formation_ped4.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead($.formation_ped5))) {
              $.formation_ped5.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead($.formation_ped6))) {
              $.formation_ped6.setObjKillPlayerOnFoot($.player1);
            }
          }
          if ($.attack_player == 0) {

            //SNIPED IN CARS CHECK
            if (!(Char.IsDead($.tank_dude1))) {
              if ($.tank_dude1.isLeavingVehicleToDie()) {
                if (!(Char.IsDead($.tank_dude2))) {
                  $.tank_dude2.setObjFleePlayerOnFootTillSafe($.player1);
                  $.tank.lockDoors(1 /* CARLOCK_UNLOCKED */);
                  $.unlock_tank_flag = 2;
                  if ($.audio_6_flag == 0) {
                    $.audio_6_flag = 1;
                    $.audio_6_timeout = $.game_timer + 6000;
                  }
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
              }
            }

            //SNIPED IN CARS CHECK
            if (!(Char.IsDead($.tank_dude2))) {
              if ($.tank_dude2.isLeavingVehicleToDie()) {
                if (!(Char.IsDead($.tank_dude1))) {
                  $.tank_dude1.setObjFleePlayerOnFootTillSafe($.player1);
                  $.tank.lockDoors(1 /* CARLOCK_UNLOCKED */);
                  $.unlock_tank_flag = 2;
                  if ($.audio_6_flag == 0) {
                    $.audio_6_flag = 1;
                    $.audio_6_timeout = $.game_timer + 6000;
                  }
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
              }

              //STOP FOR DOUGHNUTS STUFF
              if ($.donut_stop_flag == 0) {
                if ($.tank.locate2D(-834.422, -634.884, 5.0, 5.0, false)) {
                  $.convoy_stop_flag = 1;
                  if ($.tank_dude2_obstruction_flag == 0) {
                    $.tank.lockDoors(1 /* CARLOCK_UNLOCKED */);
                    $.unlock_tank_flag = 2;
                    if ($.audio_9_flag == 0) {
                      $.audio_9_flag = 1;
                      $.audio_9_timeout = $.game_timer + 6000;
                    }
                    $.tank_dude2.setObjRunToCoord(-844.5248, -639.3130);
                    $.donut_stop_flag = 1;
                  }
                }
              }
              if ($.donut_stop_flag == 1) {
                if ($.tank_dude2.locateOnFoot2D(-844.5248, -639.3130, 1.0, 1.0, false)) {
                  $.tank_dude2.setObjRunToCoord(-850.9821, -633.8697);
                  $.donut_stop_flag = 2;
                }
              }
              if ($.donut_stop_flag == 2) {
                if ($.tank_dude2.locateOnFoot2D(-850.9821, -633.8697, 1.0, 1.0, false)) {
                  //DO CHAR CHATTING STUFF
                  //CREATE_CHAR PEDTYPE_CIVMALE MALE01 -851.5631 -631.1492 10.3356 donut_dude
                  //SET_CHAR_HEADING donut_dude 190.8128 //DONUT SHOP DUDE
                  //SET_CHARS_CHATTING tank_dude2 donut_dude 2000
                  $.donut_stop_timer = $.game_timer + 2000;
                  $.donut_stop_flag = 3;
                }
              }
              if ($.donut_stop_flag == 3) {
                if ($.game_timer > $.donut_stop_timer) {
                  $.tank_dude2.setObjRunToCoord(-850.9821, -633.8697);
                  $.donut_stop_flag = 4;
                }
              }
              if ($.donut_stop_flag == 4) {
                if ($.tank_dude2.locateOnFoot2D(-850.9821, -633.8697, 1.0, 1.0, false)) {
                  $.tank_dude2.setObjRunToCoord(-844.5248, -639.3130);
                  $.donut_stop_flag = 5;
                }
              }
              if ($.donut_stop_flag == 5) {
                if ($.tank_dude2.locateOnFoot2D(-844.5248, -639.3130, 1.0, 1.0, false)) {
                  $.tank_dude2.setObjEnterCarAsPassenger($.tank);
                  $.donut_stop_flag = 6;
                }
              }
              if ($.donut_stop_flag == 6) {
                if ($.tank_dude2.isInCar($.tank)) {
                  if ($.opened_garage_stuff == 0) {
                    if ($.audio_10_flag == 0) {
                      $.audio_10_flag = 1;
                      $.audio_10_timeout = $.game_timer + 6000;
                    }
                    $.garage_col4_destination.setTargetCarForMission($.tank);
                    $.garage_col4_destination.open();
                    $.garage_guard1 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -830.7947, -1500.0537, 11.0670);
                    $.garage_guard1.setHeading(2.1778);
                    $.garage_guard1.giveWeapon(WEAPONTYPE_RUGER, 9999);
                    $.garage_guard1.clearThreatSearch();
                    $.garage_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    $.garage_guard1.setOnlyDamagedByPlayer(true /* TRUE */);
                    $.garage_guard1.setStayInSamePlace(true /* TRUE */);
                    $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
                    $.garage_guard2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, -824.3466, -1488.2743, 10.9186);
                    $.garage_guard2.setHeading(117.4210);
                    $.garage_guard2.giveWeapon(WEAPONTYPE_RUGER, 9999);
                    $.garage_guard2.clearThreatSearch();
                    $.garage_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    $.garage_guard2.setOnlyDamagedByPlayer(true /* TRUE */);
                    $.garage_guard2.setStayInSamePlace(true /* TRUE */);
                    $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
                    $.opened_garage_stuff = 1;
                  }
                  if ($.player_close_to_tank == 0) {
                    $.convoy_stop_flag = 0;
                    $.donut_stop_flag = 7;
                  }
                  $.tank.gotoCoordinatesAccurate(-838.3314, -1492.5, 11.0623);
                }
              }
            }
            else {
              if (!($.tank_dude2_counter == 3)) {
                if ($.attack_player == 0) {
                  $.attack_player = 1;
                }
              }
            }
            if ($.tank.locate2D(-838.3314, -1492.5, 3.0, 3.0, false)) {
              if ($.player_hiding_in_warehouse == 0) {
                if ($.player1.isInAngledArea3D(-823.448, -1488.083, 10.852, -841.991, -1480.591, 16.165, 30.0, false)) {
                  $.player_in_warehouse_flag = 1;
                }
                else {
                  $.player_in_warehouse_flag = 0;
                }
              }
              else {
                $.player_in_warehouse_flag = 0;
              }
            }
            else {
              $.player_in_warehouse_flag = 0;
            }

            //PLAYER CLOSE TO TANK STUFF
            if ($.formation_ped1_counter == 0) {
              if ($.formation_ped4_counter == 0) {
                if ($.player_close_to_tank == 0) {
                  if ($.player1.locateAnyMeansCar3D($.tank, 8.0, 10.0, 3.0, false) || $.player_in_warehouse_flag == 1) {
                    if ($.close_to_tank_timer < $.game_timer) {
                      const _res231 = $.formation_ped1.getCoordinates();
$.x = _res231.x;
$.y = _res231.y;
$.z = _res231.z;
                      const _res232 = $.player1.getCoordinates();
$.player_x = _res232.x;
$.player_y = _res232.y;
$.z = _res232.z;
                      $.x_temp = $.x - $.player_x;
                      $.y_temp = $.y - $.player_y;
                      $.x_temp = $.x_temp * $.x_temp;
                      $.y_temp = $.y_temp * $.y_temp;
                      $.sum_x_y_temp = $.x_temp + $.y_temp;
                      $.formation_ped1_distance = Math.Sqrt($.sum_x_y_temp);
                      const _res233 = $.formation_ped4.getCoordinates();
$.x = _res233.x;
$.y = _res233.y;
$.z = _res233.z;
                      $.x_temp = $.x - $.player_x;
                      $.y_temp = $.y - $.player_y;
                      $.x_temp = $.x_temp * $.x_temp;
                      $.y_temp = $.y_temp * $.y_temp;
                      $.sum_x_y_temp = $.x_temp + $.y_temp;
                      $.formation_ped4_distance = Math.Sqrt($.sum_x_y_temp);
                      if ($.formation_ped4_distance > $.formation_ped1_distance) {
                        $.formation_ped1.lookAtPlayerAlways($.player1);
                        $.formation_ped1_distance = -100.0;
                      }
                      else {
                        $.formation_ped4.lookAtPlayerAlways($.player1);
                        $.formation_ped4_distance = -100.0;
                      }
                      if ($.audio_13_flag == 0) {
                        $.audio_13_flag = 1;
                        $.audio_13_timeout = $.game_timer + 6000;
                      }
                      $.game_timer_start = Clock.GetGameTimer();
                      $.game_timer_start += 5000;
                      $.player_close_to_tank = 1;
                    }
                  }
                  else {
                    $.close_to_tank_timer = $.game_timer + 2000;
                  }
                }
                if ($.player_close_to_tank == 1) {
                  if ($.player1.locateAnyMeansCar3D($.tank, 8.0, 10.0, 3.0, false) || $.player_in_warehouse_flag == 1) {
                    if ($.game_timer > $.game_timer_start) {
                      if ($.convoy_stop_flag == 0) {
                        $.convoy_stop_flag = 1;
                      }
                      $.player_close_to_tank = 2;
                      if ($.formation_ped1_distance == -100.0) {
                        $.formation_ped1.setObjGotoPlayerOnFoot($.player1);
                      }
                      else {
                        $.formation_ped4.setObjGotoPlayerOnFoot($.player1);
                      }
                    }
                  }
                  else {
                    if ($.escort1_dude2_obstruction_flag == 0 && $.escort2_dude2_obstruction_flag == 0 && $.tank_dude2_obstruction_flag == 0 && $.escort3_dude2_obstruction_flag == 0) {
                      if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
                        $.convoy_stop_flag = 0;
                      }
                    }
                    $.player_close_to_tank = 0;
                  }
                }
                if ($.player_close_to_tank == 2) {
                  if ($.player1.locateAnyMeansCar3D($.tank, 8.0, 10.0, 3.0, false) || $.player_in_warehouse_flag == 1) {
                    if ($.formation_ped1_distance == -100.0) {
                      if ($.player1.locateAnyMeansChar2D($.formation_ped1, 4.0, 4.0, false)) {
                        if ($.audio_17_flag == 0) {
                          $.audio_17_flag = 1;
                          $.audio_17_timeout = $.game_timer + 6000;
                        }
                        $.game_timer_start = Clock.GetGameTimer();
                        $.game_timer_start += 6000;
                        $.player_close_to_tank = 3;
                      }
                    }
                    else {
                      if ($.player1.locateAnyMeansChar2D($.formation_ped4, 4.0, 4.0, false)) {
                        if ($.audio_17_flag == 0) {
                          $.audio_17_flag = 1;
                          $.audio_17_timeout = $.game_timer + 6000;
                        }
                        $.game_timer_start = Clock.GetGameTimer();
                        $.game_timer_start += 6000;
                        $.player_close_to_tank = 3;
                      }
                    }
                  }
                  else {
                    if ($.escort1_dude2_obstruction_flag == 0 && $.escort2_dude2_obstruction_flag == 0 && $.tank_dude2_obstruction_flag == 0 && $.escort3_dude2_obstruction_flag == 0) {
                      if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
                        $.convoy_stop_flag = 0;
                      }
                    }
                    $.player_close_to_tank = 0;
                  }
                }
                if ($.player_close_to_tank == 3) {
                  if ($.player1.locateAnyMeansCar3D($.tank, 8.0, 10.0, 3.0, false) || $.player_in_warehouse_flag == 1) {
                    if ($.game_timer > $.game_timer_start) {
                      if ($.audio_16_flag == 0) {
                        $.audio_16_flag = 1;
                        $.audio_16_timeout = $.game_timer + 6000;
                      }
                      if ($.formation_ped1_distance == -100.0) {
                        if ($.player1.isInAnyCar()) {
                          $.players_car = $.player1.storeCarIsInNoSave();
                          $.formation_ped1.setObjDestroyCar($.players_car);
                        }
                        else {
                          $.formation_ped1.setObjKillPlayerOnFoot($.player1);
                        }
                      }
                      else {
                        if ($.player1.isInAnyCar()) {
                          $.players_car = $.player1.storeCarIsInNoSave();
                          $.formation_ped4.setObjDestroyCar($.players_car);
                        }
                        else {
                          $.formation_ped4.setObjKillPlayerOnFoot($.player1);
                        }
                      }
                      if ($.player1.locateAnyMeansCar3D($.tank, 2.0, 2.0, 1.0, false)) {
                        if ($.audio_11_flag == 0) {
                          $.audio_11_flag = 1;
                          $.audio_11_timeout = $.game_timer + 6000;
                        }
                        if (!(Char.IsDead($.tank_dude2))) {
                          $.tank_dude2.setObjKillPlayerOnFoot($.player1);
                        }
                        $.tank.lockDoors(1 /* CARLOCK_UNLOCKED */);
                        $.unlock_tank_flag = 2;
                      }
                      $.player_close_to_tank = 4;
                    }
                  }
                  else {
                    if ($.escort1_dude2_obstruction_flag == 0 && $.escort2_dude2_obstruction_flag == 0 && $.tank_dude2_obstruction_flag == 0 && $.escort3_dude2_obstruction_flag == 0) {
                      if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
                        $.convoy_stop_flag = 0;
                      }
                    }
                    $.player_close_to_tank = 0;
                  }
                }
                if ($.player_close_to_tank == 4) {
                  if (!($.player1.locateAnyMeansCar3D($.tank, 8.0, 10.0, 3.0, false)) && $.player_in_warehouse_flag == 0) {
                    if (!(Char.IsDead($.tank_dude2))) {
                      if (!($.tank_dude2.isInCar($.tank))) {
                        $.tank_dude2.setObjEnterCarAsPassenger($.tank);
                      }
                    }
                    if ($.escort1_dude2_obstruction_flag == 0 && $.escort2_dude2_obstruction_flag == 0 && $.tank_dude2_obstruction_flag == 0 && $.escort3_dude2_obstruction_flag == 0) {
                      if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
                        $.convoy_stop_flag = 0;
                      }
                    }
                    $.player_close_to_tank = 0;
                  }
                }
              }
            }
          }
          else {
            if (!($.player_close_to_tank == -1)) {
              $.tank.setDrivingStyle(3);
              $.player_close_to_tank = -1;
            }
          }
          if (!($.tank.locate2D(-838.3314, -1490.4927, 50.0, 50.0, false))) {
            $.tank_not_home = 1;
          }
          else {
            $.tank_not_home = 0;
          }
          if (!($.flag_escort2_unusable == 1)) {
            $.x_temp = tank_x - escort2_x;
            $.y_temp = tank_y - escort2_y;
            $.x_temp = $.x_temp * $.x_temp;
            $.y_temp = $.y_temp * $.y_temp;
            $.sum_x_y_temp = $.x_temp + $.y_temp;
            $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
            if ($.escort2_dist_from_dest > $.tank_dist_from_dest) {
              if ($.tank_not_home == 1) {
                $.sum_x_y_temp = 5.0;
              }
              else {
                $.sum_x_y_temp = 10.0;
              }
            }
          }
          else {
            if (!($.flag_escort1_unusable == 1)) {
              $.x_temp = tank_x - escort1_x;
              $.y_temp = tank_y - escort1_y;
              $.x_temp = $.x_temp * $.x_temp;
              $.y_temp = $.y_temp * $.y_temp;
              $.sum_x_y_temp = $.x_temp + $.y_temp;
              $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
              if ($.escort1_dist_from_dest > $.tank_dist_from_dest) {
                if ($.tank_not_home == 1) {
                  $.sum_x_y_temp = 5.0;
                }
                else {
                  $.sum_x_y_temp = 10.0;
                }
              }
            }
            else {
              $.sum_x_y_temp = 12.0;
            }
          }
          $.tank_speed = $.sum_x_y_temp - 5.0;
          if ($.tank_speed > 100.0) {
            $.tank_speed = 100.0;
          }
          if ($.tank_speed < 0.0) {
            $.tank_speed = 0.0;
          }
          if ($.tank_not_home == 1) {
            $.tank_distance_from_vehicle_behind = $.escort3_dist_from_dest - $.tank_dist_from_dest;
            if ($.tank_distance_from_vehicle_behind > 20.0) {
              $.tank_speed = 0.0;
            }
          }
          if ($.convoy_stop_flag == 0) {
            if ($.tank_speed == 0.0) {
              $.tank.setTempAction(1 /* TEMPACT_WAIT */, 500);
            }
            else {
              $.tank.setCruiseSpeed($.tank_speed);
            }
          }
          else {
            $.tank_speed = 0.0;
            $.tank.setTempAction(1 /* TEMPACT_WAIT */, 500);
          }
          if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
            if (!($.tank_dude2_counter == 3)) {
              $.army_vehicle = $.tank;
              $.army_soldier = $.tank_dude2;
              army_vehicle_z = tank_z;
              await if_in_front_of_army_vehicle();  // SCM GOSUB if_in_front_of_army_vehicle
            }
          }
        }
        else {
          if (!(Char.IsDead($.tank_attached_dude))) {
            const _res234 = $.tank_attached_dude.getCoordinates();
$.x = _res234.x;
$.y = _res234.y;
$.z = _res234.z;
            $.tank_attached_dude.detachFromCar();
            $.z += 0.5;
            $.tank_attached_dude.setCoordinates($.x, $.y, $.z);
          }
          if ($.tank_mission_flag == 0) {
            if ($.audio_4_flag == 0) {
              $.audio_4_flag = 1;
              $.audio_4_timeout = $.game_timer + 6000;
            }
            $.initiate_seft_destruct_timer = $.game_timer + 6000;
            Text.PrintNow("COL4_B3", 5000, 1); //"Drop the tank off for the Colonel"
            $.print_timer = $.game_timer + 5000;
            $.tank_blip.remove();
            $.tank_blip = Blip.AddForCoord(-1053.5721, -478.0450, 11.2887);
            //SWITCH_ROADS_ON -877.0355 -1502.6396 -2.4916 -477.6842 685.0324 52.1452
            Path.SwitchRoadsOn(-721.211, 243.998, 5.0, -651.211, 693.998, 25.0);
            Path.SwitchRoadsOn(-760.362, 101.883, 5.0, -700.362, 251.883, 25.0);
            Path.SwitchRoadsOn(-783.906, -46.826, 5.0, -723.906, 103.174, 25.0);
            Path.SwitchRoadsOn(-853.397, -149.692, 5.0, -773.397, 0.308, 25.0);
            Path.SwitchRoadsOn(-870.656, -594.54, 5.0, -810.656, -144.54, 25.0);
            Path.SwitchRoadsOn(-837.282, -1041.814, 5.0, -777.282, -591.814, 25.0);
            Path.SwitchRoadsOn(-827.532, -1539.617, 5.0, -747.532, -1039.617, 25.0);
            $.players_tank = $.tank;
            $.garage_col4_dropoff.setTargetCarForMission($.players_tank);
            $.tank.setDetonateCars(true /* TRUE */);
            $.tank = -1;
            $.player_in_tank_flag = 1;
            $.attack_player = 1;
            $.tank_mission_flag = 1;
            if (!(Char.IsDead($.formation_ped1))) {
              $.formation_ped1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.formation_ped1.setObjKillPlayerOnFoot($.player1);
              $.formation_ped1.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.formation_ped2))) {
              $.formation_ped2.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.formation_ped2.setObjKillPlayerOnFoot($.player1);
              $.formation_ped2.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.formation_ped3))) {
              $.formation_ped3.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.formation_ped3.setObjKillPlayerOnFoot($.player1);
              $.formation_ped3.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.formation_ped4))) {
              $.formation_ped4.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.formation_ped4.setObjKillPlayerOnFoot($.player1);
              $.formation_ped4.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.formation_ped5))) {
              $.formation_ped5.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.formation_ped5.setObjKillPlayerOnFoot($.player1);
              $.formation_ped5.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.formation_ped6))) {
              $.formation_ped6.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.formation_ped6.setObjKillPlayerOnFoot($.player1);
              $.formation_ped6.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.tank_dude1))) {
              $.tank_dude1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.tank_dude1.setObjKillPlayerOnFoot($.player1);
              $.tank_dude1.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.tank_dude2))) {
              $.tank_dude2.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.tank_dude2.setObjKillPlayerOnFoot($.player1);
              $.tank_dude2.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.escort1_dude1))) {
              $.escort1_dude1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.escort1_dude1.setObjKillPlayerOnFoot($.player1);
              $.escort1_dude1.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.escort1_dude2))) {
              $.escort1_dude2.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.escort1_dude2.setObjKillPlayerOnFoot($.player1);
              $.escort1_dude2.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.escort2_dude2))) {
              $.escort2_dude2.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.escort2_dude2.setObjKillPlayerOnFoot($.player1);
              $.escort2_dude2.markAsNoLongerNeeded();
            }
            if (!(Char.IsDead($.escort3_dude2))) {
              $.escort3_dude2.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.escort3_dude2.setObjKillPlayerOnFoot($.player1);
              $.escort3_dude2.markAsNoLongerNeeded();
            }
            $.escort1.markAsNoLongerNeeded();
            $.escort2.markAsNoLongerNeeded();
            $.escort3.markAsNoLongerNeeded();
          }
        }
      }
      else {
        if ($.tank_mission_flag == 0) {
          Text.PrintNow("COL4_B5", 5000, 1); //"~r~The tank has been destroyed!"
          // SCM GOTO → mission_general4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_failed"); // fallback: would break linear control flow
        }
      }
    }


    //////////////////////////////////////////////////////////////////////////
    //PLAYER IN TANK BIT//////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////


    if ($.tank_mission_flag == 1) {
      if ($.garage_col4_dropoff.isCarInMission()) {
        // SCM GOTO → mission_general4_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_general4_passed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.players_tank)) {
        Text.PrintNow("COL4_B5", 5000, 1); //"~r~The tank has been destroyed!"
        // SCM GOTO → mission_general4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_general4_failed"); // fallback: would break linear control flow
      }
      if (!($.players_tank.locate2D(-1058.095, -478.054, 30.0, 30.0, false))) {
        $.player1.alterWantedLevelNoDrop(3);
      }
      else {
        $.player1.alterWantedLevel(0);
      }
      if ($.player1.isInCar($.players_tank)) {
        if ($.got_garage_help == 0) {
          if ($.player1.locateInCar3D(-1058.095, -478.054, 10.0896, 4.0, 4.0, 3.0, true)) {
            Text.PrintNow("COL4_B7", 5000, 1); //Drive the tank into the garage.
            $.print_timer = $.game_timer + 5000;
            $.got_garage_help = 1;
          }
        }
        if ($.got_garage_help == 1) {
          if ($.player1.locateInCar3D(-1043.661, -476.886, 12.038, 7.0, 8.0, 2.0, false)) {
            Text.PrintNow("COL4_B8", 5000, 1); //Get out of the tank and walk out of the garage.
            $.print_timer = $.game_timer + 5000;
            $.got_garage_help = 2;
          }
        }
        if ($.player_in_tank_flag == 0) {
          $.tank_blip.remove();
          $.tank_blip = Blip.AddForCoord(-1053.5721, -478.0450, 11.2887);
          $.player_in_tank_flag = 1;
        }
      }
      else {
        if ($.player_in_tank_flag == 1) {
          if (!($.got_garage_help == 2)) {
            $.tank_blip.remove();
            $.tank_blip = Blip.AddForCar($.players_tank);
            $.player_in_tank_flag = 0;
          }
        }
      }
      if ($.game_timer > $.initiate_seft_destruct_timer) {
        if ($.initiate_seft_destruct_flag == 0) {
          if ($.audio_1_flag == 0) {
            $.audio_1_flag = 1;
            $.audio_1_timeout = $.game_timer + 6000;
          }
          Hud.DisplayCounterWithString($.$id.tank_detonation_timer, 1 /* COUNTER_DISPLAY_BAR */, "DETON");
          $.initiate_seft_destruct_flag = 1;
        }
      }
      if ($.initiate_seft_destruct_flag > 0) {
        if ($.tank_detonation_timer_float > 100.0) {
          $.tank_detonation_timer = 100;
          $.players_tank.explode();
        }
        else {
          $.tank_detonation_timer_float += timed(0.017);
          $.tank_detonation_timer = $.tank_detonation_timer_float;
        }
        if ($.tank_detonation_timer > 95) {
          if ($.initiate_seft_destruct_flag == 1) {
            if ($.audio_2_flag == 0) {
              $.audio_2_flag = 1;
              $.audio_2_timeout = $.game_timer + 6000;
            }
            $.initiate_seft_destruct_flag = 2;
          }
        }
      }
    }


    //////////////////////////////////////////////////////////////////////////
    //WAREHOUSE STUFF/////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    if ($.opened_garage_stuff > 0) {
      if ($.player1.isInAngledArea3D(-823.448, -1488.083, 10.852, -841.991, -1480.591, 16.165, 30.0, false)) {
        if ($.player1.locateAnyMeans3D(-833.708, -1509.877, 12.489, 4.0, 6.0, 1.5, false)) {
          if (!(Char.IsDead($.garage_guard1))) {
            if ($.garage_guard1_flag == 0) {
              $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
              $.garage_guard1.setObjRunToCoord(-838.6741, -1498.0697);
              $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
              $.garage_guard1_flag = 1;
            }
            if ($.garage_guard1_flag == 1) {
              if ($.garage_guard1.locateOnFoot2D(-838.6741, -1498.0697, 1.0, 1.0, false)) {
                $.garage_guard1.setObjRunToCoord(-845.7342, -1501.9176);
                $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
                $.garage_guard1_flag = 2;
              }
            }
            if ($.garage_guard1_flag == 2) {
              if ($.garage_guard1.locateOnFoot2D(-845.7342, -1501.9176, 1.0, 1.0, false)) {
                $.garage_guard1.setObjKillPlayerOnFoot($.player1);
                $.garage_guard1_flag = 3;
              }
            }
          }
          else {
            $.garage_guard1.markAsNoLongerNeeded();
            if (!(Char.IsDead($.garage_guard2))) {
              if ($.garage_guard2_flag == 0) {
                $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
                $.garage_guard2.setObjRunToCoord(-838.6741, -1498.0697);
                $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
                $.garage_guard2_flag = 1;
              }
              if ($.garage_guard2_flag == 1) {
                if ($.garage_guard2.locateOnFoot2D(-838.6741, -1498.0697, 1.0, 1.0, false)) {
                  $.garage_guard2.setObjRunToCoord(-845.7342, -1501.9176);
                  $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
                  $.garage_guard2_flag = 2;
                }
              }
              if ($.garage_guard2_flag == 2) {
                if ($.garage_guard2.locateOnFoot2D(-845.7342, -1501.9176, 1.0, 1.0, false)) {
                  $.garage_guard2.setObjKillPlayerOnFoot($.player1);
                  $.garage_guard2_flag = 3;
                }
              }
            }
            else {
              $.garage_guard2.markAsNoLongerNeeded();
              $.player_hiding_in_warehouse = 1;
            }
          }
        }
        else {
          if (!(Char.IsDead($.garage_guard1))) {
            $.garage_guard1.setObjKillPlayerOnFoot($.player1);
          }
          else {
            $.garage_guard1.markAsNoLongerNeeded();
          }
          if (!(Char.IsDead($.garage_guard2))) {
            $.garage_guard2.setObjKillPlayerOnFoot($.player1);
          }
          else {
            $.garage_guard2.markAsNoLongerNeeded();
          }
          $.player_hiding_in_warehouse = 0;
        }
      }
      else {
        if (!(Char.IsDead($.garage_guard1))) {
          if ($.garage_guard1_flag == 0) {
            if ($.garage_guard1.locateOnFoot2D(-830.7947, -1500.0537, 1.0, 1.0, false)) {
              $.garage_guard1.setObjNoObj();
              $.garage_guard1.setHeading(2.1778);
            }
          }
          if ($.garage_guard1_flag == 1) {
            $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard1.setObjRunToCoord(-830.7947, -1500.0537);
            $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard1_flag = 0;
          }
          if ($.garage_guard1_flag == 3) {
            $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard1.setObjRunToCoord(-839.5587, -1496.7245);
            $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard1_flag = 2;
          }
          if ($.garage_guard1_flag == 2) {
            $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard1.setObjRunToCoord(-839.5587, -1496.7245);
            $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
            if ($.garage_guard1.locateOnFoot2D(-839.5587, -1496.7245, 1.0, 1.0, false)) {
              $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
              $.garage_guard1.setObjRunToCoord(-830.7947, -1500.0537);
              $.garage_guard1.setUsePednodeSeek(false /* FALSE */);
              $.garage_guard1_flag = 0;
            }
          }
        }
        else {
          $.garage_guard1.markAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.garage_guard2))) {
          if ($.garage_guard2_flag == 0) {
            if ($.garage_guard2.locateOnFoot2D(-824.3466, -1488.2743, 1.0, 1.0, false)) {
              $.garage_guard2.setObjNoObj();
              $.garage_guard2.setHeading(117.4210);
            }
          }
          if ($.garage_guard2_flag == 1) {
            $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard2.setObjRunToCoord(-824.3466, -1488.2743);
            $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard2_flag = 0;
          }
          if ($.garage_guard2_flag == 3) {
            $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard2.setObjRunToCoord(-839.5587, -1496.7245);
            $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard2_flag = 2;
          }
          if ($.garage_guard2_flag == 2) {
            $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
            $.garage_guard2.setObjRunToCoord(-839.5587, -1496.7245);
            $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
            if ($.garage_guard2.locateOnFoot2D(-839.5587, -1496.7245, 1.0, 1.0, false)) {
              $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
              $.garage_guard2.setObjRunToCoord(-824.3466, -1488.2743);
              $.garage_guard2.setUsePednodeSeek(false /* FALSE */);
              $.garage_guard2_flag = 0;
            }
          }
        }
        else {
          $.garage_guard2.markAsNoLongerNeeded();
        }
      }
    }

    //-826.4618 -1493.2281//1ST GOTO
    //-823.1886 -1494.2570//2ND GOTO

    if ($.dudes_go_into_doorway == 1) {
      if ($.audio_3_flag == 0) {
        $.audio_3_flag = 1;
        $.audio_3_timeout = $.game_timer + 6000;
      }
      if (!(Char.IsDead($.formation_ped1))) {
        $.gosub_armydude = $.formation_ped1;
        $.gosub_armydude_counter = $.formation_ped1_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.formation_ped1_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.formation_ped1_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.formation_ped2))) {
        $.gosub_armydude = $.formation_ped2;
        $.gosub_armydude_counter = $.formation_ped2_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.formation_ped2_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.formation_ped2_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.formation_ped3))) {
        $.gosub_armydude = $.formation_ped3;
        $.gosub_armydude_counter = $.formation_ped3_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.formation_ped3_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.formation_ped3_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.formation_ped4))) {
        $.gosub_armydude = $.formation_ped4;
        $.gosub_armydude_counter = $.formation_ped4_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.formation_ped4_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.formation_ped4_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.formation_ped5))) {
        $.gosub_armydude = $.formation_ped5;
        $.gosub_armydude_counter = $.formation_ped5_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.formation_ped5_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.formation_ped5_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.formation_ped6))) {
        $.gosub_armydude = $.formation_ped6;
        $.gosub_armydude_counter = $.formation_ped6_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.formation_ped6_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.formation_ped6_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.escort1_dude1))) {
        $.gosub_armydude = $.escort1_dude1;
        $.gosub_armydude_counter = $.escort1_dude1_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.escort1_dude1_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.escort1_dude1_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.escort1_dude2))) {
        $.gosub_armydude = $.escort1_dude2;
        $.gosub_armydude_counter = $.escort1_dude2_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.escort1_dude2_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.escort1_dude2_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.tank_dude1))) {
        $.gosub_armydude = $.tank_dude1;
        $.gosub_armydude_counter = $.tank_dude1_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.tank_dude1_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.tank_dude1_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.tank_dude2))) {
        $.gosub_armydude = $.tank_dude2;
        $.gosub_armydude_counter = $.tank_dude2_counter;
        await armydudes_go_into_doorway();  // SCM GOSUB armydudes_go_into_doorway
        $.tank_dude2_counter = $.gosub_armydude_counter;
      }
      else {
        if (!($.tank_dude2_counter == 3)) {
          $.attack_player = 1;
        }
      }
      if (!(Char.IsDead($.tank_attached_dude))) {


        if ($.tank_attached_dude_counter == 0) {
          $.tank_attached_dude.detachFromCar();
          const _res235 = $.tank_attached_dude.getCoordinates();
$.x = _res235.x;
$.y = _res235.y;
$.z = _res235.z;
          $.z += 1.0;
          $.tank_attached_dude.setCoordinates($.x, $.y, $.z);
          $.tank_attached_dude.setHeedThreats(true /* TRUE */);
          $.tank_attached_dude.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.tank_attached_dude.setObjRunToCoord(-829.7494, -1491.9958);
          $.tank_attached_dude.setUsePednodeSeek(false /* FALSE */);
          $.tank_attached_dude_counter = 1;
        }
        if ($.tank_attached_dude_counter == 1) {
          if ($.tank_attached_dude.isObjNoObj()) {
            $.tank_attached_dude.setObjRunToCoord(-829.7494, -1491.9958);
            $.tank_attached_dude.setUsePednodeSeek(false /* FALSE */);
          }
          if ($.tank_attached_dude.locateOnFoot2D(-829.7494, -1491.9958, 1.0, 1.0, false)) {
            $.tank_attached_dude.setObjRunToCoord(-826.0425, -1493.5173);
            $.tank_attached_dude.setUsePednodeSeek(false /* FALSE */);
            $.tank_attached_dude_counter = 2;
          }
        }
        if ($.tank_attached_dude_counter == 2) {
          if ($.tank_attached_dude.isObjNoObj()) {
            $.tank_attached_dude.setObjRunToCoord(-826.0425, -1493.5173);
            $.tank_attached_dude.setUsePednodeSeek(false /* FALSE */);
          }
          if ($.tank_attached_dude.locateOnFoot2D(-826.0425, -1493.5173, 1.0, 1.0, false)) {
            $.tank_attached_dude.delete();
            $.tank_attached_dude_counter = 3;
          }
        }
      }
      else {
        if (!($.tank_attached_dude_counter == 3)) {
          $.attack_player = 1;
        }
      }
    }
    //////////////////////////////////////////////////////////////////////////
    //ESCORT3 STUFF///////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    if ($.frame_counter == 3) {
      if (!(Car.IsDead($.escort3))) {
        if (!($.player1.isInCar($.escort3))) {
          if (!(Char.IsDead($.escort3_dude1))) {
            if ($.escort3_dude1.isInCar($.escort3)) {
              [escort3_x, escort3_y, escort3_z] = $.escort3.getCoordinates();
              $.x_temp = escort3_x - -837.0244;
              $.y_temp = escort3_y - -1509.2794;
              $.x_temp = $.x_temp * $.x_temp;
              $.y_temp = $.y_temp * $.y_temp;
              $.sum_x_y_temp = $.x_temp + $.y_temp;
              $.escort3_dist_from_dest = Math.Sqrt($.sum_x_y_temp);
              if ($.attack_player == 0) {
                if (!(Char.IsDead($.escort3_dude2))) {
                  if ($.escort3_dude2_obstruction_flag == 5) {
                    if ($.escort3_dude2.isInCar($.escort3)) {
                      $.escort3_dude2_obstruction_flag = 0;
                      if ($.donut_stop_flag == 0 || $.donut_stop_flag == 7) {
                        $.convoy_stop_flag = 0;
                      }
                    }
                    else {
                      if ($.escort3_dude2.isInAnyCar()) {
                        $.escort3_dude2_car = $.escort3_dude2.storeCarIsInNoSave();
                        $.escort3_dude2.setObjLeaveCar($.escort3_dude2_car);
                      }
                      else {
                        $.escort3_dude2.setObjEnterCarAsPassenger($.escort3);
                      }
                    }
                  }
                }
                else {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
                if (Char.IsDead($.escort3_dude1)) {
                  if ($.attack_player == 0) {
                    $.attack_player = 1;
                  }
                }
                if ($.escort3.hasBeenDamagedByWeapon(16 /* WEAPONTYPE_RAMMEDBYCAR */)) {
                  if ($.player1.locateAnyMeansCar2D($.escort3, 20.0, 20.0, false)) {
                    $.escort3_has_been_rammed_by_player = 1;
                  }
                }
                if ($.escort3.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
                  $.escort3_health = $.escort3.getHealth();
                  if ($.escort3_health < 800) {
                    $.attack_player = 1;
                  }
                }
                $.escort3.clearLastWeaponDamage();
                $.x_temp = escort3_x - tank_x;
                $.y_temp = escort3_y - tank_y;
                $.x_temp = $.x_temp * $.x_temp;
                $.y_temp = $.y_temp * $.y_temp;
                $.sum_x_y_temp = $.x_temp + $.y_temp;
                $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
                escort3_speed = $.sum_x_y_temp - 4.0;
                if (escort3_speed > 100.0) {
                  escort3_speed = 100.0;
                }
                if (escort3_speed < 0.0) {
                  escort3_speed = 0.0;
                }
                if (!($.escort3.locate2D(-838.3314, -1490.4927, 50.0, 50.0, false))) {
                  if ($.tank_dist_from_dest > $.escort3_dist_from_dest) {
                    escort3_speed = 0.0;
                  }
                }
                else {
                  $.escort3.setStraightLineDistance(40);
                }
                //IF donut_stop_flag = 0
                //OR donut_stop_flag = 7
                $.army_vehicle = $.escort3;
                $.army_soldier = $.escort3_dude2;
                army_vehicle_z = escort3_z;
                await if_in_front_of_army_vehicle();  // SCM GOSUB if_in_front_of_army_vehicle
                //ENDIF

                if ($.convoy_stop_flag == 0) {
                  if (escort3_speed == 0.0) {
                    $.escort3.setTempAction(1 /* TEMPACT_WAIT */, 500);
                  }
                  else {
                    $.escort3.setCruiseSpeed(escort3_speed);
                  }
                }
                else {
                  escort3_speed = 0.0;
                  $.escort3.setTempAction(1 /* TEMPACT_WAIT */, 500);
                }
              }
              else {
                if ($.player_nearish_to_tank_flag == 1) {
                  if ($.escort3_attack_player == 2 || $.escort3_attack_player == 3) {
                    $.escort3_attack_player = 0;
                  }
                  if ($.escort3_attack_player == 0) {
                    $.escort3.setCruiseSpeed(100.0);
                    $.escort3.setDrivingStyle(2);
                    $.escort3.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                    $.escort3_attack_player = 1;
                  }
                  if ($.escort3_attack_player == 1) {
                    if ($.escort3_ram_player_counter == 10) {
                      if ($.player1.locateAnyMeansCar2D($.escort3, 20.0, 20.0, false)) {
                        if (!(Char.IsDead($.escort3_dude2))) {
                          $.escort3_dude2.setObjKillPlayerOnFoot($.player1);
                        }
                      }
                      $.escort3_ram_player_counter = 0;
                    }
                    else {
                      ++$.escort3_ram_player_counter;
                    }
                  }
                }
                else {
                  if ($.escort3_attack_player == 0 || $.escort3_attack_player == 1) {
                    $.escort3_attack_player = 2;
                  }
                  if ($.escort3_attack_player == 2) {
                    $.escort3.setCruiseSpeed(100.0);
                    $.escort3.setDrivingStyle(2);
                    $.escort3.gotoCoordinates(tank_x, tank_y, tank_z);
                    $.escort3_attack_player = 3;
                  }
                  if ($.escort3_attack_player == 3) {
                    if ($.escort3.locate2D(tank_x, tank_y, 20.0, 20.0, false)) {
                      $.escort3.setMission(11 /* MISSION_STOP_FOREVER */);
                      $.escort3.setTempAction(1 /* TEMPACT_WAIT */, 500);
                    }
                  }
                }
              }
            }
            else {
              if ($.attack_player == 0) {
                $.attack_player = 1;
              }
            }
          }
          else {
            if ($.attack_player == 0) {
              $.attack_player = 1;
            }
          }
        }
        else {
          $.escort3.setOnlyDamagedByPlayer(false /* FALSE */);
          if (!(Char.IsDead($.escort3_dude1))) {
            $.escort3_dude1.setObjKillPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.escort3_dude2))) {
            $.escort3_dude2.setObjKillPlayerOnFoot($.player1);
          }
          if ($.attack_player == 0) {
            $.attack_player = 1;
          }
        }
      }
      else {
        if ($.attack_player == 0) {
          $.attack_player = 1;
        }
      }

      //////////////////////////////////////////////////////////////////////////
      //SHOOTING FROM ESCORT3 STUFF/////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
      $.shooting_ped = $.escort3_attached_01;
      $.shooting_peds_car = $.escort3;
      $.shooting_peds_car_driver = $.escort3_dude1;
      $.shooting_ped_flag = $.escort3_attached_01_flag;
      await shooting_from_vehicle_stuff();  // SCM GOSUB shooting_from_vehicle_stuff
      $.escort3_attached_01_flag = $.shooting_ped_flag;
      $.shooting_ped = $.escort3_attached_02;
      $.shooting_peds_car = $.escort3;
      $.shooting_peds_car_driver = $.escort3_dude1;
      $.shooting_ped_flag = $.escort3_attached_02_flag;
      await shooting_from_vehicle_stuff();  // SCM GOSUB shooting_from_vehicle_stuff
      $.escort3_attached_02_flag = $.shooting_ped_flag;
      $.shooting_ped = $.escort3_attached_03;
      $.shooting_peds_car = $.escort3;
      $.shooting_peds_car_driver = $.escort3_dude1;
      $.shooting_ped_flag = $.escort3_attached_03_flag;
      await shooting_from_vehicle_stuff();  // SCM GOSUB shooting_from_vehicle_stuff
      $.escort3_attached_03_flag = $.shooting_ped_flag;
      $.shooting_ped = $.escort3_attached_04;
      $.shooting_peds_car = $.escort3;
      $.shooting_peds_car_driver = $.escort3_dude1;
      $.shooting_ped_flag = $.escort3_attached_04_flag;
      await shooting_from_vehicle_stuff();  // SCM GOSUB shooting_from_vehicle_stuff
      $.escort3_attached_04_flag = $.shooting_ped_flag;


    }

    //////////////////////////////////////////////////////////////////////////
    //AUDIO STUFF/////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////


    if (!($.convoy_stop_flag == $.last_convoy_stop_flag)) {
      $.last_convoy_stop_flag = $.convoy_stop_flag;
      if ($.convoy_stop_flag == 1) {
        if ($.audio_14_flag == 0) {
          $.audio_14_flag = 1;
          $.audio_14_timeout = $.game_timer + 6000;
        }
      }
      else {
        if ($.audio_15_flag == 0) {
          $.audio_15_flag = 1;
          $.audio_15_timeout = $.game_timer + 6000;
        }
      }
    }


    if ($.audio_1_flag > 0) {
      if ($.audio_1_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_24");
          $.audio_1_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_1_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_24", 10000, 1); //Security protocol Delta India Echo triggered! Vehicle self destruct initiated!
          }
          $.audio_1_flag = 3;
        }
      }
      if ($.audio_1_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_24" as any);
          $.audio_1_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_1_timeout) {
            $.audio_1_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_1_flag > 0) {
        if ($.audio_1_flag > 1) {
          $.audio_1_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_1_flag = 0;
        }
      }
    }


    if ($.audio_2_flag > 0) {
      if ($.audio_2_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_26");
          $.audio_2_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_2_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_26", 10000, 1); //Prepare to die Communist scum!
          }
          $.audio_2_flag = 3;
        }
      }
      if ($.audio_2_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_26" as any);
          $.audio_2_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_2_timeout) {
            $.audio_2_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_2_flag > 0) {
        if ($.audio_2_flag > 1) {
          $.audio_2_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_2_flag = 0;
        }
      }
    }


    if ($.audio_3_flag > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_3_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_23");
          $.audio_3_flag = 4;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_3_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_23", 10000, 1); //Sergeant: Objective completed! Platoon dismissed! - Marine: Lets go eat some of those doughnuts.
          }
          $.audio_3_flag = 3;
        }
      }
      if ($.audio_3_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_23" as any);
          $.audio_3_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_3_timeout) {
            $.audio_3_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_3_flag > 0) {
        if ($.audio_3_flag > 1) {
          $.audio_3_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_3_flag = 0;
        }
      }
    }



    if ($.audio_4_flag > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_4_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_12");
          $.audio_4_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_4_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_12", 10000, 1); //Marine: Someone's in the TANK!  STOP HIM!
          }
          $.audio_4_flag = 3;
        }
      }
      if ($.audio_4_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_12" as any);
          $.audio_4_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_4_timeout) {
            $.audio_4_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_4_flag > 0) {
        if ($.audio_4_flag > 1) {
          $.audio_4_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_4_flag = 0;
        }
      }
    }


    if ($.audio_6_flag > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_6_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_21");
          $.audio_6_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_6_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_21", 10000, 1); //Marine: SNIPER! AAARRRRGGGGHHHhhhhhhh! (as the other passenger runs away)
          }
          $.audio_6_flag = 3;
        }
      }
      if ($.audio_6_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_21" as any);
          $.audio_6_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_6_timeout) {
            $.audio_6_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_6_flag > 0) {
        if ($.audio_6_flag > 1) {
          $.audio_6_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_6_flag = 0;
        }
      }
    }


    if ($.audio_7_flag > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_7_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_22");
          $.audio_7_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_7_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_22", 10000, 1); //Sergeant: I'm getting out of here, AAARRRRGGGGHHHhhhhhhh!
          }
          $.audio_7_flag = 3;
        }
      }
      if ($.audio_7_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_22" as any);
          $.audio_7_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_7_timeout) {
            $.audio_7_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_7_flag > 0) {
        if ($.audio_7_flag > 1) {
          $.audio_7_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_7_flag = 0;
        }
      }
    }


    if ($.attack_player > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_5_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_9");
          $.audio_5_flag = 4;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_5_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_9", 10000, 1); //Sergeant: We are under attack.  DEFENSIVE POSITIONS!
          }
          $.audio_5_flag = 3;
        }
      }
      if ($.audio_5_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_9" as any);
          $.audio_5_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_5_timeout) {
            $.audio_5_flag = 0;
          }
        }
      }
      if ($.audio_5_flag == 0) {
        $.audio_5_timeout = $.game_timer + 6000;
        $.audio_5_flag = 1;
      }
    }
    else {
      if ($.audio_5_flag > 0) {
        if ($.audio_5_flag > 1) {
          if (!($.audio_5_flag == 4)) {
            $.audio_5_flag = 0;
          }
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_5_flag = 0;
        }
      }
    }


    if ($.audio_8_flag > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_8_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_6");
          $.audio_8_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_8_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_6", 10000, 1); //Marine: The gunner is dead, WE ARE UNDER ATTACK!
          }
          $.audio_8_flag = 3;
        }
      }
      if ($.audio_8_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_6" as any);
          $.audio_8_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_8_timeout) {
            $.audio_8_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_8_flag > 0) {
        if ($.audio_8_flag > 1) {
          $.audio_8_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_8_flag = 0;
        }
      }
    }


    if ($.audio_9_flag > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_9_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_19");
          $.audio_9_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_9_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_19", 10000, 1); //Sergeant: Go get some doughnuts, soldier! - Marine: Sir, Yes Sir!
          }
          $.audio_9_flag = 3;
        }
      }
      if ($.audio_9_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_19" as any);
          $.audio_9_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_9_timeout) {
            $.audio_9_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_9_flag > 0) {
        if ($.audio_9_flag > 1) {
          $.audio_9_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_9_flag = 0;
        }
      }
    }


    if ($.audio_10_flag > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_10_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_20");
          $.audio_10_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_10_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_20", 10000, 1); //Marine: Target acquired, Sir
          }
          $.audio_10_flag = 3;
        }
      }
      if ($.audio_10_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_20" as any);
          $.audio_10_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_10_timeout) {
            $.audio_10_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_10_flag > 0) {
        if ($.audio_10_flag > 1) {
          $.audio_10_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_10_flag = 0;
        }
      }
    }


    if ($.audio_11_flag > 0 && $.player_near_tank_flag == 1) {
      if ($.audio_11_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_18");
          $.audio_11_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_11_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_18", 10000, 1); //Marine: Sir! Someone's on the tank, Sir!
          }
          $.audio_11_flag = 3;
        }
      }
      if ($.audio_11_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_18" as any);
          $.audio_11_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_11_timeout) {
            $.audio_11_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_11_flag > 0) {
        if ($.audio_11_flag > 1) {
          $.audio_11_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_11_flag = 0;
        }
      }
    }


    if ($.audio_12_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_12_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_1");
          $.audio_12_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_12_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_1", 10000, 1); //Sergeant: What's up with the Gunner? - Marine: Don't know Sir!
          }
          $.audio_12_flag = 3;
        }
      }
      if ($.audio_12_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_1" as any);
          $.audio_12_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_12_timeout) {
            $.audio_12_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_12_flag > 0) {
        if ($.audio_12_flag > 1) {
          $.audio_12_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_12_flag = 0;
        }
      }
    }


    if ($.audio_21_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_21_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_4");
          $.audio_21_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_21_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_4", 10000, 1); //Sergeant: Get topside soldier. - Soldier: Sir, yes Sir!
          }
          $.audio_21_flag = 3;
        }
      }
      if ($.audio_21_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_4" as any);
          $.audio_21_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_21_timeout) {
            $.audio_21_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_21_flag > 0) {
        if ($.audio_21_flag > 1) {
          $.audio_21_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_21_flag = 0;
        }
      }
    }


    if ($.audio_14_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_14_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_3");
          $.audio_14_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_14_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_3", 10000, 1); //Sergeant: HALT CONVOY!
          }
          $.audio_14_flag = 3;
        }
      }
      if ($.audio_14_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_3" as any);
          $.audio_14_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_14_timeout) {
            $.audio_14_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_14_flag > 0) {
        if ($.audio_14_flag > 1) {
          $.audio_14_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_14_flag = 0;
        }
      }
    }


    if ($.audio_15_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_15_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_17");
          $.audio_15_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_15_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_17", 10000, 1); //Sergeant: Ok, PLATOON MOVE IT OUT!
          }
          $.audio_15_flag = 3;
        }
      }
      if ($.audio_15_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_17" as any);
          $.audio_15_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_15_timeout) {
            $.audio_15_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_15_flag > 0) {
        if ($.audio_15_flag > 1) {
          $.audio_15_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_15_flag = 0;
        }
      }
    }


    if ($.audio_13_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_13_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_7");
          $.audio_13_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_13_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_7", 10000, 1); //Sergeant: Civilian, move away from the tank immediately!
          }
          $.audio_13_flag = 3;
        }
      }
      if ($.audio_13_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_7" as any);
          $.audio_13_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_13_timeout) {
            $.audio_13_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_13_flag > 0) {
        if ($.audio_13_flag > 1) {
          $.audio_13_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_13_flag = 0;
        }
      }
    }


    if ($.audio_16_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_16_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_14");
          $.audio_16_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_16_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_14", 10000, 1); //Sergeant: Drop him soldier. (Shoots player)
          }
          $.audio_16_flag = 3;
        }
      }
      if ($.audio_16_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_14" as any);
          $.audio_16_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_16_timeout) {
            $.audio_16_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_16_flag > 0) {
        if ($.audio_16_flag > 1) {
          $.audio_16_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_16_flag = 0;
        }
      }
    }


    if ($.audio_17_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_17_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_8");
          $.audio_17_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_17_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_8", 10000, 1); //Sergeant (walks up to player): I SAID, move away, IMMEDIATELY!
          }
          $.audio_17_flag = 3;
        }
      }
      if ($.audio_17_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_8" as any);
          $.audio_17_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_17_timeout) {
            $.audio_17_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_17_flag > 0) {
        if ($.audio_17_flag > 1) {
          $.audio_17_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_17_flag = 0;
        }
      }
    }


    if ($.audio_18_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_18_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_11");
          $.audio_18_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_18_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_11", 10000, 1); //Sergeant: Move that civilian out our way soldier - Marine: Sir, Yes Sir!
          }
          $.audio_18_flag = 3;
        }
      }
      if ($.audio_18_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_11" as any);
          $.audio_18_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_18_timeout) {
            $.audio_18_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_18_flag > 0) {
        if ($.audio_18_flag > 1) {
          $.audio_18_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_18_flag = 0;
        }
      }
    }


    if ($.audio_19_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_19_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_13");
          $.audio_19_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_19_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_13", 10000, 1); //Marine: This is a military convoy, do not obstruct our route.
          }
          $.audio_19_flag = 3;
        }
      }
      if ($.audio_19_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_13" as any);
          $.audio_19_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_19_timeout) {
            $.audio_19_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_19_flag > 0) {
        if ($.audio_19_flag > 1) {
          $.audio_19_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_19_flag = 0;
        }
      }
    }


    if ($.audio_20_flag > 0 && $.player_near_tank_flag == 1 && $.attack_player == 0) {
      if ($.audio_20_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL4_15");
          $.audio_20_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_20_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
            Text.PrintNow("COL4_15", 10000, 1); //Sergeant: Get that civilian vehicle out our way! - Marine: Sir! Moving vehicle Sir!
          }
          $.audio_20_flag = 3;
        }
      }
      if ($.audio_20_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL4_15" as any);
          $.audio_20_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_20_timeout) {
            $.audio_20_flag = 0;
          }
        }
      }
    }
    else {
      if ($.audio_20_flag > 0) {
        if ($.audio_20_flag > 1) {
          $.audio_20_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general4_loop"); // fallback: would break linear control flow
        }
        else {
          $.audio_20_flag = 0;
        }
      }
    }



    ////Player in Tank:
    //PRINT_NOW COL4_12 5000 1 //Marine: Someone's in the TANK!  STOP HIM!
    //PRINT_NOW COL4_24 5000 1 //Security protocol Delta India Echo triggered! Vehicle self destruct initiated!
    //PRINT_NOW COL4_26 5000 1 //Prepare to die Communist scum!
    ////attack_player = 1
    //PRINT_NOW COL4_9 5000 1 //Sergeant: We are under attack.  DEFENSIVE POSITIONS!
    ////Sniping Driver in vehicle:
    //PRINT_NOW COL4_21 5000 1 //Marine: SNIPER! AAARRRRGGGGHHHhhhhhhh! (as the other passenger runs away)
    ////Tank driver running away:
    //PRINT_NOW COL4_22 5000 1//Sergeant: I'm getting out of here, AAARRRRGGGGHHHhhhhhhh!
    ////Halt/resume convoy stuff
    //PRINT_NOW COL4_3 5000 1////Sergeant: HALT CONVOY!
    //PRINT_NOW COL4_17 5000 1 ////Sergeant: Ok, PLATOON MOVE IT OUT!
    ////Player in front of tank escort vehicles:
    //PRINT_NOW COL4_11 5000 1 //Sergeant: Move that civilian out our way soldier	- Marine: Sir, Yes Sir!
    //PRINT_NOW COL4_13 5000 1 //Marine: This is a military convoy, do not obstruct our route.
    //PRINT_NOW COL4_8 5000 1  //Marine: I SAID, move away, IMMEDIATELY!
    //PRINT_NOW COL4_14 5000 1 ////Sergeant: Drop him soldier. (Shoots player)
    ////Vehicle in the way of any of the vehicles:
    //PRINT_NOW COL4_15 5000 1 //Sergeant: Get that civilian vehicle out our way!	- Marine: Sir! Moving vehicle Sir!
    ////Buying doughnuts:
    //PRINT_NOW COL4_19 5000 1 //Sergeant: Go get some doughnuts, soldier! - Marine: Sir, Yes Sir!
    //PRINT_NOW COL4_20 5000 1 ////Marine: Target acquired, Sir
    ////Walking close to tank routine:
    //PRINT_NOW COL4_7 5000 1  //Sergeant: Civilian, move away from the tank immediately!
    //PRINT_NOW COL4_8 5000 1 //Sergeant (walks up to player): I SAID, move away, IMMEDIATELY!
    //PRINT_NOW COL4_14 5000 1 ////Sergeant: Drop him soldier. (Shoots player)
    ////Player on the tank routine:
    //PRINT_NOW COL4_18 5000 1 //Marine: Sir! Someone's on the tank, Sir!
    ////Tank gunner killed:
    //PRINT_NOW COL4_1 5000 1  //Sergeant: What's up with the Gunner? - Marine: Don't know Sir! -	Sergeant: Get topside and check it out soldier.
    //PRINT_NOW COL4_6 5000 1 ////Marine: The gunner is dead, WE ARE UNDER ATTACK!
    ////Arrive at warehouse:
    //PRINT_NOW COL4_23 5000 1 //Sergeant: Objective completed! Platoon dismissed! - Marine: Lets go eat some of those doughnuts.



  }
}




//////////////////////////////////////////////////////////////////////////////////////

async function onFailed() {
  //////////////////////////////////////////////////////////////////////////////////////

  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}



//////////////////////////////////////////////////////////////////////////////////////

async function mission_general4_passed() {
  //////////////////////////////////////////////////////////////////////////////////////


  $.flag_general_mission4_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(2000);
  Stat.RegisterMissionPassed("COL_4");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.general_contact_blip.remove();
}



//////////////////////////////////////////////////////////////////////////////////////

async function cleanup() {
  //////////////////////////////////////////////////////////////////////////////////////


  ONMISSION = 0;


  $.tank_blip.remove();

  //SWITCH_ROADS_ON -877.0355 -1502.6396 -2.4916 -477.6842 685.0324 52.1452

  Path.SwitchRoadsOn(-721.211, 243.998, 5.0, -651.211, 693.998, 25.0);
  Path.SwitchRoadsOn(-760.362, 101.883, 5.0, -700.362, 251.883, 25.0);
  Path.SwitchRoadsOn(-783.906, -46.826, 5.0, -723.906, 103.174, 25.0);
  Path.SwitchRoadsOn(-853.397, -149.692, 5.0, -773.397, 0.308, 25.0);
  Path.SwitchRoadsOn(-870.656, -594.54, 5.0, -810.656, -144.54, 25.0);
  Path.SwitchRoadsOn(-837.282, -1041.814, 5.0, -777.282, -591.814, 25.0);
  Path.SwitchRoadsOn(-827.532, -1539.617, 5.0, -747.532, -1039.617, 25.0);


  $.timer_mobile_start = Clock.GetGameTimer();


  Streaming.MarkModelAsNoLongerNeeded(RHINO);
  Streaming.MarkModelAsNoLongerNeeded(BARRACKS);
  Streaming.MarkModelAsNoLongerNeeded(ARMY);
  Streaming.MarkModelAsNoLongerNeeded(PATRIOT);
  Streaming.MarkModelAsNoLongerNeeded(RUGER);


  Hud.ClearCounter($.$id.tank_detonation_timer);
  //CLEAR_ALL_SCRIPT_ROADBLOCKS


  $.tank_dude1_bodyarmour.remove();
  $.tank_dude2_bodyarmour.remove();


  $.flag_player_on_army_ped_mission = 0;


  Mission.Finish();
}


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////

async function if_in_front_of_army_vehicle() {
  //////////////////////////////////////////////////////////////////////////////////////


  if ($.army_soldier == $.escort1_dude2) {
    $.obstruction_of_vehicle_flag = $.escort1_dude2_obstruction_flag;
    $.move_car_timeout = $.escort1_dude2_timeout;
    $.obstacle_x = $.escort1_dude2_obstacle_x;
    $.obstacle_y = $.escort1_dude2_obstacle_y;
    $.car_obstacle = $.escort1_dude2_car_obstacle;
    $.vehicle_stopped_timer = $.escort1_stopped_timer;
  }


  if ($.army_soldier == $.escort2_dude2) {
    $.obstruction_of_vehicle_flag = $.escort2_dude2_obstruction_flag;
    $.move_car_timeout = $.escort2_dude2_timeout;
    $.obstacle_x = $.escort2_dude2_obstacle_x;
    $.obstacle_y = $.escort2_dude2_obstacle_y;
    $.car_obstacle = $.escort2_dude2_car_obstacle;
    $.vehicle_stopped_timer = $.escort2_stopped_timer;
  }


  if ($.army_soldier == $.tank_dude2) {
    $.obstruction_of_vehicle_flag = $.tank_dude2_obstruction_flag;
    $.move_car_timeout = $.tank_dude2_timeout;
    $.obstacle_x = $.tank_dude2_obstacle_x;
    $.obstacle_y = $.tank_dude2_obstacle_y;
    $.car_obstacle = $.tank_dude2_car_obstacle;
    $.vehicle_stopped_timer = $.tank_stopped_timer;
  }


  if ($.army_soldier == $.escort3_dude2) {
    $.obstruction_of_vehicle_flag = $.escort3_dude2_obstruction_flag;
    $.move_car_timeout = $.escort3_dude2_timeout;
    $.obstacle_x = $.escort3_dude2_obstacle_x;
    $.obstacle_y = $.escort3_dude2_obstacle_y;
    $.car_obstacle = $.escort3_dude2_car_obstacle;
    $.vehicle_stopped_timer = $.escort3_stopped_timer;
  }


  if ($.army_vehicle.isStopped()) {
    //	IF vehicle_stopped_timer < game_timer

    const _res236 = $.army_vehicle.getOffsetInWorldCoords(0.0, 7.0, 0.0);
$.vector_x = _res236.x;
$.vector_y = _res236.y;
$.z = _res236.z;
    if (!(Char.IsDead($.army_soldier))) {
      if ($.player1.locateOnFoot3D($.vector_x, $.vector_y, army_vehicle_z, 4.0, 4.0, 2.0, false)) {
        if ($.obstruction_of_vehicle_flag == 5) {
          $.obstruction_of_vehicle_flag = 0;
        }
        if ($.obstruction_of_vehicle_flag == 0) {
          if ($.army_soldier.isOnFoot()) {
            $.army_soldier.setObjNoObj();
            $.army_soldier.setObjGotoPlayerOnFoot($.player1);
            if ($.audio_18_flag == 0) {
              $.audio_18_flag = 1;
              $.audio_18_timeout = $.game_timer + 6000;
            }
            $.obstruction_of_vehicle_flag = 1;
          }
          else {
            if (!($.army_soldier == $.tank_dude2)) {
              if ($.army_soldier.isInAnyCar()) {
                $.army_soldier_vehicle = $.army_soldier.storeCarIsInNoSave();
                $.army_soldier_vehicle.lockDoors(1 /* CARLOCK_UNLOCKED */);
                if ($.army_soldier_vehicle == $.tank) {
                  $.unlock_tank_flag = 2;
                }
                $.army_soldier.setObjLeaveCar($.army_soldier_vehicle);
              }
            }
          }
          if ($.convoy_stop_flag == 0) {
            $.convoy_stop_flag = 1;
          }
        }
        if ($.obstruction_of_vehicle_flag == 1) {
          if (!($.army_soldier.isInAnyCar())) {
            if ($.player1.locateAnyMeansChar2D($.army_soldier, 2.5, 2.5, false)) {
              if ($.audio_19_flag == 0) {
                $.audio_19_flag = 1;
                $.audio_19_timeout = $.game_timer + 6000;
              }
              $.move_car_timeout = $.game_timer + 7000;
              $.obstruction_of_vehicle_flag = 2;
            }
          }
        }
        if ($.obstruction_of_vehicle_flag == 2) {
          if ($.move_car_timeout < $.game_timer) {
            if ($.audio_16_flag == 0) {
              $.audio_16_flag = 1;
              $.audio_16_timeout = $.game_timer + 6000;
            }
            $.army_soldier.setObjKillPlayerOnFoot($.player1);
            $.obstruction_of_vehicle_flag = 3;
          }
        }
      }
      if ($.obstruction_of_vehicle_flag == 0) {
        if (!($.army_soldier.isInAnyCar())) {
          $.obstruction_of_vehicle_flag = 5;
        }
      }
      if (!($.player1.locateOnFoot3D($.vector_x, $.vector_y, army_vehicle_z, 4.0, 4.0, 2.0, false))) {
        if ($.obstruction_of_vehicle_flag == 1 || $.obstruction_of_vehicle_flag == 2 || $.obstruction_of_vehicle_flag == 3) {
          $.x2 = $.vector_x + 4.0;
          $.y2 = $.vector_y + 4.0;
          $.x = $.x2 - 8.0;
          $.y = $.y2 - 8.0;
          $.car_obstacle = World.GetRandomCarOfTypeInAreaNoSave($.x2, $.y2, $.x, $.y, -1);
          if ($.car_obstacle == -1) {
            $.obstruction_of_vehicle_flag = 5;
            $.another_fucking_flag = 0;
          }
          else {
            $.obstruction_of_vehicle_flag = 0;
            $.another_fucking_flag = 1;
          }
        }
        if ($.obstruction_of_vehicle_flag == 8) {
          if (!($.army_soldier.isInAnyCar())) {
            if (!(Car.IsDead($.car_obstacle))) {
              $.army_soldier.setObjEnterCarAsDriver($.car_obstacle);
            }
            else {
              $.army_soldier.setObjNoObj();
              $.obstruction_of_vehicle_flag = 5;
            }
            $.car_obstacle.markAsNoLongerNeeded();
            if ($.audio_20_flag == 0) {
              $.audio_20_flag = 1;
              $.audio_20_timeout = $.game_timer + 4000;
            }
            $.obstruction_of_vehicle_flag = 4;
          }
        }
        if ($.obstruction_of_vehicle_flag == 0) {
          if (!($.another_fucking_flag == 1)) {
            $.x2 = $.vector_x + 4.0;
            $.y2 = $.vector_y + 4.0;
            $.x = $.x2 - 8.0;
            $.y = $.y2 - 8.0;
            $.car_obstacle = World.GetRandomCarOfTypeInAreaNoSave($.x2, $.y2, $.x, $.y, -1);
          }
          if (!($.car_obstacle == -1)) {
            if (Car.IsDead($.car_obstacle)) {
              $.army_vehicle.setDrivingStyle(3);
              $.car_obstacle.markAsNoLongerNeeded();
              $.obstruction_of_vehicle_flag = 5;
              $.car_obstacle = -1;
            }
            else {
              if (!($.army_soldier.isInAnyCar())) {
                $.army_soldier.setObjEnterCarAsDriver($.car_obstacle);
                $.car_obstacle.markAsNoLongerNeeded();
                $.obstruction_of_vehicle_flag = 4;
              }
              else {
                $.army_soldier_vehicle = $.army_soldier.storeCarIsInNoSave();
                $.army_soldier_vehicle.lockDoors(1 /* CARLOCK_UNLOCKED */);
                if ($.army_soldier_vehicle == $.tank) {
                  $.unlock_tank_flag = 2;
                }
                $.army_soldier.setObjLeaveCar($.army_soldier_vehicle);
                $.obstruction_of_vehicle_flag = 8;
              }
              if ($.convoy_stop_flag == 0) {
                $.convoy_stop_flag = 1;
              }
            }
          }
        }
        $.another_fucking_flag = 0;
      }
      if ($.obstruction_of_vehicle_flag == 4) {
        if ($.army_soldier.isInAnyCar()) {
          $.car_obstacle.markAsNoLongerNeeded();
          $.car_obstacle = -1;
          $.car_obstacle = $.army_soldier.storeCarIsInNoSave();
          const _res237 = $.car_obstacle.getCoordinates();
$.x = _res237.x;
$.y = _res237.y;
$.z = _res237.z;
          $.x -= 10.0;
          $.y -= 25.0;
          const _res238 = Path.GetClosestCharNode($.x, $.y, $.z);
$.obstacle_x = _res238.nodeX;
$.obstacle_y = _res238.nodeY;
$.z = _res238.nodeZ;
          $.car_obstacle.setCruiseSpeed(20.0);
          $.car_obstacle.setDrivingStyle(2);
          $.car_obstacle.gotoCoordinatesAccurate($.obstacle_x, $.obstacle_y, $.z);
          $.move_car_timeout = $.game_timer + 10000;
          $.obstruction_of_vehicle_flag = 6;
        }
        else {
          if (Car.IsDead($.car_obstacle)) {
            $.army_soldier.setObjNoObj();
            $.obstruction_of_vehicle_flag = 5;
          }
          else {
            if (!($.car_obstacle.locate2D($.vector_x, $.vector_y, 4.0, 4.0, false))) {
              $.army_soldier.setObjNoObj();
              $.obstruction_of_vehicle_flag = 5;
            }
          }
        }
      }
      if ($.obstruction_of_vehicle_flag == 6) {
        if ($.army_soldier.locateInCar2D($.obstacle_x, $.obstacle_y, 3.0, 3.0, false)) {
          $.obstruction_of_vehicle_flag = 5;
        }
        else {
          if ($.move_car_timeout < $.game_timer) {
            $.obstruction_of_vehicle_flag = 5;
          }
          if (!($.army_soldier.isInAnyCar())) {
            $.obstruction_of_vehicle_flag = 5;
          }
        }
      }
    }
    //	ENDIF//IF vehicle_stopped_timer < game_timer

  }
  else {
    //	vehicle_stopped_timer = game_timer + 2000
    if (!($.obstruction_of_vehicle_flag == 0) && !($.obstruction_of_vehicle_flag == 5)) {
      $.obstruction_of_vehicle_flag = 5;
    }
  }


  if ($.army_soldier == $.escort1_dude2) {
    $.escort1_dude2_obstruction_flag = $.obstruction_of_vehicle_flag;
    $.escort1_dude2_timeout = $.move_car_timeout;
    $.escort1_dude2_obstacle_x = $.obstacle_x;
    $.escort1_dude2_obstacle_y = $.obstacle_y;
    $.escort1_dude2_car_obstacle = $.car_obstacle;
    $.escort1_stopped_timer = $.vehicle_stopped_timer;
  }


  if ($.army_soldier == $.escort2_dude2) {
    $.escort2_dude2_obstruction_flag = $.obstruction_of_vehicle_flag;
    $.escort2_dude2_timeout = $.move_car_timeout;
    $.escort2_dude2_obstacle_x = $.obstacle_x;
    $.escort2_dude2_obstacle_y = $.obstacle_y;
    $.escort2_dude2_car_obstacle = $.car_obstacle;
    $.escort2_stopped_timer = $.vehicle_stopped_timer;
  }


  if ($.army_soldier == $.tank_dude2) {
    $.tank_dude2_obstruction_flag = $.obstruction_of_vehicle_flag;
    $.tank_dude2_timeout = $.move_car_timeout;
    $.tank_dude2_obstacle_x = $.obstacle_x;
    $.tank_dude2_obstacle_y = $.obstacle_y;
    $.tank_dude2_car_obstacle = $.car_obstacle;
    $.tank_stopped_timer = $.vehicle_stopped_timer;
  }


  if ($.army_soldier == $.escort3_dude2) {
    $.escort3_dude2_obstruction_flag = $.obstruction_of_vehicle_flag;
    $.escort3_dude2_timeout = $.move_car_timeout;
    $.escort3_dude2_obstacle_x = $.obstacle_x;
    $.escort3_dude2_obstacle_y = $.obstacle_y;
    $.escort3_dude2_car_obstacle = $.car_obstacle;
    $.escort3_stopped_timer = $.vehicle_stopped_timer;
  }
}




async function setup_initial_ped_stuff() {
  $.dude.giveWeapon(WEAPONTYPE_RUGER, 9999);
  $.dude.clearThreatSearch();
  $.dude.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.dude.setRunning(true /* TRUE */);
  //SET_CHAR_ACCURACY dude 40
}




async function armydudes_go_into_doorway() {


  if ($.gosub_armydude_counter == 0) {
    $.gosub_armydude.setHeedThreats(true /* TRUE */);
    $.gosub_armydude.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.gosub_armydude.setObjRunToCoord(-829.7494, -1491.9958);
    $.gosub_armydude.setUsePednodeSeek(false /* FALSE */);
    $.gosub_armydude_counter = 1;
  }
  if ($.gosub_armydude_counter == 1) {
    if ($.gosub_armydude.isObjNoObj()) {
      $.gosub_armydude.setObjRunToCoord(-829.7494, -1491.9958);
      $.gosub_armydude.setUsePednodeSeek(false /* FALSE */);
    }
    if ($.gosub_armydude.locateOnFoot2D(-829.7494, -1491.9958, 1.0, 1.0, false)) {
      $.gosub_armydude.setObjRunToCoord(-826.0425, -1493.5173);
      $.gosub_armydude.setUsePednodeSeek(false /* FALSE */);
      $.gosub_armydude_counter = 2;
    }
  }
  if ($.gosub_armydude_counter == 2) {
    if ($.gosub_armydude.isObjNoObj()) {
      $.gosub_armydude.setObjRunToCoord(-826.0425, -1493.5173);
      $.gosub_armydude.setUsePednodeSeek(false /* FALSE */);
    }
    if ($.gosub_armydude.locateOnFoot2D(-826.0425, -1493.5173, 1.0, 1.0, false)) {
      $.gosub_armydude.delete();
      $.gosub_armydude_counter = 3;
    }
  }
}




async function wait_for_cs_time_col4() {
  while ($.cs_time < $.cs_time_limit) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
}





async function shooting_from_vehicle_stuff() {


  if (!(Car.IsDead($.shooting_peds_car))) {
    if (!($.player1.isInCar($.shooting_peds_car))) {
      if (!(Char.IsDead($.shooting_peds_car_driver))) {
        if ($.shooting_peds_car_driver.isInCar($.shooting_peds_car)) {
          if (!($.attack_player == 0)) {
            if (!(Char.IsDead($.shooting_ped))) {
              $.shooting_ped.setObjKillPlayerOnFoot($.player1);
            }
            else {
              $.shooting_ped.detachFromCar();
            }
          }
          else {
            if (Char.IsDead($.shooting_ped)) {
              if ($.attack_player == 0) {
                $.attack_player = 1;
              }
            }
            else {
              $.shooting_ped.turnToFacePlayer($.player1);
              $.shooting_ped.setObjAimGunAtChar($.scplayer);
            }
          }
        }
        else {
          if ($.shooting_ped_flag == 0) {
            if (!(Char.IsDead($.shooting_ped))) {
              $.shooting_ped.detachFromCar();
              const _res239 = $.shooting_peds_car.getOffsetInWorldCoords(0.0, -11.0, 0.0);
$.x = _res239.x;
$.y = _res239.y;
$.z = _res239.z;
              $.shooting_ped.setObjRunToCoord($.x, $.y);
              if ($.shooting_ped.locateOnFoot2D($.x, $.y, 2.0, 2.0, false)) {
                $.shooting_ped.setObjKillPlayerOnFoot($.player1);
                $.shooting_ped_flag = 1;
              }
            }
          }
        }
      }
      else {
        if ($.attack_player == 0) {
          $.attack_player = 1;
        }
        if ($.shooting_ped_flag == 0) {
          if (!(Char.IsDead($.shooting_ped))) {
            $.shooting_ped.detachFromCar();
            const _res240 = $.shooting_peds_car.getOffsetInWorldCoords(0.0, -11.0, 0.0);
$.x = _res240.x;
$.y = _res240.y;
$.z = _res240.z;
            $.shooting_ped.setObjRunToCoord($.x, $.y);
            if ($.shooting_ped.locateOnFoot2D($.x, $.y, 2.0, 2.0, false)) {
              $.shooting_ped.setObjKillPlayerOnFoot($.player1);
              $.shooting_ped_flag = 1;
            }
          }
        }
      }
    }
    else {
      $.shooting_peds_car.setOnlyDamagedByPlayer(false /* FALSE */);
      $.shooting_ped.detachFromCar();
      if (!(Char.IsDead($.shooting_ped))) {
        $.shooting_ped.setObjKillPlayerOnFoot($.player1);
      }
    }
  }
  else {
    $.shooting_ped.detachFromCar();
    if (!(Char.IsDead($.shooting_ped))) {
      $.shooting_ped.setObjKillPlayerOnFoot($.player1);
    }
  }
}

export async function general4() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_general4


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_general4_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_general4



  // Variables for mission

  //PEDS CARS OBJECTS PICKUPS

  // VAR_INT escort1 escort2 escort3 tank car_obstacle dude
  // VAR_INT escort1_dude1 escort1_dude2 formation_ped3 formation_ped4
  // VAR_INT escort2_dude1 escort2_dude2 formation_ped5 formation_ped6
  // VAR_INT escort3_dude1 escort3_dude2 formation_ped1 formation_ped2
  // VAR_INT escort2_attached_01 escort2_attached_02 escort2_attached_03 escort2_attached_04
  // VAR_INT escort3_attached_01 escort3_attached_02 escort3_attached_03 escort3_attached_04
  // VAR_INT tank_attached_dude army_soldier_vehicle
  // VAR_INT escort1_dude2_car_obstacle escort2_dude2_car_obstacle tank_dude2_car_obstacle escort3_dude2_car_obstacle
  // VAR_INT escort1_dude2_car escort2_dude2_car tank_dude2_car escort3_dude2_car
  // VAR_INT tank_dude1 tank_dude2 players_tank army_vehicle army_soldier
  // VAR_INT garage_guard1 garage_guard2 tank_dude1_bodyarmour tank_dude2_bodyarmour gosub_armydude
  // VAR_INT shooting_ped shooting_peds_car shooting_peds_car_driver
  //BLIPS

  // VAR_INT tank_blip
  //FLAGS TIMERS COUNTERS

  // VAR_INT player_in_tank_flag another_fucking_flag tank_mission_flag tank_detonation_timer
  // VAR_INT flag_escort1_unusable flag_escort2_unusable escort2_attack_player escort3_attack_player
  // VAR_INT attack_player player_close_to_tank convoy_stop_flag next_to_centres got_locked_tank_message
  // VAR_INT obstruction_of_vehicle_flag move_car_timeout player_in_warehouse_flag
  // VAR_INT escort1_dude2_obstruction_flag escort2_dude2_obstruction_flag tank_not_home
  // VAR_INT tank_dude2_obstruction_flag escort3_dude2_obstruction_flag tank_attached_dude_counter
  // VAR_INT escort1_dude2_timeout escort2_dude2_timeout tank_dude2_timeout escort3_dude2_timeout
  // VAR_INT unlock_tank_timer unlock_tank_flag garage_guard1_flag garage_guard2_flag print_timer
  // VAR_INT escort2_attached_01_flag escort2_attached_02_flag escort2_attached_03_flag escort2_attached_04_flag
  // VAR_INT escort3_attached_01_flag escort3_attached_02_flag escort3_attached_03_flag escort3_attached_04_flag
  // VAR_INT escort2_ram_player_counter escort3_ram_player_counter tank_attached_dude_flag tank_attached_dude_timer
  // VAR_INT audio_1_flag audio_2_flag audio_3_flag audio_4_flag audio_5_flag frame_counter shooting_ped_flag
  // VAR_INT audio_6_flag audio_7_flag audio_8_flag audio_9_flag audio_10_flag done_tank_on_fire_bit
  // VAR_INT audio_11_flag audio_12_flag audio_13_flag audio_14_flag audio_15_flag done_this_audio_bit
  // VAR_INT audio_16_flag audio_17_flag audio_18_flag audio_19_flag audio_20_flag audio_21_flag
  // VAR_INT audio_1_timeout audio_2_timeout audio_3_timeout audio_4_timeout audio_5_timeout
  // VAR_INT audio_6_timeout audio_7_timeout audio_8_timeout audio_9_timeout audio_10_timeout player_nearish_to_tank_flag
  // VAR_INT audio_11_timeout audio_12_timeout audio_13_timeout audio_14_timeout audio_15_timeout
  // VAR_INT audio_16_timeout audio_17_timeout audio_18_timeout audio_19_timeout audio_20_timeout audio_21_timeout
  // VAR_INT is_audio_in_use opened_garage_stuff player_hiding_in_warehouse player_near_tank_flag dudes_go_into_doorway
  // VAR_INT escort1_attack_player escort1_ram_player_counter got_garage_help got_steal_tank_message
  // VAR_INT donut_stop_flag donut_stop_timer last_convoy_stop_flag initiate_seft_destruct_timer initiate_seft_destruct_flag
  // VAR_INT formation_ped1_counter formation_ped2_counter formation_ped3_counter formation_ped4_counter formation_ped5_counter
  // VAR_INT formation_ped6_counter tank_dude1_counter tank_dude2_counter escort1_dude1_counter escort1_dude2_counter
  // VAR_INT vehicle_stopped_timer escort1_stopped_timer escort2_stopped_timer tank_stopped_timer escort3_stopped_timer
  // VAR_INT escort1_has_been_rammed_by_player escort2_has_been_rammed_by_player escort3_has_been_rammed_by_player
  // VAR_INT escort1_health escort2_health escort3_health rammed_attack_timer close_to_tank_timer gosub_armydude_counter
  //COORD MATHS

  // VAR_FLOAT escort3_dude2_obstacle_x escort3_dude2_obstacle_y tank_detonation_timer_float
  // VAR_FLOAT escort2_dude2_obstacle_x escort2_dude2_obstacle_y tank_dude2_obstacle_x tank_dude2_obstacle_y
  // VAR_FLOAT escort1_dude2_obstacle_x escort1_dude2_obstacle_y formation_ped1_distance formation_ped4_distance
  // VAR_FLOAT tank_speed x2 y2
  // VAR_FLOAT vector_x vector_y
  // VAR_FLOAT obstacle_x obstacle_y escort1_dist_from_dest tank_dist_from_dest escort2_dist_from_dest escort3_dist_from_dest
  // VAR_FLOAT escort1_distance_from_vehicle_behind escort2_distance_from_vehicle_behind tank_distance_from_vehicle_behind

  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE stuff
  //VAR_INT game_timer game_timer_start	players_car	temp_int cs_time_limit
  //VAR_FLOAT x_temp y_temp	sum_x_y_temp heading

  // ****************************************Mission Start************************************



}
