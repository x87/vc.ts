// Generated from main/boatbuy.sc

import { $ } from "../vars.mts";

export async function boatbuy() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // ****************************** boat yard Buy Script *************************************
  // *****************************************************************************************
  // *****************************************************************************************




  // LVAR_INT cutscene_boat csdwayn csjetro boatbuy_boat1 boatbuy_boat2


  ONMISSION = 1;
  // SCRIPT_NAME BOATBY


  await asyncWait(0);


  $.boat_closed.delete();


  Text.LoadMissionText("BOATBUY");


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "csdwayn");
  Streaming.LoadSpecialCharacter(3, "csjetro");


  cutscene_boat = ScriptObject.CreateNoOffset(dk_reef, -651.0, -1481.21, 16.647);
  cutscene_boat.dontRemove();


  if (ONMISSION == 0) {
    $.boatbuy_blip = Blip.AddShortRangeSpriteForCoord(-664.1, -1476.3, 13.8, RADAR_SPRITE_LAWYER);
  }
  await asyncWait(0);


  Streaming.LoadScene(-649.7202, -1482.0997, 14.9076); //-640.3344 -1488.8250 14.2185


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);


  }


  Cutscene.LoadUncompressedAnim("csplay");
  Cutscene.LoadUncompressedAnim("csdwayn");
  Cutscene.LoadUncompressedAnim("csjetro");
  Cutscene.Load("drug_1");
  Cutscene.SetOffset(-690.0, -1568.0, 11.4);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  csdwayn = CutsceneObject.Create(SPECIAL02);
  csdwayn.setAnim("csdwayn");


  csjetro = CutsceneObject.Create(SPECIAL03);
  csjetro.setAnim("csjetro");


  World.ClearArea(-633.2, -1488.8, 12.7, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-633.2, -1488.8, 12.7);
  $.player1.setHeading(250.0);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 142) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("DRUG_1", 10000, 1); //Hello? Hel-lo?!


  while ($.cs_time < 9838) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_2", 10000, 1); //Put it out. There's a dude here.


  while ($.cs_time < 12335) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_3", 10000, 1); //Hey suit dude! I guess you're the new owner?


  while ($.cs_time < 14831) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_4", 10000, 1); //Yeah. Which one of the boats is the fastest?


  while ($.cs_time < 17624) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_5", 10000, 1); //It's already in the water, dude,


  while ($.cs_time < 19626) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_6", 10000, 1); //I though you might want to try her out.


  while ($.cs_time < 21916) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_7", 10000, 1); //Dude, she's already running with a 300 horse power engine...


  while ($.cs_time < 24845) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_8", 10000, 1); //...and the fiberglass hull, she just shoots through the waves.!


  while ($.cs_time < 29051) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_9", 10000, 1); //She can do like zero to sixty in four seconds...


  while ($.cs_time < 33053) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_10", 10000, 1); //She can hold like twenty bails of the best Jamaican smoke right in the hull!


  while ($.cs_time < 37627) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_11", 10000, 1); //So go ahead dude, she's ready to fly!


  while ($.cs_time < 40309) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_12", 10000, 1); //Yo, suit dude, you gotta light?


  while ($.cs_time < 44071) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("DRUG_13", 10000, 1); //Dude? Dude!


  while ($.cs_time < 45000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


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
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);


  Streaming.RequestModel(JETMAX);
  Streaming.RequestModel(SQUALO);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(JETMAX)) || !(Streaming.HasModelLoaded(SQUALO))) {
    await asyncWait(0);
  }


  boatbuy_boat1 = Car.Create(JETMAX, -586.6, -1512.2, 5.0);
  boatbuy_boat1.setHeading(253.0);


  boatbuy_boat2 = Car.Create(SQUALO, -581.2, -1503.2, 5.0);
  boatbuy_boat2.setHeading(250.0);


  await asyncWait(0);
  await asyncWait(0);
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Streaming.LoadScene(-565.647, -1506.333, 8.906);
  Camera.SetFixedPosition(-564.650, -1506.310, 8.990, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-565.647, -1506.333, 8.906, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Audio.PlayMissionPassedTune(1);


  Text.PrintWithNumberBig("BOATBUY", $.boatbuy_price, 7000, 6); //
  Stat.AddMoneySpentOnProperty($.boatbuy_price);
  Stat.SetPropertyAsOwned(PROP_BOATYARD);


  await asyncWait(7000);


  $.timer_mobile_start = Clock.GetGameTimer();


  Stat.PlayerMadeProgress(1);


  $.gen_car153.switch(101);
  $.gen_car154.switch(101);


  $.boatbuy_blip.remove();
  $.boatbuy_blip = Blip.AddShortRangeSpriteForContactPoint(-664.1, -1476.3, 13.8, RADAR_SPRITE_BOATYARD);
  $.boatbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  //ADD_SHORT_RANGE_SPRITE_BLIP_FOR_COORD -664.1 -1476.3 13.8 RADAR_SPRITE_HOUSEG boatbuy_blip

  Zone.SetPedInfo("BOATYRD", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Zone.SetPedInfo("BOATYRD", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Path.SwitchPedRoadsOn(-692.193, -1522.901, 0.0, -575.311, -1453.378, 30.0); //BOAT YARD
  // START_NEW_SCRIPT boatbuy_save_loop
  // START_NEW_SCRIPT boatyard_oddjob_loop


  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();


  await asyncWait(0);


  Streaming.MarkModelAsNoLongerNeeded(jetmax);
  Streaming.MarkModelAsNoLongerNeeded(squalo);
  ONMISSION = 0;



  Mission.Finish();
  // MissionBoundary



}
