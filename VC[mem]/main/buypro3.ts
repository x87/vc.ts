// Generated from main/buypro3.sc

import { $ } from "../utils/vars.mts";

async function mission_start_buypro3() {


  // SCRIPT_NAME buypro3


  ONMISSION = 1;


  await asyncWait(0);



  $.bankjob_contact_blip.remove();
  $.bankbuy_blip.remove();
  Stat.PlayerMadeProgress(1);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
      // START_NEW_SCRIPT bankjob_mission1_loop 
      $.flag_bought_malibu = 1;
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  World.ClearArea(495.6510, -84.2263, 8.9929, 1.0, true /* TRUE */);
  $.player1.setCoordinates(495.6510, -84.2263, 8.9929);
  $.player1.setHeading(47.6086);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(505.4001, -107.8699, 12.9888, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(504.9025, -107.0028, 12.9664, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
      // START_NEW_SCRIPT bankjob_mission1_loop 
      $.flag_bought_malibu = 1;
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  Text.PrintWithNumberBig("BANKBUY", $.bankbuy_price, 5000, 6); //"The Malibu purchased: $ 15000"
  Stat.AddMoneySpentOnProperty($.bankbuy_price);
  Stat.SetPropertyAsOwned(0 /* PROP_MALIBU */);
  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(4000);


  if (!($.player1.isPlaying())) {
    Audio.SetMusicDoesFade(true /* TRUE */);
    $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
    // START_NEW_SCRIPT bankjob_mission1_loop 
    $.flag_bought_malibu = 1;
    return; // TERMINATE_THIS_SCRIPT
  }


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      Audio.SetMusicDoesFade(true /* TRUE */);
      $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
      // START_NEW_SCRIPT bankjob_mission1_loop 
      $.flag_bought_malibu = 1;
      return; // TERMINATE_THIS_SCRIPT
    }
  }



  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  Hud.SwitchWidescreen(false /* OFF */);


  $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);


  // START_NEW_SCRIPT bankjob_mission1_loop 


  $.flag_bought_malibu = 1;


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      Audio.SetMusicDoesFade(true /* TRUE */);
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  Audio.SetMusicDoesFade(true /* TRUE */);


  // START_NEW_SCRIPT malibu_save_loop 


  ONMISSION = 0;


  Mission.Finish();
  // MissionBoundary
}

export async function buypro3() {
  // MissionBoundary



}
