// Generated from main/bankj2.sc

import { $ } from "../vars.mts";
import { timed } from "../scm.mts";

async function mission_start_bankjob2() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  $.flag_player_in_malibu = 0;

  // Round1


  $.timer_round1_bankjob2 = 121000;


  $.counter_hits_scored_round1_bankjob2 = 0;


  $.flag_round1_finished_bankjob2 = 0;


  $.ammo_round1_bankjob = 0;


  $.bits_hit_bank2 = 0;


  $.score_round2_bankjob2 = 0;


  $.score_round3_bankjob2 = 0;


  $.total_hits_bankjob2 = 0;


  $.final_hits_bankjob2 = 0;

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


  $.delete_targ1_round2_time_bankjob2 = 0;


  $.time_targ1_round2_in_posit_bankjob2 = 0;

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

  // ************************************* Round2 ********************************************

  // General


  $.counter_hits_scored_round2_bankjob2 = 0;


  $.round2_finished_bankjob2 = 0;


  $.round3_finished_bankjob2 = 0;


  $.game_time_round2_bankjob2 = 0;

  // Slot1


  $.slot1_x_round2_bankjob2 = 0.0;


  $.slot1_y_round2_bankjob2 = 0.0;


  $.slot1_z_round2_bankjob2 = 0.0;


  $.slot1_heading_round2_bankjob2 = 0.0;


  $.flag_target1_dead_round2_bankjob2 = 0;


  $.target1_round2_removed_bankjob2 = 0;


  $.targ1_round2_x_bankjob2 = 0.0;


  $.targ1_round2_y_bankjob2 = 0.0;


  $.targ1_round2_z_bankjob2 = 0.0;


  $.timer_start_targ1_round2_bankjob2 = 0;


  $.flag_slot1_round2_filled_bankjob2 = 0;

  // Slot2


  $.slot2_x_round2_bankjob2 = 0.0;


  $.slot2_y_round2_bankjob2 = 0.0;


  $.slot2_z_round2_bankjob2 = 0.0;


  $.slot2_heading_round2_bankjob2 = 0.0;


  $.flag_target2_dead_round2_bankjob2 = 0;


  $.target2_round2_removed_bankjob2 = 0;


  $.targ2_round2_x_bankjob2 = 0.0;


  $.targ2_round2_y_bankjob2 = 0.0;


  $.targ2_round2_z_bankjob2 = 0.0;


  $.timer_start_targ2_round2_bankjob2 = 0;


  $.flag_slot2_round2_filled_bankjob2 = 0;

  // Slot3


  $.slot3_x_round2_bankjob2 = 0.0;


  $.slot3_y_round2_bankjob2 = 0.0;


  $.slot3_z_round2_bankjob2 = 0.0;


  $.slot3_heading_round2_bankjob2 = 0.0;


  $.flag_target3_dead_round2_bankjob2 = 0;


  $.target3_round2_removed_bankjob2 = 0;


  $.targ3_round2_x_bankjob2 = 0.0;


  $.targ3_round2_y_bankjob2 = 0.0;


  $.targ3_round2_z_bankjob2 = 0.0;


  $.timer_start_targ3_round2_bankjob2 = 0;


  $.flag_slot3_round2_filled_bankjob2 = 0;

  // Slot4 Round2


  $.slot4_x_round2_bankjob2 = 0.0;


  $.slot4_y_round2_bankjob2 = 0.0;


  $.slot4_z_round2_bankjob2 = 0.0;


  $.slot4_heading_round2_bankjob2 = 0.0;


  $.flag_target4_dead_round2_bankjob2 = 0;


  $.target4_round2_removed_bankjob2 = 0;


  $.targ4_round2_x_bankjob2 = 0.0;


  $.targ4_round2_y_bankjob2 = 0.0;


  $.targ4_round2_z_bankjob2 = 0.0;


  $.timer_start_targ4_round2_bankjob2 = 0;


  $.flag_slot4_round2_filled_bankjob2 = 0;

  // Slot 5 Round2


  $.slot5_x_round2_bankjob2 = 0.0;


  $.slot5_y_round2_bankjob2 = 0.0;


  $.slot5_z_round2_bankjob2 = 0.0;


  $.slot5_heading_round2_bankjob2 = 0.0;


  $.flag_target5_dead_round2_bankjob2 = 0;


  $.target5_round2_removed_bankjob2 = 0;


  $.targ5_round2_x_bankjob2 = 0.0;


  $.targ5_round2_y_bankjob2 = 0.0;


  $.targ5_round2_z_bankjob2 = 0.0;


  $.timer_start_targ5_round2_bankjob2 = 0;


  $.flag_slot5_round2_filled_bankjob2 = 0;

  // Slot6 Round2


  $.slot6_x_round2_bankjob2 = 0.0;


  $.slot6_y_round2_bankjob2 = 0.0;


  $.slot6_z_round2_bankjob2 = 0.0;


  $.slot6_heading_round2_bankjob2 = 0.0;


  $.flag_target6_dead_round2_bankjob2 = 0;


  $.target6_round2_removed_bankjob2 = 0;


  $.targ6_round2_x_bankjob2 = 0.0;


  $.targ6_round2_y_bankjob2 = 0.0;


  $.targ6_round2_z_bankjob2 = 0.0;


  $.timer_start_targ6_round2_bankjob2 = 0;


  $.flag_slot6_round2_filled_bankjob2 = 0;

  // ****************************************** ROUND 3 **************************************

  // General stuff


  $.counter_hits_scored_round3_bankjob2 = 0;

  // Slot7 Round2


  $.slot7_filled_round3_bankjob2 = 0;


  $.target7_round3_dead_bankjob2 = 0;


  $.slot7_round3_x_bankjob2 = -674.16;


  $.slot7_round3_y_bankjob2 = 1288.23;


  $.slot7_round3_z_bankjob2 = 9.81;


  $.targ7_round3_x_bankjob2 = 0.0;


  $.targ7_round3_y_bankjob2 = 0.0;


  $.targ7_round3_z_bankjob2 = 0.0;


  $.target7_round3_travel_bank2 = 0;

  // Slot8 Round2


  $.slot8_filled_round3_bankjob2 = 0;


  $.target8_round3_dead_bankjob2 = 0;


  $.slot8_round3_x_bankjob2 = -673.46;


  $.slot8_round3_y_bankjob2 = 1279.29;


  $.slot8_round3_z_bankjob2 = 9.81;


  $.targ8_round3_x_bankjob2 = 0.0;


  $.targ8_round3_y_bankjob2 = 0.0;


  $.targ8_round3_z_bankjob2 = 0.0;


  $.target8_round3_travel_bank2 = 0;

  // SLOT9 ROUND2


  $.slot9_filled_round3_bankjob2 = 0;


  $.target9_round3_dead_bankjob2 = 0;


  $.slot9_round3_x_bankjob2 = -683.23;


  $.slot9_round3_y_bankjob2 = 1281.50;


  $.slot9_round3_z_bankjob2 = 9.81;


  $.targ9_round3_x_bankjob2 = 0.0;


  $.targ9_round3_y_bankjob2 = 0.0;


  $.targ9_round3_z_bankjob2 = 0.0;


  $.target9_round3_travel_bank2 = 0;

  // SLOT 10 ROUND2


  $.slot10_filled_round3_bankjob2 = 0;


  $.target10_round3_dead_bankjob2 = 0;


  $.slot10_round3_x_bankjob2 = -683.73;


  $.slot10_round3_y_bankjob2 = 1289.19;


  $.slot10_round3_z_bankjob2 = 9.81;


  $.targ10_round3_x_bankjob2 = 0.0;


  $.targ10_round3_y_bankjob2 = 0.0;


  $.targ10_round3_z_bankjob2 = 0.0;


  $.target10_round3_travel_bank2 = 0;

  // SLOT 11 ROUND2 tower


  $.slot11_filled_round3_bankjob2 = 0;


  $.target11_round3_dead_bankjob2 = 0;


  $.slot11_round3_x_bankjob2 = -678.21;


  $.slot11_round3_y_bankjob2 = 1293.04;


  $.slot11_round3_z_bankjob2 = 8.0;


  $.targ11_round3_x_bankjob2 = 0.0;


  $.targ11_round3_y_bankjob2 = 0.0;


  $.targ11_round3_z_bankjob2 = 0.0;


  $.target11_round3_travel_bank2 = 0;

  // SLOT 12 ROUND2


  $.slot12_filled_round3_bankjob2 = 0;


  $.target12_round3_dead_bankjob2 = 0;


  $.slot12_round3_x_bankjob2 = -682.67;


  $.slot12_round3_y_bankjob2 = 1279.42;


  $.slot12_round3_z_bankjob2 = 13.0;


  $.targ12_round3_x_bankjob2 = 0.0;


  $.targ12_round3_y_bankjob2 = 0.0;


  $.targ12_round3_z_bankjob2 = 0.0;


  $.target12_round3_travel_bank2 = 0;

  // SLOT 13 ROUND2


  $.slot13_filled_round3_bankjob2 = 0;


  $.target13_round3_dead_bankjob2 = 0;


  $.slot13_round3_x_bankjob2 = -673.10;


  $.slot13_round3_y_bankjob2 = 1277.80;


  $.slot13_round3_z_bankjob2 = 13.0;


  $.targ13_round3_x_bankjob2 = 0.0;


  $.targ13_round3_y_bankjob2 = 0.0;


  $.targ13_round3_z_bankjob2 = 0.0;


  $.target13_round3_travel_bank2 = 0;

  // General Stuff For Whole Competition


  $.target1_travel_bank2 = 0;


  $.slot1_x_round2_bankjob2 = -683.07;
  $.slot1_y_round2_bankjob2 = 1269.74;
  $.slot1_z_round2_bankjob2 = 9.81;
  $.slot1_heading_round2_bankjob2 = 90.0;


  $.slot2_x_round2_bankjob2 = -683.11;
  $.slot2_y_round2_bankjob2 = 1272.55;
  $.slot2_z_round2_bankjob2 = 9.81;
  $.slot2_heading_round2_bankjob2 = 90.0;


  $.slot3_x_round2_bankjob2 = -683.23;
  $.slot3_y_round2_bankjob2 = 1275.01;
  $.slot3_z_round2_bankjob2 = 9.81;
  $.slot3_heading_round2_bankjob2 = 90.0;


  $.slot4_x_round2_bankjob2 = -683.64;
  $.slot4_y_round2_bankjob2 = 1278.10;
  $.slot4_z_round2_bankjob2 = 12.56;
  $.slot4_heading_round2_bankjob2 = 90.0;


  $.slot5_x_round2_bankjob2 = -683.54;
  $.slot5_y_round2_bankjob2 = 1275.25;
  $.slot5_z_round2_bankjob2 = 12.62;
  $.slot5_heading_round2_bankjob2 = 90.0;


  $.slot6_x_round2_bankjob2 = -683.54;
  $.slot6_y_round2_bankjob2 = 1272.39;
  $.slot6_z_round2_bankjob2 = 12.62;
  $.slot6_heading_round2_bankjob2 = 90.0;

  // Percentage hits


  $.ammo_given_round1_bankjob2 = 0;


  $.ammo_used_round1_bankjob2 = 0;


  $.ammo_given_round2_bankjob2 = 0;


  $.ammo_used_round2_bankjob2 = 0;


  $.ammo_given_round3_bankjob2 = 0;


  $.ammo_used_round3_bankjob2 = 0;


  $.total_ammo_used_bankjob2 = 0;

  // Round2 timer stuff


  $.timer_round2_bankjob2 = 61000;


  $.timer_round3_bankjob2 = 61000;

  // Timer create targets round2


  $.create_timer_targ1_round2_bankjob2 = 0;


  $.timer_create_targ1_round2_bankjob2 = 0;


  $.targ1_round2_movetime_bankjob2 = 0;


  $.create_timer_targ2_round2_bankjob2 = 0;


  $.timer_create_targ2_round2_bankjob2 = 0;


  $.targ2_round2_movetime_bankjob2 = 0;


  $.create_timer_targ3_round2_bankjob2 = 0;


  $.timer_create_targ3_round2_bankjob2 = 0;


  $.targ3_round2_movetime_bankjob2 = 0;


  $.create_timer_targ4_round2_bankjob2 = 0;


  $.timer_create_targ4_round2_bankjob2 = 0;


  $.targ4_round2_movetime_bankjob2 = 0;


  $.create_timer_targ5_round2_bankjob2 = 0;


  $.timer_create_targ5_round2_bankjob2 = 0;


  $.targ5_round2_movetime_bankjob2 = 0;


  $.create_timer_targ6_round2_bankjob2 = 0;


  $.timer_create_targ6_round2_bankjob2 = 0;


  $.targ6_round2_movetime_bankjob2 = 0;

  // Removes all player weapon stuff


  $.slot4_weapon_type_bank2 = 0;


  $.slot4_ammo_bank2 = 0;


  $.slot4_model_bank2 = 0;

  // Audio Stuff


  $.doing_well_audio_loaded_bankjob2 = 0;


  $.doing_bad_audio_loaded_bankjob2 = 0;


  $.round_clear_audio_loaded_bankjob2 = 0;

  // Round done correctly flags


  $.flag_round1_done_right_bankjob2 = 0;


  $.flag_round2_done_right_bankjob2 = 0;


  $.flag_round3_done_right_bankjob2 = 0;

  // Round 3 random target picking stuff


  $.target1_to_move_this_time_bankjob2 = 0;


  $.target2_to_move_this_time_bankjob2 = 0;


  $.target3_to_move_this_time_bankjob2 = 0;


  $.targ_to_move1_bankjob2 = 0;


  $.targ_to_move2_bankjob2 = 0;


  $.targ_to_move3_bankjob2 = 0;


  $.flag_choose_slots_bankjob2 = 0;


  $.counter_slot_free_bankjob2 = 0;


  $.target7_round3_delete_bankjob2 = 0;


  $.target8_round3_delete_bankjob2 = 0;


  $.target9_round3_delete_bankjob2 = 0;


  $.target10_round3_delete_bankjob2 = 0;


  $.target11_round3_delete_bankjob2 = 0;


  $.target12_round3_delete_bankjob2 = 0;


  $.target13_round3_delete_bankjob2 = 0;

  // ROund2 part2 extra target movement stuff STUFF


  // VAR_INT target9_round3_been_left_bank2


  $.target9_round3_been_left_bank2 = 0;


  // VAR_INT target10_round3_been_left_bank2


  $.target10_round3_been_left_bank2 = 0;


  // VAR_INT target11_round3_been_down_bank2


  $.target11_round3_been_down_bank2 = 0;


  // VAR_INT target12_round3_been_left_bank2


  $.target12_round3_been_left_bank2 = 0;


  // VAR_INT target13_round3_been_left_bank2


  $.target13_round3_been_left_bank2 = 0;

  // Round one target creation stuff


  // VAR_INT game_time_round1_bankjob2


  // VAR_INT create_timer_targ1_round1_bankjob2


  $.create_timer_targ1_round1_bankjob2 = 0;


  // VAR_INT timer_create_targ1_round1_bankjob2


  $.timer_create_targ1_round1_bankjob2 = 0;


  // VAR_INT targ1_round1_movetime_bankjob2


  $.targ1_round1_movetime_bankjob2 = 0;


  // VAR_INT create_timer_targ2_round1_bankjob2


  $.create_timer_targ2_round1_bankjob2 = 0;


  // VAR_INT timer_create_targ2_round1_bankjob2


  $.timer_create_targ2_round1_bankjob2 = 0;


  // VAR_INT targ2_round1_movetime_bankjob2


  $.targ2_round1_movetime_bankjob2 = 0;


  // VAR_INT create_timer_targ3_round1_bankjob2


  $.create_timer_targ3_round1_bankjob2 = 0;


  // VAR_INT timer_create_targ3_round1_bankjob2


  $.timer_create_targ3_round1_bankjob2 = 0;


  // VAR_INT targ3_round1_movetime_bankjob2


  $.targ3_round1_movetime_bankjob2 = 0;

  // New counter stuff


  // VAR_INT score_to_beat_bankjob2


  $.score_to_beat_bankjob2 = 60;


  // VAR_INT targets_really_hit_round1_bank1


  $.targets_really_hit_round1_bank1 = 0;

  // New player score stuff


  $.player_score_bankjob2 = 0;


  $.final_ammo_used_bankjob2 = 0;


  await asyncWait(0);


  Text.LoadMissionText("BANKJ2");


  Shortcut.SetDropoffPointForMission(512.591, -74.900, 9.573, 189.24);

  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSken");
  Streaming.LoadSpecialCharacter(3, "CScamj");
  Streaming.LoadSpecialModel(CUTOBJ01, "gcfan");
  Streaming.LoadSpecialModel(CUTOBJ02, "clchr");


  Streaming.SetAreaVisible(VIS_MALIBU_CLUB);


  Streaming.LoadScene(481.03, -64.21, 8.98);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  Cutscene.Load("bank_2a");


  Cutscene.SetOffset(476.972, -65.499, 8.943);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("CSken");


  $.cs_cam = CutsceneObject.Create(SPECIAL03);
  $.cs_cam.setAnim("CScamj");


  $.cs_clubfan = CutsceneObject.Create(CUTOBJ01);
  Cutscene.SetAnimToLoop("gcfan");
  $.cs_clubfan.setAnim("gcfan");


  $.cs_clubchair = CutsceneObject.Create(CUTOBJ02);
  $.cs_clubchair.setAnim("clchr");


  World.ClearArea(493.1, -82.4, 9.8, 1.0, true /* TRUE */);
  $.player1.setCoordinates(493.1, -82.4, 9.8);
  $.player1.setHeading(220.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 4027) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_A", 10000, 1); //"We need a stick up man. You know one?


  while ($.cs_time < 6132) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_B", 10000, 1); //"Hey, Tommy, Tommy, this stuff keeps you sharp, man."


  while ($.cs_time < 8289) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_C", 10000, 1); //"WoooOOOooo!


  while ($.cs_time < 9182) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_D", 10000, 1); //"I could be your stick up man! Stick 'em up! Stick 'em up!"


  while ($.cs_time < 11691) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_E", 10000, 1); //"You ain't a stick up man, you're an idiot.


  while ($.cs_time < 13719) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_F", 10000, 1); //"Now get yourself a drink and shut up.


  while ($.cs_time < 16291) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_G", 10000, 1); //"Get outta my way! Ye ye ye ow ow.


  while ($.cs_time < 18784) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_N", 10000, 1); //"Relax"



  while ($.cs_time < 19689) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_H", 10000, 1); //"Cam, what do you think?"


  while ($.cs_time < 21204) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_I", 10000, 1); //"Well, the best shooter in this town is a guy named Cassidy."


  while ($.cs_time < 23822) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_J", 10000, 1); //"Is that so?"


  while ($.cs_time < 24473) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_K", 10000, 1); //"Yeah. A military guy, or thinks he is.


  while ($.cs_time < 27111) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_L", 10000, 1); //"I doubt he was ever in the army but he certainly knows how to get hold of guns."


  while ($.cs_time < 30697) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_M", 10000, 1); //"He'll be down at the shooting range."


  while ($.cs_time < 32448) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 32758) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintBig("BEACH3", 3000, 2); //"Vice Point"


  World.ClearExtraColors(false /* FALSE */);


  World.SwitchRubbish(true /* ON */);
  World.SetCarDensityMultiplier(1.0);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  Streaming.LoadScene(493.1, -82.4, 9.8);

  // ****************************************END OF CUTSCENE**********************************


  $.flag_player_in_malibu = 0;


  $.player1.setMood(PLAYER_MOOD_CALM, 60000);

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(2000, 1 /* FADE_IN */);

  // Waiting for the ped models to load


  Text.PrintNow("BJM2_1", 5000, 1); //"Go to the competition and win it!"


  $.radar_blip_coord2_bankjob2 = Blip.AddForCoord(-667.85, 1211.9, 10.08);


  $.sphere_bankjob2 = Sphere.Create(-667.85, 1211.9, 10.08, 1.5);


  $.flag_player_on_bank_2 = 1;


  while (!($.player1.locateOnFoot3D(-667.8, 1221.0, 10.5, 1.5, 1.5, 3.0, true /* TRUE */))) {
    await asyncWait(0);
    if ($.player1.locateOnFoot3D(-667.85, 1211.9, 10.08, 1.5, 1.5, 3.0, false /* FALSE */)) {
      $.sphere_bankjob2.remove();
    }


  }


  $.sphere_bankjob2.remove();


  $.radar_blip_coord2_bankjob2.remove();


  $.player1.setControl(false /* OFF */);


  World.SwitchRubbish(false /* OFF */);


  Streaming.Switch(false /* OFF */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  $.breakout_timer_start = Clock.GetGameTimer();


  $.breakout_diff = 0;


  while (!($.player1.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;


  }


  $.player1.makeSafeForCutscene();


  Cutscene.DisableShadows();

  // ************************************** CUT SCENE TWO ************************************


  Streaming.Switch(false /* OFF */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSphil");
  Streaming.LoadSpecialCharacter(3, "shootra");
  Streaming.LoadSpecialCharacter(4, "shootrb");
  Streaming.LoadSpecialModel(CUTOBJ01, "deagl");
  Streaming.LoadSpecialModel(CUTOBJ02, "cpyth");


  Streaming.LoadScene(-661.91, 1231.87, 10.08);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  Cutscene.Load("bank_2b");


  Cutscene.SetOffset(-666.305, 1225.687, 10.031);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_phil = CutsceneObject.Create(SPECIAL02);
  $.cs_phil.setAnim("CSphil");


  $.cs_shootra = CutsceneObject.Create(SPECIAL03);
  $.cs_shootra.setAnim("shootra");


  $.cs_shootrb = CutsceneObject.Create(SPECIAL04);
  $.cs_shootrb.setAnim("shootrb");


  $.cs_philgun1 = CutsceneObject.Create(CUTOBJ01);
  $.cs_philgun1.setAnim("deagl01");


  $.cs_philgun2 = CutsceneObject.Create(CUTOBJ01);
  $.cs_philgun2.setAnim("deagl02");


  $.cs_gun1 = CutsceneObject.Create(CUTOBJ02);
  $.cs_gun1.setAnim("cpyth01");


  $.cs_gun2 = CutsceneObject.Create(CUTOBJ02);
  $.cs_gun2.setAnim("cpyth02");


  World.ClearArea(-666.46, 1231.72, 10.07, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-666.46, 1231.72, 10.07);
  $.player1.setHeading(84.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.670, 1227.545, 11.559, -667.921, 1227.529, 11.568);
  }


  while ($.cs_time < 3433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.682, 1229.793, 11.764, -667.921, 1229.807, 11.769);
  }


  while ($.cs_time < 11500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.742, 1233.778, 11.661, -667.960, 1233.741, 11.668);
  }


  while ($.cs_time < 12256) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2A", 10000, 1); //"You Phil Cassidy?"


  while ($.cs_time < 13731) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2B", 10000, 1); //"Why?"


  while ($.cs_time < 14800) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.788, 1264.023, 11.613, -667.960, 1234.055, 11.611);
  }


  while ($.cs_time < 15378) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2C", 10000, 1); //"I'm looking for a man who can handle a gun. From this setup, I'm too not convinced."


  while ($.cs_time < 17100) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.763, 1233.782, 11.634, -667.977, 1233.746, 11.665);
  }


  while ($.cs_time < 19500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.790, 1233.966, 11.617, -667.992, 1234.007, 11.600);
  }


  while ($.cs_time < 20669) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2D", 10000, 1); //"Son, I could shoot a fly off your head from 80 feet."


  while ($.cs_time < 24067) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2E", 10000, 1); //"Oh really?"


  while ($.cs_time < 24900) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.723, 1233.882, 11.510, -667.925, 1233.924, 11.507);
  }


  while ($.cs_time < 25633) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.621, 1233.834, 11.589, -667.807, 1233.785, 11.676);
  }


  while ($.cs_time < 25716) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2F", 10000, 1); //"Yeah. I learnt in the army."


  while ($.cs_time < 26500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.651, 1233.901, 11.568, -667.851, 1233.951, 11.575);
  }


  while ($.cs_time < 27333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.597, 1233.878, 11.597, -667.792, 1233.853, 11.688);
  }


  while ($.cs_time < 27997) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2G", 10000, 1); //"Fly shooting real popular in the army? Glad I don't pay tax."


  while ($.cs_time < 28333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.668, 1233.848, 11.601, -667.875, 1233.869, 11.598);
  }


  while ($.cs_time < 29266) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-667.597, 1233.892, 11.522, -667.802, 1233.843, 11.555);
  }


  while ($.cs_time < 31594) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2H", 10000, 1); //"You tryin' to be funny kid? Ha ha ha ha ha! Let's shoot."


  while ($.cs_time < 34852) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2I", 10000, 1); //"Ha ha ha ha ha!"


  while ($.cs_time < 37052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM2_2J", 10000, 1); //"Let's shoot."


  while ($.cs_time < 39168) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 41968) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);


  Streaming.LoadScene(-663.95, 1231.29, 10.08);


  $.flag_player_on_bank_2 = 0;

  // ************************************ END OF CUTSCENE TWO ********************************


  $.player1.setMood(PLAYER_MOOD_CALM, 60000);


  $.player1.shutUp(true /* TRUE */);


  Streaming.RequestModel(MALE01);


  Streaming.RequestModel(tar_gun1);


  Streaming.RequestModel(tar_gun2);


  Streaming.RequestModel(173 /* COLT45 */);


  Streaming.RequestModel(tar_frame);


  Streaming.RequestModel(tar_downleft);


  Streaming.RequestModel(tar_downright);


  Streaming.RequestModel(tar_top);


  Streaming.RequestModel(tar_upleft);


  Streaming.RequestModel(tar_upright);


  Streaming.RequestModel(1385 /* faketarget */);


  Streaming.LoadSpecialCharacter(5, "igphil");


  Audio.LoadMissionAudio(1, "BNK2_1" as any); // Live Ammo


  Audio.LoadMissionAudio(2, "BNK2_2" as any); // Aim 3-2-1 fire


  while (!(Streaming.HasModelLoaded(MALE01)) || !(Streaming.HasModelLoaded(173 /* COLT45 */)) || !(Streaming.HasModelLoaded(tar_gun1)) || !(Streaming.HasSpecialCharacterLoaded(5)) || !(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {


    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(tar_frame)) || !(Streaming.HasModelLoaded(tar_downleft)) || !(Streaming.HasModelLoaded(tar_downright)) || !(Streaming.HasModelLoaded(tar_top)) || !(Streaming.HasModelLoaded(tar_upleft)) || !(Streaming.HasModelLoaded(tar_upright))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(1385 /* faketarget */)) || !(Streaming.HasModelLoaded(tar_gun2))) {
    await asyncWait(0);


  }

  // creates phil


  $.phil_bankjob2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, -665.99, 1234.17, 10.08);


  $.phil_bankjob2.clearThreatSearch();


  $.phil_bankjob2.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 1);


  $.phil_bankjob2.setHeading(90.0);

  // creates other shooters


  $.gunner1_bankjob2 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, -666.29, 1229.32, 10.08);


  $.gunner1_bankjob2.clearThreatSearch();


  $.gunner1_bankjob2.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 1);


  $.gunner1_bankjob2.setHeading(90.0);

  // Creates the invisible target to stick palyer on


  $.object1_bankjob2 = ScriptObject.CreateNoOffset(1385 /* faketarget */, -668.42, 1231.65, 10.08);
  $.object1_bankjob2.dontRemove();
  $.object1_bankjob2.setHeading(90.0);


  $.object2_bankjob2 = ScriptObject.CreateNoOffset(1385 /* faketarget */, -664.73, 1269.09, 9.81);
  $.object2_bankjob2.dontRemove();
  $.object2_bankjob2.setHeading(90.0);


  $.object3_bankjob2 = ScriptObject.CreateNoOffset(1385 /* faketarget */, -677.75, 1272.03, 9.81);
  $.object3_bankjob2.dontRemove();
  $.object3_bankjob2.setHeading(0.0);

  // sets up player1 in 1st person camera mode and locks him in position.


  const _res40 = $.scplayer.getWeaponInSlot(4);
$.slot4_weapon_type_bank2 = _res40.weaponType;
$.slot4_ammo_bank2 = _res40.weaponAmmo;
$.slot4_model_bank2 = _res40.weaponModel;


  $.scplayer.attachToObject($.object1_bankjob2, 0.0, -2.0, 1.0, 0 /* FACING_FORWARD */, 60.0, 2 /* WEAPONTYPE_PISTOL */);
  $.scplayer.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
  $.scplayer.setCurrentWeapon(2 /* WEAPONTYPE_PISTOL */);
  $.player1.setAmmo(2 /* WEAPONTYPE_PISTOL */, 100);
  $.ammo_given_round1_bankjob2 = 100;

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_19", 8000, 1); //"Hit as many targets as you can in the time limit!


  if ($.flag_played_bank2_before == 1) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      // SCM GOTO → mission_skip_bank2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_skip_bank2"); // fallback: would break linear control flow
    }


  }


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_20", 8000, 1); //"When you run out of time or ammo the round is over!


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_24", 8000, 1); //The first target is worth one point.


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_25", 8000, 1); //The second target is worth two points.


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_26", 8000, 1); //The third target is worth three points.


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_2", 8000, 1); //"To exit the round press the ^ button."


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_23", 8000, 1); //"If you leave the shooting range during the competition, you will fail the mission."


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  $.flag_played_bank2_before = 1;
}



async function mission_skip_bank2() {


  $.player1.setControl(true /* ON */);
  Text.PrintNow("BNK2_1", 5000, 1); //"LIVE AMMO"
  Audio.PlayMissionAudio(1); // Live ammo


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  $.blob_flag = 1;


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("BNK2_1"); // LIVE AMMO


  Audio.LoadMissionAudio(1, "BNK2_5" as any); // couldnt hit a barn door


  Audio.PlayMissionAudio(2); // Aim 3-2-1 fire


  Text.PrintNow("BNK2_2", 5000, 1); //"Aim 3-2-1 fire"


  while (!(Audio.HasMissionAudioFinished(2)) || !(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("BNK2_2"); // FIRE


  Audio.LoadMissionAudio(2, "BNK2_4" as any); // Hoooeee player doing well


  $.doing_well_audio_loaded_bankjob2 = 0;


  $.doing_bad_audio_loaded_bankjob2 = 1;


  Hud.DisplayTimer($.$id.timer_round1_bankjob2, TIMER_DOWN);


  Hud.DisplayNthCounterWithString($.score_to_beat_bankjob2, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "BJM2_18");


  Hud.DisplayNthCounterWithString($.player_score_bankjob2, 0 /* COUNTER_DISPLAY_NUMBER */, 1, "BJM2_15");


  TIMERA = 0;


  $.target_moving_sound_bank2 = Sound.AddContinuous(-679.403, 1232.564, 11.105, SOUND_SHOOTING_RANGE_TARGET_MOVING_LOOP);


  while ($.flag_round1_finished_bankjob2 == 0) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      $.flag_round1_finished_bankjob2 = 1;
    }
    if ($.doing_well_audio_loaded_bankjob2 == 0) {
      if (Audio.HasMissionAudioLoaded(2)) {
        $.doing_well_audio_loaded_bankjob2 = 1;
      }


    }
    if ($.doing_well_audio_loaded_bankjob2 == 1) {
      if ($.doing_bad_audio_loaded_bankjob2 == 1) {
        if (TIMERA >= 60000) {
          if ($.counter_hits_scored_round1_bankjob2 >= 20) {
            Audio.PlayMissionAudio(2); // Player doing well
            Text.PrintNow("BNK2_4", 5000, 1); //"Hooeee!"
            $.doing_well_audio_loaded_bankjob2 = 2;
          }
          else {
            Audio.PlayMissionAudio(1); // Player doing bad
            Text.PrintNow("BNK2_5", 5000, 1); //"Couldn't hit a barn door!"
            $.doing_bad_audio_loaded_bankjob2 = 2;
          }


        }


      }


    }
    if ($.doing_well_audio_loaded_bankjob2 == 2) {
      if (Audio.HasMissionAudioFinished(2)) {
        Text.ClearThisPrint("BNK2_4"); // Player doing well
        Audio.ClearMissionAudio(1);
        Audio.ClearMissionAudio(2);
        $.doing_well_audio_loaded_bankjob2 = 3;
      }


    }
    if ($.doing_bad_audio_loaded_bankjob2 == 2) {
      if (Audio.HasMissionAudioFinished(1)) {
        Text.ClearThisPrint("BNK2_5"); // Player doing badly
        Audio.ClearMissionAudio(1);
        Audio.ClearMissionAudio(2);
        $.doing_bad_audio_loaded_bankjob2 = 3;
      }


    }
    if ($.doing_well_audio_loaded_bankjob2 == 3 || $.doing_bad_audio_loaded_bankjob2 == 3) {
      if ($.round_clear_audio_loaded_bankjob2 == 0) {
        Audio.LoadMissionAudio(1, "BNK2_3" as any); // Area clear
        Audio.LoadMissionAudio(2, "BNK2_2" as any); // Aim FIRe
        $.round_clear_audio_loaded_bankjob2 = 1;
      }


    }
    if ($.round_clear_audio_loaded_bankjob2 == 1) {
      if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
        $.round_clear_audio_loaded_bankjob2 = 2;
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
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
          if ($.round_clear_audio_loaded_bankjob2 == 2) {
            Audio.PlayMissionAudio(1); // area clear
            Text.PrintNow("BNK2_3", 5000, 1); //"area clear!"
            $.flag_round1_done_right_bankjob2 = 1;
          }
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
          const _res41 = $.target1_frame_bankjob2.getCoordinates();
$.targ1_x_bankjob2 = _res41.x;
$.targ1_y_bankjob2 = _res41.y;
$.targ1_z_bankjob2 = _res41.z;
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
          const _res42 = $.target1_frame_bankjob2.getCoordinates();
$.targ1_x_bankjob2 = _res42.x;
$.targ1_y_bankjob2 = _res42.y;
$.targ1_z_bankjob2 = _res42.z;
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
          const _res43 = $.target2_frame_bankjob2.getCoordinates();
$.targ2_x_bankjob2 = _res43.x;
$.targ2_y_bankjob2 = _res43.y;
$.targ2_z_bankjob2 = _res43.z;
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
          const _res44 = $.target2_frame_bankjob2.getCoordinates();
$.targ2_x_bankjob2 = _res44.x;
$.targ2_y_bankjob2 = _res44.y;
$.targ2_z_bankjob2 = _res44.z;
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
          const _res45 = $.target3_frame_bankjob2.getCoordinates();
$.targ3_x_bankjob2 = _res45.x;
$.targ3_y_bankjob2 = _res45.y;
$.targ3_z_bankjob2 = _res45.z;
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
          const _res46 = $.target3_frame_bankjob2.getCoordinates();
$.targ3_x_bankjob2 = _res46.x;
$.targ3_y_bankjob2 = _res46.y;
$.targ3_z_bankjob2 = _res46.z;
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
      if (Char.IsDead($.phil_bankjob2)) {
        Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.gunner1_bankjob2)) {
        Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }
      if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
        Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }


    }


  }


  Text.ClearThisPrint("BJM2_19");


  Text.ClearThisPrint("BJM2_20");


  Text.ClearThisPrint("BJM2_2");


  Text.ClearThisPrint("BNK2_3"); // Area clear


  $.ammo_used_round1_bankjob2 = $.ammo_given_round1_bankjob2 - $.ammo_round1_bankjob;


  $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);


  $.scplayer.detachFromCar();


  $.object1_bankjob2.delete();


  Hud.ClearTimer($.$id.timer_round1_bankjob2);


  Text.PrintWithNumberBig("BJM2_4", $.counter_hits_scored_round1_bankjob2, 3000, 1); // Score round 1


  // ***************************************** ROUND TWO *************************************

  // waiting for the player1 to get to round two


  Text.PrintNow("BJM2_9", 2000, 1); //"Get to round two's starting point!


  $.radar_blip_coord3_bankjob2 = Blip.AddForCoord(-664.73, 1269.09, 9.81);


  $.blob_flag = 1;


  while (!($.player1.locateOnFoot3D(-664.73, 1269.09, 9.81, 2.0, 2.0, 2.0, $.blob_flag))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.gunner1_bankjob2)) {
      Text.PrintNow("BJM2_12", 5000, 1); //"One of the competitors is dead"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  $.radar_blip_coord3_bankjob2.remove();


  $.player1.setControl(false /* OFF */);


  if (!(Char.IsDead($.gunner1_bankjob2))) {
    $.gunner1_bankjob2.markAsNoLongerNeeded();
  }


  if (!(Char.IsDead($.phil_bankjob2))) {
    $.phil_bankjob2.setHeading(270.0);
  }

  // player1 is now in the starting area for round 2


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  await asyncWait(500);


  if (Char.IsDead($.phil_bankjob2)) {
    Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
    Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }

  // sets up player1 in 1st person camera mode and locks him in position.


  $.scplayer.attachToObject($.object2_bankjob2, 0.0, 0.0, 1.0, 0 /* FACING_FORWARD */, 60.0, 2 /* WEAPONTYPE_PISTOL */);
  $.player1.setAmmo(2 /* WEAPONTYPE_PISTOL */, 50);
  $.ammo_given_round2_bankjob2 = 50;


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


  Text.PrintNow("BJM2_19", 8000, 1); //"Hit as many targets as you can in the time limit!


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip2_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip2_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_20", 8000, 1); //"When you run out of time or ammo the round is over!


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip2_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip2_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_27", 8000, 1); //"All targets in this round are worth one point.


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip2_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip2_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }
}



async function mission_skip2_bank2() {


  Audio.LoadMissionAudio(2, "BNK2_2" as any);
  Audio.LoadMissionAudio(1, "BNK2_3" as any);


  while (!(Audio.HasMissionAudioLoaded(2)) || !(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  $.player1.setControl(true /* ON */);


  Audio.PlayMissionAudio(2); // Aim 3 2 1 FIRE
  Text.PrintNow("BNK2_2", 4000, 1); //"Aim fire"


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("BNK2_2"); // Aim


  Hud.DisplayTimer($.$id.timer_round2_bankjob2, TIMER_DOWN);

  // Round two


  $.target_moving_sound_bank2 = Sound.AddContinuous(-682.092, 1273.931, 10.818, SOUND_SHOOTING_RANGE_TARGET_MOVING_LOOP);


  while ($.round2_finished_bankjob2 == 0) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      $.round2_finished_bankjob2 = 1;
    }
    $.game_time_round2_bankjob2 = Clock.GetGameTimer();

    // target 1

    if ($.create_timer_targ1_round2_bankjob2 == 0) {
      $.game_time_round2_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ1_round2_bankjob2 = $.game_time_round2_bankjob2;
      $.create_timer_targ1_round2_bankjob2 = 1;
    }
    if ($.create_timer_targ1_round2_bankjob2 == 1) {
      $.targ1_round2_movetime_bankjob2 = $.game_time_round2_bankjob2 - $.timer_create_targ1_round2_bankjob2;
    }
    if ($.targ1_round2_movetime_bankjob2 >= 500) {
      if ($.flag_slot1_round2_filled_bankjob2 == 0) {
        $.target1_round2_bankjob2 = ScriptObject.CreateNoOffset(tar_gun1, $.slot1_x_round2_bankjob2, $.slot1_y_round2_bankjob2, $.slot1_z_round2_bankjob2);
        $.target1_round2_bankjob2.setHeading($.slot1_heading_round2_bankjob2);
        $.flag_target1_dead_round2_bankjob2 = 0;
        $.target1_round2_removed_bankjob2 = 0;
        $.timer_start_targ1_round2_bankjob2 = 0;
        $.flag_slot1_round2_filled_bankjob2 = 1;
      }
      if ($.flag_slot1_round2_filled_bankjob2 == 1) {
        if ($.flag_target1_dead_round2_bankjob2 == 0 && $.target1_round2_removed_bankjob2 == 0) {
          if (!($.target1_round2_bankjob2.hasBeenDamaged())) {
            const _res47 = $.target1_round2_bankjob2.getCoordinates();
$.targ1_round2_x_bankjob2 = _res47.x;
$.targ1_round2_y_bankjob2 = _res47.y;
$.targ1_round2_z_bankjob2 = _res47.z;
            if ($.timer_start_targ1_round2_bankjob2 == 0) {
              if ($.targ1_round2_y_bankjob2 < 1271.36) {
                $.targ1_round2_y_bankjob2 = $.targ1_round2_y_bankjob2 + timed(0.02);
              }
              else {
                if ($.timer_start_targ1_round2_bankjob2 == 0) {
                  $.game_time_round2_bankjob2 = Clock.GetGameTimer();
                  $.time_targ1_round2_in_posit_bankjob2 = $.game_time_round2_bankjob2;
                  $.timer_start_targ1_round2_bankjob2 = 1;
                }


              }


            }
            if ($.timer_start_targ1_round2_bankjob2 == 1) {
              $.delete_targ1_round2_time_bankjob2 = $.game_time_round2_bankjob2 - $.time_targ1_round2_in_posit_bankjob2;
              if ($.delete_targ1_round2_time_bankjob2 >= 800) {
                if ($.targ1_round2_y_bankjob2 > 1268.74) {
                  $.targ1_round2_y_bankjob2 = $.targ1_round2_y_bankjob2 - timed(0.02);
                }
                else {
                  $.target1_round2_bankjob2.delete();
                  $.flag_slot1_round2_filled_bankjob2 = 0;
                  $.create_timer_targ1_round2_bankjob2 = 0;
                  $.target1_round2_removed_bankjob2 = 1;
                }


              }


            }
            if ($.target1_round2_removed_bankjob2 == 0 && $.flag_target1_dead_round2_bankjob2 == 0) {
              $.target1_round2_bankjob2.setCoordinates($.targ1_round2_x_bankjob2, $.targ1_round2_y_bankjob2, $.targ1_round2_z_bankjob2);
            }


          }
          else {
            if ($.target1_round2_removed_bankjob2 == 0) {
              if ($.target1_round2_bankjob2.hasBeenDamaged()) {
                ++$.counter_hits_scored_round2_bankjob2;
                ++$.player_score_bankjob2;
                $.target1_round2_bankjob2.delete();
                $.create_timer_targ1_round2_bankjob2 = 0;
                $.flag_slot1_round2_filled_bankjob2 = 0;
                $.flag_target1_dead_round2_bankjob2 = 1;
              }


            }


          }


        }


      }


    }

    // Target 2

    if ($.create_timer_targ2_round2_bankjob2 == 0) {
      $.game_time_round2_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ2_round2_bankjob2 = $.game_time_round2_bankjob2;
      $.create_timer_targ2_round2_bankjob2 = 1;
    }
    if ($.create_timer_targ2_round2_bankjob2 == 1) {
      $.targ2_round2_movetime_bankjob2 = $.game_time_round2_bankjob2 - $.timer_create_targ2_round2_bankjob2;
    }
    if ($.targ2_round2_movetime_bankjob2 >= 4000) {
      if ($.flag_slot2_round2_filled_bankjob2 == 0) {
        $.target2_round2_bankjob2 = ScriptObject.CreateNoOffset(tar_gun2, $.slot2_x_round2_bankjob2, $.slot2_y_round2_bankjob2, $.slot2_z_round2_bankjob2);
        $.target2_round2_bankjob2.setHeading($.slot2_heading_round2_bankjob2);
        $.flag_target2_dead_round2_bankjob2 = 0;
        $.target2_round2_removed_bankjob2 = 0;
        $.timer_start_targ2_round2_bankjob2 = 0;
        $.flag_slot2_round2_filled_bankjob2 = 1;
      }


    }
    if ($.flag_slot2_round2_filled_bankjob2 == 1) {
      if ($.flag_target2_dead_round2_bankjob2 == 0 && $.target2_round2_removed_bankjob2 == 0) {
        if (!($.target2_round2_bankjob2.hasBeenDamaged())) {
          const _res48 = $.target2_round2_bankjob2.getCoordinates();
$.targ2_round2_x_bankjob2 = _res48.x;
$.targ2_round2_y_bankjob2 = _res48.y;
$.targ2_round2_z_bankjob2 = _res48.z;
          if ($.timer_start_targ2_round2_bankjob2 == 0) {
            if ($.targ2_round2_y_bankjob2 < 1273.73) {
              $.targ2_round2_y_bankjob2 = $.targ2_round2_y_bankjob2 + timed(0.02);
            }
            else {
              if ($.timer_start_targ2_round2_bankjob2 == 0) {
                $.game_time_round2_bankjob2 = Clock.GetGameTimer();
                $.time_targ2_round2_in_posit_bankjob2 = $.game_time_round2_bankjob2;
                $.timer_start_targ2_round2_bankjob2 = 1;
              }


            }


          }
          if ($.timer_start_targ2_round2_bankjob2 == 1) {
            $.delete_targ2_round2_time_bankjob2 = $.game_time_round2_bankjob2 - $.time_targ2_round2_in_posit_bankjob2;
            if ($.delete_targ2_round2_time_bankjob2 >= 1000) {
              if ($.targ2_round2_y_bankjob2 > 1272.55) {
                $.targ2_round2_y_bankjob2 = $.targ2_round2_y_bankjob2 - timed(0.02);
              }
              else {
                $.target2_round2_bankjob2.delete();
                $.create_timer_targ2_round2_bankjob2 = 0;
                $.flag_slot2_round2_filled_bankjob2 = 0;
                $.target2_round2_removed_bankjob2 = 1;
              }


            }


          }
          if ($.target2_round2_removed_bankjob2 == 0 && $.flag_target2_dead_round2_bankjob2 == 0) {
            $.target2_round2_bankjob2.setCoordinates($.targ2_round2_x_bankjob2, $.targ2_round2_y_bankjob2, $.targ2_round2_z_bankjob2);
          }


        }
        else {
          if ($.target2_round2_removed_bankjob2 == 0) {
            if ($.target2_round2_bankjob2.hasBeenDamaged()) {
              ++$.counter_hits_scored_round2_bankjob2;
              ++$.player_score_bankjob2;
              $.target2_round2_bankjob2.delete();
              $.create_timer_targ2_round2_bankjob2 = 0;
              $.flag_slot2_round2_filled_bankjob2 = 0;
              $.flag_target2_dead_round2_bankjob2 = 1;
            }


          }


        }


      }


    }

    // Target 3

    if ($.create_timer_targ3_round2_bankjob2 == 0) {
      $.game_time_round2_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ3_round2_bankjob2 = $.game_time_round2_bankjob2;
      $.create_timer_targ3_round2_bankjob2 = 1;
    }
    if ($.create_timer_targ3_round2_bankjob2 == 1) {
      $.targ3_round2_movetime_bankjob2 = $.game_time_round2_bankjob2 - $.timer_create_targ3_round2_bankjob2;
    }
    if ($.targ3_round2_movetime_bankjob2 >= 1300) {
      if ($.flag_slot3_round2_filled_bankjob2 == 0) {
        $.target3_round2_bankjob2 = ScriptObject.CreateNoOffset(tar_gun1, $.slot3_x_round2_bankjob2, $.slot3_y_round2_bankjob2, $.slot3_z_round2_bankjob2);
        $.target3_round2_bankjob2.setHeading($.slot3_heading_round2_bankjob2);
        $.flag_target3_dead_round2_bankjob2 = 0;
        $.target3_round2_removed_bankjob2 = 0;
        $.timer_start_targ3_round2_bankjob2 = 0;
        $.flag_slot3_round2_filled_bankjob2 = 1;
      }


    }
    if ($.flag_slot3_round2_filled_bankjob2 == 1) {
      if ($.flag_target3_dead_round2_bankjob2 == 0 && $.target3_round2_removed_bankjob2 == 0) {
        if (!($.target3_round2_bankjob2.hasBeenDamaged())) {
          const _res49 = $.target3_round2_bankjob2.getCoordinates();
$.targ3_round2_x_bankjob2 = _res49.x;
$.targ3_round2_y_bankjob2 = _res49.y;
$.targ3_round2_z_bankjob2 = _res49.z;
          if ($.timer_start_targ3_round2_bankjob2 == 0) {
            if ($.targ3_round2_y_bankjob2 < 1276.80) {
              $.targ3_round2_y_bankjob2 = $.targ3_round2_y_bankjob2 + timed(0.02);
            }
            else {
              if ($.timer_start_targ3_round2_bankjob2 == 0) {
                $.game_time_round2_bankjob2 = Clock.GetGameTimer();
                $.time_targ3_round2_in_posit_bankjob2 = $.game_time_round2_bankjob2;
                $.timer_start_targ3_round2_bankjob2 = 1;
              }


            }


          }
          if ($.timer_start_targ3_round2_bankjob2 == 1) {
            $.delete_targ3_round2_time_bankjob2 = $.game_time_round2_bankjob2 - $.time_targ3_round2_in_posit_bankjob2;
            if ($.delete_targ3_round2_time_bankjob2 >= 1500) {
              if ($.targ3_round2_y_bankjob2 > 1275.01) {
                $.targ3_round2_y_bankjob2 = $.targ3_round2_y_bankjob2 - timed(0.02);
              }
              else {
                $.target3_round2_bankjob2.delete();
                $.create_timer_targ3_round2_bankjob2 = 0;
                $.flag_slot3_round2_filled_bankjob2 = 0;
                $.target3_round2_removed_bankjob2 = 1;
              }


            }


          }
          if ($.target3_round2_removed_bankjob2 == 0 && $.flag_target3_dead_round2_bankjob2 == 0) {
            $.target3_round2_bankjob2.setCoordinates($.targ3_round2_x_bankjob2, $.targ3_round2_y_bankjob2, $.targ3_round2_z_bankjob2);
          }


        }
        else {
          if ($.target3_round2_removed_bankjob2 == 0) {
            if ($.target3_round2_bankjob2.hasBeenDamaged()) {
              ++$.counter_hits_scored_round2_bankjob2;
              ++$.player_score_bankjob2;
              $.target3_round2_bankjob2.delete();
              $.create_timer_targ3_round2_bankjob2 = 0;
              $.flag_slot3_round2_filled_bankjob2 = 0;
              $.flag_target3_dead_round2_bankjob2 = 1;
            }


          }


        }


      }


    }

    // Target4

    if ($.create_timer_targ4_round2_bankjob2 == 0) {
      $.game_time_round2_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ4_round2_bankjob2 = $.game_time_round2_bankjob2;
      $.create_timer_targ4_round2_bankjob2 = 1;
    }
    if ($.create_timer_targ4_round2_bankjob2 == 1) {
      $.targ4_round2_movetime_bankjob2 = $.game_time_round2_bankjob2 - $.timer_create_targ4_round2_bankjob2;
    }
    if ($.targ4_round2_movetime_bankjob2 >= 2800) {
      if ($.flag_slot4_round2_filled_bankjob2 == 0) {
        $.target4_round2_bankjob2 = ScriptObject.CreateNoOffset(tar_gun2, $.slot4_x_round2_bankjob2, $.slot4_y_round2_bankjob2, $.slot4_z_round2_bankjob2);
        $.target4_round2_bankjob2.setHeading($.slot4_heading_round2_bankjob2);
        $.flag_target4_dead_round2_bankjob2 = 0;
        $.target4_round2_removed_bankjob2 = 0;
        $.timer_start_targ4_round2_bankjob2 = 0;
        $.flag_slot4_round2_filled_bankjob2 = 1;
      }


    }
    if ($.flag_slot4_round2_filled_bankjob2 == 1) {
      if ($.flag_target4_dead_round2_bankjob2 == 0 && $.target4_round2_removed_bankjob2 == 0) {
        if (!($.target4_round2_bankjob2.hasBeenDamaged())) {
          const _res50 = $.target4_round2_bankjob2.getCoordinates();
$.targ4_round2_x_bankjob2 = _res50.x;
$.targ4_round2_y_bankjob2 = _res50.y;
$.targ4_round2_z_bankjob2 = _res50.z;
          if ($.timer_start_targ4_round2_bankjob2 == 0) {
            if ($.targ4_round2_y_bankjob2 > 1276.80) {
              $.targ4_round2_y_bankjob2 = $.targ4_round2_y_bankjob2 - timed(0.02);
            }
            else {
              if ($.timer_start_targ4_round2_bankjob2 == 0) {
                $.game_time_round2_bankjob2 = Clock.GetGameTimer();
                $.time_targ4_round2_in_posit_bankjob2 = $.game_time_round2_bankjob2;
                $.timer_start_targ4_round2_bankjob2 = 1;
              }


            }


          }
          if ($.timer_start_targ4_round2_bankjob2 == 1) {
            $.delete_targ4_round2_time_bankjob2 = $.game_time_round2_bankjob2 - $.time_targ4_round2_in_posit_bankjob2;
            if ($.delete_targ4_round2_time_bankjob2 >= 1250) {
              if ($.targ4_round2_y_bankjob2 < 1281.10) {
                $.targ4_round2_y_bankjob2 = $.targ4_round2_y_bankjob2 + timed(0.02);
              }
              else {
                $.target4_round2_bankjob2.delete();
                $.create_timer_targ4_round2_bankjob2 = 0;
                $.flag_slot4_round2_filled_bankjob2 = 0;
                $.target4_round2_removed_bankjob2 = 1;
              }


            }


          }
          if ($.target4_round2_removed_bankjob2 == 0 && $.flag_target4_dead_round2_bankjob2 == 0) {
            $.target4_round2_bankjob2.setCoordinates($.targ4_round2_x_bankjob2, $.targ4_round2_y_bankjob2, $.targ4_round2_z_bankjob2);
          }


        }
        else {
          if ($.target4_round2_removed_bankjob2 == 0) {
            if ($.target4_round2_bankjob2.hasBeenDamaged()) {
              ++$.counter_hits_scored_round2_bankjob2;
              ++$.player_score_bankjob2;
              $.target4_round2_bankjob2.delete();
              $.create_timer_targ4_round2_bankjob2 = 0;
              $.flag_slot4_round2_filled_bankjob2 = 0;
              $.flag_target4_dead_round2_bankjob2 = 1;
            }


          }


        }


      }


    }

    // Target5 Round2

    if ($.create_timer_targ5_round2_bankjob2 == 0) {
      $.game_time_round2_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ5_round2_bankjob2 = $.game_time_round2_bankjob2;
      $.create_timer_targ5_round2_bankjob2 = 1;
    }
    if ($.create_timer_targ5_round2_bankjob2 == 1) {
      $.targ5_round2_movetime_bankjob2 = $.game_time_round2_bankjob2 - $.timer_create_targ5_round2_bankjob2;
    }
    if ($.targ5_round2_movetime_bankjob2 >= 600) {
      if ($.flag_slot5_round2_filled_bankjob2 == 0) {
        $.target5_round2_bankjob2 = ScriptObject.CreateNoOffset(tar_gun1, $.slot5_x_round2_bankjob2, $.slot5_y_round2_bankjob2, $.slot5_z_round2_bankjob2);
        $.target5_round2_bankjob2.setHeading($.slot5_heading_round2_bankjob2);
        $.flag_target5_dead_round2_bankjob2 = 0;
        $.target5_round2_removed_bankjob2 = 0;
        $.timer_start_targ5_round2_bankjob2 = 0;
        $.flag_slot5_round2_filled_bankjob2 = 1;
      }


    }
    if ($.flag_slot5_round2_filled_bankjob2 == 1) {
      if ($.flag_target5_dead_round2_bankjob2 == 0 && $.target5_round2_removed_bankjob2 == 0) {
        if (!($.target5_round2_bankjob2.hasBeenDamaged())) {
          const _res51 = $.target5_round2_bankjob2.getCoordinates();
$.targ5_round2_x_bankjob2 = _res51.x;
$.targ5_round2_y_bankjob2 = _res51.y;
$.targ5_round2_z_bankjob2 = _res51.z;
          if ($.timer_start_targ5_round2_bankjob2 == 0) {
            if ($.targ5_round2_y_bankjob2 > 1273.87) {
              $.targ5_round2_y_bankjob2 = $.targ5_round2_y_bankjob2 - timed(0.02);
            }
            else {
              if ($.timer_start_targ5_round2_bankjob2 == 0) {
                $.game_time_round2_bankjob2 = Clock.GetGameTimer();
                $.time_targ5_round2_in_posit_bankjob2 = $.game_time_round2_bankjob2;
                $.timer_start_targ5_round2_bankjob2 = 1;
              }


            }


          }
          if ($.timer_start_targ5_round2_bankjob2 == 1) {
            $.delete_targ5_round2_time_bankjob2 = $.game_time_round2_bankjob2 - $.time_targ5_round2_in_posit_bankjob2;
            if ($.delete_targ5_round2_time_bankjob2 >= 1500) {
              if ($.targ5_round2_y_bankjob2 < 1275.25) {
                $.targ5_round2_y_bankjob2 = $.targ5_round2_y_bankjob2 + timed(0.02);
              }
              else {
                $.target5_round2_bankjob2.delete();
                $.create_timer_targ5_round2_bankjob2 = 0;
                $.flag_slot5_round2_filled_bankjob2 = 0;
                $.target5_round2_removed_bankjob2 = 1;
              }


            }


          }
          if ($.target5_round2_removed_bankjob2 == 0 && $.flag_target5_dead_round2_bankjob2 == 0) {
            $.target5_round2_bankjob2.setCoordinates($.targ5_round2_x_bankjob2, $.targ5_round2_y_bankjob2, $.targ5_round2_z_bankjob2);
          }


        }
        else {
          if ($.target5_round2_removed_bankjob2 == 0) {
            if ($.target5_round2_bankjob2.hasBeenDamaged()) {
              ++$.counter_hits_scored_round2_bankjob2;
              ++$.player_score_bankjob2;
              $.target5_round2_bankjob2.delete();
              $.create_timer_targ5_round2_bankjob2 = 0;
              $.flag_slot5_round2_filled_bankjob2 = 0;
              $.flag_target5_dead_round2_bankjob2 = 1;
            }


          }


        }


      }


    }

    // Target6 Round2

    if ($.create_timer_targ6_round2_bankjob2 == 0) {
      $.game_time_round2_bankjob2 = Clock.GetGameTimer();
      $.timer_create_targ6_round2_bankjob2 = $.game_time_round2_bankjob2;
      $.create_timer_targ6_round2_bankjob2 = 1;
    }
    if ($.create_timer_targ6_round2_bankjob2 == 1) {
      $.targ6_round2_movetime_bankjob2 = $.game_time_round2_bankjob2 - $.timer_create_targ6_round2_bankjob2;
    }
    if ($.targ6_round2_movetime_bankjob2 >= 2000) {
      if ($.flag_slot6_round2_filled_bankjob2 == 0) {
        $.target6_round2_bankjob2 = ScriptObject.CreateNoOffset(tar_gun1, $.slot6_x_round2_bankjob2, $.slot6_y_round2_bankjob2, $.slot6_z_round2_bankjob2);
        $.target6_round2_bankjob2.setHeading($.slot6_heading_round2_bankjob2);
        $.flag_target6_dead_round2_bankjob2 = 0;
        $.target6_round2_removed_bankjob2 = 0;
        $.timer_start_targ6_round2_bankjob2 = 0;
        $.flag_slot6_round2_filled_bankjob2 = 1;
      }


    }
    if ($.flag_slot6_round2_filled_bankjob2 == 1) {
      if ($.flag_target6_dead_round2_bankjob2 == 0 && $.target6_round2_removed_bankjob2 == 0) {
        if (!($.target6_round2_bankjob2.hasBeenDamaged())) {
          const _res52 = $.target6_round2_bankjob2.getCoordinates();
$.targ6_round2_x_bankjob2 = _res52.x;
$.targ6_round2_y_bankjob2 = _res52.y;
$.targ6_round2_z_bankjob2 = _res52.z;
          if ($.timer_start_targ6_round2_bankjob2 == 0) {
            if ($.targ6_round2_y_bankjob2 > 1270.67) {
              $.targ6_round2_y_bankjob2 = $.targ6_round2_y_bankjob2 - timed(0.02);
            }
            else {
              if ($.timer_start_targ6_round2_bankjob2 == 0) {
                $.game_time_round2_bankjob2 = Clock.GetGameTimer();
                $.time_targ6_round2_in_posit_bankjob2 = $.game_time_round2_bankjob2;
                $.timer_start_targ6_round2_bankjob2 = 1;
              }


            }


          }
          if ($.timer_start_targ6_round2_bankjob2 == 1) {
            $.delete_targ6_round2_time_bankjob2 = $.game_time_round2_bankjob2 - $.time_targ6_round2_in_posit_bankjob2;
            if ($.delete_targ6_round2_time_bankjob2 >= 500) {
              if ($.targ6_round2_y_bankjob2 < 1272.29) {
                $.targ6_round2_y_bankjob2 = $.targ6_round2_y_bankjob2 + timed(0.02);
              }
              else {
                $.target6_round2_bankjob2.delete();
                $.create_timer_targ6_round2_bankjob2 = 0;
                $.flag_slot6_round2_filled_bankjob2 = 0;
                $.target6_round2_removed_bankjob2 = 1;
              }


            }


          }
          if ($.target6_round2_removed_bankjob2 == 0 && $.flag_target6_dead_round2_bankjob2 == 0) {
            $.target6_round2_bankjob2.setCoordinates($.targ6_round2_x_bankjob2, $.targ6_round2_y_bankjob2, $.targ6_round2_z_bankjob2);
          }


        }
        else {
          if ($.target6_round2_removed_bankjob2 == 0) {
            if ($.target6_round2_bankjob2.hasBeenDamaged()) {
              ++$.counter_hits_scored_round2_bankjob2;
              ++$.player_score_bankjob2;
              $.target6_round2_bankjob2.delete();
              $.create_timer_targ6_round2_bankjob2 = 0;
              $.flag_slot6_round2_filled_bankjob2 = 0;
              $.flag_target6_dead_round2_bankjob2 = 1;
            }


          }


        }


      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    $.player1.clearWantedLevel();
    $.ammo_round2_bankjob2 = $.player1.getAmmoInWeapon(2 /* WEAPONTYPE_PISTOL */);
    if ($.timer_round2_bankjob2 == 0 || $.ammo_round2_bankjob2 == 0) {
      if ($.flag_time_out_round2_bank2 == 0) {
        TIMERA = 0;
        $.flag_time_out_round2_bank2 = 1;
      }
      else {
        if (TIMERA > 200) {
          Audio.PlayMissionAudio(1); // Area clear
          Text.PrintNow("BNK2_3", 5000, 1); //Area clear!"
          $.flag_round2_done_right_bankjob2 = 1;
          $.round2_finished_bankjob2 = 1;
        }


      }


    }


  }


  $.target_moving_sound_bank2.remove();


  if ($.flag_round2_done_right_bankjob2 == 1) {
    while (!(Audio.HasMissionAudioFinished(1))) {
      await asyncWait(0);
      if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
        Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.phil_bankjob2)) {
        Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }


    }


  }


  Text.PrintWithNumberBig("BJM2_6", $.counter_hits_scored_round2_bankjob2, 5000, 1); // targets hit round two


  $.score_round2_bankjob2 = $.counter_hits_scored_round2_bankjob2;


  Text.ClearThisPrint("BNK2_3");


  $.ammo_used_round2_bankjob2 = $.ammo_given_round2_bankjob2 - $.ammo_round2_bankjob2;

  // removes the wepaon from the player1


  $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);


  $.scplayer.detachFromCar();


  $.object2_bankjob2.delete();


  $.scplayer.setCoordinates(-664.73, 1269.09, 9.81);


  Hud.ClearTimer($.$id.timer_round2_bankjob2);

  // *************************** PLAYER MOVES ON TO ROUND3  **********************************


  Text.PrintNow("BJM2_14", 5000, 1); //"move to the next area!"


  $.radar_blip_area3_bankjob2 = Blip.AddForCoord(-677.75, 1272.03, 9.81);


  Audio.LoadMissionAudio(1, "BNK2_3" as any); // Round clear
  Audio.LoadMissionAudio(2, "BNK2_2" as any); // Aim


  $.blob_flag = 1;


  while (!($.player1.locateOnFoot3D(-677.75, 1272.03, 9.81, 2.0, 2.0, 2.0, $.blob_flag)) || !(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  $.radar_blip_area3_bankjob2.remove();


  $.player1.setControl(false /* OFF */);


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  await asyncWait(500);


  if (Char.IsDead($.phil_bankjob2)) {
    Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
    Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  $.scplayer.attachToObject($.object3_bankjob2, 0.0, 0.0, 1.0, 0 /* FACING_FORWARD */, 50.0, 2 /* WEAPONTYPE_PISTOL */);
  $.player1.setAmmo(2 /* WEAPONTYPE_PISTOL */, 30);
  $.ammo_given_round3_bankjob2 = 30;


  Text.ClearThisBigPrint("BJM2_6");


  $.target1_round2_bankjob2.delete();


  $.target2_round2_bankjob2.delete();


  $.target3_round2_bankjob2.delete();


  $.target4_round2_bankjob2.delete();


  $.target5_round2_bankjob2.delete();


  $.target6_round2_bankjob2.delete();


  Text.PrintNow("BJM2_19", 8000, 1); //"Hit as many targets as you can in the time limit!


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip3_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip3_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_20", 8000, 1); //"When you run out of time or ammo the round is over!


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip3_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip3_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BJM2_27", 8000, 1); //"All targets in this round are worth one point.


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    if ($.flag_played_bank2_before == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip3_bank2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip3_bank2"); // fallback: would break linear control flow
      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }
}



async function mission_skip3_bank2() {


  $.player1.setControl(true /* ON */);

  // ROUND2 PART2


  Audio.PlayMissionAudio(2); // Fire
  Text.PrintNow("BNK2_2", 4000, 1); //"AIM FIRE"


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("BNK2_2"); // AIM FIRE


  TIMERB = 0;


  Hud.DisplayTimer($.$id.timer_round3_bankjob2, TIMER_DOWN);


  $.target_moving_sound_bank2 = Sound.AddContinuous(-670.111, 1291.234, 10.818, SOUND_SHOOTING_RANGE_TARGET_MOVING_LOOP);


  while ($.round3_finished_bankjob2 == 0) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }

    // Radnom slots to move

    if ($.flag_choose_slots_bankjob2 == 0) {
      if ($.target1_to_move_this_time_bankjob2 == 0) {
        $.target_number_bankjob2 = 0;
        $.target_number_bankjob2 = Math.RandomIntInRange(1, 8);
        $.targ_to_move1_bankjob2 = $.target_number_bankjob2;
        $.target1_to_move_this_time_bankjob2 = 1;
      }
      if ($.target1_to_move_this_time_bankjob2 == 1) {
        if ($.target2_to_move_this_time_bankjob2 == 0) {
          $.target_number_bankjob2 = 0;
          $.target_number_bankjob2 = Math.RandomIntInRange(1, 8);
          if (!($.target_number_bankjob2 == $.targ_to_move1_bankjob2)) {
            $.targ_to_move2_bankjob2 = $.target_number_bankjob2;
            $.target2_to_move_this_time_bankjob2 = 1;
          }
          else {
            $.target2_to_move_this_time_bankjob2 = 0;
          }


        }


      }
      if ($.target2_to_move_this_time_bankjob2 == 1) {
        if ($.target3_to_move_this_time_bankjob2 == 0) {
          $.target_number_bankjob2 = 0;
          $.target_number_bankjob2 = Math.RandomIntInRange(1, 8);
          if (!($.target_number_bankjob2 == $.targ_to_move1_bankjob2) && !($.target_number_bankjob2 == $.targ_to_move2_bankjob2)) {
            $.targ_to_move3_bankjob2 = $.target_number_bankjob2;
            $.target3_to_move_this_time_bankjob2 = 1;
          }
          else {
            $.target3_to_move_this_time_bankjob2 = 0;
          }


        }


      }


    }
    if ($.target1_to_move_this_time_bankjob2 == 1 && $.target2_to_move_this_time_bankjob2 == 1 && $.target3_to_move_this_time_bankjob2 == 1) {
      $.flag_choose_slots_bankjob2 = 1;
    }
    if ($.counter_slot_free_bankjob2 == 3) {
      $.slot7_filled_round3_bankjob2 = 0;
      $.slot8_filled_round3_bankjob2 = 0;
      $.slot9_filled_round3_bankjob2 = 0;
      $.slot10_filled_round3_bankjob2 = 0;
      $.slot11_filled_round3_bankjob2 = 0;
      $.slot12_filled_round3_bankjob2 = 0;
      $.slot13_filled_round3_bankjob2 = 0;
      $.target9_round3_been_left_bank2 = 0;
      $.target10_round3_been_left_bank2 = 0;
      $.target11_round3_been_down_bank2 = 0;
      $.target12_round3_been_left_bank2 = 0;
      $.target13_round3_been_left_bank2 = 0;
      $.target1_to_move_this_time_bankjob2 = 0;
      $.target2_to_move_this_time_bankjob2 = 0;
      $.target3_to_move_this_time_bankjob2 = 0;
      $.flag_choose_slots_bankjob2 = 0;
      $.counter_slot_free_bankjob2 = 0;
    }
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      $.round3_finished_bankjob2 = 1;
    }

    //GET_GAME_TIMER game_time_round3_bankjob2

    // Target checking stuff

    // Target7 Round2

    if ($.flag_choose_slots_bankjob2 == 1) {
      if ($.targ_to_move1_bankjob2 == 1 || $.targ_to_move2_bankjob2 == 1 || $.targ_to_move3_bankjob2 == 1) {
        if ($.slot7_filled_round3_bankjob2 == 0) {
          $.target7_round3_bankjob2 = ScriptObject.CreateNoOffset(tar_gun2, $.slot7_round3_x_bankjob2, $.slot7_round3_y_bankjob2, $.slot7_round3_z_bankjob2);
          $.target7_round3_bankjob2.setHeading(0.0);
          $.target7_round3_delete_bankjob2 = 0;
          $.target7_round3_dead_bankjob2 = 0;
          $.target7_round3_travel_bank2 = 0;
          $.slot7_filled_round3_bankjob2 = 1;
        }


      }
      if ($.slot7_filled_round3_bankjob2 == 1) {
        if ($.target7_round3_dead_bankjob2 == 0) {
          if (!($.target7_round3_bankjob2.hasBeenDamaged())) {
            const _res53 = $.target7_round3_bankjob2.getCoordinates();
$.targ7_round3_x_bankjob2 = _res53.x;
$.targ7_round3_y_bankjob2 = _res53.y;
$.targ7_round3_z_bankjob2 = _res53.z;
            if ($.target7_round3_travel_bank2 == 0) {
              if ($.targ7_round3_x_bankjob2 <= -676.53) {
                $.target7_round3_travel_bank2 = 1;
              }
              else {
                $.targ7_round3_x_bankjob2 = $.targ7_round3_x_bankjob2 - timed(0.03);
              }


            }
            else {
              if ($.targ7_round3_x_bankjob2 >= -674.16) {
                $.target7_round3_delete_bankjob2 = 1;
                $.target7_round3_travel_bank2 = 0;
              }
              else {
                $.targ7_round3_x_bankjob2 = $.targ7_round3_x_bankjob2 + timed(0.03);
              }


            }
            if ($.target7_round3_delete_bankjob2 == 1) {
              $.target7_round3_bankjob2.delete();
              ++$.counter_slot_free_bankjob2;
              $.target7_round3_dead_bankjob2 = 1;
            }
            else {
              $.target7_round3_bankjob2.setCoordinates($.targ7_round3_x_bankjob2, $.targ7_round3_y_bankjob2, $.targ7_round3_z_bankjob2);
            }


          }
          else {
            if ($.target7_round3_bankjob2.hasBeenDamaged()) {
              $.target7_round3_bankjob2.delete();
              ++$.counter_hits_scored_round3_bankjob2;
              ++$.player_score_bankjob2;
              ++$.counter_slot_free_bankjob2;
              $.target7_round3_dead_bankjob2 = 1;
            }


          }


        }


      }

      // Target 8

      if ($.targ_to_move1_bankjob2 == 2 || $.targ_to_move2_bankjob2 == 2 || $.targ_to_move3_bankjob2 == 2) {
        if ($.slot8_filled_round3_bankjob2 == 0) {
          $.target8_round3_bankjob2 = ScriptObject.CreateNoOffset(tar_gun1, $.slot8_round3_x_bankjob2, $.slot8_round3_y_bankjob2, $.slot8_round3_z_bankjob2);
          $.target8_round3_bankjob2.setHeading(0.0);
          $.target8_round3_delete_bankjob2 = 0;
          $.target8_round3_dead_bankjob2 = 0;
          $.target8_round3_travel_bank2 = 0;
          $.slot8_filled_round3_bankjob2 = 1;
        }


      }
      if ($.slot8_filled_round3_bankjob2 == 1) {
        if ($.target8_round3_dead_bankjob2 == 0) {
          if (!($.target8_round3_bankjob2.hasBeenDamaged())) {
            const _res54 = $.target8_round3_bankjob2.getCoordinates();
$.targ8_round3_x_bankjob2 = _res54.x;
$.targ8_round3_y_bankjob2 = _res54.y;
$.targ8_round3_z_bankjob2 = _res54.z;
            if ($.target8_round3_travel_bank2 == 0) {
              if ($.targ8_round3_x_bankjob2 <= -677.95) {
                $.target8_round3_travel_bank2 = 1;
              }
              else {
                $.targ8_round3_x_bankjob2 = $.targ8_round3_x_bankjob2 - timed(0.04);
              }


            }
            else {
              if ($.targ8_round3_x_bankjob2 >= -673.46) {
                $.target8_round3_delete_bankjob2 = 1;
                $.target8_round3_travel_bank2 = 0;
              }
              else {
                $.targ8_round3_x_bankjob2 = $.targ8_round3_x_bankjob2 + timed(0.04);
              }


            }
            if ($.target8_round3_delete_bankjob2 == 1) {
              $.target8_round3_bankjob2.delete();
              ++$.counter_slot_free_bankjob2;
              $.target8_round3_dead_bankjob2 = 1;
            }
            else {
              $.target8_round3_bankjob2.setCoordinates($.targ8_round3_x_bankjob2, $.targ8_round3_y_bankjob2, $.targ8_round3_z_bankjob2);
            }


          }
          else {
            if ($.target8_round3_bankjob2.hasBeenDamaged()) {
              $.target8_round3_bankjob2.delete();
              ++$.counter_hits_scored_round3_bankjob2;
              ++$.player_score_bankjob2;
              ++$.counter_slot_free_bankjob2;
              $.target8_round3_dead_bankjob2 = 1;
            }


          }


        }


      }

      // target 9

      if ($.targ_to_move1_bankjob2 == 3 || $.targ_to_move2_bankjob2 == 3 || $.targ_to_move3_bankjob2 == 3) {


        if ($.slot9_filled_round3_bankjob2 == 0) {
          $.target9_round3_bankjob2 = ScriptObject.CreateNoOffset(tar_gun1, $.slot9_round3_x_bankjob2, $.slot9_round3_y_bankjob2, $.slot9_round3_z_bankjob2);
          $.target9_round3_bankjob2.setHeading(0.0);
          $.target9_round3_delete_bankjob2 = 0;
          $.target9_round3_dead_bankjob2 = 0;
          $.target9_round3_travel_bank2 = 0;
          $.slot9_filled_round3_bankjob2 = 1;
        }


      }
      if ($.slot9_filled_round3_bankjob2 == 1) {
        if ($.target9_round3_dead_bankjob2 == 0) {
          if (!($.target9_round3_bankjob2.hasBeenDamaged())) {
            const _res55 = $.target9_round3_bankjob2.getCoordinates();
$.targ9_round3_x_bankjob2 = _res55.x;
$.targ9_round3_y_bankjob2 = _res55.y;
$.targ9_round3_z_bankjob2 = _res55.z;
            if ($.target9_round3_travel_bank2 == 0) {
              if ($.targ9_round3_x_bankjob2 <= -683.24) {
                if ($.target9_round3_been_left_bank2 == 1) {
                  $.target9_round3_delete_bankjob2 = 1;
                }
                $.target9_round3_travel_bank2 = 1;
              }
              else {
                $.targ9_round3_x_bankjob2 = $.targ9_round3_x_bankjob2 - timed(0.06);
              }


            }
            else {
              if ($.targ9_round3_x_bankjob2 >= -680.49) {
                $.target9_round3_travel_bank2 = 0;
                $.target9_round3_been_left_bank2 = 1;
              }
              else {
                $.targ9_round3_x_bankjob2 = $.targ9_round3_x_bankjob2 + timed(0.06);
              }


            }
            if ($.target9_round3_delete_bankjob2 == 1) {
              $.target9_round3_bankjob2.delete();
              ++$.counter_slot_free_bankjob2;
              $.target9_round3_dead_bankjob2 = 1;
            }
            else {
              $.target9_round3_bankjob2.setCoordinates($.targ9_round3_x_bankjob2, $.targ9_round3_y_bankjob2, $.targ9_round3_z_bankjob2);
            }


          }
          else {
            if ($.target9_round3_bankjob2.hasBeenDamaged()) {
              $.target9_round3_bankjob2.delete();
              ++$.counter_hits_scored_round3_bankjob2;
              ++$.player_score_bankjob2;
              ++$.counter_slot_free_bankjob2;
              $.target9_round3_dead_bankjob2 = 1;
            }


          }


        }


      }

      // Target10

      if ($.targ_to_move1_bankjob2 == 4 || $.targ_to_move2_bankjob2 == 4 || $.targ_to_move3_bankjob2 == 4) {
        if ($.slot10_filled_round3_bankjob2 == 0) {
          $.target10_round3_bankjob2 = ScriptObject.CreateNoOffset(tar_gun2, $.slot10_round3_x_bankjob2, $.slot10_round3_y_bankjob2, $.slot10_round3_z_bankjob2);
          $.target10_round3_bankjob2.setHeading(0.0);
          $.target10_round3_delete_bankjob2 = 0;
          $.target10_round3_dead_bankjob2 = 0;
          $.target10_round3_travel_bank2 = 0;
          $.slot10_filled_round3_bankjob2 = 1;
        }


      }
      if ($.slot10_filled_round3_bankjob2 == 1) {
        if ($.target10_round3_dead_bankjob2 == 0) {
          if (!($.target10_round3_bankjob2.hasBeenDamaged())) {
            const _res56 = $.target10_round3_bankjob2.getCoordinates();
$.targ10_round3_x_bankjob2 = _res56.x;
$.targ10_round3_y_bankjob2 = _res56.y;
$.targ10_round3_z_bankjob2 = _res56.z;
            if ($.target10_round3_travel_bank2 == 0) {
              if ($.targ10_round3_x_bankjob2 <= -683.73) {
                if ($.target10_round3_been_left_bank2 == 1) {
                  $.target10_round3_delete_bankjob2 = 1;
                }
                $.target10_round3_travel_bank2 = 1;
              }
              else {
                $.targ10_round3_x_bankjob2 = $.targ10_round3_x_bankjob2 - timed(0.05);
              }


            }
            else {
              if ($.targ10_round3_x_bankjob2 >= -681.59) {
                $.target10_round3_travel_bank2 = 0;
                $.target10_round3_been_left_bank2 = 1;
              }
              else {
                $.targ10_round3_x_bankjob2 = $.targ10_round3_x_bankjob2 + timed(0.05);
              }


            }
            if ($.target10_round3_delete_bankjob2 == 1) {
              $.target10_round3_bankjob2.delete();
              ++$.counter_slot_free_bankjob2;
              $.target10_round3_dead_bankjob2 = 1;
            }
            else {
              $.target10_round3_bankjob2.setCoordinates($.targ10_round3_x_bankjob2, $.targ10_round3_y_bankjob2, $.targ10_round3_z_bankjob2);
            }


          }
          else {
            if ($.target10_round3_bankjob2.hasBeenDamaged()) {
              $.target10_round3_bankjob2.delete();
              ++$.counter_hits_scored_round3_bankjob2;
              ++$.player_score_bankjob2;
              ++$.counter_slot_free_bankjob2;
              $.target10_round3_dead_bankjob2 = 1;
            }


          }


        }


      }

      // Target 11

      if ($.targ_to_move1_bankjob2 == 5 || $.targ_to_move2_bankjob2 == 5 || $.targ_to_move3_bankjob2 == 5) {
        if ($.slot11_filled_round3_bankjob2 == 0) {
          $.target11_round3_bankjob2 = ScriptObject.CreateNoOffset(tar_gun1, $.slot11_round3_x_bankjob2, $.slot11_round3_y_bankjob2, $.slot11_round3_z_bankjob2);
          $.target11_round3_bankjob2.setHeading(0.0);
          $.target11_round3_delete_bankjob2 = 0;
          $.target11_round3_dead_bankjob2 = 0;
          $.target11_round3_travel_bank2 = 0;
          $.slot11_filled_round3_bankjob2 = 1;
        }


      }
      if ($.slot11_filled_round3_bankjob2 == 1) {
        if ($.target11_round3_dead_bankjob2 == 0) {
          if (!($.target11_round3_bankjob2.hasBeenDamaged())) {
            const _res57 = $.target11_round3_bankjob2.getCoordinates();
$.targ11_round3_x_bankjob2 = _res57.x;
$.targ11_round3_y_bankjob2 = _res57.y;
$.targ11_round3_z_bankjob2 = _res57.z;
            if ($.target11_round3_travel_bank2 == 0) {
              if ($.targ11_round3_z_bankjob2 <= 8.0) {
                if ($.target11_round3_been_down_bank2 == 1) {
                  $.target11_round3_delete_bankjob2 = 1;
                }
                $.target11_round3_travel_bank2 = 1;
              }
              else {
                $.targ11_round3_z_bankjob2 = $.targ11_round3_z_bankjob2 - timed(0.06);
              }


            }
            else {
              if ($.targ11_round3_z_bankjob2 >= 15.0) {
                $.target11_round3_travel_bank2 = 0;
                $.target11_round3_been_down_bank2 = 1;
              }
              else {
                $.targ11_round3_z_bankjob2 = $.targ11_round3_z_bankjob2 + timed(0.06);
              }


            }
            if ($.target11_round3_delete_bankjob2 == 1) {
              $.target11_round3_bankjob2.delete();
              ++$.counter_slot_free_bankjob2;
              $.target11_round3_dead_bankjob2 = 1;
            }
            else {
              $.target11_round3_bankjob2.setCoordinates($.targ11_round3_x_bankjob2, $.targ11_round3_y_bankjob2, $.targ11_round3_z_bankjob2);
            }


          }
          else {
            if ($.target11_round3_bankjob2.hasBeenDamaged()) {
              $.target11_round3_bankjob2.delete();
              ++$.counter_hits_scored_round3_bankjob2;
              ++$.player_score_bankjob2;
              ++$.counter_slot_free_bankjob2;
              $.target11_round3_dead_bankjob2 = 1;
            }


          }


        }


      }

      // Target 12

      if ($.targ_to_move1_bankjob2 == 6 || $.targ_to_move2_bankjob2 == 6 || $.targ_to_move3_bankjob2 == 6) {
        if ($.slot12_filled_round3_bankjob2 == 0) {
          $.target12_round3_bankjob2 = ScriptObject.CreateNoOffset(tar_gun2, $.slot12_round3_x_bankjob2, $.slot12_round3_y_bankjob2, $.slot12_round3_z_bankjob2);
          $.target12_round3_bankjob2.setHeading(90.0);
          $.target12_round3_delete_bankjob2 = 0;
          $.target12_round3_dead_bankjob2 = 0;
          $.target12_round3_travel_bank2 = 0;
          $.slot12_filled_round3_bankjob2 = 1;
        }


      }
      if ($.slot12_filled_round3_bankjob2 == 1) {
        if ($.target12_round3_dead_bankjob2 == 0) {
          if (!($.target12_round3_bankjob2.hasBeenDamaged())) {
            const _res58 = $.target12_round3_bankjob2.getCoordinates();
$.targ12_round3_x_bankjob2 = _res58.x;
$.targ12_round3_y_bankjob2 = _res58.y;
$.targ12_round3_z_bankjob2 = _res58.z;
            if ($.target12_round3_travel_bank2 == 0) {
              if ($.targ12_round3_y_bankjob2 <= 1279.42) {
                if ($.target12_round3_been_left_bank2 == 1) {
                  $.target12_round3_delete_bankjob2 = 1;
                }
                $.target12_round3_travel_bank2 = 1;
              }
              else {
                $.targ12_round3_y_bankjob2 = $.targ12_round3_y_bankjob2 - timed(0.05);
              }


            }
            else {
              if ($.targ12_round3_y_bankjob2 >= 1283.70) {
                $.target12_round3_travel_bank2 = 0;
                $.target12_round3_been_left_bank2 = 1;
              }
              else {
                $.targ12_round3_y_bankjob2 = $.targ12_round3_y_bankjob2 + timed(0.05);
              }


            }
            if ($.target12_round3_delete_bankjob2 == 1) {
              $.target12_round3_bankjob2.delete();
              ++$.counter_slot_free_bankjob2;
              $.target12_round3_dead_bankjob2 = 1;
            }
            else {
              $.target12_round3_bankjob2.setCoordinates($.targ12_round3_x_bankjob2, $.targ12_round3_y_bankjob2, $.targ12_round3_z_bankjob2);
            }


          }
          else {
            if ($.target12_round3_bankjob2.hasBeenDamaged()) {
              $.target12_round3_bankjob2.delete();
              ++$.counter_hits_scored_round3_bankjob2;
              ++$.player_score_bankjob2;
              ++$.counter_slot_free_bankjob2;
              $.target12_round3_dead_bankjob2 = 1;
            }


          }


        }


      }

      // Target 13

      if ($.targ_to_move1_bankjob2 == 7 || $.targ_to_move2_bankjob2 == 7 || $.targ_to_move3_bankjob2 == 7) {
        if ($.slot13_filled_round3_bankjob2 == 0) {
          $.target13_round3_bankjob2 = ScriptObject.CreateNoOffset(tar_gun1, $.slot13_round3_x_bankjob2, $.slot13_round3_y_bankjob2, $.slot13_round3_z_bankjob2);
          $.target13_round3_bankjob2.setHeading(90.0);
          $.target13_round3_delete_bankjob2 = 0;
          $.target13_round3_dead_bankjob2 = 0;
          $.target13_round3_travel_bank2 = 0;
          $.slot13_filled_round3_bankjob2 = 1;
        }


      }
      if ($.slot13_filled_round3_bankjob2 == 1) {
        if ($.target13_round3_dead_bankjob2 == 0) {
          if (!($.target13_round3_bankjob2.hasBeenDamaged())) {
            const _res59 = $.target13_round3_bankjob2.getCoordinates();
$.targ13_round3_x_bankjob2 = _res59.x;
$.targ13_round3_y_bankjob2 = _res59.y;
$.targ13_round3_z_bankjob2 = _res59.z;
            if ($.target13_round3_travel_bank2 == 0) {
              if ($.targ13_round3_y_bankjob2 <= 1277.80) {
                if ($.target13_round3_been_left_bank2 == 1) {
                  $.target13_round3_delete_bankjob2 = 1;
                }
                $.target13_round3_travel_bank2 = 1;
              }
              else {
                $.targ13_round3_y_bankjob2 = $.targ13_round3_y_bankjob2 - timed(0.04);
              }


            }
            else {
              if ($.targ13_round3_y_bankjob2 >= 1282.51) {
                $.target13_round3_travel_bank2 = 0;
                $.target13_round3_been_left_bank2 = 1;
              }
              else {
                $.targ13_round3_y_bankjob2 = $.targ13_round3_y_bankjob2 + timed(0.04);
              }


            }
            if ($.target13_round3_delete_bankjob2 == 1) {
              $.target13_round3_bankjob2.delete();
              ++$.counter_slot_free_bankjob2;
              $.target13_round3_dead_bankjob2 = 1;
            }
            else {
              $.target13_round3_bankjob2.setCoordinates($.targ13_round3_x_bankjob2, $.targ13_round3_y_bankjob2, $.targ13_round3_z_bankjob2);
            }


          }
          else {
            if ($.target13_round3_bankjob2.hasBeenDamaged()) {
              $.target13_round3_bankjob2.delete();
              ++$.counter_hits_scored_round3_bankjob2;
              ++$.player_score_bankjob2;
              ++$.counter_slot_free_bankjob2;
              $.target13_round3_dead_bankjob2 = 1;
            }


          }


        }


      }


    }
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    $.player1.clearWantedLevel();
    $.ammo_round3_bankjob2 = $.player1.getAmmoInWeapon(2 /* WEAPONTYPE_PISTOL */);
    if ($.timer_round3_bankjob2 == 0 || $.ammo_round3_bankjob2 == 0) {
      if ($.flag_time_out_round3_bank2 == 0) {
        TIMERA = 0;
        $.flag_time_out_round3_bank2 = 1;
      }
      else {
        if (TIMERA > 200) {
          Audio.PlayMissionAudio(1); // Area clear
          Text.PrintNow("BNK2_3", 5000, 1); //ARea clear!"
          $.flag_round3_done_right_bankjob2 = 1;
          $.round3_finished_bankjob2 = 1;
        }


      }


    }


  }


  $.target_moving_sound_bank2.remove();


  if ($.flag_round3_done_right_bankjob2 == 1) {
    while (!(Audio.HasMissionAudioFinished(1))) {
      await asyncWait(0);
      if (Char.IsDead($.phil_bankjob2)) {
        Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }
      if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
        Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }


    }


  }


  Hud.ClearTimer($.$id.timer_round3_bankjob2);


  Text.ClearThisPrint("BNK2_3");


  $.ammo_used_round3_bankjob2 = $.ammo_given_round3_bankjob2 - $.ammo_round3_bankjob2;

  // removes the wepaon from the player1


  $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);


  Camera.SetInFrontOfPlayer();


  Text.PrintWithNumberBig("BJM2_28", $.counter_hits_scored_round3_bankjob2, 4000, 1); // targets hit round three


  $.score_round3_bankjob2 = $.counter_hits_scored_round3_bankjob2;


  Hud.ClearCounter($.$id.player_score_bankjob2);


  Hud.ClearCounter($.$id.score_to_beat_bankjob2);


  await asyncWait(4000);


  if (Char.IsDead($.phil_bankjob2)) {
    Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
    Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  Text.ClearThisBigPrint("BJM2_6");


  Text.PrintWithNumberBig("BJM2_7", $.player_score_bankjob2, 4000, 1); // Score round 1 + 2 + 3


  await asyncWait(4000);


  if (Char.IsDead($.phil_bankjob2)) {
    Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
    Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  Text.ClearThisBigPrint("BJM2_7");

  // totals up players percentage of hits


  $.total_ammo_used_bankjob2 = $.ammo_used_round1_bankjob2 + $.ammo_used_round2_bankjob2;


  $.final_ammo_used_bankjob2 = $.total_ammo_used_bankjob2 + $.ammo_used_round3_bankjob2;


  $.total_hits_bankjob2 = $.bits_hit_bank2 + $.score_round2_bankjob2;


  $.final_hits_bankjob2 = $.total_hits_bankjob2 + $.score_round3_bankjob2;


  $.percentage_hits_bankjob2 = $.final_hits_bankjob2 * 100;


  if ($.total_ammo_used_bankjob2 > 0) {
    $.percentage_hits_bankjob2 = $.percentage_hits_bankjob2 / $.final_ammo_used_bankjob2;
  }
  else {
    $.percentage_hits_bankjob2 = 0;
  }


  Text.PrintWithNumberBig("BJM2_3", $.percentage_hits_bankjob2, 4000, 1); // percent hit rate


  await asyncWait(4000);


  if (Char.IsDead($.phil_bankjob2)) {
    Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
    Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  Text.ClearThisBigPrint("BJM2_3");


  $.scplayer.detachFromCar();


  $.object3_bankjob2.delete();


  $.scplayer.setCoordinates(-677.75, 1272.03, 9.81);

  // Player goes to talk to phil to see what he says


  Text.PrintNow("BJM2_17", 5000, 1); //"Go and talk to Phil to see how he thought you did!"


  $.radar_blip_coord4_bankjob2 = Blip.AddForCoord(-665.99, 1234.17, 10.08);


  $.blob_flag = 1;


  Audio.LoadMissionAudio(1, "BNK2_7" as any); // player
  Audio.LoadMissionAudio(2, "BNK2_8" as any); // Phil will help


  while (!($.player1.locateOnFoot3D(-651.18, 1260.08, 9.82, 3.0, 3.0, 6.0, false /* FALSE */)) || !(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  if (!(Char.IsDead($.phil_bankjob2))) {
    $.phil_bankjob2.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
  }
  else {
    Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  $.player1.setControl(false /* OFF */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearPrints();


  $.scplayer.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);


  Hud.SwitchWidescreen(true /* ON */);


  $.target7_round3_bankjob2.delete();
  $.target8_round3_bankjob2.delete();
  $.target9_round3_bankjob2.delete();
  $.target10_round3_bankjob2.delete();
  $.target11_round3_bankjob2.delete();
  $.target12_round3_bankjob2.delete();
  $.target13_round3_bankjob2.delete();


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  $.scplayer = $.player1.getChar();
  $.radar_blip_coord4_bankjob2.remove();


  Streaming.LoadScene(-665.99, 1234.17, 9.08);
  $.scplayer.setIdle();
  $.scplayer.setObjNoObj();
  $.scplayer.setCoordinates(-664.58, 1233.74, 10.10);
  $.scplayer.setHeading(87.36);
  $.scplayer.setIdle();


  if (!(Char.IsDead($.phil_bankjob2))) {
    $.scplayer.turnToFaceChar($.phil_bankjob2);
  }
  else {
    Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  Camera.SetFadingColor(0, 0, 0);


  if (!(Char.IsDead($.phil_bankjob2))) {
    $.phil_bankjob2.turnToFaceChar($.scplayer);
  }
  else {
    Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }


  Camera.DoFade(1000, 1 /* FADE_IN */);


  Camera.SetFixedPosition(-662.67, 1229.52, 10.84, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-663.27, 1230.30, 11.06, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  Audio.PlayMissionAudio(1); // Player hasking
  Text.PrintNow("BNK2_7", 5000, 1); //"So you fancy doing me a favour, and helping me put together a job?"
  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
  Text.ClearThisPrint("BNK2_7");
  Audio.LoadMissionAudio(1, "BNK2_9" as any); // Phil wont help


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }


  if ($.player_score_bankjob2 > $.score_to_beat_bankjob2) {
    Audio.PlayMissionAudio(2); // Phile will do it
    Text.PrintNow("BNK2_8", 5000, 1); //"Son, after shooting like that, if you asked me to be your wife, I'd say yes
    $.phil_bankjob2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
  }
  else {
    Audio.PlayMissionAudio(1); // Phil wont help
    Text.PrintNow("BNK2_9A", 10000, 1); //"Son, you better get your fancy talking and big ideas and shove 'em where there ain't no sun."
    $.phil_bankjob2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
  }


  if ($.player_score_bankjob2 > $.score_to_beat_bankjob2) {
    while (!(Audio.HasMissionAudioFinished(2))) {
      await asyncWait(0);
      if (Char.IsDead($.phil_bankjob2)) {
        Text.ClearThisPrint("BNK2_8");
        Text.ClearThisPrint("BNK2_9A");
        Text.ClearThisPrint("BNK2_9B");
        Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }
      if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
        Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }


    }
    if (!(Char.IsDead($.phil_bankjob2))) {
      $.phil_bankjob2.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    }
    else {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    Text.ClearThisPrint("BNK2_8");


  }
  else {
    while (!(Audio.HasMissionAudioFinished(1))) {
      await asyncWait(0);
      if (Char.IsDead($.phil_bankjob2)) {
        Text.ClearThisPrint("BNK2_8");
        Text.ClearThisPrint("BNK2_9A");
        Text.ClearThisPrint("BNK2_9B");
        Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }
      if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
        Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
        // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
      }


    }
    if (!(Char.IsDead($.phil_bankjob2))) {
      $.phil_bankjob2.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    }
    else {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    Text.ClearThisPrint("BNK2_9A");
    Text.ClearThisPrint("BNK2_9B");


  }


  $.phil_bankjob2.setObjGotoCoordOnFoot(-664.41, 1228.08);


  TIMERA = 0;


  while (!($.phil_bankjob2.locateOnFoot2D(-664.41, 1228.08, 2.0, 2.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.phil_bankjob2)) {
      Text.PrintNow("BJM2_11", 5000, 1); //"Phil's dead!"
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }
    else {
      if (TIMERA >= 10000) {
        if (!($.phil_bankjob2.locateOnFoot2D(-664.41, 1228.08, 2.0, 2.0, false /* FALSE */))) {
          $.phil_bankjob2.setCoordinates(-664.41, 1228.08, 10.08);
          // SCM GOTO → mini_jump_bankjob2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO mini_jump_bankjob2"); // fallback: would break linear control flow
        }


      }


    }
    if ($.player1.locateAnyMeans3D(-667.8, 1210.0, 10.5, 3.0, 3.0, 3.0, false /* FALSE */)) {
      Text.PrintNow("BJM2_22", 5000, 1); //"You have left the competition!
      // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
    }


  }
}



async function mini_jump_bankjob2() {


  $.phil_bankjob2.delete();
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);


  if ($.player_score_bankjob2 > $.score_to_beat_bankjob2) {
    // SCM GOTO → mission_bankjob2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_passed"); // fallback: would break linear control flow
  }
  else {
    // SCM GOTO → mission_bankjob2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob2_failed"); // fallback: would break linear control flow
  }
}


// ****************************************** Mission Failed *******************************


async function mission_bankjob2_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}





// *************************************** Mission Passed **********************************


async function mission_bankjob2_passed() {


  $.flag_bankjob_mission2_passed = 1;
  World.SetCarDensityMultiplier(1.0);
  Stat.RegisterMissionPassed("BANK_2");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(2000);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Stat.RegisterHighestScore(0, $.player_score_bankjob2);
  Stat.RegisterHighestScore(1, $.percentage_hits_bankjob2);
  // START_NEW_SCRIPT bankjob_mission3_loop
  // START_NEW_SCRIPT shoot_range_loop
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_bankjob2() {


  $.target_moving_sound_bank2.remove();
  $.phil_bankjob2.removeElegantly();


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


  $.target1_round2_bankjob2.delete();
  $.target2_round2_bankjob2.delete();
  $.target3_round2_bankjob2.delete();
  $.target4_round2_bankjob2.delete();
  $.target5_round2_bankjob2.delete();
  $.target6_round2_bankjob2.delete();
  $.target7_round3_bankjob2.delete();
  $.target8_round3_bankjob2.delete();
  $.target9_round3_bankjob2.delete();
  $.target10_round3_bankjob2.delete();
  $.target11_round3_bankjob2.delete();
  $.target12_round3_bankjob2.delete();
  $.target13_round3_bankjob2.delete();


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
  $.sphere_bankjob2.remove();
  $.object1_bankjob2.delete();
  $.object2_bankjob2.delete();
  $.object3_bankjob2.delete();
  $.radar_blip_coord2_bankjob2.remove();
  $.radar_blip_coord3_bankjob2.remove();
  $.radar_blip_coord4_bankjob2.remove();
  $.radar_blip_area3_bankjob2.remove();
  Hud.ClearCounter($.$id.player_score_bankjob2);
  Hud.ClearCounter($.$id.score_to_beat_bankjob2);
  Hud.ClearTimer($.$id.timer_round1_bankjob2);
  Hud.ClearTimer($.$id.timer_round2_bankjob2);
  Hud.ClearTimer($.$id.timer_round3_bankjob2);
  Streaming.MarkModelAsNoLongerNeeded(MALE01);
  Streaming.MarkModelAsNoLongerNeeded(173 /* COLT45 */);
  Streaming.MarkModelAsNoLongerNeeded(tar_gun1);
  Streaming.MarkModelAsNoLongerNeeded(tar_gun2);
  Streaming.MarkModelAsNoLongerNeeded(tar_frame);
  Streaming.MarkModelAsNoLongerNeeded(tar_downleft);
  Streaming.MarkModelAsNoLongerNeeded(tar_downright);
  Streaming.MarkModelAsNoLongerNeeded(tar_top);
  Streaming.MarkModelAsNoLongerNeeded(tar_upleft);
  Streaming.MarkModelAsNoLongerNeeded(tar_upright);
  Streaming.MarkModelAsNoLongerNeeded(1385 /* faketarget */);
  Streaming.UnloadSpecialCharacter(5);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function bankj2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************ Bankjob Mission Two ********************************
  // ********************************** The Shooting Competition *****************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME bankjo2

  // Mission start stuff


  await mission_start_bankjob2();  // SCM GOSUB mission_start_bankjob2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_bankjob2_failed();  // SCM GOSUB mission_bankjob2_failed
  }


  await mission_cleanup_bankjob2();  // SCM GOSUB mission_cleanup_bankjob2


  // MissionBoundary


  // Variables for mission

  // Round 1

  // General stuff


  // VAR_INT counter_hits_scored_round1_bankjob2


  // VAR_INT radar_blip_coord2_bankjob2


  // VAR_INT flag_round1_finished_bankjob2


  // VAR_INT timer_round1_bankjob2


  // VAR_INT radar_blip_coord3_bankjob2


  // VAR_INT radar_blip_coord4_bankjob2


  // VAR_INT ammo_round1_bankjob


  // VAR_INT bits_hit_bank2


  // VAR_INT score_round2_bankjob2


  // VAR_INT score_round3_bankjob2


  // VAR_INT total_hits_bankjob2


  // VAR_INT final_hits_bankjob2

  // Slot1


  // VAR_INT slot1_filled_round1_bankjob2


  // VAR_INT target_1_bankjob2_dead


  // VAR_INT target1_part1_dead_bankjob2


  // VAR_INT target1_part2_dead_bankjob2


  // VAR_INT target1_part3_dead_bankjob2


  // VAR_INT target1_part4_dead_bankjob2


  // VAR_INT target1_part5_dead_bankjob2


  // VAR_INT target1_frame_bankjob2


  // VAR_INT target1_part1_bankjob2


  // VAR_INT target1_part2_bankjob2


  // VAR_INT target1_part3_bankjob2


  // VAR_INT target1_part4_bankjob2


  // VAR_INT target1_part5_bankjob2


  // VAR_FLOAT slot1_x_bankjob2


  // VAR_FLOAT slot1_y_bankjob2


  // VAR_FLOAT slot1_z_bankjob2


  // VAR_FLOAT targ1_x_bankjob2


  // VAR_FLOAT targ1_y_bankjob2


  // VAR_FLOAT targ1_z_bankjob2


  // VAR_INT target1_travel_bank2

  // Slot2


  // VAR_INT slot2_filled_round1_bankjob2


  // VAR_INT target_2_bankjob2_dead


  // VAR_INT target2_part1_dead_bankjob2


  // VAR_INT target2_part2_dead_bankjob2


  // VAR_INT target2_part3_dead_bankjob2


  // VAR_INT target2_part4_dead_bankjob2


  // VAR_INT target2_part5_dead_bankjob2


  // VAR_INT target2_frame_bankjob2


  // VAR_INT target2_part1_bankjob2


  // VAR_INT target2_part2_bankjob2


  // VAR_INT target2_part3_bankjob2


  // VAR_INT target2_part4_bankjob2


  // VAR_INT target2_part5_bankjob2


  // VAR_FLOAT slot2_x_bankjob2


  // VAR_FLOAT slot2_y_bankjob2


  // VAR_FLOAT slot2_z_bankjob2


  // VAR_FLOAT targ2_x_bankjob2


  // VAR_FLOAT targ2_y_bankjob2


  // VAR_FLOAT targ2_z_bankjob2


  // VAR_INT target2_travel_bank2

  // Slot3


  // VAR_INT slot3_filled_round1_bankjob2


  // VAR_INT target_3_bankjob2_dead


  // VAR_INT target3_part1_dead_bankjob2


  // VAR_INT target3_part2_dead_bankjob2


  // VAR_INT target3_part3_dead_bankjob2


  // VAR_INT target3_part4_dead_bankjob2


  // VAR_INT target3_part5_dead_bankjob2


  // VAR_INT target3_frame_bankjob2


  // VAR_INT target3_part1_bankjob2


  // VAR_INT target3_part2_bankjob2


  // VAR_INT target3_part3_bankjob2


  // VAR_INT target3_part4_bankjob2


  // VAR_INT target3_part5_bankjob2


  // VAR_FLOAT slot3_x_bankjob2


  // VAR_FLOAT slot3_y_bankjob2


  // VAR_FLOAT slot3_z_bankjob2


  // VAR_FLOAT targ3_x_bankjob2


  // VAR_FLOAT targ3_y_bankjob2


  // VAR_FLOAT targ3_z_bankjob2


  // VAR_INT target3_travel_bank2

  // *************************************** ROUND TWO ***************************************

  // General Stuff


  // VAR_INT counter_hits_scored_round2_bankjob2


  // VAR_INT round2_finished_bankjob2


  // VAR_INT ammo_round2_bankjob2


  // VAR_INT game_time_round2_bankjob2


  // Slot1 Round2


  // VAR_FLOAT slot1_x_round2_bankjob2


  // VAR_FLOAT slot1_y_round2_bankjob2


  // VAR_FLOAT slot1_z_round2_bankjob2


  // VAR_FLOAT slot1_heading_round2_bankjob2


  // VAR_INT target1_round2_bankjob2


  // VAR_INT flag_target1_dead_round2_bankjob2


  // VAR_INT target1_round2_removed_bankjob2


  // VAR_FLOAT targ1_round2_x_bankjob2


  // VAR_FLOAT targ1_round2_y_bankjob2


  // VAR_FLOAT targ1_round2_z_bankjob2


  // VAR_INT timer_start_targ1_round2_bankjob2


  // VAR_INT flag_slot1_round2_filled_bankjob2


  // VAR_INT delete_targ1_round2_time_bankjob2


  // VAR_INT time_targ1_round2_in_posit_bankjob2

  // Slot2 Round2


  // VAR_FLOAT slot2_x_round2_bankjob2


  // VAR_FLOAT slot2_y_round2_bankjob2


  // VAR_FLOAT slot2_z_round2_bankjob2


  // VAR_FLOAT slot2_heading_round2_bankjob2


  // VAR_INT target2_round2_bankjob2


  // VAR_INT flag_target2_dead_round2_bankjob2


  // VAR_INT target2_round2_removed_bankjob2


  // VAR_FLOAT targ2_round2_x_bankjob2


  // VAR_FLOAT targ2_round2_y_bankjob2


  // VAR_FLOAT targ2_round2_z_bankjob2


  // VAR_INT timer_start_targ2_round2_bankjob2


  // VAR_INT flag_slot2_round2_filled_bankjob2


  // VAR_INT delete_targ2_round2_time_bankjob2


  // VAR_INT time_targ2_round2_in_posit_bankjob2

  // Slot 3 Round2


  // VAR_FLOAT slot3_x_round2_bankjob2


  // VAR_FLOAT slot3_y_round2_bankjob2


  // VAR_FLOAT slot3_z_round2_bankjob2


  // VAR_FLOAT slot3_heading_round2_bankjob2


  // VAR_INT target3_round2_bankjob2


  // VAR_INT flag_target3_dead_round2_bankjob2


  // VAR_INT target3_round2_removed_bankjob2


  // VAR_FLOAT targ3_round2_x_bankjob2


  // VAR_FLOAT targ3_round2_y_bankjob2


  // VAR_FLOAT targ3_round2_z_bankjob2


  // VAR_INT timer_start_targ3_round2_bankjob2


  // VAR_INT flag_slot3_round2_filled_bankjob2


  // VAR_INT delete_targ3_round2_time_bankjob2


  // VAR_INT time_targ3_round2_in_posit_bankjob2

  // Slot4 Round2


  // VAR_FLOAT slot4_x_round2_bankjob2


  // VAR_FLOAT slot4_y_round2_bankjob2


  // VAR_FLOAT slot4_z_round2_bankjob2


  // VAR_FLOAT slot4_heading_round2_bankjob2


  // VAR_INT target4_round2_bankjob2


  // VAR_INT flag_target4_dead_round2_bankjob2


  // VAR_INT target4_round2_removed_bankjob2


  // VAR_FLOAT targ4_round2_x_bankjob2


  // VAR_FLOAT targ4_round2_y_bankjob2


  // VAR_FLOAT targ4_round2_z_bankjob2


  // VAR_INT timer_start_targ4_round2_bankjob2


  // VAR_INT flag_slot4_round2_filled_bankjob2


  // VAR_INT delete_targ4_round2_time_bankjob2


  // VAR_INT time_targ4_round2_in_posit_bankjob2

  // Slot5 Round2


  // VAR_FLOAT slot5_x_round2_bankjob2


  // VAR_FLOAT slot5_y_round2_bankjob2


  // VAR_FLOAT slot5_z_round2_bankjob2


  // VAR_FLOAT slot5_heading_round2_bankjob2


  // VAR_INT target5_round2_bankjob2


  // VAR_INT flag_target5_dead_round2_bankjob2


  // VAR_INT target5_round2_removed_bankjob2


  // VAR_FLOAT targ5_round2_x_bankjob2


  // VAR_FLOAT targ5_round2_y_bankjob2


  // VAR_FLOAT targ5_round2_z_bankjob2


  // VAR_INT timer_start_targ5_round2_bankjob2


  // VAR_INT flag_slot5_round2_filled_bankjob2


  // VAR_INT delete_targ5_round2_time_bankjob2


  // VAR_INT time_targ5_round2_in_posit_bankjob2

  // Slot6 Round2


  // VAR_FLOAT slot6_x_round2_bankjob2


  // VAR_FLOAT slot6_y_round2_bankjob2


  // VAR_FLOAT slot6_z_round2_bankjob2


  // VAR_FLOAT slot6_heading_round2_bankjob2


  // VAR_INT target6_round2_bankjob2


  // VAR_INT flag_target6_dead_round2_bankjob2


  // VAR_INT target6_round2_removed_bankjob2


  // VAR_FLOAT targ6_round2_x_bankjob2


  // VAR_FLOAT targ6_round2_y_bankjob2


  // VAR_FLOAT targ6_round2_z_bankjob2


  // VAR_INT timer_start_targ6_round2_bankjob2


  // VAR_INT flag_slot6_round2_filled_bankjob2


  // VAR_INT delete_targ6_round2_time_bankjob2


  // VAR_INT time_targ6_round2_in_posit_bankjob2

  // *************************************** ROUND 3 *****************************************

  // General stuff


  // VAR_INT counter_hits_scored_round3_bankjob2


  // VAR_INT round3_finished_bankjob2


  // VAR_INT ammo_round3_bankjob2

  // SLOT 7 ROUND2


  // VAR_INT target7_round3_bankjob2


  // VAR_INT slot7_filled_round3_bankjob2


  // VAR_INT target7_round3_dead_bankjob2


  // VAR_FLOAT targ7_round3_x_bankjob2


  // VAR_FLOAT targ7_round3_y_bankjob2


  // VAR_FLOAT targ7_round3_z_bankjob2


  // VAR_INT target7_round3_travel_bank2


  // VAR_FLOAT slot7_round3_x_bankjob2


  // VAR_FLOAT slot7_round3_y_bankjob2


  // VAR_FLOAT slot7_round3_z_bankjob2

  // SLOT8 ROUND2


  // VAR_INT target8_round3_bankjob2


  // VAR_INT slot8_filled_round3_bankjob2


  // VAR_INT target8_round3_dead_bankjob2


  // VAR_FLOAT targ8_round3_x_bankjob2


  // VAR_FLOAT targ8_round3_y_bankjob2


  // VAR_FLOAT targ8_round3_z_bankjob2


  // VAR_INT target8_round3_travel_bank2


  // VAR_FLOAT slot8_round3_x_bankjob2


  // VAR_FLOAT slot8_round3_y_bankjob2


  // VAR_FLOAT slot8_round3_z_bankjob2

  // Slot9 ROUND2


  // VAR_INT target9_round3_bankjob2


  // VAR_INT slot9_filled_round3_bankjob2


  // VAR_INT target9_round3_dead_bankjob2


  // VAR_FLOAT targ9_round3_x_bankjob2


  // VAR_FLOAT targ9_round3_y_bankjob2


  // VAR_FLOAT targ9_round3_z_bankjob2


  // VAR_INT target9_round3_travel_bank2


  // VAR_FLOAT slot9_round3_x_bankjob2


  // VAR_FLOAT slot9_round3_y_bankjob2


  // VAR_FLOAT slot9_round3_z_bankjob2

  // SLOT 10 ROUND2


  // VAR_INT target10_round3_bankjob2


  // VAR_INT slot10_filled_round3_bankjob2


  // VAR_INT target10_round3_dead_bankjob2


  // VAR_FLOAT targ10_round3_x_bankjob2


  // VAR_FLOAT targ10_round3_y_bankjob2


  // VAR_FLOAT targ10_round3_z_bankjob2


  // VAR_INT target10_round3_travel_bank2


  // VAR_FLOAT slot10_round3_x_bankjob2


  // VAR_FLOAT slot10_round3_y_bankjob2


  // VAR_FLOAT slot10_round3_z_bankjob2

  // SLOT11 ROUND2


  // VAR_INT target11_round3_bankjob2


  // VAR_INT slot11_filled_round3_bankjob2


  // VAR_INT target11_round3_dead_bankjob2


  // VAR_FLOAT targ11_round3_x_bankjob2


  // VAR_FLOAT targ11_round3_y_bankjob2


  // VAR_FLOAT targ11_round3_z_bankjob2


  // VAR_INT target11_round3_travel_bank2


  // VAR_FLOAT slot11_round3_x_bankjob2


  // VAR_FLOAT slot11_round3_y_bankjob2


  // VAR_FLOAT slot11_round3_z_bankjob2

  // SLOT12 ROUND2


  // VAR_INT target12_round3_bankjob2


  // VAR_INT slot12_filled_round3_bankjob2


  // VAR_INT target12_round3_dead_bankjob2


  // VAR_FLOAT targ12_round3_x_bankjob2


  // VAR_FLOAT targ12_round3_y_bankjob2


  // VAR_FLOAT targ12_round3_z_bankjob2


  // VAR_INT target12_round3_travel_bank2


  // VAR_FLOAT slot12_round3_x_bankjob2


  // VAR_FLOAT slot12_round3_y_bankjob2


  // VAR_FLOAT slot12_round3_z_bankjob2

  // SLOT13 ROUND2


  // VAR_INT target13_round3_bankjob2


  // VAR_INT slot13_filled_round3_bankjob2


  // VAR_INT target13_round3_dead_bankjob2


  // VAR_FLOAT targ13_round3_x_bankjob2


  // VAR_FLOAT targ13_round3_y_bankjob2


  // VAR_FLOAT targ13_round3_z_bankjob2


  // VAR_INT target13_round3_travel_bank2


  // VAR_FLOAT slot13_round3_x_bankjob2


  // VAR_FLOAT slot13_round3_y_bankjob2


  // VAR_FLOAT slot13_round3_z_bankjob2

  // ROUND2 PART2


  // VAR_INT radar_blip_area3_bankjob2

  // Shooting competition stuff


  // VAR_INT phil_bankjob2


  // VAR_INT gunner1_bankjob2

  // Percentage stuff


  // VAR_INT percentage_hits_bankjob2


  // VAR_INT ammo_given_round1_bankjob2


  // VAR_INT ammo_used_round1_bankjob2


  // VAR_INT ammo_given_round2_bankjob2


  // VAR_INT ammo_used_round2_bankjob2


  // VAR_INT ammo_given_round3_bankjob2


  // VAR_INT ammo_used_round3_bankjob2


  // VAR_INT total_ammo_used_bankjob2

  // timer for round 2 part1


  // VAR_INT timer_round2_bankjob2


  // VAR_INT timer_round3_bankjob2

  // Target creation stuff


  // VAR_INT create_timer_targ1_round2_bankjob2


  // VAR_INT timer_create_targ1_round2_bankjob2


  // VAR_INT targ1_round2_movetime_bankjob2


  // VAR_INT create_timer_targ2_round2_bankjob2


  // VAR_INT timer_create_targ2_round2_bankjob2


  // VAR_INT targ2_round2_movetime_bankjob2


  // VAR_INT create_timer_targ3_round2_bankjob2


  // VAR_INT timer_create_targ3_round2_bankjob2


  // VAR_INT targ3_round2_movetime_bankjob2


  // VAR_INT create_timer_targ4_round2_bankjob2


  // VAR_INT timer_create_targ4_round2_bankjob2


  // VAR_INT targ4_round2_movetime_bankjob2


  // VAR_INT create_timer_targ5_round2_bankjob2


  // VAR_INT timer_create_targ5_round2_bankjob2


  // VAR_INT targ5_round2_movetime_bankjob2


  // VAR_INT create_timer_targ6_round2_bankjob2


  // VAR_INT timer_create_targ6_round2_bankjob2


  // VAR_INT targ6_round2_movetime_bankjob2

  // Removes and stores player pistols


  // VAR_INT slot4_weapon_type_bank2 slot4_ammo_bank2 slot4_model_bank2

  // Audio stuff


  // VAR_INT doing_well_audio_loaded_bankjob2


  // VAR_INT doing_bad_audio_loaded_bankjob2


  // VAR_INT round_clear_audio_loaded_bankjob2

  //VAR_INT flag_player_had_exit_message_bankjob2 // Used for player to skip round

  // Objects to attach player to


  // VAR_INT object1_bankjob2


  // VAR_INT object2_bankjob2


  // VAR_INT object3_bankjob2

  // Round done correctly flags


  // VAR_INT flag_round1_done_right_bankjob2


  // VAR_INT flag_round2_done_right_bankjob2


  // VAR_INT flag_round3_done_right_bankjob2

  // Round 3 random target picking stuff


  // VAR_INT target1_to_move_this_time_bankjob2


  // VAR_INT target2_to_move_this_time_bankjob2


  // VAR_INT target3_to_move_this_time_bankjob2


  // VAR_INT targ_to_move1_bankjob2


  // VAR_INT targ_to_move2_bankjob2


  // VAR_INT targ_to_move3_bankjob2


  // VAR_INT target_number_bankjob2


  // VAR_INT flag_choose_slots_bankjob2


  // VAR_INT counter_slot_free_bankjob2


  // VAR_INT target7_round3_delete_bankjob2


  // VAR_INT target8_round3_delete_bankjob2


  // VAR_INT target9_round3_delete_bankjob2


  // VAR_INT target10_round3_delete_bankjob2


  // VAR_INT target11_round3_delete_bankjob2


  // VAR_INT target12_round3_delete_bankjob2


  // VAR_INT target13_round3_delete_bankjob2


  // VAR_INT sphere_bankjob2

  // Sound stuff


  // VAR_INT target_moving_sound_bank2

  // New player score stuff


  // VAR_INT player_score_bankjob2


  // VAR_INT final_ammo_used_bankjob2

  // New round time out stuff to give the bullets time to hit the target


  // VAR_INT flag_time_out_round1_bank2


  // VAR_INT flag_time_out_round2_bank2


  // VAR_INT flag_time_out_round3_bank2


  $.flag_time_out_round1_bank2 = 0;


  $.flag_time_out_round2_bank2 = 0;


  $.flag_time_out_round3_bank2 = 0;

  // ****************************************Mission Start************************************





}
