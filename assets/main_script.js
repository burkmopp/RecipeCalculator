$( document ).ready(function() {
	$("#recipe").change(recipeCalc)
	$("#multiplier").change(recipeCalc)
});

function recipeCalc (){
	var choice = $("#recipe").val();
	var num = $("#multiplier").val();
	
	$(".recipe_wrapper").show();
	
	switch (choice) {
		
		//Cooking Ingredients
	  case "Vinegar":
	    $(".current_reciper").html(("Sugar x1, Leavening Agent x1, Fruit x1, Grain x1").replace(/\d+/g, digit => digit * num));
	    break;
	  case "Essence of Liquor":
	    $(".current_reciper").html(("Flour x1, Leavening Agent x1, Fruit x1").replace(/\d+/g, digit => digit * num));
	    break;
		case "Dressing":
	    $(".current_reciper").html(("Olive Oil x1, Egg x1, Salt x2, Mineral Water x1").replace(/\d+/g, digit => digit * num));
	    break;
		case "Red Sauce":
			$(".current_reciper").html(("Base Sauce x1, Sugar x2, Mineral Water x2, Meat x1").replace(/\d+/g, digit => digit * num));
			break;
		case "White Sauce":
			$(".current_reciper").html(("Base Sauce x1, Milk x1, Cooking Wine x2, Fruit x1").replace(/\d+/g, digit => digit * num));
			break;
		
		//Worker Points
	  case "Beer":
	    $(".current_reciper").html(("Sugar x1, Leavening Agent x2, Mineral Water x6, Grain x5").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Worker recovers 2 action points</i>");
	    break;
	  case "Oatmeal":
	    $(".current_reciper").html(("Milk x3, Onions x3, Cooking Honey x2, Flour x9").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Worker recovers 5 action points</i>");
	    break;
		case "Fish Fillet Chip":
	    $(".current_reciper").html(("Flour x7, Salt x2, White Sauce x3, Dried Fish x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Worker recovers 5 action points</i>");
	    break;
		case "African Snake Stew":
			$(".current_reciper").html(("Snake Meat x3, Frica x6, Parca x2, Mineral Water x5").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Worker recovers 5 action points</i>");
			break;
		case "Cheese Pie":
			$(".current_reciper").html(("Cheese x7, Butter x3, Egg x3, Dough x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Worker recovers 7 action points</i>");
			break;
			
		//Movement Speed
	  case "Fried Fish":
	    $(".current_reciper").html(("Dried Fish x2, Deep Frying Oil x2, Flour x3").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Movement Speed +1 for 30 minutes</i>");
	    break;
	  case "Live Fish Salad":
	    $(".current_reciper").html(("Dried Fish x4, Dressing x2, Onions x3, Cheese x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Movement Speed +1 for 60 minutes</i>");
	    break;
		case "Meat Sandwich":
	    $(".current_reciper").html(("	Soft Bread x1, Meat x7, Cheese x3, Vegetable x6").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Movement Speed +1, Max Stamina +200 for 90 minutes</i>");
	    break;
			
		//Fishing Speed
	  case "Exotic Herbal Wine":
	    $(".current_reciper").html(("Dough x3, Essence of Liquor x1, Leavening Agent x2, Mineral Water x5").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Fishing speed +1 for 30 minutes</i>");
	    break;
	  case "Aloe Yogurt":
	    $(".current_reciper").html(("Aloe x5, Milk x2, Leavening Agent x3, Sugar x3").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Fishing speed +1 for 30 minutes</i>");
	    break;
		case "Fruit Wine":
	    $(".current_reciper").html(("Essence of Liquor x3, Exotic Herbal Wine x1, Mineral Water x2, Fruit x5").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Fishing speed +1 for 60 minutes</i>");
	    break;
	  case "Beehive Cookie":
	    $(".current_reciper").html(("Cooking Honey x6, Egg x2, Dough x4, Milk x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Weight limit +50, Fishing Speed +1 for 90 minutes</i>");
	    break;
			
		//Gathering Speed
	  case "Grain Soup":
	    $(".current_reciper").html(("Grain x6, Mineral Water x3, Salt x1, Cooking Wine x3").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Gathering Speed +1 for 30 minutes</i>");
	    break;
	  case "Pickled Vegetables":
	    $(".current_reciper").html(("Vegetable x8, Vinegar x4, Leavening Agent x2, Sugar x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Gathering Speed +1 for 60 minutes</i>");
	    break;
			
		//Max HP
	  case "Meat Stew":
	    $(".current_reciper").html(("Flour x2, Mineral Water x3, Cooking Wine x2, Meat x5").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Max HP +30 for 30 minutes</i>");
	    break;
	  case "Steak":
	    $(".current_reciper").html(("Meat x8, Salt x3, Pepper x1, Garlic x2, Red Sauce x2").replace(/\d+/g, digit => digit * num)  + "<br><i>And it will give: Max HP +50 for 60 minutes</i>");
	    break;
			
		//Max MP
	  case "Fruit Juice":
	    $(".current_reciper").html(("Sugar x3, Mineral Water x5, Salt x1, Fruit x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Max MP +30 for 30 minutes</i>");
	    break;
	  case "Tea With Fine Scent":
	    $(".current_reciper").html(("Rose/Tulip/Sunflower x4, Mineral Water x7, Cooking Honey x3, (Apple/Grapes/Strawberry) x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Max MP +50 for 60 minutes</i>");
	    break;
			
		//Max Stamina
	  case "Soft Bread":
	    $(".current_reciper").html(("Dough x6, Leavening Agent x2, Egg x2, Milk x3").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Max stamina +100 for 30 minutes</i>");
	    break;
	  case "Lizard Kebab":
	    $(".current_reciper").html(("Lizard Meat x6, Red Sauce x2, Grains x7, Vegetable x4, Onions x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Max stamina +100 for 30 minutes</i>");
	    break;
		case "Meat Pie":
	    $(".current_reciper").html(("Meat x4, Dough x6, Sugar x3, Olive Oil x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Max stamina +200 for 60 minutes</i>");
	    break;
		case "Desert Dumpling":
			$(".current_reciper").html(("Lizard Meat x6, Dough x6, Cinnamon x1, Olive Oil x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Max stamina +200 for 60 minutes</i>");
			break;
									
		//Damage Bonus
	  case "Grilled Sausage":
	    $(".current_reciper").html(("Meat x6, Onion x1, Pepper x2, Salt x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Damage +1 for 30 minutes</i>");
	    break;
	  case "Boiled Bird Eggs":
	    $(".current_reciper").html(("Mineral Water x6, Egg x3, Salt x1,  Cooking Wine x1").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Damage +1 for 30 minutes</i>");
	    break;
		case "Stir-Fried Meat":
	    $(".current_reciper").html(("Meat x7, Base Sauce x2, Onion x2, Hot Pepper x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Damage +2 for 60 minutes</i>");
	    break;
		case "Ham Sandwich":
			$(".current_reciper").html(("Soft Bread x2, Grilled Sausage x2, Egg x4, Vegetable x5").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Damage +3, Accuracy +8 for 90 minutes</i>");
			break;
		case "Dark Pudding":
			$(".current_reciper").html(("Oatmeal x1, Pickled Vegetables x1, Poultry x5, Deer Blood x7	").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Damage +3, Damage against human race +2 for 90 minutes</i>");
			break;
			
		//Attack Speed
	  case "Seafood Grilled with Butter":
	    $(".current_reciper").html(("Dried Seafood x2, Butter x3, Salt x2, Olive Oil x1").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Attack Speed +1 for 30 minutes</i>");
	    break;
	  case "Smoked Fish Steak":
	    $(".current_reciper").html(("Dried Fish x4, Olive Oil x1, Salt x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Attack Speed +1 for 60 minutes</i>");
	    break;
		case "Cheese Gratin":
	    $(".current_reciper").html(("Grilled Sausage x1, Cheese x3, Dough x5, Red Sauce x3, Vegetable x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Attack Speed +1, Max HP +70 for 90 minutes</i>");
	    break;
			
		//Casting Speed
	  case "Stir-Fried Seafood":
	    $(".current_reciper").html(("ried Seafood x2, White Sauce x2, Hot Pepper x2, Vegetable x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Casting Speed +1 for 30 minutes</i>");
	    break;
	  case "Seafood Pasta":
	    $(".current_reciper").html(("Dried Seafood x4, Dough x5, Cooking Wine x3, Garlic x3	").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Casting Speed +1 for 60 minutes</i>");
	    break;
		case "Fruit Pie":
	    $(".current_reciper").html(("Dough x6, Fruit x6, Cream x3, Sugar x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Casting Speed +1, Max MP +70 for 90 minutes</i>");
	    break;
			
		//Critical Strike
	  case "Meat Soup":
	    $(".current_reciper").html(("Mineral Water x5, Meat x5, Pepper x3, Cream x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Critical Strike +1 for 30 minutes</i>");
	    break;
	  case "Fish Soup":
	    $(".current_reciper").html(("Flour x3, Dried Fish x2, Cream x2, Mineral Water x6").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Critical Strike +1 for 60 minutes</i>");
	    break;
			
		//Accuracy Buff
	  case "Steamed Fish":
	    $(".current_reciper").html(("Dried Fish x2, Garlic x2, Mineral Water x3, Salt x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Accuracy +4 for 30 minutes</i>");
	    break;
	  case "Aloe Cookie":
	    $(".current_reciper").html(("Aloe x5, Dough x7, Cooking Honey x3, Sugar x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Accuracy +4 for 30 minutes</i>");
	    break;
		case "Steamed Seafood":
	    $(".current_reciper").html(("Dried Seafood x4, Dough x5, Cooking Wine x3, Garlic x3").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Accuracy +6 for 60 minutes</i>");
	    break;
			
		//Defense Buff
	  case "Omelet":
	    $(".current_reciper").html(("Grain x5, Egg x5, Olive Oil x2, Salt x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Defense +2 for 60 minutes</i>");
	    break;
	  case "Honey Wine":
	    $(".current_reciper").html(("Cooking Honey x3, Sugar x2, Mineral Water x6, Essence of Liquor x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Defense +2 for 60 minutes</i>");
	    break;
		case "Lean Meat Salad":
	    $(".current_reciper").html(("Meat x8, Dressing x4, Pepper x3, Vinegar x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Defense +3, HP Regen +5 for 90 minutes</i>");
	    break;
			
		//HP Regen
	  case "Fried Vegetables":
	    $(".current_reciper").html(("Deep Frying Oil x6, Dough x4, Vegetable x4, Egg x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: HP Regen +2 for 30 minutes</i>");
	    break;
	  case "Fried Bird":
	    $(".current_reciper").html(("Poultry x7, Egg x2, Flour x4, Pepper x3").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: HP Regen +5 for 60 minutes</i>");
	    break;
			
		//MP Regen
	  case "Fruit Pudding":
	    $(".current_reciper").html(("Fruit x5, Cream x1, Milk x3, Sugar x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: MP Regen +2 for 30 minutes</i>");
	    break;
	  case "Fruit and Vegetable Salad":
	    $(".current_reciper").html(("Vinegar x2, Fruit x4, Vegetable x4, Cooking Wine x4").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: MP Regen +5 for 60 minutes</i>");
	    break;
			
		//Pet Food
	  case "Good Feed":
	    $(".current_reciper").html(("Meat x6, Flour x4, Mineral Water x3, Dried Fish x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Pet food +40 recovery</i>");
	    break;
	  case "Organic Feed":
	    $(".current_reciper").html(("Meat x5, Dried Fish x4, Poultry x4, Oatmeal x2").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Pet food +70 recovery</i>");
	    break;
			
      //Exp Bonus
	  case "Steamed Bird":
	    $(".current_reciper").html(("Poultry x5, Vegetable x3, Salt x2, Vinegar x2, Essence of Liquor x2").replace(/\d+/g, digit => digit * num) + "<br><i>Experience +3% for 60 minutes</i>");
	    break;
	  case "Meat Croquette":
	    $(".current_reciper").html(("Meat x8, Flour x5, Deep Frying Oil x4, Egg x2, Cheese x2").replace(/\d+/g, digit => digit * num)  + "<br><i>Experience +5% for 90 minutes</i>");
	    break;
		case "Milk Tea":
	    $(".current_reciper").html(("Tea With Fine Scent x2, Cooking Honey x3, Milk x3, Flour x2").replace(/\d+/g, digit => digit * num)  + "<br><i>Experience +8%, MP Regen +5 for 90 minutes</i>");
	    break;
      
      //Crafting Exp Bonus
	  case "Assorted Side Dishes":
	    $(".current_reciper").html(("Milk Tea x1, Cheese Pie x1, Soft Bread x2, Meat Pasta x1, Fish Fillet Salad x1").replace(/\d+/g, digit => digit * num) + "<br><i>Crafting Experience +5% for 90 minutes</i>");
	    break;
	  case "Sute Tea":
	    $(".current_reciper").html(("Tea With Fine Scent x2, Milk x3, Salt x1, Butter x2").replace(/\d+/g, digit => digit * num)  + "<br><i>Crafting Experience +8% for 90 minutes</i>");
	    break;
      
      //Special Dishes
	  case "Calpheon Special":
	    $(".current_reciper").html(("Milk Tea x1, Cheese Pie x1, Soft Bread x2, Meat Pasta x1, Fish Fillet Salad x1").replace(/\d+/g, digit => digit * num) + "<br><i>And it will give: Defense +5, Max HP +100, HP Regen +5 for 90 minutes</i>");
	    break;
	  case "Serendia Special":
	    $(".current_reciper").html(("Ham Sandwich x1, Beehive Cookie x1, Boiled Bird Eggs x2, Fruit Wine x2, Meat Pie x1").replace(/\d+/g, digit => digit * num)  + "<br><i>And it will give: Damage +5, Critical Chance +5%, Accuracy +10 for 90 minutes</i>");
	    break;
		case "Balenos Special":
	    $(".current_reciper").html(("Cheese Gratin x1, Meat Croquette x1, Smoked Fish Steak x1, Beer x2, Stir-Fried Vegetables x2").replace(/\d+/g, digit => digit * num)  + "<br><i>And it will give: Movement Speed +2, Fishing Speed +2, Gathering Speed +2 for 90 minutes</i>");
	    break;
		case "Mediah Special":
			$(".current_reciper").html(("Dark Pudding x1, Oatmeal x1, Exotic Herbal Wine x2, Grilled Sausage x2, Lean Meat Salad x1").replace(/\d+/g, digit => digit * num)  + "<br><i>And it will give: Damage +5, Attack Speed +1, Cast Speed +1 for 90 minutes</i>");
			break;
    case "Knight Combat Rations":
			$(".current_reciper").html(("Dark Pudding x1, Ham Sandwich x1, Fruit Wine x1, Meat Croquette x1").replace(/\d+/g, digit => digit * num)  + "<br><i>And it will give: Damage +5, Damage against human race +5, Defense +5 for 90 minutes</i>");
			break;
      
		default: 
				  $(".current_reciper").html($("#recipe").val());
	}
	
}