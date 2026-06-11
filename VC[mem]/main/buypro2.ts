// Generated from main/buypro2.sc

import { $ } from "../utils/vars.mts";

async function mission_start_buypro2() {


  // SCRIPT_NAME buypro2


  ONMISSION = 1;


  await asyncWait(0);



  $.porn_contact_blip.remove();
  $.pornbuy_blip.remove();
  Stat.PlayerMadeProgress(1);
  Zone.SetPedInfo("PORNSTU", 1 /* DAY */, 4, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Zone.SetPedInfo("PORNSTU", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);
  Path.SwitchPedRoadsOn(-112.495, 920.349, 0.0, 9.705, 1025.694, 30.0); //PORNSTUDIO


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
      // START_NEW_SCRIPT porn_mission1_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  $.porn_north_gate_closed.delete();
  $.porn_south_gate_closed.delete();

  //north gate

  $.porn_north_gate_open = ScriptObject.CreateNoOffset(ci_gatesopen, 10.273, 963.308, 12.258);
  $.porn_north_gate_open.dontRemove();

  //south gate

  $.porn_south_gate_open = ScriptObject.CreateNoOffset(ci_backgateopen, -14.381, 884.12, 13.542);
  $.porn_south_gate_open.dontRemove();


  $.jetty_door_closed.delete();
  $.jetty_door_open = ScriptObject.CreateNoOffset(ci_jetygatesopen, -115.825, 1028.55, 11.334);
  $.jetty_door_open.dontRemove();


  World.ClearArea(10.1629, 963.4605, 9.8996, 1.0, true /* TRUE */);
  $.player1.setCoordinates(10.1629, 963.4605, 9.8996);
  $.player1.setHeading(84.6334);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(75.8516, 976.8268, 41.9825, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(74.8664, 976.7122, 41.8550, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
      // START_NEW_SCRIPT porn_mission1_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }


  Text.PrintWithNumberBig("PORNBUY", $.pornbuy_price, 5000, 6); //"Film Studio purchased: $ 15000"
  Stat.AddMoneySpentOnProperty($.pornbuy_price);
  Stat.SetPropertyAsOwned(2 /* PROP_FILMSTUDIO */);
  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  await asyncWait(4000);


  if (!($.player1.isPlaying())) {
    Audio.SetMusicDoesFade(true /* TRUE */);
    $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
    // START_NEW_SCRIPT porn_mission1_loop 
    return; // TERMINATE_THIS_SCRIPT
  }


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      Audio.SetMusicDoesFade(true /* TRUE */);
      $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
      // START_NEW_SCRIPT porn_mission1_loop 
      return; // TERMINATE_THIS_SCRIPT
    }
  }



  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  Hud.SwitchWidescreen(false /* OFF */);


  $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);


  // START_NEW_SCRIPT porn_mission1_loop 


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


  // START_NEW_SCRIPT porn_save_loop 


  ONMISSION = 0;


  Mission.Finish();
  // MissionBoundary
}

export async function buypro2() {
  // MissionBoundary



}
