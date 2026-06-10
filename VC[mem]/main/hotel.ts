// Generated from main/hotel.sc

import { $ } from "../vars.mts";

async function mission_start_hotel() {


  ONMISSION = 1;


  // SCRIPT_NAME hotel


  await asyncWait(0);


  Text.LoadMissionText("HOTEL");





  World.SetExtraColors(16, false /* FALSE */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  $.player1.setControl(false /* OFF */);
  $.player1.setVisible(false /* FALSE */);
  Streaming.Switch(false /* OFF */);


  World.SwitchRubbish(false /* OFF */);


  Streaming.SetAreaVisible(VIS_HOTEL);
  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_mobroom2, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_detailsb, true /* TRUE */);



  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSsonny");
  Streaming.LoadSpecialModel(CUTOBJ01, "plyphon");
  Streaming.LoadSpecialModel(CUTOBJ02, "colphon");
  Streaming.LoadSpecialModel(CUTOBJ03, "mbtbful");
  Streaming.LoadSpecialModel(CUTOBJ04, "schair");


  Streaming.LoadAllModelsNow();


  Streaming.LoadScene(231.4, -1277.7, 19.0);


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03)) || !(Streaming.HasModelLoaded(CUTOBJ04))) {
    await asyncWait(0);


  }


  Cutscene.Load("int_b");
  Cutscene.SetOffset(231.411, -1277.707, 19.069);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_sonny = CutsceneObject.Create(SPECIAL02);
  $.cs_sonny.setAnim("CSsonny");


  $.cs_phnplay = CutsceneObject.Create(CUTOBJ01);
  $.cs_phnplay.setAnim("plyphon");


  $.cs_phoncol = CutsceneObject.Create(CUTOBJ02);
  $.cs_phoncol.setAnim("colphon");


  $.cs_mobtable = CutsceneObject.Create(CUTOBJ03);
  $.cs_mobtable.setAnim("mbtbful");


  $.cs_schair = CutsceneObject.Create(CUTOBJ04);
  $.cs_schair.setAnim("schair");


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 6133) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_B", 10000, 1); // Mission brief


  while ($.cs_time < 7184) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_A", 10000, 1); // Mission brief


  while ($.cs_time < 13174) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_C", 10000, 1); // Mission brief


  while ($.cs_time < 15932) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_D", 10000, 1); // Mission brief


  while ($.cs_time < 19096) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_E", 10000, 1); // Mission brief


  while ($.cs_time < 20800) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_F", 10000, 1); // Mission brief


  while ($.cs_time < 23076) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_G", 10000, 1); // Mission brief


  while ($.cs_time < 25352) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_H", 10000, 1); // Mission brief


  while ($.cs_time < 29045) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_I", 10000, 1); // Mission brief


  while ($.cs_time < 32884) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_J", 10000, 1); // Mission brief


  while ($.cs_time < 36816) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_K", 10000, 1); // Mission brief


  while ($.cs_time < 39960) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_L", 10000, 1); // Mission brief


  while ($.cs_time < 46333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_M", 10000, 1); // Mission brief


  while ($.cs_time < 49904) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_N", 10000, 1); // Mission brief


  while ($.cs_time < 51480) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_O", 10000, 1); // Mission brief


  while ($.cs_time < 54960) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_P", 10000, 1); // Mission brief


  while ($.cs_time < 56800) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_Q", 10000, 1); // Mission brief


  while ($.cs_time < 61668) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_R", 10000, 1); // Mission brief


  while ($.cs_time < 64584) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_S", 10000, 1); // Mission brief


  while ($.cs_time < 69612) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_T", 10000, 1); // Mission brief


  while ($.cs_time < 72104) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("INTB_U", 10000, 1); // Mission brief


  while ($.cs_time < 75104) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 77104) {
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
  Streaming.LoadScene(237.8, -1279.9, 10.0);
  Stat.PlayerMadeProgress(1);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);


  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_mobroom2, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_detailsb, false /* FALSE */);


  $.goto_hotel_contact_blip.remove();
  $.lawyer_contact_blip.remove();
  $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);


  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("LAW1");
  // START_NEW_SCRIPT lawyer_mission1_loop
  Clock.SetTimeOfDay(8, 0);
  Weather.ForceNow(0 /* WEATHER_SUNNY */);
  $.player1.setControl(false /* OFF */);


  await asyncWait(1000);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.player1.setCoordinates(223.1, -1276.7, 11.0);
  $.player1.setHeading(258.0);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  $.scplayer.setObjNoObj();


  ONMISSION = 0;
  $.flag_hotel_mission1_passed = 1;


  Weather.Release();
  World.ClearExtraColors(false /* FALSE */);


  Mission.Finish();
  // MissionBoundary
}

export async function hotel() {
  // MissionBoundary
  // *****************************************************************************************
  // *******************************   Hotel phone call cut scene    *************************
  // *****************************************************************************************

  // ****************************************Mission Start************************************


}
