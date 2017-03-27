import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'tcw2-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  private recipe: Recipe;
  private bNew: boolean;
  private recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private rs: RecipeService,
              private rtr: Router,
              private  formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.recipeIndex = +params['id'];
          this.bNew = false;
          this.recipe = this.rs.getRecipe(this.recipeIndex);
        } else {
          this.bNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if (this.bNew) {
      this.rs.addRecipe(newRecipe);
    }
    else {
      this.rs.editRecipe(this.recipe, newRecipe);
    }
    this.navBack();
  }

  onRemoveIng(ingIndex: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(ingIndex);
  }

  onAddIng(ingName: string, ingQty: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup(
        {
          name: new FormControl(ingName, Validators.required),
          quantity: new FormControl(ingQty, [Validators.required, Validators.pattern("\\d+")])
        }
      )
    );
  }

  onCancel() {
    this.navBack();
  }

  private navBack() {
    this.rtr.navigate(['../']);
  }

  private initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);
    if (!this.bNew) {
      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(
          new FormGroup(
            {
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              quantity: new FormControl(this.recipe.ingredients[i].quantity, [Validators.required, Validators.pattern("\\d+")])
            }
          )
        )
      }
      recipeName = this.recipe.name;
      recipeImage = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }
    this.recipeForm = this.formBuilder.group(
      {
        name: [recipeName, Validators.required],
        imagePath: [recipeImage, Validators.required],
        description: [recipeContent, Validators.required],
        ingredients: recipeIngredients
      }
    );
  }
}
