// Generated from main/hait3.sc

import { $ } from "../utils/vars.mts";

async function mission_start_haitian3() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;



  $.flag_player_spotted_hait3 = 0;

  //players_x_hait3 = 0.0

  //players_y_hait3 = 0.0

  //players_z_hait3 = 0.0

  // fight 1


  $.flag_fight1_over_hait3 = 0;

  // Cuban1


  $.flag_cuban1_dead_hait3 = 0;


  $.flag_cuban1_got_ai_hait3 = 0;

  // Cuban2


  $.flag_cuban2_dead_hait3 = 0;


  $.flag_cuban2_got_ai_hait3 = 0;

  // Cuban3


  $.flag_cuban3_dead_hait3 = 0;


  $.flag_cuban3_got_ai_hait3 = 0;

  // Cuban4


  $.flag_cuban4_dead_hait3 = 0;


  $.flag_cuban4_got_ai_hait3 = 0;

  // Cuban5


  $.flag_cuban5_dead_hait3 = 0;


  $.flag_cuban5_got_ai_hait3 = 0;

  // Cuban6


  $.flag_cuban6_dead_hait3 = 0;


  $.flag_cuban6_got_ai_hait3 = 0;

  // Cuban7


  $.flag_cuban7_dead_hait3 = 0;


  $.flag_cuban7_got_ai_hait3 = 0;

  // Cuban8


  $.flag_cuban8_dead_hait3 = 0;


  $.flag_cuban8_got_ai_hait3 = 0;

  // Cuban9


  $.flag_cuban9_dead_hait3 = 0;


  $.flag_cuban9_got_ai_hait3 = 0;

  // Cuban10


  $.flag_cuban10_dead_hait3 = 0;


  $.flag_cuban10_got_ai_hait3 = 0;

  // Haitian1


  $.flag_haitian1_dead_hait3 = 0;


  $.flag_haitian1_got_ai_hait3 = 0;

  // Haitian2


  $.flag_haitian2_dead_hait3 = 0;


  $.flag_haitian1_got_ai_hait3 = 0;

  // Haitian 3


  $.flag_haitian3_dead_hait3 = 0;


  $.flag_haitian3_got_ai_hait3 = 0;

  // Haitian4


  $.flag_haitian4_dead_hait3 = 0;


  $.flag_haitian4_got_ai_hait3 = 0;

  // Haitian5


  $.flag_haitian5_dead_hait3 = 0;


  $.flag_haitian5_got_ai_hait3 = 0;

  // Haitian6


  $.flag_haitian6_dead_hait3 = 0;


  $.flag_haitian6_got_ai_hait3 = 0;

  // Haitian7


  $.flag_haitian7_dead_hait3 = 0;


  $.flag_haitian7_got_ai_hait3 = 0;

  // Haitian8


  $.flag_haitian8_dead_hait3 = 0;


  $.flag_haitian8_got_ai_hait3 = 0;

  // Haitian9


  $.flag_haitian9_dead_hait3 = 0;


  $.flag_haitian9_got_ai_hait3 = 0;

  // Haitian10


  $.flag_haitian10_dead_hait3 = 0;


  $.flag_haitian10_got_ai_hait3 = 0;

  // Ambush stuff


  $.flag_ambush1_created_hait3 = 0;


  $.flag_ambush2_created_hait3 = 0;


  $.truck1_dead_hait3 = 0;


  $.truck1_x_hait3 = -924.912;


  $.truck1_y_hait3 = 35.082;


  $.truck1_z_hait3 = 9.54;


  $.truck1_dest_x_hait3 = -896.317;


  $.truck1_dest_y_hait3 = 34.08;


  $.truck1_dest_z_hait3 = 9.54;


  $.ambush_driver1_dead_hait3 = 0;


  $.ambush_driver1_target_hait3 = 0;


  $.ambush_cuban1_dead_hait3 = 0;


  $.ambush_cuban1_target_hait3 = 0;


  $.ambush_cuban2_dead_hait3 = 0;


  $.ambush_cuban2_target_hait3 = 0;


  $.ambush_cuban3_dead_hait3 = 0;


  $.ambush_cuban3_target_hait3 = 0;


  $.ambush_cuban4_dead_hait3 = 0;


  $.ambush_cuban4_target_hait3 = 0;


  $.ambush_cuban5_dead_hait3 = 0;


  $.ambush_cuban5_target_hait3 = 0;


  $.ambush_cuban6_dead_hait3 = 0;


  $.ambush_cuban6_target_hait3 = 0;


  $.ambush_cuban7_dead_hait3 = 0;


  $.ambush_cuban7_target_hait3 = 0;


  $.ambush_cuban8_dead_hait3 = 0;


  $.ambush_cuban8_target_hait3 = 0;


  $.ambush_cuban9_dead_hait3 = 0;


  $.ambush_cuban9_target_hait3 = 0;


  $.fight1_x_hait3 = -899.655;


  $.fight1_y_hait3 = 44.99;


  $.fight1_z_hait3 = 9.076;


  $.flag_truck1_in_position_hait3 = 0;


  $.driver1_goto_position_hait3 = 0;


  $.cuban1_goto_position_hait3 = 0;


  $.cuban2_goto_position_hait3 = 0;


  $.cuban3_goto_position_hait3 = 0;


  $.cuban4_goto_position_hait3 = 0;


  $.cuban5_goto_position_hait3 = 0;


  $.cuban6_goto_position_hait3 = 0;


  $.cuban7_goto_position_hait3 = 0;


  $.cuban8_goto_position_hait3 = 0;


  $.cuban9_goto_position_hait3 = 0;

  // Guys dieing stuff


  $.flag_guys_can_die_hait3 = 0;


  $.all_peds_can_die_hait3 = 0;


  $.counter_peds_got_ai_hait3 = 0;

  // AI timer stuff

  //game_time_hait3 = 0

  //timer_cubans1_act_hait3 = 0

  //time_to_act_cubans1_hait3 = 0

  //timer_started_cubans1_hait3 = 0

  //timer_cubans2_act_hait3 = 0

  //time_to_act_cubans2_hait3 = 0

  //timer_started_cubans2_hait3 = 0

  //timer_haitians1_act_hait3 = 0

  //time_to_act_haitians1_hait3 = 0

  //timer_started_haitians1_hait3 = 0

  //timer_haitians2_act_hait3 = 0

  //time_to_act_haitians2_hait3 = 0

  //timer_started_haitians2_hait3 = 0

  // Choosing next target stuff


  $.gosub_cuban1_x_hait3 = 0.0;


  $.gosub_cuban1_y_hait3 = 0.0;


  $.gosub_cuban1_z_hait3 = 0.0;


  $.gosub_haitian1_x_hait3 = 0.0;


  $.gosub_haitian1_y_hait3 = 0.0;


  $.gosub_haitian1_z_hait3 = 0.0;


  $.closest_dist_hait3 = 0.0;


  $.closest_haitian_hait3 = 0;


  $.closest_cuban_hait3 = 0;


  $.distance_check_targ_hait3 = 0;


  $.targ_hat_x_hait3 = 0.0;


  $.targ_hat_y_hait3 = 0.0;


  $.targ_hat_z_hait3 = 0.0;


  $.current_dist_hait3 = 0.0;


  $.closest_dist_hait3 = 0.0;


  $.haitian1_target_hait3 = 0;


  $.haitian2_target_hait3 = 0;


  $.haitian3_target_hait3 = 0;


  $.haitian4_target_hait3 = 0;


  $.haitian5_target_hait3 = 0;


  $.haitian6_target_hait3 = 0;


  $.haitian7_target_hait3 = 0;


  $.haitian8_target_hait3 = 0;


  $.haitian9_target_hait3 = 0;


  $.haitian10_target_hait3 = 0;


  $.cuban1_target_hait3 = 0;


  $.cuban2_target_hait3 = 0;


  $.cuban3_target_hait3 = 0;


  $.cuban4_target_hait3 = 0;


  $.cuban5_target_hait3 = 0;


  $.cuban6_target_hait3 = 0;


  $.cuban7_target_hait3 = 0;


  $.cuban8_target_hait3 = 0;


  $.cuban9_target_hait3 = 0;


  $.cuban10_target_hait3 = 0;


  $.targ_cub_x_hait3 = 0.0;


  $.targ_cub_y_hait3 = 0.0;


  $.targ_cub_z_hait3 = 0.0;

  // Player warning stuff


  $.player_had_warning_message_hait3 = 0;


  $.player_spotted_melee_hait3 = 0;


  $.frame_counter_hait3 = 0;


  $.flag_death_timer_hait3 = 0;


  await asyncWait(0);


  Text.LoadMissionText("HAIT3");


  Shortcut.SetDropoffPointForMission(-957.904, 122.843, 8.278, 356.948);




  // ****************************************START OF CUTSCENE********************************


  $.ambush_driver1_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_driver1_blip_hait3.remove();
  $.ambush_cuban1_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban1_blip_hait3.remove();
  $.ambush_cuban2_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban2_blip_hait3.remove();
  $.ambush_cuban3_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban3_blip_hait3.remove();
  $.ambush_cuban4_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban4_blip_hait3.remove();
  $.ambush_cuban5_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban5_blip_hait3.remove();
  $.ambush_cuban6_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban6_blip_hait3.remove();
  $.ambush_cuban7_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban7_blip_hait3.remove();
  $.ambush_cuban8_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban8_blip_hait3.remove();
  $.ambush_cuban9_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.ambush_cuban9_blip_hait3.remove();
  $.cuban1_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban1_blip_hait3.remove();
  $.cuban2_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban2_blip_hait3.remove();
  $.cuban3_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban3_blip_hait3.remove();
  $.cuban4_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban4_blip_hait3.remove();
  $.cuban5_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban5_blip_hait3.remove();
  $.cuban6_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban6_blip_hait3.remove();
  $.cuban7_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban7_blip_hait3.remove();
  $.cuban8_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban8_blip_hait3.remove();
  $.cuban9_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban9_blip_hait3.remove();
  $.cuban10_blip_hait3 = Blip.AddForCoord($.fight1_x_hait3, $.fight1_y_hait3, $.fight1_z_hait3);
  $.cuban10_blip_hait3.remove();


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "apoulet");


  Streaming.LoadSpecialModel(CUTOBJ01, "htable");
  Streaming.LoadSpecialModel(CUTOBJ02, "hatrifl");


  Streaming.LoadScene(-962.697, 149.793, 10.21);


  Streaming.SetAreaVisible(12 /* VIS_POLICE_STATION */);


  World.SetExtraColors(13, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  Cutscene.Load("hat_3");


  Cutscene.SetOffset(-962.799, 148.391, 8.355);


  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_apoulet = CutsceneObject.Create(SPECIAL02);
  $.cs_apoulet.setAnim("apoulet");


  $.cs_htable = CutsceneObject.Create(CUTOBJ01);
  $.cs_htable.setAnim("htable");


  $.cs_rifle = CutsceneObject.Create(CUTOBJ02);
  $.cs_rifle.setAnim("hatrifl");


  World.ClearArea(-962.53, 141.69, 8.25, 2.0, true /* TRUE */);
  $.player1.setCoordinates(-962.53, 141.69, 8.25);
  $.player1.setHeading(183.42);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1734) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_A", 10000, 1); //"Hello, hello, I uh..I'm looking for somebody around here..."


  while ($.cs_time < 6820) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_B", 10000, 1); //"You looking hungry Tommy."


  while ($.cs_time < 9485) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_C", 10000, 1); //"Do I know you?"


  while ($.cs_time < 11125) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_D", 10000, 1); //"Hush now.2


  while ($.cs_time < 12511) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_E", 10000, 1); //"One more ting an den I can let you go Tommy."


  while ($.cs_time < 15894) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_F", 10000, 1); //"My boys gone war wit dem Cuban boys."


  while ($.cs_time < 19040) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_G", 10000, 1); //"But no guns"


  while ($.cs_time < 20758) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_H", 10000, 1); //"Hmm, but de Cubans have a surprise a comin'."


  while ($.cs_time < 23591) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_I", 10000, 1); //"While they fight in de streets, you take this rifle."


  while ($.cs_time < 28128) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_J", 10000, 1); //"No one sees you, no one hear you."


  while ($.cs_time < 32020) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_K", 10000, 1); //"Now Tommy? You do this for me, and you no longer tied to me apron strings."


  while ($.cs_time < 37941) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("HAM3_L", 10000, 1); //"'kay auntie."


  while ($.cs_time < 39680) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 42464) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Streaming.LoadScene(-962.53, 141.69, 8.25);


  World.ClearExtraColors(false /* FALSE */);


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);


  // ****************************************END OF CUTSCENE**********************************


  $.player1.setMood(0 /* PLAYER_MOOD_CALM */, 60000);

  //Request the models for the mission


  Streaming.RequestModel(HNa); // Haitian model a


  Streaming.RequestModel(HNb); // Haitian model b


  Streaming.RequestModel(CBa); // Cuban model a


  Streaming.RequestModel(CBb); // Cuban model b


  Streaming.RequestModel(7 /* SNIPER */); // special choice


  Streaming.RequestModel(BURRITO);


  Streaming.RequestModel(KATANA);

  // Waiting for the models to load


  while (!(Streaming.HasModelLoaded(HNa)) || !(Streaming.HasModelLoaded(CBa)) || !(Streaming.HasModelLoaded(7 /* SNIPER */)) || !(Streaming.HasModelLoaded(HNb)) || !(Streaming.HasModelLoaded(CBb)) || !(Streaming.HasModelLoaded(BURRITO))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(KATANA))) {
    await asyncWait(0);


  }


  $.distance_check_targ_hait3 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, CBa, -886.519, 41.28, 10.55);


  $.distance_check_targ_hait3.delete();

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.player1.shutUp(true /* TRUE */);


  Game.SetWantedMultiplier(0.5); // Changes the number of points


  Text.PrintNow("HAM3_1", 5000, 1); //"We must win this battle, If all the Haitians die we lose."


  Text.Print("HAM3_5", 5000, 1); //"You must kill the Cubans from a distance, you must not be seen."

  //PRINT ( HAM3_6 ) 5000 1 //"Use the sniper rifle I have left to acomplish your task."

  // creates the peds


  $.cuban1_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -886.519, 41.28, 10.55);


  $.cuban2_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBb, -885.463, 42.655, 9.23);


  $.cuban3_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -905.0, 51.60, 8.89);


  $.cuban4_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBb, -906.26, 49.95, 9.02);


  $.cuban5_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -911.60, 52.28, 9.57);


  $.cuban6_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBb, -908.00, 52.40, 9.24);


  $.cuban7_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -906.214, 43.41, 9.54);


  $.cuban8_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBb, -906.01, 45.03, 9.41);


  $.cuban9_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -895.35, 42.26, 9.61);


  $.cuban10_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBb, -894.96, 44.63, 9.43);

  ////////////////////////////////////////////////////////////////////////


  $.haitian1_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNa, -888.798, 41.597, 9.52);


  $.haitian2_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNb, -887.580, 43.48, 9.15);


  $.haitian3_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNa, -906.13, 47.765, 9.19);


  $.haitian4_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNb, -903.61, 46.140, 9.32);


  $.haitian5_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNa, -911.57, 50.46, 9.57);


  $.haitian6_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNb, -908.85, 49.48, 9.41);


  $.haitian7_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNa, -901.190, 42.70, 9.61);


  $.haitian8_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNb, -899.254, 44.676, 9.43);


  $.haitian9_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNa, -886.33, 43.70, 9.05);


  $.haitian10_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNb, -886.68, 41.40, 9.51);


  if ($.flag_fight1_over_hait3 == 0) {
    $.radar_blip_coord1_hait3 = Blip.AddForCoord(-892.59, 75.3, 15.4);
    $.sphere1_hait3 = Sphere.Create(-892.59, 75.3, 15.4, 2.0);
  }


  $.player1.giveWeapon(28 /* WEAPONTYPE_SNIPERRIFLE */, 30);

  // waiting for the player1 to kill all the cubans at fight location one


  TIMERA = 0;


  TIMERB = 0;


  $.counter_dead_cuban = 0;


  $.counter_dead_haitian = 0;


  $.flag_fight_over_hait3 = 0;


  while ($.flag_fight_over_hait3 == 0) {
    await asyncWait(0);
    ++$.frame_counter_hait3;
    if ($.frame_counter_hait3 > 30) {
      $.frame_counter_hait3 = 0;
    }

    //GET_GAME_TIMER game_time_hait3

    if ($.counter_peds_got_ai_hait3 < 20) {
      await ped_ai_hait3();  // SCM GOSUB ped_ai_hait3
    }
    $.player1.clearWantedLevel();
    await dead_cuban_check();  // SCM GOSUB dead_cuban_check
    await dead_haitian_check();  // SCM GOSUB dead_haitian_check
    if ($.counter_dead_cuban >= 20) {
      $.flag_fight_over_hait3 = 1;
    }
    if ($.counter_dead_haitian >= 3) {
      if ($.player_had_warning_message_hait3 == 0) {
        Text.PrintNow("HAM3_8", 5000, 1); //"You were supposed to kill the Cubans not Haitians!"
        $.player_had_warning_message_hait3 = 1;
      }


    }
    if ($.counter_dead_haitian >= 10) {
      Text.PrintNow("HAM3_2", 5000, 1); //"You were supposed to kill the Cubans not Haitians!"
      // SCM GOTO → mission_haitian3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_haitian3_failed"); // fallback: would break linear control flow
    }
    if ($.flag_player_spotted_hait3 == 1 || $.player_spotted_melee_hait3 == 1) {
      Text.PrintNow("HAM3_4", 5000, 1); //"You have been spotted the mission is a failure!"
      // SCM GOTO → mission_haitian3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_haitian3_failed"); // fallback: would break linear control flow
    }

    // removes blips if rifles have been picked up

    if ($.player1.isInAngledArea3D(-936.42, 109.11, 13.0, -873.118, 45.222, 18.0, 30.0, false /* FALSE */)) {
      if ($.flag_death_timer_hait3 == 0) {
        TIMERB = 0;
        $.flag_death_timer_hait3 = 1;
      }
      if ($.all_peds_can_die_hait3 == 0) {
        if (TIMERA > 25000) {
          await guys_can_die_hait3();  // SCM GOSUB guys_can_die_hait3
          Text.PrintNow("HAM3_3", 5000, 1); //"I expect the Cubans to cheat!
        }


      }
      if ($.player1.locateOnFoot3D(-892.59, 75.3, 15.4, 2.0, 2.0, 2.0, false /* FALSE */)) {
        if ($.all_peds_can_die_hait3 == 0) {
          await guys_can_die_hait3();  // SCM GOSUB guys_can_die_hait3
          Text.PrintNow("HAM3_3", 5000, 1); //"I expect the Cubans to cheat!
        }
        if ($.flag_guys_can_die_hait3 == 0) {
          $.radar_blip_coord1_hait3.remove();
          $.sphere1_hait3.remove();
          $.flag_guys_can_die_hait3 = 1;
        }


      }


    }
    if ($.flag_ambush1_created_hait3 == 0) {
      if ($.counter_dead_cuban >= 5) {
        await ambush1_hait3();  // SCM GOSUB ambush1_hait3
      }


    }
    if ($.flag_ambush2_created_hait3 == 0) {
      if ($.counter_dead_cuban >= 12) {
        await ambush2_hait3();  // SCM GOSUB ambush2_hait3
      }


    }
    if ($.flag_ambush1_created_hait3 == 1) {
      await ambush1_death_checks();  // SCM GOSUB ambush1_death_checks
    }
    if ($.flag_ambush2_created_hait3 == 1) {
      await ambush2_death_checks();  // SCM GOSUB ambush2_death_checks
    }


  }


  $.radar_blip_coord1_hait3.remove();


  // SCM GOTO → mission_haitian3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_haitian3_passed"); // fallback: would break linear control flow
}


// **************************************** Mission haitian3 failed ************************


async function mission_haitian3_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// **************************************** mission haitian3 passed ************************


async function mission_haitian3_passed() {


  $.flag_haitian_mission3_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Stat.RegisterMissionPassed("HAT_3"); // Haitian Mission 3
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("M_PASS", 5000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(5000);
  $.player1.clearWantedLevel();
  $.haitian_contact_blip.remove();
}




// ********************************** mission cleanup **************************************


async function mission_cleanup_haitian3() {


  ONMISSION = 0;
  $.cuban1_blip_hait3.remove();
  $.cuban2_blip_hait3.remove();
  $.cuban3_blip_hait3.remove();
  $.cuban4_blip_hait3.remove();
  $.cuban5_blip_hait3.remove();
  $.cuban6_blip_hait3.remove();
  $.cuban7_blip_hait3.remove();
  $.cuban8_blip_hait3.remove();
  $.cuban9_blip_hait3.remove();
  $.cuban10_blip_hait3.remove();
  $.ambush_driver1_blip_hait3.remove();
  $.ambush_cuban1_blip_hait3.remove();
  $.ambush_cuban2_blip_hait3.remove();
  $.ambush_cuban3_blip_hait3.remove();
  $.ambush_cuban4_blip_hait3.remove();
  $.ambush_cuban5_blip_hait3.remove();
  $.ambush_cuban6_blip_hait3.remove();
  $.ambush_cuban7_blip_hait3.remove();
  $.ambush_cuban8_blip_hait3.remove();
  $.ambush_cuban9_blip_hait3.remove();
  $.player1.shutUp(false /* FALSE */);
  Game.SetWantedMultiplier(1.0);
  $.sphere1_hait3.remove();
  $.radar_blip_coord1_hait3.remove();
  Streaming.MarkModelAsNoLongerNeeded(HNa);
  Streaming.MarkModelAsNoLongerNeeded(CBa);
  Streaming.MarkModelAsNoLongerNeeded(7 /* SNIPER */);
  Streaming.MarkModelAsNoLongerNeeded(HNb);
  Streaming.MarkModelAsNoLongerNeeded(CBb);
  Streaming.MarkModelAsNoLongerNeeded(BURRITO);
  Streaming.MarkModelAsNoLongerNeeded(KATANA);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}


// ped ai stuff


async function ped_ai_hait3() {

  // ********************************* Creates The Haitians **********************************


  if ($.flag_haitian1_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian1_hait3))) {
      if (!($.haitian1_hait3.isWaitingForWorldCollision())) {
        $.haitian1_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban1_hait3))) {
          $.haitian1_hait3.setObjKillCharOnFoot($.cuban1_hait3);
          $.haitian1_target_hait3 = $.cuban1_hait3;
        }
        $.haitian1_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian1_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian2_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian2_hait3))) {
      if (!($.haitian2_hait3.isWaitingForWorldCollision())) {
        $.haitian2_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban2_hait3))) {
          $.haitian2_hait3.setObjKillCharOnFoot($.cuban2_hait3);
          $.haitian2_target_hait3 = $.cuban2_hait3;
        }
        $.haitian2_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian2_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian2_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian3_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian3_hait3))) {
      if (!($.haitian3_hait3.isWaitingForWorldCollision())) {
        $.haitian3_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban3_hait3))) {
          $.haitian3_hait3.setObjKillCharOnFoot($.cuban3_hait3);
          $.haitian3_target_hait3 = $.cuban3_hait3;
        }
        $.haitian3_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian3_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian3_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian4_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian4_hait3))) {
      if (!($.haitian4_hait3.isWaitingForWorldCollision())) {
        $.haitian4_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban4_hait3))) {
          $.haitian4_hait3.setObjKillCharOnFoot($.cuban4_hait3);
          $.haitian4_target_hait3 = $.cuban4_hait3;
        }
        $.haitian4_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian4_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian4_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian5_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian5_hait3))) {
      if (!($.haitian5_hait3.isWaitingForWorldCollision())) {
        $.haitian5_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban5_hait3))) {
          $.haitian5_hait3.setObjKillCharOnFoot($.cuban5_hait3);
          $.haitian5_target_hait3 = $.cuban5_hait3;
        }
        $.haitian5_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian5_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian5_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian6_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian6_hait3))) {
      if (!($.haitian6_hait3.isWaitingForWorldCollision())) {
        $.haitian6_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban6_hait3))) {
          $.haitian6_hait3.setObjKillCharOnFoot($.cuban6_hait3);
          $.haitian6_target_hait3 = $.cuban6_hait3;
        }
        $.haitian6_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian6_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian6_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian7_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian7_hait3))) {
      if (!($.haitian7_hait3.isWaitingForWorldCollision())) {
        $.haitian7_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban7_hait3))) {
          $.haitian7_hait3.setObjKillCharOnFoot($.cuban7_hait3);
          $.haitian7_target_hait3 = $.cuban7_hait3;
        }
        $.haitian7_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian7_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian7_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian8_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian8_hait3))) {
      if (!($.haitian8_hait3.isWaitingForWorldCollision())) {
        $.haitian8_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban8_hait3))) {
          $.haitian8_hait3.setObjKillCharOnFoot($.cuban8_hait3);
          $.haitian8_target_hait3 = $.cuban8_hait3;
        }
        $.haitian8_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian8_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian8_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian9_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian9_hait3))) {
      if (!($.haitian9_hait3.isWaitingForWorldCollision())) {
        $.haitian9_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban9_hait3))) {
          $.haitian9_hait3.setObjKillCharOnFoot($.cuban9_hait3);
          $.haitian9_target_hait3 = $.cuban9_hait3;
        }
        $.haitian9_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian9_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian9_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_haitian10_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.haitian10_hait3))) {
      if (!($.haitian10_hait3.isWaitingForWorldCollision())) {
        $.haitian10_hait3.clearThreatSearch();
        if (!(Char.IsDead($.cuban10_hait3))) {
          $.haitian10_hait3.setObjKillCharOnFoot($.cuban10_hait3);
          $.haitian10_target_hait3 = $.cuban10_hait3;
        }
        $.haitian10_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian10_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        ++$.counter_peds_got_ai_hait3;
        $.flag_haitian10_got_ai_hait3 = 1;


      }


    }


  }

  // **************************** CREATES THE CUBANS *****************************************


  if ($.flag_cuban1_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban1_hait3))) {
      if (!($.cuban1_hait3.isWaitingForWorldCollision())) {
        $.cuban1_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian1_hait3))) {
          $.cuban1_hait3.setObjKillCharOnFoot($.haitian1_hait3);
          $.cuban1_target_hait3 = $.haitian1_hait3;
        }
        $.cuban1_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban1_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban1_blip_hait3 = Blip.AddForChar($.cuban1_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban1_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban2_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban2_hait3))) {
      if (!($.cuban2_hait3.isWaitingForWorldCollision())) {
        $.cuban2_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian2_hait3))) {
          $.cuban2_hait3.setObjKillCharOnFoot($.haitian2_hait3);
          $.cuban2_target_hait3 = $.haitian2_hait3;
        }
        $.cuban2_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban2_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban2_blip_hait3 = Blip.AddForChar($.cuban2_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban2_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban3_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban3_hait3))) {
      if (!($.cuban3_hait3.isWaitingForWorldCollision())) {
        $.cuban3_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian3_hait3))) {
          $.cuban3_hait3.setObjKillCharOnFoot($.haitian3_hait3);
          $.cuban3_target_hait3 = $.haitian3_hait3;
        }
        $.cuban3_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban3_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban3_blip_hait3 = Blip.AddForChar($.cuban3_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban3_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban4_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban4_hait3))) {
      if (!($.cuban4_hait3.isWaitingForWorldCollision())) {
        $.cuban4_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian4_hait3))) {
          $.cuban4_hait3.setObjKillCharOnFoot($.haitian4_hait3);
          $.cuban4_target_hait3 = $.haitian4_hait3;
        }
        $.cuban4_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban4_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban4_blip_hait3 = Blip.AddForChar($.cuban4_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban4_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban5_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban5_hait3))) {
      if (!($.cuban5_hait3.isWaitingForWorldCollision())) {
        $.cuban5_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian5_hait3))) {
          $.cuban5_hait3.setObjKillCharOnFoot($.haitian5_hait3);
          $.cuban5_target_hait3 = $.haitian5_hait3;
        }
        $.cuban5_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban5_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban5_blip_hait3 = Blip.AddForChar($.cuban5_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban5_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban6_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban6_hait3))) {
      if (!($.cuban6_hait3.isWaitingForWorldCollision())) {
        $.cuban6_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian6_hait3))) {
          $.cuban6_hait3.setObjKillCharOnFoot($.haitian6_hait3);
          $.cuban6_target_hait3 = $.haitian6_hait3;
        }
        $.cuban6_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban6_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban6_blip_hait3 = Blip.AddForChar($.cuban6_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban6_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban7_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban7_hait3))) {
      if (!($.cuban7_hait3.isWaitingForWorldCollision())) {
        $.cuban7_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian7_hait3))) {
          $.cuban7_hait3.setObjKillCharOnFoot($.haitian7_hait3);
          $.cuban7_target_hait3 = $.haitian7_hait3;
        }
        $.cuban7_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban7_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban7_blip_hait3 = Blip.AddForChar($.cuban7_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban7_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban8_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban8_hait3))) {
      if (!($.cuban8_hait3.isWaitingForWorldCollision())) {
        $.cuban8_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian8_hait3))) {
          $.cuban8_hait3.setObjKillCharOnFoot($.haitian8_hait3);
          $.cuban8_target_hait3 = $.haitian8_hait3;
        }
        $.cuban8_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban8_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban8_blip_hait3 = Blip.AddForChar($.cuban8_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban8_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban9_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban9_hait3))) {
      if (!($.cuban9_hait3.isWaitingForWorldCollision())) {
        $.cuban9_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian9_hait3))) {
          $.cuban9_hait3.setObjKillCharOnFoot($.haitian9_hait3);
          $.cuban9_target_hait3 = $.haitian9_hait3;
        }
        $.cuban9_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban9_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban9_blip_hait3 = Blip.AddForChar($.cuban9_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban9_got_ai_hait3 = 1;


      }


    }


  }


  if ($.flag_cuban10_got_ai_hait3 == 0) {
    if (!(Char.IsDead($.cuban10_hait3))) {
      if (!($.cuban10_hait3.isWaitingForWorldCollision())) {
        $.cuban10_hait3.clearThreatSearch();
        if (!(Char.IsDead($.haitian10_hait3))) {
          $.cuban10_hait3.setObjKillCharOnFoot($.haitian10_hait3);
          $.cuban10_target_hait3 = $.haitian10_hait3;
        }
        $.cuban10_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban10_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban10_blip_hait3 = Blip.AddForChar($.cuban10_hait3);
        ++$.counter_peds_got_ai_hait3;
        $.flag_cuban10_got_ai_hait3 = 1;


      }


    }


  }
}


// If the player is on the roof then the guys can now die


async function guys_can_die_hait3() {

  //IF NOT IS_CHAR_DEAD cuban1_hait3
  //	SET_CHAR_ONLY_DAMAGED_BY_PLAYER cuban1_hait3 FALSE
  //ENDIF


  if (!(Char.IsDead($.cuban2_hait3))) {
    $.cuban2_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban3_hait3))) {
    $.cuban3_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban4_hait3))) {
    $.cuban4_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban5_hait3))) {
    $.cuban5_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban6_hait3))) {
    $.cuban6_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban7_hait3))) {
    $.cuban7_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban8_hait3))) {
    $.cuban8_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban9_hait3))) {
    $.cuban9_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban10_hait3))) {
    $.cuban10_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian1_hait3))) {
    $.haitian1_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian2_hait3))) {
    $.haitian2_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian3_hait3))) {
    $.haitian3_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian4_hait3))) {
    $.haitian4_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian5_hait3))) {
    $.haitian5_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian6_hait3))) {
    $.haitian6_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian7_hait3))) {
    $.haitian7_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian8_hait3))) {
    $.haitian8_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian9_hait3))) {
    $.haitian9_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian10_hait3))) {
    $.haitian10_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  $.all_peds_can_die_hait3 = 1;
}


// *****************************************************************************************
// *************************************** Cuban Dead Checks *******************************
// *****************************************************************************************


async function dead_cuban_check() {

  // cuban1


  if ($.frame_counter_hait3 == 0) {
    if ($.flag_cuban1_dead_hait3 == 0) {
      if (Char.IsDead($.cuban1_hait3)) {
        $.cuban1_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban1_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban1_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban1_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban1_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban1_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban2


  if ($.frame_counter_hait3 == 1) {
    if ($.flag_cuban2_dead_hait3 == 0) {
      if (Char.IsDead($.cuban2_hait3)) {
        $.cuban2_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban2_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban2_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban2_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban2_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban2_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban3


  if ($.frame_counter_hait3 == 2) {
    if ($.flag_cuban3_dead_hait3 == 0) {
      if (Char.IsDead($.cuban3_hait3)) {
        $.cuban3_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban3_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban3_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban3_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban3_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban3_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban4


  if ($.frame_counter_hait3 == 3) {
    if ($.flag_cuban4_dead_hait3 == 0) {
      if (Char.IsDead($.cuban4_hait3)) {
        $.cuban4_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban4_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban4_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban4_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban4_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban4_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban5


  if ($.frame_counter_hait3 == 4) {
    if ($.flag_cuban5_dead_hait3 == 0) {
      if (Char.IsDead($.cuban5_hait3)) {
        $.cuban5_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban5_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban5_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban5_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban5_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban5_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban6


  if ($.frame_counter_hait3 == 5) {
    if ($.flag_cuban6_dead_hait3 == 0) {
      if (Char.IsDead($.cuban6_hait3)) {
        $.cuban6_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban6_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban6_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban6_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban6_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban6_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban7


  if ($.frame_counter_hait3 == 6) {
    if ($.flag_cuban7_dead_hait3 == 0) {
      if (Char.IsDead($.cuban7_hait3)) {
        $.cuban7_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban7_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban7_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban7_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban7_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban7_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban8


  if ($.frame_counter_hait3 == 7) {
    if ($.flag_cuban8_dead_hait3 == 0) {
      if (Char.IsDead($.cuban8_hait3)) {
        $.cuban8_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban8_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban8_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban8_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban8_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban8_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban9


  if ($.frame_counter_hait3 == 8) {
    if ($.flag_cuban9_dead_hait3 == 0) {
      if (Char.IsDead($.cuban9_hait3)) {
        $.cuban9_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban9_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban9_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban9_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban9_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban9_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }

  // cuban10


  if ($.frame_counter_hait3 == 9) {
    if ($.flag_cuban10_dead_hait3 == 0) {
      if (Char.IsDead($.cuban10_hait3)) {
        $.cuban10_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.cuban10_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_cuban10_dead_hait3 = 1;
      }
      else {
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.cuban10_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }
        if (Char.IsDead($.cuban10_target_hait3)) {
          $.gosub_cuban1_hait3 = $.cuban10_hait3;
          await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
        }


      }


    }


  }
}



// Player spotted stuff


async function player_spotted_hait3() {


  if ($.gosub_spotter_hait3.hasSpottedPlayer($.player1)) {
    if ($.player1.isShooting()) {
      if ($.flag_fight1_over_hait3 == 0) {
        if ($.player1.isInAngledArea3D(-936.42, 109.11, 13.0, -873.118, 45.222, 18.0, 30.0, false /* FALSE */)) {
          $.flag_player_spotted_hait3 = 0;
        }
        else {
          $.flag_player_spotted_hait3 = 1;
        }


      }


    }


  }
}



// *****************************************************************************************
// ************************************ Haitian Death Checks *******************************
// *****************************************************************************************


async function dead_haitian_check() {

  // Haitian1


  if ($.frame_counter_hait3 == 10) {
    if ($.flag_haitian1_dead_hait3 == 0) {
      if (Char.IsDead($.haitian1_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian1_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian1_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian1_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian1_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian2


  if ($.frame_counter_hait3 == 11) {
    if ($.flag_haitian2_dead_hait3 == 0) {
      if (Char.IsDead($.haitian2_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian2_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian2_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian2_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian2_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian3


  if ($.frame_counter_hait3 == 12) {
    if ($.flag_haitian3_dead_hait3 == 0) {
      if (Char.IsDead($.haitian3_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian3_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian3_dead_hait3 = 1;
      }
      else {


        if (Char.IsDead($.haitian3_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian3_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian4


  if ($.frame_counter_hait3 == 13) {
    if ($.flag_haitian4_dead_hait3 == 0) {
      if (Char.IsDead($.haitian4_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian4_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian4_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian4_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian4_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian5


  if ($.frame_counter_hait3 == 14) {
    if ($.flag_haitian5_dead_hait3 == 0) {
      if (Char.IsDead($.haitian5_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian5_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian5_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian5_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian5_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian6


  if ($.frame_counter_hait3 == 15) {
    if ($.flag_haitian6_dead_hait3 == 0) {
      if (Char.IsDead($.haitian6_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian6_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian6_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian6_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian6_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian7


  if ($.frame_counter_hait3 == 16) {
    if ($.flag_haitian7_dead_hait3 == 0) {
      if (Char.IsDead($.haitian7_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian7_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian7_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian7_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian7_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian8


  if ($.frame_counter_hait3 == 17) {
    if ($.flag_haitian8_dead_hait3 == 0) {
      if (Char.IsDead($.haitian8_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian8_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian8_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian8_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian8_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian9


  if ($.frame_counter_hait3 == 18) {
    if ($.flag_haitian9_dead_hait3 == 0) {
      if (Char.IsDead($.haitian9_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian9_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian9_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian9_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian9_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }

  // haitian10


  if ($.frame_counter_hait3 == 19) {
    if ($.flag_haitian10_dead_hait3 == 0) {
      if (Char.IsDead($.haitian10_hait3)) {
        ++$.counter_dead_haitian;
        $.gosub_death_check_bloke_hait3 = $.haitian10_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.flag_haitian10_dead_hait3 = 1;
      }
      else {
        if (Char.IsDead($.haitian10_target_hait3)) {
          $.gosub_haitian1_hait3 = $.haitian10_hait3;
          await haitian1_attack_hait3();  // SCM GOSUB haitian1_attack_hait3
        }


      }


    }


  }
}


// Creates the guys to jump into fight


async function ambush1_hait3() {


  if ($.flag_ambush1_created_hait3 == 0) {

    //DO_FADE 500 FADE_OUT
    //SWITCH_WIDESCREEN ON
    //SET_PLAYER_CONTROL player1 OFF
    //SET_POLICE_IGNORE_PLAYER player1 ON
    //SET_EVERYONE_IGNORE_PLAYER player1 ON

    //GOSUB both_sides_cant_die_hait3
    /*
    WHILE GET_FADING_STATUS

    WAIT 0

    ++ frame_counter_hait3
    IF frame_counter_hait3 > 30
    frame_counter_hait3 = 0
    ENDIF

    CLEAR_WANTED_LEVEL player1

    GOSUB dead_cuban_check

    GOSUB dead_haitian_check

    IF counter_dead_cuban >= 20
    flag_fight_over_hait3 = 1
    ENDIF

    IF counter_dead_haitian >= 3

    IF player_had_warning_message_hait3 = 0
    PRINT_NOW ( HAM3_8 ) 5000 1 //"You were supposed to kill the Cubans not Haitians!"
    player_had_warning_message_hait3 = 1
    ENDIF

    ENDIF

    IF counter_dead_haitian >= 10
    PRINT_NOW ( HAM3_2 ) 5000 1 //"You were supposed to kill the Cubans not Haitians!"
    GOTO mission_haitian3_failed
    ENDIF

    IF flag_player_spotted_hait3 = 1
    OR player_spotted_melee_hait3 = 1
    PRINT_NOW ( HAM3_4 ) 5000 1 //"You have been spotted the mission is a failure!"
    GOTO mission_haitian3_failed
    ENDIF

    ENDWHILE
    */

    //LOAD_SCENE -874.053 24.621 11.652
    //CLEAR_AREA -874.053 24.621 11.652 1.0 FALSE
    //SET_FIXED_CAMERA_POSITION -874.053 24.621 11.652 0.0 0.0 0.0
    //POINT_CAMERA_AT_POINT -874.714 25.371 11.620 JUMP_CUT

    $.truck1_hait3 = Car.Create(BURRITO, $.truck1_x_hait3, $.truck1_y_hait3, $.truck1_z_hait3);
    $.truck1_hait3.setHeading(275.73);
    $.ambush_driver1_hait3 = Char.CreateInsideCar($.truck1_hait3, 4 /* PEDTYPE_CIVMALE */, CBa);
    $.ambush_driver1_hait3.clearThreatSearch();
    $.ambush_driver1_blip_hait3 = Blip.AddForChar($.ambush_driver1_hait3);
    $.ambush_driver1_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.truck1_hait3.setIdle();
    $.ambush_cuban1_hait3 = Char.CreateAsPassenger($.truck1_hait3, 4 /* PEDTYPE_CIVMALE */, CBb, 0);
    $.ambush_cuban1_hait3.clearThreatSearch();
    $.ambush_cuban1_blip_hait3 = Blip.AddForChar($.ambush_cuban1_hait3);
    $.ambush_cuban1_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.ambush_cuban2_hait3 = Char.CreateAsPassenger($.truck1_hait3, 4 /* PEDTYPE_CIVMALE */, CBa, 1);
    $.ambush_cuban2_hait3.clearThreatSearch();
    $.ambush_cuban2_blip_hait3 = Blip.AddForChar($.ambush_cuban2_hait3);
    $.ambush_cuban2_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.ambush_cuban3_hait3 = Char.CreateAsPassenger($.truck1_hait3, 4 /* PEDTYPE_CIVMALE */, CBb, 2);
    $.ambush_cuban3_hait3.clearThreatSearch();
    $.ambush_cuban3_blip_hait3 = Blip.AddForChar($.ambush_cuban3_hait3);
    $.ambush_cuban3_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.truck1_hait3.gotoCoordinates($.truck1_dest_x_hait3, $.truck1_dest_y_hait3, $.truck1_dest_z_hait3);
    $.truck1_hait3.setDrivingStyle(2);
    $.truck1_hait3.setCruiseSpeed(35.0);

    //DO_FADE 500 FADE_IN

    Text.PrintNow("HAM3_7", 5000, 1); //"What out the Cubans are cheating, those guys have guns."

    //timera = 0

    /*

    WHILE timera < 5000

    WAIT 0

    IF NOT IS_CAR_DEAD truck1_hait3

    IF LOCATE_CAR_3D truck1_hait3 truck1_dest_x_hait3 truck1_dest_y_hait3 truck1_dest_z_hait3 3.0 3.0 3.0 FALSE
    flag_truck1_in_position_hait3 = 1
    ENDIF

    ENDIF

    ++ frame_counter_hait3
    IF frame_counter_hait3 > 30
    frame_counter_hait3 = 0
    ENDIF

    CLEAR_WANTED_LEVEL player1

    GOSUB dead_cuban_check

    GOSUB dead_haitian_check

    IF counter_dead_cuban >= 20
    flag_fight_over_hait3 = 1
    ENDIF

    IF counter_dead_haitian >= 3

    IF player_had_warning_message_hait3 = 0
    PRINT_NOW ( HAM3_8 ) 5000 1 //"You were supposed to kill the Cubans not Haitians!"
    player_had_warning_message_hait3 = 1
    ENDIF

    ENDIF

    IF counter_dead_haitian >= 10
    PRINT_NOW ( HAM3_2 ) 5000 1 //"You were supposed to kill the Cubans not Haitians!"
    GOTO mission_haitian3_failed
    ENDIF

    IF flag_player_spotted_hait3 = 1
    OR player_spotted_melee_hait3 = 1
    PRINT_NOW ( HAM3_4 ) 5000 1 //"You have been spotted the mission is a failure!"
    GOTO mission_haitian3_failed
    ENDIF

    IF flag_ambush2_created_hait3 = 0

    IF counter_dead_cuban >= 12
    GOSUB ambush2_hait3
    ENDIF

    ENDIF

    ENDWHILE

    */

    //	GOSUB both_sides_can_die_hait3

    //SWITCH_WIDESCREEN OFF
    //SET_PLAYER_CONTROL player1 ON
    //	SET_POLICE_IGNORE_PLAYER player1 OFF
    //	SET_EVERYONE_IGNORE_PLAYER player1 OFF
    //	SET_CAMERA_BEHIND_PLAYER
    //RESTORE_CAMERA_JUMPCUT

    $.frame_counter_hait3 = 19;
    $.flag_ambush1_created_hait3 = 1;


  }
}


// ambush 2 the guys with the chainsaws running across the road


async function ambush2_hait3() {


  if ($.flag_ambush2_created_hait3 == 0) {

    //	SWITCH_WIDESCREEN ON
    //	SET_PLAYER_CONTROL player1 OFF
    //	SET_POLICE_IGNORE_PLAYER player1 ON
    //	SET_EVERYONE_IGNORE_PLAYER player1 ON

    //	DO_FADE 500 FADE_OUT

    //	GOSUB both_sides_cant_die_hait3

    /*
    WHILE GET_FADING_STATUS

    WAIT 0

    ++ frame_counter_hait3
    IF frame_counter_hait3 > 30
    frame_counter_hait3 = 0
    ENDIF

    CLEAR_WANTED_LEVEL player1

    GOSUB dead_cuban_check

    GOSUB dead_haitian_check

    IF counter_dead_cuban >= 20
    flag_fight_over_hait3 = 1
    ENDIF

    IF counter_dead_haitian >= 3

    IF player_had_warning_message_hait3 = 0
    PRINT_NOW ( HAM3_8 ) 5000 1 //"You were supposed to kill the Cubans not Haitians!"
    player_had_warning_message_hait3 = 1
    ENDIF

    ENDIF

    IF counter_dead_haitian >= 10
    PRINT_NOW ( HAM3_2 ) 5000 1 //"You were supposed to kill the Cubans not Haitians!"
    GOTO mission_haitian3_failed
    ENDIF

    IF flag_player_spotted_hait3 = 1
    OR player_spotted_melee_hait3 = 1
    PRINT_NOW ( HAM3_4 ) 5000 1 //"You have been spotted the mission is a failure!"
    GOTO mission_haitian3_failed
    ENDIF

    IF flag_ambush1_created_hait3 = 1
    GOSUB ambush1_death_checks
    ENDIF

    ENDWHILE

    */

    $.ambush_cuban4_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -862.426, 59.084, 8.38);
    $.ambush_cuban4_blip_hait3 = Blip.AddForChar($.ambush_cuban4_hait3);
    $.ambush_cuban4_hait3.clearThreatSearch();
    $.ambush_cuban4_hait3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.ambush_cuban4_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.ambush_cuban4_hait3.setObjRunToCoord($.fight1_x_hait3, $.fight1_y_hait3);
    $.cuban4_goto_position_hait3 = 1;
    $.ambush_cuban5_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBb, -864.075, 59.570, 8.38);
    $.ambush_cuban5_hait3.clearThreatSearch();
    $.ambush_cuban5_blip_hait3 = Blip.AddForChar($.ambush_cuban5_hait3);
    $.ambush_cuban5_hait3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.ambush_cuban5_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.ambush_cuban5_hait3.setObjRunToCoord($.fight1_x_hait3, $.fight1_y_hait3);
    $.cuban5_goto_position_hait3 = 1;
    $.ambush_cuban6_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -865.799, 60.488, 8.38);
    $.ambush_cuban6_hait3.clearThreatSearch();
    $.ambush_cuban6_blip_hait3 = Blip.AddForChar($.ambush_cuban6_hait3);
    $.ambush_cuban6_hait3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.ambush_cuban6_hait3.giveWeapon(10 /* WEAPONTYPE_KATANA */, 1);
    $.ambush_cuban6_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.ambush_cuban6_hait3.setObjRunToCoord($.fight1_x_hait3, $.fight1_y_hait3);
    $.cuban6_goto_position_hait3 = 1;
    $.ambush_cuban7_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBb, -868.311, 61.519, 8.38);
    $.ambush_cuban7_hait3.clearThreatSearch();
    $.ambush_cuban7_blip_hait3 = Blip.AddForChar($.ambush_cuban7_hait3);
    $.ambush_cuban7_hait3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.ambush_cuban7_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.ambush_cuban7_hait3.setObjRunToCoord($.fight1_x_hait3, $.fight1_y_hait3);
    $.cuban7_goto_position_hait3 = 1;
    $.ambush_cuban8_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -870.435, 62.566, 8.38);
    $.ambush_cuban8_hait3.clearThreatSearch();
    $.ambush_cuban8_blip_hait3 = Blip.AddForChar($.ambush_cuban8_hait3);
    $.ambush_cuban8_hait3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.ambush_cuban8_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.ambush_cuban8_hait3.setObjRunToCoord($.fight1_x_hait3, $.fight1_y_hait3);
    $.cuban8_goto_position_hait3 = 1;
    $.ambush_cuban9_hait3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBb, -872.876, 63.476, 8.38);
    $.ambush_cuban9_hait3.clearThreatSearch();
    $.ambush_cuban9_blip_hait3 = Blip.AddForChar($.ambush_cuban9_hait3);
    $.ambush_cuban9_hait3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.ambush_cuban9_hait3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.ambush_cuban9_hait3.setObjRunToCoord($.fight1_x_hait3, $.fight1_y_hait3);
    $.cuban9_goto_position_hait3 = 1;

    //CLEAR_AREA 912.677 55.208 11.537 1.0 FALSE
    //SET_FIXED_CAMERA_POSITION -912.677 55.208 11.537 0.0 0.0 0.0
    //POINT_CAMERA_AT_POINT -911.741 54.872 11.433 JUMP_CUT

    //DO_FADE 500 FADE_IN

    Text.PrintNow("HAM3_7", 5000, 1); //"What out the Cubans are cheating, those guys have guns."

    //	timera = 0

    /*
    WHILE timera < 6000

    WAIT 0

    ++ frame_counter_hait3
    IF frame_counter_hait3 > 30
    frame_counter_hait3 = 0
    ENDIF

    CLEAR_WANTED_LEVEL player1

    GOSUB dead_cuban_check

    GOSUB dead_haitian_check

    IF counter_dead_cuban >= 20
    flag_fight_over_hait3 = 1
    ENDIF

    IF counter_dead_haitian >= 3

    IF player_had_warning_message_hait3 = 0
    PRINT_NOW ( HAM3_8 ) 5000 1 //"You were supposed to kill the Cubans not Haitians!"
    player_had_warning_message_hait3 = 1
    ENDIF

    ENDIF

    IF counter_dead_haitian >= 10
    PRINT_NOW ( HAM3_2 ) 5000 1 //"You were supposed to kill the Cubans not Haitians!"
    GOTO mission_haitian3_failed
    ENDIF

    IF flag_player_spotted_hait3 = 1
    OR player_spotted_melee_hait3 = 1
    PRINT_NOW ( HAM3_4 ) 5000 1 //"You have been spotted the mission is a failure!"
    GOTO mission_haitian3_failed
    ENDIF


    IF flag_ambush1_created_hait3 = 1
    GOSUB ambush1_death_checks
    ENDIF

    ENDWHILE

    */

    //GOSUB both_sides_can_die_hait3

    //SWITCH_WIDESCREEN OFF
    //	SET_PLAYER_CONTROL player1 ON
    //SET_POLICE_IGNORE_PLAYER player1 OFF
    //	SET_EVERYONE_IGNORE_PLAYER player1 OFF
    //	SET_CAMERA_BEHIND_PLAYER
    //	RESTORE_CAMERA_JUMPCUT

    $.frame_counter_hait3 = 23;
    $.flag_ambush2_created_hait3 = 1;


  }
}


// Checks to see if any of the guys are dead


async function ambush1_death_checks() {


  if ($.truck1_dead_hait3 == 0) {
    if (Car.IsDead($.truck1_hait3)) {
      $.truck1_dead_hait3 = 1;
    }
    else {
      if ($.flag_truck1_in_position_hait3 == 0) {
        if ($.truck1_hait3.locate3D($.truck1_dest_x_hait3, $.truck1_dest_y_hait3, $.truck1_dest_z_hait3, 3.0, 3.0, 3.0, false /* FALSE */)) {
          $.truck1_hait3.setCruiseSpeed(0.0);
          $.truck1_hait3.setIdle();
          $.flag_truck1_in_position_hait3 = 1;
        }
        if ($.ambush_driver1_dead_hait3 == 0) {
        }
        else {
          $.truck1_hait3.setCruiseSpeed(0.0);
          $.truck1_hait3.setIdle();
        }


      }


    }


  }

  // Driver car1


  if ($.frame_counter_hait3 == 21) {
    if ($.ambush_driver1_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_driver1_hait3)) {
        $.ambush_driver1_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_driver1_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_driver1_dead_hait3 = 1;
      }
      else {
        if ($.flag_truck1_in_position_hait3 == 1) {
          if ($.driver1_goto_position_hait3 == 0) {
            if ($.ambush_driver1_hait3.isInAnyCar()) {
              $.truck1_hait3 = $.ambush_driver1_hait3.storeCarIsIn();
              if (!(Car.IsDead($.truck1_hait3))) {
                $.ambush_driver1_hait3.setObjLeaveCar($.truck1_hait3);
              }


            }
            else {
              $.ambush_driver1_target_hait3 = $.haitian10_hait3;
              if (!(Char.IsDead($.ambush_driver1_target_hait3))) {
                $.ambush_driver1_hait3.setObjKillCharOnFoot($.ambush_driver1_target_hait3);
              }
              $.driver1_goto_position_hait3 = 1;
            }


          }


        }
        if ($.driver1_goto_position_hait3 == 1) {
          if (Char.IsDead($.ambush_driver1_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_driver1_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_driver1_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }

  // Cuban 1


  if ($.frame_counter_hait3 == 22) {
    if ($.ambush_cuban1_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban1_hait3)) {
        $.ambush_cuban1_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban1_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban1_dead_hait3 = 1;
      }
      else {
        if ($.ambush_driver1_dead_hait3 == 1) {
          if ($.truck1_dead_hait3 == 0) {
            if ($.cuban1_goto_position_hait3 == 0) {
              if ($.ambush_cuban1_hait3.isInAnyCar()) {
                $.truck1_hait3 = $.ambush_cuban1_hait3.storeCarIsIn();
                if (!(Car.IsDead($.truck1_hait3))) {
                  $.ambush_cuban1_hait3.setObjLeaveCar($.truck1_hait3);
                }


              }
              else {
                $.cuban1_goto_position_hait3 = 1;
              }


            }


          }


        }
        if ($.flag_truck1_in_position_hait3 == 1) {
          if ($.cuban1_goto_position_hait3 == 0) {
            if ($.ambush_cuban1_hait3.isInAnyCar()) {
              $.truck1_hait3 = $.ambush_cuban1_hait3.storeCarIsIn();
              if (!(Car.IsDead($.truck1_hait3))) {
                $.ambush_cuban1_hait3.setObjLeaveCar($.truck1_hait3);
              }


            }
            else {
              $.ambush_cuban1_target_hait3 = $.haitian9_hait3;
              if (!(Char.IsDead($.ambush_cuban1_target_hait3))) {
                $.ambush_cuban1_hait3.setObjKillCharOnFoot($.ambush_cuban1_target_hait3);
              }
              $.cuban1_goto_position_hait3 = 1;
            }


          }


        }
        if ($.cuban1_goto_position_hait3 == 1) {
          if (Char.IsDead($.ambush_cuban1_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban1_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban1_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }

  // Cuban2


  if ($.frame_counter_hait3 == 23) {
    if ($.ambush_cuban2_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban2_hait3)) {
        $.ambush_cuban2_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban2_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban2_dead_hait3 = 1;
      }
      else {
        if ($.ambush_driver1_dead_hait3 == 1) {
          if ($.truck1_dead_hait3 == 0) {
            if ($.cuban2_goto_position_hait3 == 0) {
              if ($.ambush_cuban2_hait3.isInAnyCar()) {
                $.truck1_hait3 = $.ambush_cuban2_hait3.storeCarIsIn();
                if (!(Car.IsDead($.truck1_hait3))) {
                  $.ambush_cuban2_hait3.setObjLeaveCar($.truck1_hait3);
                }


              }
              else {
                $.ambush_cuban2_target_hait3 = $.haitian8_hait3;
                if (!(Char.IsDead($.ambush_cuban2_target_hait3))) {
                  $.ambush_cuban2_hait3.setObjKillCharOnFoot($.ambush_cuban2_target_hait3);
                }
                $.cuban2_goto_position_hait3 = 1;
              }


            }


          }


        }
        if ($.flag_truck1_in_position_hait3 == 1) {
          if ($.cuban2_goto_position_hait3 == 0) {
            if ($.ambush_cuban2_hait3.isInAnyCar()) {
              $.truck1_hait3 = $.ambush_cuban2_hait3.storeCarIsIn();
              if (!(Car.IsDead($.truck1_hait3))) {
                $.ambush_cuban2_hait3.setObjLeaveCar($.truck1_hait3);
              }


            }
            else {
              $.cuban2_goto_position_hait3 = 1;
            }


          }


        }
        if ($.cuban2_goto_position_hait3 == 1) {
          if (Char.IsDead($.ambush_cuban2_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban2_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban2_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }

  // Cuban3


  if ($.frame_counter_hait3 == 24) {
    if ($.ambush_cuban3_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban3_hait3)) {
        $.ambush_cuban3_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban3_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban3_dead_hait3 = 1;
      }
      else {
        if ($.ambush_driver1_dead_hait3 == 1) {
          if ($.truck1_dead_hait3 == 0) {
            if ($.cuban3_goto_position_hait3 == 0) {
              if ($.ambush_cuban3_hait3.isInAnyCar()) {
                $.truck1_hait3 = $.ambush_cuban3_hait3.storeCarIsIn();
                if (!(Car.IsDead($.truck1_hait3))) {
                  $.ambush_cuban3_hait3.setObjLeaveCar($.truck1_hait3);
                }


              }
              else {
                $.ambush_cuban3_target_hait3 = $.haitian8_hait3;
                if (!(Char.IsDead($.ambush_cuban3_target_hait3))) {
                  $.ambush_cuban3_hait3.setObjKillCharOnFoot($.ambush_cuban3_target_hait3);
                }
                $.cuban3_goto_position_hait3 = 1;
              }
            }



          }


        }
        if ($.flag_truck1_in_position_hait3 == 1) {
          if ($.cuban3_goto_position_hait3 == 0) {
            if ($.ambush_cuban3_hait3.isInAnyCar()) {
              $.truck1_hait3 = $.ambush_cuban3_hait3.storeCarIsIn();
              if (!(Car.IsDead($.truck1_hait3))) {
                $.ambush_cuban3_hait3.setObjLeaveCar($.truck1_hait3);
              }
            }
            else {
              $.cuban3_goto_position_hait3 = 1;
            }


          }


        }
        if ($.cuban3_goto_position_hait3 == 1) {
          if (Char.IsDead($.ambush_cuban3_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban3_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban3_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }
}


// Group 2 of ambush guys


async function ambush2_death_checks() {

  // cuban 4


  if ($.frame_counter_hait3 == 25) {
    if ($.ambush_cuban4_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban4_hait3)) {
        $.ambush_cuban4_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban4_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban4_dead_hait3 = 1;
      }
      else {
        if ($.cuban4_goto_position_hait3 == 1) {
          if ($.ambush_cuban4_hait3.locateOnFoot2D($.fight1_x_hait3, $.fight1_y_hait3, 4.0, 4.0, false /* FALSE */)) {
            $.cuban4_goto_position_hait3 = 2;
          }


        }
        if ($.cuban4_goto_position_hait3 == 2) {
          $.ambush_cuban4_target_hait3 = $.haitian7_hait3;
          if (!(Char.IsDead($.ambush_cuban4_target_hait3))) {
            $.ambush_cuban4_hait3.setObjKillCharOnFoot($.ambush_cuban4_target_hait3);
          }
          $.cuban4_goto_position_hait3 = 3;


        }
        if ($.cuban4_goto_position_hait3 == 3) {
          if (Char.IsDead($.ambush_cuban4_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban4_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban4_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }

  // Cuban 5


  if ($.frame_counter_hait3 == 26) {
    if ($.ambush_cuban5_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban5_hait3)) {
        $.ambush_cuban5_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban5_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban5_dead_hait3 = 1;
      }
      else {
        if ($.cuban5_goto_position_hait3 == 1) {
          if ($.ambush_cuban5_hait3.locateOnFoot2D($.fight1_x_hait3, $.fight1_y_hait3, 4.0, 4.0, false /* FALSE */)) {
            $.cuban5_goto_position_hait3 = 2;
          }


        }
        if ($.cuban5_goto_position_hait3 == 2) {
          $.ambush_cuban5_target_hait3 = $.haitian6_hait3;
          if (!(Char.IsDead($.ambush_cuban5_target_hait3))) {
            $.ambush_cuban5_hait3.setObjKillCharOnFoot($.ambush_cuban5_target_hait3);
          }
          $.cuban5_goto_position_hait3 = 3;


        }
        if ($.cuban5_goto_position_hait3 == 3) {
          if (Char.IsDead($.ambush_cuban5_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban5_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban5_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }

  // cuban 6


  if ($.frame_counter_hait3 == 27) {
    if ($.ambush_cuban6_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban6_hait3)) {
        $.ambush_cuban6_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban6_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban6_dead_hait3 = 1;
      }
      else {
        if ($.cuban6_goto_position_hait3 == 1) {
          if ($.ambush_cuban6_hait3.locateOnFoot2D($.fight1_x_hait3, $.fight1_y_hait3, 4.0, 4.0, false /* FALSE */)) {
            $.cuban6_goto_position_hait3 = 2;
          }


        }
        if ($.cuban6_goto_position_hait3 == 2) {
          $.ambush_cuban6_target_hait3 = $.haitian5_hait3;
          if (!(Char.IsDead($.ambush_cuban6_target_hait3))) {
            $.ambush_cuban6_hait3.setObjKillCharOnFoot($.ambush_cuban6_target_hait3);
          }
          $.cuban6_goto_position_hait3 = 3;
        }
        if ($.cuban6_goto_position_hait3 == 3) {
          if (Char.IsDead($.ambush_cuban6_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban6_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban6_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }

  // Cuban 7


  if ($.frame_counter_hait3 == 28) {
    if ($.ambush_cuban7_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban7_hait3)) {
        $.ambush_cuban7_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban7_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban7_dead_hait3 = 1;
      }
      else {
        if ($.cuban7_goto_position_hait3 == 1) {
          if ($.ambush_cuban7_hait3.locateOnFoot2D($.fight1_x_hait3, $.fight1_y_hait3, 4.0, 4.0, false /* FALSE */)) {
            $.cuban7_goto_position_hait3 = 2;
          }


        }
        if ($.cuban7_goto_position_hait3 == 2) {
          $.ambush_cuban7_target_hait3 = $.haitian4_hait3;
          if (!(Char.IsDead($.ambush_cuban7_target_hait3))) {
            $.ambush_cuban7_hait3.setObjKillCharOnFoot($.ambush_cuban7_target_hait3);
          }
          $.cuban7_goto_position_hait3 = 3;


        }
        if ($.cuban7_goto_position_hait3 == 3) {
          if (Char.IsDead($.ambush_cuban7_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban7_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban7_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }

  // Cuban 8


  if ($.frame_counter_hait3 == 29) {
    if ($.ambush_cuban8_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban8_hait3)) {
        $.ambush_cuban8_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban8_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban8_dead_hait3 = 1;
      }
      else {
        if ($.cuban8_goto_position_hait3 == 1) {
          if ($.ambush_cuban8_hait3.locateOnFoot2D($.fight1_x_hait3, $.fight1_y_hait3, 4.0, 4.0, false /* FALSE */)) {
            $.cuban8_goto_position_hait3 = 2;
          }


        }
        if ($.cuban8_goto_position_hait3 == 2) {
          $.ambush_cuban8_target_hait3 = $.haitian3_hait3;
          if (!(Char.IsDead($.ambush_cuban8_target_hait3))) {
            $.ambush_cuban8_hait3.setObjKillCharOnFoot($.ambush_cuban8_target_hait3);
          }
          $.cuban8_goto_position_hait3 = 3;
        }
        if ($.cuban8_goto_position_hait3 == 3) {
          if (Char.IsDead($.ambush_cuban8_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban8_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban8_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }

  // Cuban 9


  if ($.frame_counter_hait3 == 30) {
    if ($.ambush_cuban9_dead_hait3 == 0) {
      if (Char.IsDead($.ambush_cuban9_hait3)) {
        $.ambush_cuban9_blip_hait3.remove();
        ++$.counter_dead_cuban;
        $.gosub_death_check_bloke_hait3 = $.ambush_cuban9_hait3;
        await all_guys_death_check_hait3();  // SCM GOSUB all_guys_death_check_hait3
        $.ambush_cuban9_dead_hait3 = 1;
      }
      else {
        if ($.cuban9_goto_position_hait3 == 1) {
          if ($.ambush_cuban9_hait3.locateOnFoot2D($.fight1_x_hait3, $.fight1_y_hait3, 4.0, 4.0, false /* FALSE */)) {
            $.cuban9_goto_position_hait3 = 2;
          }


        }
        if ($.cuban9_goto_position_hait3 == 2) {
          $.ambush_cuban9_target_hait3 = $.haitian2_hait3;
          if (!(Char.IsDead($.ambush_cuban9_target_hait3))) {
            $.ambush_cuban9_hait3.setObjKillCharOnFoot($.ambush_cuban9_target_hait3);
          }
          $.cuban9_goto_position_hait3 = 3;


        }
        if ($.cuban9_goto_position_hait3 == 3) {
          if (Char.IsDead($.ambush_cuban9_target_hait3)) {
            $.gosub_cuban1_hait3 = $.ambush_cuban9_hait3;
            await cuban1_attack_hait3();  // SCM GOSUB cuban1_attack_hait3
          }


        }
        if ($.flag_player_spotted_hait3 == 0) {
          $.gosub_spotter_hait3 = $.ambush_cuban9_hait3;
          await player_spotted_hait3();  // SCM GOSUB player_spotted_hait3
        }


      }


    }


  }
}



// checks distance between two peds


async function distance_check_for_cubans_hait3() {


  const _res274 = $.distance_check_targ_hait3.getCoordinates();
$.targ_hat_x_hait3 = _res274.x;
$.targ_hat_y_hait3 = _res274.y;
$.targ_hat_z_hait3 = _res274.z;


  $.current_dist_hait3 = Math.GetDistanceBetweenCoords2D($.gosub_cuban1_x_hait3, $.gosub_cuban1_y_hait3, $.targ_hat_x_hait3, $.targ_hat_y_hait3);


  if ($.current_dist_hait3 < $.closest_dist_hait3) {
    $.closest_dist_hait3 = $.current_dist_hait3;
    $.closest_haitian_hait3 = $.distance_check_targ_hait3;
  }
}


// Cuban attack stuff


async function cuban1_attack_hait3() {


  $.closest_dist_hait3 = 50.0;


  $.closest_haitian_hait3 = -1;


  const _res275 = $.gosub_cuban1_hait3.getCoordinates();
$.gosub_cuban1_x_hait3 = _res275.x;
$.gosub_cuban1_y_hait3 = _res275.y;
$.gosub_cuban1_z_hait3 = _res275.z;


  if (!(Char.IsDead($.haitian1_hait3))) {
    $.distance_check_targ_hait3 = $.haitian1_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian2_hait3))) {
    $.distance_check_targ_hait3 = $.haitian2_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian3_hait3))) {
    $.distance_check_targ_hait3 = $.haitian3_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian4_hait3))) {
    $.distance_check_targ_hait3 = $.haitian4_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian5_hait3))) {
    $.distance_check_targ_hait3 = $.haitian5_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian6_hait3))) {
    $.distance_check_targ_hait3 = $.haitian6_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian7_hait3))) {
    $.distance_check_targ_hait3 = $.haitian7_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian8_hait3))) {
    $.distance_check_targ_hait3 = $.haitian8_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian9_hait3))) {
    $.distance_check_targ_hait3 = $.haitian9_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!(Char.IsDead($.haitian10_hait3))) {
    $.distance_check_targ_hait3 = $.haitian10_hait3;
    await distance_check_for_cubans_hait3();  // SCM GOSUB distance_check_for_cubans_hait3
  }


  if (!($.closest_haitian_hait3 == -1)) {
    $.gosub_cuban1_hait3.setObjKillCharOnFoot($.closest_haitian_hait3);
  }


  if ($.gosub_cuban1_hait3 == $.cuban1_hait3) {
    $.cuban1_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban2_hait3) {
    $.cuban2_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban3_hait3) {
    $.cuban3_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban4_hait3) {
    $.cuban4_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban5_hait3) {
    $.cuban5_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban6_hait3) {
    $.cuban6_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban7_hait3) {
    $.cuban7_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban8_hait3) {
    $.cuban8_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban9_hait3) {
    $.cuban9_target_hait3 = $.closest_haitian_hait3;
  }


  if ($.gosub_cuban1_hait3 == $.cuban10_hait3) {
    $.cuban10_target_hait3 = $.closest_haitian_hait3;
  }
}


// checks distance between two peds


async function distance_check_for_haitians_hait3() {


  const _res276 = $.distance_check_targ_hait3.getCoordinates();
$.targ_cub_x_hait3 = _res276.x;
$.targ_cub_y_hait3 = _res276.y;
$.targ_cub_z_hait3 = _res276.z;


  $.current_dist_hait3 = Math.GetDistanceBetweenCoords2D($.gosub_haitian1_x_hait3, $.gosub_haitian1_y_hait3, $.targ_cub_x_hait3, $.targ_cub_y_hait3);


  if ($.current_dist_hait3 < $.closest_dist_hait3) {
    $.closest_dist_hait3 = $.current_dist_hait3;
    $.closest_cuban_hait3 = $.distance_check_targ_hait3;
  }
}


// Haitian attack stuff


async function haitian1_attack_hait3() {


  $.closest_dist_hait3 = 50.0;


  $.closest_cuban_hait3 = -1;


  const _res277 = $.gosub_haitian1_hait3.getCoordinates();
$.gosub_haitian1_x_hait3 = _res277.x;
$.gosub_haitian1_y_hait3 = _res277.y;
$.gosub_haitian1_z_hait3 = _res277.z;


  if (!(Char.IsDead($.cuban1_hait3))) {
    $.distance_check_targ_hait3 = $.cuban1_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban2_hait3))) {
    $.distance_check_targ_hait3 = $.cuban2_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban3_hait3))) {
    $.distance_check_targ_hait3 = $.cuban3_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban4_hait3))) {
    $.distance_check_targ_hait3 = $.cuban4_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban5_hait3))) {
    $.distance_check_targ_hait3 = $.cuban5_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban6_hait3))) {
    $.distance_check_targ_hait3 = $.cuban6_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban7_hait3))) {
    $.distance_check_targ_hait3 = $.cuban7_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban8_hait3))) {
    $.distance_check_targ_hait3 = $.cuban8_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban9_hait3))) {
    $.distance_check_targ_hait3 = $.cuban9_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if (!(Char.IsDead($.cuban10_hait3))) {
    $.distance_check_targ_hait3 = $.cuban10_hait3;
    await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
  }


  if ($.flag_ambush1_created_hait3 == 1) {
    if (!(Char.IsDead($.ambush_driver1_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_driver1_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }
    if (!(Char.IsDead($.ambush_cuban1_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban1_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }
    if (!(Char.IsDead($.ambush_cuban2_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban2_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }
    if (!(Char.IsDead($.ambush_cuban3_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban3_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }


  }


  if ($.flag_ambush2_created_hait3 == 1) {
    if (!(Char.IsDead($.ambush_cuban4_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban4_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }
    if (!(Char.IsDead($.ambush_cuban5_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban5_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }
    if (!(Char.IsDead($.ambush_cuban6_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban6_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }
    if (!(Char.IsDead($.ambush_cuban7_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban7_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }
    if (!(Char.IsDead($.ambush_cuban8_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban8_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }
    if (!(Char.IsDead($.ambush_cuban9_hait3))) {
      $.distance_check_targ_hait3 = $.ambush_cuban9_hait3;
      await distance_check_for_haitians_hait3();  // SCM GOSUB distance_check_for_haitians_hait3
    }


  }


  if (!($.closest_cuban_hait3 == -1)) {
    $.gosub_haitian1_hait3.setObjKillCharOnFoot($.closest_cuban_hait3);
  }


  if ($.gosub_haitian1_hait3 == $.haitian1_hait3) {
    $.haitian1_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian2_hait3) {
    $.haitian2_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian3_hait3) {
    $.haitian3_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian4_hait3) {
    $.haitian4_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian5_hait3) {
    $.haitian5_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian6_hait3) {
    $.haitian6_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian7_hait3) {
    $.haitian7_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian8_hait3) {
    $.haitian8_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian9_hait3) {
    $.haitian9_target_hait3 = $.closest_cuban_hait3;
  }


  if ($.gosub_haitian1_hait3 == $.haitian10_hait3) {
    $.haitian10_target_hait3 = $.closest_cuban_hait3;
  }

  // ambush 1 guys created


  if ($.flag_ambush1_created_hait3 == 1) {
    if ($.gosub_haitian1_hait3 == $.ambush_driver1_hait3) {
      $.ambush_driver1_target_hait3 = $.closest_cuban_hait3;
    }
    if ($.gosub_haitian1_hait3 == $.ambush_cuban1_hait3) {
      $.ambush_cuban1_target_hait3 = $.closest_cuban_hait3;
    }
    if ($.gosub_haitian1_hait3 == $.ambush_cuban2_hait3) {
      $.ambush_cuban2_target_hait3 = $.closest_cuban_hait3;
    }
    if ($.gosub_haitian1_hait3 == $.ambush_cuban3_hait3) {
      $.ambush_cuban3_target_hait3 = $.closest_cuban_hait3;
    }


  }

  // ambush 2 guys created


  if ($.flag_ambush2_created_hait3 == 1) {
    if ($.gosub_haitian1_hait3 == $.ambush_cuban4_hait3) {
      $.ambush_cuban4_target_hait3 = $.closest_cuban_hait3;
    }
    if ($.gosub_haitian1_hait3 == $.ambush_cuban5_hait3) {
      $.ambush_cuban5_target_hait3 = $.closest_cuban_hait3;
    }
    if ($.gosub_haitian1_hait3 == $.ambush_cuban6_hait3) {
      $.ambush_cuban6_target_hait3 = $.closest_cuban_hait3;
    }
    if ($.gosub_haitian1_hait3 == $.ambush_cuban7_hait3) {
      $.ambush_cuban7_target_hait3 = $.closest_cuban_hait3;
    }
    if ($.gosub_haitian1_hait3 == $.ambush_cuban8_hait3) {
      $.ambush_cuban8_target_hait3 = $.closest_cuban_hait3;
    }
    if ($.gosub_haitian1_hait3 == $.ambush_cuban9_hait3) {
      $.ambush_cuban9_target_hait3 = $.closest_cuban_hait3;
    }


  }
}



async function all_guys_death_check_hait3() {


  if ($.player1.isInAngledArea3D(-936.42, 109.11, 13.0, -873.118, 45.222, 18.0, 30.0, false /* FALSE */)) {
    $.player_spotted_melee_hait3 = 0;
  }
  else {
    if ($.player_spotted_melee_hait3 == 0) {
      if (Char.IsDead($.gosub_death_check_bloke_hait3)) {
        if ($.gosub_death_check_bloke_hait3.hasBeenDamagedByChar($.scplayer)) {
          $.gosub_death_check_bloke_hait3.clearLastDamageEntity();
          if ($.gosub_death_check_bloke_hait3.hasBeenDamagedByWeapon(46 /* WEAPONTYPE_ANYMELEE */) || $.gosub_death_check_bloke_hait3.hasBeenDamagedByWeapon(39 /* WEAPONTYPE_RAMMEDBYCAR */) || $.gosub_death_check_bloke_hait3.hasBeenDamagedByWeapon(40 /* WEAPONTYPE_RUNOVERBYCAR */) || $.gosub_death_check_bloke_hait3.hasBeenDamagedByWeapon(47 /* WEAPONTYPE_ANYWEAPON */)) {
            $.gosub_death_check_bloke_hait3.clearLastWeaponDamage();
            $.player_spotted_melee_hait3 = 1;
          }


        }


      }


    }


  }
}


// Sets all the guys unkillable


async function both_sides_cant_die_hait3() {


  if (!(Char.IsDead($.cuban1_hait3))) {
    $.cuban1_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban2_hait3))) {
    $.cuban2_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban3_hait3))) {
    $.cuban3_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban4_hait3))) {
    $.cuban4_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban5_hait3))) {
    $.cuban5_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban6_hait3))) {
    $.cuban6_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban7_hait3))) {
    $.cuban7_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban8_hait3))) {
    $.cuban8_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban9_hait3))) {
    $.cuban9_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.cuban10_hait3))) {
    $.cuban10_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian1_hait3))) {
    $.haitian1_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian2_hait3))) {
    $.haitian2_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian3_hait3))) {
    $.haitian3_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian4_hait3))) {
    $.haitian4_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian5_hait3))) {
    $.haitian5_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian6_hait3))) {
    $.haitian6_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian7_hait3))) {
    $.haitian7_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian8_hait3))) {
    $.haitian8_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian9_hait3))) {
    $.haitian9_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if (!(Char.IsDead($.haitian10_hait3))) {
    $.haitian10_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
  }


  if ($.flag_ambush1_created_hait3 == 1) {
    if (!(Char.IsDead($.ambush_driver1_hait3))) {
      $.ambush_driver1_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }
    if (!(Char.IsDead($.ambush_cuban1_hait3))) {
      $.ambush_cuban1_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }
    if (!(Char.IsDead($.ambush_cuban2_hait3))) {
      $.ambush_cuban2_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }
    if (!(Char.IsDead($.ambush_cuban3_hait3))) {
      $.ambush_cuban3_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }


  }


  if ($.flag_ambush2_created_hait3 == 1) {
    if (!(Char.IsDead($.ambush_cuban4_hait3))) {
      $.ambush_cuban4_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }
    if (!(Char.IsDead($.ambush_cuban5_hait3))) {
      $.ambush_cuban5_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }
    if (!(Char.IsDead($.ambush_cuban6_hait3))) {
      $.ambush_cuban6_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }
    if (!(Char.IsDead($.ambush_cuban7_hait3))) {
      $.ambush_cuban7_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }
    if (!(Char.IsDead($.ambush_cuban8_hait3))) {
      $.ambush_cuban8_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }
    if (!(Char.IsDead($.ambush_cuban9_hait3))) {
      $.ambush_cuban9_hait3.setOnlyDamagedByPlayer(true /* TRUE */);
    }


  }
}


// All guys can die


async function both_sides_can_die_hait3() {


  if (!(Char.IsDead($.cuban1_hait3))) {
    $.cuban1_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban2_hait3))) {
    $.cuban2_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban3_hait3))) {
    $.cuban3_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban4_hait3))) {
    $.cuban4_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban5_hait3))) {
    $.cuban5_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban6_hait3))) {
    $.cuban6_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban7_hait3))) {
    $.cuban7_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban8_hait3))) {
    $.cuban8_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban9_hait3))) {
    $.cuban9_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.cuban10_hait3))) {
    $.cuban10_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian1_hait3))) {
    $.haitian1_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian2_hait3))) {
    $.haitian2_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian3_hait3))) {
    $.haitian3_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian4_hait3))) {
    $.haitian4_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian5_hait3))) {
    $.haitian5_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian6_hait3))) {
    $.haitian6_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian7_hait3))) {
    $.haitian7_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian8_hait3))) {
    $.haitian8_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian9_hait3))) {
    $.haitian9_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if (!(Char.IsDead($.haitian10_hait3))) {
    $.haitian10_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  if ($.flag_ambush1_created_hait3 == 1) {
    if (!(Char.IsDead($.ambush_driver1_hait3))) {
      $.ambush_driver1_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
    }

    //IF NOT IS_CHAR_DEAD ambush_cuban1_hait3
    //	SET_CHAR_ONLY_DAMAGED_BY_PLAYER ambush_cuban1_hait3 FALSE
    //	ENDIF

    if (!(Char.IsDead($.ambush_cuban2_hait3))) {
      $.ambush_cuban2_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
    }
    if (!(Char.IsDead($.ambush_cuban3_hait3))) {
      $.ambush_cuban3_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
    }


  }


  if ($.flag_ambush2_created_hait3 == 1) {
    if (!(Char.IsDead($.ambush_cuban4_hait3))) {
      $.ambush_cuban4_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
    }

    //IF NOT IS_CHAR_DEAD ambush_cuban5_hait3
    //	SET_CHAR_ONLY_DAMAGED_BY_PLAYER ambush_cuban5_hait3 FALSE
    //ENDIF

    if (!(Char.IsDead($.ambush_cuban6_hait3))) {
      $.ambush_cuban6_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
    }
    if (!(Char.IsDead($.ambush_cuban7_hait3))) {
      $.ambush_cuban7_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
    }
    if (!(Char.IsDead($.ambush_cuban8_hait3))) {
      $.ambush_cuban8_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
    }
    if (!(Char.IsDead($.ambush_cuban9_hait3))) {
      $.ambush_cuban9_hait3.setOnlyDamagedByPlayer(false /* FALSE */);
    }


  }
}

export async function hait3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ********************************** Haitian Mission 3 ************************************
  // ********************************** Snipe The Cubans *************************************
  // ************************************ Dirty Lick'ns **************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME hait3

  // Mission start stuff


  await mission_start_haitian3();  // SCM GOSUB mission_start_haitian3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_haitian3_failed();  // SCM GOSUB mission_haitian3_failed
  }


  await mission_cleanup_haitian3();  // SCM GOSUB mission_cleanup_haitian3


  // MissionBoundary

  // Variables for mission

  // General fight stuff


  // VAR_INT flag_player_spotted_hait3

  //VAR_FLOAT players_x_hait3

  //VAR_FLOAT players_y_hait3

  //VAR_FLOAT players_z_hait3

  // Fight 1


  // VAR_INT flag_fight1_over_hait3


  // VAR_INT flag_fight_over_hait3


  // VAR_INT counter_dead_cuban


  // VAR_INT counter_dead_haitian

  // Cuban1


  // VAR_INT flag_cuban1_dead_hait3


  // VAR_INT cuban1_hait3


  // VAR_INT flag_cuban1_got_ai_hait3


  // VAR_INT cuban1_blip_hait3

  // Cuban2


  // VAR_INT flag_cuban2_dead_hait3


  // VAR_INT cuban2_hait3


  // VAR_INT flag_cuban2_got_ai_hait3


  // VAR_INT cuban2_blip_hait3

  // Cuban3


  // VAR_INT flag_cuban3_dead_hait3


  // VAR_INT cuban3_hait3


  // VAR_INT flag_cuban3_got_ai_hait3


  // VAR_INT cuban3_blip_hait3

  // Cuban4


  // VAR_INT flag_cuban4_dead_hait3


  // VAR_INT cuban4_hait3


  // VAR_INT flag_cuban4_got_ai_hait3


  // VAR_INT cuban4_blip_hait3

  // Cuban5


  // VAR_INT flag_cuban5_dead_hait3


  // VAR_INT cuban5_hait3


  // VAR_INT flag_cuban5_got_ai_hait3


  // VAR_INT cuban5_blip_hait3

  // Cuban6


  // VAR_INT flag_cuban6_dead_hait3


  // VAR_INT cuban6_hait3


  // VAR_INT flag_cuban6_got_ai_hait3


  // VAR_INT cuban6_blip_hait3

  // Cuban7


  // VAR_INT flag_cuban7_dead_hait3


  // VAR_INT cuban7_hait3


  // VAR_INT flag_cuban7_got_ai_hait3


  // VAR_INT cuban7_blip_hait3

  // Cuban8


  // VAR_INT flag_cuban8_dead_hait3


  // VAR_INT cuban8_hait3


  // VAR_INT flag_cuban8_got_ai_hait3


  // VAR_INT cuban8_blip_hait3

  // Cuban9


  // VAR_INT flag_cuban9_dead_hait3


  // VAR_INT cuban9_hait3


  // VAR_INT flag_cuban9_got_ai_hait3


  // VAR_INT cuban9_blip_hait3


  // Cuban10


  // VAR_INT flag_cuban10_dead_hait3


  // VAR_INT cuban10_hait3


  // VAR_INT flag_cuban10_got_ai_hait3


  // VAR_INT cuban10_blip_hait3

  // Haitians

  // Haitian1


  // VAR_INT flag_haitian1_dead_hait3


  // VAR_INT haitian1_hait3


  // VAR_INT flag_haitian1_got_ai_hait3

  // Haitian2


  // VAR_INT flag_haitian2_dead_hait3


  // VAR_INT haitian2_hait3


  // VAR_INT flag_haitian2_got_ai_hait3

  // Haitian3


  // VAR_INT flag_haitian3_dead_hait3


  // VAR_INT haitian3_hait3


  // VAR_INT flag_haitian3_got_ai_hait3

  // Haitian4


  // VAR_INT flag_haitian4_dead_hait3


  // VAR_INT haitian4_hait3


  // VAR_INT flag_haitian4_got_ai_hait3

  // Haititan5


  // VAR_INT flag_haitian5_dead_hait3


  // VAR_INT haitian5_hait3


  // VAR_INT flag_haitian5_got_ai_hait3

  // Haitian6


  // VAR_INT flag_haitian6_dead_hait3


  // VAR_INT haitian6_hait3


  // VAR_INT flag_haitian6_got_ai_hait3

  // Haitian7


  // VAR_INT flag_haitian7_dead_hait3


  // VAR_INT haitian7_hait3


  // VAR_INT flag_haitian7_got_ai_hait3

  // Haitian8


  // VAR_INT flag_haitian8_dead_hait3


  // VAR_INT haitian8_hait3


  // VAR_INT flag_haitian8_got_ai_hait3


  // Haitian9


  // VAR_INT flag_haitian9_dead_hait3


  // VAR_INT haitian9_hait3


  // VAR_INT flag_haitian9_got_ai_hait3


  // Haitian10


  // VAR_INT flag_haitian10_dead_hait3


  // VAR_INT haitian10_hait3


  // VAR_INT flag_haitian10_got_ai_hait3

  // Weapon location stuff


  // VAR_INT radar_blip_coord1_hait3

  // General truck stuff

  // Truck1


  // VAR_INT truck1_hait3


  // VAR_INT truck1_dead_hait3


  // VAR_FLOAT truck1_x_hait3


  // VAR_FLOAT truck1_y_hait3


  // VAR_FLOAT truck1_z_hait3


  // VAR_FLOAT truck1_dest_x_hait3


  // VAR_FLOAT truck1_dest_y_hait3


  // VAR_FLOAT truck1_dest_z_hait3


  // VAR_INT flag_truck1_in_position_hait3

  // guards


  // VAR_INT flag_ambush1_created_hait3


  // VAR_INT flag_ambush2_created_hait3

  // driver1


  // VAR_INT ambush_driver1_hait3


  // VAR_INT ambush_driver1_dead_hait3


  // VAR_INT ambush_driver1_blip_hait3


  // VAR_INT ambush_driver1_target_hait3

  // cuban1


  // VAR_INT ambush_cuban1_hait3


  // VAR_INT ambush_cuban1_dead_hait3


  // VAR_INT ambush_cuban1_blip_hait3


  // VAR_INT ambush_cuban1_target_hait3

  // cuban2


  // VAR_INT ambush_cuban2_hait3


  // VAR_INT ambush_cuban2_dead_hait3


  // VAR_INT ambush_cuban2_blip_hait3


  // VAR_INT ambush_cuban2_target_hait3

  // cuban3


  // VAR_INT ambush_cuban3_hait3


  // VAR_INT ambush_cuban3_dead_hait3


  // VAR_INT ambush_cuban3_blip_hait3


  // VAR_FLOAT fight1_x_hait3


  // VAR_FLOAT fight1_y_hait3


  // VAR_FLOAT fight1_z_hait3


  // VAR_INT driver1_goto_position_hait3


  // VAR_INT cuban1_goto_position_hait3


  // VAR_INT cuban2_goto_position_hait3


  // VAR_INT cuban3_goto_position_hait3


  // VAR_INT ambush_cuban3_target_hait3

  //cuban4


  // VAR_INT ambush_cuban4_hait3


  // VAR_INT ambush_cuban4_blip_hait3


  // VAR_INT ambush_cuban4_dead_hait3


  // VAR_INT cuban4_goto_position_hait3


  // VAR_INT ambush_cuban4_target_hait3

  //cuban5


  // VAR_INT ambush_cuban5_hait3


  // VAR_INT ambush_cuban5_dead_hait3


  // VAR_INT ambush_cuban5_blip_hait3


  // VAR_INT cuban5_goto_position_hait3


  // VAR_INT ambush_cuban5_target_hait3

  //cuban6


  // VAR_INT ambush_cuban6_hait3


  // VAR_INT ambush_cuban6_dead_hait3


  // VAR_INT cuban6_goto_position_hait3


  // VAR_INT ambush_cuban6_blip_hait3


  // VAR_INT ambush_cuban6_target_hait3

  //cuban7


  // VAR_INT ambush_cuban7_hait3


  // VAR_INT ambush_cuban7_dead_hait3


  // VAR_INT cuban7_goto_position_hait3


  // VAR_INT ambush_cuban7_blip_hait3


  // VAR_INT ambush_cuban7_target_hait3

  //cuban8


  // VAR_INT ambush_cuban8_hait3


  // VAR_INT ambush_cuban8_dead_hait3


  // VAR_INT cuban8_goto_position_hait3


  // VAR_INT ambush_cuban8_blip_hait3


  // VAR_INT ambush_cuban8_target_hait3

  //cuban9


  // VAR_INT ambush_cuban9_hait3


  // VAR_INT ambush_cuban9_dead_hait3


  // VAR_INT cuban9_goto_position_hait3


  // VAR_INT ambush_cuban9_blip_hait3


  // VAR_INT ambush_cuban9_target_hait3

  // sets the guys to take damage


  // VAR_INT flag_guys_can_die_hait3


  // VAR_INT sphere1_hait3


  // VAR_INT all_peds_can_die_hait3


  // VAR_INT counter_peds_got_ai_hait3

  // AI timer stuff

  //VAR_INT game_time_hait3

  //VAR_INT timer_cubans1_act_hait3

  //VAR_INT time_to_act_cubans1_hait3

  //VAR_INT timer_started_cubans1_hait3

  //VAR_INT timer_cubans2_act_hait3

  //VAR_INT time_to_act_cubans2_hait3

  //VAR_INT timer_started_cubans2_hait3

  //VAR_INT timer_haitians1_act_hait3

  //VAR_INT time_to_act_haitians1_hait3

  //VAR_INT timer_started_haitians1_hait3

  //VAR_INT timer_haitians2_act_hait3

  //VAR_INT time_to_act_haitians2_hait3

  //VAR_INT timer_started_haitians2_hait3


  // VAR_INT gosub_cuban1_hait3

  //VAR_INT gosub_cuban2_hait3


  // VAR_INT gosub_haitian1_hait3

  //VAR_INT gosub_haitian2_hait3


  // VAR_INT gosub_spotter_hait3

  // chooseing cloest ped stuff


  // VAR_FLOAT gosub_cuban1_x_hait3


  // VAR_FLOAT gosub_cuban1_y_hait3


  // VAR_FLOAT gosub_cuban1_z_hait3


  // VAR_FLOAT gosub_haitian1_x_hait3


  // VAR_FLOAT gosub_haitian1_y_hait3


  // VAR_FLOAT gosub_haitian1_z_hait3


  // VAR_FLOAT closest_dist_hait3


  // VAR_INT closest_haitian_hait3


  // VAR_INT distance_check_targ_hait3


  // VAR_FLOAT targ_hat_x_hait3


  // VAR_FLOAT targ_hat_y_hait3


  // VAR_FLOAT targ_hat_z_hait3


  // VAR_FLOAT targ_cub_x_hait3


  // VAR_FLOAT targ_cub_y_hait3


  // VAR_FLOAT targ_cub_z_hait3


  // VAR_FLOAT current_dist_hait3


  // VAR_INT closest_cuban_hait3


  // VAR_INT haitian1_target_hait3


  // VAR_INT haitian2_target_hait3


  // VAR_INT haitian3_target_hait3


  // VAR_INT haitian4_target_hait3


  // VAR_INT haitian5_target_hait3


  // VAR_INT haitian6_target_hait3


  // VAR_INT haitian7_target_hait3


  // VAR_INT haitian8_target_hait3


  // VAR_INT haitian9_target_hait3


  // VAR_INT haitian10_target_hait3


  // VAR_INT cuban1_target_hait3


  // VAR_INT cuban2_target_hait3


  // VAR_INT cuban3_target_hait3


  // VAR_INT cuban4_target_hait3


  // VAR_INT cuban5_target_hait3


  // VAR_INT cuban6_target_hait3


  // VAR_INT cuban7_target_hait3


  // VAR_INT cuban8_target_hait3


  // VAR_INT cuban9_target_hait3


  // VAR_INT cuban10_target_hait3

  // Player warning stuff


  // VAR_INT player_had_warning_message_hait3


  // VAR_INT frame_counter_hait3


  // VAR_INT player_spotted_melee_hait3


  // VAR_INT flag_death_timer_hait3

  // New melee weapon spotted stuff


  // VAR_INT gosub_death_check_bloke_hait3

  // **************************************** Mission Start **********************************


}
