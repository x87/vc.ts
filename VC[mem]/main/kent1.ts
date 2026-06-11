// Generated from main/kent1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_kent1() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;

  // player


  $.player_x = 0.0;


  $.player_y = 0.0;


  $.player_z = 0.0;

  // buddy


  flag_had_buddy_message_kent1 = 0;


  $.flag_player_been_spotted_kent1 = 0;


  flag_buddy_joined_player = 0;


  flag_buddy_vulnerable_kent1 = 0;


  flag_buddy_home_kent1 = 0;


  flag_buddy_dead_kent1 = 0;


  flag_buddy_in_group_kent1 = 0;

  //buddy_x_kent1 = -1310.294

  //buddy_y_kent1 = 165.730

  //buddy_z_kent1 = 10.59


  buddy_x_kent1 = -1310.325;


  buddy_y_kent1 = 165.808;


  buddy_z_kent1 = 10.59;


  buddy_heading_kent1 = 280.723;


  $.buddy_life_guage_kent1 = 100;


  buddys_health_kent1 = 100;

  // executioner


  $.executioner_x_kent1 = -1308.510;


  $.executioner_y_kent1 = 162.002;


  $.executioner_z_kent1 = 10.56;


  $.flag_executioner_dead_kent1 = 0;


  $.flag_executioner_chase_kent1 = 0;

  // Guard1


  $.flag_guard1_dead_kent1 = 0;

  //flag_guard1_chase_kent1 = 0


  $.guard1_x_kent1 = -1256.36;


  $.guard1_y_kent1 = 2.86;


  $.guard1_z_kent1 = 10.45;


  $.route0_point1_x_kent1 = -1255.89;


  $.route0_point1_y_kent1 = 12.26;


  $.route0_point1_z_kent1 = 10.45;


  $.route0_point2_x_kent1 = -1255.72;


  $.route0_point2_y_kent1 = 19.11;


  $.route0_point2_z_kent1 = 10.45;


  $.route0_point3_x_kent1 = -1255.89;


  $.route0_point3_y_kent1 = 12.26;


  $.route0_point3_z_kent1 = 10.45;


  $.route0_point4_x_kent1 = -1256.36;


  $.route0_point4_y_kent1 = 2.86;


  $.route0_point4_z_kent1 = 10.45;

  // Guard2


  $.flag_guard2_dead_kent1 = 0;


  $.flag_guard2_chase_kent1 = 0;


  $.guard2_heading_kent1 = 180.0;


  $.guard2_x_kent1 = -1310.29;


  $.guard2_y_kent1 = 155.36;


  $.guard2_z_kent1 = 10.56;

  // Guard3


  $.flag_guard3_dead_kent1 = 0;


  $.flag_guard3_chase_kent1 = 0;


  $.guard3_heading_kent1 = 180.0;


  $.guard3_x_kent1 = -1303.69;


  $.guard3_y_kent1 = 155.36;


  $.guard3_z_kent1 = 10.56;

  // Guard4


  $.flag_guard4_dead_kent1 = 0;


  $.flag_guard4_chase_kent1 = 0;


  $.guard4_x_kent1 = -1259.00;


  $.guard4_y_kent1 = 104.09;


  $.guard4_z_kent1 = 10.45;


  $.route1_point1_x_kent1 = -1260.03;


  $.route1_point1_y_kent1 = 95.52;


  $.route1_point1_z_kent1 = 10.45;


  $.route1_point2_x_kent1 = -1260.07;


  $.route1_point2_y_kent1 = 80.40;


  $.route1_point2_z_kent1 = 10.45;


  $.route1_point3_x_kent1 = -1259.79;


  $.route1_point3_y_kent1 = 60.42;


  $.route1_point3_z_kent1 = 10.26;


  $.route1_point4_x_kent1 = -1259.66;


  $.route1_point4_y_kent1 = 49.85;


  $.route1_point4_z_kent1 = 10.21;


  $.route1_point5_x_kent1 = -1259.79;


  $.route1_point5_y_kent1 = 60.42;


  $.route1_point5_z_kent1 = 10.26;


  $.route1_point6_x_kent1 = -1260.07;


  $.route1_point6_y_kent1 = 80.40;


  $.route1_point6_z_kent1 = 10.45;


  $.route1_point7_x_kent1 = -1260.03;


  $.route1_point7_y_kent1 = 95.52;


  $.route1_point7_z_kent1 = 10.45;


  $.route1_point8_x_kent1 = -1259.00;


  $.route1_point8_y_kent1 = 104.09;


  $.route1_point8_z_kent1 = 10.45;

  // guard 6


  $.flag_guard6_dead_kent1 = 0;


  $.flag_guard6_chase_kent1 = 0;


  $.guard6_x_kent1 = -1302.17;


  $.guard6_y_kent1 = 82.09;


  $.guard6_z_kent1 = 10.46;


  $.route2_point1_x_kent1 = -1303.89;


  $.route2_point1_y_kent1 = 75.11;


  $.route2_point1_z_kent1 = 10.46;


  $.route2_point2_x_kent1 = -1306.49;


  $.route2_point2_y_kent1 = 61.84;


  $.route2_point2_z_kent1 = 10.46;


  $.route2_point3_x_kent1 = -1302.17;


  $.route2_point3_y_kent1 = 82.09;


  $.route2_point3_z_kent1 = 10.46;

  // Guard 7


  $.flag_guard7_dead_kent1 = 0;

  // Guard 8


  $.flag_guard8_dead_kent1 = 0;


  $.flag_guard8_chase_kent1 = 0;

  // Guard 9


  $.flag_guard9_dead_kent1 = 0;


  $.flag_guard9_chase_kent1 = 0;

  // guard10


  $.flag_guard10_dead_kent1 = 0;


  $.flag_guard10_chase_kent1 = 0;

  // guard11


  $.flag_guard11_dead_kent1 = 0;


  $.flag_guard11_chase_kent1 = 0;

  // guard12


  $.flag_guard12_dead_kent1 = 0;


  $.flag_guard12_chase_kent1 = 0;

  // guard13


  $.flag_guard13_dead_kent1 = 0;

  // guard14


  $.flag_guard14_dead_kent1 = 0;

  // guard15


  $.flag_guard15_dead_kent1 = 0;

  // guard16


  $.flag_guard16_dead_kent1 = 0;

  // general


  $.home_x_kent1 = -823.450;


  $.home_y_kent1 = 1162.130;


  $.home_z_kent1 = 10.06;

  // Ambush patrol stuff


  $.flag_create_2nd_guards_kent1 = 0;


  $.flag_created_ambush_kent1 = 0;


  $.flag_ambush_guard3_dead_kent1 = 0;


  $.ambush_guard3_do_stuff_kent1 = 0;


  $.flag_ambush_guard4_dead_kent1 = 0;


  $.ambush_guard4_do_stuff_kent1 = 0;


  $.flag_ambush_guard5_dead_kent1 = 0;


  $.ambush_guard5_do_stuff_kent1 = 0;


  $.flag_ambush_guard6_dead_kent1 = 0;


  $.ambush_guard6_do_stuff_kent1 = 0;

  // world collison stuff


  $.flag_executioner_got_ai_kent1 = 0;


  $.flag_buddy_got_ai_kent1 = 0;


  $.flag_guard1_got_ai_kent1 = 0;


  $.flag_guard2_got_ai_kent1 = 0;


  $.flag_guard3_got_ai_kent1 = 0;


  $.flag_guard4_got_ai_kent1 = 0;


  $.flag_guard6_got_ai_kent1 = 0;


  $.flag_guard7_got_ai_kent1 = 0;


  $.flag_guard8_got_ai_kent1 = 0;


  $.flag_guard9_got_ai_kent1 = 0;


  $.flag_guard10_got_ai_kent1 = 0;


  $.flag_guard11_got_ai_kent1 = 0;


  $.flag_guard12_got_ai_kent1 = 0;


  $.counter_guards_got_ai_kent1 = 0;

  // mini cutscene stuff


  $.flag_player_audio_kent1 = 0;


  $.flag_buddy_free_kent1 = 0;


  $.flag_mini_cut1_over_kent1 = 0;


  $.flag_ambush_guard3_in_car_kent1 = 0;


  $.flag_ambush_guard4_in_car_kent1 = 0;


  $.flag_ambush_guard5_in_car_kent1 = 0;


  $.flag_ambush_guard6_in_car_kent1 = 0;


  $.stored_current_weapon_kent1 = 0;

  // stuff to help compiler


  $.guard3_car_mission_kent1 = 0;


  $.guard4_car_mission_kent1 = 0;


  $.guard5_car_mission_kent1 = 0;


  $.guard6_car_mission_kent1 = 0;

  // chase message stuff


  $.chase_message_kent1 = 0;

  // Frame counter to make guards do stuff


  $.frame_counter_kent1 = 0;


  $.flag_cheat_blip_on_kent1 = 0;

  // New warping car stuff


  $.car3_x_kent1 = 0.0;


  $.car3_y_kent1 = 0.0;


  $.car3_z_kent1 = 0.0;


  $.abguard3_x_kent1 = 0.0;


  $.abguard3_y_kent1 = 0.0;


  $.abguard3_z_kent1 = 0.0;


  $.car4_x_kent1 = 0.0;


  $.car4_y_kent1 = 0.0;


  $.car4_z_kent1 = 0.0;


  $.abguard4_x_kent1 = 0.0;


  $.abguard4_y_kent1 = 0.0;


  $.abguard4_z_kent1 = 0.0;


  $.car5_x_kent1 = 0.0;


  $.car5_y_kent1 = 0.0;


  $.car5_z_kent1 = 0.0;


  $.abguard5_x_kent1 = 0.0;


  $.abguard5_y_kent1 = 0.0;


  $.abguard5_z_kent1 = 0.0;


  $.car6_x_kent1 = 0.0;


  $.car6_y_kent1 = 0.0;


  $.car6_z_kent1 = 0.0;


  $.abguard6_x_kent1 = 0.0;


  $.abguard6_y_kent1 = 0.0;


  $.abguard6_z_kent1 = 0.0;

  // second wave counter


  $.counter_no_of_guys_dead_kent1 = 0;


  $.flag_second_wave_created_kent1 = 0;


  await asyncWait(0);


  Text.LoadMissionText("KENT1");


  Shortcut.SetDropoffPointForMission(512.591, -74.900, 9.573, 189.24);

  // ****************************************START OF CUTSCENE********************************


  $.flag_malibu_doors_closed = 1;


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSkent");


  World.SetExtraColors(1, false /* FALSE */);


  Streaming.SetAreaVisible(17 /* VIS_MALIBU_CLUB */);


  Streaming.LoadScene(476.12, -63.377, 10.0);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);


  }


  Cutscene.Load("resc_1a");


  Cutscene.SetOffset(477.687, -58.001, 8.943);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_kent = CutsceneObject.Create(SPECIAL02);
  $.cs_kent.setAnim("CSkent");


  World.ClearArea(495.74, -82.79, 9.03, 1.0, true /* TRUE */);
  $.player1.setCoordinates(495.74, -82.79, 9.03);
  $.player1.setHeading(211.20);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 798) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("KPM1_A", 10000, 1); //"Awright mush, I'm gonna save your Vera, mate."


  while ($.cs_time < 3079) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("KPM1_B", 10000, 1); //"What the hell are you on about?"


  while ($.cs_time < 4603) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("KPM1_C", 10000, 1); //"You know that wanker Diaz, the Bugle Master."


  while ($.cs_time < 6776) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("KPM1_D", 10000, 1); //"He's got your boy, Lance. Word is your mate tried to jump him.."


  while ($.cs_time < 9460) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("KPM1_E", 10000, 1); //"didn't jump high enough if you know what I mean.."


  while ($.cs_time < 11736) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("KPM1_F", 10000, 1); //"Where'd he take him? In plain English?"


  while ($.cs_time < 14992) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("KPM1_G", 10000, 1); //"Keep your barnet on! They got him across town at the junkyard."


  while ($.cs_time < 20583) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("KPM1_H", 10000, 1); //"Bloody hell....Nutter"


  while ($.cs_time < 22880) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 23352) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintBig("BEACH3", 3000, 2); //"Vice Point"


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  World.ClearExtraColors(false);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Streaming.LoadScene(495.74, -82.79, 9.03);


  $.flag_malibu_doors_closed = 0;


  $.flag_player_in_malibu = 0;


  $.player1.setMood(2 /* PLAYER_MOOD_ANGRY */, 60000);

  // ******************************************END OF CUTSCENE********************************

  // fades the screen in


  $.radar_blip_cheat_kent1 = Blip.AddForCoordOld(-1219.969, 8.543, 10.44, 1 /* GREEN */, 3 /* BOTH */);


  $.radar_blip_cheat_kent1.changeScale(3);


  $.flag_cheat_blip_on_kent1 = 1;

  // waiting for the player to get the buddy back home


  Hud.DisplayCounterWithString($.$id.buddy_life_guage_kent1, 1 /* COUNTER_DISPLAY_BAR */, "KPM1_3");


  Text.PrintNow("KPM1_1", 7000, 1); //"Lance has been kidnapped and is being held at the junk yard, Go and rescue him!"


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  // Requests the models


  Streaming.RequestModel(CLa); // Diaz guards
  Streaming.RequestModel(CLb); // Diaz guards
  Streaming.RequestModel(UZI);
  Streaming.RequestModel(SENTINEL);
  Streaming.RequestModel(COMET);
  Streaming.RequestModel(RUGER);


  Streaming.RequestAnimation("LANCE");


  Streaming.LoadSpecialCharacter(3, "IGBUDDY");


  while (!(Streaming.HasModelLoaded(CLa)) || !(Streaming.HasModelLoaded(CLb)) || !(Streaming.HasModelLoaded(UZI)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(SENTINEL)) || !(Streaming.HasModelLoaded(COMET))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasAnimationLoaded("LANCE")) || !(Streaming.HasModelLoaded(RUGER))) {
    await asyncWait(0);


  }


  $.car3_kent1 = Car.Create(COMET, -1066.072, -55.111, 10.262);
  $.car3_kent1.delete();
  $.car4_kent1 = Car.Create(COMET, -1066.714, -28.923, 10.246);
  $.car4_kent1.delete();
  $.car5_kent1 = Car.Create(COMET, -1073.399, 77.886, 10.239);
  $.car5_kent1.delete();
  $.car6_kent1 = Car.Create(COMET, -1072.822, 41.816, 10.270);
  $.car6_kent1.delete();

  // this should load the collision and map before they get there

  // car by the shed


  $.car7_kent1 = Car.Create(SENTINEL, -1292.08, 155.609, 10.45);
  $.car7_kent1.setHeading(176.706);

  // Creates the mission characters


  $.car2_kent1 = Car.Create(SENTINEL, -1240.28, 7.5, 10.46);


  $.car2_kent1.setHeading(180.0);

  // buddy


  buddy_kent1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL03, buddy_x_kent1, buddy_y_kent1, buddy_z_kent1);


  buddy_kent1.setSuffersCriticalHits(false /* FALSE */);


  buddy_kent1.clearThreatSearch();


  buddy_kent1.setAsPlayerFriend($.player1, true /* TRUE */);


  buddy_kent1.setNeverTargeted(true /* TRUE */);


  buddy_kent1.setHeading(285.31);

  // creates the executioner


  $.executioner_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, $.executioner_x_kent1, $.executioner_y_kent1, $.executioner_z_kent1);


  $.executioner_kent1.clearThreatSearch();


  $.executioner_kent1.setMoney(200);

  // creates guard one, follows route 0 walks at the front gate


  $.guard1_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, $.guard1_x_kent1, $.guard1_y_kent1, $.guard1_z_kent1);


  $.guard1_kent1.clearThreatSearch();


  $.guard1_kent1.setMoney(200);

  // Creates guard 2 does not patrol left hand side of shed that Lance is held in


  $.guard2_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, $.guard2_x_kent1, $.guard2_y_kent1, $.guard2_z_kent1);


  $.guard2_kent1.clearThreatSearch();


  $.guard2_kent1.setMoney(200);

  // Creates guard3 does not patrol right hand side of shed that Lance is held in


  $.guard3_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, $.guard3_x_kent1, $.guard3_y_kent1, $.guard3_z_kent1);


  $.guard3_kent1.clearThreatSearch();


  $.guard3_kent1.setMoney(200);

  // Creates guard4 follows partol route 1 walks beside the gate on left hand side


  $.guard4_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, $.guard4_x_kent1, $.guard4_y_kent1, $.guard4_z_kent1);


  $.guard4_kent1.clearThreatSearch();


  $.guard4_kent1.setMoney(200);

  // Guard 6 on right hand side patrols along by burnt out tanker follow route 2


  $.guard6_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, $.guard6_x_kent1, $.guard6_y_kent1, $.guard6_z_kent1);


  $.guard6_kent1.clearThreatSearch();


  $.guard6_kent1.setMoney(200);

  // Guard7 stands on top of digger


  $.guard7_kent1 = Char.Create(4 /* PEDTYPE_CIVMALE */, CLa, -1293.67, 142.31, 16.94);


  $.guard7_kent1.clearThreatSearch();


  $.guard7_kent1.setMoney(200);

  // Guard8 stands by car at start


  $.guard8_kent1 = Char.Create(4 /* PEDTYPE_CIVMALE */, CLa, -1243.05, 10.00, 10.46);


  $.guard8_kent1.clearThreatSearch();


  $.guard8_kent1.setMoney(200);

  // Guard9 stands by car at start


  $.guard9_kent1 = Char.Create(4 /* PEDTYPE_CIVMALE */, CLa, -1242.57, 4.5, 10.45);


  $.guard9_kent1.clearThreatSearch();


  $.guard9_kent1.setMoney(200);

  // Guard10


  $.guard10_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -1252.871, 42.226, 12.313);


  $.guard10_kent1.clearThreatSearch();


  $.guard10_kent1.setMoney(200);

  // guard11


  $.guard11_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -1257.927, 79.620, 10.45);


  $.guard11_kent1.clearThreatSearch();


  $.guard11_kent1.setMoney(200);

  // guard12


  $.guard12_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -1257.345, 85.370, 10.45);


  $.guard12_kent1.clearThreatSearch();


  $.guard12_kent1.setMoney(200);


  $.blob_flag = 0;


  TIMERA = 0;


  while (flag_buddy_home_kent1 == 0) {
    await asyncWait(0);
    if ($.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
      if (flag_buddy_joined_player == 0) {
        $.player1.clearWantedLevel();
      }


    }
    if ($.counter_no_of_guys_dead_kent1 >= 4) {
      if ($.flag_second_wave_created_kent1 == 0) {
        if ($.player1.isInArea3D(-1236.888, 15.474, 8.0, -1288.145, 122.990, 20.0, false /* FALSE */) || $.player1.isInArea3D(-1301.625, 59.126, 8.0, -1236.840, 15.482, 20.0, false /* FALSE */)) {
          $.guard13_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -1307.682, 147.943, 10.45);
          $.guard13_kent1.clearThreatSearch();
          $.guard13_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard13_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard13_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Infinate ammo
          //SET_CHAR_ACCURACY guard13_kent1 90
          $.guard13_kent1.setObjKillPlayerOnFoot($.player1);
          $.guard14_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -1305.706, 149.732, 10.44);
          $.guard14_kent1.clearThreatSearch();
          $.guard14_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard14_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard14_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Infinate ammo
          //SET_CHAR_ACCURACY guard14_kent1 90
          $.guard14_kent1.setObjKillPlayerOnFoot($.player1);
          $.guard15_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLa, -1305.314, 145.067, 10.45);
          $.guard15_kent1.clearThreatSearch();
          $.guard15_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard15_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard15_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Infinate ammo
          //SET_CHAR_ACCURACY guard15_kent1 90
          $.guard15_kent1.setObjKillPlayerOnFoot($.player1);
          $.guard16_kent1 = Char.Create(10 /* PEDTYPE_GANG_DIAZ */, CLb, -1302.267, 146.640, 10.45);
          $.guard16_kent1.clearThreatSearch();
          $.guard16_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard16_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard16_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // Infinate ammo
          //SET_CHAR_ACCURACY guard16_kent1 90
          $.guard16_kent1.setObjKillPlayerOnFoot($.player1);
          $.flag_second_wave_created_kent1 = 1;
        }


      }


    }
    if ($.flag_cheat_blip_on_kent1 == 1) {

      //IF IS_PLAYER_IN_AREA_2D player1 -1236.843 -0.4 -1205.935 22.025 FALSE
      if ($.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */) || $.flag_player_been_spotted_kent1 == 1) {
        if (!(Char.IsDead(buddy_kent1))) {
          $.radar_blip_cheat_kent1.remove();
          radar_blip_buddy_kent1 = Blip.AddForChar(buddy_kent1);
          $.flag_cheat_blip_on_kent1 = 0;
        }
        else {
          radar_blip_buddy_kent1.remove();
          Audio.ClearMissionAudio(1);
          Audio.ClearMissionAudio(2);
          Text.ClearPrints();
          Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
          // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
          flag_buddy_dead_kent1 = 1;
        }


      }


    }
    if ($.counter_guards_got_ai_kent1 < 13) {
      await guard_AI_kent1();  // SCM GOSUB guard_AI_kent1
    }
    else {
      ++$.frame_counter_kent1;
      if ($.flag_second_wave_created_kent1 == 1) {
        if ($.frame_counter_kent1 > 270) {
          $.frame_counter_kent1 = 0;
        }


      }
      else {
        if ($.frame_counter_kent1 > 150) {
          $.frame_counter_kent1 = 0;
        }


      }
      const _res303 = $.player1.getCoordinates();
$.player_x = _res303.x;
$.player_y = _res303.y;
$.player_z = _res303.z;
      await guard_death_check_kent1();  // SCM GOSUB guard_death_check_kent1


    }
    if (flag_buddy_dead_kent1 == 0) {
      if (Char.IsDead(buddy_kent1)) {
        radar_blip_buddy_kent1.remove();
        Audio.ClearMissionAudio(1);
        Audio.ClearMissionAudio(2);
        Text.ClearPrints();
        Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
        // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
        flag_buddy_dead_kent1 = 1;
      }
      else {
        if ($.flag_buddy_free_kent1 == 0) {
          //SET_CHAR_WAIT_STATE buddy_kent1 34 10000
          buddy_kent1.setHealth($.buddy_life_guage_kent1);
        }
        buddys_health_kent1 = buddy_kent1.getHealth();


        if ($.flag_create_2nd_guards_kent1 == 0) {
          if (!(buddy_kent1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */))) {
            $.executioner_kent1.markAsNoLongerNeeded();
            $.guard1_kent1.markAsNoLongerNeeded();
            $.guard2_kent1.markAsNoLongerNeeded();
            $.guard3_kent1.markAsNoLongerNeeded();
            $.guard4_kent1.markAsNoLongerNeeded();
            $.guard6_kent1.markAsNoLongerNeeded();
            $.guard7_kent1.markAsNoLongerNeeded();
            $.guard8_kent1.markAsNoLongerNeeded();
            $.guard9_kent1.markAsNoLongerNeeded();
            $.guard10_kent1.markAsNoLongerNeeded();
            $.guard11_kent1.markAsNoLongerNeeded();
            $.guard12_kent1.markAsNoLongerNeeded();
            $.flag_create_2nd_guards_kent1 = 1;
          }


        }
        if (flag_buddy_joined_player == 1) {
          await buddy_group_checks_kent1();  // SCM GOSUB buddy_group_checks_kent1
          if (buddy_kent1.locateStoppedAnyMeans3D($.home_x_kent1, $.home_y_kent1, $.home_z_kent1, 3.0, 3.0, 3.0, $.blob_flag)) {
            flag_buddy_home_kent1 = 1;
          }


        }
        if (flag_buddy_vulnerable_kent1 == 0) {
          if (flag_buddy_joined_player == 1) {
            if (!(Char.IsDead(buddy_kent1))) {
              buddy_kent1.setOnlyDamagedByPlayer(false /* FALSE */);
              buddy_kent1.freezePosition(false /* FALSE */);
              buddy_kent1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
              flag_buddy_vulnerable_kent1 = 1;
            }
            else {
              radar_blip_buddy_kent1.remove();
              Audio.ClearMissionAudio(1);
              Audio.ClearMissionAudio(2);
              Text.ClearPrints();
              Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
              // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
              flag_buddy_dead_kent1 = 1;
            }


          }


        }
        if ($.flag_executioner_dead_kent1 == 1) {
          if (flag_buddy_joined_player == 0) {
            if ($.player1.locateStoppedOnFoot3D(buddy_x_kent1, buddy_y_kent1, buddy_z_kent1, 2.0, 2.0, 4.0, false /* FALSE */)) {
              $.flag_buddy_free_kent1 = 1;
              if ($.flag_mini_cut1_over_kent1 == 0) {
                $.radar_blip_cheat_kent1.remove();
                Hud.SwitchWidescreen(true /* ON */);
                $.player1.setControl(false /* OFF */);
                Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
                Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
                $.stored_current_weapon_kent1 = $.scplayer.getCurrentWeapon();
                $.scplayer.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
                World.ClearArea(-1312.775, 170.233, 12.036, 1.0, false /* FALSE */);
                Camera.SetFixedPosition(-1312.775, 170.233, 12.036, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-1312.312, 169.349, 11.982, 2 /* JUMP_CUT */);
                if (!(Char.IsDead(buddy_kent1))) {


                  buddys_health_kent1 = $.buddy_life_guage_kent1;
                  buddy_kent1.setHealth(buddys_health_kent1);
                  buddy_kent1.setStayInSamePlace(false /* FALSE */);
                  buddy_kent1.freezePosition(false /* FALSE */);
                  buddy_kent1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
                  $.scplayer.turnToFaceChar(buddy_kent1);
                  buddy_kent1.turnToFaceChar($.scplayer);
                  $.flag_mini_cut1_over_kent1 = 1;


                }


              }
              if ($.flag_mini_cut1_over_kent1 == 1) {
                if ($.flag_player_audio_kent1 == 0) {
                  Audio.LoadMissionAudio(1, "RESC_4" as any); //careful planning
                  Audio.LoadMissionAudio(2, "RESC_5" as any); //killed my brother
                  $.flag_player_audio_kent1 = 1;
                }
                if ($.flag_player_audio_kent1 == 1) {
                  if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
                    $.flag_player_audio_kent1 = 2;
                  }


                }
                if ($.flag_player_audio_kent1 == 2) {
                  Audio.PlayMissionAudio(1); //"There goes my planning.."
                  Text.PrintNow("RESC_4", 5000, 1); //"There goes all my carefull planning.."
                  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
                  $.flag_player_audio_kent1 = 3;
                }
                if ($.flag_player_audio_kent1 == 3) {
                  if (Audio.HasMissionAudioFinished(1)) {
                    Text.ClearThisPrint("RESC_4");
                    $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
                    $.flag_player_audio_kent1 = 4;
                  }


                }
                if ($.flag_player_audio_kent1 == 4) {
                  Audio.PlayMissionAudio(2);
                  Text.PrintNow("RESC_5", 5000, 1); //"He killed my brother"
                  buddy_kent1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
                  $.flag_player_audio_kent1 = 5;
                }
                if ($.flag_player_audio_kent1 == 5) {
                  Audio.LoadMissionAudio(1, "RESC_6" as any); //"Were going to have to..."
                  if (Audio.HasMissionAudioFinished(2)) {
                    Text.ClearThisPrint("RESC_5");
                    buddy_kent1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
                    $.flag_player_audio_kent1 = 6;
                  }


                }
                if ($.flag_player_audio_kent1 == 6) {
                  if (Audio.HasMissionAudioLoaded(1)) {
                    $.flag_player_audio_kent1 = 7;
                  }


                }
                if ($.flag_player_audio_kent1 == 7) {
                  Audio.LoadMissionAudio(2, "RESC_1" as any); //"you okay to use a gun!"
                  Audio.PlayMissionAudio(1);
                  Text.PrintNow("RESC_6", 5000, 1); //"Were going to have to take this guy out!"
                  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
                  $.flag_player_audio_kent1 = 8;
                }
                if ($.flag_player_audio_kent1 == 8) {
                  if (Audio.HasMissionAudioFinished(1)) {
                    Text.ClearThisPrint("RESC_6");
                    $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
                    $.flag_player_audio_kent1 = 9;
                  }


                }
                if ($.flag_player_audio_kent1 == 9) {
                  if (Audio.HasMissionAudioLoaded(2)) {
                    $.flag_player_audio_kent1 = 10;
                  }


                }
                if ($.flag_player_audio_kent1 == 10) {
                  Audio.LoadMissionAudio(1, "RESC_2" as any); //" sure I guess
                  Audio.PlayMissionAudio(2);
                  Text.PrintNow("RESC_1", 5000, 1); //" "
                  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
                  $.flag_player_audio_kent1 = 11;
                }
                if ($.flag_player_audio_kent1 == 11) {
                  if (Audio.HasMissionAudioFinished(2)) {
                    Text.ClearThisPrint("RESC_1");
                    $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
                    $.flag_player_audio_kent1 = 12;
                  }


                }
                if ($.flag_player_audio_kent1 == 12) {
                  if (Audio.HasMissionAudioLoaded(1)) {
                    $.flag_player_audio_kent1 = 13;
                  }


                }
                if ($.flag_player_audio_kent1 == 13) {
                  Audio.LoadMissionAudio(2, "RESC_3" as any);
                  Audio.PlayMissionAudio(1);
                  Text.PrintNow("RESC_2", 5000, 1); //""
                  buddy_kent1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
                  $.flag_player_audio_kent1 = 14;
                }
                if ($.flag_player_audio_kent1 == 14) {
                  if (Audio.HasMissionAudioFinished(1)) {
                    Text.ClearThisPrint("RESC_2");
                    buddy_kent1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
                    $.flag_player_audio_kent1 = 15;
                  }


                }
                if ($.flag_player_audio_kent1 == 15) {
                  if (Audio.HasMissionAudioLoaded(2)) {
                    $.flag_player_audio_kent1 = 16;
                  }


                }
                if ($.flag_player_audio_kent1 == 16) {
                  Audio.PlayMissionAudio(2);
                  Text.PrintNow("RESC_3", 5000, 1); //""
                  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
                  $.flag_player_audio_kent1 = 17;
                }
                if ($.flag_player_audio_kent1 == 17) {
                  if (Audio.HasMissionAudioFinished(2)) {
                    Text.ClearThisPrint("RESC_3");
                    $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
                    $.flag_player_audio_kent1 = 18;
                  }


                }
                if ($.flag_player_audio_kent1 == 18) {
                  $.flag_mini_cut1_over_kent1 = 2;
                }


              }
              if ($.flag_mini_cut1_over_kent1 == 2) {
                buddy_kent1.followPlayer($.player1);
                buddy_kent1.setRunning(true /* TRUE */);
                //	PRINT_NOW ( KPM1_4 ) 5000 1 //"Get me outa here!"
                if (!(Char.IsDead(buddy_kent1))) {
                  buddy_kent1.setBleeding(false /* FALSE */);
                  buddy_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
                }
                else {
                  Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
                  // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
                  flag_buddy_dead_kent1 = 1;
                }
                radar_blip_buddy_kent1.remove();
                Text.PrintNow("KPM1_4", 5000, 1); //"Get Lance to the hospital!"
                $.radar_blip_coord1_kent1 = Blip.AddForCoord($.home_x_kent1, $.home_y_kent1, $.home_z_kent1);
                $.blob_flag = 1;
                Hud.ClearCounter($.$id.buddy_life_guage_kent1);
                $.scplayer.setCurrentWeapon($.stored_current_weapon_kent1);
                Hud.SwitchWidescreen(false /* OFF */);
                $.player1.setControl(true /* ON */);
                Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
                Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
                Camera.RestoreJumpcut();
                flag_buddy_in_group_kent1 = 1;
                flag_buddy_joined_player = 1;
                $.flag_mini_cut1_over_kent1 = 3;
              }


            }


          }


        }


      }


    }
    if ($.flag_buddy_free_kent1 == 0) {
      if ($.flag_player_been_spotted_kent1 == 1) {
        if (TIMERA >= 1500) {
          if ($.buddy_life_guage_kent1 > 0) {
            --$.buddy_life_guage_kent1;
            TIMERA = 0;
          }
          else {
            $.buddy_life_guage_kent1 = 0;
            TIMERA = 0;
            if (!(Char.IsDead(buddy_kent1))) {
              buddy_kent1.explodeHead();
            }


          }


        }


      }
      else {
        if (TIMERA >= 3000) {
          if ($.buddy_life_guage_kent1 > 0) {
            --$.buddy_life_guage_kent1;
            TIMERA = 0;
          }
          else {
            $.buddy_life_guage_kent1 = 0;
            TIMERA = 0;
            if (!(Char.IsDead(buddy_kent1))) {
              buddy_kent1.explodeHead();
            }


          }


        }


      }
      if (buddys_health_kent1 < $.buddy_life_guage_kent1) {
        $.buddy_life_guage_kent1 = buddys_health_kent1;
      }
      else {
        buddys_health_kent1 = $.buddy_life_guage_kent1;
      }


    }
    if ($.flag_create_2nd_guards_kent1 == 1) {
      if ($.flag_created_ambush_kent1 == 0) {
        await ambush_create_kent1();  // SCM GOSUB ambush_create_kent1
      }
      else {
        await ambush_death_checks_kent1();  // SCM GOSUB ambush_death_checks_kent1
      }


    }


  }


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  World.ClearArea(-830.107, 1157.09, 12.98, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(-830.107, 1157.09, 12.98, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-829.292, 1157.611, 12.74, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio(1, "RESC_7" as any); //"Get patched up
  Audio.LoadMissionAudio(2, "RESC_8" as any); //Okay I got you.."


  if (!(Char.IsDead(buddy_kent1))) {
    buddy_kent1.leaveGroup();
  }
  else {
    radar_blip_buddy_kent1.remove();
    Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
    // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
  }


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
    if (Char.IsDead(buddy_kent1)) {
      radar_blip_buddy_kent1.remove();
      Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
      // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
    }


  }


  if (!(Char.IsDead(buddy_kent1))) {
    if ($.scplayer.isInAnyCar()) {
      Audio.PlayMissionAudio(1);
      Text.PrintNow("RESC_7", 5000, 1); //""
    }
    else {
      $.scplayer.turnToFaceChar(buddy_kent1);
      $.stored_current_weapon_kent1 = $.scplayer.getCurrentWeapon();
      $.scplayer.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
      $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
      Audio.PlayMissionAudio(1);
      Text.PrintNow("RESC_7", 5000, 1); //""
    }
  }
  else {
    radar_blip_buddy_kent1.remove();
    Audio.ClearMissionAudio(1);
    Audio.ClearMissionAudio(2);
    Text.ClearPrints();
    Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
    // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
  }


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Char.IsDead(buddy_kent1)) {
      radar_blip_buddy_kent1.remove();
      //CLEAR_MISSION_AUDIO 1
      //CLEAR_MISSION_AUDIO 2
      //CLEAR_PRINTS
      Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
      // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("RESC_7");
  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);


  if (!(Char.IsDead(buddy_kent1))) {
    if (buddy_kent1.isInAnyCar()) {
      Audio.PlayMissionAudio(2);
      Text.PrintNow("RESC_8", 5000, 1); //""
    }
    else {
      buddy_kent1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
      buddy_kent1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
      Audio.PlayMissionAudio(2);
      Text.PrintNow("RESC_8", 5000, 1); //""
    }
  }
  else {
    radar_blip_buddy_kent1.remove();
    Audio.ClearMissionAudio(1);
    Audio.ClearMissionAudio(2);
    Text.ClearPrints();
    Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
    // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
  }


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
    if (Char.IsDead(buddy_kent1)) {
      radar_blip_buddy_kent1.remove();
      Audio.ClearMissionAudio(2);
      Text.ClearPrints();
      Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
      // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("RESC_8");


  if (!(Char.IsDead(buddy_kent1))) {
    buddy_kent1.setWaitState(0 /* WAITSTATE_FALSE */, 1);
  }
  else {
    radar_blip_buddy_kent1.remove();
    Audio.ClearMissionAudio(2);
    Text.ClearPrints();
    Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
    // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
  }


  if (!(Char.IsDead(buddy_kent1))) {
    if (buddy_kent1.isInAnyCar()) {
      $.buddy_car_kent1 = buddy_kent1.storeCarIsIn();
      buddy_kent1.setObjLeaveCar($.buddy_car_kent1);
      while (buddy_kent1.isInAnyCar()) {
        await asyncWait(0);
        if (Char.IsDead(buddy_kent1)) {
          radar_blip_buddy_kent1.remove();
          Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
          // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.buddy_car_kent1)) {
          if (Char.IsDead(buddy_kent1)) {
            radar_blip_buddy_kent1.remove();
            Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
            // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
          }
          else {
            // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
          }


        }


      }


    }


  }
  else {
    radar_blip_buddy_kent1.remove();
    Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
    // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
  }


  if (!(Char.IsDead(buddy_kent1))) {
    buddy_kent1.setCoordinates(-822.71, 1158.16, 10.07);
    buddy_kent1.setHeading(202.594);
  }
  else {
    radar_blip_buddy_kent1.remove();
    Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
    // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
  }


  Camera.SetFixedPosition(-826.493, 1154.238, 11.78, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-825.780, 1154.921, 11.62, 2 /* JUMP_CUT */);


  buddy_kent1.setObjGotoCoordOnFoot(-822.856, 1153.668);


  TIMERA = 0;


  while (TIMERA < 3000) {
    await asyncWait(0);
    if (Char.IsDead(buddy_kent1)) {
      radar_blip_buddy_kent1.remove();
      Text.PrintNow("KPM1_2", 5000, 1); //"You were supposed to get Lance out alive!"
      // SCM GOTO → mission_kent1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kent1_failed"); // fallback: would break linear control flow
    }



  }


  Camera.RestoreJumpcut();
  buddy_kent1.delete();


  if (!($.player1.isInAnyCar())) {
    $.scplayer.setCurrentWeapon($.stored_current_weapon_kent1);
  }
  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);



  // SCM GOTO → mission_kent1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_kent1_passed"); // fallback: would break linear control flow
}


// ************************************* MISSION FAILED ************************************

// Mission kent1 failed


async function mission_kent1_failed() {


  Text.PrintBig("M_FAIL", 5000, 1);
}


// ************************************ MISSION PASSED *************************************

// mission kent1 passed


async function mission_kent1_passed() {


  $.flag_kent_mission1_passed = 1;
  $.flag_kent_mission_active = 0;
  Stat.RegisterMissionPassed("KENT_1");
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  Text.PrintBig("M_PASSN", 5000, 1); //"Mission Passed!" Used cos player does not get any money
  $.player1.clearWantedLevel();
  $.kent_contact_blip.remove();
  $.baron_contact_blip.remove();
  $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baron2X, $.baron2Y, $.baron2Z, $.the_baron_blip);
  // START_NEW_SCRIPT baron_mission5_loop 
}


// *************************************** MISSION CLEANUP *********************************

// mission cleanup


async function mission_cleanup_kent1() {


  Path.RemoveRoute(0);
  Path.RemoveRoute(1);
  Path.RemoveRoute(2);


  ONMISSION = 0;
  buddy_kent1.removeElegantly();
  Streaming.RemoveAnimation("LANCE");
  Path.SwitchRoadsOn(-1208.09, 1.78, 6.0, -1172.68, 18.66, 20.0); // Road leading to scrap yard
  radar_blip_buddy_kent1.remove();
  $.radar_blip_coord1_kent1.remove();
  $.radar_blip_cheat_kent1.remove();
  Streaming.UnloadSpecialCharacter(3);


  if (!(Car.IsDead($.car3_kent1))) {
    $.car3_kent1.setMission(0 /* MISSION_NONE */);
  }


  if (!(Car.IsDead($.car4_kent1))) {
    $.car4_kent1.setMission(0 /* MISSION_NONE */);
  }


  if (!(Car.IsDead($.car5_kent1))) {
    $.car5_kent1.setMission(0 /* MISSION_NONE */);
  }


  if (!(Car.IsDead($.car6_kent1))) {
    $.car6_kent1.setMission(0 /* MISSION_NONE */);
  }



  Streaming.MarkModelAsNoLongerNeeded(CLa);
  Streaming.MarkModelAsNoLongerNeeded(CLb);
  Streaming.MarkModelAsNoLongerNeeded(UZI);
  Streaming.MarkModelAsNoLongerNeeded(SENTINEL);
  Streaming.MarkModelAsNoLongerNeeded(COMET);
  Streaming.MarkModelAsNoLongerNeeded(RUGER);
  Hud.ClearCounter($.$id.buddy_life_guage_kent1);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}


// Checks to see if any of the guards are dead or have spotted the player1


async function guard_death_check_kent1() {

  // excutioner


  if ($.flag_executioner_dead_kent1 == 0) {
    if (Char.IsDead($.executioner_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_executioner_dead_kent1 = 1;
    }
    else {
      if (flag_buddy_joined_player == 1) {
        if ($.flag_executioner_chase_kent1 == 0) {
          $.executioner_kent1.setStayInSamePlace(false /* FALSE */);
          $.executioner_kent1.setObjKillPlayerAnyMeans($.player1);
          $.flag_executioner_chase_kent1 = 1;
        }


      }


    }


  }

  // guard1


  if ($.flag_guard1_dead_kent1 == 0) {
    if (Char.IsDead($.guard1_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard1_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard1_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if ($.flag_player_been_spotted_kent1 == 1) {
        if ($.frame_counter_kent1 == 0) {
          $.guard1_kent1.followPath($.player_x, $.player_y, $.player_z, 0.5, 1 /* RUN */);
          $.guard1_kent1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }


  }

  // guard2


  if ($.flag_guard2_dead_kent1 == 0) {
    if (Char.IsDead($.guard2_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard2_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard2_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if (flag_buddy_joined_player == 1) {
        if ($.flag_guard2_chase_kent1 == 0) {
          $.guard2_kent1.setStayInSamePlace(false /* FALSE */);
          $.flag_guard2_chase_kent1 = 1;
        }


      }


    }


  }

  // guard3


  if ($.flag_guard3_dead_kent1 == 0) {
    if (Char.IsDead($.guard3_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard3_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard3_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if (flag_buddy_joined_player == 1) {
        if ($.flag_guard3_chase_kent1 == 0) {
          $.guard3_kent1.setStayInSamePlace(false /* FALSE */);
          $.flag_guard3_chase_kent1 = 1;
        }


      }


    }


  }

  // Guard4


  if ($.flag_guard4_dead_kent1 == 0) {
    if (Char.IsDead($.guard4_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard4_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard4_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if ($.flag_player_been_spotted_kent1 == 1) {
        if ($.flag_guard4_chase_kent1 == 0) {
          $.guard4_kent1.followPath($.player_x, $.player_y, $.player_z, 0.5, 1 /* RUN */);
          $.guard4_kent1.setObjKillPlayerOnFoot($.player1);
          $.flag_guard4_chase_kent1 = 1;
        }
        else {
          if ($.frame_counter_kent1 == 30) {
            $.guard4_kent1.followPath($.player_x, $.player_y, $.player_z, 0.5, 1 /* RUN */);
            $.guard4_kent1.setObjKillPlayerOnFoot($.player1);
          }


        }


      }


    }


  }

  // guard6


  if ($.flag_guard6_dead_kent1 == 0) {
    if (Char.IsDead($.guard6_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard6_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard6_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if ($.flag_player_been_spotted_kent1 == 1) {
        if ($.flag_guard6_chase_kent1 == 0) {
          $.guard6_kent1.followPath($.player_x, $.player_y, $.player_z, 0.5, 1 /* RUN */);
          $.guard6_kent1.setObjKillPlayerOnFoot($.player1);
          $.flag_guard6_chase_kent1 = 1;
        }
        else {
          if ($.frame_counter_kent1 == 60) {
            $.guard6_kent1.followPath($.player_x, $.player_y, $.player_z, 0.5, 1 /* RUN */);
            $.guard6_kent1.setObjKillPlayerOnFoot($.player1);
          }


        }


      }


    }


  }

  // guard7 sniper ontop of digger


  if ($.flag_guard7_dead_kent1 == 0) {
    if (Char.IsDead($.guard7_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard7_dead_kent1 = 1;
    }


  }


  // guard8 sniper ontop of digger


  if ($.flag_guard8_dead_kent1 == 0) {
    if (Char.IsDead($.guard8_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard8_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard8_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
        if ($.flag_guard8_chase_kent1 == 0) {
          $.guard8_kent1.setStayInSamePlace(false /* FALSE */);
          $.guard8_kent1.setObjKillPlayerOnFoot($.player1);
          $.flag_guard8_chase_kent1 = 1;
        }


      }


    }


  }

  // guard9 sniper ontop of digger


  if ($.flag_guard9_dead_kent1 == 0) {
    if (Char.IsDead($.guard9_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard9_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard9_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
        if ($.flag_guard9_chase_kent1 == 0) {
          $.guard9_kent1.setStayInSamePlace(false /* FALSE */);
          $.guard9_kent1.setObjKillPlayerOnFoot($.player1);
          $.flag_guard9_chase_kent1 = 1;
        }


      }


    }


  }

  // guard10


  if ($.flag_guard10_dead_kent1 == 0) {
    if (Char.IsDead($.guard10_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard10_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard10_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
        if ($.flag_guard10_chase_kent1 == 0) {
          $.guard10_kent1.setStayInSamePlace(false /* FALSE */);
          $.guard10_kent1.setObjKillPlayerAnyMeans($.player1);
          $.flag_guard10_chase_kent1 = 1;
        }
        if ($.frame_counter_kent1 == 90) {
          $.guard10_kent1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
          $.guard10_kent1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }


  }

  // guard11


  if ($.flag_guard11_dead_kent1 == 0) {
    if (Char.IsDead($.guard11_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard11_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard11_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
        if ($.flag_guard11_chase_kent1 == 0) {
          $.guard11_kent1.setStayInSamePlace(false /* FALSE */);
          $.guard11_kent1.setObjKillPlayerAnyMeans($.player1);
          $.flag_guard11_chase_kent1 = 1;
        }
        if ($.frame_counter_kent1 == 120) {
          $.guard11_kent1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
          $.guard11_kent1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }


  }

  // guard12


  if ($.flag_guard12_dead_kent1 == 0) {
    if (Char.IsDead($.guard12_kent1)) {
      ++$.counter_no_of_guys_dead_kent1;
      $.flag_guard12_dead_kent1 = 1;
    }
    else {
      if ($.flag_player_been_spotted_kent1 == 0) {
        if ($.guard12_kent1.hasSpottedPlayer($.player1)) {
          $.flag_player_been_spotted_kent1 = 1;
        }


      }
      if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
        if ($.flag_guard12_chase_kent1 == 0) {
          $.guard12_kent1.setStayInSamePlace(false /* FALSE */);
          $.guard12_kent1.setObjKillPlayerAnyMeans($.player1);
          $.flag_guard12_chase_kent1 = 1;
        }
        if ($.frame_counter_kent1 == 150) {
          $.guard12_kent1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
          $.guard12_kent1.setObjKillPlayerOnFoot($.player1);
        }


      }


    }


  }


  if ($.flag_second_wave_created_kent1 == 1) {
    if ($.flag_guard13_dead_kent1 == 0) {
      if (Char.IsDead($.guard13_kent1)) {
        ++$.counter_no_of_guys_dead_kent1;
        $.flag_guard13_dead_kent1 = 1;
      }
      else {
        if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
          if ($.frame_counter_kent1 == 180) {
            $.guard13_kent1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
            $.guard13_kent1.setObjKillPlayerOnFoot($.player1);
          }


        }


      }


    }
    if ($.flag_guard14_dead_kent1 == 0) {
      if (Char.IsDead($.guard14_kent1)) {
        ++$.counter_no_of_guys_dead_kent1;
        $.flag_guard14_dead_kent1 = 1;
      }
      else {
        if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
          if ($.frame_counter_kent1 == 210) {
            $.guard14_kent1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
            $.guard14_kent1.setObjKillPlayerOnFoot($.player1);
          }


        }


      }


    }
    if ($.flag_guard15_dead_kent1 == 0) {
      if (Char.IsDead($.guard15_kent1)) {
        ++$.counter_no_of_guys_dead_kent1;
        $.flag_guard15_dead_kent1 = 1;
      }
      else {
        if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
          if ($.frame_counter_kent1 == 240) {
            $.guard15_kent1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
            $.guard15_kent1.setObjKillPlayerOnFoot($.player1);
          }


        }


      }


    }
    if ($.flag_guard16_dead_kent1 == 0) {
      if (Char.IsDead($.guard16_kent1)) {
        ++$.counter_no_of_guys_dead_kent1;
        $.flag_guard16_dead_kent1 = 1;
      }
      else {
        if (flag_buddy_joined_player == 1 || $.player1.isInArea2D(-1234.15, -1.0, -1367.51, 250.33, false /* FALSE */)) {
          if ($.frame_counter_kent1 == 270) {
            $.guard16_kent1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
            $.guard16_kent1.setObjKillPlayerOnFoot($.player1);
          }


        }


      }


    }


  }
}


// Checks to see whether the buddy is in the players group or not


async function buddy_group_checks_kent1() {


  if (flag_buddy_joined_player == 1) {
    if (flag_buddy_in_group_kent1 == 1) {
      if (!(buddy_kent1.isInPlayersGroup($.player1))) {
        if (flag_had_buddy_message_kent1 == 0) {
          Text.PrintNow("HEY", 5000, 1); //"KEEP YOUR GROUP TOGETHER!"
          radar_blip_buddy_kent1 = Blip.AddForChar(buddy_kent1);
          $.radar_blip_coord1_kent1.remove();
          $.blob_flag = 0;
          flag_buddy_in_group_kent1 = 0;
          flag_had_buddy_message_kent1 = 1;
        }


      }


    }
    else {
      if (flag_had_buddy_message_kent1 == 1) {
        if ($.player1.locateAnyMeansChar3D(buddy_kent1, 8.0, 8.0, 8.0, false /* FALSE */)) {
          buddy_kent1.followPlayer($.player1);
          buddy_kent1.setRunning(true /* TRUE */);
          Text.PrintNow("KPM1_4", 5000, 1); //"Get me to safety!"
          radar_blip_buddy_kent1.remove();
          $.radar_blip_coord1_kent1 = Blip.AddForCoord($.home_x_kent1, $.home_y_kent1, $.home_z_kent1);
          $.blob_flag = 1;
          flag_buddy_in_group_kent1 = 1;
          flag_had_buddy_message_kent1 = 0;
        }


      }


    }


  }
}


// Creates the ambush guys at door


async function ambush_create_kent1() {

  // guard3


  $.car3_kent1 = Car.Create(COMET, -1066.072, -55.111, 10.262);


  $.ambush_guard3_kent1 = Char.CreateInsideCar($.car3_kent1, 10 /* PEDTYPE_GANG_DIAZ */, CLb);


  $.car3_kent1.setHeading(355.752);


  $.ambush_guard3_kent1.clearThreatSearch();


  $.ambush_guard3_kent1.setMoney(200);


  $.ambush_guard3_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.ambush_guard3_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.ambush_guard3_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo


  $.car3_kent1.setForwardSpeed(20.0);


  $.car3_kent1.setCruiseSpeed(100.0);


  $.car3_kent1.addUpsidedownCheck();


  StuckCarCheck.Add($.car3_kent1, 0.5, 3000);


  $.flag_ambush_guard3_in_car_kent1 = 1;

  // guard4


  $.car4_kent1 = Car.Create(COMET, -1066.714, -28.923, 10.246);


  $.car4_kent1.setHeading(5.6);


  $.ambush_guard4_kent1 = Char.CreateInsideCar($.car4_kent1, 10 /* PEDTYPE_GANG_DIAZ */, CLa);


  $.ambush_guard4_kent1.clearThreatSearch();


  $.ambush_guard4_kent1.setMoney(200);


  $.ambush_guard4_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.ambush_guard4_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.ambush_guard4_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo


  $.car4_kent1.setForwardSpeed(20.0);


  $.car4_kent1.setCruiseSpeed(100.0);


  $.car4_kent1.addUpsidedownCheck();


  StuckCarCheck.Add($.car4_kent1, 0.5, 3000);


  $.flag_ambush_guard4_in_car_kent1 = 1;

  // Guard5


  $.car5_kent1 = Car.Create(COMET, -1073.399, 77.886, 10.239);


  $.car5_kent1.setHeading(186.085);


  $.ambush_guard5_kent1 = Char.CreateInsideCar($.car5_kent1, 10 /* PEDTYPE_GANG_DIAZ */, CLa);


  $.ambush_guard5_kent1.clearThreatSearch();


  $.ambush_guard5_kent1.setMoney(200);


  $.ambush_guard5_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.ambush_guard5_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.ambush_guard5_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo


  $.car5_kent1.setForwardSpeed(20.0);


  $.car5_kent1.setCruiseSpeed(100.0);


  $.car5_kent1.addUpsidedownCheck();


  StuckCarCheck.Add($.car5_kent1, 0.5, 3000);


  $.flag_ambush_guard5_in_car_kent1 = 1;

  // Guard6


  $.car6_kent1 = Car.Create(COMET, -1072.822, 41.816, 10.270);


  $.car6_kent1.setHeading(178.162);


  $.ambush_guard6_kent1 = Char.CreateInsideCar($.car6_kent1, 10 /* PEDTYPE_GANG_DIAZ */, CLa);


  $.ambush_guard6_kent1.clearThreatSearch();


  $.ambush_guard6_kent1.setMoney(200);


  $.ambush_guard6_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);


  $.ambush_guard6_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.ambush_guard6_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo


  $.car6_kent1.setForwardSpeed(20.0);


  $.car6_kent1.setCruiseSpeed(100.0);


  $.car6_kent1.addUpsidedownCheck();


  StuckCarCheck.Add($.car6_kent1, 0.5, 3000);


  $.flag_ambush_guard6_in_car_kent1 = 1;


  $.flag_created_ambush_kent1 = 1;
}


// Checks to see if any of the ambush guys are dead


async function ambush_death_checks_kent1() {

  // Guard3


  if ($.flag_ambush_guard3_dead_kent1 == 0) {
    if (Char.IsDead($.ambush_guard3_kent1)) {
      $.flag_ambush_guard3_dead_kent1 = 1;
    }
    else {
      if ($.chase_message_kent1 == 0) {
        if ($.ambush_guard3_kent1.isOnScreen()) {
          Text.PrintNow("KPM1_5", 5000, 1); //"Diaz's guys are after you get to the hospital."
          $.chase_message_kent1 = 1;
        }


      }
      if ($.flag_ambush_guard3_in_car_kent1 == 0) {
        if ($.ambush_guard3_kent1.isOnScreen()) {
          if ($.ambush_guard3_do_stuff_kent1 == 0) {
            $.ambush_guard3_kent1.clearThreatSearch();
            $.ambush_guard3_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.ambush_guard3_kent1.setObjKillPlayerAnyMeans($.player1);
            $.ambush_guard3_do_stuff_kent1 = 1;
          }


        }
        else {
          $.ambush_guard3_do_stuff_kent1 = 0;
          if ($.ambush_guard3_do_stuff_kent1 == 0) {
            if (!($.player1.locateAnyMeansChar2D($.ambush_guard3_kent1, 20.0, 20.0, false /* FALSE */))) {
              const _res304 = $.ambush_guard3_kent1.getCoordinates();
$.abguard3_x_kent1 = _res304.x;
$.abguard3_y_kent1 = _res304.y;
$.abguard3_z_kent1 = _res304.z;
              const _res305 = Path.GetClosestCarNode($.abguard3_x_kent1, $.abguard3_y_kent1, $.abguard3_z_kent1);
$.car3_x_kent1 = _res305.nodeX;
$.car3_y_kent1 = _res305.nodeY;
$.car3_z_kent1 = _res305.nodeZ;
              if (!(World.IsPointObscuredByAMissionEntity($.car3_x_kent1, $.car3_y_kent1, $.car3_z_kent1, 4.0, 4.0, 3.0))) {
                if (!(Camera.IsPointOnScreen($.car3_x_kent1, $.car3_y_kent1, $.car3_z_kent1, 4.0))) {
                  StuckCarCheck.Remove($.car3_kent1);
                  $.car3_kent1.removeUpsidedownCheck();
                  $.car3_kent1.markAsNoLongerNeeded();
                  $.car3_kent1 = Car.Create(COMET, $.car3_x_kent1, $.car3_y_kent1, $.car3_z_kent1);
                  $.ambush_guard3_kent1.setObjNoObj();
                  $.ambush_guard3_kent1.warpIntoCar($.car3_kent1);
                  $.guard3_car_mission_kent1 = 0;
                  $.ambush_guard3_do_stuff_kent1 = 1;
                }


              }


            }


          }


        }
        if ($.ambush_guard3_kent1.isInAnyCar()) {
          $.car3_kent1 = $.ambush_guard3_kent1.storeCarIsIn();
          $.car3_kent1.setCruiseSpeed(100.0);
          $.car3_kent1.addUpsidedownCheck();
          StuckCarCheck.Add($.car3_kent1, 0.5, 3000);
          $.car3_kent1.setForwardSpeed(30.0);
          $.flag_ambush_guard3_in_car_kent1 = 1;
        }


      }
      if ($.flag_ambush_guard3_in_car_kent1 == 1) {
        if (!(Car.IsDead($.car3_kent1))) {
          if ($.guard3_car_mission_kent1 == 0) {
            $.car3_kent1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.guard3_car_mission_kent1 = 1;
          }
          if ($.car3_kent1.isUpsidedown() || $.car3_kent1.isOnFire() || StuckCarCheck.IsCarStuck($.car3_kent1)) {
            $.ambush_guard3_kent1.setObjLeaveCar($.car3_kent1);
          }


        }
        if (!($.ambush_guard3_kent1.isInAnyCar())) {
          StuckCarCheck.Remove($.car3_kent1);
          $.car3_kent1.removeUpsidedownCheck();
          $.car3_kent1.markAsNoLongerNeeded();
          $.guard3_car_mission_kent1 = 0;
          $.ambush_guard3_do_stuff_kent1 = 0;
          $.flag_ambush_guard3_in_car_kent1 = 0;
        }


      }


    }


  }



  // Guard4


  if ($.flag_ambush_guard4_dead_kent1 == 0) {
    if (Char.IsDead($.ambush_guard4_kent1)) {
      $.flag_ambush_guard4_dead_kent1 = 1;
    }
    else {
      if ($.chase_message_kent1 == 0) {
        if ($.ambush_guard4_kent1.isOnScreen()) {
          Text.PrintNow("KPM1_5", 5000, 1); //"Diaz's guys are after you get to the hospital."
          $.chase_message_kent1 = 1;
        }


      }
      if ($.flag_ambush_guard4_in_car_kent1 == 0) {
        if ($.ambush_guard4_kent1.isOnScreen()) {
          if ($.ambush_guard4_do_stuff_kent1 == 0) {
            $.ambush_guard4_kent1.clearThreatSearch();
            $.ambush_guard4_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.ambush_guard4_kent1.setObjKillPlayerAnyMeans($.player1);
            $.ambush_guard4_do_stuff_kent1 = 1;
          }


        }
        else {
          $.ambush_guard4_do_stuff_kent1 = 0;
          if ($.ambush_guard4_do_stuff_kent1 == 0) {
            if (!($.player1.locateAnyMeansChar2D($.ambush_guard4_kent1, 20.0, 20.0, false /* FALSE */))) {
              const _res306 = $.ambush_guard4_kent1.getCoordinates();
$.abguard4_x_kent1 = _res306.x;
$.abguard4_y_kent1 = _res306.y;
$.abguard4_z_kent1 = _res306.z;
              const _res307 = Path.GetClosestCarNode($.abguard4_x_kent1, $.abguard4_y_kent1, $.abguard4_z_kent1);
$.car4_x_kent1 = _res307.nodeX;
$.car4_y_kent1 = _res307.nodeY;
$.car4_z_kent1 = _res307.nodeZ;
              if (!(World.IsPointObscuredByAMissionEntity($.car4_x_kent1, $.car4_y_kent1, $.car4_z_kent1, 4.0, 4.0, 3.0))) {
                if (!(Camera.IsPointOnScreen($.car4_x_kent1, $.car4_y_kent1, $.car4_z_kent1, 4.0))) {
                  StuckCarCheck.Remove($.car4_kent1);
                  $.car4_kent1.removeUpsidedownCheck();
                  $.car4_kent1.markAsNoLongerNeeded();
                  $.car4_kent1 = Car.Create(COMET, $.car4_x_kent1, $.car4_y_kent1, $.car4_z_kent1);
                  $.ambush_guard4_kent1.setObjNoObj();
                  $.ambush_guard4_kent1.warpIntoCar($.car4_kent1);
                  $.guard4_car_mission_kent1 = 0;
                  $.ambush_guard4_do_stuff_kent1 = 1;
                }


              }


            }


          }


        }
        if ($.ambush_guard4_kent1.isInAnyCar()) {
          $.car4_kent1 = $.ambush_guard4_kent1.storeCarIsIn();
          $.car4_kent1.setCruiseSpeed(100.0);
          $.car4_kent1.addUpsidedownCheck();
          StuckCarCheck.Add($.car4_kent1, 0.5, 3000);
          $.car4_kent1.setForwardSpeed(30.0);
          $.flag_ambush_guard4_in_car_kent1 = 1;
        }


      }
      if ($.flag_ambush_guard4_in_car_kent1 == 1) {
        if (!(Car.IsDead($.car4_kent1))) {
          if ($.guard4_car_mission_kent1 == 0) {
            $.car4_kent1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.guard4_car_mission_kent1 = 1;
          }
          if ($.car4_kent1.isUpsidedown() || $.car4_kent1.isOnFire() || StuckCarCheck.IsCarStuck($.car4_kent1)) {
            $.ambush_guard4_kent1.setObjLeaveCar($.car4_kent1);
          }


        }
        if (!($.ambush_guard4_kent1.isInAnyCar())) {
          StuckCarCheck.Remove($.car4_kent1);
          $.car4_kent1.removeUpsidedownCheck();
          $.car4_kent1.markAsNoLongerNeeded();
          $.guard4_car_mission_kent1 = 0;
          $.ambush_guard4_do_stuff_kent1 = 0;
          $.flag_ambush_guard4_in_car_kent1 = 0;
        }


      }


    }


  }

  // guard5


  if ($.flag_ambush_guard5_dead_kent1 == 0) {
    if (Char.IsDead($.ambush_guard5_kent1)) {
      $.flag_ambush_guard5_dead_kent1 = 1;
    }
    else {
      if ($.chase_message_kent1 == 0) {
        if ($.ambush_guard5_kent1.isOnScreen()) {
          Text.PrintNow("KPM1_5", 5000, 1); //"Diaz's guys are after you get to the hospital."
          $.chase_message_kent1 = 1;
        }


      }
      if ($.flag_ambush_guard5_in_car_kent1 == 0) {
        if ($.ambush_guard5_kent1.isOnScreen()) {
          if ($.ambush_guard5_do_stuff_kent1 == 0) {
            $.ambush_guard5_kent1.clearThreatSearch();
            $.ambush_guard5_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.ambush_guard5_kent1.setObjKillPlayerAnyMeans($.player1);
            $.ambush_guard5_do_stuff_kent1 = 1;
          }


        }
        else {
          $.ambush_guard5_do_stuff_kent1 = 0;
          if ($.ambush_guard5_do_stuff_kent1 == 0) {
            if (!($.player1.locateAnyMeansChar2D($.ambush_guard5_kent1, 20.0, 20.0, false /* FALSE */))) {
              const _res308 = $.ambush_guard5_kent1.getCoordinates();
$.abguard5_x_kent1 = _res308.x;
$.abguard5_y_kent1 = _res308.y;
$.abguard5_z_kent1 = _res308.z;
              const _res309 = Path.GetClosestCarNode($.abguard5_x_kent1, $.abguard5_y_kent1, $.abguard5_z_kent1);
$.car5_x_kent1 = _res309.nodeX;
$.car5_y_kent1 = _res309.nodeY;
$.car5_z_kent1 = _res309.nodeZ;
              if (!(World.IsPointObscuredByAMissionEntity($.car5_x_kent1, $.car5_y_kent1, $.car5_z_kent1, 4.0, 4.0, 3.0))) {
                if (!(Camera.IsPointOnScreen($.car5_x_kent1, $.car5_y_kent1, $.car5_z_kent1, 4.0))) {
                  StuckCarCheck.Remove($.car5_kent1);
                  $.car5_kent1.removeUpsidedownCheck();
                  $.car5_kent1.markAsNoLongerNeeded();
                  $.car5_kent1 = Car.Create(COMET, $.car5_x_kent1, $.car5_y_kent1, $.car5_z_kent1);
                  $.ambush_guard5_kent1.setObjNoObj();
                  $.ambush_guard5_kent1.warpIntoCar($.car5_kent1);
                  $.guard5_car_mission_kent1 = 0;
                  $.ambush_guard5_do_stuff_kent1 = 1;
                }


              }


            }


          }


        }
        if ($.ambush_guard5_kent1.isInAnyCar()) {
          $.car5_kent1 = $.ambush_guard5_kent1.storeCarIsIn();
          $.car5_kent1.setCruiseSpeed(100.0);
          $.car5_kent1.addUpsidedownCheck();
          StuckCarCheck.Add($.car5_kent1, 0.5, 3000);
          $.car5_kent1.setForwardSpeed(30.0);
          $.flag_ambush_guard5_in_car_kent1 = 1;
        }


      }
      if ($.flag_ambush_guard5_in_car_kent1 == 1) {
        if (!(Car.IsDead($.car5_kent1))) {
          if ($.guard5_car_mission_kent1 == 0) {
            $.car5_kent1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.guard5_car_mission_kent1 = 1;
          }
          if ($.car5_kent1.isUpsidedown() || $.car5_kent1.isOnFire() || StuckCarCheck.IsCarStuck($.car5_kent1)) {
            $.ambush_guard5_kent1.setObjLeaveCar($.car5_kent1);
          }


        }
        if (!($.ambush_guard5_kent1.isInAnyCar())) {
          StuckCarCheck.Remove($.car5_kent1);
          $.car5_kent1.removeUpsidedownCheck();
          $.car5_kent1.markAsNoLongerNeeded();
          $.guard5_car_mission_kent1 = 0;
          $.ambush_guard5_do_stuff_kent1 = 0;
          $.flag_ambush_guard5_in_car_kent1 = 0;
        }


      }


    }


  }

  // guard6


  if ($.flag_ambush_guard6_dead_kent1 == 0) {
    if (Char.IsDead($.ambush_guard6_kent1)) {
      $.flag_ambush_guard6_dead_kent1 = 1;
    }
    else {
      if ($.chase_message_kent1 == 0) {
        if ($.ambush_guard6_kent1.isOnScreen()) {
          Text.PrintNow("KPM1_5", 5000, 1); //"Diaz's guys are after you get to the hospital."
          $.chase_message_kent1 = 1;
        }


      }
      if ($.flag_ambush_guard6_in_car_kent1 == 0) {
        if ($.ambush_guard6_kent1.isOnScreen()) {
          if ($.ambush_guard6_do_stuff_kent1 == 0) {
            $.ambush_guard6_kent1.clearThreatSearch();
            $.ambush_guard6_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.ambush_guard6_kent1.setObjKillPlayerAnyMeans($.player1);
            $.ambush_guard6_do_stuff_kent1 = 1;
          }


        }
        else {
          $.ambush_guard6_do_stuff_kent1 = 0;
          if ($.ambush_guard6_do_stuff_kent1 == 0) {
            if (!($.player1.locateAnyMeansChar2D($.ambush_guard6_kent1, 20.0, 20.0, false /* FALSE */))) {
              const _res310 = $.ambush_guard6_kent1.getCoordinates();
$.abguard6_x_kent1 = _res310.x;
$.abguard6_y_kent1 = _res310.y;
$.abguard6_z_kent1 = _res310.z;
              const _res311 = Path.GetClosestCarNode($.abguard6_x_kent1, $.abguard6_y_kent1, $.abguard6_z_kent1);
$.car6_x_kent1 = _res311.nodeX;
$.car6_y_kent1 = _res311.nodeY;
$.car6_z_kent1 = _res311.nodeZ;
              if (!(World.IsPointObscuredByAMissionEntity($.car6_x_kent1, $.car6_y_kent1, $.car6_z_kent1, 4.0, 4.0, 3.0))) {
                if (!(Camera.IsPointOnScreen($.car6_x_kent1, $.car6_y_kent1, $.car6_z_kent1, 4.0))) {
                  StuckCarCheck.Remove($.car6_kent1);
                  $.car6_kent1.removeUpsidedownCheck();
                  $.car6_kent1.markAsNoLongerNeeded();
                  $.car6_kent1 = Car.Create(COMET, $.car6_x_kent1, $.car6_y_kent1, $.car6_z_kent1);
                  $.ambush_guard6_kent1.setObjNoObj();
                  $.ambush_guard6_kent1.warpIntoCar($.car6_kent1);
                  $.guard6_car_mission_kent1 = 0;
                  $.ambush_guard6_do_stuff_kent1 = 1;
                }


              }


            }


          }


        }
        if ($.ambush_guard6_kent1.isInAnyCar()) {
          $.car6_kent1 = $.ambush_guard6_kent1.storeCarIsIn();
          $.car6_kent1.setCruiseSpeed(100.0);
          $.car6_kent1.addUpsidedownCheck();
          StuckCarCheck.Add($.car6_kent1, 0.5, 3000);
          $.car6_kent1.setForwardSpeed(30.0);
          $.ambush_guard6_do_stuff_kent1 = 0;
          $.flag_ambush_guard6_in_car_kent1 = 1;
        }


      }
      if ($.flag_ambush_guard6_in_car_kent1 == 1) {
        if (!(Car.IsDead($.car6_kent1))) {
          if ($.guard6_car_mission_kent1 == 0) {
            $.car6_kent1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.guard6_car_mission_kent1 = 1;
          }
          if ($.car6_kent1.isUpsidedown() || $.car6_kent1.isOnFire() || StuckCarCheck.IsCarStuck($.car6_kent1)) {
            $.ambush_guard6_kent1.setObjLeaveCar($.car6_kent1);
          }


        }
        if (!($.ambush_guard6_kent1.isInAnyCar())) {
          StuckCarCheck.Remove($.car6_kent1);
          $.car6_kent1.removeUpsidedownCheck();
          $.car6_kent1.markAsNoLongerNeeded();
          $.guard6_car_mission_kent1 = 0;
          $.ambush_guard6_do_stuff_kent1 = 0;
          $.flag_ambush_guard6_in_car_kent1 = 0;
        }


      }


    }


  }
}



async function guard_AI_kent1() {


  if ($.counter_guards_got_ai_kent1 < 11) {

    // buddy

    if ($.flag_buddy_got_ai_kent1 == 0) {
      if (!(Char.IsDead(buddy_kent1))) {
        if (!(buddy_kent1.isWaitingForWorldCollision())) {
          buddy_kent1.clearThreatSearch();
          buddy_kent1.setOnlyDamagedByPlayer(true /* TRUE */);
          buddy_kent1.setWaitState(34 /* WAITSTATE_LANCESITTING */, 1000000);
          buddy_kent1.setBleeding(true /* TRUE */);
          buddy_kent1.freezePosition(true /* TRUE */);
          buddy_kent1.setAsPlayerFriend($.player1, true /* TRUE */);
          ++$.counter_guards_got_ai_kent1;
          $.flag_buddy_got_ai_kent1 = 1;


        }


      }


    }

    // executioner

    if ($.flag_executioner_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.executioner_kent1))) {
        if (!($.executioner_kent1.isWaitingForWorldCollision())) {
          $.executioner_kent1.clearThreatSearch();
          $.executioner_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.executioner_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo
          $.executioner_kent1.setAccuracy(80);
          $.executioner_kent1.setHeading(196.450);
          $.executioner_kent1.setStayInSamePlace(true /* TRUE */);
          $.executioner_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_executioner_got_ai_kent1 = 1;


        }


      }


    }

    // guard1

    if ($.flag_guard1_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard1_kent1))) {
        if (!($.guard1_kent1.isWaitingForWorldCollision())) {
          $.guard1_kent1.clearThreatSearch();
          $.guard1_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard1_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard1_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo

          //	SET_CHAR_ACCURACY guard1_kent1 80

          Path.AddRoutePoint(0, $.route0_point1_x_kent1, $.route0_point1_y_kent1, $.route0_point1_z_kent1);
          Path.AddRoutePoint(0, $.route0_point2_x_kent1, $.route0_point2_y_kent1, $.route0_point2_z_kent1);
          Path.AddRoutePoint(0, $.route0_point3_x_kent1, $.route0_point3_y_kent1, $.route0_point3_z_kent1);
          Path.AddRoutePoint(0, $.route0_point4_x_kent1, $.route0_point4_y_kent1, $.route0_point4_z_kent1);
          $.guard1_kent1.setObjFollowRoute(0, 3 /* FOLLOW_ROUTE_LOOP */);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard1_got_ai_kent1 = 1;


        }


      }


    }

    // guard2

    if ($.flag_guard2_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard2_kent1))) {
        if (!($.guard2_kent1.isWaitingForWorldCollision())) {
          $.guard2_kent1.clearThreatSearch();
          $.guard2_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard2_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard2_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo

          //	SET_CHAR_ACCURACY guard2_kent1 80

          $.guard2_kent1.setHeading($.guard2_heading_kent1);
          $.guard2_kent1.setStayInSamePlace(true /* TRUE */);
          $.guard2_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard2_got_ai_kent1 = 1;


        }


      }


    }

    // guard3

    if ($.flag_guard3_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard3_kent1))) {
        if (!($.guard3_kent1.isWaitingForWorldCollision())) {
          $.guard3_kent1.clearThreatSearch();
          $.guard3_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard3_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard3_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo

          //	SET_CHAR_ACCURACY guard3_kent1 80

          $.guard3_kent1.setHeading($.guard3_heading_kent1);
          $.guard3_kent1.setStayInSamePlace(true /* TRUE */);
          $.guard3_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard3_got_ai_kent1 = 1;


        }


      }


    }

    // guard4

    if ($.flag_guard4_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard4_kent1))) {
        if (!($.guard4_kent1.isWaitingForWorldCollision())) {
          $.guard4_kent1.clearThreatSearch();
          $.guard4_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard4_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard4_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo

          //	SET_CHAR_ACCURACY guard4_kent1 80

          Path.AddRoutePoint(1, $.route1_point1_x_kent1, $.route1_point1_y_kent1, $.route1_point1_z_kent1);
          Path.AddRoutePoint(1, $.route1_point2_x_kent1, $.route1_point2_y_kent1, $.route1_point2_z_kent1);
          Path.AddRoutePoint(1, $.route1_point3_x_kent1, $.route1_point3_y_kent1, $.route1_point3_z_kent1);
          Path.AddRoutePoint(1, $.route1_point4_x_kent1, $.route1_point4_y_kent1, $.route1_point4_z_kent1);
          Path.AddRoutePoint(1, $.route1_point5_x_kent1, $.route1_point5_y_kent1, $.route1_point5_z_kent1);
          Path.AddRoutePoint(1, $.route1_point6_x_kent1, $.route1_point6_y_kent1, $.route1_point6_z_kent1);
          Path.AddRoutePoint(1, $.route1_point7_x_kent1, $.route1_point7_y_kent1, $.route1_point7_z_kent1);
          Path.AddRoutePoint(1, $.route1_point8_x_kent1, $.route1_point8_y_kent1, $.route1_point8_z_kent1);
          $.guard4_kent1.setObjFollowRoute(1, 3 /* FOLLOW_ROUTE_LOOP */);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard4_got_ai_kent1 = 1;


        }


      }


    }

    // guard6

    if ($.flag_guard6_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard6_kent1))) {
        if (!($.guard6_kent1.isWaitingForWorldCollision())) {
          $.guard6_kent1.clearThreatSearch();
          $.guard6_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard6_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard6_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo

          //	SET_CHAR_ACCURACY guard6_kent1 80

          Path.AddRoutePoint(2, $.route2_point1_x_kent1, $.route2_point1_y_kent1, $.route2_point1_z_kent1);
          Path.AddRoutePoint(2, $.route2_point2_x_kent1, $.route2_point2_y_kent1, $.route2_point2_z_kent1);
          Path.AddRoutePoint(2, $.route2_point3_x_kent1, $.route2_point3_y_kent1, $.route2_point3_z_kent1);
          $.guard6_kent1.setObjFollowRoute(2, 3 /* FOLLOW_ROUTE_LOOP */);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard6_got_ai_kent1 = 1;


        }


      }


    }

    // guard7

    if ($.flag_guard7_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard7_kent1))) {
        if (!($.guard7_kent1.isWaitingForWorldCollision())) {
          $.guard7_kent1.clearThreatSearch();
          $.guard7_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard7_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard7_kent1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000); // set infinate ammo
          $.guard7_kent1.setAccuracy(80);
          $.guard7_kent1.setStayInSamePlace(true /* TRUE */);
          $.guard7_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard7_got_ai_kent1 = 1;


        }


      }


    }

    // guard8

    if ($.flag_guard8_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard8_kent1))) {
        if (!($.guard8_kent1.isWaitingForWorldCollision())) {
          $.guard8_kent1.clearThreatSearch();
          $.guard8_kent1.setHeading(289.74);
          $.guard8_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard8_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard8_kent1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000); // set infinate ammo
          $.guard8_kent1.setAccuracy(80);
          $.guard8_kent1.setStayInSamePlace(true /* TRUE */);
          $.guard8_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard8_got_ai_kent1 = 1;


        }


      }


    }

    // gaurd9

    if ($.flag_guard9_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard9_kent1))) {
        if (!($.guard9_kent1.isWaitingForWorldCollision())) {
          $.guard9_kent1.clearThreatSearch();
          $.guard9_kent1.setHeading(289.74);
          $.guard9_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard9_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard9_kent1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000); // set infinate ammo
          $.guard9_kent1.setAccuracy(80);
          $.guard9_kent1.setStayInSamePlace(true /* TRUE */);
          $.guard9_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard9_got_ai_kent1 = 1;


        }


      }


    }

    // guard10

    if ($.flag_guard10_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard10_kent1))) {
        if (!($.guard10_kent1.isWaitingForWorldCollision())) {
          $.guard10_kent1.clearThreatSearch();
          $.guard10_kent1.setHeading(87.550);
          $.guard10_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard10_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard10_kent1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000); // set infinate ammo

          //	SET_CHAR_ACCURACY guard10_kent1 80

          $.guard10_kent1.setStayInSamePlace(true /* TRUE */);
          $.guard10_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard10_got_ai_kent1 = 1;


        }


      }


    }

    // Guard11

    if ($.flag_guard11_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard11_kent1))) {
        if (!($.guard11_kent1.isWaitingForWorldCollision())) {
          $.guard11_kent1.clearThreatSearch();
          $.guard11_kent1.setHeading(128.477);
          $.guard11_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard11_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard11_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo

          //SET_CHAR_ACCURACY guard11_kent1 80

          $.guard11_kent1.setStayInSamePlace(true /* TRUE */);
          $.guard11_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard11_got_ai_kent1 = 1;


        }


      }


    }

    // Guard12

    if ($.flag_guard12_got_ai_kent1 == 0) {
      if (!(Char.IsDead($.guard12_kent1))) {
        if (!($.guard12_kent1.isWaitingForWorldCollision())) {
          $.guard12_kent1.clearThreatSearch();
          $.guard12_kent1.setHeading(98.364);
          $.guard12_kent1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard12_kent1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.guard12_kent1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000); // set infinate ammo

          //SET_CHAR_ACCURACY guard12_kent1 80

          $.guard12_kent1.setStayInSamePlace(true /* TRUE */);
          $.guard12_kent1.setObjKillPlayerOnFoot($.player1);
          ++$.counter_guards_got_ai_kent1;
          $.flag_guard12_got_ai_kent1 = 1;


        }


      }


    }


  }
}

export async function kent1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************KENT PAUL 1*************************************
  // ****************************************RESCUE BUDDY*************************************\
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // Death Row

  // SCRIPT_NAME kent1

  // Mission start stuff


  await mission_start_kent1();  // SCM GOSUB mission_start_kent1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_kent1_failed();  // SCM GOSUB mission_kent1_failed
  }


  await mission_cleanup_kent1();  // SCM GOSUB mission_cleanup_kent1


  // MissionBoundary




  // Variables for mission

  // buddy


  // LVAR_INT buddy_kent1


  // LVAR_INT buddys_health_kent1


  // LVAR_INT flag_buddy_home_kent1


  // LVAR_INT flag_buddy_dead_kent1


  // LVAR_INT flag_buddy_in_group_kent1


  // VAR_INT buddy_life_guage_kent1


  // LVAR_INT radar_blip_buddy_kent1


  // LVAR_FLOAT buddy_x_kent1


  // LVAR_FLOAT buddy_y_kent1


  // LVAR_FLOAT buddy_z_kent1


  // LVAR_FLOAT buddy_heading_kent1


  // LVAR_INT flag_buddy_vulnerable_kent1


  // LVAR_INT flag_buddy_joined_player


  // LVAR_INT flag_had_buddy_message_kent1


  // VAR_INT flag_player_been_spotted_kent1

  // executioner


  // VAR_INT executioner_kent1


  // VAR_FLOAT executioner_x_kent1


  // VAR_FLOAT executioner_y_kent1


  // VAR_FLOAT executioner_z_kent1


  // VAR_INT flag_executioner_dead_kent1


  // VAR_INT flag_executioner_chase_kent1

  // Guard1


  // VAR_INT guard1_kent1


  // VAR_INT flag_guard1_dead_kent1

  //VAR_INT flag_guard1_chase_kent1


  // VAR_FLOAT guard1_x_kent1


  // VAR_FLOAT guard1_y_kent1


  // VAR_FLOAT guard1_z_kent1


  // VAR_FLOAT route0_point1_x_kent1


  // VAR_FLOAT route0_point1_y_kent1


  // VAR_FLOAT route0_point1_z_kent1


  // VAR_FLOAT route0_point2_x_kent1


  // VAR_FLOAT route0_point2_y_kent1


  // VAR_FLOAT route0_point2_z_kent1


  // VAR_FLOAT route0_point3_x_kent1


  // VAR_FLOAT route0_point3_y_kent1


  // VAR_FLOAT route0_point3_z_kent1


  // VAR_FLOAT route0_point4_x_kent1


  // VAR_FLOAT route0_point4_y_kent1


  // VAR_FLOAT route0_point4_z_kent1

  // Guard2


  // VAR_INT guard2_kent1


  // VAR_INT flag_guard2_dead_kent1


  // VAR_INT flag_guard2_chase_kent1


  // VAR_FLOAT guard2_x_kent1


  // VAR_FLOAT guard2_y_kent1


  // VAR_FLOAT guard2_z_kent1


  // VAR_FLOAT guard2_heading_kent1

  // Guard3


  // VAR_INT guard3_kent1


  // VAR_INT flag_guard3_dead_kent1


  // VAR_INT flag_guard3_chase_kent1


  // VAR_FLOAT guard3_x_kent1


  // VAR_FLOAT guard3_y_kent1


  // VAR_FLOAT guard3_z_kent1


  // VAR_FLOAT guard3_heading_kent1

  // Guard4


  // VAR_INT guard4_kent1


  // VAR_INT flag_guard4_dead_kent1


  // VAR_INT flag_guard4_chase_kent1


  // VAR_FLOAT guard4_x_kent1


  // VAR_FLOAT guard4_y_kent1


  // VAR_FLOAT guard4_z_kent1


  // VAR_FLOAT route1_point1_x_kent1


  // VAR_FLOAT route1_point1_y_kent1


  // VAR_FLOAT route1_point1_z_kent1


  // VAR_FLOAT route1_point2_x_kent1


  // VAR_FLOAT route1_point2_y_kent1


  // VAR_FLOAT route1_point2_z_kent1


  // VAR_FLOAT route1_point3_x_kent1


  // VAR_FLOAT route1_point3_y_kent1


  // VAR_FLOAT route1_point3_z_kent1


  // VAR_FLOAT route1_point4_x_kent1


  // VAR_FLOAT route1_point4_y_kent1


  // VAR_FLOAT route1_point4_z_kent1


  // VAR_FLOAT route1_point5_x_kent1


  // VAR_FLOAT route1_point5_y_kent1


  // VAR_FLOAT route1_point5_z_kent1


  // VAR_FLOAT route1_point6_x_kent1


  // VAR_FLOAT route1_point6_y_kent1


  // VAR_FLOAT route1_point6_z_kent1


  // VAR_FLOAT route1_point7_x_kent1


  // VAR_FLOAT route1_point7_y_kent1


  // VAR_FLOAT route1_point7_z_kent1


  // VAR_FLOAT route1_point8_x_kent1


  // VAR_FLOAT route1_point8_y_kent1


  // VAR_FLOAT route1_point8_z_kent1

  // Guard6


  // VAR_INT guard6_kent1


  // VAR_INT flag_guard6_dead_kent1


  // VAR_INT flag_guard6_chase_kent1


  // VAR_FLOAT guard6_x_kent1


  // VAR_FLOAT guard6_y_kent1


  // VAR_FLOAT guard6_z_kent1


  // VAR_FLOAT route2_point1_x_kent1


  // VAR_FLOAT route2_point1_y_kent1


  // VAR_FLOAT route2_point1_z_kent1


  // VAR_FLOAT route2_point2_x_kent1


  // VAR_FLOAT route2_point2_y_kent1


  // VAR_FLOAT route2_point2_z_kent1


  // VAR_FLOAT route2_point3_x_kent1


  // VAR_FLOAT route2_point3_y_kent1


  // VAR_FLOAT route2_point3_z_kent1

  // Guard7


  // VAR_INT guard7_kent1


  // VAR_INT flag_guard7_dead_kent1

  // Guard8


  // VAR_INT guard8_kent1


  // VAR_INT flag_guard8_dead_kent1


  // VAR_INT flag_guard8_chase_kent1

  // Guard9


  // VAR_INT guard9_kent1


  // VAR_INT flag_guard9_dead_kent1


  // VAR_INT flag_guard9_chase_kent1

  // Guard10


  // VAR_INT guard10_kent1


  // VAR_INT flag_guard10_dead_kent1


  // VAR_INT flag_guard10_chase_kent1

  // Guard11


  // VAR_INT guard11_kent1


  // VAR_INT flag_guard11_dead_kent1


  // VAR_INT flag_guard11_chase_kent1

  // Guard12


  // VAR_INT guard12_kent1


  // VAR_INT flag_guard12_dead_kent1


  // VAR_INT flag_guard12_chase_kent1

  // Second wave of guards

  // Guard13


  // VAR_INT guard13_kent1


  // VAR_INT flag_guard13_dead_kent1

  // Guard 14


  // VAR_INT guard14_kent1


  // VAR_INT flag_guard14_dead_kent1

  // Guard 15


  // VAR_INT guard15_kent1


  // VAR_INT flag_guard15_dead_kent1

  // guard16


  // VAR_INT guard16_kent1


  // VAR_INT flag_guard16_dead_kent1

  // general


  // VAR_INT radar_blip_coord1_kent1


  // VAR_FLOAT home_x_kent1


  // VAR_FLOAT home_y_kent1


  // VAR_FLOAT home_z_kent1

  // Ambush patrol stuff


  // VAR_INT flag_create_2nd_guards_kent1


  // VAR_INT flag_created_ambush_kent1



  // VAR_INT ambush_guard3_kent1


  // VAR_INT flag_ambush_guard3_dead_kent1


  // VAR_INT ambush_guard3_do_stuff_kent1


  // VAR_INT ambush_guard4_kent1


  // VAR_INT flag_ambush_guard4_dead_kent1


  // VAR_INT ambush_guard4_do_stuff_kent1

  // Dummy stuff before I create teh characters


  // VAR_INT car2_kent1


  // VAR_INT car3_kent1


  // VAR_INT car4_kent1


  // VAR_INT car5_kent1


  // VAR_INT car6_kent1


  // VAR_INT ambush_guard5_kent1


  // VAR_INT flag_ambush_guard5_dead_kent1


  // VAR_INT ambush_guard5_do_stuff_kent1


  // VAR_INT ambush_guard6_kent1


  // VAR_INT flag_ambush_guard6_dead_kent1


  // VAR_INT ambush_guard6_do_stuff_kent1

  // World collision stuff


  // VAR_INT flag_executioner_got_AI_kent1


  // VAR_INT flag_buddy_got_AI_kent1


  // VAR_INT flag_guard1_got_AI_kent1


  // VAR_INT flag_guard2_got_AI_kent1


  // VAR_INT flag_guard3_got_AI_kent1


  // VAR_INT flag_guard4_got_AI_kent1

  //VAR_INT flag_guard5_got_AI_kent1


  // VAR_INT flag_guard6_got_AI_kent1


  // VAR_INT flag_guard7_got_AI_kent1


  // VAR_INT flag_guard8_got_AI_kent1


  // VAR_INT flag_guard9_got_AI_kent1


  // VAR_INT flag_guard10_got_AI_kent1


  // VAR_INT flag_guard11_got_AI_kent1


  // VAR_INT flag_guard12_got_AI_kent1


  // VAR_INT counter_guards_got_AI_kent1

  // mini cutscene stuff


  // VAR_INT flag_player_audio_kent1


  // VAR_INT flag_buddy_free_kent1


  // VAR_INT flag_mini_cut1_over_kent1


  // VAR_INT buddy_car_kent1


  // VAR_INT car7_kent1


  // VAR_INT flag_ambush_guard3_in_car_kent1


  // VAR_INT flag_ambush_guard4_in_car_kent1


  // VAR_INT flag_ambush_guard5_in_car_kent1


  // VAR_INT flag_ambush_guard6_in_car_kent1

  // Stores players weapons for scripted cutscene


  // VAR_INT stored_current_weapon_kent1

  // Used to help game


  // VAR_INT guard3_car_mission_kent1


  // VAR_INT guard4_car_mission_kent1


  // VAR_INT guard5_car_mission_kent1


  // VAR_INT guard6_car_mission_kent1

  // chase message stuff


  // VAR_INT chase_message_kent1

  // Frame counter to make guards do stuff


  // VAR_INT frame_counter_kent1

  // New blip stuff for leading the player into the scrap yeard


  // VAR_INT radar_blip_cheat_kent1


  // VAR_INT flag_cheat_blip_on_kent1

  // Car warping stuff


  // VAR_FLOAT car3_x_kent1 car3_y_kent1 car3_z_kent1


  // VAR_FLOAT abguard3_x_kent1 abguard3_y_kent1 abguard3_z_kent1


  // VAR_FLOAT car4_x_kent1 car4_y_kent1 car4_z_kent1


  // VAR_FLOAT abguard4_x_kent1 abguard4_y_kent1 abguard4_z_kent1


  // VAR_FLOAT car5_x_kent1 car5_y_kent1 car5_z_kent1


  // VAR_FLOAT abguard5_x_kent1 abguard5_y_kent1 abguard5_z_kent1


  // VAR_FLOAT car6_x_kent1 car6_y_kent1 car6_z_kent1


  // VAR_FLOAT abguard6_x_kent1 abguard6_y_kent1 abguard6_z_kent1

  // second wave counter


  // VAR_INT counter_no_of_guys_dead_kent1


  // VAR_INT flag_second_wave_created_kent1

  // ****************************************Mission Start************************************


}
