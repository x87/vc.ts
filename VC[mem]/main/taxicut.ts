// Generated from main/taxicut.sc

import { $ } from "../vars.mts";

async function mission_start_taxi_cut() {


  ONMISSION = 1;
  //skip_flag = 0


  $.taxi_closed.delete();


  // SCRIPT_NAME TAXCUT


  await asyncWait(0);


  Text.LoadMissionText("TAXICUT");


  if (ONMISSION == 0) {
    $.taxibuy_blip = Blip.AddShortRangeSpriteForContactPoint($.taxibuyX, $.taxibuyY, $.taxibuyZ, RADAR_SPRITE_PROPERTY);
  }


  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  $.player1.setControl(false /* OFF */);
  //SET_PLAYER_VISIBLE player1 FALSE

  Streaming.Switch(false /* OFF */);
  //SET_INTRO_IS_PLAYING TRUE

  //SET_DEATHARREST_STATE OFF


  World.SwitchRubbish(false /* OFF */);



  Cutscene.DisableShadows();

  //SET_AREA_VISIBLE VIS_taxi_cut

  Streaming.RequestModel(kaufman);


  while (!(Streaming.HasModelLoaded(kaufman))) {
    await asyncWait(0);


  }


  World.ClearArea(-1001.7, 198.8, 11.4, 4.0, true /* TRUE */);


  kaufman_cab = Car.Create(kaufman, -1001.7, 198.8, 11.3);
  kaufman_cab.setHeading(180.0);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdoris");
  Streaming.LoadSpecialCharacter(3, "cdrivra");
  Streaming.LoadSpecialCharacter(4, "cdrivrb");


  Streaming.LoadAllModelsNow();

  //LOAD_SCENE -1001.1 202.1 11.4


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);


  }


  Cutscene.Load("tax_1");
  Cutscene.SetOffset(-1002.4, 202.0, 10.4);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  cs_disp = CutsceneObject.Create(SPECIAL02);
  cs_disp.setAnim("CSdoris");


  cs_cdrivra = CutsceneObject.Create(SPECIAL03);
  cs_cdrivra.setAnim("cdrivra");


  cs_cdrivrb = CutsceneObject.Create(SPECIAL04);
  cs_cdrivrb.setAnim("cdrivrb");


  World.ClearArea(-999.1, 193.0, 10.4, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-999.1, 193.0, 10.4);
  $.player1.setHeading(80.0);


  await asyncWait(700);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();



  while ($.cs_time < 10228) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_A", 10000, 1); // Mission brief


  while ($.cs_time < 11538) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_B", 10000, 1); // Mission brief


  while ($.cs_time < 15232) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_C", 10000, 1); // Mission brief


  while ($.cs_time < 19887) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_D", 10000, 1); // Mission brief


  while ($.cs_time < 22198) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_E", 10000, 1); // Mission brief


  while ($.cs_time < 27570) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_F", 10000, 1); // Mission brief


  while ($.cs_time < 30477) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_G", 10000, 1); // Mission brief


  while ($.cs_time < 33933) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_H", 10000, 1); // Mission brief


  while ($.cs_time < 36327) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_I", 10000, 1); // Mission brief


  while ($.cs_time < 38262) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_J", 10000, 1); // Mission brief


  while ($.cs_time < 43042) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_K", 10000, 1); // Mission brief


  while ($.cs_time < 45254) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_L", 10000, 1); // Mission brief


  while ($.cs_time < 46583) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_M", 10000, 1); // Mission brief


  while ($.cs_time < 48993) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_N", 10000, 1); // Mission brief


  while ($.cs_time < 51083) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_O", 10000, 1); // Mission brief


  while ($.cs_time < 52858) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_P", 10000, 1); // Mission brief


  while ($.cs_time < 55674) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_Q", 10000, 1); // Mission brief


  while ($.cs_time < 57991) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_R", 10000, 1); // Mission brief


  while ($.cs_time < 59837) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_S", 10000, 1); // Mission brief


  while ($.cs_time < 62496) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_T", 10000, 1); // Mission brief


  while ($.cs_time < 64179) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_U", 10000, 1); // Mission brief


  while ($.cs_time < 65671) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_V", 10000, 1); // Mission brief


  while ($.cs_time < 68752) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_W", 10000, 1); // Mission brief


  while ($.cs_time < 70262) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_X", 10000, 1); // Mission brief


  while ($.cs_time < 71555) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_Y", 10000, 1); // Mission brief


  while ($.cs_time < 73865) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_Z", 10000, 1); // Mission brief


  while ($.cs_time < 76173) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TAXC_A1", 10000, 1); // Mission brief


  while ($.cs_time < 77173) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  while ($.cs_time < 81852) {
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
  //SET_AREA_VISIBLE VIS_MAIN_MAP

  Streaming.LoadScene(-999.1, 193.0, 10.4);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.MarkModelAsNoLongerNeeded(kaufman);


  $.flag_taxicut_mission1_passed = 1;



  await asyncWait(1000);


  Hud.SwitchWidescreen(true /* ON */);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.player1.setControl(false /* OFF */);
  Streaming.LoadScene(-1017.904, 207.165, 15.090);
  Camera.SetFixedPosition(-1018.540, 207.931, 15.185, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1017.904, 207.165, 15.090, 2 /* JUMP_CUT */);
  Audio.PlayMissionPassedTune(1);


  Text.PrintWithNumberBig("TAXIBUY", $.taxibuy_price, 7000, 6); //
  Stat.AddMoneySpentOnProperty($.taxibuy_price);
  Stat.SetPropertyAsOwned(PROP_TAXICO);


  await asyncWait(7000);


  ONMISSION = 0;


  $.timer_mobile_start = Clock.GetGameTimer();


  $.taxibuy_blip.remove();
  $.taxiwar_contact_blip.remove();
  $.taxiwar_contact_blip = Blip.AddSpriteForContactPoint($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);


  // START_NEW_SCRIPT taxiwar_save_loop
  Stat.PlayerMadeProgress(1);
  Camera.RestoreJumpcut();


  Zone.SetPedInfo("KAUFCAB", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Zone.SetPedInfo("KAUFCAB", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Path.SwitchPedRoadsOn(-1012.06, 181.561, 0.0, -982.06, 216.561, 30.0); //TAXIFIRM


  Mission.Finish();
  // MissionBoundary
}

export async function taxicut() {
  // MissionBoundary
  // *****************************************************************************************
  // *******************************   taxi_cut phone call cut scene    *************************
  // *****************************************************************************************

  // ****************************************Mission Start************************************





  // LVAR_INT cs_disp cs_cdrivra cs_cdrivrb kaufman_cab


}
