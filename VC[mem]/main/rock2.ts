// Generated from main/rock2.sc

import { $ } from "../vars.mts";

async function mission_start_rock2() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;

  // nutter


  $.flag_nutter_dead_rock2 = 0;


  $.flag_nutter_in_local1_rock2 = 0;


  $.flag_car_coords_rock2 = 0;

  // Groupie1


  $.flag_groupie1_dead_rock2 = 0;


  $.flag_groupie1_in_local1_rock2 = 0;

  // Groupie2


  $.flag_groupie2_dead_rock2 = 0;


  $.flag_groupie2_in_local1_rock2 = 0;


  // Ped Locations


  $.ped_location1_x_rock2 = -874.345;


  $.ped_location1_y_rock2 = 752.026;


  $.ped_location1_z_rock2 = 10.09;


  $.ped_location2_x_rock2 = -873.002;


  $.ped_location2_y_rock2 = 746.816;


  $.ped_location2_z_rock2 = 10.08;

  // Car


  $.car_x_rock2 = -861.15;


  $.car_y_rock2 = 762.60;


  $.car_z_rock2 = 9.91;

  // Locations for the car to go to


  $.car_location1_x_rock2 = -816.150;


  $.car_location1_y_rock2 = 754.526;


  $.car_location1_z_rock2 = 9.92;


  $.car_location2_x_rock2 = -771.009;


  $.car_location2_y_rock2 = 751.192;


  $.car_location2_z_rock2 = 9.92;


  $.car_location3_x_rock2 = -728.617;


  $.car_location3_y_rock2 = 749.005;


  $.car_location3_z_rock2 = 9.92;


  $.car_location4_x_rock2 = -691.349;


  $.car_location4_y_rock2 = 747.598;


  $.car_location4_z_rock2 = 9.92;


  $.car_location5_x_rock2 = -682.831;


  $.car_location5_y_rock2 = 747.244;


  $.car_location5_z_rock2 = 9.92;


  $.car_location6_x_rock2 = -670.763;


  $.car_location6_y_rock2 = 756.798;


  $.car_location6_z_rock2 = 9.91;


  $.car_location7_x_rock2 = -669.649;


  $.car_location7_y_rock2 = 794.065;


  $.car_location7_z_rock2 = 10.26;


  $.car_location8_x_rock2 = -668.671;


  $.car_location8_y_rock2 = 838.437;


  $.car_location8_z_rock2 = 10.26;


  $.car_location9_x_rock2 = -669.402;


  $.car_location9_y_rock2 = 874.856;


  $.car_location9_z_rock2 = 10.26;


  $.car_location10_x_rock2 = -670.437;


  $.car_location10_y_rock2 = 921.898;


  $.car_location10_z_rock2 = 10.26;


  $.car_location11_x_rock2 = -674.578;


  $.car_location11_y_rock2 = 973.947;


  $.car_location11_z_rock2 = 10.26;


  $.car_location12_x_rock2 = -680.215;


  $.car_location12_y_rock2 = 1021.183;


  $.car_location12_z_rock2 = 10.26;


  $.car_location13_x_rock2 = -681.531;


  $.car_location13_y_rock2 = 1071.533;


  $.car_location13_z_rock2 = 10.26;


  $.car_location14_x_rock2 = -682.642;


  $.car_location14_y_rock2 = 1114.051;


  $.car_location14_z_rock2 = 10.26;


  $.car_location15_x_rock2 = -684.139;


  $.car_location15_y_rock2 = 1159.160;


  $.car_location15_z_rock2 = 10.25;


  $.car_location16_x_rock2 = -683.050;


  $.car_location16_y_rock2 = 1177.357;


  $.car_location16_z_rock2 = 9.948;


  $.car_location17_x_rock2 = -694.014;


  $.car_location17_y_rock2 = 1185.806;


  $.car_location17_z_rock2 = 9.906;


  $.car_location18_x_rock2 = -610.05;


  $.car_location18_y_rock2 = 1170.63;


  $.car_location18_z_rock2 = 9.90;

  // vehicles to cause disruption

  // Trashmaster1


  $.flag_truck1_created_rock2 = 0;


  $.trashcar1_x_rock2 = -665.192;


  $.trashcar1_y_rock2 = 1110.11;


  $.trashcar1_z_rock2 = 10.08;

  // Truck pulls out to


  $.flag_truck1_moved_rock2 = 0;


  $.trashcar1_goto_x_rock2 = -690.68;


  $.trashcar1_goto_y_rock2 = 1115.54;


  $.trashcar1_goto_z_rock2 = 10.07;

  // Car stuck stuff


  $.close_node_x_rock2 = 0.0;


  $.close_node_y_rock2 = 0.0;


  $.close_node_z_rock2 = 0.0;

  // limo stuff


  $.flag_car_blip_on_rock2 = 0;


  $.flag_player_in_limo_rock2 = 0;


  $.cutscene_over_rock2 = 0;

  // new car driving stuff


  $.nutter_doing_stuff_rock1 = 0;


  $.flag_nutter_in_car_rock1 = 0;


  $.nutter_been_in_car_once_rock2 = 0;

  // Gets rid of any stuff in the way


  Path.SwitchRoadsOff(-875.10, 1156.89, 8.0, -662.04, 738.48, 20.0);
  World.ClearAreaOfCars(-875.10, 1156.89, 8.0, -662.04, 738.48, 20.0);
  World.ClearAreaOfChars(-875.10, 1156.89, 8.0, -662.04, 738.48, 20.0);
  World.ClearArea(-869.44, 770.12, 9.91, 30.0, true /* TRUE */);


  await asyncWait(0);


  Text.LoadMissionText("ROCK2");


  Shortcut.SetDropoffPointForMission(-860.688, 1169.914, 9.997, 185.460);



  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSdick");
  Streaming.LoadSpecialCharacter(2, "CSjezz");
  Streaming.LoadSpecialCharacter(3, "CSkent");
  Streaming.LoadSpecialCharacter(4, "CSpercy");
  Streaming.LoadSpecialCharacter(5, "CSplay");


  Streaming.SetAreaVisible(VIS_STUDIO);


  Streaming.LoadScene(-880.527, 1157.64, 18.67);


  World.SetExtraColors(17, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);


  }


  Cutscene.Load("rok_2");


  Cutscene.SetOffset(-879.823, 1158.479, 16.776);
  Camera.SetNearClip(0.1);


  $.cs_dick = CutsceneObject.Create(SPECIAL01);
  $.cs_dick.setAnim("CSdick");


  $.cs_jezz = CutsceneObject.Create(SPECIAL02);
  $.cs_jezz.setAnim("CSjezz");


  $.cs_kent = CutsceneObject.Create(SPECIAL03);
  $.cs_kent.setAnim("CSkent");


  $.cs_percy = CutsceneObject.Create(SPECIAL04);
  $.cs_percy.setAnim("CSpercy");


  $.cs_player = CutsceneObject.Create(SPECIAL05);
  $.cs_player.setAnim("CSplay");


  World.ClearArea(-871.90, 1159.46, 10.07, 2.0, true /* TRUE */);
  $.player1.setCoordinates(-871.90, 1159.46, 10.07);
  $.player1.setHeading(270.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1079) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_A", 10000, 1); //"Tommy, man. Am I glad to see you!"


  while ($.cs_time < 2647) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_B", 10000, 1); //"What's going on?


  while ($.cs_time < 3303) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_C", 10000, 1); //"Bad vibes, Tommy...."


  while ($.cs_time < 4762) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_D", 10000, 1); //"Aye, I'm nae joking ken, it's heavey stuff man, heavey ken?


  while ($.cs_time < 7952) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_E", 10000, 1); //"There's this cat, we hardly know him, but he knows us.


  while ($.cs_time < 11003) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_F", 10000, 1); //"Like this cat. Knows all about us.


  while ($.cs_time < 12952) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_G", 10000, 1); //"Knows that Willy likes ladies' underwear, eh!


  while ($.cs_time < 15081) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_H", 10000, 1); //"Or that Percy likes Duran Duran!"


  while ($.cs_time < 16366) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_I", 10000, 1); //"Shut up ye fool. Just 'cause Jezz bangs sheep.


  while ($.cs_time < 19135) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_J", 10000, 1); //"It's a love rocket thing ken?


  while ($.cs_time < 20496) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_R", 10000, 1); //"Oi Shut it!


  while ($.cs_time < 21594) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_K", 10000, 1); //"Yeah, the love rocket thing, right, but list, this cat...."


  while ($.cs_time < 24497) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_L", 10000, 1); //"yeh, yeh, the guy, he wants Love Fist dead."


  while ($.cs_time < 26615) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_M", 10000, 1); //"Dead Tommy."


  while ($.cs_time < 27614) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_N", 10000, 1); //"Love Fist gone. You know what they say, the good die young."


  while ($.cs_time < 30209) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_O", 10000, 1); //"But Tommy, you gotta save Love Fist!"


  while ($.cs_time < 31227) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_P", 10000, 1); //"We got a signing in two hours and I think..."


  while ($.cs_time < 34202) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM2_Q", 10000, 1); //"And the boys think the stalker is going to try some monkey business there."


  while ($.cs_time < 37248) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  World.ClearExtraColors(false /* FALSE */);


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);


  Streaming.LoadScene(-871.90, 1159.46, 10.07);


  $.player1.setMood(PLAYER_MOOD_WISECRACKING, 60000);

  // ****************************************END OF CUTSCENE**********************************

  // Waiting for the ped models to load


  Streaming.RequestModel(GDa);


  Streaming.RequestModel(SENTINEL);


  Streaming.RequestModel(TRASH);


  Streaming.LoadSpecialCharacter(6, "psycho");


  Streaming.RequestModel(178 /* UZI */);


  Streaming.RequestModel(173 /* COLT45 */);


  Streaming.RequestModel(LOVEFIST);


  Streaming.RequestModel(WFYG1);


  Streaming.RequestModel(WFYG2);


  Streaming.RequestModel(WMYCR);


  Streaming.RequestAnimation("RIOT");


  Streaming.RequestModel(BKA);


  Streaming.RequestModel(BKB);


  Streaming.RequestModel(lf_mediastage);


  while (!(Streaming.HasModelLoaded(GDa)) || !(Streaming.HasModelLoaded(SENTINEL)) || !(Streaming.HasModelLoaded(178 /* uzi */)) || !(Streaming.HasModelLoaded(TRASH)) || !(Streaming.HasSpecialCharacterLoaded(6)) || !(Streaming.HasModelLoaded(lf_mediastage))) {
    await asyncWait(0);


  }


  Audio.LoadMissionAudio(1, "ROK2_01" as any);


  Audio.LoadMissionAudio(2, "PSYCH_1" as any);


  while (!(Streaming.HasModelLoaded(WFYG1)) || !(Streaming.HasModelLoaded(WFYG2)) || !(Streaming.HasModelLoaded(LOVEFIST)) || !(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2)) || !(Streaming.HasModelLoaded(WMYCR))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasAnimationLoaded("RIOT")) || !(Streaming.HasModelLoaded(BKA)) || !(Streaming.HasModelLoaded(BKB)) || !(Streaming.HasModelLoaded(173 /* COLT45 */))) {
    await asyncWait(0);


  }

  // Creates the limo for the player to use


  $.lovefist_limo_rock2 = Car.Create(LOVEFIST, -862.22, 1149.87, 9.75);


  $.lovefist_limo_rock2.setHeading(178.437);


  $.limo_blip_rock2 = Blip.AddForCar($.lovefist_limo_rock2);

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Car.IsDead($.lovefist_limo_rock2)) {
      Text.PrintNow("RBM2_2", 5000, 1); //"You've wrecked the bands car!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("RBM2_1", 5000, 1); //"Drive the limo to the signing event and try and draw the psycho out!"

  // Waiting for the player to get into the limo


  while (!($.player1.isInCar($.lovefist_limo_rock2))) {
    await asyncWait(0);
    if (Car.IsDead($.lovefist_limo_rock2)) {
      Text.PrintNow("RBM2_2", 5000, 1); //"You've wrecked the bands car!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }


  }


  $.flag_player_in_limo_rock2 = 1;


  $.limo_blip_rock2.remove();


  Audio.SetMissionAudioPosition(1, -875.225, 755.786, 11.092);
  Audio.PlayMissionAudio(1);

  // Security1


  $.security1_rock2 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -876.059, 750.314, 10.087);


  $.security1_rock2.clearThreatSearch();


  $.security1_rock2.setHeading(16.0);


  $.security1_rock2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

  // Creates security 2


  $.security2_rock2 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -870.890, 750.314, 10.087);


  $.security2_rock2.clearThreatSearch();


  $.security2_rock2.setHeading(16.0);


  $.security2_rock2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

  // Creates groupie 1


  $.groupie1_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, -877.13, 751.69, 10.08);


  $.groupie1_rock2.clearThreatSearch();


  $.groupie1_rock2.setHeading(276.0);


  $.groupie1_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 2


  $.groupie2_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG2, -879.13, 751.69, 10.08);


  $.groupie2_rock2.clearThreatSearch();


  $.groupie2_rock2.setHeading(276.0);

  // Creates the Nutter


  $.nutter_rock2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL06, -881.13, 751.69, 10.08);



  $.nutter_rock2.clearThreatSearch();


  $.nutter_rock2.setHeading(276.0);


  $.nutter_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 3


  $.groupie3_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, -881.948, 754.142, 10.09);


  $.groupie3_rock2.clearThreatSearch();


  $.groupie3_rock2.setHeading(171.339, .0);

  // Creates groupie 4


  $.groupie4_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG2, -881.870, 756.396, 10.09);


  $.groupie4_rock2.clearThreatSearch();


  $.groupie4_rock2.setHeading(189.550);


  Game.SetCharsChatting($.groupie4_rock2, $.groupie3_rock2, 1000000);

  // Creates groupie 5


  $.groupie5_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, -873.030, 757.606, 10.09);


  $.groupie5_rock2.clearThreatSearch();


  $.groupie5_rock2.setHeading(59.35);

  // Creates groupie 6


  $.groupie6_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG2, -875.061, 758.918, 10.09);


  $.groupie6_rock2.clearThreatSearch();


  $.groupie6_rock2.setHeading(238.128);


  Game.SetCharsChatting($.groupie6_rock2, $.groupie5_rock2, 1000000);

  // Creates groupie 7


  $.groupie7_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, -878.734, 755.467, 10.09);


  $.groupie7_rock2.clearThreatSearch();


  $.groupie7_rock2.setHeading(0.0);

  // Creates groupie 8


  $.groupie8_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG2, -878.106, 756.674, 10.09);


  $.groupie8_rock2.clearThreatSearch();


  $.groupie8_rock2.setHeading(0.0);


  Game.SetCharsChatting($.groupie7_rock2, $.groupie8_rock2, 1000000);

  // Creates groupie 9


  $.groupie9_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, -880.432, 761.017, 10.09);


  $.groupie9_rock2.clearThreatSearch();


  $.groupie9_rock2.setHeading(211.157);


  $.groupie9_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 10


  $.groupie10_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG2, -880.529, 758.980, 10.09);


  $.groupie10_rock2.clearThreatSearch();


  $.groupie10_rock2.setHeading(191.085);


  $.groupie10_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 11 ( bloke who uses riot anim )


  $.groupie11_rock2 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCR, -877.909, 758.973, 10.09);


  $.groupie11_rock2.clearThreatSearch();


  $.groupie11_rock2.setHeading(207.253);


  $.groupie11_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 12 ( bloke who uses riot anim )


  $.groupie12_rock2 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCR, -874.309, 756.278, 10.09);


  $.groupie12_rock2.clearThreatSearch();


  $.groupie12_rock2.setHeading(205.828);


  $.groupie12_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 13


  $.groupie13_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG2, -868.406, 754.232, 10.09);


  $.groupie13_rock2.clearThreatSearch();


  $.groupie13_rock2.setHeading(141.694);


  $.groupie13_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 14


  $.groupie14_rock2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, -869.254, 756.061, 10.09);


  $.groupie14_rock2.clearThreatSearch();


  $.groupie14_rock2.setHeading(165.718);


  $.groupie14_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 15


  $.groupie15_rock2 = Char.Create(4 /* PEDTYPE_CIVMALE */, BKB, -871.932, 758.940, 10.09);


  $.groupie15_rock2.clearThreatSearch();


  $.groupie15_rock2.setHeading(175.0);


  $.groupie15_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 16


  $.groupie16_rock2 = Char.Create(4 /* PEDTYPE_CIVMALE */, BKA, -870.592, 756.081, 10.09);


  $.groupie16_rock2.clearThreatSearch();


  $.groupie16_rock2.setHeading(186.374);


  $.groupie16_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates groupie 17


  $.groupie17_rock2 = Char.Create(4 /* PEDTYPE_CIVMALE */, BKB, -870.124, 757.097, 10.09);


  $.groupie17_rock2.clearThreatSearch();


  $.groupie17_rock2.setHeading(150.524);


  $.groupie17_rock2.setWaitState(WAITSTATE_RIOT, 1000000);

  // Creates the media stage


  $.stage_rock2 = ScriptObject.Create(lf_mediastage, -868.367, 753.316, 10.09);


  $.stage_rock2.setHeading(180.0);


  // Waiting for the player to locate outside the area


  $.radar_blip_coord1_rock2 = Blip.AddForCoord(-869.44, 770.12, 9.91);


  $.blob_flag = 1;


  while (!($.player1.locateStoppedInCar3D(-869.44, 770.12, 9.91, 6.0, 4.0, 8.0, $.blob_flag)) || $.flag_player_in_limo_rock2 == 0) {
    await asyncWait(0);
    if (Char.IsDead($.nutter_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie1_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie2_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie3_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie4_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie5_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie6_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie7_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie8_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie9_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie10_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie11_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.groupie12_rock2)) {
      Text.PrintNow("RBM2_7", 5000, 1); //"The fans have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.security1_rock2)) {
      Text.PrintNow("RBM2_8", 5000, 1); //"The security guards have been attacked, the psycho won't show!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.security2_rock2)) {
      Text.PrintNow("RBM2_8", 5000, 1); //"The security guards have been attacked, the psycho won't show!
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.lovefist_limo_rock2)) {
      Text.PrintNow("RBM2_2", 5000, 1); //"You've wrecked the bands car!"
      // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
    }
    else {
      if (!($.player1.isInCar($.lovefist_limo_rock2))) {
        if ($.flag_car_blip_on_rock2 == 0) {
          $.radar_blip_coord1_rock2.remove();
          $.limo_blip_rock2 = Blip.AddForCar($.lovefist_limo_rock2);
          Text.PrintNow("IN_VEH", 5000, 1); //"Get back in the vehicle
          $.blob_flag = 0;
          $.flag_player_in_limo_rock2 = 0;
          $.flag_car_blip_on_rock2 = 1;
        }


      }
      else {
        if ($.flag_car_blip_on_rock2 == 1) {
          $.limo_blip_rock2.remove();
          $.radar_blip_coord1_rock2 = Blip.AddForCoord(-869.44, 770.12, 9.91);
          Text.PrintNow("RBM2_3", 5000, 1); //"Get to the signing!"
          $.blob_flag = 1;
          $.flag_player_in_limo_rock2 = 1;
          $.flag_car_blip_on_rock2 = 0;
        }


      }


    }


  }


  $.radar_blip_coord1_rock2.remove();

  // camera stuff to go in here


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);



  World.ClearArea(-871.706, 752.216, 10.415, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(-871.706, 752.216, 10.415, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-872.667, 752.154, 10.683, 2 /* JUMP_CUT */);
  //SET_FIXED_CAMERA_POSITION -868.630 752.707 13.136 0.0 0.0 0.0
  //POINT_CAMERA_AT_POINT -869.607 752.724 12.926 JUMP_CUT


  while ($.cutscene_over_rock2 == 0) {
    await asyncWait(0);

    // Groupie1

    if ($.flag_groupie1_dead_rock2 == 0) {
      if ($.flag_groupie1_in_local1_rock2 < 4) {
        if (Char.IsDead($.groupie1_rock2)) {
          Text.PrintNow("RBM2_7", 5000, 1); //"One of the groupies has been killed
          // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
          $.flag_groupie1_dead_rock2 = 1;
        }
        else {
          if ($.flag_groupie1_in_local1_rock2 == 0) {
            World.ClearArea($.ped_location1_x_rock2, $.ped_location1_y_rock2, $.ped_location1_z_rock2, 2.0, false /* FALSE */);
            World.ClearArea($.ped_location2_x_rock2, $.ped_location2_y_rock2, $.ped_location2_z_rock2, 2.0, false /* FALSE */);
            World.ClearArea(-877.13, 751.69, 10.08, 2.0, false /* FALSE */); // ped 1 location
            World.ClearArea(-879.13, 751.69, 10.08, 2.0, false /* FALSE */); // ped 2 location
            World.ClearArea(-881.13, 751.69, 10.08, 2.0, false /* FALSE */); // nutter location
            if (!(Char.IsDead($.security1_rock2))) {
              $.security1_rock2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 2000);
            }
            else {
              Text.PrintNow("RBM2_8", 5000, 1); //"The security guards have been attacked, the psycho won't show!
              // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
            }
            $.groupie1_rock2.clearWaitState();
            $.groupie1_rock2.clearAllAnims();
            $.groupie1_rock2.setObjGotoCoordOnFoot($.ped_location1_x_rock2, $.ped_location1_y_rock2);
            TIMERA = 0;
            TIMERB = 0;
            $.flag_groupie1_in_local1_rock2 = 1;
          }
          if ($.flag_groupie1_in_local1_rock2 == 1) {
            if (TIMERB >= 6000) {
              if (!($.groupie1_rock2.locateOnFoot2D($.ped_location1_x_rock2, $.ped_location1_y_rock2, 0.5, 0.5, false /* FALSE */))) {
                $.groupie1_rock2.setCoordinates($.ped_location1_x_rock2, $.ped_location1_y_rock2, $.ped_location1_z_rock2);
              }


            }
            if ($.groupie1_rock2.locateOnFoot2D($.ped_location1_x_rock2, $.ped_location1_y_rock2, 0.5, 0.5, false /* FALSE */)) {
              $.groupie1_rock2.setObjGotoCoordOnFoot($.ped_location2_x_rock2, $.ped_location2_y_rock2);
              TIMERB = 0;
              $.flag_groupie1_in_local1_rock2 = 2;
            }


          }
          if ($.flag_groupie1_in_local1_rock2 == 2) {
            if (TIMERB >= 6000) {
              if (!($.groupie1_rock2.locateOnFoot2D($.ped_location2_x_rock2, $.ped_location2_y_rock2, 0.5, 0.5, false /* FALSE */))) {
                $.groupie1_rock2.setCoordinates($.ped_location2_x_rock2, $.ped_location2_y_rock2, $.ped_location2_z_rock2);
              }


            }
            if ($.groupie1_rock2.locateOnFoot2D($.ped_location2_x_rock2, $.ped_location2_y_rock2, 0.5, 0.5, false /* FALSE */)) {
              $.groupie1_rock2.setIdle();
              TIMERB = 0;
              $.flag_groupie1_in_local1_rock2 = 3;
            }


          }


        }


      }


    }
    if ($.flag_groupie1_in_local1_rock2 == 3) {
      $.groupie1_rock2.delete();
      $.flag_groupie1_in_local1_rock2 = 4;


    }

    // Groupie2

    if ($.flag_groupie2_dead_rock2 == 0) {
      if ($.flag_groupie2_in_local1_rock2 < 4) {
        if (Char.IsDead($.groupie2_rock2)) {
          Text.PrintNow("RBM2_7", 5000, 1); //"One of the groupies has been killed
          // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
          $.flag_groupie2_dead_rock2 = 1;
        }
        else {
          if ($.flag_groupie1_in_local1_rock2 >= 1) {
            if ($.flag_groupie2_in_local1_rock2 < 4) {
              if ($.flag_groupie2_in_local1_rock2 == 0) {
                if (TIMERA > 350) {
                  $.groupie2_rock2.clearWaitState();
                  $.groupie2_rock2.clearAllAnims();
                  $.groupie2_rock2.setObjGotoCoordOnFoot($.ped_location1_x_rock2, $.ped_location1_y_rock2);
                  TIMERA = 0;
                  TIMERB = 0;
                  $.flag_groupie2_in_local1_rock2 = 1;
                }


              }
              if ($.flag_groupie2_in_local1_rock2 == 1) {
                if (TIMERB >= 6000) {
                  if (!($.groupie2_rock2.locateOnFoot2D($.ped_location1_x_rock2, $.ped_location1_y_rock2, 0.5, 0.5, false /* FALSE */))) {
                    $.groupie2_rock2.setCoordinates($.ped_location1_x_rock2, $.ped_location1_y_rock2, $.ped_location1_z_rock2);
                  }


                }
                if ($.groupie2_rock2.locateOnFoot2D($.ped_location1_x_rock2, $.ped_location1_y_rock2, 0.5, 0.5, false /* FALSE */)) {
                  $.groupie2_rock2.setObjGotoCoordOnFoot($.ped_location2_x_rock2, $.ped_location2_y_rock2);
                  TIMERB = 0;
                  $.flag_groupie2_in_local1_rock2 = 2;
                }


              }
              if ($.flag_groupie2_in_local1_rock2 == 2) {
                if (TIMERB >= 6000) {
                  if (!($.groupie2_rock2.locateOnFoot2D($.ped_location2_x_rock2, $.ped_location2_y_rock2, 0.5, 0.5, false /* FALSE */))) {
                    $.groupie2_rock2.setCoordinates($.ped_location2_x_rock2, $.ped_location2_y_rock2, $.ped_location2_z_rock2);
                  }


                }
                if ($.groupie2_rock2.locateOnFoot2D($.ped_location2_x_rock2, $.ped_location2_y_rock2, 0.5, 0.5, false /* FALSE */)) {
                  TIMERB = 0;
                  $.flag_groupie2_in_local1_rock2 = 3;
                }


              }


            }


          }


        }


      }
      if ($.flag_groupie2_in_local1_rock2 == 3) {
        $.groupie2_rock2.delete();
        $.flag_groupie2_in_local1_rock2 = 4;
      }


    }

    // Nutter

    if ($.flag_nutter_dead_rock2 == 0) {
      if (Char.IsDead($.nutter_rock2)) {
        Text.PrintNow("RBM2_7", 5000, 1); //"One of the groupies has been killed
        // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
        $.flag_nutter_dead_rock2 = 1;
      }
      else {
        if ($.flag_groupie2_in_local1_rock2 >= 1) {
          if ($.flag_nutter_in_local1_rock2 == 0) {
            if (TIMERA > 450) {
              $.nutter_rock2.clearWaitState();
              $.nutter_rock2.clearAllAnims();
              $.nutter_rock2.setObjGotoCoordOnFoot($.ped_location1_x_rock2, $.ped_location1_y_rock2);
              TIMERA = 0;
              TIMERB = 0;
              $.flag_nutter_in_local1_rock2 = 1;
              //	SET_FIXED_CAMERA_POSITION -871.706 752.216 10.415 0.0 0.0 0.0
              //	POINT_CAMERA_AT_POINT -872.667 752.154 10.683 JUMP_CUT

            }


          }
          if ($.flag_nutter_in_local1_rock2 == 1) {
            if (TIMERB >= 6000) {
              if (!($.nutter_rock2.locateOnFoot2D($.ped_location1_x_rock2, $.ped_location1_y_rock2, 1.0, 1.0, false /* FALSE */))) {
                $.nutter_rock2.setCoordinates($.ped_location1_x_rock2, $.ped_location1_y_rock2, $.ped_location1_z_rock2);
              }


            }
            if ($.nutter_rock2.locateOnFoot2D($.ped_location1_x_rock2, $.ped_location1_y_rock2, 1.0, 1.0, false /* FALSE */)) {
              $.nutter_rock2.setIdle();
              if (!(Char.IsDead($.security1_rock2))) {
                $.nutter_rock2.turnToFaceChar($.security1_rock2);
              }
              $.flag_nutter_in_local1_rock2 = 2;
            }


          }
          if ($.flag_nutter_in_local1_rock2 == 2) {
            World.ClearArea($.car_x_rock2, $.car_y_rock2, $.car_z_rock2, 1.0, false /* FALSE */);
            $.car_rock2 = Car.Create(SENTINEL, $.car_x_rock2, $.car_y_rock2, $.car_z_rock2);
            $.car_rock2.setHeading(260.0);
            $.car_rock2.setOnlyDamagedByPlayer(true /* TRUE */);
            Audio.PlayMissionAudio(2);
            Text.PrintNow("PSYCH_1", 5000, 1); //"Love fist ruined my life!"
            $.nutter_rock2.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 30000); // Infinate ammo
            if (!(Char.IsDead($.security2_rock2))) {
              $.security2_rock2.setHealth(20);
              $.security2_rock2.turnToFaceChar($.nutter_rock2);
            }
            if (!(Char.IsDead($.security1_rock2))) {
              $.security1_rock2.turnToFaceChar($.nutter_rock2);
              $.security1_rock2.setHealth(20);
              $.nutter_rock2.setObjKillCharOnFoot($.security1_rock2);
              $.security1_rock2.setWaitState(17 /* WAITSTATE_PLAYANIM_HANDSUP */, 2000);
              $.flag_nutter_in_local1_rock2 = 3;
            }


          }
          if ($.flag_nutter_in_local1_rock2 == 3) {
            if (Audio.HasMissionAudioFinished(2)) {
              Text.ClearThisPrint("PSYCH_1");
              Audio.LoadMissionAudio(2, "PSYCH_2" as any);
              $.flag_nutter_in_local1_rock2 = 4;
            }
            if (!(Char.IsDead($.security2_rock2))) {
              $.security2_rock2.clearAllAnims();
              $.security2_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
            }


          }
          if ($.flag_nutter_in_local1_rock2 == 4) {
            if (Audio.HasMissionAudioLoaded(2)) {
              $.flag_nutter_in_local1_rock2 = 5;
            }


          }
          if ($.flag_nutter_in_local1_rock2 == 5) {
            $.nutter_rock2.setHeading(288.184);
            Audio.PlayMissionAudio(2);
            Text.PrintNow("PSYCH_2", 5000, 1); //"Kill love fist!"
            Camera.SetFixedPosition(-873.219, 752.811, 11.062, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-874.159, 752.585, 11.319, 2 /* JUMP_CUT */);
            $.nutter_rock2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
            $.flag_nutter_in_local1_rock2 = 6;
          }
          if ($.flag_nutter_in_local1_rock2 == 6) {
            if (Audio.HasMissionAudioFinished(2)) {
              Text.ClearThisPrint("PSYCH_2");
              $.nutter_rock2.setWaitState(0 /* WAITSTATE_FALSE */, 1);
              $.nutter_rock2.clearAllAnims();
              $.flag_nutter_in_local1_rock2 = 7;
            }


          }
          if ($.flag_nutter_in_local1_rock2 == 7) {
            if (!(Car.IsDead($.car_rock2))) {
              $.nutter_rock2.setRunning(true /* TRUE */);
              $.nutter_rock2.setObjEnterCarAsDriver($.car_rock2);
              TIMERB = 0;
              $.flag_nutter_in_local1_rock2 = 8;
            }
            else {
              // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
            }


          }
          if ($.flag_nutter_in_local1_rock2 == 8) {
            if (TIMERB > 1200) {
              if (!(Car.IsDead($.car_rock2))) {
                //WARP_CHAR_INTO_CAR nutter_rock2 car_rock2
                World.ClearArea(-871.587, 751.170, 12.45, 1.0, false /* FALSE */);
                Camera.SetFixedPosition(-871.587, 751.170, 12.45, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-870.721, 751.668, 12.40, 2 /* JUMP_CUT */);
                $.flag_nutter_in_local1_rock2 = 9;
              }
              else {
                // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
              }


            }


          }
          if ($.flag_nutter_in_local1_rock2 == 9) {
            if (!(Car.IsDead($.car_rock2))) {
              if ($.nutter_rock2.isInCar($.car_rock2)) {
                //SET_CAR_CHANGE_LANE car_rock2 FALSE
                //SET_CHAR_CANT_BE_DRAGGED_OUT nutter_rock2 TRUE
                StuckCarCheck.Add($.car_rock2, 0.5, 2000);
                $.car_rock2.addUpsidedownCheck();
                $.radar_blip_nutter_rock2 = Blip.AddForCharOld($.nutter_rock2, 1 /* GREEN */, 1 /* MARKER_ONLY */);
                $.nutter_been_in_car_once_rock2 = 1;
                $.flag_nutter_in_car_rock1 = 1;
                $.flag_nutter_in_local1_rock2 = 10;
              }


            }
            else {
              // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
            }


          }
          if ($.flag_nutter_in_local1_rock2 == 10) {
            $.cutscene_over_rock2 = 1;
          }


        }


      }


    }
    if ($.flag_nutter_in_local1_rock2 == 3) {
      Audio.ClearMissionAudio(1);
      if (!(Char.IsDead($.groupie3_rock2))) {
        $.groupie3_rock2.clearWaitState();
        $.groupie3_rock2.clearAllAnims();
        $.groupie3_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie3_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie4_rock2))) {
        $.groupie4_rock2.clearWaitState();
        $.groupie4_rock2.clearAllAnims();
        $.groupie4_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie4_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie5_rock2))) {
        $.groupie5_rock2.clearWaitState();
        $.groupie5_rock2.clearAllAnims();
        $.groupie5_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie5_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie6_rock2))) {
        $.groupie6_rock2.clearWaitState();
        $.groupie6_rock2.clearAllAnims();
        $.groupie6_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie6_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie7_rock2))) {
        $.groupie7_rock2.clearWaitState();
        $.groupie7_rock2.clearAllAnims();
        $.groupie7_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie7_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie8_rock2))) {
        $.groupie8_rock2.clearWaitState();
        $.groupie8_rock2.clearAllAnims();
        $.groupie8_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie8_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie9_rock2))) {
        $.groupie9_rock2.clearWaitState();
        $.groupie9_rock2.clearAllAnims();
        $.groupie9_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie9_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie10_rock2))) {
        $.groupie10_rock2.clearWaitState();
        $.groupie10_rock2.clearAllAnims();
        $.groupie10_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie10_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie11_rock2))) {
        $.groupie11_rock2.clearWaitState();
        $.groupie11_rock2.clearAllAnims();
        $.groupie11_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie11_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie12_rock2))) {
        $.groupie12_rock2.clearWaitState();
        $.groupie12_rock2.clearAllAnims();
        $.groupie12_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie12_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie13_rock2))) {
        $.groupie13_rock2.clearWaitState();
        $.groupie13_rock2.clearAllAnims();
        $.groupie13_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie13_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie14_rock2))) {
        $.groupie14_rock2.clearWaitState();
        $.groupie14_rock2.clearAllAnims();
        $.groupie14_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie14_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie15_rock2))) {
        $.groupie15_rock2.clearWaitState();
        $.groupie15_rock2.clearAllAnims();
        $.groupie15_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie15_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie16_rock2))) {
        $.groupie16_rock2.clearWaitState();
        $.groupie16_rock2.clearAllAnims();
        $.groupie16_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie16_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }
      if (!(Char.IsDead($.groupie17_rock2))) {
        $.groupie17_rock2.clearWaitState();
        $.groupie17_rock2.clearAllAnims();
        $.groupie17_rock2.setPersonality(PEDSTAT_COWARD);
        $.groupie17_rock2.setObjFleeCharOnFootAlways($.nutter_rock2);
      }


    }


  }


  if (!(Char.IsDead($.security1_rock2))) {
    $.security1_rock2.clearAllAnims();
    $.security1_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.security2_rock2))) {
    $.security2_rock2.clearAllAnims();
    $.security2_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie1_rock2))) {
    $.groupie1_rock2.clearAllAnims();
    $.groupie1_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie2_rock2))) {
    $.groupie2_rock2.clearAllAnims();
    $.groupie2_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie3_rock2))) {
    $.groupie3_rock2.clearAllAnims();
    $.groupie3_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie4_rock2))) {
    $.groupie4_rock2.clearAllAnims();
    $.groupie4_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie5_rock2))) {
    $.groupie5_rock2.clearAllAnims();
    $.groupie5_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie6_rock2))) {
    $.groupie6_rock2.clearAllAnims();
    $.groupie6_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie7_rock2))) {
    $.groupie7_rock2.clearAllAnims();
    $.groupie7_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie8_rock2))) {
    $.groupie8_rock2.clearAllAnims();
    $.groupie8_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie9_rock2))) {
    $.groupie9_rock2.clearAllAnims();
    $.groupie9_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie10_rock2))) {
    $.groupie10_rock2.clearAllAnims();
    $.groupie10_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie11_rock2))) {
    $.groupie11_rock2.clearAllAnims();
    $.groupie11_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie12_rock2))) {
    $.groupie12_rock2.clearAllAnims();
    $.groupie12_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie13_rock2))) {
    $.groupie13_rock2.clearAllAnims();
    $.groupie13_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie14_rock2))) {
    $.groupie14_rock2.clearAllAnims();
    $.groupie14_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie15_rock2))) {
    $.groupie15_rock2.clearAllAnims();
    $.groupie15_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie16_rock2))) {
    $.groupie16_rock2.clearAllAnims();
    $.groupie16_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie17_rock2))) {
    $.groupie17_rock2.clearAllAnims();
    $.groupie17_rock2.clearWaitState();
  }


  $.security1_rock2.markAsNoLongerNeeded();
  $.security2_rock2.markAsNoLongerNeeded();
  $.groupie1_rock2.markAsNoLongerNeeded();
  $.groupie2_rock2.markAsNoLongerNeeded();
  $.groupie3_rock2.markAsNoLongerNeeded();
  $.groupie4_rock2.markAsNoLongerNeeded();
  $.groupie5_rock2.markAsNoLongerNeeded();
  $.groupie6_rock2.markAsNoLongerNeeded();
  $.groupie7_rock2.markAsNoLongerNeeded();
  $.groupie8_rock2.markAsNoLongerNeeded();
  $.groupie9_rock2.markAsNoLongerNeeded();
  $.groupie10_rock2.markAsNoLongerNeeded();
  $.groupie11_rock2.markAsNoLongerNeeded();
  $.groupie12_rock2.markAsNoLongerNeeded();
  $.groupie13_rock2.markAsNoLongerNeeded();
  $.groupie14_rock2.markAsNoLongerNeeded();
  $.groupie15_rock2.markAsNoLongerNeeded();
  $.groupie16_rock2.markAsNoLongerNeeded();
  $.groupie17_rock2.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(lf_mediastage);


  Streaming.RemoveAnimation("RIOT");


  Text.PrintNow("RBM2_4", 5000, 1); //"Get the Psycho don't let him escape!"
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);

  // waiting for the player to kill the psycho


  while ($.flag_nutter_dead_rock2 == 0) {
    await asyncWait(0);
    if (!(Char.IsDead($.nutter_rock2))) {
      if ($.nutter_been_in_car_once_rock2 == 1) {
        if (!($.nutter_rock2.isInAnyCar())) {
          $.nutter_rock2.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); // Infinate ammo
          $.nutter_been_in_car_once_rock2 = 0;
        }


      }
      if (!($.nutter_rock2.isOnScreen())) {
        if (!($.player1.locateAnyMeansChar2D($.nutter_rock2, 200.0, 200.0, false /* FALSE */))) {
          Text.PrintNow("RBM2_5", 5000, 1); //"You lost him you idiot!"
          // SCM GOTO → mission_rock2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rock2_failed"); // fallback: would break linear control flow
        }


      }


    }
    else {
      $.radar_blip_nutter_rock2.remove();
      $.flag_nutter_dead_rock2 = 1;
    }
    if ($.nutter_been_in_car_once_rock2 == 1) {
      if (!(Car.IsDead($.car_rock2))) {
        if (!(Char.IsDead($.nutter_rock2))) {
          if ($.nutter_rock2.isInCar($.car_rock2)) {
            if ($.flag_car_coords_rock2 < 19) {
              await car_drive_rock2();  // SCM GOSUB car_drive_rock2
              await car_stuck_rock2();  // SCM GOSUB car_stuck_rock2
            }


          }
          else {
            $.car_rock2.setCruiseSpeed(0.0);
            $.car_rock2.setIdle();
          }


        }


      }


    }

    // Psycho out of car stuff

    if (!(Char.IsDead($.nutter_rock2))) {
      if ($.nutter_doing_stuff_rock1 == 0) {
        if (!($.nutter_rock2.isInAnyCar())) {
          if ($.nutter_rock2.isOnScreen()) {
            $.nutter_rock2.setObjKillPlayerAnyMeans($.player1);
            $.nutter_doing_stuff_rock1 = 1;
          }


        }


      }
      if ($.flag_nutter_in_car_rock1 == 0) {
        if ($.nutter_rock2.isInAnyCar()) {
          $.nutter_rock2.setObjNoObj();
          $.car_rock2 = $.nutter_rock2.storeCarIsIn();
          $.car_rock2.addUpsidedownCheck();
          StuckCarCheck.Add($.car_rock2, 0.1, 2000);
          $.car_rock2.setCruiseSpeed(30.0);
          $.car_rock2.setDrivingStyle(2);
          $.car_rock2.wanderRandomly();
          $.nutter_doing_stuff_rock1 = 0;
          $.flag_nutter_in_car_rock1 = 1;
        }


      }
      if ($.flag_nutter_in_car_rock1 == 1) {
        if (!(Car.IsDead($.car_rock2))) {
          if ($.car_rock2.isStuckOnRoof() || StuckCarCheck.IsCarStuck($.car_rock2) || $.car_rock2.isOnFire()) {
            $.nutter_rock2.setObjLeaveCar($.car_rock2);
            $.nutter_doing_stuff_rock1 = 0;
          }


        }


      }
      if ($.flag_nutter_in_car_rock1 == 1) {
        if (!($.nutter_rock2.isInAnyCar())) {
          $.car_rock2.removeUpsidedownCheck();
          StuckCarCheck.Remove($.car_rock2);
          $.car_rock2.markAsNoLongerNeeded();
          $.nutter_been_in_car_once_rock2 = 0;
          $.nutter_doing_stuff_rock1 = 0;
          $.flag_nutter_in_car_rock1 = 0;
        }


      }


    }

    // truck driving across player stuff

    if ($.flag_truck1_created_rock2 == 0) {
      if ($.flag_car_coords_rock2 >= 13) {
        $.trashcar1_rock2 = Car.Create(TRASH, $.trashcar1_x_rock2, $.trashcar1_y_rock2, $.trashcar1_z_rock2);
        $.trashcar1_rock2.setHeading(93.0);
        $.flag_truck1_created_rock2 = 1;
      }


    }
    if ($.flag_truck1_created_rock2 == 1) {
      if (!(Car.IsDead($.trashcar1_rock2))) {
        if ($.flag_truck1_moved_rock2 == 0) {
          if ($.flag_car_coords_rock2 >= 13) {
            if ($.player1.isInArea3D(-717.148, 1014.399, 8.0, -655.46, 1172.155, 15.0, false /* FALSE */)) {
              $.trashcar1_rock2.setCruiseSpeed(40.0);
              $.trashcar1_rock2.gotoCoordinates($.trashcar1_goto_x_rock2, $.trashcar1_goto_y_rock2, $.trashcar1_goto_z_rock2);
              $.flag_truck1_moved_rock2 = 1;
            }


          }


        }
        if ($.flag_truck1_moved_rock2 == 1) {
          if (!(Car.IsDead($.trashcar1_rock2))) {
            if ($.trashcar1_rock2.locate3D($.trashcar1_goto_x_rock2, $.trashcar1_goto_y_rock2, $.trashcar1_goto_z_rock2, 2.0, 2.0, 2.0, false /* FALSE */)) {
              $.trashcar1_rock2.setCruiseSpeed(20.0);
              $.trashcar1_rock2.wanderRandomly();
              $.trashcar1_rock2.markAsNoLongerNeeded();
              $.flag_truck1_moved_rock2 = 2;
            }


          }


        }


      }


    }


  }


  $.radar_blip_nutter_rock2.remove();


  // SCM GOTO → mission_rock2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_rock2_passed"); // fallback: would break linear control flow
}


// ****************************************** Mission Failed *******************************


async function mission_rock2_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}


// *************************************** Mission Passed **********************************


async function mission_rock2_passed() {


  $.flag_rock_mission2_passed = 1;
  Stat.RegisterMissionPassed("ROCK_2");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(4000);
  // START_NEW_SCRIPT rock_mission3_loop
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_rock2() {
  if (!(Car.IsDead($.lovefist_limo_rock2))) {
    $.lovefist_limo_rock2.markAsNoLongerNeeded();
  }


  if (!(Char.IsDead($.security1_rock2))) {
    $.security1_rock2.clearAllAnims();
    $.security1_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.security2_rock2))) {
    $.security2_rock2.clearAllAnims();
    $.security2_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie1_rock2))) {
    $.groupie1_rock2.clearAllAnims();
    $.groupie1_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie2_rock2))) {
    $.groupie2_rock2.clearAllAnims();
    $.groupie2_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie3_rock2))) {
    $.groupie3_rock2.clearAllAnims();
    $.groupie3_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie4_rock2))) {
    $.groupie4_rock2.clearAllAnims();
    $.groupie4_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie5_rock2))) {
    $.groupie5_rock2.clearAllAnims();
    $.groupie5_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie6_rock2))) {
    $.groupie6_rock2.clearAllAnims();
    $.groupie6_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie7_rock2))) {
    $.groupie7_rock2.clearAllAnims();
    $.groupie7_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie8_rock2))) {
    $.groupie8_rock2.clearAllAnims();
    $.groupie8_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie9_rock2))) {
    $.groupie9_rock2.clearAllAnims();
    $.groupie9_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie10_rock2))) {
    $.groupie10_rock2.clearAllAnims();
    $.groupie10_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie11_rock2))) {
    $.groupie11_rock2.clearAllAnims();
    $.groupie11_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie12_rock2))) {
    $.groupie12_rock2.clearAllAnims();
    $.groupie12_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie13_rock2))) {
    $.groupie13_rock2.clearAllAnims();
    $.groupie13_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie14_rock2))) {
    $.groupie14_rock2.clearAllAnims();
    $.groupie14_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie15_rock2))) {
    $.groupie15_rock2.clearAllAnims();
    $.groupie15_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie16_rock2))) {
    $.groupie16_rock2.clearAllAnims();
    $.groupie16_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.groupie17_rock2))) {
    $.groupie17_rock2.clearAllAnims();
    $.groupie17_rock2.clearWaitState();
  }


  if (!(Char.IsDead($.nutter_rock2))) {
    $.nutter_rock2.clearAllAnims();
    $.nutter_rock2.clearWaitState();
  }


  Streaming.RemoveAnimation("RIOT");


  $.nutter_rock2.removeElegantly();
  Audio.ClearMissionAudio(1);


  ONMISSION = 0;
  Path.SwitchRoadsOn(-875.10, 1156.89, 8.0, -662.04, 738.48, 20.0);
  $.radar_blip_nutter_rock2.remove();
  $.radar_blip_coord1_rock2.remove();
  $.limo_blip_rock2.remove();
  Streaming.UnloadSpecialCharacter(6);
  Streaming.MarkModelAsNoLongerNeeded(GDa);
  Streaming.MarkModelAsNoLongerNeeded(SENTINEL);
  Streaming.MarkModelAsNoLongerNeeded(TRASH);
  Streaming.MarkModelAsNoLongerNeeded(178 /* UZI */);
  Streaming.MarkModelAsNoLongerNeeded(173 /* COLT45 */);
  Streaming.MarkModelAsNoLongerNeeded(WFYG1);
  Streaming.MarkModelAsNoLongerNeeded(WFYG2);
  Streaming.MarkModelAsNoLongerNeeded(LOVEFIST);
  Streaming.MarkModelAsNoLongerNeeded(WMYCR);
  Streaming.MarkModelAsNoLongerNeeded(BKA);
  Streaming.MarkModelAsNoLongerNeeded(BKB);
  Streaming.MarkModelAsNoLongerNeeded(lf_mediastage);
  $.timer_mobile_start = Clock.GetGameTimer();


  if (!(Car.IsDead($.car_rock2))) {
    $.car_rock2.removeUpsidedownCheck();
    StuckCarCheck.Remove($.car_rock2);
  }


  Mission.Finish();
}



// TELLS THE CAR TO DRIVE


async function car_drive_rock2() {


  if (Car.IsDead($.car_rock2)) {
    if ($.flag_nutter_dead_rock2 == 0) {
      if (Char.IsDead($.nutter_rock2)) {
        $.radar_blip_nutter_rock2.remove();
        $.flag_nutter_dead_rock2 = 1;
      }


    }


  }
  else {
    if ($.flag_car_coords_rock2 == 0) {
      $.car_rock2.setCruiseSpeed(40.0); //40.0
      $.car_rock2.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */); // 2
      $.car_rock2.gotoCoordinates($.car_location1_x_rock2, $.car_location1_y_rock2, $.car_location1_z_rock2);
      $.flag_car_coords_rock2 = 1;
    }
    if ($.flag_car_coords_rock2 == 1) {
      if ($.car_rock2.locate2D($.car_location1_x_rock2, $.car_location1_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location2_x_rock2, $.car_location2_y_rock2, $.car_location2_z_rock2);
        $.flag_car_coords_rock2 = 2;
      }


    }
    if ($.flag_car_coords_rock2 == 2) {
      if ($.car_rock2.locate2D($.car_location2_x_rock2, $.car_location2_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location3_x_rock2, $.car_location3_y_rock2, $.car_location3_z_rock2);
        $.flag_car_coords_rock2 = 3;
      }


    }
    if ($.flag_car_coords_rock2 == 3) {
      if ($.car_rock2.locate2D($.car_location3_x_rock2, $.car_location3_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location4_x_rock2, $.car_location4_y_rock2, $.car_location4_z_rock2);
        $.flag_car_coords_rock2 = 4;
      }


    }
    if ($.flag_car_coords_rock2 == 4) {
      if ($.car_rock2.locate2D($.car_location4_x_rock2, $.car_location4_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location5_x_rock2, $.car_location5_y_rock2, $.car_location5_z_rock2);
        $.flag_car_coords_rock2 = 5;
      }


    }
    if ($.flag_car_coords_rock2 == 5) {
      if ($.car_rock2.locate2D($.car_location5_x_rock2, $.car_location5_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 5);
        $.car_rock2.gotoCoordinates($.car_location6_x_rock2, $.car_location6_y_rock2, $.car_location6_z_rock2);
        $.flag_car_coords_rock2 = 6;
      }


    }
    if ($.flag_car_coords_rock2 == 6) {
      if ($.car_rock2.locate2D($.car_location6_x_rock2, $.car_location6_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location7_x_rock2, $.car_location7_y_rock2, $.car_location7_z_rock2);
        $.flag_car_coords_rock2 = 7;
      }


    }
    if ($.flag_car_coords_rock2 == 7) {
      if ($.car_rock2.locate2D($.car_location7_x_rock2, $.car_location7_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location8_x_rock2, $.car_location8_y_rock2, $.car_location8_z_rock2);
        $.flag_car_coords_rock2 = 8;
      }


    }
    if ($.flag_car_coords_rock2 == 8) {
      if ($.car_rock2.locate2D($.car_location8_x_rock2, $.car_location8_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location9_x_rock2, $.car_location9_y_rock2, $.car_location9_z_rock2);
        $.flag_car_coords_rock2 = 9;
      }


    }

    // Creates the truck obstruction

    if ($.flag_car_coords_rock2 == 9) {
      if ($.car_rock2.locate2D($.car_location9_x_rock2, $.car_location9_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location10_x_rock2, $.car_location10_y_rock2, $.car_location10_z_rock2);
        $.flag_car_coords_rock2 = 10;
      }


    }
    if ($.flag_car_coords_rock2 == 10) {
      if ($.car_rock2.locate2D($.car_location10_x_rock2, $.car_location10_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location11_x_rock2, $.car_location11_y_rock2, $.car_location11_z_rock2);
        $.flag_car_coords_rock2 = 11;
      }


    }
    if ($.flag_car_coords_rock2 == 11) {
      if ($.car_rock2.locate2D($.car_location11_x_rock2, $.car_location11_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location12_x_rock2, $.car_location12_y_rock2, $.car_location12_z_rock2);
        $.flag_car_coords_rock2 = 12;
      }


    }
    if ($.flag_car_coords_rock2 == 12) {
      if ($.car_rock2.locate2D($.car_location12_x_rock2, $.car_location12_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location13_x_rock2, $.car_location13_y_rock2, $.car_location13_z_rock2);
        $.flag_car_coords_rock2 = 13;
      }


    }
    if ($.flag_car_coords_rock2 == 13) {
      if ($.car_rock2.locate2D($.car_location13_x_rock2, $.car_location13_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location14_x_rock2, $.car_location14_y_rock2, $.car_location14_z_rock2);
        $.flag_car_coords_rock2 = 14;
      }


    }
    if ($.flag_car_coords_rock2 == 14) {
      if ($.car_rock2.locate2D($.car_location14_x_rock2, $.car_location14_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location15_x_rock2, $.car_location15_y_rock2, $.car_location15_z_rock2);
        $.flag_car_coords_rock2 = 15;
      }


    }
    if ($.flag_car_coords_rock2 == 15) {
      if ($.car_rock2.locate2D($.car_location15_x_rock2, $.car_location15_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location16_x_rock2, $.car_location16_y_rock2, $.car_location16_z_rock2);
        $.flag_car_coords_rock2 = 16;
      }


    }
    if ($.flag_car_coords_rock2 == 16) {
      if ($.car_rock2.locate2D($.car_location16_x_rock2, $.car_location16_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location17_x_rock2, $.car_location17_y_rock2, $.car_location17_z_rock2);
        $.flag_car_coords_rock2 = 17;
      }


    }
    if ($.flag_car_coords_rock2 == 17) {
      if ($.car_rock2.locate2D($.car_location17_x_rock2, $.car_location17_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.gotoCoordinates($.car_location18_x_rock2, $.car_location18_y_rock2, $.car_location18_z_rock2);
        $.flag_car_coords_rock2 = 18;
      }


    }
    if ($.flag_car_coords_rock2 == 18) {
      if ($.car_rock2.locate2D($.car_location18_x_rock2, $.car_location18_y_rock2, 6.0, 4.0, false /* FALSE */)) {
        $.car_rock2.wanderRandomly();
        $.flag_car_coords_rock2 = 19;
      }


    }


  }
}


// Checks to see if the car is stuck


async function car_stuck_rock2() {


  if (!(Car.IsDead($.car_rock2))) {
    if ($.car_rock2.isUpsidedown()) {
      if (!($.car_rock2.isOnScreen())) {
        const _res462 = $.car_rock2.getCoordinates();
$.car_x_rock2 = _res462.x;
$.car_y_rock2 = _res462.y;
$.car_z_rock2 = _res462.z;
        const _res463 = Path.GetClosestCarNode($.car_x_rock2, $.car_y_rock2, $.car_z_rock2);
$.close_node_x_rock2 = _res463.nodeX;
$.close_node_y_rock2 = _res463.nodeY;
$.close_node_z_rock2 = _res463.nodeZ;
        if (!(World.IsPointObscuredByAMissionEntity($.close_node_x_rock2, $.close_node_y_rock2, $.close_node_z_rock2, 4.0, 4.0, 3.0))) {
          if (!(Camera.IsPointOnScreen($.close_node_x_rock2, $.close_node_y_rock2, $.close_node_z_rock2, 4.0))) {
            $.car_rock2.setCoordinates($.close_node_x_rock2, $.close_node_y_rock2, $.close_node_z_rock2);
            if ($.flag_car_coords_rock2 >= 19) {
              $.car_rock2.setCruiseSpeed(40.0); //40.0
              $.car_rock2.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */); // 2
              $.car_rock2.wanderRandomly();
            }


          }


        }


      }


    }
    if (StuckCarCheck.IsCarStuck($.car_rock2)) {
      if (!($.car_rock2.isOnScreen())) {
        const _res464 = $.car_rock2.getCoordinates();
$.car_x_rock2 = _res464.x;
$.car_y_rock2 = _res464.y;
$.car_z_rock2 = _res464.z;
        const _res465 = Path.GetClosestCarNode($.car_x_rock2, $.car_y_rock2, $.car_z_rock2);
$.close_node_x_rock2 = _res465.nodeX;
$.close_node_y_rock2 = _res465.nodeY;
$.close_node_z_rock2 = _res465.nodeZ;
        if (!(World.IsPointObscuredByAMissionEntity($.close_node_x_rock2, $.close_node_y_rock2, $.close_node_z_rock2, 4.0, 4.0, 3.0))) {
          if (!(Camera.IsPointOnScreen($.close_node_x_rock2, $.close_node_y_rock2, $.close_node_z_rock2, 4.0))) {
            $.car_rock2.setCoordinates($.close_node_x_rock2, $.close_node_y_rock2, $.close_node_z_rock2);
            if ($.flag_car_coords_rock2 >= 19) {
              $.car_rock2.setCruiseSpeed(40.0); //40.0
              $.car_rock2.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */); // 2
              $.car_rock2.wanderRandomly();
            }


          }


        }


      }


    }


  }
}

export async function rock2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************ Rock Mission One ***********************************
  // *************************************** Psycho Hunt *************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME rockb2

  // Mission start stuff


  await mission_start_rock2();  // SCM GOSUB mission_start_rock2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_rock2_failed();  // SCM GOSUB mission_rock2_failed
  }


  await mission_cleanup_rock2();  // SCM GOSUB mission_cleanup_rock2


  // MissionBoundary


  // Variables for mission

  // Nutter


  // VAR_INT nutter_rock2


  // VAR_INT flag_nutter_dead_rock2


  // VAR_INT radar_blip_nutter_rock2


  // VAR_INT flag_nutter_in_local1_rock2

  // nutter car stuff


  // VAR_INT flag_car_coords_rock2


  // VAR_INT car_rock2


  // VAR_FLOAT car_x_rock2


  // VAR_FLOAT car_y_rock2


  // VAR_FLOAT car_z_rock2

  // locations for the car to go to


  // VAR_FLOAT car_location1_x_rock2


  // VAR_FLOAT car_location1_y_rock2


  // VAR_FLOAT car_location1_z_rock2


  // VAR_FLOAT car_location2_x_rock2


  // VAR_FLOAT car_location2_y_rock2


  // VAR_FLOAT car_location2_z_rock2


  // VAR_FLOAT car_location3_x_rock2


  // VAR_FLOAT car_location3_y_rock2


  // VAR_FLOAT car_location3_z_rock2


  // VAR_FLOAT car_location4_x_rock2


  // VAR_FLOAT car_location4_y_rock2


  // VAR_FLOAT car_location4_z_rock2


  // VAR_FLOAT car_location5_x_rock2


  // VAR_FLOAT car_location5_y_rock2


  // VAR_FLOAT car_location5_z_rock2


  // VAR_FLOAT car_location6_x_rock2


  // VAR_FLOAT car_location6_y_rock2


  // VAR_FLOAT car_location6_z_rock2


  // VAR_FLOAT car_location7_x_rock2


  // VAR_FLOAT car_location7_y_rock2


  // VAR_FLOAT car_location7_z_rock2


  // VAR_FLOAT car_location8_x_rock2


  // VAR_FLOAT car_location8_y_rock2


  // VAR_FLOAT car_location8_z_rock2


  // VAR_FLOAT car_location9_x_rock2


  // VAR_FLOAT car_location9_y_rock2


  // VAR_FLOAT car_location9_z_rock2


  // VAR_FLOAT car_location10_x_rock2


  // VAR_FLOAT car_location10_y_rock2


  // VAR_FLOAT car_location10_z_rock2


  // VAR_FLOAT car_location11_x_rock2


  // VAR_FLOAT car_location11_y_rock2


  // VAR_FLOAT car_location11_z_rock2


  // VAR_FLOAT car_location12_x_rock2


  // VAR_FLOAT car_location12_y_rock2


  // VAR_FLOAT car_location12_z_rock2


  // VAR_FLOAT car_location13_x_rock2


  // VAR_FLOAT car_location13_y_rock2


  // VAR_FLOAT car_location13_z_rock2


  // VAR_FLOAT car_location14_x_rock2


  // VAR_FLOAT car_location14_y_rock2


  // VAR_FLOAT car_location14_z_rock2


  // VAR_FLOAT car_location15_x_rock2


  // VAR_FLOAT car_location15_y_rock2


  // VAR_FLOAT car_location15_z_rock2


  // VAR_FLOAT car_location16_x_rock2


  // VAR_FLOAT car_location16_y_rock2


  // VAR_FLOAT car_location16_z_rock2


  // VAR_FLOAT car_location17_x_rock2


  // VAR_FLOAT car_location17_y_rock2


  // VAR_FLOAT car_location17_z_rock2


  // VAR_FLOAT car_location18_x_rock2


  // VAR_FLOAT car_location18_y_rock2


  // VAR_FLOAT car_location18_z_rock2

  // groupie1


  // VAR_INT groupie1_rock2


  // VAR_INT flag_groupie1_dead_rock2


  // VAR_INT flag_groupie1_in_local1_rock2

  // groupie2


  // VAR_INT groupie2_rock2


  // VAR_INT flag_groupie2_dead_rock2


  // VAR_INT flag_groupie2_in_local1_rock2

  // groupie3


  // VAR_INT groupie3_rock2

  // Groupie 4


  // VAR_INT groupie4_rock2

  // Security1


  // VAR_INT security1_rock2

  // Security2


  // VAR_INT security2_rock2

  // Ped locations for when the peds are walking past security


  // VAR_FLOAT ped_location1_x_rock2


  // VAR_FLOAT ped_location1_y_rock2


  // VAR_FLOAT ped_location1_z_rock2


  // VAR_FLOAT ped_location2_x_rock2


  // VAR_FLOAT ped_location2_y_rock2


  // VAR_FLOAT ped_location2_z_rock2

  // Vehicles to cause disruption

  // Trashmaster1


  // VAR_INT trashcar1_rock2


  // VAR_INT flag_truck1_created_rock2


  // VAR_FLOAT trashcar1_x_rock2


  // VAR_FLOAT trashcar1_y_rock2


  // VAR_FLOAT trashcar1_z_rock2

  // Truck pulls out to


  // VAR_INT flag_truck1_moved_rock2


  // VAR_FLOAT trashcar1_goto_x_rock2


  // VAR_FLOAT trashcar1_goto_y_rock2


  // VAR_FLOAT trashcar1_goto_z_rock2

  // Car stuck stuff


  // VAR_FLOAT close_node_x_rock2


  // VAR_FLOAT close_node_y_rock2


  // VAR_FLOAT close_node_z_rock2


  // VAR_INT radar_blip_coord1_rock2

  // Limo stuff


  // VAR_INT lovefist_limo_rock2


  // VAR_INT limo_blip_rock2


  // VAR_INT flag_car_blip_on_rock2


  // VAR_INT flag_player_in_limo_rock2


  // VAR_INT cutscene_over_rock2

  // Extra groupies


  // VAR_INT groupie5_rock2


  // VAR_INT groupie6_rock2


  // VAR_INT groupie7_rock2


  // VAR_INT groupie8_rock2


  // VAR_INT groupie9_rock2


  // VAR_INT groupie10_rock2


  // VAR_INT groupie11_rock2


  // VAR_INT groupie12_rock2


  // VAR_INT groupie13_rock2


  // VAR_INT groupie14_rock2


  // VAR_INT groupie15_rock2


  // VAR_INT groupie16_rock2


  // VAR_INT groupie17_rock2


  // VAR_INT stage_rock2

  // New car driving stuff


  // VAR_INT nutter_doing_stuff_rock1


  // VAR_INT flag_nutter_in_car_rock1


  // VAR_INT nutter_been_in_car_once_rock2

  // ****************************************Mission Start************************************


}
