// Generated from main/buypro1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_buypro1() {


  // SCRIPT_NAME buypro1


  ONMISSION = 1;


  await asyncWait(0);



  $.counter_contact_blip.remove();
  $.print_works_blip.remove();
  Stat.PlayerMadeProgress(1);
  Zone.SetPedInfo("PRINTWK", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Zone.SetPedInfo("PRINTWK", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Path.SwitchPedRoadsOn(-1176.038, -266.898, 0.0, -1012.796, -158.26, 30.0); //PRINTWORKS


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
      // START_NEW_SCRIPT counter_mission1_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  World.ClearArea(-1059.8411, -278.7214, 10.4044, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1059.8411, -278.7214, 10.4044);
  $.player1.setHeading(90.0);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(-1027.3385, -281.6154, 16.3511, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1028.1625, -281.0542, 16.2730, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
      // START_NEW_SCRIPT counter_mission1_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  Text.PrintWithNumberBig("CNTBUY1", $.printworks_price, 4000, 6); //"Printworks purchased: $ 15000"
  Stat.AddMoneySpentOnProperty($.printworks_price);
  Stat.SetPropertyAsOwned(1 /* PROP_PRINTWORKS */);


  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(4000);


  if (!($.player1.isPlaying())) {
    Audio.SetMusicDoesFade(true /* TRUE */);
    $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
    // START_NEW_SCRIPT counter_mission1_loop 
    return; // TERMINATE_THIS_SCRIPT
  }


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      Audio.SetMusicDoesFade(true /* TRUE */);
      $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
      // START_NEW_SCRIPT counter_mission1_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  Hud.SwitchWidescreen(false /* OFF */);


  $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);


  // START_NEW_SCRIPT counter_mission1_loop 


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


  // START_NEW_SCRIPT printers_save_loop 


  ONMISSION = 0;


  Mission.Finish();
  // MissionBoundary
}

export async function buypro1() {
  // MissionBoundary



}
