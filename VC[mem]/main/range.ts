// Generated from main/range.sc

import { $ } from "../vars.mts";
import { timed } from "../scm.mts";

async function mission_start_range() {


  ONMISSION = 1;


  if ($.player_had_reload_award == 0) {
    Stat.RegisterMissionGiven();
  }

  // General stuff


  $.total_ammo_used_bankjob2 = 0;


  $.ammo_used_round1_bankjob2 = 0;


  $.final_ammo_used_bankjob2 = 0;


  $.percentage_hits_bankjob2 = 0;


  $.score_to_beat_bankjob2 = 30;


  $.player_score_bankjob2 = 0;


  $.ammo_given_round1_bankjob2 = 0;


  $.bits_hit_bank2 = 0;

  // Round1


  $.timer_round1_bankjob2 = 121000;


  $.counter_hits_scored_round1_bankjob2 = 0;

  //score_round_one_bankjob2 = 0


  $.flag_round1_finished_bankjob2 = 0;


  $.ammo_round1_bankjob = 0;

  // Slot1


  $.target_1_bankjob2_dead = 0;


  $.target1_part1_dead_bankjob2 = 0;


  $.target1_part2_dead_bankjob2 = 0;


  $.target1_part3_dead_bankjob2 = 0;


  $.target1_part4_dead_bankjob2 = 0;


  $.target1_part5_dead_bankjob2 = 0;


  $.slot1_x_bankjob2 = 0.0;


  $.slot1_y_bankjob2 = 0.0;


  $.slot1_z_bankjob2 = 0.0;


  $.slot1_filled_round1_bankjob2 = 0;

  // Location One Round one


  $.slot1_x_bankjob2 = -673.29;
  $.slot1_y_bankjob2 = 1238.52;
  $.slot1_z_bankjob2 = 11.50;

  // Slot2


  $.target_2_bankjob2_dead = 0;


  $.target2_part1_dead_bankjob2 = 0;


  $.target2_part2_dead_bankjob2 = 0;


  $.target2_part3_dead_bankjob2 = 0;


  $.target2_part4_dead_bankjob2 = 0;


  $.target2_part5_dead_bankjob2 = 0;


  $.slot2_x_bankjob2 = 0.0;


  $.slot2_y_bankjob2 = 0.0;


  $.slot2_z_bankjob2 = 0.0;


  $.slot2_filled_round1_bankjob2 = 0;


  $.targ2_x_bankjob2 = 0.0;


  $.targ2_y_bankjob2 = 0.0;


  $.targ2_z_bankjob2 = 0.0;


  $.target2_travel_bank2 = 0;

  // Location Two Round one


  $.slot2_x_bankjob2 = -676.11;
  $.slot2_y_bankjob2 = 1227.00;
  $.slot2_z_bankjob2 = 11.50;

  // Slot3


  $.target_3_bankjob2_dead = 0;


  $.target3_part1_dead_bankjob2 = 0;


  $.target3_part2_dead_bankjob2 = 0;


  $.target3_part3_dead_bankjob2 = 0;


  $.target3_part4_dead_bankjob2 = 0;


  $.target3_part5_dead_bankjob2 = 0;


  $.slot3_x_bankjob2 = 0.0;


  $.slot3_y_bankjob2 = 0.0;


  $.slot3_z_bankjob2 = 0.0;


  $.slot3_filled_round1_bankjob2 = 0;


  $.targ3_x_bankjob2 = 0.0;


  $.targ3_y_bankjob2 = 0.0;


  $.targ3_z_bankjob2 = 0.0;


  $.target3_travel_bank2 = 0;

  // Location Three Round one


  $.slot3_x_bankjob2 = -679.04;
  $.slot3_y_bankjob2 = 1238.52;
  $.slot3_z_bankjob2 = 11.50;

  // Slot 4 pistol weapons


  $.slot4_weapon_type_bank2 = 0;


  $.slot4_ammo_bank2 = 0;


  $.slot4_model_bank2 = 0;

  // New time out stuff


  $.flag_time_out_round1_bank2 = 0;


  await asyncWait(0);


  Text.LoadMissionText("BANKJ2");

  // ***************************************** REQUESTS THE MODELS ***************************

  // requests models


  $.player1.shutUp(true /* TRUE */);


  Streaming.RequestModel(173 /* COLT45 */);


  Streaming.RequestModel(tar_frame);


  Streaming.RequestModel(tar_downleft);


  Streaming.RequestModel(tar_downright);


  Streaming.RequestModel(tar_top);


  Streaming.RequestModel(tar_upleft);


  Streaming.RequestModel(tar_upright);


  Streaming.RequestModel(1385 /* faketarget */);


  Audio.LoadMissionAudio(1, "BNK2_1" as any); // Live Ammo


  Audio.LoadMissionAudio(2, "BNK2_2" as any); // Aim 3-2-1 fire


  while (!(Streaming.HasModelLoaded(173 /* COLT45 */)) || !(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2)) || !(Streaming.HasModelLoaded(1385 /* faketarget */))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(tar_frame)) || !(Streaming.HasModelLoaded(tar_downleft)) || !(Streaming.HasModelLoaded(tar_downright)) || !(Streaming.HasModelLoaded(tar_top)) || !(Streaming.HasModelLoaded(tar_upleft)) || !(Streaming.HasModelLoaded(tar_upright))) {
    await asyncWait(0);


  }

  // Creates the invisible target to stick palyer on


  $.object1_bankjob2 = ScriptObject.CreateNoOffset(1385 /* faketarget */, -668.42, 1231.65, 10.08);
  $.object1_bankjob2.dontRemove();
  $.object1_bankjob2.setHeading(90.0);

  // sets up player1 in 1st person camera mode and locks him in position.


  const _res447 = $.scplayer.getWeaponInSlot(4);
$.slot4_weapon_type_bank2 = _res447.weaponType;
$.slot4_ammo_bank2 = _res447.weaponAmmo;
$.slot4_model_bank2 = _res447.weaponModel;


  $.scplayer.attachToObject($.object1_bankjob2, 0.0, -2.0, 1.0, 0 /* FACING_FORWARD */, 60.0, 2 /* WEAPONTYPE_PISTOL */);
  $.scplayer.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
  $.scplayer.setCurrentWeapon(2 /* WEAPONTYPE_PISTOL */);
  $.player1.setAmmo(2 /* WEAPONTYPE_PISTOL */, 100);
  $.ammo_given_round1_bankjob2 = 100;

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_range_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
    }


  }


  $.player1.setControl(true /* ON */);


  if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
    // SCM GOTO → mission_skip_range (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_skip_range"); // fallback: would break linear control flow
  }


  Text.PrintNow("BJM2_19", 8000, 1); //"Hit as many targets as you can in the time limit!


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      // SCM GOTO → mission_skip_range (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_skip_range"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_range_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_20", 8000, 1); //"When you run out of time or ammo the round is over!


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      // SCM GOTO → mission_skip_range (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_skip_range"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_range_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_2", 8000, 1); //"To exit the round press the ^ button."


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      // SCM GOTO → mission_skip_range (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_skip_range"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_range_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_23", 8000, 1); //"If you leave the shooting range during the competition, you will fail the mission."


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      // SCM GOTO → mission_skip_range (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_skip_range"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_range_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
    }


  }
}



async function mission_skip_range() {


  $.player1.setControl(true /* ON */);
  Text.PrintNow("BNK2_1", 5000, 1); //"LIVE AMMO"
  Audio.PlayMissionAudio(1); // Live ammo


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  $.blob_flag = 1;


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_range_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("BNK2_1"); // LIVE AMMO


  Audio.PlayMissionAudio(2); // Aim 3-2-1 fire


  Text.PrintNow("BNK2_2", 5000, 1); //"Aim 3-2-1 fire"


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_range_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("BNK2_2"); // FIRE


  Hud.DisplayTimer($.$id.timer_round1_bankjob2, TIMER_DOWN);


  Hud.DisplayNthCounterWithString($.score_to_beat_bankjob2, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "BJM2_18");


  Hud.DisplayNthCounterWithString($.player_score_bankjob2, 0 /* COUNTER_DISPLAY_NUMBER */, 1, "BJM2_15");


  TIMERA = 0;


  $.target_moving_sound_bank2 = Sound.AddContinuous(-679.403, 1232.564, 11.105, SOUND_SHOOTING_RANGE_TARGET_MOVING_LOOP);


  while ($.flag_round1_finished_bankjob2 == 0) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_range_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
    }
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      $.flag_round1_finished_bankjob2 = 1;
    }
    if ($.round_clear_audio_loaded_bankjob2 == 0) {
      Audio.LoadMissionAudio(1, "BNK2_3" as any); // Area clear
      $.round_clear_audio_loaded_bankjob2 = 1;
    }
    if ($.round_clear_audio_loaded_bankjob2 == 1) {
      if (Audio.HasMissionAudioLoaded(1)) {
        $.round_clear_audio_loaded_bankjob2 = 2;
      }


    }
    $.player1.clearWantedLevel();
    $.ammo_round1_bankjob = $.player1.getAmmoInWeapon(2 /* WEAPONTYPE_PISTOL */);
    if ($.timer_round1_bankjob2 == 0 || $.ammo_round1_bankjob == 0) {
      if ($.flag_time_out_round1_bank2 == 0) {
        TIMERA = 0;
        $.flag_time_out_round1_bank2 = 1;
      }
      else {
        if (TIMERA > 200) {
          Audio.PlayMissionAudio(1); // area clear
          Text.PrintNow("BNK2_3", 5000, 1); //"area clear!"
          $.flag_round1_done_right_bankjob2 = 1;
          $.flag_round1_finished_bankjob2 = 1;
        }


      }


    }
    $.game_time_round1_bankjob2 = Clock.GetGameTimer();

    // slot 1

    if ($.create_timer_targ1_round1_bankjob2 == 0) {
      $.game_time_round1_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ1_round1_bankjob2 = $.game_time_round1_bankjob2;
      $.create_timer_targ1_round1_bankjob2 = 1;
    }
    if ($.create_timer_targ1_round1_bankjob2 == 1) {
      $.targ1_round1_movetime_bankjob2 = $.game_time_round1_bankjob2 - $.timer_create_targ1_round1_bankjob2;
    }
    if ($.targ1_round1_movetime_bankjob2 >= 2000) {
      if ($.slot1_filled_round1_bankjob2 == 0) {
        $.target1_frame_bankjob2 = ScriptObject.Create(tar_frame, $.slot1_x_bankjob2, $.slot1_y_bankjob2, $.slot1_z_bankjob2);
        $.target1_frame_bankjob2.setHeading(90.0);
        $.target1_part1_bankjob2 = ScriptObject.Create(tar_downleft, $.slot1_x_bankjob2, $.slot1_y_bankjob2, $.slot1_z_bankjob2);
        $.target1_part1_bankjob2.setHeading(90.0);
        $.target1_part2_bankjob2 = ScriptObject.Create(tar_downright, $.slot1_x_bankjob2, $.slot1_y_bankjob2, $.slot1_z_bankjob2);
        $.target1_part2_bankjob2.setHeading(90.0);
        $.target1_part3_bankjob2 = ScriptObject.Create(tar_top, $.slot1_x_bankjob2, $.slot1_y_bankjob2, $.slot1_z_bankjob2);
        $.target1_part3_bankjob2.setHeading(90.0);
        $.target1_part4_bankjob2 = ScriptObject.Create(tar_upleft, $.slot1_x_bankjob2, $.slot1_y_bankjob2, $.slot1_z_bankjob2);
        $.target1_part4_bankjob2.setHeading(90.0);
        $.target1_part5_bankjob2 = ScriptObject.Create(tar_upright, $.slot1_x_bankjob2, $.slot1_y_bankjob2, $.slot1_z_bankjob2);
        $.target1_part5_bankjob2.setHeading(90.0);
        $.target_1_bankjob2_dead = 0;
        $.target1_part1_dead_bankjob2 = 0;
        $.target1_part2_dead_bankjob2 = 0;
        $.target1_part3_dead_bankjob2 = 0;
        $.target1_part4_dead_bankjob2 = 0;
        $.target1_part5_dead_bankjob2 = 0;
        $.target1_travel_bank2 = 0;
        $.slot1_filled_round1_bankjob2 = 1;
      }


    }

    // Moves target one to left and right then to right if its destroyed

    if ($.slot1_filled_round1_bankjob2 == 1) {
      if ($.target_1_bankjob2_dead == 0) {
        if (!($.target1_frame_bankjob2.hasBeenDamaged())) {
          const _res448 = $.target1_frame_bankjob2.getCoordinates();
$.targ1_x_bankjob2 = _res448.x;
$.targ1_y_bankjob2 = _res448.y;
$.targ1_z_bankjob2 = _res448.z;
        }
        if ($.target1_travel_bank2 == 0) {
          if ($.targ1_y_bankjob2 <= 1228.70) {
            $.target1_travel_bank2 = 1;
          }
          else {
            $.targ1_y_bankjob2 = $.targ1_y_bankjob2 - timed(0.06);
          }


        }
        else {
          if ($.targ1_y_bankjob2 >= 1236.50) {
            $.target1_travel_bank2 = 0;
          }
          else {
            $.targ1_y_bankjob2 = $.targ1_y_bankjob2 + timed(0.06);
          }


        }


      }
      else {
        if (!($.target1_frame_bankjob2.hasBeenDamaged())) {
          const _res449 = $.target1_frame_bankjob2.getCoordinates();
$.targ1_x_bankjob2 = _res449.x;
$.targ1_y_bankjob2 = _res449.y;
$.targ1_z_bankjob2 = _res449.z;
          if ($.targ1_y_bankjob2 >= 1239.0) {
            if (!($.target1_frame_bankjob2.hasBeenDamaged())) {
              $.target1_frame_bankjob2.delete();
            }
            $.slot1_filled_round1_bankjob2 = 0;
            $.create_timer_targ1_round1_bankjob2 = 0;
          }
          else {
            $.targ1_y_bankjob2 = $.targ1_y_bankjob2 + timed(0.06);
          }


        }


      }


    }

    // Target One

    if ($.slot1_filled_round1_bankjob2 == 1) {
      $.target1_frame_bankjob2.setCoordinates($.targ1_x_bankjob2, $.targ1_y_bankjob2, $.targ1_z_bankjob2);
      if ($.target_1_bankjob2_dead == 0) {
        if ($.target1_part1_dead_bankjob2 == 1 && $.target1_part2_dead_bankjob2 == 1 && $.target1_part3_dead_bankjob2 == 1 && $.target1_part4_dead_bankjob2 == 1 && $.target1_part5_dead_bankjob2 == 1) {
          ++$.targets_really_hit_round1_bank1;
          ++$.counter_hits_scored_round1_bankjob2;
          ++$.player_score_bankjob2;
          $.create_timer_targ1_round1_bankjob2 = 0;
          $.target_1_bankjob2_dead = 1;
        }

        // part one of the target

        if ($.target1_part1_dead_bankjob2 == 0) {
          if ($.target1_part1_bankjob2.hasBeenDamaged()) {
            $.target1_part1_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target1_part1_dead_bankjob2 = 1;
          }
          else {
            $.target1_part1_bankjob2.setCoordinates($.targ1_x_bankjob2, $.targ1_y_bankjob2, $.targ1_z_bankjob2);
          }


        }


        // part two of the target

        if ($.target1_part2_dead_bankjob2 == 0) {
          if ($.target1_part2_bankjob2.hasBeenDamaged()) {
            $.target1_part2_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target1_part2_dead_bankjob2 = 1;
          }
          else {
            $.target1_part2_bankjob2.setCoordinates($.targ1_x_bankjob2, $.targ1_y_bankjob2, $.targ1_z_bankjob2);
          }


        }

        // part three of the target

        if ($.target1_part3_dead_bankjob2 == 0) {
          if ($.target1_part3_bankjob2.hasBeenDamaged()) {
            $.target1_part3_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target1_part3_dead_bankjob2 = 1;
          }
          else {
            $.target1_part3_bankjob2.setCoordinates($.targ1_x_bankjob2, $.targ1_y_bankjob2, $.targ1_z_bankjob2);
          }


        }

        // part four of the target

        if ($.target1_part4_dead_bankjob2 == 0) {
          if ($.target1_part4_bankjob2.hasBeenDamaged()) {
            $.target1_part4_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target1_part4_dead_bankjob2 = 1;
          }
          else {
            $.target1_part4_bankjob2.setCoordinates($.targ1_x_bankjob2, $.targ1_y_bankjob2, $.targ1_z_bankjob2);
          }


        }

        // part five of the target

        if ($.target1_part5_dead_bankjob2 == 0) {
          if ($.target1_part5_bankjob2.hasBeenDamaged()) {
            $.target1_part5_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target1_part5_dead_bankjob2 = 1;
          }
          else {
            $.target1_part5_bankjob2.setCoordinates($.targ1_x_bankjob2, $.targ1_y_bankjob2, $.targ1_z_bankjob2);
          }


        }


      }


    }

    // ******************************************* Slot2 ***************************************

    if ($.create_timer_targ2_round1_bankjob2 == 0) {
      $.game_time_round1_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ2_round1_bankjob2 = $.game_time_round1_bankjob2;
      $.create_timer_targ2_round1_bankjob2 = 1;
    }
    if ($.create_timer_targ2_round1_bankjob2 == 1) {
      $.targ2_round1_movetime_bankjob2 = $.game_time_round1_bankjob2 - $.timer_create_targ2_round1_bankjob2;
    }
    if ($.targ2_round1_movetime_bankjob2 >= 2000) {
      if ($.slot2_filled_round1_bankjob2 == 0) {
        $.target2_frame_bankjob2 = ScriptObject.Create(tar_frame, $.slot2_x_bankjob2, $.slot2_y_bankjob2, $.slot2_z_bankjob2);
        $.target2_frame_bankjob2.setHeading(90.0);
        $.target2_part1_bankjob2 = ScriptObject.Create(tar_downleft, $.slot2_x_bankjob2, $.slot2_y_bankjob2, $.slot2_z_bankjob2);
        $.target2_part1_bankjob2.setHeading(90.0);
        $.target2_part2_bankjob2 = ScriptObject.Create(tar_downright, $.slot2_x_bankjob2, $.slot2_y_bankjob2, $.slot2_z_bankjob2);
        $.target2_part2_bankjob2.setHeading(90.0);
        $.target2_part3_bankjob2 = ScriptObject.Create(tar_top, $.slot2_x_bankjob2, $.slot2_y_bankjob2, $.slot2_z_bankjob2);
        $.target2_part3_bankjob2.setHeading(90.0);
        $.target2_part4_bankjob2 = ScriptObject.Create(tar_upleft, $.slot2_x_bankjob2, $.slot2_y_bankjob2, $.slot2_z_bankjob2);
        $.target2_part4_bankjob2.setHeading(90.0);
        $.target2_part5_bankjob2 = ScriptObject.Create(tar_upright, $.slot2_x_bankjob2, $.slot2_y_bankjob2, $.slot2_z_bankjob2);
        $.target2_part5_bankjob2.setHeading(90.0);
        $.target_2_bankjob2_dead = 0;
        $.target2_part1_dead_bankjob2 = 0;
        $.target2_part2_dead_bankjob2 = 0;
        $.target2_part3_dead_bankjob2 = 0;
        $.target2_part4_dead_bankjob2 = 0;
        $.target2_part5_dead_bankjob2 = 0;
        $.target2_travel_bank2 = 1;
        $.slot2_filled_round1_bankjob2 = 1;
      }


    }

    // Moves target one to left and right then to right if its destroyed

    if ($.slot2_filled_round1_bankjob2 == 1) {
      if ($.target_2_bankjob2_dead == 0) {
        if (!($.target2_frame_bankjob2.hasBeenDamaged())) {
          const _res450 = $.target2_frame_bankjob2.getCoordinates();
$.targ2_x_bankjob2 = _res450.x;
$.targ2_y_bankjob2 = _res450.y;
$.targ2_z_bankjob2 = _res450.z;
        }
        if ($.target2_travel_bank2 == 0) {
          if ($.targ2_y_bankjob2 <= 1228.70) {
            $.target2_travel_bank2 = 1;
          }
          else {
            $.targ2_y_bankjob2 = $.targ2_y_bankjob2 - timed(0.04);
          }


        }
        else {
          if ($.targ2_y_bankjob2 >= 1236.50) {
            $.target2_travel_bank2 = 0;
          }
          else {
            $.targ2_y_bankjob2 = $.targ2_y_bankjob2 + timed(0.04);
          }


        }


      }
      else {
        if (!($.target2_frame_bankjob2.hasBeenDamaged())) {
          const _res451 = $.target2_frame_bankjob2.getCoordinates();
$.targ2_x_bankjob2 = _res451.x;
$.targ2_y_bankjob2 = _res451.y;
$.targ2_z_bankjob2 = _res451.z;
          if ($.targ2_y_bankjob2 <= 1227.00) {
            if (!($.target2_frame_bankjob2.hasBeenDamaged())) {
              $.target2_frame_bankjob2.delete();
            }
            $.slot2_filled_round1_bankjob2 = 0;
            $.create_timer_targ2_round1_bankjob2 = 0;
          }
          else {
            $.targ2_y_bankjob2 = $.targ2_y_bankjob2 - timed(0.06);
          }


        }


      }


    }

    // Target Two

    if ($.slot2_filled_round1_bankjob2 == 1) {
      $.target2_frame_bankjob2.setCoordinates($.targ2_x_bankjob2, $.targ2_y_bankjob2, $.targ2_z_bankjob2);
      if ($.target_2_bankjob2_dead == 0) {
        if ($.target2_part1_dead_bankjob2 == 1 && $.target2_part2_dead_bankjob2 == 1 && $.target2_part3_dead_bankjob2 == 1 && $.target2_part4_dead_bankjob2 == 1 && $.target2_part5_dead_bankjob2 == 1) {
          ++$.targets_really_hit_round1_bank1;
          ++$.counter_hits_scored_round1_bankjob2;
          ++$.counter_hits_scored_round1_bankjob2;
          ++$.player_score_bankjob2;
          ++$.player_score_bankjob2;
          $.create_timer_targ2_round1_bankjob2 = 0;
          $.target_2_bankjob2_dead = 1;
        }

        // part one of the target

        if ($.target2_part1_dead_bankjob2 == 0) {
          if ($.target2_part1_bankjob2.hasBeenDamaged()) {
            $.target2_part1_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target2_part1_dead_bankjob2 = 1;
          }
          else {
            $.target2_part1_bankjob2.setCoordinates($.targ2_x_bankjob2, $.targ2_y_bankjob2, $.targ2_z_bankjob2);
          }


        }

        // part two of the target

        if ($.target2_part2_dead_bankjob2 == 0) {
          if ($.target2_part2_bankjob2.hasBeenDamaged()) {
            $.target2_part2_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target2_part2_dead_bankjob2 = 1;
          }
          else {
            $.target2_part2_bankjob2.setCoordinates($.targ2_x_bankjob2, $.targ2_y_bankjob2, $.targ2_z_bankjob2);
          }


        }

        // part three of the target

        if ($.target2_part3_dead_bankjob2 == 0) {
          if ($.target2_part3_bankjob2.hasBeenDamaged()) {
            $.target2_part3_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target2_part3_dead_bankjob2 = 1;
          }
          else {
            $.target2_part3_bankjob2.setCoordinates($.targ2_x_bankjob2, $.targ2_y_bankjob2, $.targ2_z_bankjob2);
          }


        }

        // part four of the target

        if ($.target2_part4_dead_bankjob2 == 0) {
          if ($.target2_part4_bankjob2.hasBeenDamaged()) {
            $.target2_part4_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target2_part4_dead_bankjob2 = 1;
          }
          else {
            $.target2_part4_bankjob2.setCoordinates($.targ2_x_bankjob2, $.targ2_y_bankjob2, $.targ2_z_bankjob2);
          }


        }

        // part five of the target

        if ($.target2_part5_dead_bankjob2 == 0) {
          if ($.target2_part5_bankjob2.hasBeenDamaged()) {
            $.target2_part5_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target2_part5_dead_bankjob2 = 1;
          }
          else {
            $.target2_part5_bankjob2.setCoordinates($.targ2_x_bankjob2, $.targ2_y_bankjob2, $.targ2_z_bankjob2);
          }


        }


      }


    }

    // ***************************************** SLOT3 *****************************************

    // Slot Three

    if ($.create_timer_targ3_round1_bankjob2 == 0) {
      $.game_time_round1_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ3_round1_bankjob2 = $.game_time_round1_bankjob2;
      $.create_timer_targ3_round1_bankjob2 = 1;
    }
    if ($.create_timer_targ3_round1_bankjob2 == 1) {
      $.targ3_round1_movetime_bankjob2 = $.game_time_round1_bankjob2 - $.timer_create_targ3_round1_bankjob2;
    }
    if ($.targ3_round1_movetime_bankjob2 >= 2000) {
      if ($.slot3_filled_round1_bankjob2 == 0) {
        $.target3_frame_bankjob2 = ScriptObject.Create(tar_frame, $.slot3_x_bankjob2, $.slot3_y_bankjob2, $.slot3_z_bankjob2);
        $.target3_frame_bankjob2.setHeading(90.0);
        $.target3_part1_bankjob2 = ScriptObject.Create(tar_downleft, $.slot3_x_bankjob2, $.slot3_y_bankjob2, $.slot3_z_bankjob2);
        $.target3_part1_bankjob2.setHeading(90.0);
        $.target3_part2_bankjob2 = ScriptObject.Create(tar_downright, $.slot3_x_bankjob2, $.slot3_y_bankjob2, $.slot3_z_bankjob2);
        $.target3_part2_bankjob2.setHeading(90.0);
        $.target3_part3_bankjob2 = ScriptObject.Create(tar_top, $.slot3_x_bankjob2, $.slot3_y_bankjob2, $.slot3_z_bankjob2);
        $.target3_part3_bankjob2.setHeading(90.0);
        $.target3_part4_bankjob2 = ScriptObject.Create(tar_upleft, $.slot3_x_bankjob2, $.slot3_y_bankjob2, $.slot3_z_bankjob2);
        $.target3_part4_bankjob2.setHeading(90.0);
        $.target3_part5_bankjob2 = ScriptObject.Create(tar_upright, $.slot3_x_bankjob2, $.slot3_y_bankjob2, $.slot3_z_bankjob2);
        $.target3_part5_bankjob2.setHeading(90.0);
        $.target_3_bankjob2_dead = 0;
        $.target3_part1_dead_bankjob2 = 0;
        $.target3_part2_dead_bankjob2 = 0;
        $.target3_part3_dead_bankjob2 = 0;
        $.target3_part4_dead_bankjob2 = 0;
        $.target3_part5_dead_bankjob2 = 0;
        $.target3_travel_bank2 = 0;
        $.slot3_filled_round1_bankjob2 = 1;
      }


    }

    // Moves target one to left and right then to right if its destroyed

    if ($.slot3_filled_round1_bankjob2 == 1) {
      if ($.target_3_bankjob2_dead == 0) {
        if (!($.target3_frame_bankjob2.hasBeenDamaged())) {
          const _res452 = $.target3_frame_bankjob2.getCoordinates();
$.targ3_x_bankjob2 = _res452.x;
$.targ3_y_bankjob2 = _res452.y;
$.targ3_z_bankjob2 = _res452.z;
        }
        if ($.target3_travel_bank2 == 0) {
          if ($.targ3_y_bankjob2 <= 1228.70) {
            $.target3_travel_bank2 = 1;
          }
          else {
            $.targ3_y_bankjob2 = $.targ3_y_bankjob2 - timed(0.02);
          }


        }
        else {
          if ($.targ3_y_bankjob2 >= 1236.50) {
            $.target3_travel_bank2 = 0;
          }
          else {
            $.targ3_y_bankjob2 = $.targ3_y_bankjob2 + timed(0.02);
          }


        }


      }
      else {
        if (!($.target3_frame_bankjob2.hasBeenDamaged())) {
          const _res453 = $.target3_frame_bankjob2.getCoordinates();
$.targ3_x_bankjob2 = _res453.x;
$.targ3_y_bankjob2 = _res453.y;
$.targ3_z_bankjob2 = _res453.z;
          if ($.targ3_y_bankjob2 >= 1239.0) {
            if (!($.target3_frame_bankjob2.hasBeenDamaged())) {
              $.target3_frame_bankjob2.delete();
            }
            $.slot3_filled_round1_bankjob2 = 0;
            $.targ3_round1_movetime_bankjob2 = 0;
          }
          else {
            $.targ3_y_bankjob2 = $.targ3_y_bankjob2 + timed(0.06);
          }


        }


      }


    }

    // Target Three

    if ($.slot3_filled_round1_bankjob2 == 1) {
      $.target3_frame_bankjob2.setCoordinates($.targ3_x_bankjob2, $.targ3_y_bankjob2, $.targ3_z_bankjob2);
      if ($.target_3_bankjob2_dead == 0) {
        if ($.target3_part1_dead_bankjob2 == 1 && $.target3_part2_dead_bankjob2 == 1 && $.target3_part3_dead_bankjob2 == 1 && $.target3_part4_dead_bankjob2 == 1 && $.target3_part5_dead_bankjob2 == 1) {
          ++$.targets_really_hit_round1_bank1;
          ++$.counter_hits_scored_round1_bankjob2;
          ++$.counter_hits_scored_round1_bankjob2;
          ++$.counter_hits_scored_round1_bankjob2;
          ++$.player_score_bankjob2;
          ++$.player_score_bankjob2;
          ++$.player_score_bankjob2;
          $.targ3_round1_movetime_bankjob2 = 0;
          $.target_3_bankjob2_dead = 1;
        }

        // part one of the target

        if ($.target3_part1_dead_bankjob2 == 0) {
          if ($.target3_part1_bankjob2.hasBeenDamaged()) {
            $.target3_part1_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target3_part1_dead_bankjob2 = 1;
          }
          else {
            $.target3_part1_bankjob2.setCoordinates($.targ3_x_bankjob2, $.targ3_y_bankjob2, $.targ3_z_bankjob2);
          }


        }


        // part two of the target

        if ($.target3_part2_dead_bankjob2 == 0) {
          if ($.target3_part2_bankjob2.hasBeenDamaged()) {
            $.target3_part2_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target3_part2_dead_bankjob2 = 1;
          }
          else {
            $.target3_part2_bankjob2.setCoordinates($.targ3_x_bankjob2, $.targ3_y_bankjob2, $.targ3_z_bankjob2);
          }


        }

        // part three of the target

        if ($.target3_part3_dead_bankjob2 == 0) {
          if ($.target3_part3_bankjob2.hasBeenDamaged()) {
            $.target3_part3_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target3_part3_dead_bankjob2 = 1;
          }
          else {
            $.target3_part3_bankjob2.setCoordinates($.targ3_x_bankjob2, $.targ3_y_bankjob2, $.targ3_z_bankjob2);
          }


        }

        // part four of the target

        if ($.target3_part4_dead_bankjob2 == 0) {
          if ($.target3_part4_bankjob2.hasBeenDamaged()) {
            $.target3_part4_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target3_part4_dead_bankjob2 = 1;
          }
          else {
            $.target3_part4_bankjob2.setCoordinates($.targ3_x_bankjob2, $.targ3_y_bankjob2, $.targ3_z_bankjob2);
          }


        }

        // part five of the target

        if ($.target3_part5_dead_bankjob2 == 0) {
          if ($.target3_part5_bankjob2.hasBeenDamaged()) {
            $.target3_part5_bankjob2.delete();
            ++$.bits_hit_bank2;
            $.target3_part5_dead_bankjob2 = 1;
          }
          else {
            $.target3_part5_bankjob2.setCoordinates($.targ3_x_bankjob2, $.targ3_y_bankjob2, $.targ3_z_bankjob2);
          }


        }


      }


    }


  }


  $.target_moving_sound_bank2.remove();


  if ($.flag_round1_done_right_bankjob2 == 1) {
    while (!(Audio.HasMissionAudioFinished(1))) {
      await asyncWait(0);
      if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
        Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
        // SCM GOTO → mission_range_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
      }


    }


  }


  Text.ClearThisPrint("BJM2_19");


  Text.ClearThisPrint("BJM2_20");


  Text.ClearThisPrint("BJM2_2");


  Text.ClearThisPrint("BNK2_3"); // Area clear


  $.ammo_used_round1_bankjob2 = $.ammo_given_round1_bankjob2 - $.ammo_round1_bankjob;


  $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);


  Hud.ClearTimer($.$id.timer_round1_bankjob2);


  Text.PrintWithNumberBig("RANGE_1", $.counter_hits_scored_round1_bankjob2, 4000, 1); // Score round 1


  await asyncWait(4000);

  // totals up players percentage of hits


  $.percentage_hits_bankjob2 = $.bits_hit_bank2 * 100;


  if ($.ammo_used_round1_bankjob2 > 0) {
    $.percentage_hits_bankjob2 = $.percentage_hits_bankjob2 / $.ammo_used_round1_bankjob2;
  }
  else {
    $.percentage_hits_bankjob2 = 0;
  }


  Text.PrintWithNumberBig("BJM2_3", $.percentage_hits_bankjob2, 4000, 1); // percent hit rate


  await asyncWait(4000);


  Text.ClearThisBigPrint("BJM2_3");


  $.scplayer.detachFromCar();


  $.object1_bankjob2.delete();


  $.player1.setControl(true /* ON */);


  if ($.player_score_bankjob2 >= 45) {
    if ($.player_had_reload_award == 0) {
      Stat.PlayerMadeProgress(1);
      $.player1.setFastReload(true /* TRUE */);
      Text.PrintNow("RELOAD", 5000, 1); //"You have won the fast reload ability!"
      $.player_had_reload_award = 1;
    }


  }


  if ($.player_score_bankjob2 > $.score_to_beat_bankjob2) {
    // SCM GOTO → mission_range_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_range_passed"); // fallback: would break linear control flow
  }
  else {
    // SCM GOTO → mission_range_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_range_failed"); // fallback: would break linear control flow
  }
}



// ****************************************** Mission Failed *******************************


async function mission_range_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}


// *************************************** Mission Passed **********************************


async function mission_range_passed() {


  World.SetCarDensityMultiplier(1.0);
  Text.PrintWithNumberBig("M_PASS", 500, 5000, 1); //"Mission Passed!"
  $.player1.addScore(500);


  if ($.flag_passed_range == 0) {
    Stat.RegisterOddjobMissionPassed();
    $.flag_passed_range = 1;
  }


  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Stat.RegisterHighestScore(0, $.player_score_bankjob2);
  Stat.RegisterHighestScore(1, $.percentage_hits_bankjob2);
}


// *************************************** Mission Cleanup *********************************


async function mission_cleanup_range() {


  $.target_moving_sound_bank2.remove();


  $.target1_frame_bankjob2.delete();
  $.target1_part1_bankjob2.delete();
  $.target1_part2_bankjob2.delete();
  $.target1_part3_bankjob2.delete();
  $.target1_part4_bankjob2.delete();
  $.target1_part5_bankjob2.delete();
  $.target2_frame_bankjob2.delete();
  $.target2_part1_bankjob2.delete();
  $.target2_part2_bankjob2.delete();
  $.target2_part3_bankjob2.delete();
  $.target2_part4_bankjob2.delete();
  $.target2_part5_bankjob2.delete();
  $.target3_frame_bankjob2.delete();
  $.target3_part1_bankjob2.delete();
  $.target3_part2_bankjob2.delete();
  $.target3_part3_bankjob2.delete();
  $.target3_part4_bankjob2.delete();
  $.target3_part5_bankjob2.delete();


  $.scplayer.detachFromCar();


  if ($.slot4_ammo_bank2 > 0) {
    Streaming.RequestModel($.slot4_model_bank2);
  }


  Streaming.LoadAllModelsNow();


  $.player1.giveWeapon($.slot4_weapon_type_bank2, $.slot4_ammo_bank2);


  Streaming.MarkModelAsNoLongerNeeded($.slot4_model_bank2);


  ONMISSION = 0;
  $.flag_player_on_bank_2 = 0;
  $.player1.shutUp(false /* FALSE */);
  $.object1_bankjob2.delete();
  Hud.ClearCounter($.$id.player_score_bankjob2);
  Hud.ClearCounter($.$id.score_to_beat_bankjob2);
  Hud.ClearTimer($.$id.timer_round1_bankjob2);
  Streaming.MarkModelAsNoLongerNeeded(173 /* COLT45 */);
  Streaming.MarkModelAsNoLongerNeeded(tar_frame);
  Streaming.MarkModelAsNoLongerNeeded(tar_downleft);
  Streaming.MarkModelAsNoLongerNeeded(tar_downright);
  Streaming.MarkModelAsNoLongerNeeded(tar_top);
  Streaming.MarkModelAsNoLongerNeeded(tar_upleft);
  Streaming.MarkModelAsNoLongerNeeded(tar_upright);
  Streaming.MarkModelAsNoLongerNeeded(1385 /* faketarget */);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function range() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *********************************** Shooting Range Oddjob *******************************
  // ********************************** The Shooting Competition *****************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME range

  // Mission start stuff


  await mission_start_range();  // SCM GOSUB mission_start_range


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_range_failed();  // SCM GOSUB mission_range_failed
  }


  await mission_cleanup_range();  // SCM GOSUB mission_cleanup_range


  // MissionBoundary




  // ******************************************** Mission Start ******************************


}
