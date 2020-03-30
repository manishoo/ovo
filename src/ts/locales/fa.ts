/*
 * fa.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

enum FaLocale {
  'hello' = 'سلام',
  'getStarted' = 'شروع!',
  'saturday' = 'شنبه',
  'sunday' = 'یکشنبه',
  'monday' = 'دوشنبه',
  'tuesday' = 'سه‌شنبه',
  'wednesday' = 'چهارشنبه',
  'thursday' = 'پنجشنبه',
  'friday' = 'جمعه',

  'Email' = 'ایمیل',
  'Gender' = 'جنسیت',
  'passwordConfirmation' = 'تکرار گذرواژه',

  'Username' = 'نام کاربری',
  'Password' = 'گذرواژه',
  'Login' = 'ورود',

  'viewMealPlan' = 'مشاهده برنامه غذایی',
  'showMeMealPlan' = 'مشاهده برنامه غذایی',
  'Instructions' = 'مراحل طرز تهیه',
  'Ingredients' = 'مواد لازم',
  'IngredientsYieldLabel' = 'برای {{number}} نفر',
  'ShoppingList' = 'لیست خرید',
  'Pantry' = 'پنتری',
  'Explore' = 'گشت‌و‌گذار',
  'Profile' = 'پروفایل',
  'Dishes' = 'دیش ها',
  'CreateRecipe' = 'دیش جدید',
  'CreateNewMeal' = 'سفره جدید',

  'Feed' = 'برای من',
  'Back' = 'بازگشت',
  'ensureSafeAccount' = 'To ensure a safe account, we require your password to be at least 8 characters, including an uppercase letter and a number.',
  'terms' = 'By creating a new account or signing in, You are agreeing to Prana’s Terms of Service and Privacy Policy.',
  'MealPlan&ShoppingList' = 'برنامه غذایی و لیست خرید',
  'Articles' = 'مقالات',
  'DrawerBrowse' = 'دسته‌بندی ها',
  'CreateNewRecipe' = 'دستور غذایی جدید',
  'SearchRecipes' = 'جستجوی هزاران دستور غذا',
  'SearchResults' = 'نتایج جستجو',
  'ProfileSettings' = 'تنظیمات پروفایل',
  'Cancel' = 'بازگشت',
  'description' = 'توضیحات',
  'g' = 'گرم',
  'createX' = 'تعریف {{name}}',
  'min' = 'دقیقه',
  'Name' = 'نام',
  'Slug' = 'اسلاگ',
  'Description' = 'توضیحات (اختیاری)',
  'PreparationTime' = 'زمان آماده سازی‌ (دقیقه)',
  'CookingTime' = 'زمان پخت (دقیقه)',
  'TotalTime' = 'زمان کل (دقیقه)',
  'Yield' = 'تعداد سرو',
  'deleteRecipe?' = 'آیا مطمئنید؟',
  'yes' = 'آره',
  'no' = 'نه',

  'weightName' = 'نام واحد اندازه‌گیری',
  'gramWeight' = 'وزن (گرم)',

  'Path' = 'برنامه',
  'MealPlan' = 'برنامه غذایی',

  'landing_1_t' = 'راحت\u200Cتر برنامه\u200Cغذایی اختصاصیتون رو دنبال کنین',
  'landing_1_s' = 'پرانا درمورد شرایط بدنیتون، طبع و سلیقه\u200Cتون، بیماریاتون، بودجه و هدف تندرستیتون باهاتون صحبت می\u200Cکنه، وقتی خوب شناختتون به کمک متخصصین تغذیه برنامه غذایی اختصاصیتون رو پیگیری می\u200Cکنه.',

  'landing_2_t' = 'خیالتون راحت، اصلا بهش فکر نکنین',
  'landing_2_s' = 'هروقت وقت غذاست پرانا پر سر و صداست.\nاطلاع رسانی\u200Cها، ذخیره\u200Cسازی فعالیت\u200Cهای بدنی و پیگیری سلامتی شما بخشی از وظایف کالریاست.',

  'landing_3_t' = 'طرزتهیه\u200Cها و غذاهای جدید رو تجربه کنین',
  'landing_3_s' = 'خوشمزه\u200Cهایی که توی آشپزخونه\u200Cها ساخته میشن تمومی ندارن، تو دنیای اینترنت غذا\u200Cها از این آشپزخونه به اون آشپزخونه سفر میکنن. تجربه کنین و دست\u200Cپختتون رو با دیگران به اشتراک بگذارین.',

  'landing_4_t' = 'لیست خریدتون طبق برنامتون آماده میشه',
  'landing_4_s' = 'خرید کردن با لیست خریدی که طبق نیاز و برنامه اختصاصی\nخودتون آماده شده راحت\u200Cتره.',

  'landingfooterAck' = 'استفاده از مطالب پرانا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به prana.green می\u200Cباشد.',

  'landingTitle' = 'دستیار هوشمند تغذیه',
  'landingSubtitle' = 'دکتر و آشپز و فروشگاهو بزار تو جیبت!',
  'LandingStartFree' = 'رایگان شروع کنید! \uD83D\uDCB8',

  'LandingFooterCentralOffice' = 'دفتر مرکزی',
  'LandingFooterAboutPrana' = 'درباره پرانا',
  'LandingFooterContactUs' = 'ارتباط با ما',
  'LandingFooterTerms' = 'مقررات استفاده',
  'LandingFooterSocialMediaText' = 'پرانا را در شبکه های اجتماعی دنبال کنید',
  'LandingReadMore' = 'بیشتر بخوانید',

  'assistantIntro1' = 'سلام!\n من پرانا هستم',
  'assistantIntro2' = 'من میتونم کمکت کنم غذاتو راحت تر تهیه کنی و خیلی چیزای دیگه',
  'hiAssistant' = 'سلام پرانا \uD83D\uDC4B',
  'Ok' = 'باشه',
  'AssistantInputPlaceholder' = 'پیام',
  'getNamePlaceholder' = 'مثل محمد',
  'getAgePlaceholder' = 'مثل ۳۲',

  'cancel' = 'بازگشت',
  'editMealSettings' = 'تنظیمات وعده‌ غذایی',
  'viewAlternatives' = 'مشاهده دیگر گزینه‌ها',
  'recurOn' = 'تکرار در ...',
  'mealItemExample' = 'مثل موز، برنج، زردچوبه، ...',

  'AddIngredient' = 'اضافه کردن ماده غذایی',
  'UploadImage' = 'بارگزاری عکس غذا',
  'e.g. Rice' = 'مثل برنج...',
  'e.g. Banana' = 'مثل موز...',
  'Describe the story behind your recipe' = 'داستان غذاتو بگو',
  'Add Tag' = 'ساخت تگ جدید',
  'RecipeExtraGuide' = 'لطفا تگ های مناسب را برای این دستور تهیه وارد کنید و سپس دکمه ثبت را بزنید',
  'e.g. Easy Sesame Chicken' = 'مثل خورش قیمه...',

  'areyousure?' = 'مطمئنی؟',
  'Add Alternative' = 'اضافه کردن جایگزین',
  'deleteTag?' = 'مطمئنی؟',
  'Bulk create' = 'ساخت تمام جایگشت ها',

  'Foods' = 'غذا ها',
  'Recipes' = 'دستور تهیه ها',
  'Meals' = 'سفره ها',

  'prepTime' = 'زمان آماده سازی',
  'cookTime' = 'زمان پخت',
  'totalTime' = 'زمان کل',

  'areYouSureYouWantToLeave' = 'مطمئنی میخوای بری؟',

  '______Login_Page______' = '//',
  'dontHaveAnAccount' = 'عضو نیستید؟ به پرانا بپیوندید',

  '______Recipe_Page______' = '//',
  'Nutrition (per serving)' = 'اطلاعات تغذیه‌ای (برای هر وعده)',
  'calories' = 'کالری',
  'proteins' = 'پروتئین',
  'carbs' = 'کربوهیدرات',
  'fats' = 'چربی',
  'Complexity' = 'درجه پیچیدگی',
  'Timing' = 'زمانبندی',

  '______Create_Recipe_Page______' = '//',
  'Create Recipe' = 'ساخت دستور تهیه',
  'Edit Recipe' = 'بروزرسانی دستور تهیه',
  'e.g. Cook the Rice...' = 'مثل برنج را بپزید...',
  'Delete Recipe' = 'حذف',

  '______Create_Meal_Page______' = '//',
  'Meal Items' = 'آیتم های سفره',
  'Edit Meal' = 'بروزرسانی سفره',
  'Create Meal' = 'ساخت سفره',
  'Update Meal' = 'تغییر سفره',

  '______Settings_Page______' = '//',
  'Edit Profile' = 'بروزرسانی پروفایل',
  'First Name' = 'نام',
  'Last Name' = 'نام خانوادگی',
  'Bio' = 'درباره من',
  'Website' = 'وبسایت',
  'Instagram' = 'آیدی اینستاگرام',
  'Twitter' = 'آیدی توویتر',
  'Pinterest' = 'آیدی پینترست',
  'NewPassword' = 'تکرار گذرواژه',
  'Tell others about yourself' = 'خودت رو معرفی کن',
  'Account Info' = 'اطلاعات اکانت',
  'Select gender' = 'انتخاب جنسیت',
  'Social Media' = 'شبکه های اجتماعی',
  'Change Password' = 'تغییر گذرواژه',
  'submit' = 'ثبت',
  'Submit' = 'ثبت',
  Submitting = 'در حال ثبت',

  'Loading' = 'در حال بارگذاری',

  'Search' = 'گشت‌و‌گذار',
  'Logout' = 'خروج',
  'Delete' = 'حذف',
  'Edit Food' = ' بروزرسانی غذا',
  'Unit' = 'واحد',
  'Amount' = 'مقدار',

  'RecipeCreationSuccess' = 'دستور تهیه با موفقیت ساخته شد',
  'RecipeUpdateSuccess' = 'دستور تهیه با موفقیت بروز رسانی شد',

  'socialMediaPlaceholderInstagram' = 'مثل pranadotgreen',
  'socialMediaPlaceholderTwitter' = 'مثل pranadotgreen',
  'socialMediaPlaceholderPinterest' = 'مثل pranadotgreen',

  'Difficulty' = 'سطح سختی',
  'Select' = 'انتخاب کنید',
  'easy' = 'آسان',
  'medium' = 'متوسط',
  'hard' = 'سخت',
  'expert' = 'حرفه‌ای',

  'Publishing' = 'در حال انتشار',
  'Publish Recipe' = 'انتشار',
  'UnPublishing' = 'در حال خصوصی سازی',
  'UnPublish Recipe' = 'خصوصی سازی',

  'Custom Weight' = 'واحد جدید',

  'serving' = 'وعده',
  'Serving' = 'وعده',
  'kg' = 'کیلوگرم',
  'lb' = 'پوند',
  'mg' = 'میلی‌گرم',
  'kcal' = 'کیلو کالری',

  'Log out' = 'خروج',
  ', and ' = '، و ',
  Calories = 'کالری',
  Reviews = 'دستور تهیه های در انتظار تائید',
  'Rejecting' = 'در حال رد درخواست',
  'Reject Request' = 'رد درخواست',
  'Accepting' = 'در حال تائید',
  'Accept Publication Request' = 'تائید درخواست',
  'Bringing down' = 'در حال عدم نشر',
  'Bring down' = 'عدم نشر',
  'Requesting for Publication' = 'در حال درخواست انتشار',
  'Request Publication' = 'درخواست انتشار',
  'Cancelling' = 'در حال انصراف',
  'Cancel Publication Request' = 'انصراف',

  Send = 'ارسال',
  commaAnd = '، ',
  Today = 'امروز',
  Tomorrow = 'فردا',
  Yesterday = 'دیروز',
  availableTime = 'زمان موجود',
  mealSize = 'اندازه وعده',
  Save = 'ذخیره',
  Snack = 'اسنک',
  Settings = 'تنظیمات',
  editMealPlanSettings = 'تنظیمات برنامه‌غذایی',
  editNutritionProfile = 'هدف غذایی',

  Groceries = 'سبد خرید',

  cuisine = 'cuisine',
  diet = 'diet',
  imported = 'imported',
  ingredient = 'ingredient',
  meal = 'meal',
  Meal = 'Meal',
  occasion = 'occasion',
  other = 'other',
  recipe = 'recipe',

  'site.title' = 'پرانا | دستیار هوشمند تغذیه',
  'Add Meal Item' = 'افزودن غذا',
  'Edit Meal Settings' = 'تنظیمات وعده',
  'Clear Meals Items' = 'پاک کردن سفره',
  'ClearDay' = 'پاک کردن روز',
  'Remove from meal' = 'حذف',

  'tiny' = 'خیلی کوچک',
  'small' = 'کوچک',
  'normal' = 'متوسط',
  'huge' = 'بزرگ',
  'big' = 'خیلی بزرگ',

  noTime = '۵ دقیقه',
  littleTime = '۱۵ دقیقه',
  someTime = 'نیم ساعت',
  moreTime = '۴۵ دقیقه',
  lotsOfTime = 'یک ساعت',
  noLimit = 'بدون محدودیت',

  'Delete All Instances' = 'حذف تمام جایگشت ها',
  AlreadyAMember = 'AlreadyAMember',
  Or = 'یا',
  GetStartedNow = 'همین الان شروع کن',

  'estimatedGramWeight' = 'وزن حدودی (گرم)',

  'nutrition' = 'ارزش غذایی',
  'note' = 'نوت',
  'loadMore' = 'بیشتر',
  'resetAll' = 'تنظیم مجدد',

  forgotPassword = 'فراموشی رمز عبور',

  'Main Meal Items' = 'موارد اصلی',

  'optional' = 'اختیاری',

  'Add Alternative Meal Item' = 'افزودن غذای آلترناتیو',
  'Log Meal' = 'لاگ کردن',

  finishSetup = 'کامل کن اطلاعاتتو'

}

export default FaLocale
