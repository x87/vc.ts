// Generated from main/baron5.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************baron mission 5***************************************
// *********************************ASSAULT MR COKE'S MANSION*********************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;


  $.buddy_blip_active = 0;
  coke_baron_created = 0;
  $.initial_coke_samples_played = 0;
  $.first_two_samples = 0;
  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  the_barons_final_cut = 0;
  $.raise_the_alarm_diaz = 0;
  $.set_all_guards_ojectives_diaz = 0;
  $.set_all_guards_ojectives_diaz2 = 0;
  $.buddy_in_the_maze = 0;
  $.follow_sample_played = 0;
  $.in_the_mansion = 0;
  set_all_guards_ojectives_diaz3 = 0;
  $.room_with_a_view = 0;
  $.nice_border = 0;
  $.bastards_lance = 0;


  // SCRIPT_NAME baron5


  await asyncWait(0);


  Text.LoadMissionText("BARON5");
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);


  Streaming.RequestModel(stallion);
  Streaming.LoadSpecialCharacter(5, "igbuddy");


  Streaming.LoadAllModelsNow();


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  $.buddycar = Car.Create(stallion, -290.0, -489.0, 10.5);
  $.buddy = Char.CreateInsideCar($.buddycar, 4 /* PEDTYPE_CIVMALE */, SPECIAL05);
  //PLAYER_LOOK_AT_CHAR_ALWAYS Player1 buddy

  $.buddycar.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  World.ClearArea(-250.6, -488.1, 10.5, 40.0, true /* TRUE */);
  $.buddycar.setHeading(270.0);
  $.buddycar.setCruiseSpeed(25.0);
  $.buddycar.gotoCoordinates(-250.6, -488.1, 10.5);
  Camera.SetFixedPosition(-239.700, -485.397, 11.393, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-240.525, -485.962, 11.378, 2 /* JUMP_CUT */);
  $.player1.setCoordinates(-244.6, -491.3, 10.6);
  $.player1.setHeading(0.0);


  await asyncWait(500);


  Camera.DoFade(500, 1 /* FADE_IN */);


  TIMERB = 0;


  await asyncWait(500);


  while (!(TIMERB > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_car_scene (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_car_scene"); // fallback: would break linear control flow
    }


  }
}



async function skip_passed_car_scene() {


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }

  //STOP_PLAYER_LOOKING Player1


  Streaming.Switch(false /* OFF */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSbuddy");
  Streaming.LoadSpecialModel(CUTOBJ01, "mfour");
  Streaming.LoadSpecialModel(CUTOBJ02, "carback");

  //LOAD_SCENE 1218.4 -314.5 28.9


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  World.ClearArea($.baron2X, $.baron2Y, $.baron2Z, 40.0, true /* TRUE */);
  Cutscene.Load("ass_1");
  Cutscene.SetOffset($.baron2X, $.baron2Y, $.baron2Z);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_buddy = CutsceneObject.Create(SPECIAL02);
  $.cs_buddy.setAnim("CSbuddy");


  $.cs_mfour = CutsceneObject.Create(CUTOBJ01);
  $.cs_mfour.setAnim("mfour01");


  $.cs_mfour = CutsceneObject.Create(CUTOBJ01);
  $.cs_mfour.setAnim("mfour02");


  cs_carback = CutsceneObject.Create(CUTOBJ02);
  cs_carback.setAnim("carback");

  //CLEAR_AREA 146.9 -1367.0 9.5 1.0 TRUE
  //SET_PLAYER_COORDINATES player1 146.9 -1367.0 9.5
  //SET_PLAYER_HEADING player1 270.0


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text

  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1828) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_A", 10000, 1); // Mission brief


  while ($.cs_time < 3471) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_B", 10000, 1); // Mission brief


  while ($.cs_time < 6244) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_C", 10000, 1); // Mission brief


  while ($.cs_time < 10181) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_D", 10000, 1); // Mission brief


  while ($.cs_time < 11087) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_E", 10000, 1); // Mission brief


  while ($.cs_time < 12087) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 17068) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }



  Camera.DoFade(1500, 0 /* FADE_OUT */);



  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  //SET_CAMERA_IN_FRONT_OF_PLAYER



  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);

  //SET_AREA_VISIBLE VIS_MAIN_MAP



  Streaming.RequestModel(CLa);
  Streaming.RequestModel(CLb);
  Streaming.RequestModel(M4);
  Streaming.RequestModel(uzi);
  Streaming.RequestModel(mp5lng);
  Streaming.LoadSpecialCharacter(4, "igdiaz");


  //LOAD_MISSION_AUDIO 1 ASS_1
  //LOAD_MISSION_AUDIO 2 ASS_2


  while (!(Streaming.HasModelLoaded(CLa)) || !(Streaming.HasModelLoaded(uzi)) || !(Streaming.HasModelLoaded(M4)) || !(Streaming.HasModelLoaded(mp5lng))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5)) || !(Streaming.HasModelLoaded(CLb))) {
    await asyncWait(0);


  }


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  // START OF MISSION


  $.flag_open_mansion = 1;


  $.mansion_doors.delete();


  Path.SwitchPedRoadsOff(-396.4, -583.6, 15.0, -360.5, -555.6, 33.0); //  Mansion main hall
  Path.SwitchPedRoadsOff(-271.6, -504.3, 0.0, -510.5, -661.2, 55.0); //  mansion


  Zone.SetPedInfo("GANG1", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // Mansion
  Zone.SetPedInfo("GANG1", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);



  $.player1.giveWeapon(26 /* WEAPONTYPE_M4 */, 150);
  $.player1.setCurrentWeapon(26 /* WEAPONTYPE_M4 */);
  Game.SetThreatForPedType(10 /* PEDTYPE_GANG_DIAZ */, 1 /* THREAT_PLAYER1 */);



  if (!(Char.IsDead($.buddy))) {
    $.buddy.warpFromCarToCoord(-254.9, -491.3, 10.2);
    $.buddy.clearThreatSearch();
    $.buddy.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.buddy.setSuffersCriticalHits(false /* FALSE */);
    $.buddy.giveWeapon(26 /* WEAPONTYPE_M4 */, 9999);
    $.buddy.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
    $.buddy.setHealth(200);
    $.buddy.setRunning(true /* TRUE */);
    $.buddy.setAsPlayerFriend($.player1, true /* TRUE */);
    $.buddy.setNeverTargeted(true /* TRUE */);
    $.buddy.setCeaseAttackTimer(1500);
  }


  balcony_front1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -375.2, -552.1, 18.7); //Front Door
  balcony_front1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  balcony_front1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  balcony_front1.setThreatSearch(16 /* THREAT_CIVMALE */);
  balcony_front1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  balcony_front1.setStayInSamePlace(true /* TRUE */);
  balcony_front1.setCeaseAttackTimer(1500);
  balcony_front1.setHealth(150);


  balcony_front2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -381.7, -552.4, 18.7); //Front Door
  balcony_front2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  balcony_front2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  balcony_front2.setThreatSearch(16 /* THREAT_CIVMALE */);
  balcony_front2.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  balcony_front2.setStayInSamePlace(true /* TRUE */);
  balcony_front2.setCeaseAttackTimer(1500);
  balcony_front2.setHealth(150);


  $.grounds_gaurd1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -327.9, -606.5, 12.1); //left back
  $.grounds_gaurd1.setHeading(180.0);
  $.grounds_gaurd1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd1.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd1.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd1.setCeaseAttackTimer(1500);
  $.grounds_gaurd1.setHealth(150);


  $.grounds_gaurd2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -363.9, -610.2, 9.6); //low
  $.grounds_gaurd2.setHeading(266.0);
  $.grounds_gaurd2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd2.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd2.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd2.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd2.setCeaseAttackTimer(1500);
  $.grounds_gaurd2.setHealth(150);


  $.grounds_gaurd4 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -392.6, -616.5, 10.9); //left back
  $.grounds_gaurd4.setHeading(270.0);
  $.grounds_gaurd4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd4.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd4.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd4.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd4.setCeaseAttackTimer(1500);
  $.grounds_gaurd4.setHealth(150);


  $.chatting_gaurd1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -303.5, -554.8, 12.1);
  $.chatting_gaurd1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.chatting_gaurd1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.chatting_gaurd1.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.chatting_gaurd1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.chatting_gaurd1.setStayInSamePlace(true /* TRUE */);
  $.chatting_gaurd1.setHeading(270.0);
  $.chatting_gaurd1.setCeaseAttackTimer(1500);
  $.chatting_gaurd1.setHeedThreats(true /* TRUE */);
  $.chatting_gaurd1.setCrouchWhenThreatened(true /* TRUE */);
  $.chatting_gaurd1.setHealth(150);


  $.chatting_gaurd2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -301.8, -555.0, 12.1);
  $.chatting_gaurd2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.chatting_gaurd2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.chatting_gaurd2.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.chatting_gaurd2.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.chatting_gaurd2.setStayInSamePlace(true /* TRUE */);
  $.chatting_gaurd2.setHeading(90.0);
  $.chatting_gaurd2.setCeaseAttackTimer(1500);
  Game.SetCharsChatting($.chatting_gaurd1, $.chatting_gaurd2, 999999);
  $.chatting_gaurd2.setCrouchWhenThreatened(true /* TRUE */);
  $.chatting_gaurd2.setHeedThreats(true /* TRUE */);
  $.chatting_gaurd2.setHealth(150);


  $.grounds_gaurd8 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -287.0, -581.8, 12.1);
  $.grounds_gaurd8.setHeading(90.0);
  $.grounds_gaurd8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd8.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd8.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd8.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd8.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd8.setCeaseAttackTimer(1500);
  $.grounds_gaurd8.setHealth(150);


  $.maze_gaurd1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -468.3, -576.2, 11.9); //Maze
  $.maze_gaurd1.setHeading(265.0);
  $.maze_gaurd1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.maze_gaurd1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.maze_gaurd1.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.maze_gaurd1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.maze_gaurd1.setStayInSamePlace(true /* TRUE */);
  $.maze_gaurd1.setCeaseAttackTimer(1500);
  $.maze_gaurd1.setHealth(150);


  $.maze_gaurd2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -471.1, -590.2, 11.9); //Maze
  $.maze_gaurd2.setHeading(90.0);
  $.maze_gaurd2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.maze_gaurd2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.maze_gaurd2.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.maze_gaurd2.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.maze_gaurd2.setStayInSamePlace(true /* TRUE */);
  $.maze_gaurd2.setCeaseAttackTimer(1500);
  $.maze_gaurd2.setHealth(150);


  $.maze_chat_gaurd1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -407.7, -592.3, 10.9); //Maze
  $.maze_chat_gaurd1.setHeading(8.0);
  $.maze_chat_gaurd1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.maze_chat_gaurd1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.maze_chat_gaurd1.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.maze_chat_gaurd1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.maze_chat_gaurd1.setStayInSamePlace(true /* TRUE */);
  $.maze_chat_gaurd1.setCeaseAttackTimer(1500);
  $.maze_chat_gaurd1.setHealth(150);


  $.maze_chat_gaurd2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -407.0, -590.1, 10.6); //Maze
  $.maze_chat_gaurd2.setHeading(180.0);
  $.maze_chat_gaurd2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.maze_chat_gaurd2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.maze_chat_gaurd2.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.maze_chat_gaurd2.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.maze_chat_gaurd2.setStayInSamePlace(true /* TRUE */);
  $.maze_chat_gaurd2.setCeaseAttackTimer(1500);
  $.maze_chat_gaurd2.setHealth(150);
  Game.SetCharsChatting($.maze_chat_gaurd1, $.maze_chat_gaurd2, 999999);


  $.door_chat_gaurd1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -374.2, -518.1, 11.7); //Front door chat
  $.door_chat_gaurd1.setHeading(230.0);
  $.door_chat_gaurd1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.door_chat_gaurd1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.door_chat_gaurd1.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.door_chat_gaurd1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.door_chat_gaurd1.setStayInSamePlace(true /* TRUE */);
  $.door_chat_gaurd1.setCeaseAttackTimer(1500);
  $.door_chat_gaurd1.setHealth(150);


  $.door_chat_gaurd2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -372.0, -519.6, 11.7); //Front door chat
  $.door_chat_gaurd2.setHeading(62.0);
  $.door_chat_gaurd2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.door_chat_gaurd2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.door_chat_gaurd2.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.door_chat_gaurd2.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.door_chat_gaurd2.setStayInSamePlace(true /* TRUE */);
  $.door_chat_gaurd2.setCeaseAttackTimer(1500);
  $.door_chat_gaurd2.setHealth(150);
  Game.SetCharsChatting($.door_chat_gaurd2, $.door_chat_gaurd1, 999999);


  $.grounds_gaurd9 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -312.4, -570.2, 12.0); //
  $.grounds_gaurd9.setHeading(342.0);
  $.grounds_gaurd9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd9.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd9.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd9.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd9.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd9.setCeaseAttackTimer(1500);
  $.grounds_gaurd9.setHealth(150);


  $.grounds_gaurd10 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -316.4, -617.7, 9.5); //Lawn
  $.grounds_gaurd10.setHeading(11.0);
  $.grounds_gaurd10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd10.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd10.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd10.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd10.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd10.setCeaseAttackTimer(1500);
  $.grounds_gaurd10.setHealth(150);


  $.grounds_gaurd11 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -445.0, -574.4, 12.0); //Maze end
  $.grounds_gaurd11.setHeading(180.0);
  $.grounds_gaurd11.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd11.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd11.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd11.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd11.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd11.setCeaseAttackTimer(1500);
  $.grounds_gaurd10.setHealth(150);


  $.grounds_gaurd12 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -293.7, -606.3, 12.0); //
  $.grounds_gaurd12.setHeading(0.0);
  $.grounds_gaurd12.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd12.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd12.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd12.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd12.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd12.setCeaseAttackTimer(1500);
  $.grounds_gaurd12.setHealth(150);


  $.grounds_gaurd13 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -343.9, -530.4, 14.4); //
  $.grounds_gaurd13.setHeading(280.0);
  $.grounds_gaurd13.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd13.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd13.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd13.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd13.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd13.setCeaseAttackTimer(1500);
  $.grounds_gaurd13.setHealth(150);


  $.grounds_gaurd14 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -442.8, -555.0, 13.1); //	chat maze
  $.grounds_gaurd14.setHeading(160.0);
  $.grounds_gaurd14.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd14.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd14.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd14.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd14.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd14.setCeaseAttackTimer(1500);
  $.grounds_gaurd14.setHealth(150);


  $.grounds_gaurd15 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -443.7, -557.4, 13.1); // chat maze
  $.grounds_gaurd15.setHeading(345.0);
  $.grounds_gaurd15.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.grounds_gaurd15.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.grounds_gaurd15.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.grounds_gaurd15.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.grounds_gaurd15.setStayInSamePlace(true /* TRUE */);
  $.grounds_gaurd15.setCeaseAttackTimer(1500);
  $.grounds_gaurd15.setHealth(150);
  Game.SetCharsChatting($.grounds_gaurd15, $.grounds_gaurd14, 999999);



  $.buddys_health = $.buddy.getHealth();
  Hud.DisplayCounterWithString($.$id.buddys_health, 1 /* COUNTER_DISPLAY_BAR */, "BUD1");


  $.buddy_blip = Blip.AddForChar($.buddy);
  $.buddy_blip.changeDisplay(2 /* BLIP_ONLY */);


  $.buddy.followPlayer($.player1);


  Coke_Baron_blip = Blip.AddForCoord(-382.02, -596.57, 24.9);


  Coke_Baron = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, SPECIAL04, -382.02, -596.57, 24.9);



  Coke_Baron.setSuffersCriticalHits(false /* FALSE */);
  Coke_Baron.setCanBeShotInVehicle(false /* FALSE */);
  Coke_Baron.clearThreatSearch();
  Coke_Baron.setHealth(1000);
  Coke_Baron.setHeading(53.0);
  Coke_Baron.setStayInSamePlace(true /* TRUE */);
  Coke_Baron.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 99999);
  Coke_Baron.setCeaseAttackTimer(1500);


  $.barons_gun = ScriptObject.Create(mp5lng, -383.126, -593.654, 25.06);
  $.barons_gun.setDynamic(false /* FALSE */);
  $.barons_gun.setRotation(90.0, 0.0, 10.0);
  $.barons_gun.dontRemove();

  // *************************************DIAZ SITTING IN OFFICE CUT***************************************

  Camera.SetNearClip(0.05);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(-377.123, -597.167, 25.449, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-378.119, -597.144, 25.534, 2 /* JUMP_CUT */); //View of baron sitting


  Streaming.SetAreaVisible(2 /* VIS_MANSION */);
  Streaming.LoadScene(-376.452, -593.374, 26.273);


  TIMERB = 0;


  while (!(TIMERB > 1200)) {
    await asyncWait(0);



  }


  while (!(TIMERB > 3200)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_timer_cok5 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer_cok5"); // fallback: would break linear control flow
    }


  }


  if (!(Char.IsDead(Coke_Baron))) {
    Coke_Baron.setWaitState(23 /* WAITSTATE_SIT_UP */, 500);
    Coke_Baron.setObjGotoCoordOnFoot(-383.8, -596.6);
  }


  TIMERB = 0;


  while (!(TIMERB > 1400)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_timer_cok5 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer_cok5"); // fallback: would break linear control flow
    }


  }


  Camera.SetFixedPosition(-380.109, -591.290, 28.673, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-380.595, -592.094, 28.331, 2 /* JUMP_CUT */); //view of screens


  TIMERB = 0;


  while (!(TIMERB > 2500)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_timer_cok5 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer_cok5"); // fallback: would break linear control flow
    }


  }


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.setCoordinates(-273.0, -500.1, 10.7);
    $.scplayer.setObjRunToCoord(-282.3, -511.0);
  }
  if (!(Char.IsDead($.buddy))) {
    $.buddy.setCoordinates(-270.5, -492.4, 10.2);
    $.buddy.setObjRunToCoord(-282.3, -511.0);
  }


  TIMERB = 0;


  while (!(TIMERB > 500)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_timer_cok5 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer_cok5"); // fallback: would break linear control flow
    }


  }


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  Streaming.LoadScene(-277.513, -498.283, 13.227);
  Camera.SetFixedPosition(-278.092, -497.514, 13.499, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-277.513, -498.283, 13.227, 2 /* JUMP_CUT */); //security camera
  Camera.SwitchSecurity(true /* ON */);


  TIMERB = 0;


  while (!(TIMERB > 3000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_timer_cok5 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer_cok5"); // fallback: would break linear control flow
    }


  }



  if (!(Char.IsDead(Coke_Baron))) {
    Coke_Baron.setHeading(26.0);
    Coke_Baron.setCoordinates(-381.7, -595.9, 24.9);
    Coke_Baron.setObjGotoCoordOnFoot(-381.97, -593.9);
  }


  Camera.SwitchSecurity(false /* OFF */);
  Camera.SetFixedPosition(-383.350, -592.699, 25.732, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-382.977, -593.619, 25.612, 2 /* JUMP_CUT */); //view of gun on table


  Streaming.SetAreaVisible(2 /* VIS_MANSION */);
  Streaming.LoadScene(-376.452, -593.374, 26.273);


  TIMERB = 0;


  while (!(TIMERB > 1500)) {
    await asyncWait(0);
    if (!(Char.IsDead(Coke_Baron))) {
      if (Coke_Baron.isObjectivePassed()) {
        Coke_Baron.turnToFaceCoord(-383.126, -593.654, 25.06);
      }
    }
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_timer_cok5 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer_cok5"); // fallback: would break linear control flow
    }


  }
}



async function skip_timer_cok5() {


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.buddy))) {
    $.buddy.setObjNoObj();
    $.buddy.setCoordinates(-276.3, -505.0, 11.7);
  }
  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.setObjNoObj();
    $.scplayer.setCoordinates(-282.3, -511.0, 11.7);
  }


  if (!(Char.IsDead(Coke_Baron))) {
    Coke_Baron.setObjNoObj();
    Coke_Baron.setCoordinates(-378.4, -586.8, 24.9);
  }


  Camera.SwitchSecurity(false /* OFF */);
  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  Streaming.LoadScene(-282.3, -511.0, 11.7);
  Camera.RestoreJumpcut();
  $.player1.setHeading(100.0);
  Camera.SetBehindPlayer();
  Hud.SwitchWidescreen(false /* OFF */);


  Camera.DoFade(1500, 1 /* FADE_IN */);
  await asyncWait(500);


  $.player1.setControl(true /* ON */);


  if (!(Char.IsDead(coke_baron))) {
    coke_baron.setCoordinates(-374.9, -585.2, 24.6);
  }


  Streaming.MarkModelAsNoLongerNeeded(stallion);

  // *************************************END DIAZ SITTING IN OFFICE CUT***********************************


  Text.PrintNow("ASS1_16", 10000, 1); //Kill Diaz!


  TIMERB = 0;


  if (!(Char.IsDead($.buddy))) {
    $.buddy.followPlayer($.player1);
  }


  while (!($.player1.locateAnyMeans3D(-345.6, -559.4, 26.0, 12.0, 2.0, 10.0, false /* FALSE */))) {
    await asyncWait(0);
    if ($.first_two_samples == 0) {
      if (TIMERB > 1000) {
        if ($.audio_is_loading == 0) {
          Audio.LoadMissionAudio(1, "ASS_1" as any);
          Audio.LoadMissionAudio(2, "ASS_2" as any);
          $.audio_is_loading = 1;
        }
        else {
          if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
            $.audio_has_loaded = 1;
          }
        }
        if ($.audio_has_loaded == 1) {
          $.player1.shutUp(true /* TRUE */);
          Audio.PlayMissionAudio(1);
          Text.PrintNow("ASS1_1", 4000, 1); //This place is going to be crawling with assholes...be careful...
          if (Audio.HasMissionAudioFinished(1)) {
            await asyncWait(500);
            Audio.PlayMissionAudio(2);
            Text.PrintNow("ASS1_2", 3000, 1); //Don't worry Tommy, I'll cover you.
            $.player1.shutUp(false /* FALSE */);
            $.first_two_samples = 1;
            $.audio_is_loading = 0;
            $.audio_has_loaded = 0;
            TIMERB = 0;
          }
        }
      }
    }
    if ($.in_the_mansion == 0) {
      if ($.follow_sample_played == 0) {
        if (!(Char.IsDead($.buddy))) {
          if ($.buddy.locateAnyMeans3D(-455.1, -557.8, 11.8, 4.0, 3.0, 5.0, false /* FALSE */) || $.buddy.locateAnyMeans3D(-490.1, -581.9, 11.8, 3.0, 4.0, 5.0, false /* FALSE */) || $.buddy.locateAnyMeans3D(-458.3, -604.2, 11.8, 4.0, 3.0, 5.0, false /* FALSE */) || $.buddy.locateAnyMeans3D(-303.0, -556.3, 12.0, 12.0, 2.0, 5.0, false /* FALSE */) || $.buddy.locateAnyMeans3D(-239.8, -582.2, 12.0, 3.0, 3.0, 5.0, false /* FALSE */)) {
            if ($.player1.locateAnyMeansChar3D($.buddy, 15.0, 15.0, 5.0, false /* FALSE */)) {
              if ($.first_two_samples == 1) {
                Audio.LoadMissionAudio(1, "LAW2_4" as any);
                while (!(Audio.HasMissionAudioLoaded(1))) {
                  await asyncWait(0);


                }
                Audio.PlayMissionAudio(1); //THIS WAY!
                Text.PrintNow("ASS1_19", 2000, 2); //This way
                $.follow_sample_played = 1;
              }
            }
          }
        }
      }
    }
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK4_30", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_baron5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron5_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.buddy))) {
      $.buddys_health = $.buddy.getHealth();
      $.buddys_health = $.buddys_health / 2;
    }
    if ($.buddy_in_the_maze == 0) {
      if (!(Char.IsDead($.buddy))) {
        if (!($.player1.locateAnyMeansChar3D($.buddy, 15.0, 15.0, 3.0, false /* FALSE */))) {
          if ($.buddy_blip_active == 0) {
            $.buddy.leaveGroup();
            $.buddy_blip_active = 1;
          }
        }
        else {
          if ($.buddy_blip_active == 1) {
            $.buddy.followPlayer($.player1);
            $.buddy_blip_active = 0;
          }
        }
      }
      if ($.buddy_blip_active == 1) {
        await buddy_find_the_player();  // SCM GOSUB buddy_find_the_player
      }
      if ($.player1.locateAnyMeans3D(-455.1, -557.8, 11.8, 4.0, 3.0, 5.0, false /* FALSE */) || $.player1.locateAnyMeans3D(-490.1, -581.9, 11.8, 3.0, 4.0, 5.0, false /* FALSE */) || $.player1.locateAnyMeans3D(-458.3, -604.2, 11.8, 4.0, 3.0, 5.0, false /* FALSE */)) {
        if (!(Char.IsDead($.buddy))) {
          $.buddy.leaveGroup();
          //SET_CHAR_OBJ_RUN_TO_COORD buddy -442.6 -574.9
          //CLEAR_CHAR_THREAT_SEARCH buddy
          $.buddy_in_the_maze = 1;
        }
      }
      if ($.player1.locateAnyMeans3D(-303.0, -556.3, 12.0, 12.0, 2.0, 5.0, false /* FALSE */) || $.player1.locateAnyMeans3D(-239.8, -582.2, 12.0, 3.0, 3.0, 5.0, false /* FALSE */)) {
        if (!(Char.IsDead($.buddy))) {
          $.buddy.leaveGroup();
          //SET_CHAR_OBJ_RUN_TO_COORD buddy -370.8 -604.8
          //CLEAR_CHAR_THREAT_SEARCH buddy
          $.buddy_in_the_maze = 2;
        }
      }


    }
    else {
      if ($.in_the_mansion == 0) {
        if ($.buddy_in_the_maze == 1) {
          if ($.player1.locateAnyMeans3D(-442.6, -574.9, 11.8, 2.0, 2.0, 3.0, false /* FALSE */) && $.buddy.locateAnyMeans3D(-442.6, -574.9, 11.8, 2.0, 2.0, 3.0, false /* FALSE */)) {
            $.buddy.followPlayer($.player1);
            Game.SetThreatForPedType(10 /* PEDTYPE_GANG_DIAZ */, 1 /* THREAT_PLAYER1 */);
            Audio.LoadMissionAudio(2, "ASS_4" as any);
            while (!(Audio.HasMissionAudioLoaded(2))) {
              await asyncWait(0);


            }
            if (Audio.HasMissionAudioLoaded(2)) {
              Audio.PlayMissionAudio(2); //Diaz must be inside!
              Text.PrintNow("ASS1_4", 1500, 2); //Diaz must be inside!
            }
            $.buddy_blip_active = 0;
            $.buddy_in_the_maze = 3;
          }
          if ($.in_the_mansion == 0) {
            await buddy_maze_path1();  // SCM GOSUB buddy_maze_path1
          }
        }
        if ($.buddy_in_the_maze == 2) {
          if ($.player1.locateAnyMeans3D(-370.1, -596.4, 9.5, 2.0, 2.0, 3.0, false /* FALSE */) && $.buddy.locateAnyMeans3D(-370.1, -596.4, 9.5, 2.0, 2.0, 3.0, false /* FALSE */)) {
            $.buddy.followPlayer($.player1);
            Game.SetThreatForPedType(10 /* PEDTYPE_GANG_DIAZ */, 1 /* THREAT_PLAYER1 */);
            Audio.LoadMissionAudio(2, "ASS_4" as any);
            while (!(Audio.HasMissionAudioLoaded(2))) {
              await asyncWait(0);


            }
            if (Audio.HasMissionAudioLoaded(2)) {
              Audio.PlayMissionAudio(2); //Diaz must be inside!
              Text.PrintNow("ASS1_4", 1500, 2); //Diaz must be inside!
            }
            $.buddy_blip_active = 0;
            $.buddy_in_the_maze = 3;
          }
          if ($.in_the_mansion == 0) {
            await buddy_maze_path2();  // SCM GOSUB buddy_maze_path2
          }
        }
      }
    }
    if ($.buddy_in_the_maze == 3) {
      if (!(Char.IsDead($.buddy))) {
        if (!($.player1.locateAnyMeansChar3D($.buddy, 15.0, 15.0, 3.0, false /* FALSE */))) {
          if ($.buddy_blip_active == 0) {
            $.buddy.leaveGroup();
            $.buddy_blip_active = 1;
          }
        }
        else {
          if ($.buddy_blip_active == 1) {
            $.buddy.followPlayer($.player1);
            $.buddy_blip_active = 0;
          }
        }
      }
      if ($.buddy_blip_active == 1) {
        await buddy_find_the_player();  // SCM GOSUB buddy_find_the_player
      }
    }
    if ($.in_the_mansion == 0) {
      if ($.player1.locateAnyMeans3D(-338.5, -578.7, 11.6, 2.0, 2.0, 3.0, false /* FALSE */)) {
        balcony_front1.delete();
        balcony_front2.delete();
        $.grounds_gaurd1.delete();
        $.grounds_gaurd2.delete();
        $.grounds_gaurd4.delete();
        $.chatting_gaurd1.delete();
        $.chatting_gaurd2.delete();
        $.grounds_gaurd9.delete();
        $.grounds_gaurd3 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -318.2, -577.1, 15.4); //stair well
        $.grounds_gaurd3.setHeading(90.0);
        $.grounds_gaurd3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.grounds_gaurd3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.grounds_gaurd3.setThreatSearch(16 /* THREAT_CIVMALE */);
        $.grounds_gaurd3.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
        $.grounds_gaurd3.setStayInSamePlace(true /* TRUE */);
        $.grounds_gaurd3.setCeaseAttackTimer(1500);
        $.grounds_gaurd3.setHeedThreats(true /* TRUE */);
        $.grounds_gaurd3.setCrouchWhenThreatened(true /* TRUE */);
        $.grounds_gaurd3.setHealth(150);
        $.grounds_gaurd5 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -324.6, -581.2, 19.0); //stair well
        $.grounds_gaurd5.setHeading(305.0);
        $.grounds_gaurd5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.grounds_gaurd5.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.grounds_gaurd5.setThreatSearch(16 /* THREAT_CIVMALE */);
        $.grounds_gaurd5.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
        $.grounds_gaurd5.setStayInSamePlace(true /* TRUE */);
        $.grounds_gaurd5.setCeaseAttackTimer(1500);
        $.grounds_gaurd5.setHeedThreats(true /* TRUE */);
        $.grounds_gaurd5.setCrouchWhenThreatened(true /* TRUE */);
        $.grounds_gaurd5.setHealth(150);
        $.grounds_gaurd6 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -318.2, -573.4, 22.0); //stair well
        $.grounds_gaurd6.setHeading(90.0);
        $.grounds_gaurd6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.grounds_gaurd6.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.grounds_gaurd6.setThreatSearch(16 /* THREAT_CIVMALE */);
        $.grounds_gaurd6.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
        $.grounds_gaurd6.setStayInSamePlace(true /* TRUE */);
        $.grounds_gaurd6.setCeaseAttackTimer(1500);
        $.grounds_gaurd6.setHeedThreats(true /* TRUE */);
        $.grounds_gaurd6.setCrouchWhenThreatened(true /* TRUE */);
        $.grounds_gaurd6.setHealth(150);
        $.grounds_gaurd7 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -335.5, -568.6, 19.0); //corridor landing 1
        $.grounds_gaurd7.setHeading(180.0);
        $.grounds_gaurd7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.grounds_gaurd7.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.grounds_gaurd7.setThreatSearch(16 /* THREAT_CIVMALE */);
        $.grounds_gaurd7.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
        $.grounds_gaurd7.setStayInSamePlace(true /* TRUE */);
        $.grounds_gaurd7.setCeaseAttackTimer(1500);
        $.grounds_gaurd7.setHeedThreats(true /* TRUE */);
        $.grounds_gaurd7.setCrouchWhenThreatened(true /* TRUE */);
        $.grounds_gaurd7.setHealth(150);
        $.buddy_in_the_maze = 0;
        if (!(Char.IsDead($.buddy))) {
          $.buddy.followPlayer($.player1);
          Game.SetThreatForPedType(10 /* PEDTYPE_GANG_DIAZ */, 1 /* THREAT_PLAYER1 */);
          $.buddy.setCoordinates(-341.0, -578.5, 10.9);
        }
        Audio.LoadMissionAudio(1, "ASS_11" as any);
        Audio.LoadMissionAudio(2, "ASS_12" as any);
        $.in_the_mansion = 1;
      }
    }
    if ($.player1.locateAnyMeans3D(-378.4, -551.9, 19.4, 4.0, 1.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("ASS1_18", 2000, 2);
    }
    if ($.in_the_mansion == 1) {
      $.player1.alterWantedLevel(0);
      if ($.room_with_a_view == 0) {
        if ($.player1.locateAnyMeans3D(-336.0, -570.8, 18.5, 4.0, 6.0, 4.0, false /* FALSE */) && $.buddy.locateAnyMeans3D(-336.0, -570.8, 18.5, 4.0, 6.0, 4.0, false /* FALSE */)) {
          if (!(Char.IsDead($.buddy))) {
            if (Audio.HasMissionAudioLoaded(1)) {
              Audio.PlayMissionAudio(1);
              Text.PrintNow("ASS1_11", 4500, 1); //Hey Tommy, can my room have a view of the bay?
              $.room_with_a_view = 1;
            }
          }
        }
      }
      if ($.nice_border == 0) {
        if ($.player1.locateAnyMeans3D(-336.0, -570.8, 27.5, 4.0, 6.0, 4.0, false /* FALSE */) && $.buddy.locateAnyMeans3D(-336.0, -570.8, 27.5, 4.0, 6.0, 4.0, false /* FALSE */)) {
          if (!(Char.IsDead($.buddy))) {
            if (Audio.HasMissionAudioLoaded(2)) {
              Audio.PlayMissionAudio(2);
              Text.PrintNow("ASS1_12", 4500, 1); //Beautiful high ceilings in here...
              $.nice_border = 1;
            }
          }
        }
      }
    }


  }


  balcony_front1.delete();
  balcony_front2.delete();


  front_door1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -373.5, -564.8, 18.7); //Main hall bottom of stairs
  front_door1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  front_door1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  front_door1.setThreatSearch(16 /* THREAT_CIVMALE */);
  front_door1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  front_door1.setHeading(0.0);
  front_door1.setStayInSamePlace(true /* TRUE */);
  front_door1.setCeaseAttackTimer(1500);
  front_door1.setHealth(150);


  $.front_door2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -383.7, -565.3, 18.7); //Main hall bottom of stairs
  $.front_door2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.front_door2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.front_door2.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.front_door2.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.front_door2.setHeading(0.0);
  $.front_door2.setStayInSamePlace(true /* TRUE */);
  $.front_door2.setCeaseAttackTimer(1500);
  $.front_door2.setCrouchWhenThreatened(true /* TRUE */);
  $.front_door2.setHealth(150);


  door_goon1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -376.0, -582.5, 24.5); //Diaz guard1
  door_goon1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  door_goon1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  door_goon1.setThreatSearch(16 /* THREAT_CIVMALE */);
  door_goon1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  door_goon1.setStayInSamePlace(true /* TRUE */);
  door_goon1.setCeaseAttackTimer(1500);
  door_goon1.setHealth(150);


  door_goon2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -380.9, -582.6, 24.5); //Diaz guard2
  door_goon2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  door_goon2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  door_goon2.setThreatSearch(16 /* THREAT_CIVMALE */);
  door_goon2.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  door_goon2.setStayInSamePlace(true /* TRUE */);
  door_goon2.setCeaseAttackTimer(1500);
  door_goon2.setHealth(150);


  door_goon3 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -361.6, -559.3, 26.6); //Next to top entrance
  door_goon3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  door_goon3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  door_goon3.setThreatSearch(16 /* THREAT_CIVMALE */);
  door_goon3.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  door_goon3.setStayInSamePlace(true /* TRUE */);
  door_goon3.setHeading(156.6);
  door_goon3.setCeaseAttackTimer(1500);
  door_goon3.setHealth(150);


  door_goon4 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -378.2, -560.7, 26.6); //Next to top entrance
  door_goon4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  door_goon4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  door_goon4.setThreatSearch(16 /* THREAT_CIVMALE */);
  door_goon4.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  door_goon4.setStayInSamePlace(true /* TRUE */);
  door_goon4.setHeading(180.0);
  door_goon4.setCeaseAttackTimer(1500);
  door_goon4.setHealth(150);


  door_goon5 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -391.6, -566.5, 26.6); //Next to top entrance
  door_goon5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  door_goon5.setThreatSearch(1 /* THREAT_PLAYER1 */);
  door_goon5.setThreatSearch(16 /* THREAT_CIVMALE */);
  door_goon5.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  door_goon5.setStayInSamePlace(true /* TRUE */);
  door_goon5.setHeading(248.7);
  door_goon5.setCeaseAttackTimer(1500);
  door_goon5.setCrouchWhenThreatened(true /* TRUE */);
  door_goon5.setHealth(150);



  while (!(Char.IsDead(Coke_Baron))) {
    await asyncWait(0);
    if (Char.IsDead(Coke_Baron)) {
      // SCM GOTO → barons_death (not lowered; manual jump required)
      throw new Error("unresolved GOTO barons_death"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK4_30", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_baron5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron5_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.buddy))) {
      $.buddys_health = $.buddy.getHealth();
      $.buddys_health = $.buddys_health / 2;
    }
    if ($.player1.isInArea3D(-360.8, -564.0, 17.0, -396.0, -580.5, 35.0, false /* FALSE */)) {
      if (!(Char.IsDead(Coke_Baron))) {
        if (the_barons_final_cut == 0) {
          Audio.LoadMissionAudio(1, "ASS_13" as any);
          Audio.LoadMissionAudio(2, "ASS_14" as any);
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          $.scplayer.setHeading(180.0);
          await asyncWait(0);


          World.ClearArea(378.4, -588.4, 24.5, 1.0, true /* TRUE */);
          if (!(Char.IsDead(Coke_Baron))) {
            Coke_Baron.giveWeapon(25 /* WEAPONTYPE_MP5 */, 30000);
            Coke_Baron.setObjNoObj();
            Coke_Baron.clearWaitState();
            coke_baron.setCoordinates(-378.4, -588.4, 24.5);
            coke_baron.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            Coke_Baron.setAnimGroup(33 /* ANIM_PLAYER_2ARMED_PED */);
            World.ClearArea(-378.4, -575.7, 24.5, 1.0, true /* TRUE */);
            await asyncWait(0);
            if (!(Char.IsDead(Coke_Baron))) {
              Coke_Baron.setObjGotoCoordOnFoot(-378.4, -575.7);
            }
            const _res96 = $.scplayer.getOffsetInWorldCoords(0.0, 2.0, 0.0);
$.baron_world_x = _res96.x;
$.baron_world_y = _res96.y;
$.baron_world_z = _res96.z;
            if (!(Char.IsDead($.buddy))) {
              $.buddy.setCoordinates($.baron_world_x, $.baron_world_y, $.baron_world_z);
            }
            $.barons_gun.delete();
          }
          Camera.SetFixedPosition(-377.054, -578.589, 24.429, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-377.288, -579.531, 24.668, 2 /* JUMP_CUT */); //View of walking out of room
          if (!(Char.IsDead(Coke_Baron))) {
            Coke_Baron.setObjGotoCoordOnFoot(-378.4, -575.7);
          }
          await asyncWait(2500);
          if (!(Char.IsDead(Coke_Baron))) {
            Coke_Baron.setObjGotoCoordOnFoot(-378.4, -575.7);
          }
          if (Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
            Text.PrintNow("ASS1_13", 4500, 1); //DIAZ?! I've come to take over your business!
          }
          await asyncWait(3500);
          if (!(Char.IsDead(Coke_Baron))) {
            Coke_Baron.setObjGotoCoordOnFoot(-378.4, -575.7);
          }
          Camera.SetFixedPosition(-388.502, -583.468, 28.897, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-387.833, -582.797, 28.577, 2 /* JUMP_CUT */); //View of walking out of room
          if (Audio.HasMissionAudioLoaded(2)) {
            Audio.PlayMissionAudio(2);
            Text.PrintNow("ASS1_14", 4500, 1); //TOMMY! You betray me...You idiot! I gonna kill you real soon..
          }
          await asyncWait(3000);
          if (!(Char.IsDead(Coke_Baron))) {
            Coke_Baron.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            Coke_Baron.setOnlyDamagedByPlayer(true /* TRUE */);
            Coke_Baron.setThreatSearch(1 /* THREAT_PLAYER1 */);
            Coke_Baron.setThreatSearch(16 /* THREAT_CIVMALE */);
            Coke_Baron.setObjKillPlayerOnFoot($.player1);
            $.player1.setControl(true /* ON */);
            Hud.SwitchWidescreen(false /* OFF */);
            Camera.RestoreJumpcut();
            Audio.LoadMissionAudio(1, "ASS_7" as any);
            the_barons_final_cut = 1;
          }
        }
      }
    }
    if ($.bastards_lance == 0) {
      if (the_barons_final_cut == 1) {
        if (!(Char.IsDead($.buddy))) {
          if ($.buddy.isShooting()) {
            if (Audio.HasMissionAudioLoaded(1)) {
              Audio.PlayMissionAudio(1);
              Text.PrintNow("ASS1_7", 4500, 1); //Eat this, you murdering bastards!!
              $.bastards_lance = 1;
            }
          }
        }
      }
    }
    if (the_barons_final_cut == 1) {
      if ($.diaz_hiding_behind_chair == 0) {
        if (!(Char.IsDead(coke_baron))) {
          if (!(coke_baron.isHealthGreater(500))) {
            if (Coke_Baron.locateOnFoot3D(-378.4, -575.7, 25.0, 5.0, 5.0, 4.0, false /* FALSE */)) {
              Coke_Baron.clearThreatSearch();
              Coke_Baron.setObjRunToCoord(-378.5, -589.6);
            }
            if (Coke_Baron.locateOnFoot3D(-378.5, -589.6, 25.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
              Coke_Baron.setObjRunToCoord(-375.1, -595.5);
            }
            if (Coke_Baron.locateOnFoot3D(-375.1, -595.5, 25.0, 1.0, 1.5, 4.0, false /* FALSE */)) {
              Coke_Baron.setObjRunToCoord(-378.6, -595.7);
            }
            if (Coke_Baron.locateOnFoot3D(-378.6, -595.7, 25.0, 0.5, 0.5, 4.0, false /* FALSE */)) {
              Coke_Baron.turnToFacePlayer($.player1);
              Coke_Baron.setThreatSearch(1 /* THREAT_PLAYER1 */);
              Coke_Baron.setThreatSearch(16 /* THREAT_CIVMALE */);
              Coke_Baron.setObjKillPlayerOnFoot($.player1);
              $.diaz_hiding_behind_chair = 1;
            }
          }
        }
      }
    }
    if ($.raise_the_alarm_diaz == 0) {
      if (!(Char.IsDead(front_door1))) {
        if ($.player1.locateAnyMeansChar3D(front_door1, 20.0, 20.0, 10.0, false /* FALSE */) && front_door1.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm_diaz = 1;
        }
        if (!(front_door1.isHealthGreater(90))) {
          $.raise_the_alarm_diaz = 1;
        }
      }
      if (!(Char.IsDead($.front_door2))) {
        if ($.player1.locateAnyMeansChar3D($.front_door2, 20.0, 20.0, 10.0, false /* FALSE */) && $.front_door2.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm_diaz = 1;
        }
        if (!($.front_door2.isHealthGreater(90))) {
          $.raise_the_alarm_diaz = 1;
        }
      }
      if (!(Char.IsDead(door_goon3))) {
        if ($.player1.locateAnyMeansChar3D(door_goon3, 20.0, 20.0, 10.0, false /* FALSE */) && door_goon3.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm_diaz = 1;
        }
        if (!(door_goon3.isHealthGreater(90))) {
          $.raise_the_alarm_diaz = 1;
        }
      }
      else {
        $.raise_the_alarm_diaz = 1;
      }
      if (!(Char.IsDead(door_goon4))) {
        if ($.player1.locateAnyMeansChar3D(door_goon4, 20.0, 20.0, 10.0, false /* FALSE */) && door_goon4.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm_diaz = 1;
        }
        if (!(door_goon4.isHealthGreater(90))) {
          $.raise_the_alarm_diaz = 1;
        }
      }
      else {
        $.raise_the_alarm_diaz = 1;
      }
      if (!(Char.IsDead(door_goon5))) {
        if ($.player1.locateAnyMeansChar3D(door_goon5, 20.0, 20.0, 10.0, false /* FALSE */) && door_goon5.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm_diaz = 1;
        }
        if (!(door_goon5.isHealthGreater(90))) {
          $.raise_the_alarm_diaz = 1;
        }
      }
      else {
        $.raise_the_alarm_diaz = 1;
      }


    }
    await baron_goons_attack_player2();  // SCM GOSUB baron_goons_attack_player2
    if (!(Char.IsDead($.buddy))) {
      if (!($.player1.locateAnyMeansChar3D($.buddy, 15.0, 15.0, 3.0, false /* FALSE */))) {
        if ($.buddy_blip_active == 0) {
          $.buddy.leaveGroup();
          $.buddy_blip_active = 1;
        }
      }
      else {
        if ($.buddy_blip_active == 1) {
          $.buddy.followPlayer($.player1);
          $.buddy_blip_active = 0;
        }
      }
    }
    if ($.buddy_blip_active == 1) {
      await buddy_find_the_player();  // SCM GOSUB buddy_find_the_player
    }
    if ($.in_the_mansion == 1) {
      $.player1.alterWantedLevel(0);
    }


  }
}



async function barons_death() {


  Hud.ClearCounter($.$id.buddys_health);

  // *********************************START COKE BARONS DEATH*********************************************


  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  door_goon1.delete();
  door_goon2.delete();
  door_goon3.delete();
  door_goon4.delete();
  door_goon5.delete();
  balcony_front1.delete();
  balcony_front2.delete();
  $.door_chat_gaurd1.delete();
  $.door_chat_gaurd2.delete();
  front_door1.delete();
  $.front_door2.delete();
  coke_baron.delete();
  $.buddy.delete();
  $.grounds_gaurd1.delete();
  $.grounds_gaurd2.delete();
  $.grounds_gaurd3.delete();
  $.grounds_gaurd4.delete();
  $.grounds_gaurd5.delete();
  $.grounds_gaurd6.delete();
  $.grounds_gaurd7.delete();
  $.grounds_gaurd8.delete();
  $.grounds_gaurd9.delete();
  $.grounds_gaurd10.delete();
  $.grounds_gaurd11.delete();
  $.grounds_gaurd12.delete();
  $.grounds_gaurd13.delete();
  $.grounds_gaurd14.delete();
  $.grounds_gaurd15.delete();
  $.maze_gaurd1.delete();
  $.maze_gaurd2.delete();
  $.maze_chat_gaurd1.delete();
  $.maze_chat_gaurd2.delete();


  if ($.scplayer.isOnAnyBike()) {
    $.stored_baron1_bike = $.player1.storeCarIsIn();
    if (!(Car.IsDead($.stored_baron1_bike))) {
      $.scplayer.warpFromCarToCoord(-378.3, -592.4, 24.8);
      $.stored_baron1_bike.delete();
    }
  }


  balcony_front1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -392.0, -559.5, 27.5);
  balcony_front1.setHeading(286.0);
  balcony_front1.setSuffersCriticalHits(false /* FALSE */);
  balcony_front1.explodeHead();


  $.grounds_gaurd1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -393.0, -565.4, 27.5);
  $.grounds_gaurd1.setHeading(180.0);
  $.grounds_gaurd1.setSuffersCriticalHits(false /* FALSE */);
  $.grounds_gaurd1.explodeHead();


  $.grounds_gaurd2 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -382.3, -557.7, 27.5);
  $.grounds_gaurd2.setHeading(90.0);
  $.grounds_gaurd2.setSuffersCriticalHits(false /* FALSE */);
  $.grounds_gaurd2.explodeHead();


  $.grounds_gaurd3 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -371.8, -580.4, 25.5);
  $.grounds_gaurd3.setHeading(270.0);
  $.grounds_gaurd3.setSuffersCriticalHits(false /* FALSE */);
  $.grounds_gaurd3.explodeHead();


  $.grounds_gaurd4 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -389.7, -580.2, 25.5);
  $.grounds_gaurd4.setHeading(166.0);
  $.grounds_gaurd4.setSuffersCriticalHits(false /* FALSE */);
  $.grounds_gaurd4.explodeHead();


  $.grounds_gaurd5 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -370.3, -559.2, 27.5);
  $.grounds_gaurd5.setHeading(100.0);
  $.grounds_gaurd5.setSuffersCriticalHits(false /* FALSE */);
  $.grounds_gaurd5.explodeHead();


  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;


  while (!($.player1.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }


  $.player1.makeSafeForCutscene();


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(false /* OFF */);


  World.SetExtraColors(8, false /* FALSE */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdiaz");
  Streaming.LoadSpecialCharacter(3, "CSbuddy");
  Streaming.LoadSpecialModel(CUTOBJ01, "cpyth");
  Streaming.LoadSpecialModel(CUTOBJ02, "deagl");


  Streaming.LoadScene(-378.3, -577.3, 25.3);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  await asyncWait(1500);


  Cutscene.Load("ass_2");
  World.ClearArea(-378.6, -552.6, 25.5, 40.0, true /* TRUE */);
  World.ClearArea(-379.0, -564.6, 19.8, 40.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_diaz = CutsceneObject.Create(SPECIAL02);
  $.cs_diaz.setAnim("csdiaz");


  $.cs_buddy = CutsceneObject.Create(SPECIAL03);
  $.cs_buddy.setAnim("CSbuddy");


  $.cs_mfour = CutsceneObject.Create(CUTOBJ01);
  $.cs_mfour.attachToBone($.cs_player, 24 /* BONE_R_HAND */);


  cs_mfour2 = CutsceneObject.Create(CUTOBJ02);
  cs_mfour2.setAnim("deagl");

  //ATTACH_CUTSCENE_OBJECT_TO_BONE cs_mfour2 CS_buddy BONE_R_HAND

  //CLEAR_AREA 146.9 -1367.0 9.5 1.0 TRUE
  //SET_PLAYER_COORDINATES player1 146.9 -1367.0 9.5
  //SET_PLAYER_HEADING player1 270.0


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 5061) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_F", 10000, 1); // Mission brief


  while ($.cs_time < 8717) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_G", 10000, 1); // Mission brief


  while ($.cs_time < 11569) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_H", 10000, 1); // Mission brief


  while ($.cs_time < 13154) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_I", 10000, 1); // Mission brief


  while ($.cs_time < 15615) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_J", 10000, 1); // Mission brief


  while ($.cs_time < 20715) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_K", 10000, 1); // Mission brief


  while ($.cs_time < 23530) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ASS1_L", 5000, 1); // Mission brief


  while ($.cs_time < 24530) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  while ($.cs_time < 27376) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Audio.SetMusicDoesFade(false /* FALSE */);


  Text.ClearPrints();
  Text.ClearSmallPrints();


  Camera.SetFadingColor(255, 255, 255);


  Camera.DoFade(0, 0 /* FADE_OUT */);


  while ($.cs_time < 28876) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();
  Text.ClearSmallPrints();

  //DO_FADE 0 FADE_OUT


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  await asyncWait(1000);


  Text.ClearPrints();
  Text.ClearSmallPrints();
  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Text.ClearPrints();


  await asyncWait(0);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Audio.SetMusicDoesFade(true /* TRUE */);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  World.ClearExtraColors(false /* FALSE */);


  $.gen_car158.switch(101);


  Zone.SetPedInfo("GANG1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0); // Mansion
  Zone.SetPedInfo("GANG1", 0 /* NIGHT */, 12, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);


  World.ClearArea(-378.6, -552.6, 25.5, 40.0, true /* TRUE */);
  World.ClearArea(-379.0, -564.6, 19.8, 40.0, true /* TRUE */);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Streaming.LoadScene(-381.8, -536.0, 26.3);


  Camera.SetFixedPosition(-415.273, -502.090, 39.183, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-414.699, -502.788, 38.754, 2 /* JUMP_CUT */); //View of Mansion front


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Audio.PlayMissionPassedTune(1);
  Text.PrintBig("PROP_A", 7000, 6); //"PROPERTY ACCUIRED"


  await asyncWait(6000);


  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  $.player1.setCoordinates(-378.3, -592.4, 24.8);
  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setHeading(0.0);
  Camera.SetInFrontOfPlayer();
  Camera.RestoreJumpcut();


  await asyncWait(500);


  Streaming.SetAreaVisible(2 /* VIS_MANSION */);
  Streaming.LoadScene(-378.3, -592.4, 24.8);


  Camera.DoFade(1000, 1 /* FADE_IN */);


  Text.ClearPrints();

  // *********************************END COKE BARONS DEATH*********************************************



  // SCM GOTO → mission_baron5_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_baron5_passed"); // fallback: would break linear control flow
}



// Mission baron5 failed


async function onFailed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"


  if ($.player1.isPlaying()) {
    if ($.flag_player_in_mansion == 1 || $.player1.isInArea3D(-350.93, -574.95, 10.0, -369.20, -598.84, 13.5, false /* FALSE */) || $.player1.isInArea3D(-387.75, -598.51, 10.0, -443.60, -571.64, 13.5, false /* FALSE */)) {
      if (Char.IsDead($.buddy)) {
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        if ($.player1.isPlaying()) {
          Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
          Streaming.LoadScene(-274.4, -492.9, 10.3);
          $.player1.setCoordinates(-274.4, -492.9, 10.3);
          $.player1.setHeading(270.0);
          Camera.SetBehindPlayer();
          $.buddycar.delete();
          $.buddy.delete();
        }
        Camera.DoFade(1000, 1 /* FADE_IN */);
      }
    }
  }


  $.mansion_doors = ScriptObject.CreateNoOffset(mansion_new_doors, -391.19, -575.906, 24.071);
  $.mansion_doors.dontRemove();
  $.flag_open_mansion = 0;
}




// mission baron5 passed


async function mission_baron5_passed() {


  $.flag_baron_mission5_passed = 1;


  $.mansion_closed.delete();
  $.mansion_open = ScriptObject.CreateNoOffset(man_dooropen, -378.542, -554.006, 21.96);
  $.mansion_open.dontRemove();
  $.flag_open_mansion = 2;
  $.player1.clearWantedLevel();
  $.player1.addScore(50000);
  Stat.RegisterMissionPassed("ASS_1");
  Game.SetMaxWantedLevel(6);
  Stat.PlayerMadeProgress(1);
  $.heli2_cargen.switch(101);
  $.heli3_cargen.switch(101);
  $.heli4_cargen.switch(101);
  $.mansion_save_garage11.changeType(31 /* GARAGE_HIDEOUT_ELEVEN */);
  $.star_gun3 = Pickup.CreateWithAmmo(m4, 15 /* PICKUP_ON_STREET_SLOW */, 120, -330.9, -569.7, 11.6); //In the armoury
  $.star_gun4 = Pickup.CreateWithAmmo(chromegun, 15 /* PICKUP_ON_STREET_SLOW */, 50, -335.9, -569.5, 11.6); //In the armoury
  $.star_health3 = Pickup.Create(health, 2 /* PICKUP_ON_STREET */, -330.702, -573.366, 11.6); //In armoury
  $.star_arm1 = Pickup.Create(bodyarmour, 2 /* PICKUP_ON_STREET */, -336.0, -573.7, 11.6); //In the armoury
  $.mansion_clothes = Pickup.CreateClothes(-384.5, -591.9, 25.3, 1);
  $.mansion_clothes_created = 1;
  $.gen_car51.switch(0);
  $.buddys_lambo.switch(101);
  $.m4_in_stock = 1;
  $.mp5_in_stock = 1;
  $.python_in_stock = 1;
  // START_NEW_SCRIPT protect_mission1_loop 
  // START_NEW_SCRIPT mansion_save_loop 
  //ADD_SHORT_RANGE_SPRITE_BLIP_FOR_COORD -378.3 -597.2 25.8 RADAR_SPRITE_HOUSEG mansion_blip

  $.baron_contact_blip.remove();
  $.protect_contact_blip.remove();
  Text.PrintWithNumberBig("M_PASS", 50000, 2000, 1); //"Mission Passed!"
  $.protect_contact_blip = Blip.AddSpriteForContactPoint(-378.3, -579.8, 24.5, 29 /* RADAR_SPRITE_TOMMY */);
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  Streaming.MarkModelAsNoLongerNeeded(CLa);
  Streaming.MarkModelAsNoLongerNeeded(CLb);
  Streaming.MarkModelAsNoLongerNeeded(M4);
  Streaming.MarkModelAsNoLongerNeeded(mp5lng);
  Streaming.MarkModelAsNoLongerNeeded(uzi);
  Streaming.MarkModelAsNoLongerNeeded(stallion);
  door_goon1.markAsNoLongerNeeded();
  door_goon2.markAsNoLongerNeeded();
  door_goon3.markAsNoLongerNeeded();
  door_goon4.markAsNoLongerNeeded();
  door_goon5.markAsNoLongerNeeded();
  balcony_front1.markAsNoLongerNeeded();
  balcony_front2.markAsNoLongerNeeded();
  $.door_chat_gaurd1.markAsNoLongerNeeded();
  $.door_chat_gaurd2.markAsNoLongerNeeded();
  front_door1.markAsNoLongerNeeded();
  $.front_door2.markAsNoLongerNeeded();
  coke_baron.markAsNoLongerNeeded();
  $.buddy.markAsNoLongerNeeded();
  $.grounds_gaurd1.markAsNoLongerNeeded();
  $.grounds_gaurd2.markAsNoLongerNeeded();
  $.grounds_gaurd3.markAsNoLongerNeeded();
  $.grounds_gaurd4.markAsNoLongerNeeded();
  $.grounds_gaurd5.markAsNoLongerNeeded();
  $.grounds_gaurd6.markAsNoLongerNeeded();
  $.grounds_gaurd7.markAsNoLongerNeeded();
  $.grounds_gaurd8.markAsNoLongerNeeded();
  $.grounds_gaurd9.markAsNoLongerNeeded();
  $.grounds_gaurd10.markAsNoLongerNeeded();
  $.grounds_gaurd11.markAsNoLongerNeeded();
  $.grounds_gaurd12.markAsNoLongerNeeded();
  $.grounds_gaurd13.markAsNoLongerNeeded();
  $.grounds_gaurd14.markAsNoLongerNeeded();
  $.grounds_gaurd15.markAsNoLongerNeeded();
  $.maze_gaurd1.markAsNoLongerNeeded();
  $.maze_gaurd2.markAsNoLongerNeeded();
  $.maze_chat_gaurd1.markAsNoLongerNeeded();
  $.maze_chat_gaurd2.markAsNoLongerNeeded();
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Coke_Baron_blip.remove();
  $.buddy_blip.remove();
  $.barons_gun.delete();
  $.buddy.removeElegantly();
  Hud.ClearCounter($.$id.buddys_health);
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Path.SwitchPedRoadsOn(-271.6, -504.3, 0.0, -510.5, -661.2, 55.0); //  Mansion main hall
  Path.SwitchPedRoadsOff(-396.4, -583.6, 15.0, -360.5, -555.6, 33.0);
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);
  Mission.Finish();
}




async function baron_goons_attack_player2() {


  if ($.raise_the_alarm_diaz == 1) {
    if (set_all_guards_ojectives_diaz3 == 0) {
      if (!(Char.IsDead(door_goon1))) {
        door_goon1.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(door_goon2))) {
        door_goon2.setObjKillPlayerOnFoot($.player1);
      }
      set_all_guards_ojectives_diaz3 = 1;
    }
    if ($.set_all_guards_ojectives_diaz2 == 0) {
      if (!(Char.IsDead(door_goon3))) {
        door_goon3.setStayInSamePlace(false /* FALSE */);
        door_goon3.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(door_goon4))) {
        door_goon4.setStayInSamePlace(false /* FALSE */);
        door_goon4.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(door_goon5))) {
        door_goon5.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(front_door1))) {
        front_door1.setStayInSamePlace(false /* FALSE */);
        front_door1.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.front_door2))) {
        $.front_door2.setObjKillPlayerOnFoot($.player1);
      }
      $.set_all_guards_ojectives_diaz2 = 1;
    }
    if (TIMERA > 1000) {
      const _res97 = $.player1.getCoordinates();
$.player_x = _res97.x;
$.player_y = _res97.y;
$.player_z = _res97.z;
      if (the_barons_final_cut == 1) {
        if (!(Char.IsDead(door_goon1))) {
          door_goon1.setStayInSamePlace(false /* FALSE */);
          if (!(door_goon1.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
            door_goon1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
          }
        }
        if (!(Char.IsDead(door_goon2))) {
          door_goon2.setStayInSamePlace(false /* FALSE */);
          if (!(door_goon2.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
            door_goon2.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
          }
        }
      }
      if (!(Char.IsDead(door_goon3))) {
        if (!(door_goon3.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
          door_goon3.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
        }
      }
      if (!(Char.IsDead(door_goon4))) {
        if (!(door_goon4.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
          door_goon4.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
        }
      }
      /*IF NOT IS_CHAR_DEAD door_goon5
      IF NOT IS_CHAR_WANDER_PATH_CLEAR door_goon5 player_x player_y player_z 2.0
      CHAR_FOLLOW_PATH door_goon5 player_x player_y player_z 2.0 RUN
      ENDIF
      ENDIF*/
      if (!(Char.IsDead(front_door1))) {
        if (!(front_door1.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
          front_door1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
        }
      }
      /*IF NOT IS_CHAR_DEAD front_door2
      IF NOT IS_CHAR_WANDER_PATH_CLEAR front_door2 player_x player_y player_z 2.0
      CHAR_FOLLOW_PATH front_door2 player_x player_y player_z 2.0 RUN
      ENDIF
      ENDIF*/

      TIMERA = 0;
    }


  }
}




async function buddy_maze_path1() {


  if (TIMERA > 1000) {
    if (!(Char.IsDead($.buddy))) {
      if (!($.buddy.isWanderPathClear(-442.6, -574.9, 11.0, 0.5))) {
        $.buddy.followPath(-442.6, -574.9, 11.0, 0.5, 1 /* RUN */);
      }
    }
    TIMERA = 0;
  }
}




async function buddy_maze_path2() {


  if (TIMERA > 1000) {
    if (!(Char.IsDead($.buddy))) {
      if (!($.buddy.isWanderPathClear(-370.1, -596.4, 9.5, 0.5))) {
        $.buddy.followPath(-370.1, -596.4, 9.5, 0.5, 1 /* RUN */);
      }
    }
    TIMERA = 0;
  }
}




async function buddy_find_the_player() {



  if (TIMERB > 1000) {
    const _res98 = $.player1.getCoordinates();
$.player_x = _res98.x;
$.player_y = _res98.y;
$.player_z = _res98.z;
    if (!(Char.IsDead($.buddy))) {
      if (!($.buddy.isWanderPathClear($.player_x, $.player_y, $.player_z, 0.5))) {
        $.buddy.followPath($.player_x, $.player_y, $.player_z, 0.5, 1 /* RUN */);
      }
    }
    TIMERB = 0;
  }
}

export async function baron5() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_baron5


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_baron5_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_baron5




  // Variables for mission



  // LVAR_INT Coke_Baron Coke_Baron_blip coke_baron_created the_barons_final_cut cs_carback cs_mfour2 set_all_guards_ojectives_diaz3
  // LVAR_INT door_goon1 door_goon2 door_goon3 door_goon4 door_goon5 balcony_front1 balcony_front2 front_door1
  // VAR_INT coke_car1 coke_car2 coke_limo1 initial_coke_samples_played set_all_guards_ojectives_diaz2 buddy_in_the_maze
  // VAR_INT raise_the_alarm_diaz set_all_guards_ojectives_diaz cs_mfour barons_gun follow_sample_played
  // VAR_INT grounds_gaurd1 grounds_gaurd2 grounds_gaurd3 grounds_gaurd4 in_the_mansion grounds_gaurd5
  // VAR_INT chatting_gaurd1 chatting_gaurd2 grounds_gaurd7 diaz_hiding_behind_chair maze_gaurd1 maze_gaurd2
  // VAR_INT maze_chat_gaurd1 maze_chat_gaurd2 front_door2 buddys_health grounds_gaurd9 grounds_gaurd10 grounds_gaurd11
  // VAR_INT grounds_gaurd6 grounds_gaurd8 door_chat_gaurd1 door_chat_gaurd2 grounds_gaurd12 grounds_gaurd13 grounds_gaurd14 grounds_gaurd15
  // VAR_FLOAT baron_World_X baron_World_Y baron_World_Z
  // VAR_INT room_with_a_view nice_border bastards_lance stored_baron1_bike

  // ***************************************Mission Start*************************************


}
