// Generated from main/count1.sc

import { $ } from "../vars.mts";

async function mission_start_counter1() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  $.flag_player_on_counter_1 = 1;

  // target bloke


  $.flag_player_got_info_count1 = 0;

  // Guard1


  $.flag_guard1_dead_count1 = 0;


  $.flag_guard1_shouted_count1 = 0;


  $.guard1_in_alert_position_count1 = 0;


  $.flag_guard1_go_for_alert_count1 = 0;


  $.flag_guard1_kill_player_count1 = 0;


  $.guard1_alarm_run_count1 = 0;

  // Guard2


  $.flag_guard2_dead_count1 = 0;


  $.guard2_in_alert_state_count1 = 0;


  $.flag_guard2_shouted_count1 = 0;

  // Guard3


  $.flag_guard3_dead_count1 = 0;


  $.guard3_in_alert_state_count1 = 0;


  $.flag_guard3_shouted_count1 = 0;

  // Guard4


  $.flag_guard4_dead_count1 = 0;


  $.guard4_in_alert_state_count1 = 0;


  $.flag_guard4_shouted_count1 = 0;

  // Guard5


  $.flag_guard5_dead_count1 = 0;


  $.guard5_in_alert_state_count1 = 0;


  $.flag_guard5_shouted_count1 = 0;

  // Guard6


  $.flag_guard6_dead_count1 = 0;


  $.guard6_in_alert_state_count1 = 0;


  $.flag_guard6_shouted_count1 = 0;

  // Guard7


  $.flag_guard7_dead_count1 = 0;


  $.guard7_in_alert_state_count1 = 0;


  $.flag_guard7_shouted_count1 = 0;

  // Guard8


  $.flag_guard8_dead_count1 = 0;


  $.guard8_in_alert_state_count1 = 0;


  $.flag_guard8_shouted_count1 = 0;

  // Guard9


  $.flag_guard9_dead_count1 = 0;


  $.guard9_in_alert_state_count1 = 0;


  $.flag_guard9_shouted_count1 = 0;

  // Guard10


  $.flag_guard10_dead_count1 = 0;


  $.guard10_in_alert_state_count1 = 0;


  $.flag_guard10_shouted_count1 = 0;

  // Guard11


  $.flag_guard11_dead_count1 = 0;


  $.flag_guard11_shouted_count1 = 0;


  // General Stuff


  $.alarm_raised_count1 = 0;


  $.flag_all_guards_react_count1 = 0;


  $.flag_player_been_on_boat_count1 = 0;


  $.player_x_count1 = 0.0;


  $.player_y_count1 = 0.0;


  $.player_z_count1 = 0.0;

  // Guard alarm creation ( If alarm raised this will create some extra guards to get the player )


  $.total_guards_created_count1 = 0;


  $.counter_blokes_alive_count1 = 0;


  $.flag_created_bloke_in_area_count1 = 0;


  $.flag_guard1_state_count1 = 0;


  $.flag_guard2_state_count1 = 0;


  $.flag_guard3_state_count1 = 0;


  $.flag_guard4_state_count1 = 0;


  $.flag_guard5_state_count1 = 0;


  $.flag_guard6_state_count1 = 0;


  $.flag_guard7_state_count1 = 0;


  $.flag_guard8_state_count1 = 0;


  $.flag_timer_started_count1 = 0;

  // General Stuff


  $.flag_had_mini_cut_count1 = 0;


  $.flag_had_escape_message_count1 = 0;

  // Timer stuff


  $.game_time_count1 = 0;


  $.timer_started_count1 = 0;


  $.time_to_act_count1 = 0;


  $.timer_guards_react_count1 = 0;


  $.timer_alarm_guards_react_count1 = 0;


  $.time_to_act_alarm_count1 = 0;


  $.timer_started_alarm_count1 = 0;

  // frame counter stuff


  $.frame_counter_count1 = 0;

  // Extra quick guard creation if player has got info


  $.number_to_act_at_count1 = 0;


  $.done_mini_cleanup_count1 = 0;


  $.timer_shooting_started_count1 = 0;


  await asyncWait(0);


  Text.LoadMissionText("COUNT1");


  Shortcut.SetDropoffPointForMission(-1045.726, -292.454, 9.758, 97.607); // On road outside of Print Works




  // **************************************** Cut Scene **************************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSkelly");


  Streaming.SetAreaVisible(VIS_PRINT_WORKS);


  Streaming.LoadScene(-1070.05, -280.06, 11.09);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);


  }


  Cutscene.Load("cnt_1a");


  Cutscene.SetOffset(-1064.103, -276.39, 11.066);


  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_kelly = CutsceneObject.Create(SPECIAL02);
  $.cs_kelly.setAnim("CSkelly");


  World.ClearArea(-1059.8411, -278.7214, 10.4044, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1059.8411, -278.7214, 10.4044);
  $.player1.setHeading(272.2088);

  // SET_AREA_VISIBLE VIS_MAIN_MAP


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 11104) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_A", 10000, 1); //"Mr. Vercetti? Hey. You bought the old print works?"


  while ($.cs_time < 15668) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_B", 10000, 1); //"Yeah, my old man used to work on these."


  while ($.cs_time < 18152) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_N", 10000, 1); //"I used to spend the evenings with him, cleaning the rollers... "


  while ($.cs_time < 21286) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_C", 10000, 1); //"I was going to follow him in his trade, but..I lived a different life"


  while ($.cs_time < 25141) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_D", 10000, 1); //"You planning on selling the old machinery, breaking it down?"


  while ($.cs_time < 28808) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_E", 10000, 1); //"I'm thinking we might print something, A newspaper, magazine..."


  while ($.cs_time < 31680) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_F", 10000, 1); //"Oh, crap, sonny, low grade crap. I've always fancied printing money. It ain't too hard. "


  while ($.cs_time < 37694) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_G", 10000, 1); //"You know I've been doing it on a small scale for years. "


  while ($.cs_time < 40520) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_H", 10000, 1); //"Really?"


  while ($.cs_time < 41862) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_I", 10000, 1); //"Sure. But we'd need some good quality plates."


  while ($.cs_time < 46771) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_J", 10000, 1); //"Of course! there's a counterfeiting syndicate already operating in Florida. "


  while ($.cs_time < 51081) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_K", 10000, 1); //"A syndicate?"


  while ($.cs_time < 51973) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_L", 10000, 1); //"Yeah. Just rumours is all I've heard."


  while ($.cs_time < 54422) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_M", 10000, 1); //"I know a man who's good with rumours..."


  while ($.cs_time < 56704) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 57968) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  Streaming.LoadScene(-1059.8411, -278.7214, 10.4044);

  // *************************************** END OF CUT SCENE ********************************


  $.player1.setMood(PLAYER_MOOD_CALM, 60000);


  Shortcut.SetUpTaxi(-1047.664, -298.188, 11.0, 266.280, 512.591, -74.900, 9.573, 189.24); // used to warp player from print works to Malibu


  if ($.flag_had_taxi_jump_help == 0) {
    //SWITCH_WIDESCREEN ON
    $.player1.setControl(false /* OFF */);
    Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  }

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  // Waiting for the ped models to load


  Streaming.RequestModel(GDa);


  Streaming.RequestModel(GDb);


  Streaming.RequestModel(mp5lng);


  Streaming.RequestModel(M4);


  Audio.LoadMissionAudio(2, "CNT1_1" as any); //Who are you? Oooof! Aaiieee! Not the face! Not the face!"


  while (!(Streaming.HasModelLoaded(GDa)) || !(Streaming.HasModelLoaded(GDb)) || !(Streaming.HasModelLoaded(mp5lng)) || !(Streaming.HasModelLoaded(M4)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);


  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  if ($.flag_had_taxi_jump_help == 0) {
    await asyncWait(100);
    World.ClearArea(-1042.921, -304.553, 12.463, 1.0, false /* FALSE */);
    Camera.SetFixedPosition(-1042.921, -304.553, 12.463, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(-1043.434, -303.718, 12.266, 2 /* JUMP_CUT */);
    Text.PrintNow("TAXSHRT", 10000, 1); //"You can use this taxi..."
    TIMERA = 0;
    while (TIMERA < 6000) {
      await asyncWait(0);


    }
    Text.ClearThisPrint("TAXSHRT");
    Hud.SwitchWidescreen(false /* OFF */);
    $.player1.setControl(true /* ON */);
    Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
    Camera.SetBehindPlayer();
    Camera.RestoreJumpcut();
    $.flag_had_taxi_jump_help = 1;
  }


  Text.PrintNow("CM1_5", 5000, 1); //"Go and meet Kent Paul at the Malibu Club!"


  $.radar_blip_malibu_count1 = Blip.AddForCoord(491.0, -77.7, 10.4);


  $.malibu_doors.delete();
  $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_open, 490.34, -77.017, 11.598);
  $.flag_malibu_doors_open = 1;
  $.flag_malibu_doors_closed = 0;


  while (!($.player1.locateAnyMeans3D(491.0, -77.7, 10.4, 3.0, 3.0, 3.0, true /* TRUE */))) {
    await asyncWait(0);


  }


  $.player1.setControl(false /* OFF */);


  $.radar_blip_malibu_count1.remove();


  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


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

  // **************************************** CUT SCENE TWO **********************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSkent");
  Streaming.LoadSpecialCharacter(3, "floozya");


  Streaming.SetAreaVisible(VIS_MALIBU_CLUB);


  Streaming.LoadScene(470.495, -57.014, 10.04);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);


  }


  World.SetExtraColors(1, false /* FALSE */);


  Cutscene.Load("cnt_1b");


  Cutscene.SetOffset(476.972, -65.499, 8.943);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_kent = CutsceneObject.Create(SPECIAL02);
  $.cs_kent.setAnim("CSkent");


  $.cs_floozya = CutsceneObject.Create(SPECIAL03);
  $.cs_floozya.setAnim("floozya");


  World.ClearArea(493.1, -82.4, 9.8, 1.0, true /* TRUE */);


  if ($.player1.isInAnyCar()) {
    $.car2_count1 = $.scplayer.storeCarIsIn();
    if (!(Car.IsDead($.car2_count1))) {
      $.car2_count1.setCoordinates(496.3, -82.8, 9.0);
      $.car2_count1.setHeading(116.6);
    }
    $.scplayer.warpFromCarToCoord(493.1, -82.4, 9.8);
    $.player1.setHeading(220.0);
  }
  else {
    $.player1.setCoordinates(493.1, -82.4, 9.8);
    $.player1.setHeading(220.0);
  }


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 7872) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2A", 10000, 1); //"Look at the arse on that.


  while ($.cs_time < 12284) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2B", 10000, 1); //"Awright girl, it's your loss mate init!"


  while ($.cs_time < 14399) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2C", 10000, 1); //"Awright me ol'china, how's it hangin?"


  while ($.cs_time < 17102) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2D", 10000, 1); //"What do you know about counterfeiting?"


  while ($.cs_time < 18528) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2E", 10000, 1); //"Oh I'm fine Paul, how 'bout you?"


  while ($.cs_time < 20285) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2F", 10000, 1); //"Come 'ere!"


  while ($.cs_time < 21336) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2G", 10000, 1); //"Awright! Awright! Awright!! You're obviously a busy man."


  while ($.cs_time < 24945) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2H", 10000, 1); //"All I know about dodgy readys is the Triads supply the plates."


  while ($.cs_time < 31191) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2I", 10000, 1); //"They've got a shipping company down the docks,"


  while ($.cs_time < 33488) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2J", 10000, 1); //"the boss man would know when the plates are coming in next!"


  while ($.cs_time < 37791) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2K", 10000, 1); //"Thanks PAul."


  while ($.cs_time < 40783) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2L", 10000, 1); //"What's the matter wiht you, you maniac!


  while ($.cs_time < 43496) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CM1_2M", 10000, 1); //"Give me another drink, lively!"


  while ($.cs_time < 45120) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 47160) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  $.malibu_doors.delete();
  $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_close, 490.34, -77.017, 11.598);
  $.malibu_doors.dontRemove();
  $.flag_malibu_doors_closed = 1;
  $.flag_malibu_doors_open = 0;
  $.flag_player_on_counter_1 = 0;
  $.flag_player_in_malibu = 0;


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintBig("BEACH3", 3000, 2); //"Vice Point"


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  World.ClearExtraColors(false /* FALSE */);


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);


  Streaming.LoadScene(493.1, -82.4, 9.8);

  // ************************************* END OF CUTSCENE TWO *******************************


  $.player1.setMood(PLAYER_MOOD_ANGRY, 60000);

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("CM1_1", 5000, 1); //"Get to the Charted Libertine Lines boat at the docks!"


  Text.Print("CM1_2", 5000, 1); //"The Shipping officer will have the required information!"

  // Waiting for the ship collision to be loaded


  $.radar_blip_target_count1 = Blip.AddForCoord(-686.85, -1245.43, 30.14);


  $.sphere_count1 = Sphere.Create(-686.85, -1245.43, 30.14, 1.5);


  $.ground_z = 0.0000;


  while ($.ground_z < 10.0) {
    await asyncWait(0);
    $.ground_z = World.GetGroundZFor3DCoord(-686.85, -1245.43, 30.14);


  }

  // creates guard1 patrols on left hand side of boat along by the gang planks


  $.guard1_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -662.12, -1326.81, 15.26);


  ++$.counter_blokes_alive_count1;


  $.guard1_count1.clearThreatSearch();


  $.guard1_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // sets it to infinate ammo


  $.guard1_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  Path.AddRoutePoint(0, -666.06, -1318.48, 15.26);


  Path.AddRoutePoint(0, -673.80, -1302.02, 15.26);


  Path.AddRoutePoint(0, -683.28, -1282.11, 15.26);


  Path.AddRoutePoint(0, -693.41, -1258.63, 15.24);


  Path.AddRoutePoint(0, -699.76, -1245.01, 15.26);


  Path.AddRoutePoint(0, -693.41, -1258.63, 15.24);


  Path.AddRoutePoint(0, -683.28, -1282.11, 15.26);


  Path.AddRoutePoint(0, -673.80, -1302.02, 15.26);


  Path.AddRoutePoint(0, -666.06, -1318.48, 15.26);


  Path.AddRoutePoint(0, -662.12, -1326.81, 15.26);


  $.guard1_count1.setObjFollowRoute(0, 3 /* FOLLOW_ROUTE_LOOP */);

  // creates guard2 in left hand side of boat beside gang plank player uses. Follows route 1


  $.guard2_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDb, -659.26, -1330.93, 15.26);


  ++$.counter_blokes_alive_count1;


  $.guard2_count1.clearThreatSearch();


  $.guard2_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // sets it to infinate ammo


  $.guard2_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  Path.AddRoutePoint(1, -653.93, -1342.18, 15.26);


  Path.AddRoutePoint(1, -647.19, -1355.40, 15.27);


  Path.AddRoutePoint(1, -632.47, -1382.57, 15.29);


  Path.AddRoutePoint(1, -647.19, -1355.40, 15.27);


  Path.AddRoutePoint(1, -653.93, -1342.18, 15.26);


  Path.AddRoutePoint(1, -659.26, -1330.93, 15.26);


  $.guard2_count1.setObjFollowRoute(1, 3 /* FOLLOW_ROUTE_LOOP */);

  // creates guard3 in rigt hand side of boat follows path 2


  $.guard3_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -609.85, -1381.29, 15.25);


  ++$.counter_blokes_alive_count1;


  $.guard3_count1.clearThreatSearch();


  $.guard3_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // sets it to infinate ammo


  $.guard3_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  Path.AddRoutePoint(2, -615.43, -1367.41, 15.28);


  Path.AddRoutePoint(2, -620.06, -1355.03, 15.28);


  Path.AddRoutePoint(2, -635.64, -1363.45, 15.28);


  Path.AddRoutePoint(2, -620.06, -1355.03, 15.28);


  Path.AddRoutePoint(2, -615.43, -1367.41, 15.28);


  Path.AddRoutePoint(2, -609.85, -1381.29, 15.25);


  $.guard3_count1.setObjFollowRoute(2, 3 /* FOLLOW_ROUTE_LOOP */);

  // Guard4 patrols right hand side of the boat near the middle section follows path 3


  $.guard4_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDb, -627.04, -1339.79, 15.27);


  ++$.counter_blokes_alive_count1;


  $.guard4_count1.clearThreatSearch();


  $.guard4_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // sets it to infinate ammo


  $.guard4_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  Path.AddRoutePoint(3, -630.43, -1333.91, 15.27);


  Path.AddRoutePoint(3, -634.26, -1322.39, 15.27);


  Path.AddRoutePoint(3, -639.33, -1307.99, 15.26);


  Path.AddRoutePoint(3, -642.71, -1303.60, 15.26);


  Path.AddRoutePoint(3, -639.33, -1307.99, 15.26);


  Path.AddRoutePoint(3, -634.26, -1322.39, 15.27);


  Path.AddRoutePoint(3, -630.43, -1333.91, 15.27);


  Path.AddRoutePoint(3, -627.04, -1339.79, 15.27);


  $.guard4_count1.setObjFollowRoute(3, 3 /* FOLLOW_ROUTE_LOOP */);

  // Guard5 on rigt hand side of boat closest to the main cabin bit follows route 4


  $.guard5_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -653.46, -1279.55, 15.26);


  ++$.counter_blokes_alive_count1;


  $.guard5_count1.clearThreatSearch();


  $.guard5_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // sets it to infinate ammo


  $.guard5_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  Path.AddRoutePoint(4, -656.61, -1271.76, 15.26);


  Path.AddRoutePoint(4, -660.34, -1262.76, 15.26);


  Path.AddRoutePoint(4, -664.83, -1254.11, 15.26);


  Path.AddRoutePoint(4, -660.34, -1262.76, 15.26);


  Path.AddRoutePoint(4, -656.61, -1271.76, 15.26);


  Path.AddRoutePoint(4, -653.46, -1279.55, 15.26);


  $.guard5_count1.setObjFollowRoute(4, 3 /* FOLLOW_ROUTE_LOOP */);

  // Guard6 side pod left hand side


  $.guard6_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDb, -691.13, -1260.50, 31.93);


  ++$.counter_blokes_alive_count1;


  $.guard6_count1.setHeading(180.0);


  $.guard6_count1.clearThreatSearch();


  $.guard6_count1.giveWeapon(WEAPONTYPE_M4, 30000); // sets it to infinate ammo


  $.guard6_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.guard6_count1.setStayInSamePlace(true /* TRUE */);

  // Guard7 side pod right hand side


  $.guard7_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -667.68, -1249.14, 31.93);


  ++$.counter_blokes_alive_count1;


  $.guard7_count1.setHeading(180.0);


  $.guard7_count1.clearThreatSearch();


  $.guard7_count1.giveWeapon(WEAPONTYPE_M4, 30000); // sets it to infinate ammo


  $.guard7_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.guard7_count1.setStayInSamePlace(true /* TRUE */);

  // Guard8 patrols back of boat on ground follows path 5


  $.guard8_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDb, -690.94, -1218.18, 15.28);


  ++$.counter_blokes_alive_count1;


  $.guard8_count1.clearThreatSearch();


  $.guard8_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // sets it to infinate ammo


  $.guard8_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  Path.AddRoutePoint(5, -698.00, -1221.23, 15.28);


  Path.AddRoutePoint(5, -690.94, -1218.18, 15.28);


  $.guard8_count1.setObjFollowRoute(5, 3 /* FOLLOW_ROUTE_LOOP */);


  // Guard9 3rd deck up stands guard does not run


  $.guard9_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDb, -690.69, -1229.06, 22.46);


  ++$.counter_blokes_alive_count1;


  $.guard9_count1.setHeading(33.0);


  $.guard9_count1.clearThreatSearch();


  $.guard9_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // sets it to infinate ammo


  $.guard9_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.guard9_count1.setStayInSamePlace(true /* TRUE */);

  // Guard10 2nd floor of the boat left hand side by the steps


  $.guard10_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDb, -689.14, -1242.03, 30.14);


  ++$.counter_blokes_alive_count1;


  $.guard10_count1.setHeading(100.0);


  $.guard10_count1.clearThreatSearch();


  $.guard10_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // sets it to infinate ammo


  $.guard10_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.guard10_count1.setStayInSamePlace(true /* TRUE */);

  // Guard11


  $.guard11_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -670.709, -1296.564, 18.940);


  ++$.counter_blokes_alive_count1;


  $.guard11_count1.setHeading(146.102);


  $.guard11_count1.clearThreatSearch();


  $.guard11_count1.giveWeapon(WEAPONTYPE_M4, 30000); // sets it to infinate ammo


  $.guard11_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.guard11_count1.setStayInSamePlace(true /* TRUE */);

  // waiting for the player1 to get the information


  while ($.flag_had_escape_message_count1 < 2) {
    await asyncWait(0);
    ++$.frame_counter_count1;
    if ($.frame_counter_count1 > 17) {
      $.frame_counter_count1 = 0;
    }
    if ($.flag_had_escape_message_count1 >= 1) {
      if (!($.player1.isInAngledArea3D(-716.95, -1218.89, 2.0, -697.73, -1266.50, 50.0, 60.0, false /* FALSE */)) && !($.player1.isInAngledArea3D(-697.73, -1266.50, 2.0, -616.29, -1430.59, 50.0, 60.0, false /* FALSE */))) {
        if ($.done_mini_cleanup_count1 == 0) {
          await mini_cleanup_count1();  // SCM GOSUB mini_cleanup_count1
        }


      }


    }
    $.game_time_count1 = Clock.GetGameTimer();
    if ($.flag_had_escape_message_count1 == 1) {
      if ($.player1.isInAngledArea3D(-716.95, -1218.89, 2.0, -697.73, -1266.50, 50.0, 60.0, false /* FALSE */) || $.player1.isInAngledArea3D(-697.73, -1266.50, 2.0, -616.29, -1430.59, 50.0, 60.0, false /* FALSE */)) {
        $.flag_had_escape_message_count1 = 1;
      }
      else {
        $.flag_had_escape_message_count1 = 2;
      }


    }


    const _res159 = $.player1.getCoordinates();
$.player_x_count1 = _res159.x;
$.player_y_count1 = _res159.y;
$.player_z_count1 = _res159.z;
    if ($.player1.isInAngledArea3D(-716.95, -1218.89, 2.0, -697.73, -1266.50, 50.0, 60.0, false /* FALSE */) || $.player1.isInAngledArea3D(-697.73, -1266.50, 2.0, -616.29, -1430.59, 50.0, 60.0, false /* FALSE */)) {
      $.flag_player_been_on_boat_count1 = 1;
    }
    if ($.flag_player_got_info_count1 == 0) {

      //	IF LOCATE_STOPPED_PLAYER_ON_FOOT_2D player1 -686.85 -1245.43 0.5 0.5 FALSE
      if ($.player1.locateOnFoot2D(-686.85, -1245.43, 0.5, 0.5, false /* FALSE */)) {
        $.sphere_count1.remove();
        $.radar_blip_target_count1.remove();
        $.flag_player_got_info_count1 = 1;
      }


    }
    if ($.flag_player_got_info_count1 == 1) {
      if ($.flag_had_mini_cut_count1 == 0) {
        await mini_cut_count1();  // SCM GOSUB mini_cut_count1
      }
      else {
        if ($.flag_had_escape_message_count1 == 0) {
          Text.PrintNow("CM1_6", 5000, 1); //"Escape from the boat to safety!"
          $.player1.alterWantedLevelNoDrop(2);
          $.radar_blip_escape_count1 = Blip.AddForCoord(-1052.579, -282.013, 10.279);
          if ($.alarm_raised_count1 == 0) {
            $.alarm_count1 = Sound.AddContinuous(-692.33, -1258.94, 15.25, SOUND_BANK_ALARM_LOOP);
            $.flag_all_guards_react_count1 = 1;
            $.alarm_raised_count1 = 1;
          }
          $.flag_had_escape_message_count1 = 1;


        }


      }


    }
    await guard_checks_count1();  // SCM GOSUB guard_checks_count1
    if ($.timer_shooting_started_count1 == 1) {
      TIMERA = 0;
      $.timer_shooting_started_count1 = 2;
    }
    if ($.timer_shooting_started_count1 == 2) {
      if (TIMERA >= 30000) {
        if ($.alarm_raised_count1 == 0) {
          $.alarm_count1 = Sound.AddContinuous(-692.33, -1258.94, 15.25, SOUND_BANK_ALARM_LOOP);
          $.flag_all_guards_react_count1 = 1;
          $.alarm_raised_count1 = 1;
        }


      }


    }

    // Extra guard creation stuff

    if ($.alarm_raised_count1 == 1) {
      if ($.flag_timer_started_count1 == 0) {
        TIMERB = 0;
        $.flag_timer_started_count1 = 1;
      }
      await alarm_guard_creation_count1();  // SCM GOSUB alarm_guard_creation_count1
      await guard_AI_count1();  // SCM GOSUB guard_AI_count1
      await alarm_guard_death_check_count1();  // SCM GOSUB alarm_guard_death_check_count1


    }


  }


  $.blob_flag = 1;


  while (!($.player1.locateStoppedAnyMeans3D(-1052.579, -282.013, 10.279, 3.0, 3.0, 3.0, $.blob_flag))) {
    await asyncWait(0);


  }


  $.radar_blip_escape_count1.remove();


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  World.ClearArea(-1063.095, -286.610, 14.163, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(-1063.095, -286.610, 14.163, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1062.265, -286.498, 13.616, 2 /* JUMP_CUT */);


  if ($.player1.isInAnyCar()) {
    $.car_count1 = $.player1.storeCarIsIn();
    $.scplayer.setObjLeaveCar($.car_count1);
    while ($.player1.isInCar($.car_count1)) {
      await asyncWait(0);
      if (Car.IsDead($.car_count1)) {
        // SCM GOTO → mission_counter1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_counter1_failed"); // fallback: would break linear control flow
      }


    }


  }


  $.scplayer.setObjGotoCoordOnFoot(-1061.465, -287.322);


  TIMERA = 0;
  TIMERB = 0;


  while (TIMERA < 4000) {
    await asyncWait(0);


  }


  Camera.RestoreJumpcut();
  $.scplayer.setIdle();
  $.player1.setCoordinates(-1059.214, -285.815, 10.22);
  $.player1.setHeading(289.0);
  Camera.SetInFrontOfPlayer();
  Hud.SwitchWidescreen(false /* OFF */);


  await asyncWait(300);


  $.player1.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);


  // SCM GOTO → mission_counter1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_counter1_passed"); // fallback: would break linear control flow
}



// ****************************************** Mission Failed *******************************


async function mission_counter1_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}





// *************************************** Mission Passed **********************************


async function mission_counter1_passed() {


  $.flag_counter_mission1_passed = 1;
  Stat.RegisterMissionPassed("CNT_1");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(2000);
  // START_NEW_SCRIPT counter_mission2_loop
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_counter1() {


  ONMISSION = 0;


  Path.RemoveRoute(0);
  Path.RemoveRoute(1);
  Path.RemoveRoute(2);
  Path.RemoveRoute(3);
  Path.RemoveRoute(4);
  Path.RemoveRoute(5);


  $.malibu_doors.delete();
  $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_close, 490.34, -77.017, 11.598);
  $.malibu_doors.dontRemove();
  $.flag_malibu_doors_closed = 1;
  $.flag_malibu_doors_open = 0;
  $.flag_player_on_counter_1 = 0;
  $.flag_player_in_malibu = 0;


  Shortcut.ClearTaxi();
  Streaming.MarkModelAsNoLongerNeeded(GDa);
  Streaming.MarkModelAsNoLongerNeeded(GDb);
  Streaming.MarkModelAsNoLongerNeeded(mp5lng);
  Streaming.MarkModelAsNoLongerNeeded(M4);
  $.radar_blip_escape_count1.remove();
  $.sphere_count1.remove();
  $.alarm_count1.remove();
  $.radar_blip_target_count1.remove();
  $.radar_blip_malibu_count1.remove();
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}




async function guard_checks_count1() {

  // guard1


  if ($.frame_counter_count1 == 0) {
    if ($.flag_guard1_dead_count1 == 0) {
      if (Char.IsDead($.guard1_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard1_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard1_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard1_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard1_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard1_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard1_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard1_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard1_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard1_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard1_count1.markAsNoLongerNeeded();
        $.flag_guard1_dead_count1 = 1;


      }
      else {

        //	GET_CHAR_HEALTH guard1_count1 guard1_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard1_count1.hasSpottedPlayer($.player1) || $.guard1_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard1_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard1_shouted_count1 = 1;
              }
              if ($.guard1_in_alert_position_count1 == 0 || $.guard1_alarm_run_count1 == 1) {
                if ($.flag_guard1_go_for_alert_count1 == 0) {
                  $.guard1_count1.followPath(-697.39, -1250.62, 15.24, 0.5, RUN);
                  $.flag_guard1_go_for_alert_count1 = 1;
                }
                if ($.flag_guard1_go_for_alert_count1 == 1) {
                  if ($.guard1_count1.locateOnFoot2D(-697.39, -1250.62, 1.0, 1.0, false /* FALSE */)) {
                    if ($.alarm_raised_count1 == 0) {
                      $.alarm_count1 = Sound.AddContinuous(-692.33, -1258.94, 15.25, SOUND_BANK_ALARM_LOOP);
                      $.alarm_raised_count1 = 1;
                    }
                    $.guard1_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
                    $.guard1_count1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.guard1_count1.setObjKillPlayerOnFoot($.player1);
                    $.flag_all_guards_react_count1 = 1;
                    $.guard1_in_alert_position_count1 = 1;
                    $.flag_guard1_go_for_alert_count1 = 2;
                  }


                }


              }


            }
            else {
              if ($.flag_guard1_kill_player_count1 == 0) {
                $.guard1_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
                $.guard1_count1.setObjKillPlayerOnFoot($.player1);
                $.flag_guard1_kill_player_count1 = 1;
              }

              //	IF timer_guards_react_count1 = 2
              $.guard1_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
              $.guard1_count1.setObjKillPlayerOnFoot($.player1);
              //	ENDIF


            }


          }


        }


      }


    }


  }

  // guard2


  if ($.frame_counter_count1 == 1) {
    if ($.flag_guard2_dead_count1 == 0) {
      if (Char.IsDead($.guard2_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard2_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard2_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard2_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard2_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard2_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard2_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard2_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard2_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard2_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard2_count1.markAsNoLongerNeeded();
        $.flag_guard2_dead_count1 = 1;
      }
      else {

        //GET_CHAR_HEALTH guard2_count1 guard2_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard2_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard2_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard2_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard2_shouted_count1 = 1;
              }


            }
            if ($.guard2_in_alert_state_count1 == 0) {
              $.guard2_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
              $.guard2_count1.setObjKillPlayerOnFoot($.player1);
              $.guard2_in_alert_state_count1 = 1;
            }

            //IF timer_guards_react_count1 = 2
            $.guard2_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
            $.guard2_count1.setObjKillPlayerOnFoot($.player1);
            //	ENDIF


          }


        }


      }


    }


  }

  // Guard 3


  if ($.frame_counter_count1 == 2) {
    if ($.flag_guard3_dead_count1 == 0) {
      if (Char.IsDead($.guard3_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard3_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard3_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard3_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard3_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard3_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard3_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard3_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard3_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard3_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard3_count1.markAsNoLongerNeeded();
        $.flag_guard3_dead_count1 = 1;


      }
      else {

        //GET_CHAR_HEALTH guard3_count1 guard3_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard3_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard3_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard3_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard3_shouted_count1 = 1;
              }


            }
            if ($.guard3_in_alert_state_count1 == 0) {
              $.guard3_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
              $.guard3_count1.setObjKillPlayerOnFoot($.player1);
              $.guard3_in_alert_state_count1 = 1;
            }

            //	IF timer_guards_react_count1 = 2
            $.guard3_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
            $.guard3_count1.setObjKillPlayerOnFoot($.player1);
            //	ENDIF


          }


        }


      }


    }


  }

  // Guard4


  if ($.frame_counter_count1 == 3) {
    if ($.flag_guard4_dead_count1 == 0) {
      if (Char.IsDead($.guard4_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard4_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard4_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard4_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard4_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard4_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard4_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard4_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard4_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard4_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard4_count1.markAsNoLongerNeeded();
        $.flag_guard4_dead_count1 = 1;
      }
      else {

        //	GET_CHAR_HEALTH guard4_count1 guard4_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard4_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard4_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard4_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard4_shouted_count1 = 1;
              }


            }
            if ($.guard4_in_alert_state_count1 == 0) {
              $.guard4_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
              $.guard4_count1.setObjKillPlayerOnFoot($.player1);
              $.guard4_in_alert_state_count1 = 1;
            }

            //	IF timer_guards_react_count1 = 2
            $.guard4_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
            $.guard4_count1.setObjKillPlayerOnFoot($.player1);
            //ENDIF


          }


        }


      }


    }


  }

  // Guard5


  if ($.frame_counter_count1 == 4) {
    if ($.flag_guard5_dead_count1 == 0) {
      if (Char.IsDead($.guard5_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard5_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard5_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard5_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard5_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard5_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard5_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard5_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard5_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard5_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard5_count1.markAsNoLongerNeeded();
        $.flag_guard5_dead_count1 = 1;
      }
      else {

        //GET_CHAR_HEALTH guard5_count1 guard5_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard5_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard5_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard5_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard5_shouted_count1 = 1;
              }


            }
            if ($.guard5_in_alert_state_count1 == 0) {
              $.guard5_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
              $.guard5_count1.setObjKillPlayerOnFoot($.player1);
              $.guard5_in_alert_state_count1 = 1;
            }

            //	IF timer_guards_react_count1 = 2
            $.guard5_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
            $.guard5_count1.setObjKillPlayerOnFoot($.player1);
            //	ENDIF


          }


        }


      }


    }


  }

  // guard6


  if ($.frame_counter_count1 == 5) {
    if ($.flag_guard6_dead_count1 == 0) {
      if (Char.IsDead($.guard6_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard6_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard6_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard6_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard6_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard6_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard6_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard6_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard6_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard6_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard6_count1.markAsNoLongerNeeded();
        $.flag_guard6_dead_count1 = 1;
      }
      else {

        //	GET_CHAR_HEALTH guard6_count1 guard6_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard6_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard6_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard6_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard6_shouted_count1 = 1;
              }


            }
            if ($.guard6_in_alert_state_count1 == 0) {
              $.guard6_count1.setObjKillPlayerOnFoot($.player1);
              $.guard6_in_alert_state_count1 = 1;
            }


          }


        }


      }


    }


  }

  // guard7


  if ($.frame_counter_count1 == 6) {
    if ($.flag_guard7_dead_count1 == 0) {
      if (Char.IsDead($.guard7_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard7_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard7_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard7_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard7_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard7_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard7_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard7_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard7_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard7_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard7_count1.markAsNoLongerNeeded();
        $.flag_guard7_dead_count1 = 1;
      }
      else {

        //GET_CHAR_HEALTH guard7_count1 guard7_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard7_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard7_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard7_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard7_shouted_count1 = 1;
              }


            }
            if ($.guard7_in_alert_state_count1 == 0) {
              $.guard7_count1.setObjKillPlayerOnFoot($.player1);
              $.guard7_in_alert_state_count1 = 1;
            }


          }


        }


      }


    }


  }

  // Guard8


  if ($.frame_counter_count1 == 7) {
    if ($.flag_guard8_dead_count1 == 0) {
      if (Char.IsDead($.guard8_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard8_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard8_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard8_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard8_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard8_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard8_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard8_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard8_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard8_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard8_count1.markAsNoLongerNeeded();
        $.flag_guard8_dead_count1 = 1;
      }
      else {

        //	GET_CHAR_HEALTH guard8_count1 guard8_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard8_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard8_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard8_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard8_shouted_count1 = 1;
              }


            }
            if ($.guard8_in_alert_state_count1 == 0) {
              $.guard8_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
              $.guard8_count1.setObjKillPlayerOnFoot($.player1);
              $.guard8_in_alert_state_count1 = 1;
            }

            //	IF timer_guards_react_count1 = 2
            $.guard8_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
            $.guard8_count1.setObjKillPlayerOnFoot($.player1);
            //	ENDIF


          }


        }


      }


    }


  }

  // Guard9


  if ($.frame_counter_count1 == 8) {
    if ($.flag_guard9_dead_count1 == 0) {
      if (Char.IsDead($.guard9_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard9_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard9_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard9_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard9_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard9_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard9_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard9_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard9_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard9_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard9_count1.markAsNoLongerNeeded();
        $.flag_guard9_dead_count1 = 1;
      }
      else {

        //GET_CHAR_HEALTH guard9_count1 guard9_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard9_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard9_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard9_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard9_shouted_count1 = 1;
              }


            }
            if ($.guard9_in_alert_state_count1 == 0) {
              $.guard9_count1.setObjKillPlayerOnFoot($.player1);
              $.guard9_in_alert_state_count1 = 1;
            }


          }


        }


      }


    }


  }

  // guard10


  if ($.frame_counter_count1 == 9) {
    if ($.flag_guard10_dead_count1 == 0) {
      if (Char.IsDead($.guard10_count1)) {
        --$.counter_blokes_alive_count1;
        if ($.timer_shooting_started_count1 == 0) {
          if ($.guard10_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard10_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard10_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard10_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard10_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard10_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard10_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard10_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
            $.timer_shooting_started_count1 = 1;
          }
          if ($.guard10_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
            $.timer_shooting_started_count1 = 1;
          }


        }
        $.guard10_count1.markAsNoLongerNeeded();
        $.flag_guard10_dead_count1 = 1;
      }
      else {

        //	GET_CHAR_HEALTH guard10_count1 guard10_health_count1

        if ($.flag_player_been_on_boat_count1 == 1) {
          if ($.guard10_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard10_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
            if ($.alarm_raised_count1 == 0) {
              if ($.flag_guard10_shouted_count1 == 0) {
                Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
                $.guard1_alarm_run_count1 = 1;
                $.flag_all_guards_react_count1 = 1;
                $.flag_guard10_shouted_count1 = 1;
              }


            }
            if ($.guard10_in_alert_state_count1 == 0) {
              $.guard10_count1.setObjKillPlayerOnFoot($.player1);
              $.guard10_in_alert_state_count1 = 1;
            }


          }


        }


      }


    }


  }

  // Guard11


  if ($.flag_guard11_dead_count1 == 0) {
    if (Char.IsDead($.guard11_count1)) {
      --$.counter_blokes_alive_count1;
      if ($.timer_shooting_started_count1 == 0) {
        if ($.guard11_count1.hasBeenDamagedByWeapon(11 /* WEAPONTYPE_GRENADE */) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_DETONATOR_GRENADE) || $.guard11_count1.hasBeenDamagedByWeapon(10 /* WEAPONTYPE_MOLOTOV */) || $.guard11_count1.hasBeenDamagedByWeapon(8 /* WEAPONTYPE_ROCKET */) || $.guard11_count1.hasBeenDamagedByWeapon(2 /* WEAPONTYPE_PISTOL */) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_PYTHON)) {
          $.timer_shooting_started_count1 = 1;
        }
        if ($.guard11_count1.hasBeenDamagedByWeapon(4 /* WEAPONTYPE_SHOTGUN */) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_SPAS12_SHOTGUN) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_STUBBY_SHOTGUN) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_RUGER) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_TEC9) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M4)) {
          $.timer_shooting_started_count1 = 1;
        }
        if ($.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MP5) || $.guard11_count1.hasBeenDamagedByWeapon(3 /* WEAPONTYPE_UZI */) || $.guard11_count1.hasBeenDamagedByWeapon(19 /* WEAPONTYPE_UZI_DRIVEBY */) || $.guard11_count1.hasBeenDamagedByWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_M60) || $.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_MINIGUN)) {
          $.timer_shooting_started_count1 = 1;
        }
        if ($.guard11_count1.hasBeenDamagedByWeapon(WEAPONTYPE_CHAINSAW)) {
          $.timer_shooting_started_count1 = 1;
        }


      }
      $.guard11_count1.markAsNoLongerNeeded();
      $.flag_guard11_dead_count1 = 1;


    }
    else {

      //	GET_CHAR_HEALTH guard11_count1 guard11_health_count1

      if ($.flag_player_been_on_boat_count1 == 1) {
        if ($.guard11_count1.canSeeDeadChar(PEDTYPE_GANG_SECURITY) || $.guard11_count1.hasSpottedPlayer($.player1) || $.alarm_raised_count1 == 1 || $.flag_all_guards_react_count1 == 1) {
          if ($.alarm_raised_count1 == 0) {
            if ($.flag_guard11_shouted_count1 == 0) {
              Text.PrintNow("CM1_3", 5000, 1); //"Intruder alert raise the alarm!"
              $.guard1_alarm_run_count1 = 1;
              $.flag_all_guards_react_count1 = 1;
              $.flag_guard11_shouted_count1 = 1;
            }


          }


        }


      }


    }


  }

  //IF timer_guards_react_count1 = 2
  //	timer_guards_react_count1 = 0
  //ENDIF
}


// If the alarm has been raised this will create guys from the ships interior


async function alarm_guard_creation_count1() {


  if ($.total_guards_created_count1 <= 40) {
    if ($.counter_blokes_alive_count1 < 6) {
      if ($.flag_created_bloke_in_area_count1 == 2) {
        TIMERB = 0;
        $.flag_created_bloke_in_area_count1 = 0;
      }
      if (!(World.IsAreaOccupied(-693.25, -1257.23, 14.0, -685.06, -1261.67, 17.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, false /* FALSE */))) {

        //IF flag_had_escape_message_count1 = 0
        //	number_to_act_at_count1 = 7000
        //ELSE
        $.number_to_act_at_count1 = 3000;
        //ENDIF

        if (TIMERB >= $.number_to_act_at_count1) {


          if ($.flag_created_bloke_in_area_count1 == 0) {
            $.guard_number_count1 = -1;
            if ($.flag_guard1_state_count1 == 0 || $.flag_guard1_state_count1 == 2) {
              World.ClearArea(-689.73, -1259.37, 15.24, 1.0, false /* FALSE */);
              $.created_guard1_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -689.73, -1259.37, 15.24);
              $.guard_number_count1 = $.created_guard1_count1;
              $.flag_guard1_state_count1 = 1;
            }
            else {
              if ($.flag_guard2_state_count1 == 0 || $.flag_guard2_state_count1 == 2) {
                World.ClearArea(-689.73, -1259.37, 15.24, 1.0, false /* FALSE */);
                $.created_guard2_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -689.73, -1259.37, 15.24);
                $.guard_number_count1 = $.created_guard2_count1;
                $.flag_guard2_state_count1 = 1;
              }
              else {
                if ($.flag_guard3_state_count1 == 0 || $.flag_guard3_state_count1 == 2) {
                  World.ClearArea(-689.73, -1259.37, 15.24, 1.0, false /* FALSE */);
                  $.created_guard3_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -689.73, -1259.37, 15.24);
                  $.guard_number_count1 = $.created_guard3_count1;
                  $.flag_guard3_state_count1 = 1;
                }
                else {
                  if ($.flag_guard4_state_count1 == 0 || $.flag_guard4_state_count1 == 2) {
                    World.ClearArea(-689.73, -1259.37, 15.24, 1.0, false /* FALSE */);
                    $.created_guard4_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -689.73, -1259.37, 15.24);
                    $.guard_number_count1 = $.created_guard4_count1;
                    $.flag_guard4_state_count1 = 1;
                  }
                  else {
                    if ($.flag_guard5_state_count1 == 0 || $.flag_guard5_state_count1 == 2) {
                      World.ClearArea(-689.73, -1259.37, 15.24, 1.0, false /* FALSE */);
                      $.created_guard5_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -689.73, -1259.37, 15.24);
                      $.guard_number_count1 = $.created_guard5_count1;
                      $.flag_guard5_state_count1 = 1;
                    }
                    else {
                      if ($.flag_guard6_state_count1 == 0 || $.flag_guard6_state_count1 == 2) {
                        World.ClearArea(-689.73, -1259.37, 15.24, 1.0, false /* FALSE */);
                        $.created_guard6_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -689.73, -1259.37, 15.24);
                        $.guard_number_count1 = $.created_guard6_count1;
                        $.flag_guard6_state_count1 = 1;
                      }
                      else {
                        if ($.flag_guard7_state_count1 == 0 || $.flag_guard7_state_count1 == 2) {
                          World.ClearArea(-689.73, -1259.37, 15.24, 1.0, false /* FALSE */);
                          $.created_guard7_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -689.73, -1259.37, 15.24);
                          $.guard_number_count1 = $.created_guard7_count1;
                          $.flag_guard7_state_count1 = 1;
                        }
                        else {
                          if ($.flag_guard8_state_count1 == 0 || $.flag_guard8_state_count1 == 2) {
                            World.ClearArea(-689.73, -1259.37, 15.24, 1.0, false /* FALSE */);
                            $.created_guard8_count1 = Char.Create(PEDTYPE_GANG_SECURITY, GDa, -689.73, -1259.37, 15.24);
                            $.guard_number_count1 = $.created_guard8_count1;
                            $.flag_guard8_state_count1 = 1;
                          }


                        }


                      }


                    }


                  }


                }


              }


            }
            if (!(Char.IsDead($.guard_number_count1))) {
              if (!($.guard_number_count1 == -1)) {
                $.guard_number_count1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                $.guard_number_count1.setHeading(204.71);
                $.guard_number_count1.setObjRunToCoord(-688.40, -1262.07);
                ++$.counter_blokes_alive_count1;
                ++$.total_guards_created_count1;
                $.flag_created_bloke_in_area_count1 = 1;
              }


            }


          }


        }


      }


    }


  }
}


// Checks to see if the created guards are in the correct area and gives them AI


async function guard_AI_count1() {


  if ($.flag_created_bloke_in_area_count1 == 1) {
    if (!(Char.IsDead($.guard_number_count1))) {
      if ($.guard_number_count1.locateOnFoot2D(-688.40, -1262.07, 1.0, 1.0, false /* FALSE */)) {
        $.guard_number_count1.giveWeapon(WEAPONTYPE_MP5, 30000); // Set to infinate ammo
        $.guard_number_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.guard_number_count1.setObjKillPlayerOnFoot($.player1);
        $.flag_created_bloke_in_area_count1 = 2;
      }


    }
    else {
      $.flag_created_bloke_in_area_count1 = 2;
    }


  }
}


// Guard death checks


async function alarm_guard_death_check_count1() {


  if ($.frame_counter_count1 == 10) {
    if ($.flag_guard1_state_count1 == 1) {
      if (Char.IsDead($.created_guard1_count1)) {
        $.created_guard1_count1.removeElegantly();
        --$.counter_blokes_alive_count1;
        $.flag_guard1_state_count1 = 2;
      }
      else {

        //	IF timer_alarm_guards_react_count1 = 2
        $.created_guard1_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.created_guard1_count1.setObjKillPlayerOnFoot($.player1);
        //	ENDIF


      }


    }


  }


  if ($.frame_counter_count1 == 11) {
    if ($.flag_guard2_state_count1 == 1) {
      if (Char.IsDead($.created_guard2_count1)) {
        $.created_guard2_count1.removeElegantly();
        --$.counter_blokes_alive_count1;
        $.flag_guard2_state_count1 = 2;
      }
      else {

        //	IF timer_alarm_guards_react_count1 = 2
        $.created_guard2_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.created_guard2_count1.setObjKillPlayerOnFoot($.player1);
        //ENDIF


      }


    }


  }


  if ($.frame_counter_count1 == 12) {
    if ($.flag_guard3_state_count1 == 1) {
      if (Char.IsDead($.created_guard3_count1)) {
        $.created_guard3_count1.removeElegantly();
        --$.counter_blokes_alive_count1;
        $.flag_guard3_state_count1 = 2;
      }
      else {

        //	IF timer_alarm_guards_react_count1 = 2
        $.created_guard3_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.created_guard3_count1.setObjKillPlayerOnFoot($.player1);
        //	ENDIF


      }


    }


  }


  if ($.frame_counter_count1 == 13) {
    if ($.flag_guard4_state_count1 == 1) {
      if (Char.IsDead($.created_guard4_count1)) {
        $.created_guard4_count1.removeElegantly();
        --$.counter_blokes_alive_count1;
        $.flag_guard4_state_count1 = 2;
      }
      else {

        //	IF timer_alarm_guards_react_count1 = 2
        $.created_guard4_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.created_guard4_count1.setObjKillPlayerOnFoot($.player1);
        //	ENDIF


      }


    }


  }


  if ($.frame_counter_count1 == 14) {
    if ($.flag_guard5_state_count1 == 1) {
      if (Char.IsDead($.created_guard5_count1)) {
        $.created_guard5_count1.removeElegantly();
        --$.counter_blokes_alive_count1;
        $.flag_guard5_state_count1 = 2;
      }
      else {

        //	IF timer_alarm_guards_react_count1 = 2
        $.created_guard5_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.created_guard5_count1.setObjKillPlayerOnFoot($.player1);
        //	ENDIF


      }


    }


  }


  if ($.frame_counter_count1 == 15) {
    if ($.flag_guard6_state_count1 == 1) {
      if (Char.IsDead($.created_guard6_count1)) {
        $.created_guard6_count1.removeElegantly();
        --$.counter_blokes_alive_count1;
        $.flag_guard6_state_count1 = 2;
      }
      else {

        //	IF timer_alarm_guards_react_count1 = 2
        $.created_guard6_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.created_guard6_count1.setObjKillPlayerOnFoot($.player1);
        //	ENDIF


      }


    }


  }


  if ($.frame_counter_count1 == 16) {
    if ($.flag_guard7_state_count1 == 1) {
      if (Char.IsDead($.created_guard7_count1)) {
        $.created_guard7_count1.removeElegantly();
        --$.counter_blokes_alive_count1;
        $.flag_guard7_state_count1 = 2;
      }
      else {

        //	IF timer_alarm_guards_react_count1 = 2
        $.created_guard7_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.created_guard7_count1.setObjKillPlayerOnFoot($.player1);
        //	ENDIF


      }


    }


  }


  if ($.frame_counter_count1 == 17) {
    if ($.flag_guard8_state_count1 == 1) {
      if (Char.IsDead($.created_guard8_count1)) {
        $.created_guard8_count1.removeElegantly();
        --$.counter_blokes_alive_count1;
        $.flag_guard8_state_count1 = 2;
      }
      else {

        //	IF timer_alarm_guards_react_count1 = 2
        $.created_guard8_count1.followPath($.player_x_count1, $.player_y_count1, $.player_z_count1, 0.5, RUN);
        $.created_guard8_count1.setObjKillPlayerOnFoot($.player1);
        //	ENDIF


      }


    }


  }

  //IF timer_alarm_guards_react_count1 = 2
  //	timer_alarm_guards_react_count1 = 0
  //ENDIF
}


// Mini Cutscene with player entering the cabin


async function mini_cut_count1() {


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  $.scplayer = $.player1.getChar();


  World.ClearArea(-684.90, -1248.98, 30.14, 2.0, false /* FALSE */);
  World.ClearArea(-686.85, -1245.43, 30.14, 2.0, false /* FALSE */);


  Camera.SetFixedPosition(-691.09, -1242.906, 31.45, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-690.182, -1243.30, 31.46, 2 /* JUMP_CUT */);


  $.scplayer.setObjGotoCoordOnFoot(-684.90, -1248.98);


  TIMERA = 0;


  while (!($.scplayer.locateOnFoot2D(-684.90, -1248.98, 0.5, 0.5, false /* FALSE */))) {
    await asyncWait(0);
    $.game_time_count1 = Clock.GetGameTimer();
    if ($.flag_all_guards_react_count1 == 1) {
      if ($.timer_guards_react_count1 == 0) {
        $.timer_started_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_guards_react_count1 == 1) {
        $.time_to_act_count1 = $.game_time_count1 - $.timer_started_count1;
        if ($.time_to_act_count1 >= 1000) {
          $.timer_guards_react_count1 = 2;
        }


      }
      if ($.timer_alarm_guards_react_count1 == 0) {
        $.timer_started_alarm_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_alarm_guards_react_count1 == 1) {
        $.time_to_act_alarm_count1 = $.game_time_count1 - $.timer_started_alarm_count1;
        if ($.time_to_act_alarm_count1 >= 1000) {
          $.timer_alarm_guards_react_count1 = 2;
        }


      }


    }
    if (TIMERA >= 6000) {
      if (!($.scplayer.locateOnFoot2D(-684.90, -1248.98, 0.5, 0.5, false /* FALSE */))) {
        $.scplayer.setCoordinates(-684.90, -1248.98, 30.14);
      }


    }
    await guard_checks_count1();  // SCM GOSUB guard_checks_count1
    if ($.alarm_raised_count1 == 1) {
      if ($.flag_timer_started_count1 == 0) {
        TIMERB = 0;
        $.flag_timer_started_count1 = 1;
      }
      await alarm_guard_creation_count1();  // SCM GOSUB alarm_guard_creation_count1
      await guard_AI_count1();  // SCM GOSUB guard_AI_count1
      await alarm_guard_death_check_count1();  // SCM GOSUB alarm_guard_death_check_count1


    }


  }


  Audio.PlayMissionAudio(2); // ( CNT1_1 ) NOT THE FACE


  Text.PrintNow("CNT1_1", 5000, 1); //"Not the Face Arg!!"


  Audio.LoadMissionAudio(1, "CNT1_2" as any); //"Ok, I talk! I talk!"


  while (!(Audio.HasMissionAudioFinished(2))) {
    //OR NOT HAS_MISSION_AUDIO_LOADED 1

    await asyncWait(0);
    $.game_time_count1 = Clock.GetGameTimer();
    if ($.flag_all_guards_react_count1 == 1) {
      if ($.timer_guards_react_count1 == 0) {
        $.timer_started_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_guards_react_count1 == 1) {
        $.time_to_act_count1 = $.game_time_count1 - $.timer_started_count1;
        if ($.time_to_act_count1 >= 1000) {
          $.timer_guards_react_count1 = 2;
        }


      }
      if ($.timer_alarm_guards_react_count1 == 0) {
        $.timer_started_alarm_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_alarm_guards_react_count1 == 1) {
        $.time_to_act_alarm_count1 = $.game_time_count1 - $.timer_started_alarm_count1;
        if ($.time_to_act_alarm_count1 >= 1000) {
          $.timer_alarm_guards_react_count1 = 2;
        }


      }


    }
    await guard_checks_count1();  // SCM GOSUB guard_checks_count1
    if ($.alarm_raised_count1 == 1) {
      if ($.flag_timer_started_count1 == 0) {
        TIMERB = 0;
        $.flag_timer_started_count1 = 1;
      }
      await alarm_guard_creation_count1();  // SCM GOSUB alarm_guard_creation_count1
      await guard_AI_count1();  // SCM GOSUB guard_AI_count1
      await alarm_guard_death_check_count1();  // SCM GOSUB alarm_guard_death_check_count1


    }


  }


  Text.ClearThisPrint("CNT1_1");


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
    $.game_time_count1 = Clock.GetGameTimer();
    if ($.flag_all_guards_react_count1 == 1) {
      if ($.timer_guards_react_count1 == 0) {
        $.timer_started_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_guards_react_count1 == 1) {
        $.time_to_act_count1 = $.game_time_count1 - $.timer_started_count1;
        if ($.time_to_act_count1 >= 1000) {
          $.timer_guards_react_count1 = 2;
        }


      }
      if ($.timer_alarm_guards_react_count1 == 0) {
        $.timer_started_alarm_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_alarm_guards_react_count1 == 1) {
        $.time_to_act_alarm_count1 = $.game_time_count1 - $.timer_started_alarm_count1;
        if ($.time_to_act_alarm_count1 >= 1000) {
          $.timer_alarm_guards_react_count1 = 2;
        }


      }


    }
    await guard_checks_count1();  // SCM GOSUB guard_checks_count1
    if ($.alarm_raised_count1 == 1) {
      if ($.flag_timer_started_count1 == 0) {
        TIMERB = 0;
        $.flag_timer_started_count1 = 1;
      }
      await alarm_guard_creation_count1();  // SCM GOSUB alarm_guard_creation_count1
      await guard_AI_count1();  // SCM GOSUB guard_AI_count1
      await alarm_guard_death_check_count1();  // SCM GOSUB alarm_guard_death_check_count1


    }


  }


  Audio.PlayMissionAudio(1); // ( CNT1_2 )


  Text.PrintNow("CNT1_2", 5000, 1); //"Okay okay I will give you the info!"


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    $.game_time_count1 = Clock.GetGameTimer();
    if ($.flag_all_guards_react_count1 == 1) {
      if ($.timer_guards_react_count1 == 0) {
        $.timer_started_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_guards_react_count1 == 1) {
        $.time_to_act_count1 = $.game_time_count1 - $.timer_started_count1;
        if ($.time_to_act_count1 >= 1000) {
          $.timer_guards_react_count1 = 2;
        }


      }
      if ($.timer_alarm_guards_react_count1 == 0) {
        $.timer_started_alarm_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_alarm_guards_react_count1 == 1) {
        $.time_to_act_alarm_count1 = $.game_time_count1 - $.timer_started_alarm_count1;
        if ($.time_to_act_alarm_count1 >= 1000) {
          $.timer_alarm_guards_react_count1 = 2;
        }


      }


    }
    await guard_checks_count1();  // SCM GOSUB guard_checks_count1
    if ($.alarm_raised_count1 == 1) {
      if ($.flag_timer_started_count1 == 0) {
        TIMERB = 0;
        $.flag_timer_started_count1 = 1;
      }
      await alarm_guard_creation_count1();  // SCM GOSUB alarm_guard_creation_count1
      await guard_AI_count1();  // SCM GOSUB guard_AI_count1
      await alarm_guard_death_check_count1();  // SCM GOSUB alarm_guard_death_check_count1


    }


  }


  Text.ClearThisPrint("CNT1_2");


  $.scplayer.setCoordinates(-685.59, -1247.87, 30.14);


  $.scplayer.setHeading(32.24);


  World.ClearArea(-686.85, -1245.43, 30.14, 2.0, false /* FALSE */);
  World.ClearArea(-684.90, -1248.98, 30.14, 2.0, false /* FALSE */);


  $.scplayer.setObjGotoCoordOnFoot(-686.85, -1245.43);


  TIMERB = 0;


  while (!($.scplayer.locateOnFoot2D(-686.85, -1245.43, 0.5, 0.5, false /* FALSE */))) {
    await asyncWait(0);
    $.game_time_count1 = Clock.GetGameTimer();
    if ($.flag_all_guards_react_count1 == 1) {
      if ($.timer_guards_react_count1 == 0) {
        $.timer_started_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_guards_react_count1 == 1) {
        $.time_to_act_count1 = $.game_time_count1 - $.timer_started_count1;
        if ($.time_to_act_count1 >= 1000) {
          $.timer_guards_react_count1 = 2;
        }


      }
      if ($.timer_alarm_guards_react_count1 == 0) {
        $.timer_started_alarm_count1 = $.game_time_count1;
        $.timer_guards_react_count1 = 1;
      }
      if ($.timer_alarm_guards_react_count1 == 1) {
        $.time_to_act_alarm_count1 = $.game_time_count1 - $.timer_started_alarm_count1;
        if ($.time_to_act_alarm_count1 >= 1000) {
          $.timer_alarm_guards_react_count1 = 2;
        }


      }


    }
    if (TIMERB >= 4000) {
      if (!($.scplayer.locateOnFoot2D(-686.85, -1245.43, 0.5, 0.5, false /* FALSE */))) {
        $.scplayer.setCoordinates(-686.85, -1245.43, 30.14);
      }


    }
    await guard_checks_count1();  // SCM GOSUB guard_checks_count1
    if ($.alarm_raised_count1 == 1) {
      if ($.flag_timer_started_count1 == 0) {
        TIMERB = 0;
        $.flag_timer_started_count1 = 1;
      }
      await alarm_guard_creation_count1();  // SCM GOSUB alarm_guard_creation_count1
      await guard_AI_count1();  // SCM GOSUB guard_AI_count1
      await alarm_guard_death_check_count1();  // SCM GOSUB alarm_guard_death_check_count1


    }


  }


  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Camera.SetInFrontOfPlayer();
  Camera.RestoreJumpcut();
  $.flag_had_mini_cut_count1 = 1;
}


// Gets rid off all the guys on the boat


async function mini_cleanup_count1() {


  $.alarm_count1.remove();


  $.guard1_count1.markAsNoLongerNeeded();
  $.guard2_count1.markAsNoLongerNeeded();
  $.guard3_count1.markAsNoLongerNeeded();
  $.guard4_count1.markAsNoLongerNeeded();
  $.guard5_count1.markAsNoLongerNeeded();
  $.guard6_count1.markAsNoLongerNeeded();
  $.guard7_count1.markAsNoLongerNeeded();
  $.guard8_count1.markAsNoLongerNeeded();
  $.guard9_count1.markAsNoLongerNeeded();
  $.guard10_count1.markAsNoLongerNeeded();
  $.guard11_count1.markAsNoLongerNeeded();


  $.created_guard1_count1.markAsNoLongerNeeded();
  $.created_guard2_count1.markAsNoLongerNeeded();
  $.created_guard3_count1.markAsNoLongerNeeded();
  $.created_guard4_count1.markAsNoLongerNeeded();
  $.created_guard5_count1.markAsNoLongerNeeded();
  $.created_guard6_count1.markAsNoLongerNeeded();
  $.created_guard7_count1.markAsNoLongerNeeded();
  $.created_guard8_count1.markAsNoLongerNeeded();


  $.done_mini_cleanup_count1 = 1;
}

export async function count1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // ******************************* Counterfeiting Mission 1 ********************************
  // ********************************* Get The Information ***********************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME count1

  // Mission start stuff


  await mission_start_counter1();  // SCM GOSUB mission_start_counter1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_counter1_failed();  // SCM GOSUB mission_counter1_failed
  }


  await mission_cleanup_counter1();  // SCM GOSUB mission_cleanup_counter1


  // MissionBoundary


  // Variables for mission

  // target area


  // VAR_INT radar_blip_target_count1


  // VAR_INT flag_player_got_info_count1

  // guard1


  // VAR_INT flag_guard1_shouted_count1


  // VAR_INT guard1_count1


  // VAR_INT flag_guard1_dead_count1


  // VAR_INT guard1_alarm_run_count1


  // VAR_INT guard1_in_alert_position_count1


  // VAR_INT flag_guard1_go_for_alert_count1


  // VAR_INT flag_guard1_kill_player_count1

  // Guard2


  // VAR_INT guard2_count1


  // VAR_INT guard2_in_alert_state_count1


  // VAR_INT flag_guard2_dead_count1


  // VAR_INT flag_guard2_shouted_count1

  // Guard3


  // VAR_INT guard3_count1


  // VAR_INT guard3_in_alert_state_count1


  // VAR_INT flag_guard3_dead_count1


  // VAR_INT flag_guard3_shouted_count1

  // Guard4


  // VAR_INT guard4_count1


  // VAR_INT guard4_in_alert_state_count1


  // VAR_INT flag_guard4_dead_count1


  // VAR_INT flag_guard4_shouted_count1

  // Guard5


  // VAR_INT guard5_count1


  // VAR_INT guard5_in_alert_state_count1


  // VAR_INT flag_guard5_dead_count1


  // VAR_INT flag_guard5_shouted_count1

  // Guard6


  // VAR_INT guard6_count1


  // VAR_INT guard6_in_alert_state_count1


  // VAR_INT flag_guard6_dead_count1


  // VAR_INT flag_guard6_shouted_count1

  // Guard7


  // VAR_INT guard7_count1


  // VAR_INT guard7_in_alert_state_count1


  // VAR_INT flag_guard7_dead_count1


  // VAR_INT flag_guard7_shouted_count1

  // Guard8


  // VAR_INT guard8_count1


  // VAR_INT guard8_in_alert_state_count1


  // VAR_INT flag_guard8_dead_count1


  // VAR_INT flag_guard8_shouted_count1

  // guard9


  // VAR_INT guard9_count1


  // VAR_INT guard9_in_alert_state_count1


  // VAR_INT flag_guard9_dead_count1


  // VAR_INT flag_guard9_shouted_count1

  // guard10


  // VAR_INT guard10_count1


  // VAR_INT guard10_in_alert_state_count1


  // VAR_INT flag_guard10_dead_count1


  // VAR_INT flag_guard10_shouted_count1

  // Guard 11


  // VAR_INT guard11_count1


  // VAR_INT flag_guard11_dead_count1


  // VAR_INT flag_guard11_shouted_count1

  // General stuff


  // VAR_INT alarm_raised_count1


  // VAR_INT alarm_count1


  // VAR_INT flag_player_been_on_boat_count1


  // VAR_FLOAT player_x_count1


  // VAR_FLOAT player_y_count1


  // VAR_FLOAT player_z_count1


  // VAR_INT flag_all_guards_react_count1


  // VAR_INT timer_shooting_started_count1

  // Club Stuff

  // VAR_INT radar_blip_malibu_count1

  // Guard alarm creation ( If alarm raised this will create some extra guards to get the player )


  // VAR_INT total_guards_created_count1


  // VAR_INT counter_blokes_alive_count1


  // VAR_INT flag_created_bloke_in_area_count1


  // VAR_INT guard_number_count1

  // created guard1


  // VAR_INT created_guard1_count1


  // VAR_INT flag_guard1_state_count1

  // created guard2


  // VAR_INT created_guard2_count1


  // VAR_INT flag_guard2_state_count1

  // created guard3


  // VAR_INT created_guard3_count1


  // VAR_INT flag_guard3_state_count1

  // created guard4


  // VAR_INT created_guard4_count1


  // VAR_INT flag_guard4_state_count1

  // created guard5


  // VAR_INT created_guard5_count1


  // VAR_INT flag_guard5_state_count1

  // created guard6


  // VAR_INT created_guard6_count1


  // VAR_INT flag_guard6_state_count1

  // created guard7


  // VAR_INT created_guard7_count1


  // VAR_INT flag_guard7_state_count1

  // created guard8


  // VAR_INT created_guard8_count1


  // VAR_INT flag_guard8_state_count1

  // Starts the timers for the guard creation stuff


  // VAR_INT flag_timer_started_count1

  // General Stuff


  // VAR_INT flag_had_mini_cut_count1


  // VAR_INT flag_had_escape_message_count1


  // VAR_INT sphere_count1


  // VAR_INT radar_blip_escape_count1

  // Timer stuff


  // VAR_INT game_time_count1


  // VAR_INT timer_started_count1


  // VAR_INT time_to_act_count1


  // VAR_INT timer_guards_react_count1


  // VAR_INT timer_alarm_guards_react_count1


  // VAR_INT time_to_act_alarm_count1


  // VAR_INT timer_started_alarm_count1

  // Frame counter stuff


  // VAR_INT frame_counter_count1

  // Car stuff for mini-cut at end


  // VAR_INT car_count1


  // VAR_INT car2_count1

  // Extra quick guard creation if player has got info


  // VAR_INT number_to_act_at_count1


  // VAR_INT done_mini_cleanup_count1

  // ****************************************Mission Start************************************


}
