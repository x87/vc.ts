// Generated from main/serg2.sc

import { $ } from "../utils/vars.mts";

async function mission_start_serg3() {
  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME serg2
  Text.LoadMissionText("SERG2");
  Shortcut.SetDropoffPointForMission(252.7968, -230.9387, 9.8638, 333.9001);


  await asyncWait(0);
  Weather.ForceNow(0 /* WEATHER_SUNNY */);
  Weather.Release();



  /*
  WAIT 500

  IF NOT IS_CHAR_DEAD scplayer

  UNDRESS_CHAR scplayer player

  LOAD_ALL_MODELS_NOW

  IF NOT IS_CHAR_DEAD scplayer
  DRESS_CHAR scplayer
  ENDIF

  ENDIF

  DO_FADE 1500 FADE_IN
  */
  // *****************************************Set Flags/variables************************************


  $.flag_chat = 0;


  $.flag_alarm = 0;
  $.flag_switch = 0;
  $.flag_jobby = 0;
  $.flag_spotted = 0;
  $.flag_print = 0;
  $.flag_alarm_check = 0;
  $.flag_wait_state = 0;


  $.flag_ped6 = 0;
  $.flag_ped7 = 0;
  //flag_ped8 = 0


  $.chat_rnd = 0;
  $.chat_time = 0;
  //flag_serg3 = 0


  $.flag_fire_bomber = 0;
  //flag_fake_target = 0

  $.flag_route = 0;
  //flag_coffin_created = 0


  $.flag_car4_dead = 0;
  $.flag_arm_ped7 = 0;

  // *******************************************Set Coords*****************************************


  $.clothes_shopX = -1021.94;
  $.clothes_shopY = -428.68;
  $.clothes_shopZ = 10.0;



  $.ped_zed = 10.5;


  $.ped1_x = -1064.0;
  $.ped1_y = 57.0;


  $.ped2_x = -1056.0;
  $.ped2_y = 52.0;


  $.ped3_x = -1037.7;
  $.ped3_y = 70.0;


  ped4_x = -1055.0;
  ped4_y = 26.0;


  ped5_x = -1064.0;
  ped5_y = 40.0;
  /*

  ped6_x
  ped6_y
  */


  $.ped_group_x = -1046.9;
  $.ped_group_y = 71.3;
  $.ped_group_heading = 60.0;


  min_x = -1090.0;
  max_x = -1030.0;
  min_y = 0.0;
  max_y = 90.0;


  $.timer_reset_tex2 = 0;
  $.timer_current_tex2 = 0;
  $.timer_start_tex2 = 0;
  $.tex2_time_dif = 0;


  // ********************************** SCRIPTED CUT - AVERY'S STRETCH ARRIVES ***************


  World.ClearArea(299.0, -205.0, 10.5, 5.0, true /* TRUE */);
  World.ClearArea(305.0, -219.5, 10.5, 10.0, true /* TRUE */);
  Streaming.RequestCollision(299.0, -205.0);
  $.player1.setCoordinates(299.0, -205.0, 10.5);
  $.player1.setHeading(230.0);
  Camera.SetFixedPosition(297.0, -204.7, 13.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(318.5, -219.23, 22.4, 2 /* JUMP_CUT */);
  Streaming.RequestModel(stretch);
  Streaming.LoadScene(270.0, -218.0, 13.4);
  while (!(Streaming.HasModelLoaded(stretch))) {
    await asyncWait(0);
  }


  World.ClearArea(306.9, -241.65, 12.3, 15.0, true /* TRUE */);
  $.scripted_cut_limo = Car.Create(stretch, 306.9, -241.65, 12.3);
  $.scripted_cut_limo.changeColor(0, 0);
  $.scripted_cut_limo.setHeading(0.0);


  Hud.SwitchWidescreen(true /* ON */);


  Camera.DoFade(1500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  if (!(Car.IsDead($.scripted_cut_limo))) {
    $.scripted_cut_limo.setForwardSpeed(15.0);
    $.scripted_cut_limo.setTempAction(8 /* TEMPACT_GOFORWARD */, 8000);
  }
  TIMERA = 0;
  while (TIMERA < 1000) {
    await asyncWait(0);
  }


  if (!(Car.IsDead($.scripted_cut_limo))) {
    Camera.PointAtCar($.scripted_cut_limo, 15 /* FIXED */, 1 /* INTERPOLATION */);
  }
  TIMERA = 0;
  while (TIMERA < 3000) {
    await asyncWait(0);
  }
  if (!(Car.IsDead($.scripted_cut_limo))) {
    const _res482 = $.scripted_cut_limo.getCoordinates();
$.vect_x = _res482.x;
$.vect_y = _res482.y;
$.vect_z = _res482.z;
    $.scplayer.setObjGotoCoordOnFoot($.vect_x, $.vect_y);
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.scripted_cut_limo.delete();
  Streaming.MarkModelAsNoLongerNeeded(stretch);
  Camera.Restore();
  $.scplayer.setObjNoObj();
  $.scplayer.setIdle();



  // ****************************************START OF CUTSCENE********************************

  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSavery");
  Streaming.LoadSpecialCharacter(3, "CSdlove");


  Streaming.LoadSpecialModel(CUTOBJ01, "cs_limo");
  //LOAD_SPECIAL_MODEL cut_obj2 LAWYERH


  Streaming.LoadScene(305.2, -211.9, 11.3);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);


  }


  Cutscene.Load("tex_2");


  Cutscene.SetOffset(305.2, -211.9, 11.3);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_avery = CutsceneObject.Create(SPECIAL02);
  $.cs_avery.setAnim("CSavery");


  $.cs_dlove = CutsceneObject.Create(SPECIAL03);
  $.cs_dlove.setAnim("CSdlove");


  $.cut_limo = CutsceneObject.Create(CUTOBJ01);
  $.cut_limo.setAnim("cs_limo");
  //CREATE_CUTSCENE_HEAD cs_ken CUT_OBJ2 cs_kenhead
  //SET_CUTSCENE_HEAD_ANIM cs_kenhead lawyer

  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player1

  //hide player

  World.ClearArea(265.129, -234.531, 11.107, 1.0, true /* TRUE */);
  $.player1.setCoordinates(265.129, -234.531, 11.107);
  $.player1.setHeading(78.218376);

  //SET_AREA_VISIBLE VIS_STRIP_CLUB


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text



  $.cs_time = Cutscene.GetTime();



  while ($.cs_time < 574) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_A", 10000, 1); //Tommy, this is Donald Love. Donald, this here is Tommy Vercetti,


  while ($.cs_time < 4124) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_B", 10000, 1); //the latest gunslinger to come to these parts.


  while ($.cs_time < 6167) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_C", 10000, 1); //Yeh...uh...


  while ($.cs_time < 6740) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_D", 10000, 1); //Donald, you just shut up and listen, and you might learn something.


  while ($.cs_time < 10018) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_E", 10000, 1); //Now, nothing brings down real estate prices quicker than a good old-fashioned gang war -


  while ($.cs_time < 14794) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_F", 10000, 1); //'cept  maybe a disaster,  like a biblical plague or something,


  while ($.cs_time < 17966) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_G", 10000, 1); //but, that may be going too far in this case.


  while ($.cs_time < 20378) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_H", 10000, 1); //You getting this down, you four-eyed prick?


  while ($.cs_time < 23680) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_I", 10000, 1); //Now recently a Haitian gang lord died. Apparently a rival gang did it, nobody's certain.


  while ($.cs_time < 28473) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_J", 10000, 1); //But let's make them certain! You disguise yourself as a Cuban hombre,


  while ($.cs_time < 31827) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_K", 10000, 1); //and head on down to crash that funeral. Mix it up, and then high tail it.


  while ($.cs_time < 35494) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_L", 10000, 1); //You getting this down, Donald?


  while ($.cs_time < 37278) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_M", 10000, 1); //Well, that ought to put the coyote in the chicken coop, huh?


  while ($.cs_time < 40242) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX2_N", 10000, 1); //And then we'll just sit back, and watch the prices tumble.


  while ($.cs_time < 43214) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Camera.DoFade(1500, 0 /* FADE_OUT */);



  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  // ******************************************END OF CUTSCENE********************************




  // Mission stuff goes here
  // ***************************** TEST STUFF !!!!!! *************************************
  /*
  SWITCH_PED_ROADS_ON -787.8 -519.4 10.0 -657.5 -475.2 20.0 // Star Island gates mainland
  SWITCH_PED_ROADS_ON -230.0 -464.5 10.0 56.85 -459.8 20.0 // Star Island gates ocean beach
  SWITCH_ROADS_ON -787.8 -519.4 10.0 -657.5 -475.2 20.0 // Star Island gates     mainland
  SWITCH_ROADS_ON -230.0 -464.5 10.0 165.85 -459.8 20.0 // Star Island gates ocean beach
  DELETE_OBJECT star_gate_1
  DELETE_OBJECT star_gate_2
  CREATE_OBJECT_NO_OFFSET comgate1open -715.042 -489.0 12.615 star_gate_1
  SET_OBJECT_HEADING star_gate_1 3.0
  DONT_REMOVE_OBJECT star_gate_1
  CREATE_OBJECT_NO_OFFSET comgate2open -181.402 -472.859 12.615 star_gate_2
  SET_OBJECT_HEADING star_gate_2 12.5
  DONT_REMOVE_OBJECT star_gate_2
  */


  //------------------REQUEST_MODELS ------------------------------


  Hud.SwitchWidescreen(false /* OFF */);


  Streaming.RequestModel(HNA);
  Streaming.RequestModel(HNB);
  Streaming.RequestModel(tec9);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(HNA))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(HNB))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(tec9))) {
    await asyncWait(0);
  }

  // ------------------------MISSION-------------------------------


  if (!($.player1.isWearing("player5"))) {
    // ********************GET NEW COSTUME****************************
    Text.PrintNow("TEX_2c", 5000, 1); //GET A CHANGE OF CLOTHES
    $.cuban_clothes_blip = Blip.AddSpriteForCoord($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 28 /* RADAR_SPRITE_TSHIRT */);
    while (!($.player1.locateOnFoot3D($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 1.2, 1.2, 3.0, true /* TRUE */))) {
      await asyncWait(0);


    }
    $.cuban_clothes_blip.remove();

    // **************************************(START) CHANGE OF CLOTHES CUT SCENE*********************************************

    $.player1.setControl(false /* OFF */);
    Hud.SwitchWidescreen(true /* ON */);
    $.player1.clearWantedLevel();
    //SET_FIXED_CAMERA_POSITION -1019.7 -428.3 11.5 0.0 0.0 0.0
    //POINT_CAMERA_AT_PLAYER player1 FIXED JUMP_CUT

    $.scplayer.setObjGotoCoordOnFoot(-1026.1, -429.5);
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(1500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.undress("player5");
      Streaming.LoadAllModelsNow();
      if (!(Char.IsDead($.scplayer))) {
        $.scplayer.dress();
      }
    }
    $.scplayer.setObjNoObj();
    $.player1.setCoordinates(-1023.5, -429.0, 10.0);
    $.player1.setHeading(280.0);
    Camera.RestoreJumpcut();
    Camera.SetInFrontOfPlayer();
    World.ClearArea($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 1.0, false /* FALSE */);
    $.scplayer.setObjGotoCoordOnFoot(-1019.4, -428.3);
    Camera.DoFade(1500, 1 /* FADE_IN */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    $.scplayer.setObjNoObj();
    $.scplayer.setIdle();
    $.player1.setControl(true /* ON */);
    Hud.SwitchWidescreen(false /* OFF */);

    // **********************CREATE CARS AND PEDS & GET TO FUNERAL***************************

  }



  Text.PrintNow("TEX_2d", 10000, 1);


  Game.SetThreatForPedType(8 /* PEDTYPE_GANG_HAITIAN */, 1 /* THREAT_PLAYER1 */);
  $.mission_blip1 = Blip.AddForCoord($.ped_group_x, $.ped_group_y, 20.0);
  Path.SwitchRoadsOff(min_x, min_y, 14.0, max_x, max_y, 20.0);


  $.ground_z = 0.0000;
  while ($.ground_z == 0.0000) {
    await asyncWait(0);
    $.ground_z = World.GetGroundZFor3DCoord($.ped_group_x, $.ped_group_y, 50.0);
  }

  /*
  WHILE NOT IS_PLAYER_IN_ZONE player1 HAITI
  WAIT 0
  ENDWHILE
  */

  World.SetCarDensityMultiplier(0.0);



  Streaming.RequestModel(ROMERO);
  while (!(Streaming.HasModelLoaded(ROMERO))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(VOODOO);
  while (!(Streaming.HasModelLoaded(VOODOO))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(faketarget);
  while (!(Streaming.HasModelLoaded(faketarget))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(M4);
  while (!(Streaming.HasModelLoaded(M4))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(jw_coffin);
  while (!(Streaming.HasModelLoaded(jw_coffin))) {
    await asyncWait(0);
  }


  $.car_1 = Car.Create(VOODOO, -1063.0, 40.0, 11.0);
  $.car_1.setHeading(180.0);
  $.car_1.changeColor(0, 0);
  $.driver_1 = Char.CreateInsideCar($.car_1, 8 /* PEDTYPE_GANG_HAITIAN */, HNB);
  $.driver_1.clearThreatSearch();
  $.car_1.setIdle();
  /*
  CREATE_CAR VOODOO -1063.0 25.0 11.0 car_2
  SET_CAR_HEADING car_2 180.0
  CHANGE_CAR_COLOUR car_2 0 0
  CREATE_CHAR_INSIDE_CAR car_2 PEDTYPE_GANG_HAITIAN HNB driver_2
  CLEAR_CHAR_THREAT_SEARCH driver_2
  CAR_SET_IDLE car_2
  */

  $.car_3 = Car.Create(ROMERO, -1063.0, 55.0, 11.0);
  $.car_3.setHeading(180.0);
  $.car_3.changeColor(0, 0);
  $.driver_3 = Char.CreateInsideCar($.car_3, 8 /* PEDTYPE_GANG_HAITIAN */, HNA);
  $.driver_3.clearThreatSearch();
  $.car_3.setHealth(2000);
  $.car_3.setIdle();


  $.car_4 = Car.Create(ROMERO, -1057.05, 69.64, 11.05);
  $.car_4.setHeading(90.0);
  $.car_4.setOnlyDamagedByPlayer(true /* TRUE */);
  $.driver_4 = Char.CreateInsideCar($.car_4, 8 /* PEDTYPE_GANG_HAITIAN */, HNA);



  $.driver_4.clearThreatSearch();
  $.car_4.setIdle();
  $.car_4.setProofs(false, true, false, false, false);
  $.car_4.setHealth(1500);
  $.car_4.setHeavy(true /* TRUE */);
  //POP_CAR_BOOT car_4


  $.car_5 = Car.Create(VOODOO, -1070.0, 18.6, 11.0);
  $.car_5.setHeading(270.0);
  $.gang_1 = Char.CreateInsideCar($.car_5, 8 /* PEDTYPE_GANG_HAITIAN */, HNB);
  $.gang_1.clearThreatSearch();
  $.car_5.setIdle();


  $.car_6 = Car.Create(VOODOO, -1070.0, 75.4, 11.0);
  $.car_6.setHeading(270.0);
  $.gang_2 = Char.CreateInsideCar($.car_6, 8 /* PEDTYPE_GANG_HAITIAN */, HNB);
  $.gang_2.clearThreatSearch();
  $.car_6.setIdle();


  ped_1 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNB, $.ped1_x, $.ped1_y, $.ped_zed);
  ped_1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_THREAT_SEARCH ped_1 THREAT_PLAYER1

  ped_1.setHeading(75.0);
  ped_1.giveWeapon(22 /* WEAPONTYPE_tec9 */, 9999);
  ped_1.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 999999);


  ped_2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNA, $.ped2_x, $.ped2_y, $.ped_zed);
  ped_2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_THREAT_SEARCH ped_2 THREAT_PLAYER1

  ped_2.setHeading(12.0);
  ped_2.giveWeapon(22 /* WEAPONTYPE_tec9 */, 9999);
  ped_2.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 999999);


  ped_3 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNB, $.ped3_x, $.ped3_y, $.ped_zed);
  ped_3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_THREAT_SEARCH ped_3 THREAT_PLAYER1

  ped_3.setHeading(280.0);
  ped_3.giveWeapon(26 /* WEAPONTYPE_m4 */, 9999);
  ped_3.clearThreatSearch();
  ped_3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  ped_3.setHeedThreats(true /* TRUE */);
  ped_3.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 999999);


  ped_4 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNA, ped4_x, ped4_y, $.ped_zed);
  ped_4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_THREAT_SEARCH ped_4 THREAT_PLAYER1

  ped_4.setHeading(165.0);
  ped_4.giveWeapon(22 /* WEAPONTYPE_tec9 */, 9999);
  ped_4.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 999999);


  ped_5 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNB, ped5_x, ped5_y, $.ped_zed);
  ped_5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_THREAT_SEARCH ped_5 THREAT_PLAYER1

  ped_5.setHeading(97.0);
  ped_5.giveWeapon(22 /* WEAPONTYPE_tec9 */, 9999);
  ped_5.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 999999);


  bodyguard_1 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNA, -1047.8, 54.8, 13.3);
  bodyguard_1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  bodyguard_1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  bodyguard_1.setHeading(140.0);
  bodyguard_1.setStayInSamePlace(true /* TRUE */);
  bodyguard_1.giveWeapon(26 /* WEAPONTYPE_M4 */, 9999);
  bodyguard_1.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 999999);


  bodyguard_2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNA, -1042.44, 64.96, 15.5);
  bodyguard_2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  bodyguard_2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  bodyguard_2.setHeading(80.0);
  bodyguard_1.setStayInSamePlace(true /* TRUE */);
  bodyguard_2.giveWeapon(26 /* WEAPONTYPE_M4 */, 9999);
  bodyguard_2.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 999999);


  $.ped_7 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNA, $.ped_group_x, $.ped_group_y, $.ped_zed);
  $.ped_7.clearThreatSearch();
  //SET_CHAR_PERSONALITY ped_7 PEDSTAT_TOUGH_GUY

  $.ped_7.setHeading($.ped_group_heading);
  //GIVE_WEAPON_TO_CHAR ped_7 WEAPONTYPE_tec9	60

  $.ped_7.setOnlyDamagedByPlayer(true /* TRUE */);


  $.ped_group_x = $.ped_group_x - 1.0;
  $.ped_group_y = $.ped_group_y + 1.0;


  ped_6 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNB, $.ped_group_x, $.ped_group_y, $.ped_zed);
  ped_6.clearThreatSearch();
  //SET_CHAR_PERSONALITY ped_6 PEDSTAT_TOUGH_GUY

  ped_6.turnToFaceChar($.ped_7);
  //GIVE_WEAPON_TO_CHAR ped_6 WEAPONTYPE_tec9	60


  $.ped_group_x = $.ped_group_x + 1.0;
  //ped_group_y	= ped_group_y - 1.0


  $.ped_8 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNB, $.ped_group_x, $.ped_group_y, $.ped_zed);
  $.ped_8.clearThreatSearch();
  //SET_CHAR_PERSONALITY ped_8 PEDSTAT_TOUGH_GUY

  $.ped_8.turnToFaceChar($.ped_7);
  //GIVE_WEAPON_TO_CHAR ped_8 WEAPONTYPE_tec9	60


  $.mission_blip1.remove();


  $.mission_blip1 = Blip.AddForChar($.ped_7);


  $.timer_start = Clock.GetGameTimer();


  while (!($.player1.isInArea2D(min_x, min_y, max_x, max_y, false /* FALSE */)) && $.flag_alarm == 0) {
    await asyncWait(0);
    await alarm_check();  // SCM GOSUB alarm_check
    await pedchat();  // SCM GOSUB pedchat
    await ostrich();  // SCM GOSUB ostrich
    await traffic_density();  // SCM GOSUB traffic_density
  }


  $.flag_alarm_check = 1;
  //GET_GAME_TIMER timer_start


  while ($.flag_alarm == 0) {
    await asyncWait(0);
    await alarm_check();  // SCM GOSUB alarm_check
    if (Char.IsDead($.ped_7)) {
      // SCM GOTO → did_goons_spot_player (not lowered; manual jump required)
      throw new Error("unresolved GOTO did_goons_spot_player"); // fallback: would break linear control flow
    }
    await ostrich();  // SCM GOSUB ostrich
    await pedchat();  // SCM GOSUB pedchat
    await traffic_density();  // SCM GOSUB traffic_density
  }


  while (!($.player1.isDead())) {
    await asyncWait(0);
    await alarm_check();  // SCM GOSUB alarm_check


    if ($.player1.locateOnFoot2D($.ped_group_x, $.ped_group_y, 30.0, 40.0, false /* FALSE */) || $.player1.locateInCar2D($.ped_group_x, $.ped_group_y, 10.0, 15.0, false /* FALSE */)) {
      if ($.player1.isWearing("player5")) {
        await spotted();  // SCM GOSUB spotted
      }
    }
    if (!($.player1.isInArea2D(min_x, min_y, max_x, max_y, false /* FALSE */)) && $.flag_alarm < 2) {
      if (!(Char.IsDead(ped_2))) {
        ped_2.setObjGotoCoordOnFoot($.ped2_x, $.ped2_y);
      }
      if (!(Char.IsDead(ped_4))) {
        ped_4.setObjGotoCoordOnFoot(ped4_x, ped4_y);
      }
    }
    await pedchat();  // SCM GOSUB pedchat
    await ostrich();  // SCM GOSUB ostrich
    if (!(Char.IsDead($.ped_7))) {
      if (!(Car.IsDead($.car_4))) {
        if ($.ped_7.isInCar($.car_4)) {
          $.var_tex2_car = $.car_4;
          await tex2_car_routine();  // SCM GOSUB tex2_car_routine
          if (!($.ped_7.isInArea2D(min_x, min_y, max_x, max_y, false /* FALSE */))) {
            await flaming_coffins();  // SCM GOSUB flaming_coffins
          }
        }
      }
      else {
        if (!(Car.IsDead($.car_3)) && !(Char.IsDead($.ped_7))) {
          if ($.ped_7.locateAnyMeansCar2D($.car_3, 30.0, 30.0, false /* FALSE */) && !($.ped_7.isInCar($.car_3))) {
            $.ped_7.setObjEnterCarAsDriver($.car_3);
          }
          if ($.ped_7.isInCar($.car_3)) {
            $.var_tex2_car = $.car_3;
            await tex2_car_routine();  // SCM GOSUB tex2_car_routine
            if (!($.ped_7.isInArea2D(min_x, min_y, max_x, max_y, false /* FALSE */))) {
              await flaming_coffins();  // SCM GOSUB flaming_coffins
            }
            if ($.flag_ped7 == 1) {
              if (!($.car_3.isHealthGreater(350))) {
                $.ped_7.setObjLeaveCar($.car_3);
                $.car_3.setCruiseSpeed(0.0);
                if (!(Char.IsDead($.driver_3))) {
                  $.driver_3.giveWeapon(22 /* WEAPONTYPE_tec9 */, 60);
                  $.driver_3.setObjKillPlayerOnFoot($.player1);
                  //SET_CHAR_OBJ_LEAVE_CAR driver_1 car_1
                  //SET_CHAR_THREAT_SEARCH driver_1 THREAT_PLAYER1

                }
                $.flag_ped7 = 2;
              }
            }
            if ($.flag_ped7 == 0) {
              $.car_3.setCruiseSpeed(40.0);
              $.car_3.setDrivingStyle(3);
              $.car_3.wanderRandomly();
              $.flag_ped7 = 1;
            }
          }
        }
      }
    }
    else {
      // SCM GOTO → did_goons_spot_player (not lowered; manual jump required)
      throw new Error("unresolved GOTO did_goons_spot_player"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_4) && $.flag_car4_dead == 0) {
      $.flag_ped7 = 0;
      $.flag_car4_dead = 1;
    }
    if ($.flag_ped7 == 2) {
      if (!($.ped_7.isInAnyCar())) {
        if ($.flag_arm_ped7 == 0) {
          $.ped_7.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.ped_7.setHeedThreats(true /* TRUE */);
          $.ped_7.turnToFacePlayer($.player1);
          $.ped_7.giveWeapon(26 /* WEAPONTYPE_M4 */, 9999);
          $.flag_arm_ped7 = 1;
        }
        $.flag_ped7 = 3;
      }
    }
    if (!(Char.IsDead(ped_6))) {
      if (!(Car.IsDead($.car_1))) {
        if (ped_6.isInCar($.car_1) && $.flag_ped6 == 0) {
          $.car_1.setCruiseSpeed(40.0);
          $.car_1.setDrivingStyle(2);
          $.car_1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
          $.flag_ped6 = 1;
        }
      }
    }
    else {
      if (!(Car.IsDead($.car_1)) && $.flag_ped6 == 0) {
        $.car_1.setCruiseSpeed(40.0);
        $.car_1.setDrivingStyle(2);
        $.car_1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        $.flag_ped6 = 1;
      }
    }
    await traffic_density();  // SCM GOSUB traffic_density
  }
}





async function did_goons_spot_player() {
  $.mission_blip1.remove();
  $.flag_alarm = 3;
  $.timer_dif = 7000;
  await ostrich();  // SCM GOSUB ostrich


  if ($.flag_spotted == 0) {
    Text.PrintNow("TEX_2b", 5000, 1); //You failed to get spotted!
    // SCM GOTO → mission_serg3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_serg3_failed"); // fallback: would break linear control flow
  }


  while ($.player1.isInZone("HAITI")) {
    await asyncWait(0);
    await traffic_density();  // SCM GOSUB traffic_density
    Text.PrintNow("TEXEXIT", 1000, 1); // Now get out of Haiti!
  }


  // SCM GOTO → mission_serg3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_serg3_passed"); // fallback: would break linear control flow
}




// Mission Ray2 failed


async function mission_serg3_failed() {



  Text.PrintBig("M_FAIL", 5000, 1);
}




// mission Ray2 passed


async function mission_serg3_passed() {


  $.clothes_pickup5 = Pickup.CreateClothes(-1025.2, -429.2, 10.8, 5);
  $.clothes5_created = 1;
  // START_NEW_SCRIPT cloth4 





  $.flag_sergio_mission3_passed = 1;

  //REMOVE_BLIP love_contact_blip
  //ADD_SPRITE_BLIP_FOR_CONTACT_POINT loveX loveY loveZ RADAR_SPRITE_DON love_contact_blip


  Text.PrintWithNumberBig("M_PASS", 2500, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(2500);
  Stat.RegisterMissionPassed("TEX_2");
  Stat.PlayerMadeProgress(1);
  Game.SetThreatForPedType(8 /* PEDTYPE_GANG_HAITIAN */, 128 /* THREAT_GANG_CUBAN */);
  Game.SetThreatForPedType(7 /* PEDTYPE_GANG_CUBAN */, 256 /* THREAT_GANG_HAITIAN */);


  Zone.SetPedInfo("GHETTO1", 1 /* DAY */, 13, 60, 100, 0, 0, 0, 0, 0, 0, 0, 20); //Haitians
  Zone.SetPedInfo("GHETTO1", 0 /* NIGHT */, 10, 80, 100, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO1", 1 /* DAY */, 12, 60, 100, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO1", 0 /* NIGHT */, 10, 80, 100, 0, 0, 0, 0, 0, 0, 0, 10);


  Zone.SetPedInfo("GHETTO2", 1 /* DAY */, 13, 100, 60, 0, 0, 0, 0, 0, 0, 0, 20); //Cubans
  Zone.SetPedInfo("GHETTO2", 0 /* NIGHT */, 10, 100, 80, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO2", 1 /* DAY */, 12, 100, 60, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO2", 0 /* NIGHT */, 10, 100, 80, 0, 0, 0, 0, 0, 0, 0, 10);


  $.sergio_contact_blip.remove();

  //START_NEW_SCRIPT serg_mission3_loop
}










// mission cleanup


async function mission_cleanup_serg3() {



  $.timer_mobile_start = Clock.GetGameTimer();


  World.SetCarDensityMultiplier(1.0);
  $.player1.setControl(true /* on */);
  Hud.SwitchWidescreen(false /* off */);
  Camera.RestoreJumpcut();
  Path.SwitchRoadsOn(min_x, min_y, 14.0, max_x, max_y, 20.0);


  Game.ClearThreatForPedType(8 /* PEDTYPE_GANG_HAITIAN */, 1 /* THREAT_PLAYER1 */);


  $.mission_blip1.remove();
  $.cuban_clothes_blip.remove();


  if (!(Char.IsDead(ped_1))) {
    ped_1.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead(ped_2))) {
    ped_2.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead(ped_3))) {
    ped_3.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead(ped_4))) {
    ped_4.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead(ped_5))) {
    ped_5.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead(ped_6))) {
    ped_6.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.ped_7))) {
    $.ped_7.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.ped_8))) {
    $.ped_8.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.gang_1))) {
    $.gang_1.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.gang_2))) {
    $.gang_2.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead(bodyguard_1))) {
    bodyguard_1.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead(bodyguard_2))) {
    bodyguard_2.markAsNoLongerNeeded();
  }


  if (!(Char.IsDead($.driver_1))) {
    $.driver_1.markAsNoLongerNeeded();
  }
  /*IF NOT IS_CHAR_DEAD driver_2
  MARK_CHAR_AS_NO_LONGER_NEEDED driver_2
  ENDIF*/

  if (!(Char.IsDead($.driver_3))) {
    $.driver_3.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.driver_4))) {
    $.driver_4.markAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.car_1))) {
    $.car_1.markAsNoLongerNeeded();
  }
  /*
  IF NOT IS_CAR_DEAD car_2
  MARK_CAR_AS_NO_LONGER_NEEDED car_2
  ENDIF
  */

  if (!(Car.IsDead($.car_3))) {
    $.car_3.markAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.car_4))) {
    $.car_4.markAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.car_5))) {
    $.car_5.markAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.car_6))) {
    $.car_6.markAsNoLongerNeeded();
  }


  Streaming.MarkModelAsNoLongerNeeded(VOODOO);
  Streaming.MarkModelAsNoLongerNeeded(ROMERO);
  Streaming.MarkModelAsNoLongerNeeded(M4);
  Streaming.MarkModelAsNoLongerNeeded(HNA);
  Streaming.MarkModelAsNoLongerNeeded(HNB);
  Streaming.MarkModelAsNoLongerNeeded(faketarget);
  Streaming.MarkModelAsNoLongerNeeded(jw_coffin);
  Streaming.MarkModelAsNoLongerNeeded(tec9);

  //UNLOAD_SPECIAL_CHARACTER 1


  ONMISSION = 0;



  Mission.Finish();
}



//---------------------------GOSUBS----------------GOSUBS---------------------------actuallydon'tchaknow




async function pedchat() {


  if ($.flag_alarm < 2) {
    $.timer_now = Clock.GetGameTimer();
    $.timer_dif = $.timer_now - $.timer_start;
    if ($.timer_dif > 9000) {
      $.timer_dif = 0;
      $.timer_start = $.timer_now;
    }
    $.chat_rnd = Math.RandomIntInRange(1, 13);
    $.chat_time = $.chat_rnd * 1000;
    if ($.timer_dif < 3001) {
      if ($.flag_chat == 0) {
        await chat_choice();  // SCM GOSUB chat_choice
      }
    }
    if ($.timer_dif < 6001 && $.timer_dif > 3000) {
      if ($.flag_chat == 1) {
        await chat_choice();  // SCM GOSUB chat_choice
      }
    }
    if ($.timer_dif < 9001 && $.timer_dif > 6000) {
      if ($.flag_chat == 2) {
        await chat_choice();  // SCM GOSUB chat_choice
      }
    }


  }
}




async function ostrich() {

  //IF flag_alarm_check = 1

  if ($.flag_alarm > 0 && $.flag_wait_state == 0) {
    if (!(Char.IsDead(ped_2))) {
      ped_2.setWaitState(0 /* WAITSTATE_FALSE */, 0);
    }
    if (!(Char.IsDead(ped_4))) {
      ped_4.setWaitState(0 /* WAITSTATE_FALSE */, 0);
    }
    if (!(Char.IsDead(ped_1))) {
      ped_1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
    }
    if (!(Char.IsDead(ped_3))) {
      ped_3.setWaitState(0 /* WAITSTATE_FALSE */, 0);
    }
    if (!(Char.IsDead(ped_5))) {
      ped_5.setWaitState(0 /* WAITSTATE_FALSE */, 0);
    }
    $.flag_wait_state = 1;
  }


  if ($.flag_alarm == 1 && $.flag_switch == 0) {

    // NOTE, play sound: "<warning>"

    if (!(Char.IsDead(ped_2))) {
      ped_2.setObjGotoPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead(ped_4))) {
      ped_4.setObjGotoPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead(ped_1))) {
      ped_1.lookAtPlayerAlways($.player1);
    }
    if (!(Char.IsDead(ped_3))) {
      ped_3.lookAtPlayerAlways($.player1);
    }
    if (!(Char.IsDead(ped_5))) {
      ped_5.lookAtPlayerAlways($.player1);
    }
    $.flag_switch = 1;
  }
  //ENDIF


  if ($.flag_alarm == 2 && $.flag_switch < 2) {
    $.timer_start = Clock.GetGameTimer();

    // NOTE, play sound: "ASSASSIN!!!!"

    if (!(Char.IsDead(ped_1))) {
      ped_1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3500);
    }
    if (!(Char.IsDead(ped_2))) {
      if ($.flag_alarm_check == 1) {
        ped_2.setObjKillPlayerAnyMeans($.player1);
      }
      else {
        ped_2.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 6000);
      }
    }
    if (!(Char.IsDead(ped_3))) {
      ped_3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 6000);
    }
    if (!(Char.IsDead(ped_4))) {
      if ($.flag_alarm_check == 1) {
        ped_4.setObjKillPlayerAnyMeans($.player1);
      }
      else {
        ped_4.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 6000);
      }
    }
    if (!(Char.IsDead(ped_5))) {
      ped_5.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3500);
    }
    if (!(Char.IsDead(ped_6))) {
      ped_6.setWaitState(0 /* WAITSTATE_FALSE */, 0);
      ped_6.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 6000);
      //SET_CHAR_WAIT_STATE ped_6 WAITSTATE_PLAYANIM_HANDSCOWER 6000

    }
    if (!(Char.IsDead($.ped_7))) {
      $.ped_7.setWaitState(0 /* WAITSTATE_FALSE */, 0);
      $.ped_7.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
      //GIVE_WEAPON_TO_CHAR ped_7 WEAPONTYPE_tec9 120

    }
    if (!(Char.IsDead($.ped_8))) {
      $.ped_8.setWaitState(0 /* WAITSTATE_FALSE */, 0);
      $.ped_8.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3500);
      //SET_CHAR_WAIT_STATE ped_8 WAITSTATE_PLAYANIM_COWER 3500

    }
    $.flag_switch = 2;
    $.flag_alarm = 3;
  }


  if ($.flag_alarm == 3 && $.flag_switch < 3) {
    $.timer_now = Clock.GetGameTimer();
    $.timer_dif = $.timer_now - $.timer_start;
    if ($.timer_dif > 4000 && $.flag_jobby == 0) {
      if (!(Char.IsDead(ped_1))) {
        ped_1.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead(ped_5))) {
        ped_5.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.gang_1))) {
        $.gang_1.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.gang_2))) {
        $.gang_2.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.ped_7))) {
        $.ped_7.setObjNoObj();
        $.ped_7.setWaitState(0 /* WAITSTATE_FALSE */, 0);
        $.ped_7.setRunning(true /* TRUE */);
        if (!(Car.IsDead($.car_4))) {
          $.ped_7.setObjEnterCarAsPassenger($.car_4);
        }
        else {
          if (!(Car.IsDead($.car_1))) {
            $.ped_7.setObjEnterCarAsPassenger($.car_1);
          }
        }
      }
      if (!(Char.IsDead($.ped_8))) {
        $.ped_8.setObjNoObj();
        $.ped_8.setWaitState(0 /* WAITSTATE_FALSE */, 0);
        /*
        IF NOT IS_CAR_DEAD car_2
        SET_CHAR_RUNNING ped_8 TRUE
        SET_CHAR_OBJ_ENTER_CAR_AS_PASSENGER ped_8 car_2
        ELSE
        GIVE_WEAPON_TO_CHAR ped_8 WEAPONTYPE_tec9 60
        SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS ped_8 player1
        ENDIF*/
        $.ped_8.giveWeapon(22 /* WEAPONTYPE_tec9 */, 60);
        $.ped_8.setObjKillPlayerAnyMeans($.player1);
      }
      $.flag_jobby = 1;
    }
    if ($.timer_dif > 6500 && $.flag_jobby == 1) {
      if (!(Char.IsDead(ped_3))) {
        ped_3.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead(ped_6))) {
        ped_6.setObjNoObj();
        ped_6.setWaitState(0 /* WAITSTATE_FALSE */, 0);
        if (!(Car.IsDead($.car_1))) {
          ped_6.setRunning(true /* TRUE */);
          ped_6.setObjEnterCarAsPassenger($.car_1);
        }
        else {
          ped_6.setObjFleeOnFootTillSafe();
        }
      }
      $.flag_jobby = 2;
      $.flag_switch = 3;
    }


  }
}





async function chat_choice() {


  if ($.chat_rnd > 0 && $.chat_rnd < 5) {
    await chatsub_1();  // SCM GOSUB chatsub_1
  }
  if ($.chat_rnd > 4 && $.chat_rnd < 9) {
    await chatsub_2();  // SCM GOSUB chatsub_2
  }
  if ($.chat_rnd > 8 && $.chat_rnd < 13) {
    await chatsub_3();  // SCM GOSUB chatsub_3
  }
}




async function chatsub_1() {


  if (!(Char.IsDead($.ped_7)) && !(Char.IsDead(ped_6))) {
    //SET_CHARS_CHATTING ped_7 ped_6 2900
    $.chat_time = $.chat_rnd * 1000;
    ped_6.stopLooking();
    $.ped_7.stopLooking();
    ped_6.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, $.chat_time);
    ped_6.lookAtCharAlways($.ped_7);
    $.ped_7.lookAtCharAlways(ped_6);
    if (!(Char.IsDead($.ped_8))) {
      $.ped_8.stopLooking();
      $.ped_8.lookAtCharAlways(ped_6);
    }
    ++$.flag_chat;
    if ($.flag_chat > 2) {
      $.flag_chat = 0;
    }
  }
}



async function chatsub_2() {


  if (!(Char.IsDead($.ped_7)) && !(Char.IsDead($.ped_8))) {
    //SET_CHARS_CHATTING ped_7 ped_6 2900
    $.chat_time = $.chat_rnd * 1000;
    $.ped_8.stopLooking();
    $.ped_7.stopLooking();
    $.ped_7.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, $.chat_time);
    $.ped_8.lookAtCharAlways($.ped_7);
    $.ped_7.lookAtCharAlways($.ped_8);
    if (!(Char.IsDead(ped_6))) {
      ped_6.stopLooking();
      ped_6.lookAtCharAlways($.ped_8);
    }
    ++$.flag_chat;
    if ($.flag_chat > 2) {
      $.flag_chat = 0;
    }
  }
}



async function chatsub_3() {


  if (!(Char.IsDead($.ped_8)) && !(Char.IsDead(ped_6))) {
    //SET_CHARS_CHATTING ped_7 ped_6 2900
    $.chat_time = $.chat_rnd * 750;
    ped_6.stopLooking();
    $.ped_8.stopLooking();
    $.ped_8.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, $.chat_time);
    ped_6.lookAtCharAlways($.ped_8);
    $.ped_8.lookAtCharAlways(ped_6);
    if (!(Char.IsDead($.ped_7))) {
      $.ped_7.stopLooking();
      $.ped_7.lookAtCharAlways($.ped_8);
    }
    ++$.flag_chat;
    if ($.flag_chat > 2) {
      $.flag_chat = 0;
    }
  }
}




async function alarm_check() {


  if ($.flag_alarm < 3) {
    if (Char.IsDead($.driver_1)) {
      $.flag_alarm = 2;
      $.driver_1.markAsNoLongerNeeded();
    }
    //IF IS_CHAR_DEAD driver_2
    //	flag_alarm = 2
    //	ENDIF
    if (Char.IsDead($.driver_3)) {
      $.flag_alarm = 2;
      $.driver_3.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.driver_4)) {
      $.flag_alarm = 2;
      $.driver_4.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.gang_1)) {
      $.flag_alarm = 2;
      $.gang_1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.gang_2)) {
      $.flag_alarm = 2;
      $.gang_2.markAsNoLongerNeeded();
    }
    if (Char.IsDead(ped_1)) {
      $.flag_alarm = 2;
      ped_1.markAsNoLongerNeeded();
    }
    if (Char.IsDead(ped_2)) {
      $.flag_alarm = 2;
      ped_2.markAsNoLongerNeeded();
    }
    if (Char.IsDead(ped_3)) {
      $.flag_alarm = 2;
      ped_3.markAsNoLongerNeeded();
    }
    if (Char.IsDead(ped_4)) {
      $.flag_alarm = 2;
      ped_4.markAsNoLongerNeeded();
    }
    if (Char.IsDead(ped_5)) {
      $.flag_alarm = 2;
      ped_5.markAsNoLongerNeeded();
    }
    if (Char.IsDead(ped_6)) {
      $.flag_alarm = 2;
      ped_6.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.ped_7)) {
      $.flag_alarm = 2;
      $.ped_7.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.ped_8)) {
      $.flag_alarm = 2;
      $.ped_8.markAsNoLongerNeeded();
    }
  }
  if ($.flag_alarm_check == 1) {
    if ($.flag_alarm < 3) {
      if ($.player1.isInModel(SANCHEZ) || $.player1.isInModel(PIZZABOY) || $.player1.isInModel(FAGGIO)) {
        if ($.player1.isWearing("player5")) {
          await spotted();  // SCM GOSUB spotted
          if ($.flag_alarm < 2) {
            $.flag_alarm = 1;
          }
        }


      }
      if ($.player1.isInModel(FREEWAY) || $.player1.isInModel(PCJ600)) {
        if ($.player1.isWearing("player5")) {
          await spotted();  // SCM GOSUB spotted
          $.flag_alarm = 1;
        }
      }
      if (!($.player1.isInAnyCar())) {
        if ($.player1.isWearing("player5")) {
          await spotted();  // SCM GOSUB spotted
          if ($.flag_alarm < 2) {
            $.flag_alarm = 1;
          }
        }
      }
    }
    if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
      if (World.CheckForPedModelAroundPlayer($.player1, 10.0, 10.0, 10.0, HNA, HNB)) {
        if ($.player1.isWearing("player5")) {
          await spotted();  // SCM GOSUB spotted
        }
      }
    }
    else {
      if (World.CheckForPedModelAroundPlayer($.player1, 15.0, 15.0, 15.0, HNA, HNB)) {
        if ($.player1.isWearing("player5")) {
          await spotted();  // SCM GOSUB spotted
        }
      }
    }


    if ($.player1.isInModel(CUBAN) && $.flag_alarm < 3) {
      if ($.player1.isWearing("player5")) {
        await spotted();  // SCM GOSUB spotted
      }
      $.flag_alarm = 2;
    }
    if ($.player1.isShooting() && $.flag_alarm < 3) {
      $.flag_alarm = 2;
    }
    if (!(Char.IsDead($.ped_7))) {
      if ($.player1.locateAnyMeansChar3D($.ped_7, 20.0, 20.0, 20.0, false /* FALSE */) && $.flag_alarm < 3) {
        if ($.player1.isWearing("player5")) {
          await spotted();  // SCM GOSUB spotted
        }
        $.flag_alarm = 2;
        if (!($.player1.isCurrentWeapon(0 /* WEAPONTYPE_UNARMED */))) {
          $.flag_alarm = 3;
        }
      }
    }
  }
}




async function spotted() {


  $.flag_spotted = 1;
  if ($.flag_print == 0) {
    Text.PrintNow("TEX_2a", 5000, 1); //EXCELLENT! YOU'VE BEEN SPOTTED!
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
    $.flag_print = 1;
  }
}



async function traffic_density() {
  if (!(Char.IsDead($.ped_7))) {
    if (!($.player1.isInArea2D(min_x, min_y, max_x, max_y, false /* FALSE */)) || !($.ped_7.isInArea2D(min_x, min_y, max_x, max_y, false /* FALSE */))) {
      World.SetCarDensityMultiplier(1.0);
    }
  }
  else {
    World.SetCarDensityMultiplier(1.0);
  }


  if (!($.player1.isInZone("HAITI"))) {
    bodyguard_1.markAsNoLongerNeeded();
    bodyguard_2.markAsNoLongerNeeded();
  }
}




async function flaming_coffins() {
  if ($.player1.locateAnyMeansCar2D($.var_tex2_car, 20.0, 20.0, false /* FALSE */)) {
    $.var_tex2_car.setCruiseSpeed(30.0);
  }
  else {
    $.var_tex2_car.setCruiseSpeed(20.0);
  }

  // ))))))))))))))))))))))) COFFIN CODE (((((((((((((((((((((((((((((((((((((((((((

  if ($.flag_fire_bomber == 0) {
    World.SetCarDensityMultiplier(1.0);
    $.var_tex2_car.setHeavy(false /* FALSE */);
    const _res483 = $.var_tex2_car.getCoordinates();
$.car_4_x = _res483.x;
$.car_4_y = _res483.y;
$.car_4_z = _res483.z;
    const _res484 = $.var_tex2_car.getOffsetInWorldCoords(0.0, -15.0, 0.0);
$.vect_x = _res484.x;
$.vect_y = _res484.y;
$.zed_check = _res484.z;
    $.vect_z = $.zed_check;
    $.zed_check = World.GetGroundZFor3DCoord($.vect_x, $.vect_y, $.zed_check);
    $.zed_check_2 = $.car_4_z + 1.0;
    if ($.zed_check < $.car_4_z && $.player1.locateAnyMeans2D($.vect_x, $.vect_y, 8.0, 8.0, false /* FALSE */)) {
      $.vect_x = $.vect_x - $.car_4_x;
      $.vect_y = $.vect_y - $.car_4_y;
      $.vect_z = $.vect_z - $.car_4_z;
      $.vect_z = $.vect_z + 4.0;
      $.haitian_coffin = ScriptObject.Create(jw_coffin, $.car_4_x, $.car_4_y, $.car_4_z);
      $.haitian_coffin.setCollision(true /* TRUE */);
      $.haitian_coffin.setDynamic(true /* TRUE */);
      $.haitian_coffin.placeRelativeToCar($.var_tex2_car, 0.0, -0.6, 0.1);
      $.haitian_coffin.sortOutCollisionWithCar($.var_tex2_car);
      $.haitian_coffin.addToVelocity($.vect_x, $.vect_y, $.vect_z);
      $.flag_fire_bomber = 1;
    }
  }
  if ($.flag_fire_bomber == 1) {
    if ($.haitian_coffin.hasBeenDamaged()) {
      const _res485 = $.haitian_coffin.getCoordinates();
$.vect_x = _res485.x;
$.vect_y = _res485.y;
$.vect_z = _res485.z;
      Fx.AddExplosion($.vect_x, $.vect_y, $.vect_z, 1 /* EXPLOSION_MOLOTOV */);
      $.haitian_coffin.delete();
      $.flag_fire_bomber = 0;
    }
    else {
      if (!($.scplayer.locateAnyMeansObject2D($.haitian_coffin, 15.0, 15.0, false /* FALSE */))) {
        if (!($.haitian_coffin.isOnScreen())) {
          $.haitian_coffin.delete();
          $.flag_fire_bomber = 2;
          $.timer_coffin_start = Clock.GetGameTimer();
        }
      }
    }
  }
  if ($.flag_fire_bomber == 2) {
    $.timer_coffin_now = Clock.GetGameTimer();
    $.coffin_time_lapsed = $.timer_coffin_now - $.timer_coffin_start;
    if ($.coffin_time_lapsed > 3000) {
      $.flag_fire_bomber = 0;
    }
  }
  // )))))))))))))))))))))))))))))))((((((((((((((((((((((((((((((((((((((((((((((((((((
}



async function tex2_car_routine() {
  if ($.flag_ped7 == 0) {
    $.var_tex2_car.setCruiseSpeed(15.0);
    $.var_tex2_car.setDrivingStyle(2);
    $.var_tex2_car.gotoCoordinates(-1062.0, -117.0, 11.0);
    $.var_tex2_car.addUpsidedownCheck();
    StuckCarCheck.Add($.var_tex2_car, 1.5, 2000);
    $.var_tex2_car.popBootUsingPhysics();
    //CAR_WANDER_RANDOMLY var_tex2_car
    //SET_CAR_TEMP_ACTION var_tex2_car TEMPACT_GOFORWARD 1500
    if (!(Car.IsDead($.car_1))) {
      $.car_1.setCruiseSpeed(30.0);
      $.car_1.setDrivingStyle(3);
      $.car_1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    }
    $.flag_ped7 = 1;
  }
  if ($.flag_ped7 == 1) {
    if ($.timer_reset_tex2 == 1) {
      if (!(StuckCarCheck.IsCarStuck($.var_tex2_car))) {
        $.timer_reset_tex2 = 0;
      }
    }
    if (StuckCarCheck.IsCarStuck($.var_tex2_car)) {
      if ($.timer_reset_tex2 == 0) {
        $.timer_start_tex2 = Clock.GetGameTimer();
        $.timer_reset_tex2 = 1;
      }
      if ($.timer_reset_tex2 == 1) {
        $.timer_current_tex2 = Clock.GetGameTimer();
        $.tex2_time_dif = $.timer_current_tex2 - $.timer_start_tex2;
        if ($.tex2_time_dif > 3000) {
          $.var_tex2_car.setTempAction(2 /* TEMPACT_REVERSE */, 500);
          $.timer_reset_tex2 = 0;
        }
      }
    }
    else {
      if ($.flag_route == 0) {
        if ($.var_tex2_car.locate2D(-1062.0, -117.0, 10.0, 10.0, false /* FALSE */)) {
          $.var_tex2_car.gotoCoordinates(-872.0, -284.0, 11.0);
          $.var_tex2_car.setCruiseSpeed(25.0);
          //CAR_WANDER_RANDOMLY var_tex2_car
          $.flag_route = 1;
        }
      }
      if ($.flag_route == 1) {
        if ($.var_tex2_car.locate2D(-872.0, -284.0, 10.0, 10.0, false /* FALSE */)) {
          $.var_tex2_car.gotoCoordinates(-854.0, -498.0, 11.0);
          //CAR_WANDER_RANDOMLY var_tex2_car
          $.flag_route = 2;
        }
      }
      if ($.flag_route == 2) {
        if ($.var_tex2_car.locate2D(-854.0, -498.0, 10.0, 10.0, false /* FALSE */)) {
          $.var_tex2_car.gotoCoordinates(154.0, -445.0, 11.0);
          //CAR_WANDER_RANDOMLY var_tex2_car
          $.flag_route = 3;
        }
      }
      if ($.flag_route == 3) {
        if ($.var_tex2_car.locate2D(154.0, -445.0, 10.0, 10.0, false /* FALSE */)) {
          $.var_tex2_car.gotoCoordinates(321.0, -54.0, 11.0);
          //CAR_WANDER_RANDOMLY var_tex2_car
          $.flag_route = 4;
        }
      }
      if ($.flag_route == 4) {
        if ($.var_tex2_car.locate2D(321.0, -54.0, 10.0, 10.0, false /* FALSE */)) {
          $.var_tex2_car.gotoCoordinates(410.0, 41.0, 11.0);
          //CAR_WANDER_RANDOMLY var_tex2_car
          $.flag_route = 5;
        }
      }
      if ($.flag_route == 5) {
        if ($.var_tex2_car.locate2D(410.0, 41.0, 10.0, 10.0, false /* FALSE */)) {
          $.var_tex2_car.gotoCoordinates(295.0, 230.0, 11.0);
          //CAR_WANDER_RANDOMLY var_tex2_car
          $.flag_route = 6;
        }
      }
      if ($.flag_route == 6) {
        if ($.var_tex2_car.locate2D(295.0, 230.0, 10.0, 10.0, false /* FALSE */)) {
          $.var_tex2_car.gotoCoordinates(-814.0, 36.0, 11.0);
          //CAR_WANDER_RANDOMLY var_tex2_car
          $.flag_route = 7;
        }
      }
      if ($.flag_route == 7) {
        if ($.var_tex2_car.locate2D(-814.0, 36.0, 10.0, 10.0, false /* FALSE */)) {
          $.var_tex2_car.gotoCoordinates(-854.0, -498.0, 11.0);
          //CAR_WANDER_RANDOMLY var_tex2_car
          $.flag_route = 2;
        }
      }
    }


    if (!($.var_tex2_car.isHealthGreater(350)) || $.var_tex2_car.isStuckOnRoof() || $.player1.isInCar($.var_tex2_car)) {
      //OR IS_CAR_STUCK var_tex2_car
      $.ped_7.setObjFleePlayerOnFootTillSafe($.player1);
      $.var_tex2_car.setCruiseSpeed(0.0);
      if (!(Char.IsDead($.driver_4))) {
        $.driver_4.giveWeapon(22 /* WEAPONTYPE_tec9 */, 60);
        $.driver_4.setObjKillPlayerOnFoot($.player1);
        //SET_CHAR_OBJ_LEAVE_CAR driver_4 var_tex2_car
        //SET_CHAR_THREAT_SEARCH driver_4 THREAT_PLAYER1

      }
      $.flag_ped7 = 2;
    }
  }
}

export async function serg2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Sergio 2***********************************
  // *****************************************************************************************

  // This mission is actually Avery Carrington 3: Two Bit Hit.

  // *****************************************************************************************
  // *****************************************************************************************

  // Mission start stuff



  await mission_start_serg3();  // SCM GOSUB mission_start_serg3
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_serg3_failed();  // SCM GOSUB mission_serg3_failed
  }
  await mission_cleanup_serg3();  // SCM GOSUB mission_cleanup_serg3
  // MissionBoundary

  // Variables for mission


  // VAR_INT car_1 car_3 car_4 car_5 car_6
  // VAR_INT ped_7 ped_8
  // VAR_INT driver_1 driver_3 driver_4
  // VAR_INT gang_1 gang_2


  // VAR_INT timer_start timer_now timer_dif chat_rnd chat_time
  // VAR_INT timer_reset_tex2 timer_current_tex2 timer_start_tex2 tex2_time_dif


  // VAR_INT flag_chat flag_alarm flag_switch flag_jobby flag_fire_bomber
  // VAR_INT flag_spotted flag_alarm_check flag_wait_state flag_print
  // VAR_INT flag_ped6 flag_ped7


  // VAR_INT flag_car4_dead flag_arm_ped7
  // VAR_INT var_tex2_car


  // VAR_FLOAT ped_group_x ped_group_y ped_group_heading
  // VAR_FLOAT car_4_x car_4_y car_4_z
  //VAR_FLOAT firebomb_car_speed


  // VAR_INT haitian_coffin


  // VAR_INT flag_route cuban_clothes_blip


  // VAR_INT timer_coffin_start coffin_time_lapsed timer_coffin_now

  //VAR_FLOAT fb_x fb_y fb_z firebomb_offset
  //VAR_FLOAT vect_x vect_y vect_z

  // VAR_FLOAT zed_check zed_check_2

  //VAR_INT scripted_cut_limo

  // LOCAL VARIABLES

  // LVAR_INT ped_1 ped_2 ped_3 ped_4 ped_5 ped_6
  // LVAR_INT bodyguard_1 bodyguard_2
  // LVAR_FLOAT ped4_x ped4_y ped5_x ped5_y
  // LVAR_FLOAT min_x min_y max_x max_y

  // ********** 'EXCLUSIVE' variables ******************************************************

  //VAR_INT cut_limo
  //VAR_INT  mission_blip1
  //VAR_FLOAT ped1_x ped1_y ped2_x ped2_y ped3_x ped3_y	ped_zed

  // ****************************************Mission Start************************************


}
