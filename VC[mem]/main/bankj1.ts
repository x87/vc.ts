// Generated from main/bankj1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_bankjob1() {


  ONMISSION = 1;


  $.flag_player_in_malibu = 0;


  $.flag_player_on_bank1_mission = 1;


  Stat.RegisterMissionGiven();

  // safecracker


  $.flag_safecracker_dead_bankjob1 = 0;


  $.flag_safecracker_in_group_bankjob1 = 0;


  $.flag_cams_blip_on_bankjob1 = 0;


  $.flag_had_cops_message_bankjob1 = 0;

  // cop1


  $.flag_cop1_dead_bankjob1 = 0;


  $.flag_duck_cop1 = 0;


  $.counter_time_cop1_duck_again = 0;


  $.counter_shoot_cop1 = 0;


  $.flag_start_shoot_timer_cop1 = 0;


  $.flag_cop1_got_gun_bankjob1 = 0;


  $.timer_start_cop1_bankjob1 = 0;


  $.times_done_gun_cop1_bankjob1 = 0;


  $.timer_gun_cop1_bankjob1 = 0;


  $.cop1_health_bank1 = 100;

  // cop2


  $.flag_cop2_dead_bankjob1 = 0;


  $.flag_duck_cop2 = 0;


  $.counter_time_cop2_duck_again = 0;


  $.counter_shoot_cop2 = 0;


  $.flag_start_shoot_timer_cop2 = 0;


  $.flag_cop2_got_gun_bankjob1 = 0;


  $.timer_start_cop2_bankjob1 = 0;


  $.times_done_gun_cop2_bankjob1 = 0;


  $.timer_gun_cop2_bankjob1 = 0;


  $.cop2_health_bank1 = 100;

  // cop3


  $.flag_cop3_dead_bankjob1 = 0;


  $.flag_duck_cop3 = 0;


  $.counter_time_cop3_duck_again = 0;


  $.counter_shoot_cop3 = 0;


  $.flag_start_shoot_timer_cop3 = 0;


  $.flag_cop3_got_gun_bankjob1 = 0;


  $.timer_start_cop3_bankjob1 = 0;


  $.times_done_gun_cop3_bankjob1 = 0;


  $.timer_gun_cop3_bankjob1 = 0;


  $.cop3_health_bank1 = 100;

  // cop4


  $.flag_cop4_dead_bankjob1 = 0;


  $.flag_duck_cop4 = 0;


  $.counter_time_cop4_duck_again = 0;


  $.counter_shoot_cop4 = 0;


  $.flag_start_shoot_timer_cop4 = 0;


  $.flag_cop4_got_gun_bankjob1 = 0;


  $.timer_start_cop4_bankjob1 = 0;


  $.times_done_gun_cop4_bankjob1 = 0;


  $.timer_gun_cop4_bankjob1 = 0;


  $.cop4_health_bank1 = 100;

  //cop5


  $.flag_cop5_dead_bankjob1 = 0;


  $.flag_cop5_got_gun_bankjob1 = 0;


  $.cop5_health_bank1 = 100;

  // cop6


  $.flag_cop6_dead_bankjob1 = 0;


  $.flag_duck_cop6 = 0;


  $.counter_time_cop6_duck_again = 0;


  $.counter_shoot_cop6 = 0;


  $.flag_start_shoot_timer_cop6 = 0;


  $.flag_cop6_got_gun_bankjob1 = 0;


  $.timer_start_cop6_bankjob1 = 0;


  $.times_done_gun_cop6_bankjob1 = 0;


  $.timer_gun_cop6_bankjob1 = 0;


  $.cop6_health_bank1 = 100;

  // cop7


  $.flag_cop7_dead_bankjob1 = 0;


  $.flag_cop7_got_gun_bankjob1 = 0;


  $.cop7_health_bank1 = 100;


  $.cop7_sitting_bankjob1 = 0;

  // cop8


  $.flag_cop8_dead_bankjob1 = 0;


  $.flag_cop8_got_gun_bankjob1 = 0;


  $.cop8_health_bank1 = 100;

  // Cop9


  $.flag_cop9_dead_bankjob1 = 0;


  $.flag_cop9_got_gun_bankjob1 = 0;


  $.cop9_health_bank1 = 100;

  //Cop10


  $.flag_cop10_dead_bankjob1 = 0;


  $.flag_cop10_got_gun_bankjob1 = 0;


  $.cop10_health_bank1 = 100;

  // cop11


  $.flag_cop11_dead_bankjob1 = 0;


  $.flag_cop11_got_gun_bankjob1 = 0;


  $.cop11_health_bank1 = 100;


  $.cop11_sitting_bankjob1 = 0;

  // General stuff


  $.kill_player_flag_bankjob1 = 0;


  $.flag_bloke_in_group_bankjob1 = 0;


  $.player_x_bankjob1 = 0.0;


  $.player_y_bankjob1 = 0.0;


  $.player_z_bankjob1 = 0.0;

  // key stuff


  $.flag_key_collected_bankjob1 = 0;


  $.flag_doors_moved_bankjob1 = 0;


  $.flag_cell_door_open_bankjob1 = 0;

  // unifrom stuff


  $.uniform_pickedup_bankjob1 = 0;

  // Player armed stuff


  $.flag_player_armed_bankjob1 = 0;


  $.flag_player_gun_message_bankjob1 = 0;

  // Player in area of station he should not be


  $.flag_player_in_station_bankjob1 = 0;


  $.flag_had_area_message_bankjob1 = 0;

  // Alarm stuff


  $.total_guards_created_bankjob1 = 0;


  $.counter_blokes_alive_bankjob1 = 0;


  $.flag_created_bloke_in_area_bankjob1 = 0;


  $.flag_guard1_state_bankjob1 = 0;


  $.flag_guard2_state_bankjob1 = 0;


  $.flag_guard3_state_bankjob1 = 0;


  $.flag_guard4_state_bankjob1 = 0;


  $.flag_guard5_state_bankjob1 = 0;


  $.flag_guard6_state_bankjob1 = 0;


  $.flag_guard7_state_bankjob1 = 0;


  $.flag_guard8_state_bankjob1 = 0;


  $.flag_timer_started_bankjob1 = 0;


  $.guard_number_bankjob1 = 0;


  $.cam_died_in_subscript_bankjob1 = 0;


  $.alarm_sound_added_bankjob1 = 0;

  // Weapon stuff


  $.player_had_gun_warning_bank1 = 0;

  // Celldoor audio


  $.door_sfx1_bankjob1 = 0;


  $.had_cop_audio_1sttime_bankjob1 = 0;


  $.had_cop_audio_bankjob1 = 0;


  $.alarm_triggered_bankjob1 = 0;

  // sitting stuff


  $.cop2_sitting_bankjob1 = 1;


  $.cop3_sitting_bankjob1 = 1;


  $.cop4_sitting_bankjob1 = 1;


  $.cop5_chatting_bankjob1 = 1;


  $.cop6_sitting_bankjob1 = 1;


  $.cop8_sitting_bankjob1 = 1;


  $.cop9_sitting_bankjob1 = 1;


  $.cop10_sitting_bankjob1 = 1;

  // Area2 used for if the player is behind the counter in station


  $.had_area2_message_bankjob1 = 0;


  $.game_time_bank1 = 0;


  $.timer_started_bank1 = 0;


  $.time_to_act_bank1 = 0;


  $.timer_guards_react_bank1 = 0;


  $.timer_alarm_guards_react_bank1 = 0;


  $.time_to_act_alarm_bank1 = 0;


  $.timer_started_alarm_bank1 = 0;


  $.player_has_key_message_bank1 = 0;


  $.player_no_key_message_bank1 = 0;


  $.player_had_locker_message_bank1 = 0;

  // Audio stuff


  $.flag_played_card_beep_bank1 = 0;


  $.start_timer_for_message_bank1 = 0;

  // Used to delete extra guards if player is not longer in teh area


  $.player_gone_out_bank1 = 0;

  // Escape car stuff


  $.escape_car_created_bank1 = 0;


  await asyncWait(0);


  Text.LoadMissionText("BANKJ1");


  Shortcut.SetDropoffPointForMission(512.591, -74.900, 9.573, 189.24);




  // ****************************************START OF CUTSCENE********************************

  // removes all of the clothes pickups


  $.mansion_clothes.remove();
  $.safehouse_clothes2.remove();
  $.clothes_pickup1.remove();
  $.clothes_pickup2.remove();
  $.clothes_pickup3.remove();
  $.clothes_pickup4.remove();
  $.clothes_pickup5.remove();
  $.clothes_pickup6.remove();
  $.clothes_pickup7.remove();
  $.clothes_pickup8.remove();
  $.clothes_pickup9.remove();
  $.clothes_pickup13.remove();


  $.gun_beach11.remove(); //Inside Police Station


  Path.SwitchPedRoadsOff(371.0, -503.0, -10.0, 403.0, -490.0, 30.0); //Cop shop (South beach)
  Path.SwitchPedRoadsOff(357.0, -506.0, -10.0, 384.0, -475.0, 30.0); //Cop shop (South beach)
  Path.SwitchPedRoadsOff(363.0, -476.0, -10.0, 378.0, -468.0, 30.0); //Cop shop (South beach)
  Path.SwitchPedRoadsOff(383.0, -488.0, -10.0, 398.3, -470.5, 30.0); //Cop shop (South beach)
  Path.SwitchPedRoadsOff(376.66, -453.85, -10.00, 328.91, -504.02, 30.0); //Cop Shop (Used in bank1)


  $.door_sliding_bankjob1 = Sound.AddContinuous(385.49, -509.0, 9.6, 0 /* SOUND_BANK_ALARM_LOOP */);
  $.door_sliding_bankjob1.remove();


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }


  }


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSken");
  Streaming.LoadSpecialModel(CUTOBJ01, "gcfan");
  Streaming.LoadSpecialModel(CUTOBJ02, "clchr");


  Streaming.SetAreaVisible(17 /* VIS_MALIBU_CLUB */);


  Streaming.LoadScene(481.03, -64.21, 8.98);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  Cutscene.Load("bank_1");


  Cutscene.SetOffset(476.972, -65.499, 8.943);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("CSken");


  $.cs_clubfan = CutsceneObject.Create(CUTOBJ01);
  Cutscene.SetAnimToLoop("gcfan");
  $.cs_clubfan.setAnim("gcfan");


  $.cs_clubchair = CutsceneObject.Create(CUTOBJ02);
  $.cs_clubchair.setAnim("clchr");


  World.ClearArea(493.1, -82.4, 9.8, 1.0, true /* TRUE */);
  $.player1.setCoordinates(493.1, -82.4, 9.8);
  $.player1.setHeading(220.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 9500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_A", 10000, 1); // "Tommy! Hey, Tommy, look at this, this is great! I've got us this minibar installed!"


  while ($.cs_time < 13934) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_B", 10000, 1); //"We got a whole bar downstairs, Ken!"


  while ($.cs_time < 17483) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_C", 10000, 1); //"Yeah, yeah whatever. Well I got the chalk board you asked for."


  while ($.cs_time < 20276) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_D", 10000, 1); //"Ah that's the benefit of a law school education; the ability to follow instructions."


  while ($.cs_time < 25517) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_E", 10000, 1); //"Now, I need a safe man."


  while ($.cs_time < 27000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_F", 10000, 1); //"Oh, alright, well let me think..safesafesafesafe- I got it! This guy will blow you away!"


  while ($.cs_time < 33662) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_G", 10000, 1); //"Oh, no, that schmuck, he's on the inside."


  while ($.cs_time < 36542) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_H", 10000, 1); //"Where inside?"


  while ($.cs_time < 38100) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_I", 10000, 1); //"In a police HQ cell awaiting transfer."


  while ($.cs_time < 40677) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM1_J", 10000, 1); //"I think he's about to get paroled...."


  while ($.cs_time < 43072) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 47316) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintBig("BEACH3", 3000, 2); //"Vice Point"


  World.ClearExtraColors(false /* FALSE */);


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  World.SetCarDensityMultiplier(1.0);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);


  Camera.SetBehindPlayer();


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Streaming.LoadScene(493.1, -82.4, 9.8);

  // ****************************************END OF CUTSCENE**********************************


  $.flag_player_in_malibu = 0;


  $.player1.setMood(0 /* PLAYER_MOOD_CALM */, 60000);


  if (!($.cams_celldoor.hasBeenDamaged())) {
    $.cams_celldoor.setCoordinates(384.098, -505.893, 9.68);
  }


  $.radar_blip_coord1_bankjob1 = Blip.AddForCoord(-848.02, -901.72, 10.10);
  $.radar_blip_coord1_bankjob1.remove();


  $.sphere2_bankjob1 = Sphere.Create(385.13, -509.0, 8.0, 1.0);
  $.sphere2_bankjob1.remove();

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(2000, 1 /* FADE_IN */);

  // Requests and loads the models


  Streaming.RequestModel(COP);
  Streaming.LoadSpecialCharacter(3, "IGMIKE"); //CAM Jones
  Streaming.RequestModel(UZI);
  Streaming.RequestModel(SENTINEL);



  while (!(Streaming.HasModelLoaded(COP)) || !(Streaming.HasModelLoaded(UZI)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(SENTINEL))) {
    await asyncWait(0);


  }


  $.health_bankjob1 = Pickup.Create(health, 3 /* PICKUP_ONCE */, 366.9, -491.80, 13.5);

  // creates the safecracker


  $.safecracker_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL03, 381.528, -504.34, 8.40);


  $.safecracker_bankjob1.clearThreatSearch();


  $.safecracker_bankjob1.setHeading(132.535);



  $.safecracker_bankjob1.setAsPlayerFriend($.player1, true /* TRUE */);


  $.safecracker_bankjob1.setSuffersCriticalHits(false /* FALSE */);


  $.safecracker_bankjob1.setNeverTargeted(true /* TRUE */);


  $.safecracker_bankjob1.setWaitState(21 /* WAITSTATE_SIT_DOWN */, 1000000);


  Text.PrintNow("BJM1_1", 4000, 1); //"Break the safecracker out of police custody!"



  $.radar_blip_ped1_bankjob1 = Blip.AddForChar($.safecracker_bankjob1);

  // creates cop1 at the info desk ground floor


  $.cop1_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 388.30, -473.90, 11.34);


  ++$.counter_blokes_alive_bankjob1;


  $.cop1_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop1_bankjob1.clearThreatSearch();


  $.cop1_bankjob1.setHeading(217.58);


  $.cop1_bankjob1.setStayInSamePlace(true /* TRUE */);


  $.cop1_bankjob1.setObjGuardSpot(388.30, -473.90, 11.34);

  // creates cop2 in info desk sitting at computer


  $.cop2_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 387.58, -471.051, 11.35); // 387.988 -471.397 11.35 cop2_bankjob1


  ++$.counter_blokes_alive_bankjob1;


  $.cop2_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop2_bankjob1.clearThreatSearch();


  $.cop2_bankjob1.setStayInSamePlace(true /* TRUE */);


  $.cop2_bankjob1.setHeading(352.371);


  $.cop2_bankjob1.setWaitState(21 /* WAITSTATE_SIT_DOWN */, 1000000);

  // Creates cop3 at info desk sitting a computer on left hand side cowardly cop ducks most of the time


  $.cop3_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 384.196, -472.554, 11.35);


  ++$.counter_blokes_alive_bankjob1;


  $.cop3_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop3_bankjob1.clearThreatSearch();


  $.cop3_bankjob1.setStayInSamePlace(true /* TRUE */);


  $.cop3_bankjob1.setHeading(105.497);


  $.cop3_bankjob1.setWaitState(21 /* WAITSTATE_SIT_DOWN */, 1000000);

  // Creates cop4 guy with key for cells in upstrairs office left hand side - large office


  $.cop4_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 363.709, -475.485, 12.83);


  ++$.counter_blokes_alive_bankjob1;


  $.cop4_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop4_bankjob1.clearThreatSearch();


  $.cop4_bankjob1.setStayInSamePlace(true /* TRUE */);


  $.cop4_bankjob1.setHeading(11.32);


  $.cop4_bankjob1.setWaitState(21 /* WAITSTATE_SIT_DOWN */, 1000000);

  // Creates cop5 in sitting at desk


  $.cop5_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 362.483, -485.782, 12.83);


  ++$.counter_blokes_alive_bankjob1;


  $.cop5_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop5_bankjob1.clearThreatSearch();


  $.cop5_bankjob1.setStayInSamePlace(true /* TRUE */);


  $.cop5_bankjob1.setHeading(137.470);


  $.cop5_bankjob1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);

  // creates cop6 in holding room down stairs left hand side


  $.cop6_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 400.053, -493.559, 9.87);


  ++$.counter_blokes_alive_bankjob1;


  $.cop6_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop6_bankjob1.clearThreatSearch();


  $.cop6_bankjob1.setStayInSamePlace(true /* TRUE */);


  $.cop6_bankjob1.setHeading(326.965);


  $.cop6_bankjob1.setWaitState(21 /* WAITSTATE_SIT_DOWN */, 1000000);

  // Creates cop8 in middle of floor chats


  $.cop8_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 360.686, -487.4, 12.8);


  ++$.counter_blokes_alive_bankjob1;


  $.cop8_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop8_bankjob1.clearThreatSearch();


  $.cop8_bankjob1.setStayInSamePlace(true /* TRUE */);


  $.cop8_bankjob1.setHeading(289.756);


  $.cop8_bankjob1.setWaitState(21 /* WAITSTATE_SIT_DOWN */, 1000000);

  // Creates cop9 in top floor in office in chair next to cop 10


  $.cop9_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 369.358, -477.192, 12.83);


  ++$.counter_blokes_alive_bankjob1;


  $.cop9_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop9_bankjob1.clearThreatSearch();


  $.cop9_bankjob1.setHeading(168.022);


  $.cop9_bankjob1.setWaitState(21 /* WAITSTATE_SIT_DOWN */, 1000000);

  // Creates cop10 seat facing into office right hand side


  $.cop10_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 373.331, -477.744, 12.8);


  ++$.counter_blokes_alive_bankjob1;


  $.cop10_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop10_bankjob1.clearThreatSearch();


  $.cop10_bankjob1.setHeading(177.095);


  $.cop10_bankjob1.setWaitState(21 /* WAITSTATE_SIT_DOWN */, 1000000);

  // Creates cop 7 filing cabinet in the middle of the floor


  $.cop7_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 371.0, -482.2, 12.8);


  ++$.counter_blokes_alive_bankjob1;


  $.cop7_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop7_bankjob1.clearThreatSearch();


  $.cop7_bankjob1.setHeading(47.54);


  $.cop7_bankjob1.setWaitState(25 /* WAITSTATE_USE_ATM */, 1000);


  $.cop7_sitting_bankjob1 = 1;

  // Creates cop11 on the right hand side by file cabinet.


  $.cop11_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 372.118, -490.603, 12.831);


  ++$.counter_blokes_alive_bankjob1;


  $.cop11_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.cop11_bankjob1.clearThreatSearch();


  $.cop11_bankjob1.setHeading(232.192);


  $.cop11_bankjob1.setWaitState(25 /* WAITSTATE_USE_ATM */, 1000);


  $.cop11_sitting_bankjob1 = 1;

  // Creates the keys for the cells


  $.key_bankjob1 = Pickup.Create(keycard, 3 /* PICKUP_ONCE */, 364.99, -472.46, 14.1);


  $.sphere_bankjob1 = Sphere.Create(407.90, -486.35, 11.35, 1.0);


  $.snore_bank1 = Sound.AddContinuous(405.565, -488.547, 12.69, 6 /* SOUND_SNORING_LOOP */);


  $.blob_flag = 1;



  TIMERA = 0;


  while (!($.safecracker_bankjob1.locateStoppedAnyMeans3D(-829.62, -898.80, 10.11, 3.0, 3.0, 6.0, $.blob_flag)) || $.player1.isWantedLevelGreater(0)) {
    await asyncWait(0);
    if ($.escape_car_created_bank1 == 0) {
      if ($.flag_safecracker_in_group_bankjob1 == 1) {
        World.ClearArea(381.942, -449.662, 9.078, 4.0, false /* FALSE */);
        $.escape_car_bank1 = Car.Create(SENTINEL, 381.942, -449.662, 9.078);
        $.escape_car_bank1.setHeading(123.277);
        $.escape_car_created_bank1 = 1;
      }


    }
    if ($.player1.isInAngledAreaOnFoot3D(393.174, -470.686, 10.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */)) {
      if ($.start_timer_for_message_bank1 == 0) {
        TIMERB = 0;
        $.start_timer_for_message_bank1 = 1;
      }


    }
    if ($.kill_player_flag_bankjob1 == 0) {
      if ($.player1.isInAngledAreaOnFoot3D(393.174, -470.686, 10.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(397.983, -479.156, 10.0, 394.546, -483.252, 15.0, 3.30, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(401.651, -480.614, 10.0, 397.416, -485.66, 15.0, 9.40, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(407.682, -480.576, 10.0, 405.289, -483.392, 15.0, 4.80, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
        if (TIMERB >= 3000) {
          if ($.uniform_pickedup_bankjob1 == 0) {
            if ($.player_had_locker_message_bank1 == 0) {
              Text.PrintNow("BJM1_3", 6000, 1); //"You will find something useful in the locker room."
              $.player_had_locker_message_bank1 = 1;
            }


          }
          else {
            if ($.flag_key_collected_bankjob1 == 0) {
              if ($.player_has_key_message_bank1 == 0) {
                if (TIMERA >= 6000) {
                  Text.PrintNow("BJM1_21", 5000, 1); //"The key card to the cells can be found upstairs in the station."
                  $.key_blip_bank1 = Blip.AddForPickup($.key_bankjob1);
                  $.player_has_key_message_bank1 = 1;
                }


              }


            }


          }


        }


      }
      if ($.player1.isInAngledAreaOnFoot3D(387.811, -486.137, 10.0, 386.424, -487.79, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(393.073, -495.966, 8.0, 390.441, -499.103, 15.0, 2.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(378.554, -485.414, 11.0, 377.167, -487.068, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(395.032, -484.093, 8.0, 388.44, -491.948, 15.0, 11.60, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(396.233, -504.359, 7.0, 386.533, -496.22, 15.0, 12.70, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(368.888, -465.922, 11.0, 353.713, -484.155, 20.0, 19.80, false /* FALSE */)) {
        if (TIMERB > 4000) {
          if ($.uniform_pickedup_bankjob1 == 0) {
            if ($.player_had_locker_message_bank1 == 0) {
              Text.PrintNow("BJM1_3", 6000, 1); //"You will find something useful in the locker room."
              $.player_had_locker_message_bank1 = 1;
            }


          }
          else {
            if ($.flag_key_collected_bankjob1 == 0) {
              if ($.player_has_key_message_bank1 == 0) {
                if (TIMERA > 6000) {
                  Text.PrintNow("BJM1_21", 5000, 1); //"The key card to the cells can be found upstairs in the station."
                  $.key_blip_bank1 = Blip.AddForPickup($.key_bankjob1);
                  $.player_has_key_message_bank1 = 1;
                }


              }


            }


          }


        }


      }


    }
    $.game_time_bank1 = Clock.GetGameTimer();
    if ($.kill_player_flag_bankjob1 == 1) {
      if ($.timer_guards_react_bank1 == 0) {
        $.timer_started_bank1 = $.game_time_bank1;
        $.timer_guards_react_bank1 = 1;
      }
      if ($.timer_guards_react_bank1 == 1) {
        $.time_to_act_bank1 = $.game_time_bank1 - $.timer_started_bank1;
        if ($.time_to_act_bank1 >= 2000) {
          $.timer_guards_react_bank1 = 2;
        }


      }
      if ($.timer_alarm_guards_react_bank1 == 0) {
        $.timer_started_alarm_bank1 = $.game_time_bank1;
        $.timer_alarm_guards_react_bank1 = 1;
      }
      if ($.timer_alarm_guards_react_bank1 == 1) {
        $.time_to_act_alarm_bank1 = $.game_time_bank1 - $.timer_started_alarm_bank1;
        if ($.time_to_act_alarm_bank1 >= 2000) {
          $.timer_alarm_guards_react_bank1 = 2;
        }


      }


    }
    if ($.alarm_triggered_bankjob1 == 0) {
      TIMERB = 0;
      $.alarm_triggered_bankjob1 = 1;
    }
    if ($.alarm_triggered_bankjob1 == 1) {
      if (TIMERB >= 1000) {
        if ($.kill_player_flag_bankjob1 == 1) {
          if ($.alarm_sound_added_bankjob1 == 0) {
            $.alarm_bankjob1 = Sound.AddContinuous(385.49, -509.0, 9.6, 0 /* SOUND_BANK_ALARM_LOOP */);
            $.player1.alterWantedLevelNoDrop(4);
            $.alarm_sound_added_bankjob1 = 1;
          }


        }


      }


    }
    const _res39 = $.player1.getCoordinates();
$.player_x_bankjob1 = _res39.x;
$.player_y_bankjob1 = _res39.y;
$.player_z_bankjob1 = _res39.z;

    // player clothes change fine

    if ($.kill_player_flag_bankjob1 == 0) {
      if ($.player1.locateStoppedOnFoot2D(407.90, -486.35, 1.0, 1.0, false /* FALSE */)) {
        if ($.uniform_pickedup_bankjob1 == 0) {
          await change_clothes_bankjob1();  // SCM GOSUB change_clothes_bankjob1
        }


      }


    }
    if ($.flag_cell_door_open_bankjob1 == 0) {
      await key_check_bankjob1();  // SCM GOSUB key_check_bankjob1
    }
    if ($.kill_player_flag_bankjob1 == 0) {
      await player_shooting_bankjob1();  // SCM GOSUB player_shooting_bankjob1
      await player_armed_bankjob1();  // SCM GOSUB player_armed_bankjob1
      await player_in_station_bankjob1();  // SCM GOSUB player_in_station_bankjob1
      await player_behind_counter_bankjob1();  // SCM GOSUB player_behind_counter_bankjob1
      await player_driving_in_station_bankjob1();  // SCM GOSUB player_driving_in_station_bankjob1
    }
    else {
      $.sphere_bankjob1.remove();
    }
    await cop_death_check();  // SCM GOSUB cop_death_check
    await cop_area_check();  // SCM GOSUB cop_area_check
    if ($.flag_safecracker_dead_bankjob1 == 0) {
      if (Char.IsDead($.safecracker_bankjob1) || $.cam_died_in_subscript_bankjob1 == 1) {
        Audio.ClearMissionAudio(1);
        Audio.ClearMissionAudio(2);
        Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
        $.radar_blip_ped1_bankjob1.remove();
        if ($.player1.isInAngledAreaOnFoot3D(376.66, -453.85, 9.00, 328.91, -504.02, 20.0, 50.0, false /* FALSE */)) {
          $.player1.alterWantedLevelNoDrop(4);
        }
        // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
        $.flag_safecracker_dead_bankjob1 = 1;
      }
      if ($.flag_safecracker_in_group_bankjob1 == 0) {
        if ($.flag_cell_door_open_bankjob1 == 1) {
          if ($.player1.locateOnFootChar3D($.safecracker_bankjob1, 4.0, 4.0, 4.0, false /* FALSE */)) {
            $.safecracker_bankjob1.followPlayer($.player1);
            $.safecracker_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set to infinate ammo
            $.safecracker_bankjob1.setRunning(true /* TRUE */);
            $.radar_blip_ped1_bankjob1.remove();
            $.kill_player_flag_bankjob1 = 1;
            if ($.had_cop_audio_1sttime_bankjob1 == 0) {
              if ($.had_cop_audio_bankjob1 == 0) {
                Audio.LoadMissionAudio(1, "BNK1_12" as any);
                $.had_cop_audio_bankjob1 = 1;
              }
              if ($.had_cop_audio_bankjob1 == 1) {
                if (Audio.HasMissionAudioLoaded(1)) {
                  $.had_cop_audio_bankjob1 = 2;
                }


              }
              if ($.had_cop_audio_bankjob1 == 2) {
                Audio.PlayMissionAudio(1);
                Text.PrintNow("BNK1_12", 100000, 1); //"Loose the cops!"
                $.had_cop_audio_bankjob1 = 3;
              }
              if ($.had_cop_audio_bankjob1 == 3) {
                if (Audio.HasMissionAudioFinished(1)) {
                  Text.ClearThisPrint("BNK1_12");
                  $.flag_safecracker_in_group_bankjob1 = 1;
                  $.had_cop_audio_bankjob1 = 4;
                }


              }
              if ($.had_cop_audio_bankjob1 == 4) {
                $.spray_shop_blip_bank1 = Blip.AddForCoord(-3.8, -1265.8, 12.0);
                $.flag_had_cops_message_bankjob1 = 1;
                $.had_cop_audio_1sttime_bankjob1 = 1;
                $.flag_bloke_in_group_bankjob1 = 1;
                $.had_cop_audio_bankjob1 = 5;
              }


            }


          }


        }
        else {
          $.safecracker_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 1000000);
        }


      }

      // Safecracker in group

      if ($.flag_safecracker_in_group_bankjob1 == 1) {
        if ($.flag_bloke_in_group_bankjob1 == 1) {
          if ($.player1.isWantedLevelGreater(0)) {
            if ($.had_cop_audio_1sttime_bankjob1 == 1) {
              if ($.flag_had_cops_message_bankjob1 == 0) {
                Text.PrintNow("WANTED1", 5000, 1); //"You have a wanted level loose the cops "
                $.spray_shop_blip_bank1 = Blip.AddForCoord(-3.8, -1265.8, 12.0);
                $.blob_flag = 0;
                $.flag_had_cops_message_bankjob1 = 1;
              }


            }
            if ($.flag_cams_blip_on_bankjob1 == 1) {
              $.blob_flag = 0;
              $.radar_blip_coord1_bankjob1.remove();
              $.flag_cams_blip_on_bankjob1 = 0;
            }


          }
          else {
            if ($.flag_had_cops_message_bankjob1 == 1) {
              $.spray_shop_blip_bank1.remove();
              $.flag_had_cops_message_bankjob1 = 0;
            }


            if ($.had_cop_audio_1sttime_bankjob1 == 1) {
              if ($.flag_cams_blip_on_bankjob1 == 0) {
                $.blob_flag = 1;
                $.radar_blip_coord1_bankjob1 = Blip.AddForCoord(-848.02, -901.72, 10.10);
                Text.PrintNow("BJM1_22", 5000, 1); //"Get Cam back to his house!"
                $.flag_cams_blip_on_bankjob1 = 1;
              }


            }


          }
          if (!($.safecracker_bankjob1.isInPlayersGroup($.player1))) {
            $.radar_blip_ped1_bankjob1 = Blip.AddForChar($.safecracker_bankjob1);
            Text.PrintNow("HEY", 5000, 1); //"Go and get the safecracker!"
            $.blob_flag = 0;
            if ($.flag_cams_blip_on_bankjob1 == 1) {
              $.blob_flag = 0;
              $.radar_blip_coord1_bankjob1.remove();
              $.flag_cams_blip_on_bankjob1 = 0;
            }
            if ($.flag_had_cops_message_bankjob1 == 1) {
              $.spray_shop_blip_bank1.remove();
              $.flag_had_cops_message_bankjob1 = 0;
            }
            $.flag_bloke_in_group_bankjob1 = 0;
          }


        }
        if ($.flag_bloke_in_group_bankjob1 == 0) {
          if ($.player1.locateAnyMeansChar3D($.safecracker_bankjob1, 8.0, 8.0, 8.0, false /* FALSE */)) {
            $.safecracker_bankjob1.followPlayer($.player1);
            $.radar_blip_ped1_bankjob1.remove();
            $.flag_bloke_in_group_bankjob1 = 1;
          }


        }


      }


    }
    if ($.kill_player_flag_bankjob1 == 0) {
      if ($.flag_player_armed_bankjob1 == 1 || $.flag_player_in_station_bankjob1 == 1) {
        $.kill_player_flag_bankjob1 = 1;
      }


    }
    else {

      // Extra guard creation stuff

      if ($.flag_timer_started_bankjob1 == 0) {
        TIMERB = 0;
        $.flag_timer_started_bankjob1 = 1;
      }
      if ($.player_gone_out_bank1 == 0) {
        await alarm_guard_creation_bankjob1();  // SCM GOSUB alarm_guard_creation_bankjob1
        await guard_AI_bankjob1();  // SCM GOSUB guard_AI_bankjob1
        await alarm_guard_death_check_bankjob1();  // SCM GOSUB alarm_guard_death_check_bankjob1
      }


    }

    // Gets rid off all of the guards if the player has gone out of the bank

    if ($.flag_safecracker_in_group_bankjob1 == 1) {
      if ($.player_gone_out_bank1 == 0) {
        if (!($.player1.isInAngledAreaOnFoot3D(376.66, -453.85, 9.00, 328.91, -504.02, 20.0, 50.0, false /* FALSE */))) {
          $.player_gone_out_bank1 = 1;
          if ($.player_gone_out_bank1 == 1) {
            await mini_cleanup_bank1();  // SCM GOSUB mini_cleanup_bank1
          }


        }


      }


    }



  }


  $.radar_blip_coord1_bankjob1.remove();


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  Camera.SetFixedPosition(-833.312, -904.83, 12.62, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-832.709, -904.049, 12.49, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio(1, "BNK1_13" as any); //"I'm doing a job!"
  Audio.LoadMissionAudio(2, "BNK1_14" as any); //"Okay beats!"


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
    if (Char.IsDead($.safecracker_bankjob1)) {
      Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
      $.radar_blip_ped1_bankjob1.remove();
      // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
    }


  }


  $.stored_current_weapon_bank1 = $.scplayer.getCurrentWeapon();
  $.scplayer.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);


  if (!(Char.IsDead($.safecracker_bankjob1))) {
    $.safecracker_bankjob1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
  }
  else {
    Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
    $.radar_blip_ped1_bankjob1.remove();
    // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
  }


  if (!($.scplayer.isInAnyCar())) {
    $.scplayer.turnToFaceChar($.safecracker_bankjob1);
    Audio.PlayMissionAudio(1);
    Text.PrintNow("BNK1_13", 5000, 1); //"I'm doing a job and you're my safe cracker.
    $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
  }
  else {
    Audio.PlayMissionAudio(1);
    Text.PrintNow("BNK1_13", 5000, 1); //"I'm doing a job and you're my safe cracker.
  }


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Char.IsDead($.safecracker_bankjob1)) {
      Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
      $.radar_blip_ped1_bankjob1.remove();
      // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("BNK1_13");
  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);


  if (!(Char.IsDead($.safecracker_bankjob1))) {
    if (!($.safecracker_bankjob1.isInAnyCar())) {
      Audio.PlayMissionAudio(2);
      Text.PrintNow("BNK1_14", 5000, 1); //"Beats losing my ass in a cell!"
      $.safecracker_bankjob1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
    }
    else {
      Audio.PlayMissionAudio(2);
      Text.PrintNow("BNK1_14", 5000, 1); //"Beats losing my ass in a cell!"
    }


  }
  else {
    Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
    // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
  }


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
    if (Char.IsDead($.safecracker_bankjob1)) {
      Audio.ClearMissionAudio(2);
      Text.ClearPrints();
      Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
      $.radar_blip_ped1_bankjob1.remove();
      // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
    }


  }


  if (!(Char.IsDead($.safecracker_bankjob1))) {
    Text.ClearThisPrint("BNK1_14");
    $.safecracker_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    $.safecracker_bankjob1.leaveGroup();
  }
  else {
    Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
    // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
  }


  if (!(Char.IsDead($.safecracker_bankjob1))) {
    if ($.safecracker_bankjob1.isInAnyCar()) {
      $.cam_car_bankjob1 = $.safecracker_bankjob1.storeCarIsIn();
      $.safecracker_bankjob1.setObjLeaveCar($.cam_car_bankjob1);
      while ($.safecracker_bankjob1.isInAnyCar()) {
        await asyncWait(0);
        if (Char.IsDead($.safecracker_bankjob1)) {
          Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
          // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cam_car_bankjob1)) {
          if (Char.IsDead($.safecracker_bankjob1)) {
            Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
            // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
          }
          else {
            // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
          }


        }


      }


    }


  }
  else {
    Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
    // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
  }


  if (!(Char.IsDead($.safecracker_bankjob1))) {
    $.safecracker_bankjob1.setCoordinates(-832.446, -902.456, 10.11);
    $.safecracker_bankjob1.setHeading(165.972);
  }
  else {
    Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
    // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
  }


  Camera.SetFixedPosition(-833.797, -908.45, 12.06, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-833.34, -907.569, 11.94, 2 /* JUMP_CUT */);


  $.safecracker_bankjob1.setObjGotoCoordOnFoot(-833.613, -908.439);


  TIMERA = 0;


  while (TIMERA < 3000) {
    await asyncWait(0);
    if (Char.IsDead($.safecracker_bankjob1)) {
      Text.PrintNow("BJM1_2", 5000, 1); //"You were supposed to bust him out not get him killed!"
      // SCM GOTO → mission_bankjob1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob1_failed"); // fallback: would break linear control flow
    }


  }


  $.safecracker_bankjob1.delete();


  $.scplayer.setCurrentWeapon($.stored_current_weapon_bank1);


  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Camera.RestoreJumpcut();


  // SCM GOTO → mission_bankjob1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_bankjob1_passed"); // fallback: would break linear control flow
}


// *************************************** Mission Failed **********************************


async function mission_bankjob1_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}


// **************************************** Mission Passed *********************************


async function mission_bankjob1_passed() {


  $.flag_bankjob_mission1_passed = 1;
  Stat.RegisterMissionPassed("BANK_1");
  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); //Mission Passed!"
  $.player1.addScore(1000);
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  // START_NEW_SCRIPT bankjob_mission2_loop 
}




// ****************************************** Mission Cleanup ******************************


async function mission_cleanup_bankjob1() {


  ONMISSION = 0;
  $.flag_player_on_bank1_mission = 0;


  $.safecracker_bankjob1.removeElegantly();


  $.gun_beach11 = Pickup.Create(nitestick, 15 /* PICKUP_ON_STREET_SLOW */, 402.4, -488.3, 12.4); //Inside Police Station
  $.health_bankjob1.remove();


  World.SetCarDensityMultiplier(1.0);
  $.door_sliding_bankjob1.remove();
  $.snore_bank1.remove();
  $.key_bankjob1.remove();
  $.alarm_bankjob1.remove();
  Streaming.MarkModelAsNoLongerNeeded(COP);
  Streaming.MarkModelAsNoLongerNeeded(UZI);


  Streaming.MarkModelAsNoLongerNeeded(SENTINEL);
  Streaming.UnloadSpecialCharacter(3);
  $.sphere_bankjob1.remove();
  $.sphere2_bankjob1.remove();
  $.radar_blip_ped1_bankjob1.remove();
  $.radar_blip_coord1_bankjob1.remove();
  $.key_blip_bank1.remove();
  $.spray_shop_blip_bank1.remove();
  $.timer_mobile_start = Clock.GetGameTimer();

  // Recreates all the clothes pickups


  if ($.mansion_clothes_created == 1) {
    $.mansion_clothes = Pickup.CreateClothes(-384.5, -591.9, 25.3, 1);
  }


  if ($.safehouse_created2 == 1) {
    $.safehouse_clothes2 = Pickup.CreateClothes(-820.2, 1364.1, 66.4, 1);
  }


  if ($.hotel_clothes_created == 1) {
    $.clothes_pickup1 = Pickup.CreateClothes(226.4, -1265.6, 20.1, 1);
  }


  if ($.clothes2_created == 1) {
    $.clothes_pickup2 = Pickup.CreateClothes(97.5, -1133.6, 10.4, 2);
  }


  if ($.clothes3_created == 1) {
    $.clothes_pickup3 = Pickup.CreateClothes(364.2, 1086.1, 19.0, 3);
  }


  if ($.clothes4_created == 1) {
    $.clothes_pickup4 = Pickup.CreateClothes(106.5, 253.0, 21.7, 4);
  }


  if ($.clothes5_created == 1) {
    $.clothes_pickup5 = Pickup.CreateClothes(-1024.5, -433.9, 10.9, 5);
  }


  if ($.clothes6_created == 1) {
    $.clothes_pickup6 = Pickup.CreateClothes(405.7, -485.6, 12.3, 6);
  }


  if ($.clothes7_created == 1) {
    $.clothes_pickup7 = Pickup.CreateClothes(414.3, 1042.0, 25.4, 8);
  }


  if ($.clothes8_created == 1) {
    $.clothes_pickup8 = Pickup.CreateClothes(158.3, -1275.9, 10.6, 9);
  }


  if ($.clothes9_created == 1) {
    $.clothes_pickup9 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
  }


  if ($.clothes13_created == 1) {
    $.clothes_pickup13 = Pickup.CreateClothes(465.3, -57.4, 15.7, 7);
  }


  Mission.Finish();
}


// checks to see what cops are dead


async function cop_death_check() {

  // cop1


  if ($.flag_cop1_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop1_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop1_dead_bankjob1 = 1;
    }
    else {
      $.cop1_health_bank1 = $.cop1_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.player1.isTargetingChar($.cop1_bankjob1) || $.cop1_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }


    }


  }

  // cop2


  if ($.flag_cop2_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop2_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop2_dead_bankjob1 = 1;
    }
    else {
      $.cop2_health_bank1 = $.cop2_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.cop2_sitting_bankjob1 == 1) {
          $.cop2_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 1000);
        }
        if ($.player1.isTargetingChar($.cop2_bankjob1) || $.cop2_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }
      else {
        if ($.cop2_sitting_bankjob1 == 1) {
          $.cop2_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop2_sitting_bankjob1 = 0;
        }


      }


    }


  }

  // cop3


  if ($.flag_cop3_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop3_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop3_dead_bankjob1 = 1;
    }
    else {
      $.cop3_health_bank1 = $.cop3_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.cop3_sitting_bankjob1 == 1) {
          $.cop3_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 1000);
        }
        if ($.player1.isTargetingChar($.cop3_bankjob1) || $.cop3_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }
      else {
        if ($.cop3_sitting_bankjob1 == 1) {
          $.cop3_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop3_sitting_bankjob1 = 0;
        }


      }


    }


  }

  // cop4


  if ($.flag_cop4_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop4_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop4_dead_bankjob1 = 1;
    }
    else {
      $.cop4_health_bank1 = $.cop4_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.cop4_sitting_bankjob1 == 1) {
          $.cop4_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 1000);
        }
        if ($.player1.isTargetingChar($.cop4_bankjob1) || $.cop4_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }
      else {
        if ($.cop4_sitting_bankjob1 == 1) {
          $.cop4_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop4_sitting_bankjob1 = 0;
        }


      }


    }


  }

  // cop5


  if ($.flag_cop5_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop5_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop5_dead_bankjob1 = 1;
    }
    else {
      $.cop5_health_bank1 = $.cop5_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.player1.isTargetingChar($.cop5_bankjob1) || $.cop5_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }
      else {
        if ($.cop5_chatting_bankjob1 == 1) {
          $.cop5_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop5_chatting_bankjob1 = 0;
        }


      }


    }


  }

  // cop6


  if ($.flag_cop6_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop6_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop6_dead_bankjob1 = 1;
    }
    else {
      $.cop6_health_bank1 = $.cop6_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.cop6_sitting_bankjob1 == 1) {
          $.cop6_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 1000);
        }
        if ($.player1.isTargetingChar($.cop6_bankjob1) || $.cop6_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }
      else {
        if ($.cop6_sitting_bankjob1 == 1) {
          $.cop6_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop6_sitting_bankjob1 = 0;
        }


      }


    }


  }

  // cop7


  if ($.flag_cop7_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop7_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop7_dead_bankjob1 = 1;
    }
    else {
      $.cop7_health_bank1 = $.cop7_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.cop7_sitting_bankjob1 == 1) {
          $.cop7_bankjob1.setWaitState(25 /* WAITSTATE_USE_ATM */, 1000);
        }
        if ($.player1.isTargetingChar($.cop7_bankjob1) || $.cop7_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }
      else {
        if ($.cop7_sitting_bankjob1 == 1) {
          $.cop7_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop7_bankjob1.clearWaitState();
          $.cop7_sitting_bankjob1 = 0;
        }


      }


    }


  }

  // cop8


  if ($.flag_cop8_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop8_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop8_dead_bankjob1 = 1;
    }
    else {
      $.cop8_health_bank1 = $.cop8_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.player1.isTargetingChar($.cop8_bankjob1) || $.cop8_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }
        if ($.cop8_sitting_bankjob1 == 1) {
          $.cop8_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 1000);
        }


      }
      else {
        if ($.cop8_sitting_bankjob1 == 1) {
          $.cop8_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop8_sitting_bankjob1 = 0;
        }


      }


    }


  }

  // cop9


  if ($.flag_cop9_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop9_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop9_dead_bankjob1 = 1;
    }
    else {
      $.cop9_health_bank1 = $.cop9_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.player1.isTargetingChar($.cop9_bankjob1) || $.cop9_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }
        if ($.cop9_sitting_bankjob1 == 1) {
          $.cop9_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 1000);
        }


      }
      else {
        if ($.cop9_sitting_bankjob1 == 1) {
          $.cop9_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop9_sitting_bankjob1 = 0;
        }


      }


    }


  }

  // cop10


  if ($.flag_cop10_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop10_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop10_dead_bankjob1 = 1;
    }
    else {
      $.cop10_health_bank1 = $.cop10_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.player1.isTargetingChar($.cop10_bankjob1) || $.cop10_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }
        if ($.cop10_sitting_bankjob1 == 1) {
          $.cop10_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 1000);
        }


      }
      else {
        if ($.cop10_sitting_bankjob1 == 1) {
          $.cop10_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop10_sitting_bankjob1 = 0;
        }


      }


    }


  }

  // cop11


  if ($.flag_cop11_dead_bankjob1 == 0) {
    if (Char.IsDead($.cop11_bankjob1)) {
      --$.counter_blokes_alive_bankjob1;
      $.kill_player_flag_bankjob1 = 1;
      $.flag_cop11_dead_bankjob1 = 1;
    }
    else {
      $.cop11_health_bank1 = $.cop11_bankjob1.getHealth();
      if ($.kill_player_flag_bankjob1 == 0) {
        if ($.cop11_sitting_bankjob1 == 1) {
          $.cop11_bankjob1.setWaitState(25 /* WAITSTATE_USE_ATM */, 1000);
        }
        if ($.player1.isTargetingChar($.cop11_bankjob1) || $.cop11_health_bank1 <= 95) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }
      else {
        if ($.cop11_sitting_bankjob1 == 1) {
          $.cop11_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.cop11_bankjob1.clearWaitState();
          $.cop11_sitting_bankjob1 = 0;
        }


      }


    }


  }
}


// sets up cops AI if the player1 is in the area, they will duck when shot at then return fire


async function cop_area_check() {

  // cop1


  if ($.kill_player_flag_bankjob1 == 1) {
    if ($.flag_cop1_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop1_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop1_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_duck_cop1 == 1) {
          ++$.counter_time_cop1_duck_again;
        }
        if ($.counter_time_cop1_duck_again >= 100) {
          $.flag_duck_cop1 = 0;
        }
        if ($.flag_start_shoot_timer_cop1 == 1) {
          ++$.counter_shoot_cop1;
        }
        if ($.player1.isInAngledAreaOnFoot3D(393.174, -470.686, 10.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(397.983, -479.156, 10.0, 394.546, -483.252, 15.0, 3.30, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(401.651, -480.614, 10.0, 397.416, -485.66, 15.0, 9.40, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(407.682, -480.576, 10.0, 405.289, -483.392, 15.0, 4.80, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
          if ($.player1.isShooting()) {
            if ($.player1.locateOnFootChar2D($.cop1_bankjob1, 2.0, 2.0, false /* FALSE */)) {
              if ($.times_done_gun_cop1_bankjob1 == 0) {
                $.cop1_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop1_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                $.cop1_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop1_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop1_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.times_done_gun_cop1_bankjob1 = 1;


              }
              if ($.flag_duck_cop1 == 0) {
                $.flag_start_shoot_timer_cop1 = 0;
              }
              if ($.timer_start_cop1_bankjob1 == 0) {
                $.timer_gun_cop1_bankjob1 = 0;
                $.timer_start_cop1_bankjob1 = 1;
              }
              if ($.timer_start_cop1_bankjob1 == 1) {
                ++$.timer_gun_cop1_bankjob1;
              }
              if ($.timer_gun_cop1_bankjob1 >= 20) {
                if ($.flag_cop1_got_gun_bankjob1 == 0) {
                  $.cop1_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop1_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                  $.cop1_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                  $.cop1_bankjob1.setStayInSamePlace(true /* TRUE */);
                  $.cop1_bankjob1.setObjKillPlayerOnFoot($.player1);
                  $.flag_cop1_got_gun_bankjob1 = 1;
                }


              }


            }
            else {
              $.timer_start_cop1_bankjob1 = 0;
              if ($.flag_cop1_got_gun_bankjob1 == 1) {
                $.cop1_bankjob1.setObjNoObj();
                $.cop1_bankjob1.clearThreatSearch();
                $.cop1_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 0);
                $.flag_cop1_got_gun_bankjob1 = 0;
              }
              if ($.flag_duck_cop1 == 0) {
                $.cop1_bankjob1.setObjNoObj();
                $.cop1_bankjob1.clearThreatSearch();
                $.cop1_bankjob1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
                $.counter_time_cop1_duck_again = 0;
                $.counter_shoot_cop1 = 0;
                $.flag_start_shoot_timer_cop1 = 1;
                $.flag_duck_cop1 = 1;
              }
              if ($.flag_duck_cop1 == 1 && $.counter_shoot_cop1 >= 30) {
                $.cop1_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
                if ($.flag_cop1_got_gun_bankjob1 == 0) {
                  $.cop1_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop1_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
                  $.flag_cop1_got_gun_bankjob1 = 1;
                }
                $.cop1_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop1_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop1_bankjob1.setObjKillPlayerOnFoot($.player1);
              }


            }


          }
          else {
            if ($.times_done_gun_cop1_bankjob1 == 0) {
              $.cop1_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
              $.cop1_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
              $.cop1_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.cop1_bankjob1.setStayInSamePlace(true /* TRUE */);
              $.cop1_bankjob1.setObjKillPlayerOnFoot($.player1);
              $.times_done_gun_cop1_bankjob1 = 1;
            }
            if ($.flag_duck_cop1 == 0) {
              $.flag_start_shoot_timer_cop1 = 0;
            }
            if ($.timer_start_cop1_bankjob1 == 0) {
              $.timer_gun_cop1_bankjob1 = 0;
              $.timer_start_cop1_bankjob1 = 1;
            }
            if ($.timer_start_cop1_bankjob1 == 1) {
              ++$.timer_gun_cop1_bankjob1;
            }
            if ($.timer_gun_cop1_bankjob1 >= 20) {
              if ($.flag_cop1_got_gun_bankjob1 == 0) {
                $.cop1_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop1_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
                $.cop1_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop1_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop1_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.flag_cop1_got_gun_bankjob1 = 1;
              }


            }


          }


        }


      }


    }

    // cop2

    if ($.flag_cop2_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop2_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop2_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_duck_cop2 == 1) {
          ++$.counter_time_cop2_duck_again;
        }
        if ($.counter_time_cop2_duck_again >= 100) {
          $.flag_duck_cop2 = 0;
        }
        if ($.flag_start_shoot_timer_cop2 == 1) {
          ++$.counter_shoot_cop2;
        }
        if ($.player1.isInAngledAreaOnFoot3D(393.174, -470.686, 10.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(397.983, -479.156, 10.0, 394.546, -483.252, 15.0, 3.30, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(401.651, -480.614, 10.0, 397.416, -485.66, 15.0, 9.40, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(407.682, -480.576, 10.0, 405.289, -483.392, 15.0, 4.80, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
          if ($.player1.isShooting()) {
            if ($.player1.locateOnFootChar2D($.cop2_bankjob1, 2.0, 2.0, false /* FALSE */)) {
              if ($.times_done_gun_cop2_bankjob1 == 0) {
                $.cop2_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop2_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                $.cop2_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop2_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop2_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.times_done_gun_cop2_bankjob1 = 1;
              }
              if ($.flag_duck_cop2 == 0) {
                $.flag_start_shoot_timer_cop2 = 0;
              }
              if ($.timer_start_cop2_bankjob1 == 0) {
                $.timer_gun_cop2_bankjob1 = 0;
                $.timer_start_cop2_bankjob1 = 1;
              }
              if ($.timer_start_cop2_bankjob1 == 1) {
                ++$.timer_gun_cop2_bankjob1;
              }
              if ($.timer_gun_cop2_bankjob1 >= 20) {
                if ($.flag_cop2_got_gun_bankjob1 == 0) {
                  $.cop2_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop2_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                  $.cop2_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                  $.cop2_bankjob1.setStayInSamePlace(true /* TRUE */);
                  $.cop2_bankjob1.setObjKillPlayerOnFoot($.player1);
                  $.flag_cop2_got_gun_bankjob1 = 1;
                }


              }


            }
            else {
              $.timer_start_cop2_bankjob1 = 0;
              if ($.flag_cop2_got_gun_bankjob1 == 1) {
                $.cop2_bankjob1.setObjNoObj();
                $.cop2_bankjob1.clearThreatSearch();
                $.cop2_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 0);
                $.flag_cop2_got_gun_bankjob1 = 0;
              }
              if ($.flag_duck_cop2 == 0) {
                $.cop2_bankjob1.setObjNoObj();
                $.cop2_bankjob1.clearThreatSearch();
                $.cop2_bankjob1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
                $.counter_time_cop2_duck_again = 0;
                $.counter_shoot_cop2 = 0;
                $.flag_start_shoot_timer_cop2 = 1;
                $.flag_duck_cop2 = 1;
              }
              if ($.flag_duck_cop2 == 1 && $.counter_shoot_cop2 >= 30) {
                $.cop2_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
                if ($.flag_cop2_got_gun_bankjob1 == 0) {
                  $.cop2_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop2_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
                  $.flag_cop2_got_gun_bankjob1 = 1;
                }
                $.cop2_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop2_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop2_bankjob1.setObjKillPlayerOnFoot($.player1);
              }


            }


          }
          else {
            if ($.times_done_gun_cop2_bankjob1 == 0) {
              $.cop2_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
              $.cop2_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
              $.cop2_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.cop2_bankjob1.setStayInSamePlace(true /* TRUE */);
              $.cop2_bankjob1.setObjKillPlayerOnFoot($.player1);
              $.times_done_gun_cop2_bankjob1 = 1;
            }
            if ($.flag_duck_cop2 == 0) {
              $.flag_start_shoot_timer_cop2 = 0;
            }
            if ($.timer_start_cop2_bankjob1 == 0) {
              $.timer_gun_cop2_bankjob1 = 0;
              $.timer_start_cop2_bankjob1 = 1;
            }
            if ($.timer_start_cop2_bankjob1 == 1) {
              ++$.timer_gun_cop2_bankjob1;
            }
            if ($.timer_gun_cop2_bankjob1 >= 20) {
              if ($.flag_cop2_got_gun_bankjob1 == 0) {
                $.cop2_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop2_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
                $.cop2_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop2_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop2_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.flag_cop2_got_gun_bankjob1 = 1;
              }


            }


          }


        }
        else {
          if ($.kill_player_flag_bankjob1 == 0) {
            $.cop2_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 10);
          }


        }


      }


    }

    // cop3

    if ($.flag_cop3_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop3_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop3_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_duck_cop3 == 1) {
          ++$.counter_time_cop3_duck_again;
        }
        if ($.counter_time_cop3_duck_again >= 50) {
          $.flag_duck_cop3 = 0;
        }
        if ($.flag_start_shoot_timer_cop3 == 1) {
          ++$.counter_shoot_cop3;
        }
        if ($.player1.isInAngledAreaOnFoot3D(393.174, -470.686, 10.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(397.983, -479.156, 10.0, 394.546, -483.252, 15.0, 3.30, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(401.651, -480.614, 10.0, 397.416, -485.66, 15.0, 9.40, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(407.682, -480.576, 10.0, 405.289, -483.392, 15.0, 4.80, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
          if ($.player1.isShooting()) {
            if ($.player1.locateOnFootChar2D($.cop3_bankjob1, 2.0, 2.0, false /* FALSE */)) {
              if ($.times_done_gun_cop3_bankjob1 == 0) {
                $.cop3_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop3_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                $.cop3_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop3_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop3_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.times_done_gun_cop3_bankjob1 = 1;
              }
              if ($.flag_duck_cop3 == 0) {
                $.flag_start_shoot_timer_cop3 = 0;
              }
              if ($.timer_start_cop3_bankjob1 == 0) {
                $.timer_gun_cop3_bankjob1 = 0;
                $.timer_start_cop3_bankjob1 = 1;
              }
              if ($.timer_start_cop3_bankjob1 == 1) {
                ++$.timer_gun_cop3_bankjob1;
              }
              if ($.timer_gun_cop3_bankjob1 >= 20) {
                if ($.flag_cop3_got_gun_bankjob1 == 0) {
                  $.cop3_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop3_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                  $.cop3_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                  $.cop3_bankjob1.setStayInSamePlace(true /* TRUE */);
                  $.cop3_bankjob1.setObjKillPlayerOnFoot($.player1);
                  $.flag_cop3_got_gun_bankjob1 = 1;
                }


              }


            }
            else {
              $.timer_start_cop3_bankjob1 = 0;
              if ($.flag_cop3_got_gun_bankjob1 == 1) {
                $.cop3_bankjob1.setObjNoObj();
                $.cop3_bankjob1.clearThreatSearch();
                $.cop3_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 0);
                $.flag_cop3_got_gun_bankjob1 = 0;
              }
              if ($.flag_duck_cop3 == 0) {
                $.cop3_bankjob1.setObjNoObj();
                $.cop3_bankjob1.clearThreatSearch();
                $.cop3_bankjob1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
                $.counter_time_cop3_duck_again = 0;
                $.counter_shoot_cop3 = 0;
                $.flag_start_shoot_timer_cop3 = 1;
                $.flag_duck_cop3 = 1;
              }
              if ($.flag_duck_cop3 == 1 && $.counter_shoot_cop3 >= 30) {
                $.cop3_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
                if ($.flag_cop3_got_gun_bankjob1 == 0) {
                  $.cop3_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop3_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
                  $.flag_cop3_got_gun_bankjob1 = 1;
                }
                $.cop3_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop3_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop3_bankjob1.setObjKillPlayerOnFoot($.player1);
              }


            }


          }
          else {
            if ($.times_done_gun_cop3_bankjob1 == 0) {
              $.cop3_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
              $.cop3_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
              $.cop3_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.cop3_bankjob1.setStayInSamePlace(true /* TRUE */);
              $.cop3_bankjob1.setObjKillPlayerOnFoot($.player1);
              $.times_done_gun_cop3_bankjob1 = 1;
            }
            if ($.flag_duck_cop3 == 0) {
              $.flag_start_shoot_timer_cop3 = 0;
            }
            if ($.timer_start_cop3_bankjob1 == 0) {
              $.timer_gun_cop3_bankjob1 = 0;
              $.timer_start_cop3_bankjob1 = 1;
            }
            if ($.timer_start_cop3_bankjob1 == 1) {
              ++$.timer_gun_cop3_bankjob1;
            }
            if ($.timer_gun_cop3_bankjob1 >= 20) {
              if ($.flag_cop3_got_gun_bankjob1 == 0) {
                $.cop3_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop3_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
                $.cop3_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop3_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop3_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.flag_cop3_got_gun_bankjob1 = 1;
              }


            }


          }


        }
        else {
          if ($.kill_player_flag_bankjob1 == 0) {
            $.cop3_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 10);
          }


        }


      }


    }

    // cop4

    if ($.flag_cop4_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop4_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop4_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_duck_cop4 == 1) {
          ++$.counter_time_cop4_duck_again;
        }
        if ($.counter_time_cop4_duck_again >= 80) {
          $.flag_duck_cop4 = 0;
        }
        if ($.flag_start_shoot_timer_cop4 == 1) {
          ++$.counter_shoot_cop4;
        }
        if ($.player1.isInAngledArea3D(368.888, -465.922, 11.0, 353.713, -484.155, 20.0, 19.80, false /* FALSE */) || $.player1.isInAngledArea3D(378.554, -485.414, 11.0, 377.167, -487.068, 15.0, 4.20, false /* FALSE */)) {
          if ($.player1.isShooting()) {
            if ($.player1.locateOnFootChar2D($.cop4_bankjob1, 2.0, 2.0, false /* FALSE */)) {
              if ($.times_done_gun_cop4_bankjob1 == 0) {
                $.cop4_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop4_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                $.cop4_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop4_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop4_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.times_done_gun_cop4_bankjob1 = 1;
              }
              if ($.flag_duck_cop4 == 0) {
                $.flag_start_shoot_timer_cop4 = 0;
              }
              if ($.timer_start_cop4_bankjob1 == 0) {
                $.timer_gun_cop4_bankjob1 = 0;
                $.timer_start_cop4_bankjob1 = 1;
              }
              if ($.timer_start_cop4_bankjob1 == 1) {
                ++$.timer_gun_cop4_bankjob1;
              }
              if ($.timer_gun_cop4_bankjob1 >= 20) {
                if ($.flag_cop4_got_gun_bankjob1 == 0) {
                  $.cop4_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop4_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                  $.cop4_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                  $.cop4_bankjob1.setStayInSamePlace(true /* TRUE */);
                  $.cop4_bankjob1.setObjKillPlayerOnFoot($.player1);
                  $.flag_cop4_got_gun_bankjob1 = 1;
                }


              }


            }
            else {
              $.timer_start_cop4_bankjob1 = 0;
              if ($.flag_cop4_got_gun_bankjob1 == 1) {
                $.cop4_bankjob1.setObjNoObj();
                $.cop4_bankjob1.clearThreatSearch();
                $.cop4_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 0); // sets gun to no ammo
                $.flag_cop4_got_gun_bankjob1 = 0;
              }
              if ($.flag_duck_cop4 == 0) {
                $.cop4_bankjob1.setObjNoObj();
                $.cop4_bankjob1.clearThreatSearch();
                $.cop4_bankjob1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
                $.counter_time_cop4_duck_again = 0;
                $.counter_shoot_cop4 = 0;
                $.flag_start_shoot_timer_cop4 = 1;
                $.flag_duck_cop4 = 1;
              }
              if ($.flag_duck_cop4 == 1 && $.counter_shoot_cop4 >= 30) {
                $.cop4_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
                if ($.flag_cop4_got_gun_bankjob1 == 0) {
                  $.cop4_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop4_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                  $.flag_cop4_got_gun_bankjob1 = 1;
                }
                $.cop4_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop4_bankjob1.setStayInSamePlace(true /* TRUE */);
              }


            }


          }
          else {
            if ($.times_done_gun_cop4_bankjob1 == 0) {
              $.cop4_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
              $.cop4_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
              $.cop4_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.cop4_bankjob1.setStayInSamePlace(true /* TRUE */);
              $.cop4_bankjob1.setObjKillPlayerOnFoot($.player1);
              $.times_done_gun_cop4_bankjob1 = 1;
            }
            if ($.flag_duck_cop4 == 0) {
              $.flag_start_shoot_timer_cop4 = 0;
            }
            if ($.timer_start_cop4_bankjob1 == 0) {
              $.timer_gun_cop4_bankjob1 = 0;
              $.timer_start_cop4_bankjob1 = 1;
            }
            if ($.timer_start_cop4_bankjob1 == 1) {
              ++$.timer_gun_cop4_bankjob1;
            }
            if ($.timer_gun_cop4_bankjob1 >= 20) {
              if ($.flag_cop4_got_gun_bankjob1 == 0) {
                $.cop4_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop4_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                $.cop4_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop4_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop4_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.flag_cop4_got_gun_bankjob1 = 1;
              }


            }


          }


        }
        else {
          if ($.kill_player_flag_bankjob1 == 0) {
            $.cop4_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 10);
          }


        }


      }


    }

    // cop5

    if ($.flag_cop5_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop5_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop5_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_cop5_got_gun_bankjob1 == 0) {
          $.cop5_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Unlimited ammo
          $.cop5_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop5_bankjob1.setObjKillPlayerOnFoot($.player1);
          $.flag_cop5_got_gun_bankjob1 = 1;
        }
        if ($.timer_guards_react_bank1 == 2) {
          $.cop5_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop5_bankjob1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }

    // cop6

    if ($.flag_cop6_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop6_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop6_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_duck_cop6 == 1) {
          ++$.counter_time_cop6_duck_again;
        }
        if ($.counter_time_cop6_duck_again >= 80) {
          $.flag_duck_cop6 = 0;
        }
        if ($.flag_start_shoot_timer_cop6 == 1) {
          ++$.counter_shoot_cop6;
        }
        if ($.player1.isInAngledArea3D(387.811, -486.137, 10.0, 386.424, -487.79, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledArea3D(395.032, -484.093, 8.0, 388.44, -491.948, 15.0, 11.60, false /* FALSE */) || $.player1.isInAngledArea3D(396.233, -504.359, 7.0, 386.533, -496.22, 15.0, 12.70, false /* FALSE */) || $.player1.isInAngledArea3D(393.073, -495.966, 8.0, 390.441, -499.103, 15.0, 2.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
          if ($.player1.isShooting()) {
            if ($.player1.locateOnFootChar2D($.cop6_bankjob1, 2.0, 2.0, false /* FALSE */)) {
              if ($.times_done_gun_cop6_bankjob1 == 0) {
                $.cop6_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop6_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                $.cop6_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop6_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop6_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.times_done_gun_cop6_bankjob1 = 1;
              }
              if ($.flag_duck_cop6 == 0) {
                $.flag_start_shoot_timer_cop6 = 0;
              }
              if ($.timer_start_cop6_bankjob1 == 0) {
                $.timer_gun_cop6_bankjob1 = 0;
                $.timer_start_cop6_bankjob1 = 1;
              }
              if ($.timer_start_cop6_bankjob1 == 1) {
                ++$.timer_gun_cop6_bankjob1;
              }
              if ($.timer_gun_cop6_bankjob1 >= 20) {
                if ($.flag_cop6_got_gun_bankjob1 == 0) {
                  $.cop6_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop6_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                  $.cop6_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                  $.cop6_bankjob1.setStayInSamePlace(true /* TRUE */);
                  $.cop6_bankjob1.setObjKillPlayerOnFoot($.player1);
                  $.flag_cop6_got_gun_bankjob1 = 1;
                }


              }


            }
            else {
              $.timer_start_cop6_bankjob1 = 0;
              if ($.flag_cop6_got_gun_bankjob1 == 1) {
                $.cop6_bankjob1.setObjNoObj();
                $.cop6_bankjob1.clearThreatSearch();
                $.cop6_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 0); // sets gun to no ammo
                $.flag_cop6_got_gun_bankjob1 = 0;
              }
              if ($.flag_duck_cop6 == 0) {
                $.cop6_bankjob1.setObjNoObj();
                $.cop6_bankjob1.clearThreatSearch();
                $.cop6_bankjob1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
                $.counter_time_cop6_duck_again = 0;
                $.counter_shoot_cop6 = 0;
                $.flag_start_shoot_timer_cop6 = 1;
                $.flag_duck_cop6 = 1;
              }
              if ($.flag_duck_cop6 == 1 && $.counter_shoot_cop6 >= 30) {
                $.cop6_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
                if ($.flag_cop6_got_gun_bankjob1 == 0) {
                  $.cop6_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                  $.cop6_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                  $.flag_cop6_got_gun_bankjob1 = 1;
                }
                $.cop6_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop6_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop6_bankjob1.setObjKillPlayerOnFoot($.player1);
              }


            }


          }
          else {
            if ($.times_done_gun_cop6_bankjob1 == 0) {
              $.cop6_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
              $.cop6_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
              $.cop6_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              $.cop6_bankjob1.setObjKillPlayerOnFoot($.player1);
              $.cop6_bankjob1.setStayInSamePlace(true /* TRUE */);
              $.times_done_gun_cop6_bankjob1 = 1;
            }
            if ($.flag_duck_cop6 == 0) {
              $.flag_start_shoot_timer_cop6 = 0;
            }
            if ($.timer_start_cop6_bankjob1 == 0) {
              $.timer_gun_cop6_bankjob1 = 0;
              $.timer_start_cop6_bankjob1 = 1;
            }
            if ($.timer_start_cop6_bankjob1 == 1) {
              ++$.timer_gun_cop6_bankjob1;
            }
            if ($.timer_gun_cop6_bankjob1 >= 20) {
              if ($.flag_cop6_got_gun_bankjob1 == 0) {
                $.cop6_bankjob1.turnToFaceCoord($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1);
                $.cop6_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // sets gun to infinate ammo
                $.cop6_bankjob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.cop6_bankjob1.setStayInSamePlace(true /* TRUE */);
                $.cop6_bankjob1.setObjKillPlayerOnFoot($.player1);
                $.flag_cop6_got_gun_bankjob1 = 1;
              }


            }


          }


        }
        else {
          if ($.kill_player_flag_bankjob1 == 0) {
            $.cop6_bankjob1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 10);
          }


        }


      }


    }

    // cop7

    if ($.flag_cop7_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop7_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop7_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_cop7_got_gun_bankjob1 == 0) {
          $.cop7_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Unlimited ammo
          $.cop7_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop7_bankjob1.setObjKillPlayerOnFoot($.player1);
          $.flag_cop7_got_gun_bankjob1 = 1;
        }
        if ($.timer_guards_react_bank1 == 2) {
          $.cop7_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop7_bankjob1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }

    // cop8

    if ($.flag_cop8_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop8_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop8_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_cop8_got_gun_bankjob1 == 0) {
          $.cop8_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Unlimited ammo
          $.cop8_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop8_bankjob1.setObjKillPlayerOnFoot($.player1);
          $.flag_cop8_got_gun_bankjob1 = 1;
        }
        if ($.timer_guards_react_bank1 == 2) {
          $.cop8_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop8_bankjob1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }

    // cop9

    if ($.flag_cop9_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop9_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop9_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_cop9_got_gun_bankjob1 == 0) {
          $.cop9_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Unlimited ammo
          $.cop9_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop9_bankjob1.setObjKillPlayerOnFoot($.player1);
          $.flag_cop9_got_gun_bankjob1 = 1;
        }
        if ($.timer_guards_react_bank1 == 2) {
          $.cop9_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop9_bankjob1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }

    // cop10

    if ($.flag_cop10_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop10_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop10_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_cop10_got_gun_bankjob1 == 0) {
          $.cop10_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Unlimited ammo
          $.cop10_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop10_bankjob1.setObjKillPlayerOnFoot($.player1);
          $.flag_cop10_got_gun_bankjob1 = 1;
        }
        if ($.timer_guards_react_bank1 == 2) {
          $.cop10_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop10_bankjob1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }

    // cop 11

    if ($.flag_cop11_dead_bankjob1 == 0) {
      if (Char.IsDead($.cop11_bankjob1)) {
        --$.counter_blokes_alive_bankjob1;
        $.flag_cop11_dead_bankjob1 = 1;
      }
      else {
        if ($.flag_cop11_got_gun_bankjob1 == 0) {
          $.cop11_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Unlimited ammo
          $.cop11_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop11_bankjob1.setObjKillPlayerOnFoot($.player1);
          $.flag_cop11_got_gun_bankjob1 = 1;
        }
        if ($.timer_guards_react_bank1 == 2) {
          $.cop11_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
          $.cop11_bankjob1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }


  }


  if ($.timer_guards_react_bank1 == 2) {
    $.timer_guards_react_bank1 = 0;
  }
}


// Checks to see if the key has been picked up or not


async function key_check_bankjob1() {


  if ($.flag_key_collected_bankjob1 == 0) {
    if ($.player1.locateOnFoot3D(385.13, -509.0, 8.0, 0.5, 0.5, 3.0, false /* FALSE */)) {
      if ($.player_no_key_message_bank1 == 0) {
        Text.PrintNow("BJM1_23", 5000, 1); //"You need to get the key card first
        $.player_no_key_message_bank1 = 1;
      }


    }
    else {
      $.player_no_key_message_bank1 = 0;
    }


    if ($.key_bankjob1.hasBeenCollected()) {
      $.key_blip_bank1.remove();
      $.sphere2_bankjob1 = Sphere.Create(385.13, -509.0, 8.0, 1.0);
      $.flag_key_collected_bankjob1 = 1;
    }


  }
  else {
    if ($.flag_cell_door_open_bankjob1 == 0) {
      if ($.player1.locateStoppedOnFoot3D(385.13, -509.0, 8.0, 0.5, 0.5, 3.0, false /* FALSE */)) {
        Hud.SwitchWidescreen(true /* ON */);
        $.player1.setControl(false /* OFF */);
        Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
        Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
        $.stored_current_weapon_bank1 = $.scplayer.getCurrentWeapon();
        $.scplayer.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
        $.sphere2_bankjob1.remove();
        World.ClearArea(387.22, -506.517, 9.194, 1.0, false /* FALSE */);
        Camera.SetFixedPosition(387.22, -506.517, 9.194, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(386.633, -507.287, 9.430, 2 /* JUMP_CUT */);
        $.scplayer.turnToFaceCoord(384.932, -510.077, 9.848);
        $.scplayer.setWaitState(25 /* WAITSTATE_USE_ATM */, 100000);
        TIMERA = 0;
        while (TIMERA < 3000) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }
          if (TIMERA >= 2000) {
            if ($.flag_played_card_beep_bank1 == 0) {
              Sound.AddOneOffSound(384.932, -510.077, 9.848, 18 /* SOUND_WILLIE_CARD_SWIPE */);
              $.flag_played_card_beep_bank1 = 1;
            }


          }


        }
        $.scplayer.clearWaitState();
        Camera.PointAtPoint(386.250, -506.384, 9.373, 2 /* JUMP_CUT */);
        Audio.LoadMissionAudio(1, "BNK1_7" as any); //Cam jones?"
        Audio.LoadMissionAudio(2, "BNK1_10" as any); //"Yeah thats me."
        if ($.flag_doors_moved_bankjob1 == 0) {
          while (!($.cams_celldoor.slide(383.252, -506.903, 9.68, 0.01, 0.01, 0.0, false /* FALSE */)) || !(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
            if ($.door_sfx1_bankjob1 == 0) {
              Sound.AddOneOffSound(383.252, -506.903, 9.68, 3 /* SOUND_POLICE_CELL_DOOR_CLUNK */);
              $.door_sfx1_bankjob1 = 1;
            }
            if ($.door_sfx1_bankjob1 == 1) {
              $.door_sliding_bankjob1 = Sound.AddContinuous(383.252, -506.903, 9.68, 2 /* SOUND_POLICE_CELL_DOOR_SLIDING_LOOP */);
              $.door_sfx1_bankjob1 = 2;
            }
            if (Char.IsDead($.safecracker_bankjob1)) {
              $.cam_died_in_subscript_bankjob1 = 1;
            }


          }
          $.door_sliding_bankjob1.remove();
          if ($.door_sfx1_bankjob1 == 2) {
            Sound.AddOneOffSound(383.252, -506.903, 9.68, 3 /* SOUND_POLICE_CELL_DOOR_CLUNK */);
            $.door_sfx1_bankjob1 = 3;
          }
          $.flag_doors_moved_bankjob1 = 1;


        }


        $.scplayer.setObjGotoCoordOnFoot(384.12, -507.38);
        TIMERA = 0;
        if (!(Char.IsDead($.safecracker_bankjob1))) {
          $.safecracker_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          $.safecracker_bankjob1.setObjGotoCoordOnFoot(383.523, -505.34);
        }
        else {
          $.cam_died_in_subscript_bankjob1 = 1;
        }


        while (!($.scplayer.locateOnFoot2D(384.12, -507.38, 0.5, 0.5, false /* FALSE */))) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }
          if (TIMERA > 8000) {
            if (!($.scplayer.locateOnFoot2D(384.12, -507.38, 0.5, 0.5, false /* FALSE */))) {
              $.scplayer.setCoordinates(384.12, -507.38, 8.40);
            }


          }


        }
        TIMERB = 0;
        while (!($.safecracker_bankjob1.locateOnFoot2D(383.523, -505.34, 0.5, 0.5, false /* FALSE */))) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }
          else {
            if (TIMERB > 8000) {
              if (!($.safecracker_bankjob1.locateOnFoot2D(383.523, -505.34, 0.5, 0.5, false /* FALSE */))) {
                $.safecracker_bankjob1.setCoordinates(383.523, -505.34, 8.40);
              }


            }


          }


        }
        $.scplayer.turnToFaceChar($.safecracker_bankjob1);
        Audio.PlayMissionAudio(1);
        Text.PrintNow("BNK1_7", 5000, 1); //"Cam Jones?"
        $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
        while (!(Audio.HasMissionAudioFinished(1))) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }


        }
        Text.ClearThisPrint("BNK1_7"); //"Cam Jones?"
        $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
        Audio.LoadMissionAudio(1, "BNK1_8" as any); //"I'm busting you out!"
        Audio.PlayMissionAudio(2);
        Text.PrintNow("BNK1_10", 10000, 1); //"Yeah that's me.."
        if (!(Char.IsDead($.safecracker_bankjob1))) {
          $.safecracker_bankjob1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
        }
        else {
          $.cam_died_in_subscript_bankjob1 = 1;
        }
        while (!(Audio.HasMissionAudioFinished(2)) || !(Audio.HasMissionAudioLoaded(1))) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }


        }
        Text.ClearThisPrint("BNK1_10");
        if (!(Char.IsDead($.safecracker_bankjob1))) {
          $.safecracker_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
        }
        else {
          $.cam_died_in_subscript_bankjob1 = 1;
        }
        Audio.LoadMissionAudio(2, "BNK1_11" as any); //"What ever you say."
        Audio.PlayMissionAudio(1); // I'm busting you out!
        Text.PrintNow("BNK1_8", 10000, 1); //"I'm busting you out!"
        $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
        while (!(Audio.HasMissionAudioFinished(1)) || !(Audio.HasMissionAudioLoaded(2))) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }


        }
        Text.ClearThisPrint("BNK1_8");
        $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
        Audio.PlayMissionAudio(2);
        Text.PrintNow("BNK1_11", 10000, 1); //"What ever you say."
        if (!(Char.IsDead($.safecracker_bankjob1))) {
          $.safecracker_bankjob1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
        }
        else {
          $.cam_died_in_subscript_bankjob1 = 1;
        }
        while (!(Audio.HasMissionAudioFinished(2))) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }


        }
        Text.ClearThisPrint("BNK1_11");
        if (!(Char.IsDead($.safecracker_bankjob1))) {
          $.safecracker_bankjob1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
        }
        else {
          $.cam_died_in_subscript_bankjob1 = 1;
        }
        World.ClearArea(389.950, -503.077, 9.114, 1.0, false /* FALSE */);
        Camera.SetFixedPosition(389.950, -503.077, 9.114, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(389.151, -503.666, 9.229, 2 /* JUMP_CUT */);
        $.scplayer.setObjGotoCoordOnFoot(387.64, -505.70);
        TIMERB = 0;
        while (TIMERB < 750) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }


        }
        if (!(Char.IsDead($.safecracker_bankjob1))) {
          $.safecracker_bankjob1.setObjGotoCoordOnFoot(385.48, -506.76);
        }
        TIMERA = 0;
        while (!($.scplayer.locateOnFoot2D(387.64, -505.70, 0.5, 0.5, false /* FALSE */))) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }
          if (TIMERA > 5000) {
            if (!($.scplayer.locateOnFoot2D(387.64, -505.70, 0.5, 0.5, false /* FALSE */))) {
              $.scplayer.setCoordinates(387.64, -505.70, 8.41);
            }


          }


        }
        TIMERB = 0;
        while (!($.safecracker_bankjob1.locateOnFoot2D(385.48, -506.76, 0.5, 0.5, false /* FALSE */))) {
          await asyncWait(0);
          if (Char.IsDead($.safecracker_bankjob1)) {
            $.cam_died_in_subscript_bankjob1 = 1;
          }
          else {
            if (TIMERB > 5000) {
              if (!($.scplayer.locateOnFoot2D(385.48, -506.76, 0.5, 0.5, false /* FALSE */))) {
                $.scplayer.setCoordinates(385.48, -506.76, 8.41);
              }


            }


          }


        }
        $.scplayer.setHeading(333.85);
        if (!(Char.IsDead($.safecracker_bankjob1))) {
          $.safecracker_bankjob1.setHeading(333.85);
        }
        else {
          $.cam_died_in_subscript_bankjob1 = 1;
        }
        $.scplayer.setCurrentWeapon($.stored_current_weapon_bank1);
        Hud.SwitchWidescreen(false /* OFF */);
        $.player1.setControl(true /* ON */);
        Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
        Camera.SetInFrontOfPlayer();
        Camera.RestoreJumpcut();
        $.flag_cell_door_open_bankjob1 = 1;
      }


    }


  }
}


// Player armed checks


async function player_armed_bankjob1() {


  if ($.uniform_pickedup_bankjob1 == 0) {
    if ($.player1.isInAngledAreaOnFoot3D(393.174, -470.686, 10.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(397.983, -479.156, 10.0, 394.546, -483.252, 15.0, 3.30, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(401.651, -480.614, 10.0, 397.416, -485.66, 15.0, 9.40, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(407.682, -480.576, 10.0, 405.289, -483.392, 15.0, 4.80, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
      if (!($.player1.isCurrentWeapon(0 /* WEAPONTYPE_UNARMED */)) && !($.player1.isCurrentWeapon(1 /* WEAPONTYPE_BRASSKNUCKLE */))) {
        if ($.player_had_gun_warning_bank1 == 0) {
          Audio.LoadMissionAudio(1, "bjm1_20" as any);
          $.player_had_gun_warning_bank1 = 1;
        }
        if ($.player_had_gun_warning_bank1 == 1) {
          if (Audio.HasMissionAudioLoaded(1)) {
            $.player_had_gun_warning_bank1 = 2;
          }


        }
        if ($.player_had_gun_warning_bank1 == 2) {
          Audio.PlayMissionAudio(1);
          Text.PrintNow("BJM1_20", 5000, 1); //"Put the weapon away or face the consequences!"
          $.player_had_gun_warning_bank1 = 3;
        }
        if ($.player_had_gun_warning_bank1 == 3) {
          if (Audio.HasMissionAudioFinished(1)) {
            Text.ClearThisPrint("BJM1_20");
            $.player_had_gun_warning_bank1 = 4;
          }


        }
        if ($.player_had_gun_warning_bank1 == 4) {
          TIMERB = 0;
          $.player_had_gun_warning_bank1 = 5;
        }
        if ($.player_had_gun_warning_bank1 == 5) {
          if (TIMERB >= 4000) {
            if ($.flag_player_gun_message_bankjob1 == 0) {
              Audio.LoadMissionAudio(2, "bjm1_4" as any);
              $.flag_player_gun_message_bankjob1 = 1;
            }


          }


        }
        if ($.flag_player_gun_message_bankjob1 == 1) {
          if (Audio.HasMissionAudioLoaded(2)) {
            $.flag_player_gun_message_bankjob1 = 2;
          }


        }
        if ($.flag_player_gun_message_bankjob1 == 2) {
          Audio.PlayMissionAudio(2);
          Text.PrintNow("BJM1_4", 5000, 1); //"He's armed, kill him!"
          $.flag_player_gun_message_bankjob1 = 3;
        }
        if ($.flag_player_gun_message_bankjob1 == 3) {
          if (Audio.HasMissionAudioFinished(2)) {
            Text.ClearThisPrint("BJM1_4");
            $.flag_player_gun_message_bankjob1 = 4;
          }


        }
        if ($.flag_player_gun_message_bankjob1 == 4) {
          $.flag_player_armed_bankjob1 = 1;
          $.flag_player_gun_message_bankjob1 = 5;
        }


      }
      else {
        $.flag_player_gun_message_bankjob1 = 0;
        $.player_had_gun_warning_bank1 = 0;
        $.flag_player_armed_bankjob1 = 0;
      }


    }
    if ($.player1.isInAngledAreaOnFoot3D(387.811, -486.137, 10.0, 386.424, -487.79, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(393.073, -495.966, 8.0, 390.441, -499.103, 15.0, 2.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(378.554, -485.414, 11.0, 377.167, -487.068, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(395.032, -484.093, 8.0, 388.44, -491.948, 15.0, 11.60, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(396.233, -504.359, 7.0, 386.533, -496.22, 15.0, 12.70, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(368.888, -465.922, 11.0, 353.713, -484.155, 20.0, 19.80, false /* FALSE */)) {
      if (!($.player1.isCurrentWeapon(0 /* WEAPONTYPE_UNARMED */))) {
        if ($.player_had_gun_warning_bank1 == 0) {
          Audio.LoadMissionAudio(1, "bjm1_20" as any);
          $.player_had_gun_warning_bank1 = 1;
        }
        if ($.player_had_gun_warning_bank1 == 1) {
          if (Audio.HasMissionAudioLoaded(1)) {
            $.player_had_gun_warning_bank1 = 2;
          }


        }
        if ($.player_had_gun_warning_bank1 == 2) {
          Audio.PlayMissionAudio(1);
          Text.PrintNow("BJM1_20", 5000, 1); //"Put the weapon away or face the consequences!"
          $.player_had_gun_warning_bank1 = 3;
        }
        if ($.player_had_gun_warning_bank1 == 3) {
          if (Audio.HasMissionAudioFinished(1)) {
            Text.ClearThisPrint("BJM1_20");
            $.player_had_gun_warning_bank1 = 4;
          }


        }
        if ($.player_had_gun_warning_bank1 == 4) {
          TIMERB = 0;
          $.player_had_gun_warning_bank1 = 5;
        }
        if ($.player_had_gun_warning_bank1 == 5) {
          if (TIMERB >= 4000) {
            if ($.flag_player_gun_message_bankjob1 == 0) {
              Audio.LoadMissionAudio(2, "bjm1_4" as any);
              $.flag_player_gun_message_bankjob1 = 1;
            }


          }


        }
        if ($.flag_player_gun_message_bankjob1 == 1) {
          if (Audio.HasMissionAudioLoaded(2)) {
            $.flag_player_gun_message_bankjob1 = 2;
          }


        }
        if ($.flag_player_gun_message_bankjob1 == 2) {
          Audio.PlayMissionAudio(2);
          Text.PrintNow("BJM1_4", 5000, 1); //"He's armed, kill him!"
          $.flag_player_gun_message_bankjob1 = 3;
        }
        if ($.flag_player_gun_message_bankjob1 == 3) {
          if (Audio.HasMissionAudioFinished(2)) {
            Text.ClearThisPrint("BJM1_4");
            $.flag_player_gun_message_bankjob1 = 4;
          }


        }
        if ($.flag_player_gun_message_bankjob1 == 4) {
          $.flag_player_armed_bankjob1 = 1;
          $.flag_player_gun_message_bankjob1 = 5;
        }


      }
      else {
        $.flag_player_gun_message_bankjob1 = 0;
        $.player_had_gun_warning_bank1 = 0;
        $.flag_player_armed_bankjob1 = 0;
      }


    }


  }
}


// Player in secondary area in station


async function player_in_station_bankjob1() {


  if ($.uniform_pickedup_bankjob1 == 0) {
    if ($.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
      if ($.flag_had_area_message_bankjob1 == 0) {
        $.flag_had_area_message_bankjob1 = 1;
      }


    }
    if ($.player1.isInAngledAreaOnFoot3D(387.811, -486.137, 10.0, 386.424, -487.79, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(393.073, -495.966, 8.0, 390.441, -499.103, 15.0, 2.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(378.554, -485.414, 11.0, 377.167, -487.068, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(395.032, -484.093, 8.0, 388.44, -491.948, 15.0, 11.60, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(396.233, -504.359, 7.0, 386.533, -496.22, 15.0, 12.70, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(368.888, -465.922, 11.0, 353.713, -484.155, 20.0, 19.80, false /* FALSE */)) {
      if ($.flag_had_area_message_bankjob1 == 0) {
        $.flag_had_area_message_bankjob1 = 1;
      }


    }
    if ($.flag_had_area_message_bankjob1 == 1) {
      Audio.LoadMissionAudio(2, "bjm1_5" as any);
      $.flag_had_area_message_bankjob1 = 2;
    }
    if ($.flag_had_area_message_bankjob1 == 2) {
      if (Audio.HasMissionAudioLoaded(2)) {
        $.flag_had_area_message_bankjob1 = 3;
      }


    }
    if ($.flag_had_area_message_bankjob1 == 3) {
      Audio.PlayMissionAudio(2);
      Text.PrintNow("BJM1_5", 5000, 1); //"Hey get him, only authorised personnel beyond this point!"
      $.flag_had_area_message_bankjob1 = 4;
    }
    if ($.flag_had_area_message_bankjob1 == 4) {
      if (Audio.HasMissionAudioFinished(2)) {
        Text.ClearThisPrint("BJM1_5");
        $.flag_had_area_message_bankjob1 = 5;
      }


    }
    if ($.flag_had_area_message_bankjob1 == 5) {
      $.flag_player_in_station_bankjob1 = 1;
      $.flag_had_area_message_bankjob1 = 6;
    }


  }
}


// Checks to see if the player1 is firing in the police station


async function player_shooting_bankjob1() {


  if ($.kill_player_flag_bankjob1 == 0) {
    if ($.player1.isShooting()) {


      if ($.player1.isInAngledAreaOnFoot3D(393.174, -470.686, 10.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(397.983, -479.156, 10.0, 394.546, -483.252, 15.0, 3.30, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(401.651, -480.614, 10.0, 397.416, -485.66, 15.0, 9.40, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(407.682, -480.576, 10.0, 405.289, -483.392, 15.0, 4.80, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
        $.kill_player_flag_bankjob1 = 1;
      }
      if ($.player1.isInAngledAreaOnFoot3D(387.811, -486.137, 10.0, 386.424, -487.79, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(393.073, -495.966, 8.0, 390.441, -499.103, 15.0, 2.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(378.554, -485.414, 11.0, 377.167, -487.068, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(395.032, -484.093, 8.0, 388.44, -491.948, 15.0, 11.60, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(396.233, -504.359, 7.0, 386.533, -496.22, 15.0, 12.70, false /* FALSE */) || $.player1.isInAngledAreaOnFoot3D(368.888, -465.922, 11.0, 353.713, -484.155, 20.0, 19.80, false /* FALSE */)) {
        $.kill_player_flag_bankjob1 = 1;
      }


    }


  }
}


// Checks to see if the player has taken a vehicle into the police station


async function player_driving_in_station_bankjob1() {


  if ($.kill_player_flag_bankjob1 == 0) {
    if ($.player1.isInAngledAreaInCar3D(393.174, -470.686, 10.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(397.983, -479.156, 10.0, 394.546, -483.252, 15.0, 3.30, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(401.651, -480.614, 10.0, 397.416, -485.66, 15.0, 9.40, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(407.682, -480.576, 10.0, 405.289, -483.392, 15.0, 4.80, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(389.12, -478.56, 10.34, 379.50, -489.40, 14.0, 4.0, false /* FALSE */)) {
      $.kill_player_flag_bankjob1 = 1;
    }
    if ($.player1.isInAngledAreaInCar3D(387.811, -486.137, 10.0, 386.424, -487.79, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(393.073, -495.966, 8.0, 390.441, -499.103, 15.0, 2.20, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(378.554, -485.414, 11.0, 377.167, -487.068, 15.0, 4.20, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(395.032, -484.093, 8.0, 388.44, -491.948, 15.0, 11.60, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(396.233, -504.359, 7.0, 386.533, -496.22, 15.0, 12.70, false /* FALSE */) || $.player1.isInAngledAreaInCar3D(368.888, -465.922, 11.0, 353.713, -484.155, 20.0, 19.80, false /* FALSE */)) {
      $.kill_player_flag_bankjob1 = 1;
    }


  }
}


// If the alarm has been raised this will create guys from the stations interior


async function alarm_guard_creation_bankjob1() {


  if ($.player_gone_out_bank1 == 0) {
    if ($.total_guards_created_bankjob1 <= 20) {
      if ($.counter_blokes_alive_bankjob1 < 6) {
        if ($.flag_created_bloke_in_area_bankjob1 == 2) {
          TIMERB = 0;
          $.flag_created_bloke_in_area_bankjob1 = 0;
        }
        if (!(World.IsAreaOccupied(380.0, -491.64, 8.0, 375.62, -493.57, 16.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, false /* FALSE */))) {
          if (TIMERB >= 5000) {
            if ($.flag_created_bloke_in_area_bankjob1 == 0) {
              $.guard_number_bankjob1 = -1;
              if ($.flag_guard1_state_bankjob1 == 0 || $.flag_guard1_state_bankjob1 == 2) {
                World.ClearArea(379.88, -493.05, 11.34, 4.0, false /* FALSE */);
                $.created_guard1_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 379.88, -493.05, 11.34);
                $.guard_number_bankjob1 = $.created_guard1_bankjob1;
                $.flag_guard1_state_bankjob1 = 1;
              }
              else {
                if ($.flag_guard2_state_bankjob1 == 0 || $.flag_guard2_state_bankjob1 == 2) {
                  World.ClearArea(379.88, -493.05, 11.34, 4.0, false /* FALSE */);
                  $.created_guard2_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 379.88, -493.05, 11.34);
                  $.guard_number_bankjob1 = $.created_guard2_bankjob1;
                  $.flag_guard2_state_bankjob1 = 1;
                }
                else {
                  if ($.flag_guard3_state_bankjob1 == 0 || $.flag_guard3_state_bankjob1 == 2) {
                    World.ClearArea(379.88, -493.05, 11.34, 4.0, false /* FALSE */);
                    $.created_guard3_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 379.88, -493.05, 11.34);
                    $.guard_number_bankjob1 = $.created_guard3_bankjob1;
                    $.flag_guard3_state_bankjob1 = 1;
                  }
                  else {
                    if ($.flag_guard4_state_bankjob1 == 0 || $.flag_guard4_state_bankjob1 == 2) {
                      World.ClearArea(-379.88, -493.05, 11.34, 4.0, false /* FALSE */);
                      $.created_guard4_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 379.88, -493.05, 11.34);
                      $.guard_number_bankjob1 = $.created_guard4_bankjob1;
                      $.flag_guard4_state_bankjob1 = 1;
                    }
                    else {
                      if ($.flag_guard5_state_bankjob1 == 0 || $.flag_guard5_state_bankjob1 == 2) {
                        World.ClearArea(379.88, -493.05, 11.34, 4.0, false /* FALSE */);
                        $.created_guard5_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 379.88, -493.05, 11.34);
                        $.guard_number_bankjob1 = $.created_guard5_bankjob1;
                        $.flag_guard5_state_bankjob1 = 1;
                      }
                      else {
                        if ($.flag_guard6_state_bankjob1 == 0 || $.flag_guard6_state_bankjob1 == 2) {
                          World.ClearArea(379.88, -493.05, 11.34, 4.0, false /* FALSE */);
                          $.created_guard6_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 379.88, -493.05, 11.34);
                          $.guard_number_bankjob1 = $.created_guard6_bankjob1;
                          $.flag_guard6_state_bankjob1 = 1;
                        }
                        else {
                          if ($.flag_guard7_state_bankjob1 == 0 || $.flag_guard7_state_bankjob1 == 2) {
                            World.ClearArea(379.88, -493.05, 11.34, 4.0, false /* FALSE */);
                            $.created_guard7_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 379.88, -493.05, 11.34);
                            $.guard_number_bankjob1 = $.created_guard7_bankjob1;
                            $.flag_guard7_state_bankjob1 = 1;
                          }
                          else {
                            if ($.flag_guard8_state_bankjob1 == 0 || $.flag_guard8_state_bankjob1 == 2) {
                              World.ClearArea(379.88, -493.05, 11.34, 4.0, false /* FALSE */);
                              $.created_guard8_bankjob1 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 379.88, -493.05, 11.34);
                              $.guard_number_bankjob1 = $.created_guard8_bankjob1;
                              $.flag_guard8_state_bankjob1 = 1;
                            }


                          }


                        }


                      }


                    }


                  }


                }


              }
              if (!(Char.IsDead($.guard_number_bankjob1))) {
                if (!($.guard_number_bankjob1 == -1)) {
                  $.guard_number_bankjob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.guard_number_bankjob1.setHeading(180.0);
                  $.guard_number_bankjob1.setObjRunToCoord(381.53, -490.91);
                  ++$.counter_blokes_alive_bankjob1;
                  ++$.total_guards_created_bankjob1;
                  $.flag_created_bloke_in_area_bankjob1 = 1;
                }


              }


            }


          }


        }


      }


    }


  }
}


// Checks to see if the created guards are in the correct area and gives them AI


async function guard_AI_bankjob1() {


  if ($.flag_created_bloke_in_area_bankjob1 == 1) {
    if (!(Char.IsDead($.guard_number_bankjob1))) {
      if ($.guard_number_bankjob1.locateOnFoot3D(381.53, -490.91, 11.35, 1.0, 1.0, 2.0, false /* FALSE */)) {
        $.guard_number_bankjob1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Set to infinate ammo
        $.guard_number_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.guard_number_bankjob1.setObjKillPlayerOnFoot($.player1);
        $.flag_created_bloke_in_area_bankjob1 = 2;
      }


    }
    else {
      $.flag_created_bloke_in_area_bankjob1 = 2;
    }


  }
}


// Guard death checks


async function alarm_guard_death_check_bankjob1() {


  if ($.flag_guard1_state_bankjob1 == 1) {
    if (Char.IsDead($.created_guard1_bankjob1)) {
      $.created_guard1_bankjob1.removeElegantly();
      --$.counter_blokes_alive_bankjob1;
      $.flag_guard1_state_bankjob1 = 2;
    }
    else {
      if ($.timer_alarm_guards_react_bank1 == 2) {
        $.created_guard1_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.created_guard1_bankjob1.setObjKillPlayerOnFoot($.player1);
      }


    }


  }


  if ($.flag_guard2_state_bankjob1 == 1) {
    if (Char.IsDead($.created_guard2_bankjob1)) {
      $.created_guard2_bankjob1.removeElegantly();
      --$.counter_blokes_alive_bankjob1;
      $.flag_guard2_state_bankjob1 = 2;
    }
    else {
      if ($.timer_alarm_guards_react_bank1 == 2) {
        $.created_guard2_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.created_guard2_bankjob1.setObjKillPlayerOnFoot($.player1);
      }


    }


  }


  if ($.flag_guard3_state_bankjob1 == 1) {
    if (Char.IsDead($.created_guard3_bankjob1)) {
      $.created_guard3_bankjob1.removeElegantly();
      --$.counter_blokes_alive_bankjob1;
      $.flag_guard3_state_bankjob1 = 2;
    }
    else {
      if ($.timer_alarm_guards_react_bank1 == 2) {
        $.created_guard3_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.created_guard3_bankjob1.setObjKillPlayerOnFoot($.player1);
      }


    }


  }


  if ($.flag_guard4_state_bankjob1 == 1) {
    if (Char.IsDead($.created_guard4_bankjob1)) {
      $.created_guard4_bankjob1.removeElegantly();
      --$.counter_blokes_alive_bankjob1;
      $.flag_guard4_state_bankjob1 = 2;
    }
    else {
      if ($.timer_alarm_guards_react_bank1 == 2) {
        $.created_guard4_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.created_guard4_bankjob1.setObjKillPlayerOnFoot($.player1);
      }


    }


  }


  if ($.flag_guard5_state_bankjob1 == 1) {
    if (Char.IsDead($.created_guard5_bankjob1)) {
      $.created_guard5_bankjob1.removeElegantly();
      --$.counter_blokes_alive_bankjob1;
      $.flag_guard5_state_bankjob1 = 2;
    }
    else {
      if ($.timer_alarm_guards_react_bank1 == 2) {
        $.created_guard5_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.created_guard5_bankjob1.setObjKillPlayerOnFoot($.player1);
      }


    }


  }


  if ($.flag_guard6_state_bankjob1 == 1) {
    if (Char.IsDead($.created_guard6_bankjob1)) {
      $.created_guard6_bankjob1.removeElegantly();
      --$.counter_blokes_alive_bankjob1;
      $.flag_guard6_state_bankjob1 = 2;
    }
    else {
      if ($.timer_alarm_guards_react_bank1 == 2) {
        $.created_guard6_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.created_guard6_bankjob1.setObjKillPlayerOnFoot($.player1);
      }


    }


  }


  if ($.flag_guard7_state_bankjob1 == 1) {
    if (Char.IsDead($.created_guard7_bankjob1)) {
      $.created_guard7_bankjob1.removeElegantly();
      --$.counter_blokes_alive_bankjob1;
      $.flag_guard7_state_bankjob1 = 2;
    }
    else {
      if ($.timer_alarm_guards_react_bank1 == 2) {
        $.created_guard7_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.created_guard7_bankjob1.setObjKillPlayerOnFoot($.player1);
      }


    }


  }


  if ($.flag_guard8_state_bankjob1 == 1) {
    if (Char.IsDead($.created_guard8_bankjob1)) {
      $.created_guard8_bankjob1.removeElegantly();
      --$.counter_blokes_alive_bankjob1;
      $.flag_guard8_state_bankjob1 = 2;
    }
    else {
      if ($.timer_alarm_guards_react_bank1 == 2) {
        $.created_guard8_bankjob1.followPath($.player_x_bankjob1, $.player_y_bankjob1, $.player_z_bankjob1, 0.5, 1 /* RUN */);
        $.created_guard8_bankjob1.setObjKillPlayerOnFoot($.player1);
      }


    }


  }


  if ($.timer_alarm_guards_react_bank1 == 2) {
    $.timer_alarm_guards_react_bank1 = 0;
  }
}


// player clothes change stuff


async function change_clothes_bankjob1() {


  if ($.uniform_pickedup_bankjob1 == 0) {
    $.sphere_bankjob1.remove();
    Hud.SwitchWidescreen(true /* ON */);
    $.player1.setControl(false /* OFF */);
    Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
    $.scplayer = $.player1.getChar();
    Camera.SetFixedPosition(399.925, -485.48, 14.542, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(400.831, -485.674, 14.162, 2 /* JUMP_CUT */);
    $.scplayer.setObjGotoCoordOnFoot(409.56, -484.36);
    TIMERA = 0;
    while (!($.scplayer.locateOnFoot2D(409.56, -484.36, 1.0, 1.0, false /* FALSE */))) {
      await asyncWait(0);
      if ($.cam_died_in_subscript_bankjob1 == 0) {
        if (Char.IsDead($.safecracker_bankjob1)) {
          $.cam_died_in_subscript_bankjob1 = 1;
        }


      }
      if (TIMERA > 8000) {
        if (!($.scplayer.locateOnFoot2D(409.56, -484.36, 1.0, 1.0, false /* FALSE */))) {
          if (!(Char.IsDead($.scplayer))) {
            $.scplayer.setCoordinates(409.56, -484.36, 11.35);
          }


        }


      }


    }

    // Change clothes code

    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.undress("player6"); // player is police uniform
      Streaming.LoadAllModelsNow();
      if (!(Char.IsDead($.scplayer))) {
        $.scplayer.dress();
      }


    }
    $.scplayer.setObjGotoCoordOnFoot(407.77, -487.13);
    TIMERA = 0;
    while (!($.scplayer.locateOnFoot2D(407.77, -487.13, 0.5, 0.5, false /* FALSE */))) {
      await asyncWait(0);
      if (TIMERA > 8000) {
        if (!($.scplayer.locateOnFoot2D(407.77, -487.13, 0.5, 0.5, false /* FALSE */))) {
          if (!(Char.IsDead($.scplayer))) {
            $.scplayer.setCoordinates(407.77, -487.13, 11.35);
          }


        }


      }
      if ($.cam_died_in_subscript_bankjob1 == 0) {
        if (Char.IsDead($.safecracker_bankjob1)) {
          $.cam_died_in_subscript_bankjob1 = 1;
        }


      }


    }
    $.scplayer.setObjGotoCoordOnFoot(406.16, -487.14);
    while (!($.scplayer.locateOnFoot2D(406.16, -487.14, 0.5, 0.5, false /* FALSE */))) {
      await asyncWait(0);
      if ($.cam_died_in_subscript_bankjob1 == 0) {
        if (Char.IsDead($.safecracker_bankjob1)) {
          $.cam_died_in_subscript_bankjob1 = 1;
        }


      }
      if (TIMERA > 8000) {
        if (!($.scplayer.locateOnFoot2D(406.16, -487.14, 0.5, 0.5, false /* FALSE */))) {
          if (!(Char.IsDead($.scplayer))) {
            $.scplayer.setCoordinates(406.16, -487.14, 11.35);
          }


        }


      }


    }
    Hud.SwitchWidescreen(false /* OFF */);
    $.player1.setControl(true /* ON */);
    Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
    Camera.SetInFrontOfPlayer();
    Camera.RestoreJumpcut();
    $.uniform_pickedup_bankjob1 = 1;


  }
}


// Checks to see if the player is behind the counter in the station


async function player_behind_counter_bankjob1() {


  if ($.kill_player_flag_bankjob1 == 0) {
    if ($.uniform_pickedup_bankjob1 == 0) {
      if ($.player1.isInAngledAreaOnFoot3D(393.174, -470.686, 8.0, 386.992, -478.052, 15.0, 8.20, false /* FALSE */)) {
        if ($.player1.isWantedLevelGreater(0)) {
          $.kill_player_flag_bankjob1 = 1;
        }


      }
      if ($.player1.isInAngledArea3D(390.82, -471.0, 10.0, 385.0, -468.27, 15.0, 10.0, false /* FALSE */)) {
        if ($.had_area2_message_bankjob1 == 0) {
          $.had_area2_message_bankjob1 = 1;
        }


      }
      if ($.had_area2_message_bankjob1 == 1) {
        Audio.LoadMissionAudio(2, "bjm1_5" as any);
        $.had_area2_message_bankjob1 = 2;
      }
      if ($.had_area2_message_bankjob1 == 2) {
        if (Audio.HasMissionAudioLoaded(2)) {
          $.had_area2_message_bankjob1 = 3;
        }


      }
      if ($.had_area2_message_bankjob1 == 3) {
        Audio.PlayMissionAudio(2);
        Text.PrintNow("BJM1_5", 5000, 1); //"Hey get him, only authorised personnel beyond this point!"
        $.had_area2_message_bankjob1 = 4;
      }
      if ($.had_area2_message_bankjob1 == 4) {
        if (Audio.HasMissionAudioFinished(2)) {
          Text.ClearThisPrint("BJM1_5");
          $.kill_player_flag_bankjob1 = 1;
          $.had_area2_message_bankjob1 = 5;
        }


      }


    }


  }
}


// Cleansup any guards that are left


async function mini_cleanup_bank1() {


  $.cop1_bankjob1.markAsNoLongerNeeded();
  $.cop2_bankjob1.markAsNoLongerNeeded();
  $.cop3_bankjob1.markAsNoLongerNeeded();
  $.cop4_bankjob1.markAsNoLongerNeeded();
  $.cop5_bankjob1.markAsNoLongerNeeded();
  $.cop6_bankjob1.markAsNoLongerNeeded();
  $.cop7_bankjob1.markAsNoLongerNeeded();
  $.cop8_bankjob1.markAsNoLongerNeeded();
  $.cop9_bankjob1.markAsNoLongerNeeded();
  $.cop10_bankjob1.markAsNoLongerNeeded();
  $.cop11_bankjob1.markAsNoLongerNeeded();
  $.created_guard1_bankjob1.markAsNoLongerNeeded();
  $.created_guard2_bankjob1.markAsNoLongerNeeded();
  $.created_guard3_bankjob1.markAsNoLongerNeeded();
  $.created_guard4_bankjob1.markAsNoLongerNeeded();
  $.created_guard5_bankjob1.markAsNoLongerNeeded();
  $.created_guard6_bankjob1.markAsNoLongerNeeded();
  $.created_guard7_bankjob1.markAsNoLongerNeeded();
  $.created_guard8_bankjob1.markAsNoLongerNeeded();
  $.player_gone_out_bank1 = 2;
}

export async function bankj1() {
  // MissionBoundary
  // *******************************************************************************************
  // *******************************************************************************************
  // *******************************************************************************************
  // ************************************* Bank Mission 1***************************************
  // ******************************** Break Out the Safe Cracker *******************************
  // ********************************	      No Escape ?		   *******************************
  // *******************************************************************************************
  // *******************************************************************************************
  // *******************************************************************************************
  // *******************************************************************************************


  // SCRIPT_NAME bankjo1

  // Mission start stuff


  await mission_start_bankjob1();  // SCM GOSUB mission_start_bankjob1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_bankjob1_failed();  // SCM GOSUB mission_bankjob1_failed
  }


  await mission_cleanup_bankjob1();  // SCM GOSUB mission_cleanup_bankjob1


  // MissionBoundary


  // Variables for mission

  // Safe cracker


  // VAR_INT safecracker_bankjob1


  // VAR_INT flag_safecracker_dead_bankjob1


  // VAR_INT radar_blip_ped1_bankjob1


  // VAR_INT flag_safecracker_in_group_bankjob1


  // VAR_INT flag_cams_blip_on_bankjob1


  // VAR_INT flag_had_cops_message_bankjob1

  // Location to take safecracher too


  // VAR_INT radar_blip_coord1_bankjob1

  // cop1


  // VAR_INT cop1_bankjob1


  // VAR_INT flag_cop1_dead_bankjob1


  // VAR_INT flag_duck_cop1


  // VAR_INT counter_time_cop1_duck_again


  // VAR_INT counter_shoot_cop1


  // VAR_INT flag_start_shoot_timer_cop1


  // VAR_INT flag_cop1_got_gun_bankjob1


  // VAR_INT timer_start_cop1_bankjob1


  // VAR_INT times_done_gun_cop1_bankjob1


  // VAR_INT timer_gun_cop1_bankjob1


  // VAR_INT cop1_health_bank1

  // cop2


  // VAR_INT cop2_bankjob1


  // VAR_INT flag_cop2_dead_bankjob1


  // VAR_INT flag_duck_cop2


  // VAR_INT counter_time_cop2_duck_again


  // VAR_INT counter_shoot_cop2


  // VAR_INT flag_start_shoot_timer_cop2


  // VAR_INT flag_cop2_got_gun_bankjob1


  // VAR_INT timer_start_cop2_bankjob1


  // VAR_INT times_done_gun_cop2_bankjob1


  // VAR_INT timer_gun_cop2_bankjob1


  // VAR_INT cop2_health_bank1

  // cop3


  // VAR_INT cop3_bankjob1


  // VAR_INT flag_cop3_dead_bankjob1


  // VAR_INT flag_duck_cop3


  // VAR_INT counter_time_cop3_duck_again


  // VAR_INT counter_shoot_cop3


  // VAR_INT flag_start_shoot_timer_cop3


  // VAR_INT flag_cop3_got_gun_bankjob1


  // VAR_INT timer_start_cop3_bankjob1


  // VAR_INT times_done_gun_cop3_bankjob1


  // VAR_INT timer_gun_cop3_bankjob1


  // VAR_INT cop3_health_bank1

  // cop4


  // VAR_INT cop4_bankjob1


  // VAR_INT flag_cop4_dead_bankjob1


  // VAR_INT flag_duck_cop4


  // VAR_INT counter_time_cop4_duck_again


  // VAR_INT counter_shoot_cop4


  // VAR_INT flag_start_shoot_timer_cop4


  // VAR_INT flag_cop4_got_gun_bankjob1


  // VAR_INT timer_start_cop4_bankjob1


  // VAR_INT times_done_gun_cop4_bankjob1


  // VAR_INT timer_gun_cop4_bankjob1


  // VAR_INT cop4_health_bank1

  // cop5


  // VAR_INT cop5_bankjob1


  // VAR_INT flag_cop5_dead_bankjob1


  // VAR_INT flag_cop5_got_gun_bankjob1


  // VAR_INT cop5_health_bank1

  // cop6


  // VAR_INT cop6_bankjob1


  // VAR_INT flag_cop6_dead_bankjob1


  // VAR_INT flag_duck_cop6


  // VAR_INT counter_time_cop6_duck_again


  // VAR_INT counter_shoot_cop6


  // VAR_INT flag_start_shoot_timer_cop6


  // VAR_INT flag_cop6_got_gun_bankjob1


  // VAR_INT timer_start_cop6_bankjob1


  // VAR_INT times_done_gun_cop6_bankjob1


  // VAR_INT timer_gun_cop6_bankjob1


  // VAR_INT cop6_health_bank1

  // cop7


  // VAR_INT cop7_bankjob1


  // VAR_INT flag_cop7_dead_bankjob1


  // VAR_INT flag_cop7_got_gun_bankjob1


  // VAR_INT cop7_health_bank1


  // VAR_INT cop7_sitting_bankjob1

  // cop8


  // VAR_INT cop8_bankjob1


  // VAR_INT flag_cop8_dead_bankjob1


  // VAR_INT flag_cop8_got_gun_bankjob1


  // VAR_INT cop8_health_bank1

  // cop9


  // VAR_INT cop9_bankjob1


  // VAR_INT flag_cop9_dead_bankjob1


  // VAR_INT flag_cop9_got_gun_bankjob1


  // VAR_INT cop9_health_bank1

  // cop10


  // VAR_INT cop10_bankjob1


  // VAR_INT flag_cop10_dead_bankjob1


  // VAR_INT flag_cop10_got_gun_bankjob1


  // VAR_INT cop10_health_bank1

  // cop11


  // VAR_INT cop11_bankjob1


  // VAR_INT flag_cop11_dead_bankjob1


  // VAR_INT flag_cop11_got_gun_bankjob1


  // VAR_INT cop11_health_bank1


  // VAR_INT cop11_sitting_bankjob1

  // general stuff


  // VAR_INT kill_player_flag_bankjob1


  // VAR_INT flag_bloke_in_group_bankjob1


  // VAR_FLOAT player_x_bankjob1


  // VAR_FLOAT player_y_bankjob1


  // VAR_FLOAT player_z_bankjob1


  // VAR_INT alarm_bankjob1

  // key stuff


  // VAR_INT key_bankjob1


  // VAR_INT key_blip_bank1


  // VAR_INT flag_key_collected_bankjob1


  // VAR_INT flag_doors_moved_bankjob1


  // VAR_INT flag_cell_door_open_bankjob1

  // Clothes stuff


  // VAR_INT uniform_pickedup_bankjob1

  // Checks to see if the player1 is armed in area


  // VAR_INT flag_player_armed_bankjob1


  // VAR_INT flag_player_gun_message_bankjob1

  // Player in area of station he should not be


  // VAR_INT flag_player_in_station_bankjob1


  // VAR_INT flag_had_area_message_bankjob1

  // Alarm stuff

  // created guard1


  // VAR_INT created_guard1_bankjob1


  // VAR_INT flag_guard1_state_bankjob1

  // created guard2


  // VAR_INT created_guard2_bankjob1


  // VAR_INT flag_guard2_state_bankjob1

  // created guard3


  // VAR_INT created_guard3_bankjob1


  // VAR_INT flag_guard3_state_bankjob1

  // created guard4


  // VAR_INT created_guard4_bankjob1


  // VAR_INT flag_guard4_state_bankjob1

  // created guard5


  // VAR_INT created_guard5_bankjob1


  // VAR_INT flag_guard5_state_bankjob1

  // created guard6


  // VAR_INT created_guard6_bankjob1


  // VAR_INT flag_guard6_state_bankjob1

  // created guard7


  // VAR_INT created_guard7_bankjob1


  // VAR_INT flag_guard7_state_bankjob1

  // created guard8


  // VAR_INT created_guard8_bankjob1


  // VAR_INT flag_guard8_state_bankjob1

  // Starts the timers for the guard creation stuff


  // VAR_INT flag_timer_started_bankjob1


  // VAR_INT total_guards_created_bankjob1


  // VAR_INT counter_blokes_alive_bankjob1


  // VAR_INT flag_created_bloke_in_area_bankjob1


  // VAR_INT guard_number_bankjob1


  // VAR_INT cam_died_in_subscript_bankjob1


  // VAR_INT sphere_bankjob1


  // VAR_INT sphere2_bankjob1


  // VAR_INT player_had_gun_warning_bank1

  // Audio for cell door


  // VAR_INT door_sfx1_bankjob1


  // VAR_INT had_cop_audio_1sttime_bankjob1


  // VAR_INT had_cop_audio_bankjob1


  // VAR_INT alarm_triggered_bankjob1


  // VAR_INT alarm_sound_added_bankjob1

  // New sitting triggers


  // VAR_INT cop2_sitting_bankjob1


  // VAR_INT cop3_sitting_bankjob1


  // VAR_INT cop4_sitting_bankjob1


  // VAR_INT cop5_chatting_bankjob1


  // VAR_INT cop6_sitting_bankjob1


  // VAR_INT cop8_sitting_bankjob1


  // VAR_INT cop9_sitting_bankjob1


  // VAR_INT cop10_sitting_bankjob1

  // Area2 message stuff


  // VAR_INT had_area2_message_bankjob1

  // cutscene at end


  // VAR_INT cam_car_bankjob1

  // Timer stuff


  // VAR_INT game_time_bank1


  // VAR_INT timer_started_bank1


  // VAR_INT time_to_act_bank1


  // VAR_INT timer_guards_react_bank1


  // VAR_INT timer_alarm_guards_react_bank1


  // VAR_INT time_to_act_alarm_bank1


  // VAR_INT timer_started_alarm_bank1


  // VAR_INT player_has_key_message_bank1


  // VAR_INT player_no_key_message_bank1


  // VAR_INT player_had_locker_message_bank1


  // VAR_INT stored_current_weapon_bank1

  // Sound effects


  // VAR_INT door_sliding_bankjob1


  // VAR_INT flag_played_card_beep_bank1


  // VAR_INT snore_bank1


  // VAR_INT start_timer_for_message_bank1

  // New blip for spray shop


  // VAR_INT spray_shop_blip_bank1


  // VAR_INT health_bankjob1

  // Used to delete extra guards if player is not longer in teh area


  // VAR_INT player_gone_out_bank1

  // Car stuff for creating one outsdie of copshop


  // VAR_INT escape_car_bank1


  // VAR_INT escape_car_created_bank1

  // ***************************************Mission Start*************************************



}
