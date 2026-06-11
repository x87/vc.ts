// Generated from main/icecut.sc

import { $ } from "../utils/vars.mts";

async function mission_start_icecut() {


  // SCRIPT_NAME ICECUT


  ONMISSION = 1;

  //skip_flag = 0


  await asyncWait(0);


  Text.LoadMissionText("icecut");





  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  $.player1.setControl(false /* OFF */);
  //SET_PLAYER_VISIBLE player1 FALSE

  Streaming.Switch(false /* OFF */);
  World.SwitchRubbish(false /* OFF */);


  // VAR_INT cs_maude
  // VAR_INT mcane
  // VAR_INT icecut_van1
  //VAR_INT icecut_van2



  //SET_AREA_VISIBLE VIS_icecut


  Audio.LoadMissionAudio(1, "mono_5" as any);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSMaude");
  Streaming.LoadSpecialModel(CUTOBJ01, "mcane");



  Streaming.LoadAllModelsNow();


  Streaming.LoadScene(-873.5121, -574.0815, 10.1528);


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(mrwhoop);


  while (!(Streaming.HasModelLoaded(mrwhoop))) {
    await asyncWait(0);
  }


  $.icecut_van1 = Car.Create(mrwhoop, -877.8974, -562.5469, 10.2353);
  $.icecut_van1.setHeading(184.4191);
  //CREATE_CAR mrwhoop -873.898438 -562.5469 10.2353 icecut_van2
  //SET_CAR_HEADING icecut_van2 184.4191


  Cutscene.Load("ice_1");
  Cutscene.SetOffset(-873.5121, -574.0815, 10.1528);
  //SET_NEAR_CLIP 0.1


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_maude = CutsceneObject.Create(SPECIAL02);
  $.cs_maude.setAnim("CSMaude");


  $.mcane = CutsceneObject.Create(CUTOBJ01);
  $.mcane.attachToBone($.cs_maude, 34 /* BONE_L_HAND */);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 6929) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_A", 10000, 1); // Who are you?



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 8306) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_B", 10000, 1); // Your new owner.



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 10381) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_C", 10000, 1); // Were you, now, or at any time, a child?



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 13633) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_D", 10000, 1); // What are you talking about?



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 14189) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_E", 10000, 1); // Were you a child?



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 15441) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_F", 10000, 1); // Yes! Calm down, what's wrong with you?



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 16881) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_G", 10000, 1); // I knew it. A child.



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 20281) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_H", 10000, 1); //  A dirty, stinking, sniveling, snotting, vile, puking, crying little baby!



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 25045) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_I", 10000, 1); //  A baby.. an awful, horrible, disgusting little baby! Boo hoo.



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 29698) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_J", 10000, 1); //  Mumma doesn't love you.You little shit!



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 32513) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_K", 10000, 1); //  Ow! Calm down.



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 35215) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_L", 10000, 1); //  Argh, I HATE babies, and I hate children.



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 38544) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_M", 10000, 1); //  They're dirty, sniveling, snotting, puking little..



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 40042) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_N", 10000, 1); //  Enough! Alreadyt?



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 41685) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_O", 10000, 1); //  What is wrong with you??



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 43879) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_P", 10000, 1); //  You make soft ice cream, okay? It's purely for kids.



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 48927) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_Q", 10000, 1); //  What kind of psycho are you?



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 51501) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_R", 10000, 1); //  Just so I understand this, why make children happy if you hate them?



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 55814) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_S", 10000, 1); //  Oh, you stupid, snivelling, snotty



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 59535) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_T", 10000, 1); //  Shut up!



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 60379) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_U", 10000, 1); //  -Brat!



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 62496) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_V", 10000, 1); //  The ice cream is a front.



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 64801) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_W", 10000, 1); //  We distribute other, non-dairy products



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 68699) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_X", 10000, 1); //  And if I see a kid, I put him to good use.



  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 72778) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_Y", 10000, 1); //  Don't I kiddies? Yes, yes I do. Mummy doesn't love you.


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 78390) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("ICC1_Z", 10000, 1); //  She HATES you!


  while ($.cs_time < 81000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  World.SwitchRubbish(true /* ON */);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  await asyncWait(1000);


  if (!(Cutscene.WasSkipped())) {
    if (Audio.HasMissionAudioLoaded(1)) {
      Audio.PlayMissionAudio(1);
    }
  }



  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }




  World.SwitchRubbish(true /* ON */);


  Streaming.LoadScene(-839.512, -582.021, 24.777);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);


  $.icecut_van1.markAsNoLongerNeeded();
  //MARK_CAR_AS_NO_LONGER_NEEDED icecut_van2

  $.icecut_van1.delete();
  //DELETE_CAR icecut_van2


  $.flag_icecut_mission1_passed = 1;



  //REGISTER_MISSION_PASSED ICEBUY


  Stat.AddMoneySpentOnProperty($.icebuy_price);
  $.gen_car12.switch(101);


  $.icebuy_blip.remove();
  $.icebuy_blip = Blip.AddShortRangeSpriteForContactPoint(-878.5, -575.1, 11.2, 21 /* RADAR_SPRITE_ICE */);
  $.icebuy_blip.changeDisplay(2 /* BLIP_ONLY */);
  Zone.SetPedInfo("ICCREAM", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Zone.SetPedInfo("ICCREAM", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Path.SwitchPedRoadsOn(-896.098, -593.101, 0.0, -855.09, -548.64, 30.0); //ICECREAM


  Stat.SetPropertyAsOwned(3 /* PROP_ICECREAM */);




  // START_NEW_SCRIPT icecream_save_loop 




  await asyncWait(1000);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.ice_door.slide(-866.689, -572.095, 15.573, 0.0, 0.0, 4.5, false /* FALSE */);


  World.ClearArea(-874.324, -565.683, 11.194, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-874.324, -565.683, 11.194);
  $.player1.setHeading(183.398);



  $.ice_door.markAsNoLongerNeeded();
  Camera.SetFixedPosition(-839.512, -582.021, 24.777, 0.0, 0.0, 0.0); //ROTATE UP
  Camera.PointAtPoint(-840.451, -581.759, 24.553, 2 /* JUMP_CUT */);
  Audio.PlayMissionPassedTune(1);


  Text.PrintWithNumberBig("ICEBUY", $.icebuy_price, 7000, 6); //purchased text
  await asyncWait(7000);



  ONMISSION = 0;


  Stat.PlayerMadeProgress(1);
  Cutscene.Clear();
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();


  Mission.Finish();
  // MissionBoundary
}

export async function icecut() {
  // MissionBoundary
  // *****************************************************************************************
  // *******************************   icecut phone call cut scene    *************************
  // *****************************************************************************************

  // ****************************************Mission Start************************************


}
