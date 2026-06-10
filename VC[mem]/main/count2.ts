// Generated from main/count2.sc

import { $ } from "../vars.mts";

// *****************************************************************************************
// ******************** Counterfeiting Mission 2 - Plates Courier **************************
// *****************************************************************************************
// *** The courier will go from a-to-b in a three car convoy. The player1 must kill him  ***
// *** and retrieve the plates (destroying any car that he is in will fail the mission   ***
// *** - plates destroyed.)																 ***
// *****************************************************************************************

async function body() {


  ONMISSION = 1;


  // SCRIPT_NAME count2
  Stat.RegisterMissionGiven();


  await asyncWait(0);


  // LVAR_FLOAT courier_car1_x courier_car1_y courier_car1_speed
  // LVAR_FLOAT courier_car2_x courier_car2_y courier_car2_speed
  // LVAR_FLOAT courier_car3_x courier_car3_y courier_car3_speed
  // LVAR_FLOAT courier_car1_distance courier_car2_distance courier_car3_distance
  // LVAR_FLOAT cnt2_left_door_heading cnt2_right_door_heading


  Text.LoadMissionText("COUNT2");
  Shortcut.SetDropoffPointForMission(-1045.726, -292.454, 9.758, 97.607); // On road outside of Print Works


  $.game_timer = 0;
  $.courier_flag = 0;
  $.courier_flag2 = 0;
  $.courier_in_car = 0;
  $.next_car_timer = 0;
  $.passenger_seat = 0;
  $.flee_car_timer = 0;
  $.shoot_from_car = 0;
  $.shoot_from_car_counter = 0;
  $.car1_ped_in_car_flag = 0;
  $.car3_ped_in_car_flag = 0;
  $.created_object_flag = 0;
  $.security_warning = 0;
  $.courier_has_died = 0;
  $.car1_stuck_flag = 0;
  $.car2_stuck_flag = 0;
  $.car3_stuck_flag = 0;
  $.fly_heli_away_flag = 0;
  $.courier_car1_health = 0;
  $.courier_car2_health = 0;
  $.courier_car3_health = 0;
  $.car1_stuck_timer_start = 0;
  $.car2_stuck_timer_start = 0;
  $.car3_stuck_timer_start = 0;
  $.guard1_into_car_flag = 0;
  $.guard2_into_car_flag = 0;
  $.car1_location_counter = 0;
  $.car2_location_counter = 0;
  $.car3_location_counter = 0;
  $.car1_arrived_flag = 0;
  $.car2_arrived_flag = 0;
  $.car3_arrived_flag = 0;
  $.shoot_heli_down_flag = 0;
  $.shoot_from_car_timer = 0;


  $.courier_car2_health_shoot = 0;


  $.sniper1_flag = 0;
  $.sniper2_flag = 0;
  $.sniper3_flag = 0;
  $.sniper4_flag = 0;
  $.sniper_dudes_counter = 0;


  $.car1_stuck_x = 0.0;
  $.car1_stuck_y = 0.0;
  $.car1_stuck_z = 0.0;
  $.car2_stuck_x = 0.0;
  $.car2_stuck_y = 0.0;
  $.car2_stuck_z = 0.0;
  $.car3_stuck_x = 0.0;
  $.car3_stuck_y = 0.0;
  $.car3_stuck_z = 0.0;
  $.heading = 0.0;
  courier_car1_distance = 0.0;
  courier_car2_distance = 0.0;
  courier_car3_distance = 0.0;
  $.coord_1_x = 0.0;
  $.coord_1_y = 0.0;
  $.coord_1_z = 0.0;
  cnt2_left_door_heading = 0.0;
  cnt2_right_door_heading = 0.0;


  $.docks_guard_counter = 0;


  $.is_audio_in_use = 0;
  $.audio_1_flag = 0;
  $.audio_2_flag = 0;
  $.audio_3_flag = 0;
  $.audio_4_flag = 0;


  $.frame_counter = 0;


  $.gosub_car_to_slow_speed = 0.0;

  //////////////////////////
  //////////////////////////


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "cskelly");
  Streaming.LoadSpecialCharacter(3, "csbuddy");

  //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH
  //LOAD_SPECIAL_MODEL cut_obj2 LAWYERH


  Streaming.SetAreaVisible(VIS_PRINT_WORKS);
  Streaming.LoadScene(-1071.5597, -278.9497, 12.3606);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    //OR NOT HAS_MODEL_LOADED cut_obj1
    //OR NOT HAS_MODEL_LOADED cut_obj2
    await asyncWait(0);


  }


  Cutscene.Load("cnt_2");
  Cutscene.SetOffset(-1064.103, -276.39, 11.066);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("cskelly");


  $.cs_buddy = CutsceneObject.Create(SPECIAL03);
  $.cs_buddy.setAnim("csbuddy");

  //CREATE_CUTSCENE_HEAD cs_ken CUT_OBJ2 cs_kenhead
  //SET_CUTSCENE_HEAD_ANIM cs_kenhead lawyer

  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player1

  World.ClearArea(-1071.5792, -281.4316, 12.3068, 3.0, true /* TRUE */);
  World.ClearArea(-1059.8411, -278.7214, 10.4044, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1059.8411, -278.7214, 10.4044);
  $.player1.setHeading(272.2088);
  Camera.SetNearClip(0.1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1444) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CNT2_B1", 10000, 1);
  //Alright, the courier's moving the plate from the docks today.


  while ($.cs_time < 3750) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CNT2_B2", 10000, 1);
  //I'm gonna go intercept them, grab the plates, lose any heat, and make my way back here.


  while ($.cs_time < 7974) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CNT2_B3", 10000, 1);
  //Now. Depending how well this goes,


  while ($.cs_time < 9975) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CNT2_B4", 10000, 1);
  //we may have five minutes to print the money before the counterfeit syndicate finds us, or we may have all year.


  while ($.cs_time < 14465) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CNT2_B5", 10000, 1);
  //Either way, I want green rolling off the presses five minutes after I get back. Got it?


  while ($.cs_time < 18722) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CNT2_B6", 10000, 1);
  //Don't you worry Tommy. We'll be ready Tommy.


  while ($.cs_time < 22232) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CNT2_B7", 10000, 1);
  //Me an'der boys will be around the neighbourhood case you need any heat taking care of.


  while ($.cs_time < 28537) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CNT2_B8", 10000, 1);
  //Alright everybody cool?  Ok. Catch you later...


  while ($.cs_time < 30268) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


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
  Text.ClearPrints();
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  Streaming.LoadScene(-1059.8411, -278.7214, 10.4044);
  //////////////////////////
  //////////////////////////


  $.player1.setMood(PLAYER_MOOD_WISECRACKING, 60000);


  Streaming.RequestModel(SENTINEL);
  Streaming.RequestModel(173 /* COLT45 */);
  Streaming.RequestModel(1319 /* briefcase */);
  Streaming.RequestModel(MAVERICK);
  Streaming.RequestModel(7 /* SNIPER */);
  Streaming.RequestModel(TEC9);
  Streaming.RequestModel(HFORI);
  Streaming.RequestModel(HFYBU);
  Streaming.RequestModel(WFYRI);
  Streaming.RequestModel(WFORI);
  Streaming.RequestModel(BFYST);
  Streaming.RequestModel(WFYBU);
  Streaming.RequestModel(178 /* UZI */);
  Streaming.RequestModel(CHROMEGUN);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(SENTINEL)) || !(Streaming.HasModelLoaded(173 /* COLT45 */)) || !(Streaming.HasModelLoaded(HFORI)) || !(Streaming.HasModelLoaded(HFYBU)) || !(Streaming.HasModelLoaded(WFYRI)) || !(Streaming.HasModelLoaded(WFORI))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(1319 /* briefcase */)) || !(Streaming.HasModelLoaded(MAVERICK)) || !(Streaming.HasModelLoaded(7 /* SNIPER */)) || !(Streaming.HasModelLoaded(TEC9)) || !(Streaming.HasModelLoaded(BFYST)) || !(Streaming.HasModelLoaded(WFYBU))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CHROMEGUN)) || !(Streaming.HasModelLoaded(178 /* UZI */))) {
    await asyncWait(0);
  }

  //SET_PLAYER_CONTROL player1 OFF
  //SET_ALL_CARS_CAN_BE_DAMAGED FALSE
  //WAIT 0
  //WAIT 0
  //SWITCH_WIDESCREEN ON


  $.courier_heli = Car.Create(MAVERICK, 408.1980, -1726.1954, 50.0);
  $.courier_heli.setLoadCollisionFlag(false /* FALSE */);
  //CHANGE_CAR_COLOUR courier_heli 0 0

  $.courier_heli.setForwardSpeed(10.0);


  $.courier_car2_guard3 = Char.CreateInsideCar($.courier_heli, PEDTYPE_GANG_STREET, WFORI);
  $.courier_car2_guard3.giveWeapon(WEAPONTYPE_TEC9, 9999);
  $.courier_car2_guard3.clearThreatSearch();
  $.courier_car2_guard3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car2_guard3.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car2_guard3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car2_guard3.setRunning(true /* TRUE */);
  $.courier_car2_guard3.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.courier_car2_guard3.setLoadCollisionFlag(false /* FALSE */);


  $.courier = Char.CreateAsPassenger($.courier_heli, PEDTYPE_GANG_STREET, HFYBU, 0);



  $.courier.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 6);
  $.courier.clearThreatSearch();
  $.courier.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier.setRunning(true /* TRUE */);
  $.courier.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.courier.setLoadCollisionFlag(false /* FALSE */);
  $.mission_blip = Blip.AddForChar($.courier);
  $.mission_blip.changeScale(3);
  $.courier_heli.gotoCoords(-649.6716, -1590.7273, 40.0, 15);
  $.courier_heli.setForwardSpeed(15.0);
  $.courier_flag = 1;

  //SET_FIXED_CAMERA_POSITION 388.0 -1710.0 35.0 0.0 0.0 0.0
  //POINT_CAMERA_AT_CAR	courier_heli FIXED JUMP_CUT
  //LOAD_SCENE 408.1980 -1726.1954 50.0

  //DO_FADE 1500 FADE_IN

  //WHILE GET_FADING_STATUS
  //	WAIT 0
  //ENDWHILE

  //PRINT_NOW CNT2_01 30000 1//"Go and get the plates from the courier who is leaving the docks any second now."

  //WAIT 5000

  //DO_FADE 1500 FADE_OUT

  //WHILE GET_FADING_STATUS
  //	WAIT 0
  //ENDWHILE

  //SET_CAMERA_BEHIND_PLAYER
  //RESTORE_CAMERA_JUMPCUT
  //SET_PLAYER_CONTROL player1 ON
  //SET_ALL_CARS_CAN_BE_DAMAGED TRUE
  //SWITCH_WIDESCREEN OFF
  //LOAD_SCENE -1059.8411 -278.7214 10.4044


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintNow("CNT2_01", 30000, 1); //"Go and get the plates from the courier who is leaving the docks any second now."
  $.docks_blip = Blip.AddForCoord(-683.1377, -1566.9713, 11.4);


  Char.SetEnterCarRangeMultiplier(10.0);
  Char.SetThreatReactionRangeMultiplier(3.0);


  $.courier_car1 = Car.Create(SENTINEL, -707.2035, -1549.6058, 11.4769); //On road near ship
  $.courier_car1.changeColor(10, 0);
  $.courier_car1.setHeading(66.0);
  $.courier_car1.setCruiseSpeed(15.0);
  courier_car1_speed = 0.0;
  $.courier_car1.setDrivingStyle(2);
  $.courier_car1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.courier_car1.setChangeLane(false /* FALSE */);
  $.courier_car1.setUpsidedownNotDamaged(true /* TRUE */);
  $.courier_car1.setIdle();
  $.courier_car1.markAsConvoyCar(true /* TRUE */);
  $.courier_car1.setMission(11 /* MISSION_STOP_FOREVER */);


  $.courier_car2 = Car.Create(SENTINEL, -708.8500, -1553.7223, 11.4936); //On road near ship
  $.courier_car2.changeColor(0, 0);
  $.courier_car2.setHeading(66.0);
  $.courier_car2.setCruiseSpeed(15.0);
  courier_car2_speed = 0.0;
  $.courier_car2.setDrivingStyle(2);
  $.courier_car2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.courier_car2.setChangeLane(false /* FALSE */);
  $.courier_car2.setUpsidedownNotDamaged(true /* TRUE */);
  $.courier_car2.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.courier_car2.setIdle();
  $.courier_car2.markAsConvoyCar(true /* TRUE */);
  $.courier_car2.setMission(11 /* MISSION_STOP_FOREVER */);


  $.courier_car3 = Car.Create(SENTINEL, -710.5004, -1557.8105, 11.5109); //On road near ship
  $.courier_car3.changeColor(10, 0);
  $.courier_car3.setHeading(66.0);
  $.courier_car3.setCruiseSpeed(15.0);
  courier_car3_speed = 0.0;
  $.courier_car3.setDrivingStyle(2);
  $.courier_car3.setOnlyDamagedByPlayer(true /* TRUE */);
  $.courier_car3.setChangeLane(false /* FALSE */);
  $.courier_car3.setUpsidedownNotDamaged(true /* TRUE */);
  $.courier_car3.setIdle();
  $.courier_car3.markAsConvoyCar(true /* TRUE */);
  $.courier_car3.setMission(11 /* MISSION_STOP_FOREVER */);

  ///ENTRANCE GUARDS & CAR1 DUDES//////////////////////////////////////
  /////////////////////////////////////////////////////////////////////

  $.courier_car1_guard1 = Char.Create(PEDTYPE_GANG_STREET, HFORI, -718.9443, -1530.9095, 11.2232);
  $.courier_car1_guard1.setHeading(299.6208);
  $.courier_car1_guard1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 2);
  $.courier_car1_guard1.clearThreatSearch();
  $.courier_car1_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car1_guard1.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car1_guard1.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car1_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car1_guard1.setRunning(true /* TRUE */);
  $.courier_car1_guard1.setObjGuardSpot(-718.9443, -1530.9095, 11.2232);
  $.courier_car1_guard1.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car1_guard1 TRUE


  $.courier_car1_guard2 = Char.Create(PEDTYPE_GANG_STREET, HFORI, -716.1127, -1533.7849, 11.2238); //SITTING
  $.courier_car1_guard2.setHeading(258.1555);
  $.courier_car1_guard2.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
  $.courier_car1_guard2.clearThreatSearch();
  $.courier_car1_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car1_guard2.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car1_guard2.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car1_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car1_guard2.setRunning(true /* TRUE */);
  $.courier_car1_guard2.setWaitState(WAITSTATE_SIT_IDLE, 60000000);
  $.courier_car1_guard2.setObjGuardSpot(-716.1127, -1533.7849, 11.2238);
  $.courier_car1_guard2.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car1_guard2 TRUE


  $.courier_car1_guard3 = Char.Create(PEDTYPE_GANG_STREET, WFORI, -715.5613, -1535.6270, 11.2565);
  $.courier_car1_guard3.setHeading(16.6536);
  $.courier_car1_guard3.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 9999);
  $.courier_car1_guard3.clearThreatSearch();
  $.courier_car1_guard3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car1_guard3.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car1_guard3.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car1_guard3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car1_guard3.setRunning(true /* TRUE */);
  $.courier_car1_guard3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 60000000);
  $.courier_car1_guard3.setObjGuardSpot(-715.5613, -1535.6270, 11.2565);
  $.courier_car1_guard3.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car1_guard3 TRUE


  $.courier_car1_guard4 = Char.Create(PEDTYPE_GANG_STREET, WFYRI, -710.0019, -1543.7793, 11.4329);
  $.courier_car1_guard4.setHeading(22.8506);
  $.courier_car1_guard4.giveWeapon(WEAPONTYPE_TEC9, 9999);
  $.courier_car1_guard4.clearThreatSearch();
  $.courier_car1_guard4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car1_guard4.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car1_guard4.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car1_guard4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car1_guard4.setRunning(true /* TRUE */);
  $.courier_car1_guard4.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 60000000);
  $.courier_car1_guard4.setObjGuardSpot(-710.0019, -1543.7793, 11.4329);
  $.courier_car1_guard4.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car1_guard4 TRUE

  ///CRANE GUARDS & CAR2 DUDES/////////////////////////////////////////

  $.courier_car2_guard1 = Char.Create(PEDTYPE_GANG_STREET, WFORI, -681.0981, -1557.2467, 11.4438);
  $.courier_car2_guard1.setHeading(334.7375);
  $.courier_car2_guard1.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
  $.courier_car2_guard1.clearThreatSearch();
  $.courier_car2_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car2_guard1.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car2_guard1.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car2_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car2_guard1.setRunning(true /* TRUE */);
  $.courier_car2_guard1.setObjGuardSpot(-681.0981, -1557.2467, 11.4438);
  $.courier_car2_guard1.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car2_guard1 TRUE


  $.courier_car2_guard2 = Char.Create(PEDTYPE_GANG_STREET, WFYBU, -679.4094, -1559.0453, 11.4483);
  $.courier_car2_guard2.setHeading(223.2479);
  $.courier_car2_guard2.giveWeapon(WEAPONTYPE_TEC9, 9999);
  $.courier_car2_guard2.clearThreatSearch();
  $.courier_car2_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car2_guard2.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car2_guard2.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car2_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car2_guard2.setRunning(true /* TRUE */);
  $.courier_car2_guard2.setObjGuardSpot(-679.4094, -1559.0453, 11.4483);
  $.courier_car2_guard2.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car2_guard2 TRUE

  ///COURTYARD GUARDS & CAR3 DUDES/////////////////////////////////////
  //STANDING ON WALKWAY////////////////////////////////////////////////

  $.courier_car3_guard1 = Char.Create(PEDTYPE_GANG_STREET, HFORI, -718.4953, -1560.2139, 13.8580);
  $.courier_car3_guard1.setHeading(14.0515);
  $.courier_car3_guard1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 2);
  $.courier_car3_guard1.clearThreatSearch();
  $.courier_car3_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car3_guard1.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car3_guard1.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car3_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car3_guard1.setRunning(true /* TRUE */);
  $.courier_car3_guard1.setObjGuardSpot(-718.4953, -1560.2139, 13.8580);
  $.courier_car3_guard1.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car3_guard1 TRUE

  //SITTING ON WALL

  $.courier_car3_guard2 = Char.Create(PEDTYPE_GANG_STREET, WFYBU, -722.6389, -1557.0291, 13.8587);
  $.courier_car3_guard2.setHeading(344.0981);
  $.courier_car3_guard2.giveWeapon(WEAPONTYPE_TEC9, 9999);
  $.courier_car3_guard2.clearThreatSearch();
  $.courier_car3_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car3_guard2.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car3_guard2.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car3_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car3_guard2.setRunning(true /* TRUE */);
  $.courier_car3_guard2.setObjGuardSpot(-722.6389, -1557.0291, 13.8587);
  $.courier_car3_guard2.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car3_guard2 TRUE

  //END OF WALKWAY AT ENTRANCE

  $.courier_car3_guard3 = Char.Create(PEDTYPE_GANG_STREET, WFYRI, -721.5871, -1542.4771, 13.8572);
  $.courier_car3_guard3.setHeading(344.0981);
  $.courier_car3_guard3.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
  $.courier_car3_guard3.clearThreatSearch();
  $.courier_car3_guard3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car3_guard3.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car3_guard3.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car3_guard3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car3_guard3.setRunning(true /* TRUE */);
  $.courier_car3_guard3.setObjGuardSpot(-721.5871, -1542.4771, 13.8572);
  $.courier_car3_guard3.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car3_guard3 TRUE

  //BASE OF WALKWAY INFRONT CARS

  $.courier_car3_guard4 = Char.Create(PEDTYPE_GANG_STREET, WFYRI, -721.0208, -1548.8218, 11.4844);
  $.courier_car3_guard4.setHeading(263.0088);
  $.courier_car3_guard4.giveWeapon(WEAPONTYPE_TEC9, 9999);
  $.courier_car3_guard4.clearThreatSearch();
  $.courier_car3_guard4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.courier_car3_guard4.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.courier_car3_guard4.setThreatSearch(1048576 /* THREAT_GUN */);
  $.courier_car3_guard4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.courier_car3_guard4.setRunning(true /* TRUE */);
  $.courier_car3_guard4.setObjGuardSpot(-721.0208, -1548.8218, 11.4844);
  $.courier_car3_guard4.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  //SET_CHAR_STAY_IN_SAME_PLACE courier_car3_guard4 TRUE


  //WAIT 10000000

  //ADD_BLIP_FOR_CHAR courier_car3_guard1 mission_blip2
  //ADD_BLIP_FOR_CHAR courier_car1_guard1 mission_blip3

  //SNIPER POSITION LIL ROOF IN COURTYARD

  $.sniper1 = Char.Create(PEDTYPE_GANG_STREET, BFYST, -703.3905, -1573.1348, 15.6165);
  $.sniper1.setHeading(312.8055);
  $.sniper1.giveWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */, 9999);
  $.sniper1.clearThreatSearch();
  $.sniper1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sniper1.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.sniper1.setThreatSearch(1048576 /* THREAT_GUN */);
  $.sniper1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.sniper1.setRunning(true /* TRUE */);
  $.sniper1.setObjAimGunAtChar($.scplayer);
  $.sniper1.setStayInSamePlace(true /* TRUE */);
  $.sniper1.setHeedThreats(true /* TRUE */);

  //SNIPER POSITION ON CRANE

  $.sniper2 = Char.Create(PEDTYPE_GANG_STREET, BFYST, -671.9470, -1553.9062, 22.7296);
  $.sniper2.setHeading(3.9435);
  $.sniper2.giveWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */, 9999);
  $.sniper2.clearThreatSearch();
  $.sniper2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sniper2.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.sniper2.setThreatSearch(1048576 /* THREAT_GUN */);
  $.sniper2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.sniper2.setRunning(true /* TRUE */);
  $.sniper2.setObjAimGunAtChar($.scplayer);
  $.sniper2.setStayInSamePlace(true /* TRUE */);
  $.sniper2.setHeedThreats(true /* TRUE */);

  //SNIPER POSITION ON LIL ROOF ENTRANCE

  $.sniper3 = Char.Create(PEDTYPE_GANG_STREET, BFYST, -722.8923, -1528.6473, 15.9040);
  $.sniper3.setHeading(331.8096);
  $.sniper3.giveWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */, 9999);
  $.sniper3.clearThreatSearch();
  $.sniper3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sniper3.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.sniper3.setThreatSearch(1048576 /* THREAT_GUN */);
  $.sniper3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.sniper3.setRunning(true /* TRUE */);
  $.sniper3.setObjAimGunAtChar($.scplayer);
  $.sniper3.setStayInSamePlace(true /* TRUE */);
  $.sniper3.setHeedThreats(true /* TRUE */);

  //SNIPER ON CORNER BUILDING

  $.sniper4 = Char.Create(PEDTYPE_GANG_STREET, BFYST, -728.5547, -1554.0133, 21.8729);
  $.sniper4.setHeading(275.5398);
  $.sniper4.giveWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */, 9999);
  $.sniper4.clearThreatSearch();
  $.sniper4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sniper4.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.sniper4.setThreatSearch(1048576 /* THREAT_GUN */);
  $.sniper4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.sniper4.setRunning(true /* TRUE */);
  $.sniper4.setObjAimGunAtChar($.scplayer);
  $.sniper4.setStayInSamePlace(true /* TRUE */);
  $.sniper4.setHeedThreats(true /* TRUE */);


  $.docks_guard = Char.Create(PEDTYPE_GANG_STREET, WFYRI, -721.8732, -1500.1005, 10.3946);
  $.docks_guard.setHeading(44.3659);
  $.docks_guard.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
  $.docks_guard.setRunning(true /* TRUE */);
  $.docks_guard.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

  //SET_CHAR_OBJ_FOLLOW_CHAR_IN_FORMATION CharID SecondCharID FormationPosition
  //FORMATION_NONE//0
  //FORMATION_BEHIND//1
  //FORMATION_BACKLEFT//2
  //FORMATION_BACKRIGHT//3
  //FORMATION_FRONTLEFT//4
  //FORMATION_FRONTRIGHT//5
  //FORMATION_LEFT//6
  //FORMATION_RIGHT//7
  //FORMATION_FRONT//8



  TIMERA = 3000;
  TIMERB = 3000;


  if (ONMISSION == 0) {
    $.courier_heli = Car.Create(MAVERICK, 408.1980, -1726.1954, 84.1376);
  }
}



async function mission_counter2_loop() {
  // SCM GOTO → mission_counter2_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    const _res160 = $.player1.getCoordinates();
$.player_x = _res160.x;
$.player_y = _res160.y;
$.player_z = _res160.z;
    $.game_timer = Clock.GetGameTimer();


    ++$.frame_counter;
    if ($.frame_counter > 3) {
      $.frame_counter = 0;
    }


    if ($.frame_counter == 0) {
      if ($.shoot_heli_down_flag == 0) {
        if (!(Car.IsDead($.courier_heli))) {
          if ($.player1.isInCar($.courier_heli)) {
            if (!(Char.IsDead($.sniper1))) {
              $.sniper1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
              $.sniper1.setObjDestroyCar($.courier_heli);
            }
            if (!(Char.IsDead($.sniper2))) {
              $.sniper2.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
              $.sniper2.setObjDestroyCar($.courier_heli);
            }
            $.shoot_heli_down_flag = 1;
          }
        }
      }

      ///courier_car1_guard1///////////////////////////////////////
      /////////////////////////////////////////////////////////////
      if (!(Char.IsDead($.courier_car1_guard1))) {
        if ($.courier_car1_guard1.isInAnyCar()) {
          $.courier_car1.markAsNoLongerNeeded();
          $.courier_car1 = $.courier_car1_guard1.storeCarIsInNoSave();
          [courier_car1_x, courier_car1_y, $.z] = $.courier_car1.getCoordinates();
          if ($.car1_ped_in_car_flag == -1) {
            TIMERA = 0;
            $.car1_ped_in_car_flag = 0;
          }
          if ($.car1_ped_in_car_flag == 0) {
            if ($.courier_flag > 4) {
              if (TIMERA > 2500) {
                if ($.security_warning == 1) {
                  $.courier_car1.setCruiseSpeed(100.0);
                  courier_car1_speed = 100.0;
                  $.courier_car1.setDrivingStyle(2);
                  $.courier_car1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                  $.car1_stuck_timer_start = $.game_timer;
                  $.car1_ped_in_car_flag = 1;
                  $.car1_stuck_flag = 0;
                  if ($.courier_flag == 7) {
                    $.next_car_timer = $.game_timer + 250;
                    $.courier_flag = 8;
                  }
                }
                else {
                  if ($.courier_flag > 6) {
                    $.courier_car1.setCruiseSpeed(15.0);
                    courier_car1_speed = 15.0;
                    $.courier_car1.setDrivingStyle(2);
                    if ($.car1_location_counter == 0) {
                      $.courier_car1.gotoCoordinates(-1133.0615, -342.2911, 9.8989); //INITIAL GOTO
                    }
                    else {
                      $.courier_car1.gotoCoordinatesAccurate(-963.9817, 322.1035, 10.1818); //CAR1 GOTO TRIAD BASE
                    }
                    $.car1_ped_in_car_flag = 2;
                    $.car1_stuck_flag = 0;
                    $.car1_stuck_timer_start = $.game_timer;
                    if ($.courier_flag == 7) {
                      $.courier_flag = 8;
                      $.next_car_timer = $.game_timer + 750;
                    }
                  }
                }
              }
            }
          }
          if ($.player1.locateAnyMeansCar2D($.courier_car1, 15.0, 15.0, false)) {
            $.courier_car1.setOnlyDamagedByPlayer(false /* FALSE */);
          }
          else {
            $.courier_car1.setOnlyDamagedByPlayer(true /* TRUE */);
          }
          if ($.player1.isInCar($.courier_car1)) {
            $.courier_car1_guard1.setObjKillPlayerOnFoot($.player1);
          }
          if ($.car1_arrived_flag == 0) {
            if ($.courier_car1.locate2D(-963.9817, 322.1035, 3.0, 3.0, false)) {
              $.car1_arrived_flag = 1;
            }
          }
          if ($.car1_arrived_flag == 0) {
            if (!(courier_car1_speed == 0.0)) {
              $.gosub_stuck_car = $.courier_car1;
              $.car_stuck_flag = $.car1_stuck_flag;
              $.stuck_timer_start = $.car1_stuck_timer_start;
              $.stuck_x = $.car1_stuck_x;
              $.stuck_y = $.car1_stuck_y;
              $.stuck_z = $.car1_stuck_z;
              await car_stuck_checks();  // SCM GOSUB car_stuck_checks
              $.car1_stuck_flag = $.car_stuck_flag;
              $.car1_stuck_timer_start = $.stuck_timer_start;
              $.car1_stuck_x = $.stuck_x;
              $.car1_stuck_y = $.stuck_y;
              $.car1_stuck_z = $.stuck_z;
              if ($.car1_stuck_flag == -9) {
                $.courier_car1_guard1.setObjFleeCar($.courier_car1);
                $.car1_stuck_flag = 0;
              }


            }
          }
          if ($.car1_ped_in_car_flag > 0) {
            $.courier_car1_health = $.courier_car1.getHealth();
            if ($.security_warning > 0) {
              if ($.car1_ped_in_car_flag == 2) {
                $.car1_ped_in_car_flag = 0;
              }
            }
            if ($.courier_car1_health < 900) {
              if ($.security_warning == 0) {
                if ($.car1_ped_in_car_flag == 2) {
                  $.car1_ped_in_car_flag = 0;
                  $.security_warning = 1;
                }
              }
            }
            if ($.courier_car1_health < 300) {
              $.courier_car1_guard1.setObjFleeCar($.courier_car1);
            }
            [courier_car1_x, courier_car1_y, $.z] = $.courier_car1.getCoordinates();
            $.temp_float_x = courier_car1_x - -963.9817;
            $.temp_float_y = courier_car1_y - 322.1035;
            $.temp_float_x = $.temp_float_x * $.temp_float_x;
            $.temp_float_y = $.temp_float_y * $.temp_float_y;
            $.temp_float_x = $.temp_float_x + $.temp_float_y;
            courier_car1_distance = Math.Sqrt($.temp_float_x);
            if ($.security_warning == 0) {
              if ($.car1_location_counter == 0) {
                if ($.courier_car1.locate2D(-1133.0615, -342.2911, 10.0, 10.0, false)) {
                  $.courier_car1.gotoCoordinatesAccurate(-963.9817, 322.1035, 10.1818); //CAR1 GOTO TRIAD BASE
                  $.car1_location_counter = 1;
                }
              }
              $.car1_distance_from_vehicle_behind = courier_car2_distance - courier_car1_distance;
              if ($.car1_distance_from_vehicle_behind > 20.0) {
                $.courier_car1.setCruiseSpeed(0.0);
                $.courier_car1.setTempAction(1 /* TEMPACT_WAIT */, 100);
                courier_car1_speed = 0.0;
              }
              else {
                $.courier_car1.setCruiseSpeed(15.0);
                courier_car1_speed = 15.0;
              }
            }
            if ($.car1_ped_in_car_flag == 1) {
              if (!($.player1.isInAnyCar())) {
                $.gosub_car_to_slow = $.courier_car1;
                $.gosub_target_entity = -1;
                await slow_car_if_close_to_entity();  // SCM GOSUB slow_car_if_close_to_entity
                courier_car1_speed = $.gosub_car_to_slow_speed;
                if ($.player1.locateAnyMeansCar2D($.courier_car1, 15.0, 15.0, false)) {
                  $.courier_car1_guard1.setObjKillPlayerOnFoot($.player1);
                }
              }
            }
            await car1_group_breaking();  // SCM GOSUB car1_group_breaking
          }
        }
        else {
          $.car1_ped_in_car_flag = -1;
          if ($.courier_flag > 4) {
            if ($.player1.locateAnyMeansChar2D($.courier_car1_guard1, 40.0, 40.0, false)) {
              if (!($.player1.isInAnyCar())) {
                $.courier_car1_guard1.setObjKillPlayerOnFoot($.player1);
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.courier_car1_guard1, 25.0, 25.0, false)) {
                  $.courier_car1_guard1.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.gosub_ped = $.courier_car1_guard1;
                  if (!(Car.IsDead($.courier_car1))) {
                    if ($.courier_car1_guard1.locateAnyMeansCar2D($.courier_car1, 20.0, 20.0, false)) {
                      $.courier_car1_guard1.setObjEnterCarAsDriver($.courier_car1);
                    }
                    else {
                      await steal_a_car();  // SCM GOSUB steal_a_car
                    }
                  }
                  else {
                    await steal_a_car();  // SCM GOSUB steal_a_car
                  }
                }
              }
            }
            else {
              $.gosub_ped = $.courier_car1_guard1;
              if (!(Car.IsDead($.courier_car1))) {
                if ($.courier_car1_guard1.locateAnyMeansCar2D($.courier_car1, 20.0, 20.0, false)) {
                  $.courier_car1_guard1.setObjEnterCarAsDriver($.courier_car1);
                }
                else {
                  await steal_a_car();  // SCM GOSUB steal_a_car
                }
              }
              else {
                await steal_a_car();  // SCM GOSUB steal_a_car
              }
            }
            await car1_group_breaking();  // SCM GOSUB car1_group_breaking
          }
        }
      }
      else {
        //REMOVE_BLIP mission_blip3
        $.courier_car1_guard1.markAsNoLongerNeeded();
        if (!(Char.IsDead($.courier_car1_guard2))) {
          $.courier_car1_guard1 = $.courier_car1_guard2;
          $.courier_car1_guard2 = -1;
          //ADD_BLIP_FOR_CHAR courier_car1_guard1 mission_blip3
          if (!(Char.IsDead($.courier_car1_guard3))) {
            $.courier_car1_guard3.followChar($.courier_car1_guard1);
            if (!($.courier_car1_guard3.isInCharsGroup($.courier_car1_guard1))) {
              $.courier_car1_guard3.setObjKillPlayerAnyMeans($.player1);
            }
          }
          if (!(Char.IsDead($.courier_car1_guard4))) {
            $.courier_car1_guard4.followChar($.courier_car1_guard1);
            if (!($.courier_car1_guard4.isInCharsGroup($.courier_car1_guard1))) {
              $.courier_car1_guard4.setObjKillPlayerAnyMeans($.player1);
            }
          }


        }
        else {
          $.courier_car1_guard2.markAsNoLongerNeeded();
          if (!(Char.IsDead($.courier_car1_guard3))) {
            $.courier_car1_guard1 = $.courier_car1_guard3;
            $.courier_car1_guard3 = -1;
            //ADD_BLIP_FOR_CHAR courier_car1_guard1 mission_blip3
            if (!(Char.IsDead($.courier_car1_guard4))) {
              $.courier_car1_guard4.followChar($.courier_car1_guard1);
              if (!($.courier_car1_guard4.isInCharsGroup($.courier_car1_guard1))) {
                $.courier_car1_guard4.setObjKillPlayerAnyMeans($.player1);
              }
            }
          }
          else {
            $.courier_car1_guard3.markAsNoLongerNeeded();
            if (!(Char.IsDead($.courier_car1_guard4))) {
              $.courier_car1_guard1 = $.courier_car1_guard4;
              $.courier_car1_guard4 = -1;
              //ADD_BLIP_FOR_CHAR courier_car1_guard1 mission_blip3

            }
            else {
              $.courier_car1_guard4.markAsNoLongerNeeded();
            }
          }
        }
      }
    }

    ///DOCKS GUARDS STUFF////////////////////////////////////////
    /////////////////////////////////////////////////////////////

    if ($.frame_counter == 1) {
      if ($.courier_flag > 4) {
        if (!(Char.IsDead($.courier_car1_guard1))) {
          if ($.guard1_into_car_flag == 0) {
            if (!(Car.IsDead($.courier_car1))) {
              if (!(Char.IsDead($.courier_car1_guard2))) {
                $.courier_car1_guard2.followChar($.courier_car1_guard1);
              }
              if (!(Char.IsDead($.courier_car1_guard3))) {
                $.courier_car1_guard3.followChar($.courier_car1_guard1);
              }
              if (!(Char.IsDead($.courier_car1_guard4))) {
                $.courier_car1_guard4.followChar($.courier_car1_guard1);
              }
              if (!($.courier_car1_guard1.isInAnyCar())) {
                $.courier_car1_guard1.setObjEnterCarAsDriver($.courier_car1);
                $.guard1_into_car_flag = 1;
              }
            }
            else {
              if ($.security_warning == 0) {
                $.security_warning = 1;
              }
            }
          }
          else {
            if ($.security_warning == 1) {
              if ($.courier_car1_guard1.isInAnyCar()) {
                $.guard1_into_car_flag = 2;
              }
              if ($.guard1_into_car_flag == 1) {
                $.courier_car1_guard1.setObjNoObj();
                $.courier_car1_guard1.setIdle();
                $.courier_car1_guard1.setObjKillPlayerOnFoot($.player1);
                $.guard1_into_car_flag = 2;
              }
            }
          }
        }
        else {
          if ($.security_warning == 0) {
            $.security_warning = 1;
          }
        }
        if (!(Char.IsDead($.courier_car3_guard1))) {
          if ($.guard2_into_car_flag == 0) {
            if (!(Car.IsDead($.courier_car3))) {
              if (!(Char.IsDead($.courier_car3_guard2))) {
                $.courier_car3_guard2.followChar($.courier_car3_guard1);
              }
              if (!(Char.IsDead($.courier_car3_guard3))) {
                $.courier_car3_guard3.followChar($.courier_car3_guard1);
              }
              if (!(Char.IsDead($.courier_car3_guard4))) {
                $.courier_car3_guard4.followChar($.courier_car3_guard1);
              }
              if (!($.courier_car3_guard1.isInAnyCar())) {
                $.courier_car3_guard1.setObjEnterCarAsDriver($.courier_car3);
                $.guard2_into_car_flag = 1;
              }
            }
            else {
              if ($.security_warning == 0) {
                $.security_warning = 1;
              }
            }
          }
          else {
            if ($.security_warning == 1) {
              if ($.courier_car3_guard1.isInAnyCar()) {
                $.guard2_into_car_flag = 2;
              }
              if ($.guard2_into_car_flag == 1) {
                $.courier_car3_guard1.setObjNoObj();
                $.courier_car3_guard1.setIdle();
                $.courier_car3_guard1.setObjKillPlayerOnFoot($.player1);
                $.guard2_into_car_flag = 2;
              }
            }
          }
        }
        else {
          if ($.security_warning == 0) {
            $.security_warning = 1;
          }
        }
      }
      if (!(Char.IsDead($.docks_guard))) {
        if ($.player1.locateOnFoot2D(-725.096, -1499.147, 3.7, 3.0, false)) {
          if ($.docks_guard_counter == 0) {
            if ($.audio_4_flag == 0) {
              $.audio_4_flag = 1;
              $.audio_4_timeout = $.game_timer + 6000;
            }
            $.docks_guard.setObjGotoPlayerOnFoot($.player1);
            $.docks_guard_counter = 1;
          }
        }
        else {
          if ($.player1.locateOnFoot2D(-706.433, -1512.958, 15.0, 15.0, false) || $.player1.locateOnFoot2D(-723.606, -1515.598, 15.0, 15.0, false)) {
            $.docks_guard.setObjKillPlayerOnFoot($.player1);
          }
          else {
            if ($.docks_guard_counter == 1) {
              $.docks_guard.setObjNoObj();
              $.docks_guard_counter = 0;
            }
          }
        }
        if ($.player1.locateInCar2D(-725.096, -1499.147, 3.7, 3.0, false)) {
          if (!($.docks_guard_counter == 2)) {
            $.docks_guard.clearThreatSearch();
            $.docks_guard.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.docks_guard.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
            $.docks_guard.setThreatSearch(1048576 /* THREAT_GUN */);
            $.players_car = $.player1.storeCarIsInNoSave();
            $.docks_guard.setObjDestroyCar($.players_car);
            $.docks_guard_counter = 2;
          }
        }
      }
      else {
        $.docks_guard.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      if (Char.IsDead($.courier_car1_guard1)) {
        $.courier_car1_guard1.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car1_guard1.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car1_guard2)) {
        $.courier_car1_guard2.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car1_guard2.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car1_guard3)) {
        $.courier_car1_guard3.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car1_guard3.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car1_guard4)) {
        $.courier_car1_guard4.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car1_guard4.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car2_guard1)) {
        $.courier_car2_guard1.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car2_guard1.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car2_guard2)) {
        $.courier_car2_guard2.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car2_guard2.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car3_guard1)) {
        $.courier_car3_guard1.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car3_guard1.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car3_guard2)) {
        $.courier_car3_guard2.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car3_guard2.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car3_guard3)) {
        $.courier_car3_guard3.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car3_guard3.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.courier_car3_guard4)) {
        $.courier_car3_guard4.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.courier_car3_guard4.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.sniper1)) {
        $.sniper1.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.sniper1.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.sniper2)) {
        $.sniper2.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.sniper2.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.sniper3)) {
        $.sniper3.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.sniper3.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (Char.IsDead($.sniper4)) {
        $.sniper4.markAsNoLongerNeeded();
        if ($.security_warning == 0) {
          $.security_warning = 1;
        }
      }
      else {
        if ($.security_warning == 1 && $.courier_flag < 7) {
          $.sniper4.setObjKillPlayerOnFoot($.player1);
        }
      }

      ///courier_stuff/////////////////////////////////////////////
      /////////////////////////////////////////////////////////////
      if (!(Char.IsDead($.courier))) {
        if ($.courier.isInAnyCar()) {
          if ($.courier.isLeavingVehicleToDie()) {
            $.courier_in_car = 0;
          }
          else {
            $.courier_in_car = 1;
          }
        }
        else {
          $.courier_in_car = 0;
          if ($.flee_car_timer > $.game_timer) {
            await car2_occupants_kill_player();  // SCM GOSUB car2_occupants_kill_player
          }
        }
        if ($.courier_flag == 1) {
          if ($.courier.locateInCar3D(-649.6716, -1590.7273, 40.0, 5.0, 5.0, 5.0, false)) {
            if (!(Car.IsDead($.courier_heli))) {
              $.courier_heli.gotoCoords(-664.9825, -1579.2522, 25.0, 15);
            }
            $.courier_flag = 2;
          }
        }
        if ($.courier_flag == 2) {
          if ($.courier.locateInCar3D(-664.9825, -1579.2522, 25.0, 5.0, 5.0, 5.0, false)) {
            if (!(Car.IsDead($.courier_heli))) {
              $.courier_heli.gotoCoords(-679.1260, -1569.7916, 17.7605, 10);
            }
            $.courier_flag = 3;
          }
        }
        if ($.courier_flag == 3) {
          if ($.courier.locateInCar3D(-679.1260, -1569.7916, 17.7605, 5.0, 5.0, 5.0, false)) {
            if (!(Car.IsDead($.courier_heli))) {
              $.courier_heli.gotoCoords(-683.1377, -1566.9713, 11.4, 5);
            }
            $.courier_flag = 4;
          }
        }
        if ($.courier_flag == 4) {
          if (!(Car.IsDead($.courier_heli))) {
            if ($.courier.locateAnyMeans3D(-683.1377, -1566.9713, 11.4, 3.0, 3.0, 3.0, false)) {
              if (!($.courier_heli.isInAirProper())) {
                if (!(Car.IsDead($.courier_car2))) {
                  $.courier.setObjLeaveAnyCar();
                  if (!(Char.IsDead($.courier_car2_guard1))) {
                    $.courier_car2_guard1.followChar($.courier);
                  }
                  if (!(Char.IsDead($.courier_car2_guard2))) {
                    $.courier_car2_guard2.followChar($.courier);
                  }
                  if (!(Char.IsDead($.courier_car2_guard3))) {
                    $.courier_car2_guard3.followChar($.courier);
                  }
                  $.courier_flag = 5;
                  Text.PrintNow("CNT2_08", 5000, 1); //The courier with the plates has arrived at the docks.
                  $.docks_blip.remove();
                }
                else {
                  if (!(Car.IsDead($.courier_heli))) {
                    $.courier_heli.gotoCoords(-679.1260, -1569.7916, 17.7605, 60);
                  }
                  $.courier_flag = -1;
                  if (!($.security_warning == 1)) {
                    $.security_warning = 1;
                  }
                }
              }
            }
          }
        }
        if ($.courier_flag == 5) {
          if (!($.courier.isInAnyCar())) {
            if (!(Car.IsDead($.courier_car2))) {
              $.courier.setObjEnterCarAsDriver($.courier_car2);
              $.courier_flag = 6;
            }
            else {
              if ($.audio_3_flag == 0) {
                $.audio_3_flag = 1;
                $.audio_3_timeout = $.game_timer + 6000;
              }
              if (!(Car.IsDead($.courier_heli))) {
                $.courier.setObjEnterCarAsDriver($.courier_heli);
                $.courier_flag = -1;
              }
            }
          }
        }
        if ($.courier_flag == 6) {
          if ($.courier.isInAnyCar()) {
            $.courier_flag = 7;
          }
        }
        if ($.courier_flag == -1) {
          if (!(Car.IsDead($.courier_heli))) {
            if ($.courier.isInCar($.courier_heli)) {
              $.courier_heli.gotoCoords(-664.9825, -1579.2522, 31.0306, 60);
              $.courier_flag = -2;
            }
          }
        }
        if ($.courier_flag == -2) {
          if ($.courier.locateInCar3D(-664.9825, -1579.2522, 31.0306, 5.0, 5.0, 5.0, false)) {
            if (!(Car.IsDead($.courier_heli))) {
              $.courier_heli.gotoCoords(-649.6716, -1590.7273, 40.0, 60);
              Text.PrintNow("CNT2_02", 5000, 1); //"The plates courier has fled."
              // SCM GOTO → mission_counter2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_counter2_failed"); // fallback: would break linear control flow
            }
          }
        }
        if ($.courier_flag2 == 1) {
          $.courier.leaveGroup();
          if (!(Char.IsDead($.courier_car2_guard1))) {
            $.courier_car2_guard1.leaveGroup();
          }
          if (!(Char.IsDead($.courier_car2_guard2))) {
            $.courier_car2_guard2.leaveGroup();
          }
          if (!(Char.IsDead($.courier_car2_guard3))) {
            $.courier_car2_guard3.leaveGroup();
          }
          $.courier.setObjRunToCoord(-973.9560, 317.3278); //ON PATH END OF ALLEY
          $.courier.setUsePednodeSeek(false /* FALSE */);
          $.courier_flag2 = 2;
        }
        if ($.courier_flag2 == 2) {
          if ($.courier.locateOnFoot2D(-973.9560, 317.3278, 1.5, 1.5, false)) {
            $.courier.setObjRunToCoord(-974.5215, 266.5887); //ABOVE STEPS
            $.courier.setUsePednodeSeek(false /* FALSE */);
            $.courier_flag2 = 3;
          }
        }
        if ($.courier_flag2 == 3) {
          if ($.courier.locateOnFoot2D(-974.5215, 266.5887, 1.5, 1.5, false)) {
            $.courier.setObjRunToCoord(-987.1808, 266.6001); //BOTTOM STEPS
            $.courier.setUsePednodeSeek(false /* FALSE */);
            $.courier_flag2 = 4;
          }
        }
        if ($.courier_flag2 == 4) {
          if ($.courier.locateStoppedOnFoot2D(-987.1808, 266.6001, 1.5, 1.5, false)) {
            $.courier.setObjGuardSpot(-987.1808, 266.6001, 7.7758);
            $.courier.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
            $.courier.setHeading(270.0);
            $.courier_flag2 = 5;
          }
        }
      }
      else {
        if ($.courier_in_car == 1) {
          Text.PrintNow("CNT2_04", 5000, 1); //"You destroyed the plates in the explosion!"
          // SCM GOTO → mission_counter2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_counter2_failed"); // fallback: would break linear control flow
        }
        else {
          if (!($.courier.isInWater())) {
            if (!($.security_warning == 1)) {
              $.security_warning = 1;
            }
            if ($.created_object_flag == 0) {
              $.mission_blip.remove();
              if (Char.DoesExist($.courier)) {
                const _res161 = World.GetDeadCharPickupCoords($.courier);
$.x = _res161.x;
$.y = _res161.y;
$.z = _res161.z;
              }
              else {
                Text.PrintNow("CNT2_04", 5000, 1); //"You destroyed the plates in the explosion!"
                // SCM GOTO → mission_counter2_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_counter2_failed"); // fallback: would break linear control flow
              }
              $.plates = Pickup.Create(1319 /* briefcase */, 3 /* PICKUP_ONCE */, $.x, $.y, $.z);
              $.mission_blip = Blip.AddForPickup($.plates);
              Text.PrintNow("CNT2_06", 5000, 1); //The courier has died and dropped the plates, get to them before anyone else.
              $.courier_in_car = 2;
              $.created_object_flag = 1;
            }
          }
          else {
            Text.PrintNow("CNT2_11", 5000, 1); //"~r~The plates are at the bottom of the sea!"
            // SCM GOTO → mission_counter2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_counter2_failed"); // fallback: would break linear control flow
          }
        }
      }
    }


    if ($.courier_in_car == 2) {
      if (!($.plates.hasBeenCollected())) {
        if ($.audio_2_flag == 0) {
          $.audio_2_flag = 1;
          $.audio_2_timeout = $.game_timer + 6000;
        }
        if (!(Char.IsDead($.courier_car2_guard1))) {
          $.courier_car2_guard1.leaveGroup();
          $.courier_car2_guard1.setObjNoObj();
          $.courier_car2_guard1.setObjRunToCoord($.x, $.y);
          $.courier_car2_guard1.setUsePednodeSeek(false /* FALSE */);
          if ($.courier_car2_guard1.locateOnFoot2D($.x, $.y, 1.0, 1.0, false)) {
            $.mission_blip.remove();
            $.plates.remove();
            Text.PrintNow("CNT2_07", 5000, 1); //One of the guards has picked up the plates, don't let 'em get away.
            $.created_object_flag = 0;
            $.courier = $.courier_car2_guard1;
            $.courier_car2_guard1 = -1;
            $.courier_in_car = 0;
            $.courier_has_died = 1;
            $.courier_flag2 = 0;
            $.mission_blip = Blip.AddForChar($.courier);
            if (!(Car.IsDead($.courier_car2))) {
              if ($.courier_car2.isHealthGreater(400)) {
                $.courier.setObjEnterCarAsDriver($.courier_car2);
              }
              else {
                $.gosub_ped = $.courier;
                await steal_a_car();  // SCM GOSUB steal_a_car
              }
            }
            else {
              $.gosub_ped = $.courier;
              await steal_a_car();  // SCM GOSUB steal_a_car
            }
          }
        }
        else {
          if (!(Char.IsDead($.courier_car2_guard2))) {
            $.courier_car2_guard2.leaveGroup();
            $.courier_car2_guard2.setObjNoObj();
            $.courier_car2_guard2.setObjRunToCoord($.x, $.y);
            $.courier_car2_guard2.setUsePednodeSeek(false /* FALSE */);
            if ($.courier_car2_guard2.locateOnFoot2D($.x, $.y, 1.0, 1.0, false)) {
              $.mission_blip.remove();
              $.plates.remove();
              Text.PrintNow("CNT2_07", 5000, 1); //One of the guards has picked up the plates, don't let 'em get away.
              $.created_object_flag = 0;
              $.courier = $.courier_car2_guard2;
              $.courier_car2_guard2 = -1;
              $.courier_in_car = 0;
              $.courier_has_died = 1;
              $.courier_flag2 = 0;
              $.mission_blip = Blip.AddForChar($.courier);
              if (!(Car.IsDead($.courier_car2))) {
                if ($.courier_car2.isHealthGreater(400)) {
                  $.courier.setObjEnterCarAsDriver($.courier_car2);
                }
                else {
                  $.gosub_ped = $.courier;
                  await steal_a_car();  // SCM GOSUB steal_a_car
                }
              }
              else {
                $.gosub_ped = $.courier;
                await steal_a_car();  // SCM GOSUB steal_a_car
              }
            }
          }
          else {
            if (!(Char.IsDead($.courier_car2_guard3))) {
              $.courier_car2_guard3.leaveGroup();
              $.courier_car2_guard3.setObjNoObj();
              $.courier_car2_guard3.setObjRunToCoord($.x, $.y);
              $.courier_car2_guard3.setUsePednodeSeek(false /* FALSE */);
              if ($.courier_car2_guard3.locateOnFoot2D($.x, $.y, 1.0, 1.0, false)) {
                $.mission_blip.remove();
                $.plates.remove();
                Text.PrintNow("CNT2_07", 5000, 1); //One of the guards has picked up the plates, don't let 'em get away.
                $.created_object_flag = 0;
                $.courier = $.courier_car2_guard3;
                $.courier_car2_guard3 = -1;
                $.courier_in_car = 0;
                $.courier_has_died = 1;
                $.courier_flag2 = 0;
                $.mission_blip = Blip.AddForChar($.courier);
                if (!(Car.IsDead($.courier_car2))) {
                  if ($.courier_car2.isHealthGreater(400)) {
                    $.courier.setObjEnterCarAsDriver($.courier_car2);
                  }
                  else {
                    $.gosub_ped = $.courier;
                    await steal_a_car();  // SCM GOSUB steal_a_car
                  }
                }
                else {
                  $.gosub_ped = $.courier;
                  await steal_a_car();  // SCM GOSUB steal_a_car
                }
              }
            }
          }
        }
      }
      else {
        $.courier_in_car = 3;
      }
    }


    if ($.courier_has_died == 1 && $.courier_in_car == 1) {
      if (!(Char.IsDead($.courier))) {
        $.courier_car2.markAsNoLongerNeeded();
        $.courier_car2 = -1;
        $.courier_car2 = $.courier.storeCarIsIn();
        $.courier_car2.setCruiseSpeed(15.0);
        courier_car2_speed = 15.0;
        $.courier_car2.setDrivingStyle(2);
        if ($.car2_location_counter == 0) {
          $.courier_car2.gotoCoordinates(-1133.0615, -342.2911, 9.8989); //INITIAL GOTO
        }
        else {
          $.courier_car2.gotoCoordinatesAccurate(-971.6564, 322.1157, 10.1667); //CAR2 GOTO TRIAD BASE
        }
        $.car2_stuck_flag = 0;
        $.car2_stuck_timer_start = $.game_timer;
        $.courier_has_died = 0;
      }
    }


    if ($.courier_in_car == 3) {
      $.mission_blip.remove();
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      Text.PrintNow("CNT2_05", 5000, 1); //"You have the countfeit plates."
      $.mission_blip = Blip.AddForCoord($.counterX, $.counterY, $.counterZ);
      $.courier_in_car = 4;
    }


    if ($.courier_in_car == 4) {
      if ($.player1.locateAnyMeans3D($.counterX, $.counterY, $.counterZ, 1.5, 2.0, 2.0, true)) {
        // SCM GOTO → mission_counter2_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_counter2_passed"); // fallback: would break linear control flow
      }
    }


    if ($.courier_flag > 6) {
      if (!(Char.IsDead($.sniper1))) {
        if (!(Car.IsDead($.courier_heli))) {
          if ($.fly_heli_away_flag == 0) {
            if (!($.player1.isInCar($.courier_heli))) {
              if ($.courier_heli.locate3D(-683.1377, -1566.9713, 11.4, 4.0, 4.0, 4.0, false)) {
                $.sniper1.setObjEnterCarAsDriver($.courier_heli);
                $.fly_heli_away_flag = 1;
              }
            }
          }
          if ($.fly_heli_away_flag == 1) {
            if ($.sniper1.isInCar($.courier_heli)) {
              $.courier_heli.gotoCoords(408.1980, -1726.1954, 84.1376, 50);
              $.courier_heli.markAsNoLongerNeeded();
              $.sniper1.markAsNoLongerNeeded();
              $.sniper2.markAsNoLongerNeeded();
              $.sniper3.markAsNoLongerNeeded();
              $.sniper4.markAsNoLongerNeeded();
              $.docks_guard.markAsNoLongerNeeded();
              $.fly_heli_away_flag = 2;
            }
          }
        }
      }
    }


    ///courier_car2//////////////////////////////////////////////
    /////////////////////////////////////////////////////////////

    if ($.frame_counter == 2) {
      if (!(Car.IsDead($.courier_car2))) {
        [courier_car2_x, courier_car2_y, $.z] = $.courier_car2.getCoordinates();

        ///SHOOTING FROM courier_car2////////////////////////////////
        if ($.shoot_from_car == 1) {
          if ($.shoot_from_car_counter == 1) {
            $.shoot_from_car_counter = 2;
          }
          if ($.shoot_from_car_counter == 0) {
            if ($.game_timer > $.shoot_from_car_timer) {
              if (!(Char.IsDead($.courier_car2_guard3))) {
                if ($.courier_car2_guard3.isInCar($.courier_car2)) {
                  $.shooting_char = $.courier_car2_guard3;
                }
              }
              if (!(Char.IsDead($.courier_car2_guard2))) {
                if ($.courier_car2_guard2.isInCar($.courier_car2)) {
                  $.shooting_char = $.courier_car2_guard2;
                }
              }
              if (!(Char.IsDead($.courier_car2_guard1))) {
                if ($.courier_car2_guard1.isInCar($.courier_car2)) {
                  $.shooting_char = $.courier_car2_guard1;
                }
              }
              if (!(Char.IsDead($.shooting_char))) {
                if ($.shooting_char.isInCar($.courier_car2)) {
                  const _res162 = $.courier_car2.getCoordinates();
$.x = _res162.x;
$.y = _res162.y;
$.z = _res162.z;
                  $.shooting_char.warpFromCarToCoord($.x, $.y, -10.0);
                  $.shoot_from_car_counter = 1;
                }
              }
            }
          }
          if ($.shoot_from_car_counter == 3) {
            if (!(Char.IsDead($.shooting_char))) {
              if ($.player1.isInAnyCar()) {
                $.players_car = $.player1.storeCarIsInNoSave();
                $.shooting_char.setObjDestroyCar($.players_car);
              }
              else {
                $.shooting_char.setObjKillPlayerOnFoot($.player1);
              }
            }
            else {
              $.shoot_from_car = 0;
            }
          }
          if ($.shoot_from_car_counter == 2) {
            if (!(Char.IsDead($.shooting_char))) {
              $.shooting_char.attachToCar($.courier_car2, 0.0, -0.3, 0.8, 2 /* FACING_BACK */, 360.0, WEAPONTYPE_TEC9);
              $.shoot_from_car_counter = 3;
            }
          }
        }
        else {
          if ($.shoot_from_car_counter > 0) {
            if (!(Char.IsDead($.shooting_char))) {
              $.shooting_char.detachFromCar();
              $.passenger_seat = 0;
              while (!($.courier_car2.isPassengerSeatFree($.passenger_seat))) {
                ++$.passenger_seat;
              }
              if ($.shooting_char == $.courier_car2_guard1) {
                $.courier_car2_guard1.delete();
                $.courier_car2_guard1 = Char.CreateAsPassenger($.courier_car2, PEDTYPE_GANG_STREET, WFORI, $.passenger_seat);
                $.shooting_char = $.courier_car2_guard1;
              }
              if ($.shooting_char == $.courier_car2_guard2) {
                $.courier_car2_guard2.delete();
                $.courier_car2_guard2 = Char.CreateAsPassenger($.courier_car2, PEDTYPE_GANG_STREET, WFYBU, $.passenger_seat);
                $.shooting_char = $.courier_car2_guard2;
              }
              if ($.shooting_char == $.courier_car2_guard3) {
                $.courier_car2_guard3.delete();
                $.courier_car2_guard3 = Char.CreateAsPassenger($.courier_car2, PEDTYPE_GANG_STREET, WFORI, $.passenger_seat);
                $.shooting_char = $.courier_car2_guard3;
              }
              $.shooting_char.giveWeapon(WEAPONTYPE_TEC9, 9999);
              $.shooting_char.clearThreatSearch();
              $.shooting_char.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.shooting_char.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
              $.shooting_char.setThreatSearch(1048576 /* THREAT_GUN */);
              $.shooting_char.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              $.shooting_char.setRunning(true /* TRUE */);
              $.shoot_from_car_timer = $.game_timer + 500;
              $.shoot_from_car_counter = 0;
            }
            else {
              $.shooting_char.detachFromCar();
              $.shoot_from_car_counter = 0;
            }
          }
        }
        if (!(Char.IsDead($.courier))) {
          if ($.courier.isInCar($.courier_car2)) {
            if ($.security_warning == 1) {
              $.courier_flag = 8;
            }
          }
        }
        if ($.courier_flag == 8) {
          if ($.game_timer > $.next_car_timer || $.security_warning == 1) {
            $.courier_car2.setCruiseSpeed(15.0);
            courier_car2_speed = 15.0;
            $.courier_car2.setDrivingStyle(2);
            if ($.car2_location_counter == 0) {
              $.courier_car2.gotoCoordinates(-1133.0615, -342.2911, 9.8989); //INITIAL GOTO
              $.docks_guard.markAsNoLongerNeeded();
            }
            else {
              $.courier_car2.gotoCoordinatesAccurate(-971.6564, 322.1157, 10.1667); //CAR2 GOTO TRIAD BASE
            }
            $.car2_stuck_flag = 0;
            $.car2_stuck_timer_start = $.game_timer;
            $.next_car_timer = $.game_timer + 750;
            $.courier_flag = 9;
          }
        }
        if ($.player1.locateAnyMeansCar2D($.courier_car2, 15.0, 15.0, false)) {
          $.courier_car2.setOnlyDamagedByPlayer(false /* FALSE */);
        }
        else {
          $.courier_car2.setOnlyDamagedByPlayer(true /* TRUE */);
        }
        if ($.car2_location_counter == 0) {
          if ($.courier_car2.locate2D(-1133.0615, -342.2911, 10.0, 10.0, false)) {
            $.courier_car2.gotoCoordinatesAccurate(-971.6564, 322.1157, 10.1667); //CAR2 GOTO TRIAD BASE
            $.car2_location_counter = 1;
          }
        }
        if ($.courier_flag > 8) {
          if ($.car2_arrived_flag == 0) {
            if ($.courier_car2.locate2D(-971.6564, 322.1157, 3.0, 3.0, false)) {
              $.car2_arrived_flag = 1;
            }
          }
          if ($.car2_arrived_flag == 0) {
            if (!(courier_car2_speed == 0.0)) {
              $.gosub_stuck_car = $.courier_car2;
              $.car_stuck_flag = $.car2_stuck_flag;
              $.stuck_timer_start = $.car2_stuck_timer_start;
              $.stuck_x = $.car2_stuck_x;
              $.stuck_y = $.car2_stuck_y;
              $.stuck_z = $.car2_stuck_z;
              await car_stuck_checks();  // SCM GOSUB car_stuck_checks
              $.car2_stuck_flag = $.car_stuck_flag;
              $.car2_stuck_timer_start = $.stuck_timer_start;
              $.car2_stuck_x = $.stuck_x;
              $.car2_stuck_y = $.stuck_y;
              $.car2_stuck_z = $.stuck_z;
              if ($.security_warning > 0) {
                if ($.car2_stuck_flag == -9) {
                  if (!(Char.IsDead($.courier))) {
                    $.courier.setObjFleeCar($.courier_car2);
                  }
                  $.car2_stuck_flag = 0;
                }
              }
            }
          }
          else {
            if ($.courier_flag2 == 0) {
              $.courier_flag2 = 1;
            }
          }
        }
        $.courier_car2_health = $.courier_car2.getHealth();
        if ($.courier_car2_health < 990) {
          if ($.security_warning == 0) {
            $.security_warning = 1;
          }
        }
        if ($.courier_flag > 8) {
          if ($.courier_car2_health < 300) {
            $.courier_car2.setCruiseSpeed(0.0);
            $.courier_car2.setTempAction(1 /* TEMPACT_WAIT */, 100);
            courier_car2_speed = 0.0;
            if (!(Char.IsDead($.courier))) {
              $.courier.setObjFleeCar($.courier_car2);
            }
            $.flee_car_timer = $.game_timer + 5000;
            $.security_warning = 1;
          }
          if ($.security_warning == 0) {
            if (!(Car.IsDead($.courier_car1))) {
              $.gosub_car_to_slow = $.courier_car2;
              $.gosub_target_entity = $.courier_car1;
              await slow_car_if_close_to_entity();  // SCM GOSUB slow_car_if_close_to_entity
              courier_car2_speed = $.gosub_car_to_slow_speed;

              //THIS BIT OF CODE CHECKS TO SEE HOW FAR THE CAR IS FROM THE DESTINATION
              [courier_car2_x, courier_car2_y, $.z] = $.courier_car2.getCoordinates();
              $.temp_float_x = courier_car2_x - -963.9817;
              $.temp_float_y = courier_car2_y - 322.1035;
              $.temp_float_x = $.temp_float_x * $.temp_float_x;
              $.temp_float_y = $.temp_float_y * $.temp_float_y;
              $.temp_float_x = $.temp_float_x + $.temp_float_y;
              courier_car2_distance = Math.Sqrt($.temp_float_x);

              //THIS BIT OF CODE CHECKS TO SEE IF CAR1 IS INFRONT OF CAR2
              $.forward_x = $.courier_car2.getForwardX();
              $.forward_y = $.courier_car2.getForwardY();
              if (!(Car.IsDead($.courier_car1))) {
                [courier_car1_x, courier_car1_y, $.z] = $.courier_car1.getCoordinates();
              }
              [courier_car2_x, courier_car2_y, $.z] = $.courier_car2.getCoordinates();
              // IF (((forward_x * (car2_x - car1_x)) + (forward_y * (car2_y - car1_y)>) IS GREATER THAN 0.0 CAR IS IN FRONT
              $.temp_float_x = courier_car2_x - courier_car1_x;
              $.forward_x = $.forward_x * $.temp_float_x;
              $.temp_float_y = courier_car2_y - courier_car1_y;
              $.forward_y = $.forward_y * $.temp_float_y;
              $.sum_x_y_temp = $.forward_x + $.forward_y;
              $.temp_y = courier_car1_y - 20.0;
              if ($.sum_x_y_temp > 0.0) {
                if (courier_car2_y > $.temp_y) {
                  $.courier_car2.setCruiseSpeed(0.0);
                  $.courier_car2.setTempAction(1 /* TEMPACT_WAIT */, 100);
                  courier_car2_speed = 0.0;
                }
              }
            }
            else {
              $.courier_car2.setCruiseSpeed(15.0);
              courier_car2_speed = 15.0;
            }
            $.car2_distance_from_vehicle_behind = courier_car3_distance - courier_car2_distance;
            if ($.car2_distance_from_vehicle_behind > 20.0) {
              $.courier_car2.setCruiseSpeed(0.0);
              $.courier_car2.setTempAction(1 /* TEMPACT_WAIT */, 100);
              courier_car2_speed = 0.0;
            }
            else {
              $.courier_car2.setCruiseSpeed(15.0);
              courier_car2_speed = 15.0;
            }
          }
          if ($.security_warning == 1) {
            $.x_temp = $.player_x - courier_car2_x;
            $.y_temp = $.player_y - courier_car2_y;
            $.x_temp = $.x_temp * $.x_temp;
            $.y_temp = $.y_temp * $.y_temp;
            $.sum_x_y_temp = $.x_temp + $.y_temp;
            $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
            courier_car2_speed = 1000.0 / $.sum_x_y_temp;
            if (courier_car2_speed > 50.0) {
              courier_car2_speed = 50.0;
            }
            if (courier_car2_speed < 20.0) {
              courier_car2_speed = 20.0;
            }
            $.courier_car2.setCruiseSpeed(courier_car2_speed);
            if ($.player1.locateInCarCar2D($.courier_car2, 20.0, 20.0, false)) {
              if ($.courier_car2.isUpright()) {
                if (!($.courier_car2.isStopped())) {
                  if (courier_car2_speed > 15.0) {
                    if ($.courier_car2.hasBeenDamagedByWeapon(16 /* WEAPONTYPE_RAMMEDBYCAR */) && !($.courier_car2.isHealthGreater($.courier_car2_health_shoot))) {
                      $.shoot_from_car = 0;
                    }
                    else {
                      $.shoot_from_car = 1;
                    }
                    $.courier_car2.clearLastWeaponDamage();
                    $.courier_car2_health_shoot = $.courier_car2.getHealth();
                    $.courier_car2_health_shoot -= 25;
                  }
                  else {
                    $.shoot_from_car = 0;
                  }
                }
                else {
                  $.shoot_from_car = 0;
                }
              }
              else {
                $.shoot_from_car = 0;
              }
            }
            else {
              $.shoot_from_car = 0;
            }
          }
          else {
            $.shoot_from_car = 0;
          }
        }
        else {
          $.shoot_from_car = 0;
        }
      }
      else {
        $.courier_car2_guard1.detachFromCar();
        $.courier_car2_guard2.detachFromCar();
        $.courier_car2_guard3.detachFromCar();
        $.shoot_from_car = 0;
      }
    }

    ///courier_car3_guard1///////////////////////////////////////
    /////////////////////////////////////////////////////////////

    if ($.frame_counter == 3) {
      if (!(Char.IsDead($.courier_car3_guard1))) {
        if ($.courier_car3_guard1.isInAnyCar()) {
          $.courier_car3.markAsNoLongerNeeded();
          $.courier_car3 = $.courier_car3_guard1.storeCarIsInNoSave();
          [courier_car3_x, courier_car3_y, $.z] = $.courier_car3.getCoordinates();
          if ($.car3_ped_in_car_flag == -1) {
            TIMERB = 0;
            $.car3_ped_in_car_flag = 0;
          }
          if ($.courier_flag == 9) {
            if ($.game_timer > $.next_car_timer) {
              $.courier_car3.setCruiseSpeed(15.0);
              courier_car3_speed = 15.0;
              $.courier_car3.setDrivingStyle(2);
              if ($.car3_location_counter == 0) {
                $.courier_car3.gotoCoordinates(-1133.0615, -342.2911, 9.8989); //INITIAL GOTO
              }
              else {
                $.courier_car3.gotoCoordinatesAccurate(-984.1348, 322.0096, 10.1792); //CAR3 GOTO
              }
              $.car3_stuck_flag = 0;
              $.car3_stuck_timer_start = $.game_timer;
              $.courier_flag = 10;
            }
          }
          if ($.player1.locateAnyMeansCar2D($.courier_car3, 15.0, 15.0, false)) {
            $.courier_car3.setOnlyDamagedByPlayer(false /* FALSE */);
          }
          else {
            $.courier_car3.setOnlyDamagedByPlayer(true /* TRUE */);
          }
          if ($.car3_ped_in_car_flag == 0) {
            if ($.courier_flag > 4 || $.security_warning == 1) {
              if (TIMERB > 2500) {
                if ($.security_warning == 1) {
                  $.courier_car3.setCruiseSpeed(100.0);
                  courier_car3_speed = 100.0;
                  $.courier_car3.setDrivingStyle(2);
                  $.courier_car3.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                  $.car3_stuck_timer_start = $.game_timer;
                  $.car3_ped_in_car_flag = 1;
                }
                else {
                  if ($.courier_flag > 9) {
                    $.courier_car3.setCruiseSpeed(15.0);
                    courier_car3_speed = 15.0;
                    $.courier_car3.setDrivingStyle(2);
                    if ($.car3_location_counter == 0) {
                      $.courier_car3.gotoCoordinates(-1133.0615, -342.2911, 9.8989); //INITIAL GOTO
                    }
                    else {
                      $.courier_car3.gotoCoordinatesAccurate(-984.1348, 322.0096, 10.1792); //CAR3 GOTO
                    }
                    $.car3_ped_in_car_flag = 2;
                  }
                }
              }
            }
          }
          if ($.car3_ped_in_car_flag > 0) {
            if ($.player1.isInCar($.courier_car3)) {
              $.courier_car3_guard1.setObjKillPlayerOnFoot($.player1);
            }
            if ($.courier_flag > 9) {
              if ($.car3_arrived_flag == 0) {
                if ($.courier_car3.locate2D(-984.1348, 322.0096, 3.0, 3.0, false)) {
                  $.car3_arrived_flag = 1;
                }
              }
              if ($.car3_arrived_flag == 0) {
                if (!(courier_car3_speed == 0.0)) {
                  $.gosub_stuck_car = $.courier_car3;
                  $.car_stuck_flag = $.car3_stuck_flag;
                  $.stuck_timer_start = $.car3_stuck_timer_start;
                  $.stuck_x = $.car3_stuck_x;
                  $.stuck_y = $.car3_stuck_y;
                  $.stuck_z = $.car3_stuck_z;
                  await car_stuck_checks();  // SCM GOSUB car_stuck_checks
                  $.car3_stuck_flag = $.car_stuck_flag;
                  $.car3_stuck_timer_start = $.stuck_timer_start;
                  $.car3_stuck_x = $.stuck_x;
                  $.car3_stuck_y = $.stuck_y;
                  $.car3_stuck_z = $.stuck_z;
                  if ($.car3_stuck_flag == -9) {
                    $.courier_car3_guard1.setObjFleeCar($.courier_car3);
                    $.car3_stuck_flag = 0;
                  }
                }
              }
              if ($.security_warning == 0) {
                if ($.car3_location_counter == 0) {
                  if ($.courier_car3.locate2D(-1133.0615, -342.2911, 10.0, 10.0, false)) {
                    $.courier_car3.gotoCoordinatesAccurate(-984.1348, 322.0096, 10.1792); //car3 GOTO TRIAD BASE
                    $.car3_location_counter = 1;
                  }
                }
                $.gosub_car_to_slow = $.courier_car3;
                $.gosub_target_entity = $.courier_car2;
                await slow_car_if_close_to_entity();  // SCM GOSUB slow_car_if_close_to_entity
                courier_car3_speed = $.gosub_car_to_slow_speed;
              }
            }
            $.courier_car3_health = $.courier_car3.getHealth();
            if ($.security_warning == 1) {
              if ($.car3_ped_in_car_flag == 2) {
                $.car3_ped_in_car_flag = 0;
              }
            }
            else {
              //THIS BIT OF CODE CHECKS TO SEE IF CAR3 IS INFRONT OF CAR2
              $.forward_x = $.courier_car3.getForwardX();
              $.forward_y = $.courier_car3.getForwardY();
              if (!(Car.IsDead($.courier_car2))) {
                [courier_car2_x, courier_car2_y, $.z] = $.courier_car2.getCoordinates();
              }
              [courier_car3_x, courier_car3_y, $.z] = $.courier_car3.getCoordinates();
              // IF (((forward_x * (car3_x - car2_x)) + (forward_y * (car3_y - car2_y)>) IS GREATER THAN 0.0 CAR3 IS IN FRONT
              $.temp_float_x = courier_car3_x - courier_car2_x;
              $.forward_x = $.forward_x * $.temp_float_x;
              $.temp_float_y = courier_car3_y - courier_car2_y;
              $.forward_y = $.forward_y * $.temp_float_y;
              $.sum_x_y_temp = $.forward_x + $.forward_y;
              $.temp_y = courier_car2_y - 20.0;
              if ($.sum_x_y_temp > 0.0) {
                if (courier_car3_y > $.temp_y) {
                  $.courier_car3.setCruiseSpeed(0.0);
                  $.courier_car3.setTempAction(1 /* TEMPACT_WAIT */, 100);
                  courier_car3_speed = 0.0;
                }
              }
            }
            if ($.courier_car3_health < 900) {
              if ($.security_warning == 0) {
                if ($.car3_ped_in_car_flag == 2) {
                  $.car3_ped_in_car_flag = 0;
                  $.security_warning = 1;
                }
              }
            }
            if ($.courier_car3_health < 300) {
              $.courier_car3_guard1.setObjFleeCar($.courier_car3);
            }
            if ($.car3_ped_in_car_flag == 1) {
              if (!($.player1.isInAnyCar())) {
                $.gosub_car_to_slow = $.courier_car3;
                $.gosub_target_entity = -1;
                await slow_car_if_close_to_entity();  // SCM GOSUB slow_car_if_close_to_entity
                courier_car3_speed = $.gosub_car_to_slow_speed;
                if ($.player1.locateAnyMeansCar2D($.courier_car3, 15.0, 15.0, false)) {
                  $.courier_car3_guard1.setObjKillPlayerOnFoot($.player1);
                }
              }
            }
            await car3_group_breaking();  // SCM GOSUB car3_group_breaking
          }
        }
        else {
          $.car3_ped_in_car_flag = -1;
          if ($.courier_flag > 4) {
            if ($.player1.locateAnyMeansChar2D($.courier_car3_guard1, 40.0, 40.0, false)) {
              if (!($.player1.isInAnyCar())) {
                $.courier_car3_guard1.setObjKillPlayerOnFoot($.player1);
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.courier_car3_guard1, 25.0, 25.0, false)) {
                  $.courier_car3_guard1.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.gosub_ped = $.courier_car3_guard1;
                  if (!(Car.IsDead($.courier_car3))) {
                    if ($.courier_car3_guard1.locateAnyMeansCar2D($.courier_car3, 20.0, 20.0, false)) {
                      $.courier_car3_guard1.setObjEnterCarAsDriver($.courier_car3);
                    }
                    else {
                      await steal_a_car();  // SCM GOSUB steal_a_car
                    }
                  }
                  else {
                    await steal_a_car();  // SCM GOSUB steal_a_car
                  }
                }
              }
            }
            else {
              $.gosub_ped = $.courier_car3_guard1;
              if (!(Car.IsDead($.courier_car3))) {
                if ($.courier_car3_guard1.locateAnyMeansCar2D($.courier_car3, 20.0, 20.0, false)) {
                  $.courier_car3_guard1.setObjEnterCarAsDriver($.courier_car3);
                }
                else {
                  await steal_a_car();  // SCM GOSUB steal_a_car
                }
              }
              else {
                await steal_a_car();  // SCM GOSUB steal_a_car
              }
            }
            await car3_group_breaking();  // SCM GOSUB car3_group_breaking
          }
        }
      }
      else {
        //REMOVE_BLIP	mission_blip2
        $.courier_car3_guard1.markAsNoLongerNeeded();
        if (!(Char.IsDead($.courier_car3_guard2))) {
          $.courier_car3_guard1 = $.courier_car3_guard2;
          $.courier_car3_guard2 = -1;
          //ADD_BLIP_FOR_CHAR courier_car3_guard1 mission_blip2
          if (!(Char.IsDead($.courier_car3_guard3))) {
            $.courier_car3_guard3.followChar($.courier_car3_guard1);
            if (!($.courier_car3_guard3.isInCharsGroup($.courier_car3_guard1))) {
              $.courier_car3_guard3.setObjKillPlayerAnyMeans($.player1);
            }
          }
          if (!(Char.IsDead($.courier_car3_guard4))) {
            $.courier_car3_guard4.followChar($.courier_car3_guard1);
            if (!($.courier_car3_guard4.isInCharsGroup($.courier_car3_guard1))) {
              $.courier_car3_guard4.setObjKillPlayerAnyMeans($.player1);
            }
          }


        }
        else {
          $.courier_car3_guard2.markAsNoLongerNeeded();
          if (!(Char.IsDead($.courier_car3_guard3))) {
            $.courier_car3_guard1 = $.courier_car3_guard3;
            $.courier_car3_guard3 = -1;
            //ADD_BLIP_FOR_CHAR courier_car3_guard1 mission_blip2
            if (!(Char.IsDead($.courier_car3_guard4))) {
              $.courier_car3_guard4.followChar($.courier_car3_guard1);
              if (!($.courier_car3_guard4.isInCharsGroup($.courier_car3_guard1))) {
                $.courier_car3_guard4.setObjKillPlayerAnyMeans($.player1);
              }
            }
          }
          else {
            $.courier_car3_guard3.markAsNoLongerNeeded();
            if (!(Char.IsDead($.courier_car3_guard4))) {
              $.courier_car3_guard1 = $.courier_car3_guard4;
              $.courier_car3_guard4 = -1;
              //ADD_BLIP_FOR_CHAR courier_car3_guard1 mission_blip2

            }
            else {
              $.courier_car3_guard4.markAsNoLongerNeeded();
            }
          }
        }
      }
      if ($.car2_location_counter == 1) {
        if ($.sniper_dudes_counter == 0) {
          $.sniper1.markAsNoLongerNeeded();
          $.sniper1 = Char.Create(PEDTYPE_GANG_STREET, BFYST, -987.1808, 266.6001, 7.7758);
          $.sniper1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
          $.sniper1.clearThreatSearch();
          $.sniper1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sniper1.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
          $.sniper1.setThreatSearch(1048576 /* THREAT_GUN */);
          $.sniper1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.sniper1.setRunning(true /* TRUE */);
          $.sniper1.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
          $.sniper2.markAsNoLongerNeeded();
          $.sniper2 = Char.Create(PEDTYPE_GANG_STREET, BFYST, -985.7646, 266.4785, 7.7755);
          $.sniper2.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
          $.sniper2.clearThreatSearch();
          $.sniper2.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sniper2.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
          $.sniper2.setThreatSearch(1048576 /* THREAT_GUN */);
          $.sniper2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.sniper2.setRunning(true /* TRUE */);
          $.sniper2.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
          $.sniper3.markAsNoLongerNeeded();
          $.sniper3 = Char.Create(PEDTYPE_GANG_STREET, BFYST, -984.2117, 266.6248, 7.7751);
          $.sniper3.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
          $.sniper3.clearThreatSearch();
          $.sniper3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sniper3.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
          $.sniper3.setThreatSearch(1048576 /* THREAT_GUN */);
          $.sniper3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.sniper3.setRunning(true /* TRUE */);
          $.sniper3.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
          $.sniper4.markAsNoLongerNeeded();
          $.sniper4 = Char.Create(PEDTYPE_GANG_STREET, BFYST, -982.5906, 266.5252, 7.7803);
          $.sniper4.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
          $.sniper4.clearThreatSearch();
          $.sniper4.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sniper4.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
          $.sniper4.setThreatSearch(1048576 /* THREAT_GUN */);
          $.sniper4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.sniper4.setRunning(true /* TRUE */);
          $.sniper4.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
          $.sniper_dudes_counter = 1;
        }
      }
      if ($.sniper_dudes_counter == 1) {
        cnt2_left_door_heading += 3.0;
        if (cnt2_left_door_heading > 90.0) {
          cnt2_left_door_heading = 90.0;
        }
        $.cnt2_left_door.setHeading(cnt2_left_door_heading);
        cnt2_right_door_heading -= 3.0;
        if (cnt2_right_door_heading < 0.0) {
          cnt2_right_door_heading += 360.0;
        }
        if (cnt2_right_door_heading < 270.0) {
          cnt2_right_door_heading = 270.0;
        }
        $.cnt2_right_door.setHeading(cnt2_right_door_heading);
        if (cnt2_left_door_heading == 90.0 && cnt2_right_door_heading == 270.0) {
          $.sniper_dudes_counter = 2;
        }
        //IS_PLAYER_IN_AREA_3D player1 -991.591 261.036 7.775 -981.068 271.96 11.506 0 //DONT CLOSE DOOR
        //IS_CHAR_IN_AREA_3D courier -991.591 261.036 7.775 -983.0 271.96 11.506 0 //CLOSE DOOR

      }
      if ($.sniper_dudes_counter == 2) {
        if (!(Char.IsDead($.courier))) {
          if ($.courier.isInArea3D(-991.591, 261.036, 7.775, -983.0, 271.96, 11.506, false)) {
            if (!($.player1.isInArea3D(-991.591, 261.036, 7.775, -981.068, 271.96, 11.506, false))) {
              cnt2_left_door_heading -= 3.0;
              if (cnt2_left_door_heading < 0.0) {
                cnt2_left_door_heading = 0.0;
              }
              $.cnt2_left_door.setHeading(cnt2_left_door_heading);
              cnt2_right_door_heading += 3.0;
              if (cnt2_right_door_heading > 360.0) {
                cnt2_right_door_heading = 0.0;
              }
              $.cnt2_right_door.setHeading(cnt2_right_door_heading);
              if (cnt2_left_door_heading == 0.0 && cnt2_right_door_heading == 0.0) {
                Text.PrintNow("CNT2_03", 5000, 1); //"The courier has arrived at his destination safely, you're too late!"
                $.courier.delete();
                // SCM GOTO → mission_counter2_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_counter2_failed"); // fallback: would break linear control flow
              }
            }
          }
        }
        if (!(Char.IsDead($.sniper1))) {
          if ($.sniper1_flag == 0) {
            $.sniper1.setObjGotoCoordOnFoot(-973.5972, 266.4069);
            if ($.sniper1.locateOnFoot2D(-973.5972, 266.4069, 1.0, 1.0, false)) {
              $.sniper1_flag = 1;
            }
          }
          if ($.sniper1_flag == 1) {
            $.sniper1.setObjGotoCoordOnFoot(-974.2487, 262.6737);
            if ($.sniper1.locateStoppedOnFoot2D(-974.2487, 262.6737, 1.0, 1.0, false)) {
              $.sniper1.setObjGuardSpot(-974.2487, 262.6737, 10.2265);
              $.sniper1.setHeading(321.3187);
              $.sniper1_flag = 2;
            }
          }
        }
        if (!(Char.IsDead($.sniper2))) {
          if ($.sniper2_flag == 0) {
            $.sniper2.setObjGotoCoordOnFoot(-973.5972, 266.4069);
            if ($.sniper2.locateOnFoot2D(-973.5972, 266.4069, 1.0, 1.0, false)) {
              $.sniper2_flag = 1;
            }
          }
          if ($.sniper2_flag == 1) {
            $.sniper2.setObjGotoCoordOnFoot(-969.0840, 282.6923);
            if ($.sniper2.locateStoppedOnFoot2D(-969.0840, 282.6923, 1.0, 1.0, false)) {
              $.sniper2.setObjGuardSpot(-969.0840, 282.6923, 10.2265);
              $.sniper2.setHeading(159.3190);
              $.sniper2_flag = 2;
            }
          }
        }
        if (!(Char.IsDead($.sniper3))) {
          if ($.sniper3_flag == 0) {
            $.sniper3.setObjGotoCoordOnFoot(-973.5972, 266.4069);
            if ($.sniper3.locateOnFoot2D(-973.5972, 266.4069, 1.0, 1.0, false)) {
              $.sniper3_flag = 1;
            }
          }
          if ($.sniper3_flag == 1) {
            $.sniper3.setObjGotoCoordOnFoot(-969.8824, 263.6498);
            if ($.sniper3.locateStoppedOnFoot2D(-969.8824, 263.6498, 1.0, 1.0, false)) {
              $.sniper3.setObjGuardSpot(-969.8824, 263.6498, 10.2265);
              $.sniper3.setHeading(12.6357);
              $.sniper3_flag = 2;
            }
          }
        }
        if (!(Char.IsDead($.sniper4))) {
          if ($.sniper4_flag == 0) {
            $.sniper4.setObjGotoCoordOnFoot(-973.5972, 266.4069);
            if ($.sniper4.locateOnFoot2D(-973.5972, 266.4069, 1.0, 1.0, false)) {
              $.sniper4_flag = 1;
            }
          }
          if ($.sniper4_flag == 1) {
            $.sniper4.setObjGotoCoordOnFoot(-977.6256, 277.8756);
            if ($.sniper4.locateStoppedOnFoot2D(-977.6256, 277.8756, 1.0, 1.0, false)) {
              $.sniper4.setObjGuardSpot(-977.6256, 277.8756, 10.2265);
              $.sniper4.setHeading(3.8761);
              $.sniper4_flag = 2;
            }
          }
        }
      }
    }


    if ($.security_warning == 1) {
      if ($.audio_1_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          $.audio_1_flag = 4;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_counter2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_counter2_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_1_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          $.audio_1_flag = 3;
        }
      }
      if ($.audio_1_flag == 0) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CNT2_1" as any); //{Female Goons} Kill him.
          $.audio_1_flag = 2;
          $.is_audio_in_use = 1;
        }
      }
    }


    if ($.audio_2_flag > 0) {
      if ($.audio_2_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          $.audio_2_flag = 4;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_counter2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_counter2_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_2_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          $.audio_2_flag = 3;
        }
      }
      if ($.audio_2_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CNT2_2" as any); //{Female Goons} Get the Plates!
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


    if ($.audio_3_flag > 0) {
      if ($.audio_3_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          $.audio_3_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_counter2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_counter2_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_3_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          $.audio_3_flag = 3;
        }
      }
      if ($.audio_3_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CNT2_3" as any); //{Female Goons} Protect the courier!
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


    if ($.audio_4_flag > 0) {
      if ($.audio_4_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CNT2_4");
          $.audio_4_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_counter2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_counter2_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_4_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Text.PrintNow("CNT2_4", 5000, 1); //{Female Goons} Private business. You're not welcome!
          Audio.PlayMissionAudio(1);
          $.audio_4_flag = 3;
        }
      }
      if ($.audio_4_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CNT2_4" as any);
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


  }
}




// ******************************* Mission Failed ******************************************


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}





// ******************************* Mission Passed ******************************************


async function mission_counter2_passed() {


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);


  World.ClearArea($.printbuyX, $.printbuyY, $.printbuyZ, 4.0, true /* TRUE */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  $.printworks_cash_pickup = Pickup.CreateProtection($.printbuyX, $.printbuyY, $.printbuyZ, $.printworks_revenue, $.printworks_revenue);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(-1027.3385, -281.6154, 16.3511, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1028.1625, -281.0542, 16.2730, 2 /* JUMP_CUT */);
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Text.PrintBig("CNT2_09", 5000, 6); //PRINT WORKS ASSET ACQUIRED


  await asyncWait(5000);
  Camera.SetFixedPosition(-1056.3685, -273.4923, 12.0057, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1057.2881, -273.8280, 11.8015, 2 /* JUMP_CUT */);
  Text.PrintWithNumberNow("CNT2_10", $.printworks_revenue, 6000, 1); //The printworks will now generate revenue upto a maximum of $~1~. Make sure you collect it regulary.


  await asyncWait(6000);
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.ClearArea(-1059.8411, -278.7214, 10.4044, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1059.8411, -278.7214, 10.4044);
  $.player1.setHeading(272.2088);
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  Hud.SwitchWidescreen(false /* OFF */);


  $.counter_contact_blip.remove();
  $.counter_contact_blip = Blip.AddShortRangeSpriteForCoord($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
  $.flag_counter_mission2_passed = 1;
  ++$.counter_60_percent;
  Stat.RegisterMissionPassed("CNT_2");
  Stat.PlayerMadeProgress(1);
  $.player1.clearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 5000, 2500, 1); //MISSION PASSED
  $.player1.addScore(5000);
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);
  await asyncWait(0);
}




// ******************************* Mission Cleanup *****************************************


async function cleanup() {


  ONMISSION = 0;


  $.mission_blip.remove();
  $.docks_blip.remove();


  Streaming.MarkModelAsNoLongerNeeded(178 /* UZI */);
  Streaming.MarkModelAsNoLongerNeeded(SENTINEL);
  Streaming.MarkModelAsNoLongerNeeded(173 /* COLT45 */);
  Streaming.MarkModelAsNoLongerNeeded(1319 /* briefcase */);
  Streaming.MarkModelAsNoLongerNeeded(MAVERICK);
  Streaming.MarkModelAsNoLongerNeeded(7 /* SNIPER */);
  Streaming.MarkModelAsNoLongerNeeded(TEC9);
  Streaming.MarkModelAsNoLongerNeeded(HFORI);
  Streaming.MarkModelAsNoLongerNeeded(HFYBU);
  Streaming.MarkModelAsNoLongerNeeded(WFYRI);
  Streaming.MarkModelAsNoLongerNeeded(WFORI);
  Streaming.MarkModelAsNoLongerNeeded(BFYST);
  Streaming.MarkModelAsNoLongerNeeded(WFYBU);
  Streaming.MarkModelAsNoLongerNeeded(CHROMEGUN);


  $.timer_mobile_start = Clock.GetGameTimer();


  $.cnt2_left_door.setHeading(0.0);
  $.cnt2_right_door.setHeading(0.0);


  Mission.Finish();
}














// *****************************************************************************************
// ******************************* GOSUB FUNCTIONS *****************************************
// *****************************************************************************************



////////////////////////////////////////////////////////////////////////////

async function slow_car_if_close_to_entity() {
  ////////////////////////////////////////////////////////////////////////////

  // VAR_INT gosub_car_to_slow gosub_target_entity


  if ($.gosub_target_entity == -1) {
    const _res163 = $.player1.getCoordinates();
$.gosub_target_car_x = _res163.x;
$.gosub_target_car_y = _res163.y;
$.temp_float_x = _res163.z;
  }
  else {
    if (!(Car.IsDead($.gosub_target_entity))) {
      const _res164 = $.gosub_target_entity.getCoordinates();
$.gosub_target_car_x = _res164.x;
$.gosub_target_car_y = _res164.y;
$.temp_float_x = _res164.z;
    }
  }


  const _res165 = $.gosub_car_to_slow.getCoordinates();
$.gosub_car_to_slow_x = _res165.x;
$.gosub_car_to_slow_y = _res165.y;
$.temp_float_x = _res165.z;


  $.temp_float_x = $.gosub_car_to_slow_x - $.gosub_target_car_x;
  $.temp_float_y = $.gosub_car_to_slow_y - $.gosub_target_car_y;
  $.temp_float_x = $.temp_float_x * $.temp_float_x;
  $.temp_float_y = $.temp_float_y * $.temp_float_y;
  $.temp_float_x = $.temp_float_x + $.temp_float_y;
  $.temp_float_x = Math.Sqrt($.temp_float_x);


  $.gosub_car_to_slow_speed = $.temp_float_x + 3.0;
  if ($.gosub_car_to_slow_speed > 100.0) {
    $.gosub_car_to_slow_speed = 100.0;
  }
  if ($.gosub_car_to_slow_speed < 0.0) {
    $.gosub_car_to_slow_speed = 0.0;
  }
  $.gosub_car_to_slow.setCruiseSpeed($.gosub_car_to_slow_speed);
  if ($.gosub_car_to_slow_speed == 0.0) {
    $.gosub_car_to_slow.setTempAction(1 /* TEMPACT_WAIT */, 100);
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////

async function steal_a_car() {
  ////////////////////////////////////////////////////////////////////////////

  // VAR_INT gosub_ped
  // VAR_INT car_model car_health
  // VAR_FLOAT coord_1_x coord_1_y coord_1_z coord_2_x coord_2_y


  if ($.heading == 919.9) {
    $.car = Car.Create(SENTINEL, $.coord_1_x, $.coord_1_y, $.coord_1_z);
  }


  const _res166 = $.gosub_ped.getCoordinates();
$.coord_1_x = _res166.x;
$.coord_1_y = _res166.y;
$.coord_1_z = _res166.z;


  if ($.player1.locateAnyMeansChar2D($.gosub_ped, 40.0, 40.0, false)) {
    $.coord_2_x = $.coord_1_x + 20.0;
    $.coord_2_y = $.coord_1_y + 20.0;
    $.coord_1_x = $.coord_1_x - 20.0;
    $.coord_1_y = $.coord_1_y - 20.0;
    $.car.markAsNoLongerNeeded();
    $.car = World.GetRandomCarOfTypeInArea($.coord_1_x, $.coord_1_y, $.coord_2_x, $.coord_2_y, -1);
    if ($.car == -1) {
      if (!(Char.IsDead($.gosub_ped))) {
        $.gosub_ped.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.car_model = $.car.getModel();
      $.car_health = $.car.getHealth();
      if ($.car_health > 300) {
        if ($.car_model == 116 || $.car_model == 106 || $.car_model == 122 || $.car_model == 117 || $.car_model == 97 || $.car_model == 107) {
          //OR car_model = 123 //ARMY TRUCK
          if (!(Char.IsDead($.gosub_ped))) {
            $.gosub_ped.setObjKillPlayerOnFoot($.player1);
          }
        }
        else {
          $.car.setCruiseSpeed(0.0);
          $.car.setTempAction(1 /* TEMPACT_WAIT */, 100);
          if (!(Char.IsDead($.gosub_ped))) {
            $.gosub_ped.setObjEnterCarAsDriver($.car);
          }
        }
      }
      else {
        $.gosub_ped.setObjKillPlayerOnFoot($.player1);
      }
    }
  }
  else {
    const _res167 = Path.GetClosestCarNodeWithHeading($.coord_1_x, $.coord_1_y, $.coord_1_z);
$.coord_1_x = _res167.nodeX;
$.coord_1_y = _res167.nodeY;
$.coord_1_z = _res167.nodeZ;
$.heading = _res167.angle;
    if (!(Camera.IsPointOnScreen($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0))) {
      if (!(World.IsPointObscuredByAMissionEntity($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0, 3.0, 2.0))) {
        $.car.markAsNoLongerNeeded();
        $.car = Car.Create(SENTINEL, $.coord_1_x, $.coord_1_y, $.coord_1_z);
        $.car.setHeading($.heading);
        if (!(Char.IsDead($.gosub_ped))) {
          $.gosub_ped.setObjEnterCarAsDriver($.car); //WARP_CHAR_INTO_CAR gosub_ped car
        }
      }
      else {
        if (!(Char.IsDead($.gosub_ped))) {
          if ($.gosub_ped.locateOnFoot3D($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0, 3.0, 2.0, false)) {
            const _res168 = Path.GetClosestCharNode($.coord_1_x, $.coord_1_y, $.coord_1_z);
$.coord_1_x = _res168.nodeX;
$.coord_1_y = _res168.nodeY;
$.coord_1_z = _res168.nodeZ;
            $.gosub_ped.setObjRunToCoord($.coord_1_x, $.coord_1_y);
          }
        }
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////

async function car_stuck_checks() {
  ////////////////////////////////////////////////////////////////////////////


  // VAR_FLOAT stuck_x stuck_y stuck_z
  // VAR_INT gosub_stuck_car car_stuck_flag
  // VAR_INT stuck_timer_start


  // VAR_FLOAT coord_c1_x coord_c1_y coord_c1_z heading
  // VAR_INT game_time


  $.game_time = Clock.GetGameTimer();


  if (!(Car.IsDead($.gosub_stuck_car))) {
    if ($.gosub_stuck_car.isUpsidedown() && $.gosub_stuck_car.isStopped()) {
      if ($.player1.locateAnyMeansCar2D($.gosub_stuck_car, 90.0, 90.0, false)) {
        $.gosub_stuck_car.setUpsidedownNotDamaged(false /* FALSE */);
        $.car_stuck_flag = -9;
      }
      else {
        if (!($.gosub_stuck_car.isOnScreen())) {
          const _res169 = $.gosub_stuck_car.getCoordinates();
$.coord_c1_x = _res169.x;
$.coord_c1_y = _res169.y;
$.coord_c1_z = _res169.z;
          const _res170 = Path.GetClosestCarNodeWithHeading($.coord_c1_x, $.coord_c1_y, $.coord_c1_z);
$.coord_c1_x = _res170.nodeX;
$.coord_c1_y = _res170.nodeY;
$.coord_c1_z = _res170.nodeZ;
$.heading = _res170.angle;
          if (!(Camera.IsPointOnScreen($.coord_c1_x, $.coord_c1_y, $.coord_c1_z, 4.0))) {
            $.gosub_stuck_car.setCoordinates($.coord_c1_x, $.coord_c1_y, $.coord_c1_z);
            $.gosub_stuck_car.setHeading($.heading);
          }
        }
      }
    }
    if ($.gosub_stuck_car.locate3D($.stuck_x, $.stuck_y, $.stuck_z, 4.0, 4.0, 4.0, false)) {
      if ($.car_stuck_flag == 0) {
        $.stuck_timer_start = $.game_time;
        $.car_stuck_flag = 1;
      }
      $.game_time = $.game_time - $.stuck_timer_start;
      if ($.car_stuck_flag == 1) {
        if ($.game_time > 8000) {
          if ($.player1.locateAnyMeansCar2D($.gosub_stuck_car, 90.0, 90.0, false)) {
            $.gosub_stuck_car.setUpsidedownNotDamaged(false /* FALSE */);
            $.stuck_timer_start = $.game_time;
            $.car_stuck_flag = -9;
          }
          else {
            if (!($.gosub_stuck_car.isOnScreen())) {
              const _res171 = $.gosub_stuck_car.getCoordinates();
$.coord_c1_x = _res171.x;
$.coord_c1_y = _res171.y;
$.coord_c1_z = _res171.z;
              const _res172 = Path.GetClosestCarNodeWithHeading($.coord_c1_x, $.coord_c1_y, $.coord_c1_z);
$.coord_c1_x = _res172.nodeX;
$.coord_c1_y = _res172.nodeY;
$.coord_c1_z = _res172.nodeZ;
$.heading = _res172.angle;
              if (!(World.IsPointObscuredByAMissionEntity($.coord_c1_x, $.coord_c1_y, $.coord_c1_z, 4.0, 4.0, 4.0))) {
                if (!(Camera.IsPointOnScreen($.coord_c1_x, $.coord_c1_y, $.coord_c1_z, 4.0))) {
                  $.gosub_stuck_car.setCoordinates($.coord_c1_x, $.coord_c1_y, $.coord_c1_z);
                  $.gosub_stuck_car.setHeading($.heading);
                  $.gosub_stuck_car.setOnPathToPlayer();
                  $.stuck_timer_start = $.game_time;
                  $.car_stuck_flag = 0;
                }
              }
            }
          }
        }
      }
    }
    if (!($.gosub_stuck_car.locate3D($.stuck_x, $.stuck_y, $.stuck_z, 4.0, 4.0, 4.0, false))) {
      const _res173 = $.gosub_stuck_car.getCoordinates();
$.stuck_x = _res173.x;
$.stuck_y = _res173.y;
$.stuck_z = _res173.z;
      $.car_stuck_flag = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////

async function car2_occupants_kill_player() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.courier_car2_guard1))) {
    $.courier_car2_guard1.setObjKillPlayerOnFoot($.player1);
  }


  if (!(Char.IsDead($.courier_car2_guard2))) {
    $.courier_car2_guard2.setObjKillPlayerOnFoot($.player1);
  }


  if (!(Char.IsDead($.courier_car2_guard3))) {
    $.courier_car2_guard3.setObjKillPlayerOnFoot($.player1);
  }


  if (!(Char.IsDead($.courier))) {
    //GIVE_WEAPON_TO_CHAR	courier WEAPONTYPE_PISTOL 9999//M16 9999
    $.courier.setObjKillPlayerOnFoot($.player1);
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////

async function car1_group_breaking() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.courier_car1_guard1))) {
    if (!(Char.IsDead($.courier_car1_guard2))) {
      if (!($.courier_car1_guard2.isInCharsGroup($.courier_car1_guard1))) {
        if ($.courier_car1_guard2.locateAnyMeansChar2D($.courier_car1_guard1, 30.0, 30.0, false)) {
          $.courier_car1_guard2.followChar($.courier_car1_guard1);
        }
        else {
          $.courier_car1_guard2.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.courier_car1_guard2.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.courier_car1_guard3))) {
      if (!($.courier_car1_guard3.isInCharsGroup($.courier_car1_guard1))) {
        if ($.courier_car1_guard3.locateAnyMeansChar2D($.courier_car1_guard1, 30.0, 30.0, false)) {
          $.courier_car1_guard3.followChar($.courier_car1_guard1);
        }
        else {
          $.courier_car1_guard3.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.courier_car1_guard3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.courier_car1_guard4))) {
      if (!($.courier_car1_guard4.isInCharsGroup($.courier_car1_guard1))) {
        if ($.courier_car1_guard4.locateAnyMeansChar2D($.courier_car1_guard1, 30.0, 30.0, false)) {
          $.courier_car1_guard4.followChar($.courier_car1_guard1);
        }
        else {
          $.courier_car1_guard4.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.courier_car1_guard4.markAsNoLongerNeeded();
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////

async function car3_group_breaking() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.courier_car3_guard1))) {
    if (!(Char.IsDead($.courier_car3_guard2))) {
      if (!($.courier_car3_guard2.isInCharsGroup($.courier_car3_guard1))) {
        if ($.courier_car3_guard2.locateAnyMeansChar2D($.courier_car3_guard1, 30.0, 30.0, false)) {
          $.courier_car3_guard2.followChar($.courier_car3_guard1);
        }
        else {
          $.courier_car3_guard2.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.courier_car3_guard2.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.courier_car3_guard3))) {
      if (!($.courier_car3_guard3.isInCharsGroup($.courier_car3_guard1))) {
        if ($.courier_car3_guard3.locateAnyMeansChar2D($.courier_car3_guard1, 30.0, 30.0, false)) {
          $.courier_car3_guard3.followChar($.courier_car3_guard1);
        }
        else {
          $.courier_car3_guard3.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.courier_car3_guard3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.courier_car3_guard4))) {
      if (!($.courier_car3_guard4.isInCharsGroup($.courier_car3_guard1))) {
        if ($.courier_car3_guard4.locateAnyMeansChar2D($.courier_car3_guard1, 30.0, 30.0, false)) {
          $.courier_car3_guard4.followChar($.courier_car3_guard1);
        }
        else {
          $.courier_car3_guard4.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.courier_car3_guard4.markAsNoLongerNeeded();
    }
  }

  ////////////////////////////////////////////////////////////////////////////

  return;
  ////////////////////////////////////////////////////////////////////////////

}

export async function count2() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_counter2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_counter2_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_counter2




  // Variables for mission

  //CARS PEDS OBJECTS PICKUPS

  // VAR_INT courier_car1 courier_car2 courier_car3 players_car courier_heli plates
  // VAR_INT courier_car1_guard1 courier_car1_guard2 courier_car1_guard3 courier_car1_guard4
  // VAR_INT courier_car2_guard1 courier_car2_guard2 courier_car2_guard3 courier shooting_char
  // VAR_INT courier_car3_guard1 courier_car3_guard2 courier_car3_guard3 courier_car3_guard4
  // VAR_INT sniper1 sniper2 sniper3 sniper4 docks_guard
  //FLAGS COUNTERS TIMERS

  // VAR_INT game_timer courier_flag passenger_seat security_warning shoot_from_car_counter
  // VAR_INT car1_ped_in_car_flag car3_ped_in_car_flag courier_has_died courier_flag2
  // VAR_INT car1_stuck_flag car2_stuck_flag car3_stuck_flag courier_in_car next_car_timer
  // VAR_INT courier_car1_health courier_car2_health courier_car3_health flee_car_timer
  // VAR_INT car1_stuck_timer_start car2_stuck_timer_start car3_stuck_timer_start
  // VAR_INT guard1_into_car_flag guard2_into_car_flag created_object_flag shoot_from_car
  // VAR_INT car1_location_counter car2_location_counter car3_location_counter
  // VAR_INT car1_arrived_flag car2_arrived_flag car3_arrived_flag fly_heli_away_flag
  // VAR_INT shoot_heli_down_flag shoot_from_car_timer courier_car2_health_shoot
  // VAR_INT sniper1_flag sniper2_flag sniper3_flag sniper4_flag sniper_dudes_counter docks_guard_counter
  //BLIPS

  // VAR_INT docks_blip
  //COORDS MATHS

  // VAR_FLOAT car1_stuck_x car1_stuck_y car1_stuck_z
  // VAR_FLOAT car2_stuck_x car2_stuck_y car2_stuck_z
  // VAR_FLOAT car3_stuck_x car3_stuck_y car3_stuck_z
  // VAR_FLOAT x_temp y_temp sum_x_y_temp
  // VAR_FLOAT car1_distance_from_vehicle_behind car2_distance_from_vehicle_behind

  //LOAD_AND_LAUNCH_EXCLUSIVE stuff
  //VAR_INT mission_blip frame_counter is_audio_in_use
  //VAR_INT audio_1_flag audio_2_flag audio_2_timeout audio_3_flag audio_3_timeout audio_4_flag audio_4_timeout
  //VAR_FLOAT temp_float_x temp_float_y	gosub_car_to_slow_speed	forward_x forward_y	temp_y
  //VAR_FLOAT gosub_target_car_x gosub_target_car_y	gosub_car_to_slow_x gosub_car_to_slow_y

  // ******************************* Mission Start *******************************************


}
