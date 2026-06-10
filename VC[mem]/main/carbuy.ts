// Generated from main/carbuy.sc

import { $ } from "../vars.mts";

async function mission_start_carbuy() {


  ONMISSION = 1;


  // SCRIPT_NAME carbuy1


  await asyncWait(0);


  Text.LoadMissionText("CARBUY");

  //////////////////////////
  //////////////////////////

  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "csbj");
  Streaming.LoadSpecialModel(CUTOBJ01, "hlrycar");
  Streaming.RequestModel(SENTINEL);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(SENTINEL))) {
    await asyncWait(0);
  }


  // VAR_INT showroom_car1
  $.showroom_car1 = Car.Create(SENTINEL, -1033.2114, -856.8564, 12.0452);
  $.showroom_car1.setHeading(210.2780);
  Streaming.MarkModelAsNoLongerNeeded(SENTINEL);


  Cutscene.Load("CAR_1");
  Cutscene.SetOffset(-1018.647, -877.935, 12.045);


  $.csplay = CutsceneObject.Create(SPECIAL01);
  $.csplay.setAnim("csplay");


  $.csbj = CutsceneObject.Create(SPECIAL02);
  $.csbj.setAnim("csbj");


  $.cs_htable = CutsceneObject.Create(CUTOBJ01);
  $.cs_htable.setAnim("hlrycar");


  World.ClearArea(-1007.3034, -869.9353, 11.8668, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1007.3034, -869.9353, 11.8668);
  $.player1.setHeading(30.0);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();



  while ($.cs_time < 976) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_1", 10000, 1); //B.J. Smith. And you must be Mr. Vercetti.


  while ($.cs_time < 4506) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_2", 10000, 1); //Would you like the tour?


  while ($.cs_time < 6299) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_3", 10000, 1); //Might as well.


  while ($.cs_time < 7695) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_4", 10000, 1); //Well, I'm very sad to be selling the car to y'all.


  while ($.cs_time < 10390) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_5", 10000, 1); //This was my first investment after I turned pro.


  while ($.cs_time < 13170) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_6", 10000, 1); //But now it's time for me to move on.


  while ($.cs_time < 14855) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_7", 10000, 1); //You're leaving town?


  while ($.cs_time < 16114) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_8", 10000, 1); //Not in too much of a hurry, I hope?


  while ($.cs_time < 18118) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_9", 10000, 1); //No. I'm just coming out of retirement, and preparing my future comeback.


  while ($.cs_time < 22505) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_10", 10000, 1); //The business wasn't too strong,


  while ($.cs_time < 23989) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_11", 10000, 1); //and my staff took it upon themselves to get a little bit more


  while ($.cs_time < 26958) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_12", 10000, 1); //creative with the generation of wealth.


  while ($.cs_time < 35538) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_13", 10000, 1); //Obviously, I could wind down the business before I hand it over.


  while ($.cs_time < 39241) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_14", 10000, 1); //Hell, I could burn the place down if you wanted to.


  while ($.cs_time < 43374) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_15", 10000, 1); //This is prime development land.


  while ($.cs_time < 45142) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_16", 10000, 1); //Oh, I wouldn't worry about any of that.


  while ($.cs_time < 48422) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_17", 10000, 1); //This place seems prefect.


  while ($.cs_time < 50000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAR1_18", 10000, 1); //Yeh it does, So I take it we have a deal?


  while ($.cs_time < 53504) {
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


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);

  //////////////////////////
  //////////////////////////

  await asyncWait(0);
  await asyncWait(0);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);


  Camera.SetFixedPosition(-1017.0237, -922.2878, 19.0987, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1017.0441, -921.3013, 18.9361, 2 /* JUMP_CUT */);
  Camera.SetGenerateCarsAround(true /* TRUE */);
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("CARBUY", $.carbuy_price, 7000, 6); //
  Stat.AddMoneySpentOnProperty($.carbuy_price);
  Stat.SetPropertyAsOwned(PROP_CARSHOWROOM);
  $.carbuy_save_garage1.changeType(27 /* GARAGE_HIDEOUT_SEVEN */);
  $.carbuy_save_garage2.changeType(28 /* GARAGE_HIDEOUT_EIGHT */);
  $.carbuy_save_garage3.changeType(29 /* GARAGE_HIDEOUT_NINE */);
  $.carbuy_save_garage4.changeType(30 /* GARAGE_HIDEOUT_TEN */);


  await asyncWait(5000);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  // VAR_INT races_blip
  $.races_blip = Blip.AddForContactPoint(-967.7050, -827.3005, 5.7702);
  $.races_blip.changeDisplay(1 /* MARKER_ONLY */);

  //flag_carbuy_passed = 1

  Stat.PlayerMadeProgress(1);
  //CLEAR_WANTED_LEVEL player1
  //PRINT_WITH_NUMBER_BIG M_PASS 1000 5000 1 //"Mission Passed!"
  //ADD_SCORE player1 1000

  $.timer_mobile_start = Clock.GetGameTimer();


  $.carbuy_blip.remove();
  $.carbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.carbuyX, $.carbuyY, $.carbuyZ, RADAR_SPRITE_SUNYARD);
  $.carbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  $.import_export_sign1 = ScriptObject.CreateNoOffset(lh_imp_exp01, -981.754, -841.278, 8.586);
  $.import_export_sign1.dontRemove();
  Zone.SetPedInfo("CARYRD", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Zone.SetPedInfo("CARYRD", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Path.SwitchPedRoadsOn(-1031.494, -902.312, 0.0, -949.479, -821.592, 30.0); //CAR YARD
  // START_NEW_SCRIPT races_loop
  // START_NEW_SCRIPT carshow_save_loop
  // START_NEW_SCRIPT import1_loop
  $.collect_all_cars1.changeType(8 /* GARAGE_COLLECTCARS_1 */);
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Camera.SetGenerateCarsAround(false /* FALSE */);
  Camera.RestoreJumpcut();
  ONMISSION = 0;
  Mission.Finish();
  // MissionBoundary


}

export async function carbuy() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // ****************************** Car Showroom Buy Script **********************************
  // *****************************************************************************************
  // *****************************************************************************************

  // Mission start stuff



  // Variables for mission

  //CARS PEDS OBJECTS PICKUPS

  // VAR_INT csbj csplay
  //FLAGS COUNTERS TIMERS
  //BLIPS
  //COORDS MATHS
  //VAR_FLOAT

  // ******************************* Mission Start *******************************************


}
