// Generated from main/rampage.sc

import { $ } from "../utils/vars.mts";

async function rampage_gosub() {
  if ($.rampage_pickup.hasBeenCollected()) {
    await asyncWait(0);
    if ($.flag_cell_nation == 1) {
      $.rampage_pickup = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, $.rampage_pickup_x, $.rampage_pickup_y, $.rampage_pickup_z);
      return;
    }
    ONMISSION = 1;
    Streaming.RequestModel($.rampage_weapon_model);
    while (!(Streaming.HasModelLoaded($.rampage_weapon_model))) {
      await asyncWait(0);
    }
    if ($.rampage_weapon_model == MINIGUN) {
      Streaming.RequestModel(MINIGUN2);
      while (!(Streaming.HasModelLoaded(MINIGUN2))) {
        await asyncWait(0);
      }
    }
    if ($.rampage_model_selection == 4) {
      $.rampage_pedtype = 7 /* PEDTYPE_GANG_CUBAN */;
      $.rampage_pedmodel_1 = CBa;
      $.rampage_pedmodel_2 = CBb;
      $.rampage_pedmodel_3 = HNa;
      $.rampage_pedmodel_4 = HNb;
      ++$.rampage_model_selection;
    }
    if ($.rampage_model_selection == 3) {
      $.rampage_pedtype = 8 /* PEDTYPE_GANG_HAITIAN */;
      $.rampage_pedmodel_1 = HNa;
      $.rampage_pedmodel_2 = HNb;
      $.rampage_pedmodel_3 = CBa;
      $.rampage_pedmodel_4 = CBb;
      ++$.rampage_model_selection;
    }
    if ($.rampage_model_selection == 2) {
      $.rampage_pedtype = 12 /* PEDTYPE_GANG_BIKER */;
      $.rampage_pedmodel_1 = BKa;
      $.rampage_pedmodel_2 = BKb;
      $.rampage_pedmodel_3 = CBa;
      $.rampage_pedmodel_4 = CBb;
      ++$.rampage_model_selection;
    }
    if ($.rampage_model_selection == 1) {
      $.rampage_pedtype = 10 /* PEDTYPE_GANG_DIAZ */;
      $.rampage_pedmodel_1 = CLa;
      $.rampage_pedmodel_2 = CLb;
      $.rampage_pedmodel_3 = HNa;
      $.rampage_pedmodel_4 = HNb;
      ++$.rampage_model_selection;
    }
    if ($.rampage_model_selection == 0) {
      $.rampage_pedtype = 9 /* PEDTYPE_GANG_STREET */;
      $.rampage_pedmodel_1 = SGa;
      $.rampage_pedmodel_2 = SGb;
      $.rampage_pedmodel_3 = HNa;
      $.rampage_pedmodel_4 = HNb;
      ++$.rampage_model_selection;
    }
    if ($.player1.isPlaying()) {
      if ($.player1.isInInfoZone("STREET5")) {
        $.rampage_pedtype = 9 /* PEDTYPE_GANG_STREET */;
        $.rampage_pedmodel_1 = SGa;
        $.rampage_pedmodel_2 = SGb;
        $.rampage_pedmodel_3 = HNa;
        $.rampage_pedmodel_4 = HNb;
      }
      if ($.player1.isInInfoZone("BIKAREA")) {
        $.rampage_pedtype = 12 /* PEDTYPE_GANG_BIKER */;
        $.rampage_pedmodel_1 = BKa;
        $.rampage_pedmodel_2 = BKb;
        $.rampage_pedmodel_3 = CBa;
        $.rampage_pedmodel_4 = CBb;
      }
      if ($.player1.isInInfoZone("GANG2")) {
        $.rampage_pedtype = 8 /* PEDTYPE_GANG_HAITIAN */;
        $.rampage_pedmodel_1 = HNa;
        $.rampage_pedmodel_2 = HNb;
        $.rampage_pedmodel_3 = CBa;
        $.rampage_pedmodel_4 = CBb;
      }
      if ($.player1.isInInfoZone("GHETTO1")) {
        $.rampage_pedtype = 8 /* PEDTYPE_GANG_HAITIAN */;
        $.rampage_pedmodel_1 = HNa;
        $.rampage_pedmodel_2 = HNb;
        $.rampage_pedmodel_3 = CBa;
        $.rampage_pedmodel_4 = CBb;
      }
      if ($.player1.isInInfoZone("GHETTO2")) {
        $.rampage_pedtype = 7 /* PEDTYPE_GANG_CUBAN */;
        $.rampage_pedmodel_1 = CBa;
        $.rampage_pedmodel_2 = CBb;
        $.rampage_pedmodel_3 = HNa;
        $.rampage_pedmodel_4 = HNb;
      }
    }
    if ($.rampage_pickup == $.rampage_19) {
      KillFrenzy.Start("PAGE_00", $.rampage_weapontype, 120000, $.rampage_kills, $.rampage_pedmodel_1, $.rampage_pedmodel_2, $.rampage_pedmodel_3, $.rampage_pedmodel_4, false /* FALSE */);
      Text.PrintWithNumberBig("PAGE_05", $.rampage_kills, 6000, 6);
    }
    else {
      if ($.rampage_pickup == $.rampage_02 || $.rampage_pickup == $.rampage_16 || $.rampage_pickup == $.rampage_17 || $.rampage_pickup == $.rampage_25) {
        KillFrenzy.Start("PAGE_00", $.rampage_weapontype, 120000, $.rampage_kills, -2, -1, -1, -1, false /* FALSE */);
        Text.PrintWithNumberBig("PAGE_02", $.rampage_kills, 6000, 6);
      }
      else {
        KillFrenzy.Start("PAGE_00", $.rampage_weapontype, 120000, $.rampage_kills, $.rampage_pedmodel_1, $.rampage_pedmodel_2, -1, -1, false /* FALSE */);
        if ($.rampage_weapontype == 42 /* WEAPONTYPE_UZI_DRIVEBY */) {
          Text.PrintWithNumberBig("PAGE_03", $.rampage_kills, 6000, 6);
        }
        else {
          if ($.rampage_weapontype == 40 /* WEAPONTYPE_RUNOVERBYCAR */) {
            Text.PrintWithNumberBig("PAGE_04", $.rampage_kills, 6000, 6);
          }
          else {
            Text.PrintWithNumberBig("PAGE_01", $.rampage_kills, 6000, 6);
          }
        }
      }
    }
    Streaming.RequestModel($.rampage_pedmodel_1);
    Streaming.RequestModel($.rampage_pedmodel_2);
    World.ForceRandomPedType($.rampage_pedtype);
    Text.PrintBig("RAMPAGE", 5000, 5);
    $.frenzy_status = KillFrenzy.ReadStatus();
    while ($.frenzy_status == 1) {
      await asyncWait(0);
      $.frenzy_status = KillFrenzy.ReadStatus();
    }
    if ($.frenzy_status == 2) {
      $.rampage_flag = 1;
      ++$.total_rampages_passed;
      $.rampage_reward = $.total_rampages_passed * 50;
      if ($.player1.isPlaying()) {
        $.player1.clearWantedLevel();
      }
      if ($.total_rampages_passed < 35) {
        if ($.player1.isPlaying()) {
          $.player1.addScore($.rampage_reward);
        }
        Text.PrintBig("RAMP_P", 5000, 5);
        Text.PrintWithNumberBig("REWARD", $.rampage_reward, 6000, 6);
      }
      else {
        if ($.player1.isPlaying()) {
          $.player1.addScore(1000);
        }
        Text.PrintBig("RAMP_A", 5000, 5); //"ALL RAMPAGES COMPLETED!"
        Text.PrintWithNumberBig("REWARD", 1000, 6000, 6);
      }


    }
    if ($.frenzy_status == 3) {
      Text.PrintBig("RAMP_F", 5000, 5);
      $.rampage_pickup.remove();
      $.rampage_pickup = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, $.rampage_pickup_x, $.rampage_pickup_y, $.rampage_pickup_z);
    }
    World.ForceRandomPedType(-1);
    Streaming.MarkModelAsNoLongerNeeded($.rampage_pedmodel_1);
    Streaming.MarkModelAsNoLongerNeeded($.rampage_pedmodel_2);
    Streaming.MarkModelAsNoLongerNeeded($.rampage_weapon_model);
    Streaming.MarkModelAsNoLongerNeeded(MINIGUN2);
    ONMISSION = 0;
  }
}

export async function rampage() {
  // MissionBoundary


  // SET_DEATHARREST_STATE(false /* OFF */);


  // SCRIPT_NAME rampage


  // VAR_INT rampage_reward frenzy_status total_rampages_passed


  // VAR_INT rampage_01 rampage_02 rampage_03 rampage_04 rampage_05
  // VAR_INT rampage_06 rampage_07 rampage_08 rampage_09 rampage_10
  // VAR_INT rampage_11 rampage_12 rampage_13 rampage_14 rampage_15
  // VAR_INT rampage_16 rampage_17 rampage_18 rampage_19 rampage_20
  // VAR_INT rampage_21 rampage_22 rampage_23 rampage_24 rampage_25
  // VAR_INT rampage_26 rampage_27 rampage_28 rampage_29 rampage_30
  // VAR_INT rampage_31 rampage_32 rampage_33 rampage_34 rampage_35


  // VAR_INT rampage_01_flag rampage_02_flag rampage_03_flag rampage_04_flag rampage_05_flag
  // VAR_INT rampage_06_flag rampage_07_flag rampage_08_flag rampage_09_flag rampage_10_flag
  // VAR_INT rampage_11_flag rampage_12_flag rampage_13_flag rampage_14_flag rampage_15_flag
  // VAR_INT rampage_16_flag rampage_17_flag rampage_18_flag rampage_19_flag rampage_20_flag
  // VAR_INT rampage_21_flag rampage_22_flag rampage_23_flag rampage_24_flag rampage_25_flag
  // VAR_INT rampage_26_flag rampage_27_flag rampage_28_flag rampage_29_flag rampage_30_flag
  // VAR_INT rampage_31_flag rampage_32_flag rampage_33_flag rampage_34_flag rampage_35_flag


  // VAR_INT rampage_01_kills rampage_02_kills rampage_03_kills rampage_04_kills rampage_05_kills
  // VAR_INT rampage_06_kills rampage_07_kills rampage_08_kills rampage_09_kills rampage_10_kills
  // VAR_INT rampage_11_kills rampage_12_kills rampage_13_kills rampage_14_kills rampage_15_kills
  // VAR_INT rampage_16_kills rampage_17_kills rampage_18_kills rampage_19_kills rampage_20_kills
  // VAR_INT rampage_21_kills rampage_22_kills rampage_23_kills rampage_24_kills rampage_25_kills
  // VAR_INT rampage_26_kills rampage_27_kills rampage_28_kills rampage_29_kills rampage_30_kills
  // VAR_INT rampage_31_kills rampage_32_kills rampage_33_kills rampage_34_kills rampage_35_kills


  // VAR_INT rampage_model_selection rampage_pedtype rampage_pedmodel_1 rampage_pedmodel_2 rampage_pedmodel_3 rampage_pedmodel_4
  // VAR_INT rampage_frame_counter rampage_flag rampage_pickup rampage_weapon_model rampage_weapontype rampage_kills
  // VAR_FLOAT rampage_pickup_x rampage_pickup_y rampage_pickup_z


  $.rampage_reward = 50;
  $.frenzy_status = 0;
  $.total_rampages_passed = 0;


  $.rampage_01_flag = 0;
  $.rampage_02_flag = 0;
  $.rampage_03_flag = 0;
  $.rampage_04_flag = 0;
  $.rampage_05_flag = 0;
  $.rampage_06_flag = 0;
  $.rampage_07_flag = 0;
  $.rampage_08_flag = 0;
  $.rampage_09_flag = 0;
  $.rampage_10_flag = 0;
  $.rampage_11_flag = 0;
  $.rampage_12_flag = 0;
  $.rampage_13_flag = 0;
  $.rampage_14_flag = 0;
  $.rampage_15_flag = 0;
  $.rampage_16_flag = 0;
  $.rampage_17_flag = 0;
  $.rampage_18_flag = 0;
  $.rampage_19_flag = 0;
  $.rampage_20_flag = 0;
  $.rampage_21_flag = 0;
  $.rampage_22_flag = 0;
  $.rampage_23_flag = 0;
  $.rampage_24_flag = 0;
  $.rampage_25_flag = 0;
  $.rampage_26_flag = 0;
  $.rampage_27_flag = 0;
  $.rampage_28_flag = 0;
  $.rampage_29_flag = 0;
  $.rampage_30_flag = 0;
  $.rampage_31_flag = 0;
  $.rampage_32_flag = 0;
  $.rampage_33_flag = 0;
  $.rampage_34_flag = 0;
  $.rampage_35_flag = 0;


  $.rampage_01 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 218.22, -1613.76, 11.06); //ON THE HILL TOWARDS THE LIGHT HOUSE
  $.rampage_02 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -1435.29, -833.645, 30.05989); //ON TOP OF THE AIPORT ROOF
  $.rampage_03 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 234.86, 34.22, 9.98); //THE DEAD END ROUNDABOUT
  $.rampage_04 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 479.69, 1110.18, 17.33); //NEXT TO THE SHOPPING MALL NORTH BEACH
  $.rampage_05 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 370.63, 1125.86, 26.5); //IN THE MALL IN THE BUSHES
  $.rampage_06 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 144.449, -545.234, 14.751); //HOTEL FOYER NEXT TO BUNCH OF TOOLS


  $.rampage_07 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -1100.625, 1453.43, 8.73); //TO THE RIGHT OF THE STADIUM NEXT TO THE DOCK
  $.rampage_08 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -908.317, 744.149, 11.092); //ALLEYWAY NEXT TO THE PIZZAPLACE IN SOUTH DOWNTOWN
  $.rampage_09 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -508.768, 1149.203, 18.172); // DOWNTOWN UP THE STAIRS AND ROUND THAT BIT
  $.rampage_10 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -789.41, 592.56, 11.10); //OPEN CARPARK IN DOWNTOWN UNDER THE ENTRANCE
  $.rampage_11 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -1011.37, -170.64, 10.99); //AROUND THE ALLEYS IN HAITI
  $.rampage_12 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 68.702, -1119.231, 10.458); //AROUND THE DOOR IN OAKDALE OPP RAPHAELS
  $.rampage_13 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 85.623, -1259.86, 17.092); //ON TOP OF ROOF AS YOU JUMP FROM THE CAR PARK (SNIPER)


  $.rampage_14 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -679.66, -419.712, 10.469); //BEHIND THE CAR IN STAR ISLAND
  $.rampage_15 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -1176.341, -702.975, 22.662); //ONTOP OF ROOF IN LITTLE HAVANA
  $.rampage_16 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -626.642, -1354.85, 16.373); // ON THE BOAT BEHIND A PILLAR
  $.rampage_17 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -1519.33, -292.236, 14.86); // BEHIND TREE NEAR TERMINAL B
  $.rampage_18 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -956.113, -1206.33, 14.86); // ON THE RIDGE BEHIND A TREE
  $.rampage_19 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -890.184, -489.655, 36.20); // ON BUILDING ON MAINLAND RD NEED TO STUNT JUMP (SNIPE)
  $.rampage_20 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 3.426, -1147.00, 10.45); // OCEAN BEACH IN THE GREEN HOUSES BEHIND A TREE


  $.rampage_21 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 468.656, -1608.79, 11.03); // DOWN THE BTM OF THE BEACH SOUTH SIDE
  $.rampage_22 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 587.795, 1206.26, 15.64); // UP THE TOP OF THE NORTH BEACH
  $.rampage_23 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 300.673, 1324.88, 22.919); // NORTH BEACH BEHIND BUILDING NEAR CAR PARK
  $.rampage_24 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 217.247, 261.372, 8.710); // ON THE JETTY DOCK BIT NR GOLF COURSE BEACH SIDE
  $.rampage_25 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -366.44, -1742.10, 11.426); // ON ONE OF THE WATER HOUSES SOUTH


  $.rampage_26 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -448.796, 1249.27, 11.75); // DOWNTOWN NORTH BUILDING WITH STATUE IN IT
  $.rampage_27 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -674.22, 1162.70, 28.15); // ON SOME BUILDING IN DOWN TOWN SNIPE OPP AMUNATION
  $.rampage_28 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -1143.48, -410.87, 10.95); // IN THE BASKETBALL COURT IN LITTLEHA
  $.rampage_29 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 624.26, -230.158, 23.915); // ON THE HIGH DIVE BOARDS OFF THE BEACH (HEADSHOTS)
  $.rampage_30 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -34.130, -948.707, 21.772); // ON TOP OF THE MINI-MALL IN WSHINGTON
  $.rampage_31 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, 593.315, -352.826, 13.711); // TOP OF OCEAN DRIVE NXT TO BUILDING BHD BUSHES
  $.rampage_32 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -1234.830, -90.378, 11.43); // ON THE COBBLED AREA MAINLAND ROUND CORNER FROM THAT RED BRIDGE


  $.rampage_33 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -1483.470, -881.677, 14.87); // GROUND FLOOR AIRPORT BEHIND THE CHECK IN DESKS - BEHIND!!
  $.rampage_34 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -194.701, -1085.067, 15.66); // OCEAN VIEW MEDICAL FOUNDATION - TALL WHITE BUIDING WASHTON
  $.rampage_35 = Pickup.Create(killfrenzy, 3 /* PICKUP_ONCE */, -983.373, -353.997, 13.84); // AROUND THE BACK OF THE BANK NR RED ROOFS AND LOADING BAY




  Stat.SetTotalNumberOfKillFrenzies(35);


  $.rampage_01_kills = 30;
  $.rampage_02_kills = 12;
  $.rampage_03_kills = 35;
  $.rampage_04_kills = 35;
  $.rampage_05_kills = 30;
  $.rampage_06_kills = 25;
  $.rampage_07_kills = 30;
  $.rampage_08_kills = 35;
  $.rampage_09_kills = 40;
  $.rampage_10_kills = 30;
  $.rampage_11_kills = 30;
  $.rampage_12_kills = 20;
  $.rampage_13_kills = 25;
  $.rampage_14_kills = 35;
  $.rampage_15_kills = 20;
  $.rampage_16_kills = 15;
  $.rampage_17_kills = 15;
  $.rampage_18_kills = 35;
  $.rampage_19_kills = 20;
  $.rampage_20_kills = 10;
  $.rampage_21_kills = 30;
  $.rampage_22_kills = 25;
  $.rampage_23_kills = 30;
  $.rampage_24_kills = 20;
  $.rampage_25_kills = 10;
  $.rampage_26_kills = 30;
  $.rampage_27_kills = 25;
  $.rampage_28_kills = 25;
  $.rampage_29_kills = 10;
  $.rampage_30_kills = 25;
  $.rampage_31_kills = 30;
  $.rampage_32_kills = 35;
  $.rampage_33_kills = 25;
  $.rampage_34_kills = 25;
  $.rampage_35_kills = 10;


  //START_KILL_FRENZY StartMessage WeaponType TimeLimit TargetNumber PedOrCarModel ExtraModel1 ExtraModel2 ExtraModel3 FrenzyText
  //				   | TEXT LABEL	|		   | MILLISEC |		  	  |	-1 ALL PEDS	 |									 | True	- Has Kill Frenzy text
  //				   | 			|		   |		  |			  |	-2 ALL CARS	 |		-1 TO IGNORE THESE			 | False - No text


  while ($.total_rampages_passed < 35) {
    await asyncWait(0);

    //IF flag_cell_nation = 0
    ++$.rampage_frame_counter;
    if ($.rampage_frame_counter > 17) {
      $.rampage_frame_counter = 0;
    }
    //ELSE
    //	rampage_frame_counter = 100
    //ENDIF

    if ($.rampage_frame_counter == 0) {
      if ($.rampage_01_flag == 0) {
        $.rampage_flag = $.rampage_01_flag;
        $.rampage_pickup = $.rampage_01;
        $.rampage_weapon_model = MOLOTOV;
        $.rampage_weapontype = 15 /* WEAPONTYPE_MOLOTOV */;
        $.rampage_kills = $.rampage_01_kills;
        $.rampage_pickup_x = 218.22;
        $.rampage_pickup_y = -1613.76;
        $.rampage_pickup_z = 11.06;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_01_flag = $.rampage_flag;
        $.rampage_01 = $.rampage_pickup;
      }
      if ($.rampage_02_flag == 0) {
        $.rampage_flag = $.rampage_02_flag;
        $.rampage_pickup = $.rampage_02;
        $.rampage_weapon_model = ROCKETLA;
        $.rampage_weapontype = 30 /* WEAPONTYPE_ROCKETLAUNCHER */;
        $.rampage_kills = $.rampage_02_kills;
        $.rampage_pickup_x = -1435.29;
        $.rampage_pickup_y = -833.645;
        $.rampage_pickup_z = 30.06;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_02_flag = $.rampage_flag;
        $.rampage_02 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 1) {
      if ($.rampage_03_flag == 0) {
        $.rampage_flag = $.rampage_03_flag;
        $.rampage_pickup = $.rampage_03;
        $.rampage_weapon_model = UZI;
        $.rampage_weapontype = 42 /* WEAPONTYPE_UZI_DRIVEBY */;
        $.rampage_kills = $.rampage_03_kills;
        $.rampage_pickup_x = 234.86;
        $.rampage_pickup_y = 34.22;
        $.rampage_pickup_z = 9.98;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_03_flag = $.rampage_flag;
        $.rampage_03 = $.rampage_pickup;
      }
      if ($.rampage_04_flag == 0) {
        $.rampage_flag = $.rampage_04_flag;
        $.rampage_pickup = $.rampage_04;
        $.rampage_weapon_model = M4;
        $.rampage_weapontype = 26 /* WEAPONTYPE_M4 */;
        $.rampage_kills = $.rampage_04_kills;
        $.rampage_pickup_x = 479.69;
        $.rampage_pickup_y = 1110.18;
        $.rampage_pickup_z = 17.33;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_04_flag = $.rampage_flag;
        $.rampage_04 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 2) {
      if ($.rampage_05_flag == 0) {
        $.rampage_flag = $.rampage_05_flag;
        $.rampage_pickup = $.rampage_05;
        $.rampage_weapon_model = ROCKETLA;
        $.rampage_weapontype = 30 /* WEAPONTYPE_ROCKETLAUNCHER */;
        $.rampage_kills = $.rampage_05_kills;
        $.rampage_pickup_x = 370.63;
        $.rampage_pickup_y = 1125.86;
        $.rampage_pickup_z = 26.5;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_05_flag = $.rampage_flag;
        $.rampage_05 = $.rampage_pickup;
      }
      if ($.rampage_06_flag == 0) {
        $.rampage_flag = $.rampage_06_flag;
        $.rampage_pickup = $.rampage_06;
        $.rampage_weapon_model = MP5LNG;
        $.rampage_weapontype = 25 /* WEAPONTYPE_MP5 */;
        $.rampage_kills = $.rampage_06_kills;
        $.rampage_pickup_x = 144.449;
        $.rampage_pickup_y = -545.234;
        $.rampage_pickup_z = 14.751;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_06_flag = $.rampage_flag;
        $.rampage_06 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 3) {
      if ($.rampage_07_flag == 0) {
        $.rampage_flag = $.rampage_07_flag;
        $.rampage_pickup = $.rampage_07;
        $.rampage_weapon_model = FLAME;
        $.rampage_weapontype = 31 /* WEAPONTYPE_FLAMETHROWER */;
        $.rampage_kills = $.rampage_07_kills;
        $.rampage_pickup_x = -1100.625;
        $.rampage_pickup_y = 1453.43;
        $.rampage_pickup_z = 8.73;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_07_flag = $.rampage_flag;
        $.rampage_07 = $.rampage_pickup;
      }
      if ($.rampage_08_flag == 0) {
        $.rampage_flag = $.rampage_08_flag;
        $.rampage_pickup = $.rampage_08;
        $.rampage_weapon_model = UZI;
        $.rampage_weapontype = 42 /* WEAPONTYPE_UZI_DRIVEBY */;
        $.rampage_kills = $.rampage_08_kills;
        $.rampage_pickup_x = -908.317;
        $.rampage_pickup_y = 744.149;
        $.rampage_pickup_z = 11.092;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_08_flag = $.rampage_flag;
        $.rampage_08 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 4) {
      if ($.rampage_09_flag == 0) {
        $.rampage_flag = $.rampage_09_flag;
        $.rampage_pickup = $.rampage_09;
        $.rampage_weapon_model = MOLOTOV;
        $.rampage_weapontype = 15 /* WEAPONTYPE_MOLOTOV */;
        $.rampage_kills = $.rampage_09_kills;
        $.rampage_pickup_x = -508.768;
        $.rampage_pickup_y = 1149.203;
        $.rampage_pickup_z = 18.172;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_09_flag = $.rampage_flag;
        $.rampage_09 = $.rampage_pickup;
      }
      if ($.rampage_10_flag == 0) {
        $.rampage_flag = $.rampage_10_flag;
        $.rampage_pickup = $.rampage_10;
        $.rampage_weapon_model = M60;
        $.rampage_weapontype = 32 /* WEAPONTYPE_M60 */;
        $.rampage_kills = $.rampage_10_kills;
        $.rampage_pickup_x = -789.41;
        $.rampage_pickup_y = 592.56;
        $.rampage_pickup_z = 11.10;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_10_flag = $.rampage_flag;
        $.rampage_10 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 5) {
      if ($.rampage_11_flag == 0) {
        $.rampage_flag = $.rampage_11_flag;
        $.rampage_pickup = $.rampage_11;
        $.rampage_weapon_model = TEC9;
        $.rampage_weapontype = 22 /* WEAPONTYPE_TEC9 */;
        $.rampage_kills = $.rampage_11_kills;
        $.rampage_pickup_x = -1011.37;
        $.rampage_pickup_y = -170.64;
        $.rampage_pickup_z = 10.99;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_11_flag = $.rampage_flag;
        $.rampage_11 = $.rampage_pickup;
      }
      if ($.rampage_12_flag == 0) {
        $.rampage_flag = $.rampage_12_flag;
        $.rampage_pickup = $.rampage_12;
        $.rampage_weapon_model = CHNSAW;
        $.rampage_weapontype = 11 /* WEAPONTYPE_CHAINSAW */;
        $.rampage_kills = $.rampage_12_kills;
        $.rampage_pickup_x = 68.702;
        $.rampage_pickup_y = -1119.231;
        $.rampage_pickup_z = 10.458;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_12_flag = $.rampage_flag;
        $.rampage_12 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 6) {
      if ($.rampage_13_flag == 0) {
        $.rampage_flag = $.rampage_13_flag;
        $.rampage_pickup = $.rampage_13;
        $.rampage_weapon_model = LASER;
        $.rampage_weapontype = 29 /* WEAPONTYPE_LASERSCOPE */;
        $.rampage_kills = $.rampage_13_kills;
        $.rampage_pickup_x = 85.623;
        $.rampage_pickup_y = -1259.86;
        $.rampage_pickup_z = 17.092;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_13_flag = $.rampage_flag;
        $.rampage_13 = $.rampage_pickup;
      }
      if ($.rampage_14_flag == 0) {
        $.rampage_flag = $.rampage_14_flag;
        $.rampage_pickup = $.rampage_14;
        $.rampage_weapon_model = -1;
        $.rampage_weapontype = 40 /* WEAPONTYPE_RUNOVERBYCAR */;
        $.rampage_kills = $.rampage_14_kills;
        $.rampage_pickup_x = -679.66;
        $.rampage_pickup_y = -419.712;
        $.rampage_pickup_z = 10.469;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_14_flag = $.rampage_flag;
        $.rampage_14 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 7) {
      if ($.rampage_15_flag == 0) {
        $.rampage_flag = $.rampage_15_flag;
        $.rampage_pickup = $.rampage_15;
        $.rampage_weapon_model = RUGER;
        $.rampage_weapontype = 27 /* WEAPONTYPE_RUGER */;
        $.rampage_kills = $.rampage_15_kills;
        $.rampage_pickup_x = -1176.341;
        $.rampage_pickup_y = -702.975;
        $.rampage_pickup_z = 22.662;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_15_flag = $.rampage_flag;
        $.rampage_15 = $.rampage_pickup;
      }
      if ($.rampage_16_flag == 0) {
        $.rampage_flag = $.rampage_16_flag;
        $.rampage_pickup = $.rampage_16;
        $.rampage_weapon_model = ROCKETLA;
        $.rampage_weapontype = 30 /* WEAPONTYPE_ROCKETLAUNCHER */;
        $.rampage_kills = $.rampage_16_kills;
        $.rampage_pickup_x = -626.642;
        $.rampage_pickup_y = -1354.85;
        $.rampage_pickup_z = 16.373;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_16_flag = $.rampage_flag;
        $.rampage_16 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 8) {
      if ($.rampage_17_flag == 0) {
        $.rampage_flag = $.rampage_17_flag;
        $.rampage_pickup = $.rampage_17;
        $.rampage_weapon_model = MINIGUN;
        $.rampage_weapontype = 33 /* WEAPONTYPE_MINIGUN */;
        $.rampage_kills = $.rampage_17_kills;
        $.rampage_pickup_x = -1519.33;
        $.rampage_pickup_y = -292.236;
        $.rampage_pickup_z = 14.86;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_17_flag = $.rampage_flag;
        $.rampage_17 = $.rampage_pickup;
      }
      if ($.rampage_18_flag == 0) {
        $.rampage_flag = $.rampage_18_flag;
        $.rampage_pickup = $.rampage_18;
        $.rampage_weapon_model = GRENADE;
        $.rampage_weapontype = 12 /* WEAPONTYPE_GRENADE */;
        $.rampage_kills = $.rampage_18_kills;
        $.rampage_pickup_x = -956.113;
        $.rampage_pickup_y = -1206.33;
        $.rampage_pickup_z = 14.86;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_18_flag = $.rampage_flag;
        $.rampage_18 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 9) {
      if ($.rampage_19_flag == 0) {
        $.rampage_flag = $.rampage_19_flag;
        $.rampage_pickup = $.rampage_19;
        $.rampage_weapon_model = 7 /* SNIPER */;
        $.rampage_weapontype = 28 /* WEAPONTYPE_SNIPERRIFLE */;
        $.rampage_kills = $.rampage_19_kills;
        $.rampage_pickup_x = -890.184;
        $.rampage_pickup_y = -489.655;
        $.rampage_pickup_z = 36.20;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_19_flag = $.rampage_flag;
        $.rampage_19 = $.rampage_pickup;
      }
      if ($.rampage_20_flag == 0) {
        $.rampage_flag = $.rampage_20_flag;
        $.rampage_pickup = $.rampage_20;
        $.rampage_weapon_model = KATANA;
        $.rampage_weapontype = 10 /* WEAPONTYPE_KATANA */;
        $.rampage_kills = $.rampage_20_kills;
        $.rampage_pickup_x = 3.426;
        $.rampage_pickup_y = -1147.00;
        $.rampage_pickup_z = 10.45;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_20_flag = $.rampage_flag;
        $.rampage_20 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 10) {
      if ($.rampage_21_flag == 0) {
        $.rampage_flag = $.rampage_21_flag;
        $.rampage_pickup = $.rampage_21;
        $.rampage_weapon_model = -1;
        $.rampage_weapontype = 40 /* WEAPONTYPE_RUNOVERBYCAR */;
        $.rampage_kills = $.rampage_21_kills;
        $.rampage_pickup_x = 468.656;
        $.rampage_pickup_y = -1608.79;
        $.rampage_pickup_z = 11.03;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_21_flag = $.rampage_flag;
        $.rampage_21 = $.rampage_pickup;
      }
      if ($.rampage_22_flag == 0) {
        $.rampage_flag = $.rampage_22_flag;
        $.rampage_pickup = $.rampage_22;
        $.rampage_weapon_model = PYTHON;
        $.rampage_weapontype = 18 /* WEAPONTYPE_PYTHON */;
        $.rampage_kills = $.rampage_22_kills;
        $.rampage_pickup_x = 587.795;
        $.rampage_pickup_y = 1206.26;
        $.rampage_pickup_z = 15.64;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_22_flag = $.rampage_flag;
        $.rampage_22 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 11) {
      if ($.rampage_23_flag == 0) {
        $.rampage_flag = $.rampage_23_flag;
        $.rampage_pickup = $.rampage_23;
        $.rampage_weapon_model = UZI;
        $.rampage_weapontype = 42 /* WEAPONTYPE_UZI_DRIVEBY */;
        $.rampage_kills = $.rampage_23_kills;
        $.rampage_pickup_x = 300.673;
        $.rampage_pickup_y = 1324.88;
        $.rampage_pickup_z = 22.919;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_23_flag = $.rampage_flag;
        $.rampage_23 = $.rampage_pickup;
      }
      if ($.rampage_24_flag == 0) {
        $.rampage_flag = $.rampage_24_flag;
        $.rampage_pickup = $.rampage_24;
        $.rampage_weapon_model = CHNSAW;
        $.rampage_weapontype = 11 /* WEAPONTYPE_CHAINSAW */;
        $.rampage_kills = $.rampage_24_kills;
        $.rampage_pickup_x = 217.247;
        $.rampage_pickup_y = 261.372;
        $.rampage_pickup_z = 8.710;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_24_flag = $.rampage_flag;
        $.rampage_24 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 12) {
      if ($.rampage_25_flag == 0) {
        $.rampage_flag = $.rampage_25_flag;
        $.rampage_pickup = $.rampage_25;
        $.rampage_weapon_model = ROCKETLA;
        $.rampage_weapontype = 30 /* WEAPONTYPE_ROCKETLAUNCHER */;
        $.rampage_kills = $.rampage_25_kills;
        $.rampage_pickup_x = -366.44;
        $.rampage_pickup_y = -1742.10;
        $.rampage_pickup_z = 11.426;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_25_flag = $.rampage_flag;
        $.rampage_25 = $.rampage_pickup;
      }
      if ($.rampage_26_flag == 0) {
        $.rampage_flag = $.rampage_26_flag;
        $.rampage_pickup = $.rampage_26;
        $.rampage_weapon_model = MINIGUN;
        $.rampage_weapontype = 33 /* WEAPONTYPE_MINIGUN */;
        $.rampage_kills = $.rampage_26_kills;
        $.rampage_pickup_x = -448.796;
        $.rampage_pickup_y = 1249.27;
        $.rampage_pickup_z = 11.75;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_26_flag = $.rampage_flag;
        $.rampage_26 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 13) {
      if ($.rampage_27_flag == 0) {
        $.rampage_flag = $.rampage_27_flag;
        $.rampage_pickup = $.rampage_27;
        $.rampage_weapon_model = PYTHON;
        $.rampage_weapontype = 18 /* WEAPONTYPE_PYTHON */;
        $.rampage_kills = $.rampage_27_kills;
        $.rampage_pickup_x = -674.22;
        $.rampage_pickup_y = 1162.70;
        $.rampage_pickup_z = 28.15;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_27_flag = $.rampage_flag;
        $.rampage_27 = $.rampage_pickup;
      }
      if ($.rampage_28_flag == 0) {
        $.rampage_flag = $.rampage_28_flag;
        $.rampage_pickup = $.rampage_28;
        $.rampage_weapon_model = CHROMEGUN;
        $.rampage_weapontype = 19 /* WEAPONTYPE_SHOTGUN */;
        $.rampage_kills = $.rampage_28_kills;
        $.rampage_pickup_x = -1143.48;
        $.rampage_pickup_y = -410.87;
        $.rampage_pickup_z = 10.95;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_28_flag = $.rampage_flag;
        $.rampage_28 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 14) {
      if ($.rampage_29_flag == 0) {
        $.rampage_flag = $.rampage_29_flag;
        $.rampage_pickup = $.rampage_29;
        $.rampage_weapon_model = LASER;
        $.rampage_weapontype = 29 /* WEAPONTYPE_LASERSCOPE */;
        $.rampage_kills = $.rampage_29_kills;
        $.rampage_pickup_x = 624.26;
        $.rampage_pickup_y = -230.158;
        $.rampage_pickup_z = 23.915;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_29_flag = $.rampage_flag;
        $.rampage_29 = $.rampage_pickup;
      }
      if ($.rampage_30_flag == 0) {
        $.rampage_flag = $.rampage_30_flag;
        $.rampage_pickup = $.rampage_30;
        $.rampage_weapon_model = CHROMEGUN;
        $.rampage_weapontype = 19 /* WEAPONTYPE_SHOTGUN */;
        $.rampage_kills = $.rampage_30_kills;
        $.rampage_pickup_x = -34.130;
        $.rampage_pickup_y = -948.707;
        $.rampage_pickup_z = 21.772;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_30_flag = $.rampage_flag;
        $.rampage_30 = $.rampage_pickup;
      }
    }

    //593.315 -352.826 13.711


    if ($.rampage_frame_counter == 15) {
      if ($.rampage_31_flag == 0) {
        $.rampage_flag = $.rampage_31_flag;
        $.rampage_pickup = $.rampage_31;
        $.rampage_weapon_model = SHOTGSPA;
        $.rampage_weapontype = 20 /* WEAPONTYPE_SPAS12_SHOTGUN */;
        $.rampage_kills = $.rampage_31_kills;
        $.rampage_pickup_x = 593.315;
        $.rampage_pickup_y = -352.826;
        $.rampage_pickup_z = 13.711;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_31_flag = $.rampage_flag;
        $.rampage_31 = $.rampage_pickup;
      }
      if ($.rampage_32_flag == 0) {
        $.rampage_flag = $.rampage_32_flag;
        $.rampage_pickup = $.rampage_32;
        $.rampage_weapon_model = SHOTGSPA;
        $.rampage_weapontype = 20 /* WEAPONTYPE_SPAS12_SHOTGUN */;
        $.rampage_kills = $.rampage_32_kills;
        $.rampage_pickup_x = -1234.830;
        $.rampage_pickup_y = -90.378;
        $.rampage_pickup_z = 11.43;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_32_flag = $.rampage_flag;
        $.rampage_32 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 16) {
      if ($.rampage_33_flag == 0) {
        $.rampage_flag = $.rampage_33_flag;
        $.rampage_pickup = $.rampage_33;
        $.rampage_weapon_model = SHOTGSPA;
        $.rampage_weapontype = 20 /* WEAPONTYPE_SPAS12_SHOTGUN */;
        $.rampage_kills = $.rampage_33_kills;
        $.rampage_pickup_x = -1483.470;
        $.rampage_pickup_y = -881.677;
        $.rampage_pickup_z = 14.87;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_33_flag = $.rampage_flag;
        $.rampage_33 = $.rampage_pickup;
      }
      if ($.rampage_34_flag == 0) {
        $.rampage_flag = $.rampage_34_flag;
        $.rampage_pickup = $.rampage_34;
        $.rampage_weapon_model = M4;
        $.rampage_weapontype = 26 /* WEAPONTYPE_M4 */;
        $.rampage_kills = $.rampage_34_kills;
        $.rampage_pickup_x = -194.701;
        $.rampage_pickup_y = -1085.067;
        $.rampage_pickup_z = 15.66;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_34_flag = $.rampage_flag;
        $.rampage_34 = $.rampage_pickup;
      }
    }
    if ($.rampage_frame_counter == 17) {
      if ($.rampage_35_flag == 0) {
        $.rampage_flag = $.rampage_35_flag;
        $.rampage_pickup = $.rampage_35;
        $.rampage_weapon_model = KATANA;
        $.rampage_weapontype = 10 /* WEAPONTYPE_KATANA */;
        $.rampage_kills = $.rampage_35_kills;
        $.rampage_pickup_x = -983.373;
        $.rampage_pickup_y = -353.997;
        $.rampage_pickup_z = 13.84;
        await rampage_gosub();  // SCM GOSUB rampage_gosub
        $.rampage_35_flag = $.rampage_flag;
        $.rampage_35 = $.rampage_pickup;
      }
    }


  }


  Stat.PlayerMadeProgress(1);
  Mission.Finish();
  // MissionBoundary



}
