/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
};

export type AddToCartInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  user: Scalars['String']['input'];
};

export type AddToCartPayload = {
  __typename?: 'AddToCartPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** May contain more than one error for same field. */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum AppProductCategoryChoices {
  /** Books Games */
  BooksMoviesMusicGames = 'BOOKS_MOVIES_MUSIC_GAMES',
  /** Electronics */
  Electronics = 'ELECTRONICS',
  /** Fashion */
  Fashion = 'FASHION',
  /** Furniture */
  FurnitureDecor = 'FURNITURE_DECOR',
  /** Health Beauty */
  HealthPersonalCareBeauty = 'HEALTH_PERSONAL_CARE_BEAUTY',
  /** Household */
  HouseholdItem = 'HOUSEHOLD_ITEM',
  /** Toys */
  ToysHobbies = 'TOYS_HOBBIES'
}

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CartType = {
  __typename?: 'CartType';
  id: Scalars['ID']['output'];
  product: ProductType;
  quantity: Scalars['Int']['output'];
  user: UserType;
};

export type CreateOrderInput = {
  billingAddress: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  shippingAddress: Scalars['String']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
  totalPrice: Scalars['Float']['input'];
  user: Scalars['String']['input'];
};

export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  billingAddress?: Maybe<Scalars['String']['output']>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dateOrdered?: Maybe<Scalars['DateTime']['output']>;
  /** May contain more than one error for same field. */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  id?: Maybe<Scalars['Int']['output']>;
  shippingAddress?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

export type CreateProductInput = {
  category: Category;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  stock: Scalars['Int']['input'];
  store: Scalars['String']['input'];
};

export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  category?: Maybe<Category>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** May contain more than one error for same field. */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  store?: Maybe<Scalars['String']['output']>;
};

export type CreateReviewInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['String']['input'];
};

export type CreateReviewPayload = {
  __typename?: 'CreateReviewPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** May contain more than one error for same field. */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteCart = {
  __typename?: 'DeleteCart';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteProduct = {
  __typename?: 'DeleteProduct';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Debugging information for the current query. */
export type DjangoDebug = {
  __typename?: 'DjangoDebug';
  /** Raise exceptions for this API query. */
  exceptions?: Maybe<Array<Maybe<DjangoDebugException>>>;
  /** Executed SQL queries for this API query. */
  sql?: Maybe<Array<Maybe<DjangoDebugSql>>>;
};

/** Represents a single exception raised. */
export type DjangoDebugException = {
  __typename?: 'DjangoDebugException';
  /** The class of the exception */
  excType: Scalars['String']['output'];
  /** The message of the exception */
  message: Scalars['String']['output'];
  /** The stack trace */
  stack: Scalars['String']['output'];
};

/** Represents a single database query made to a Django managed DB. */
export type DjangoDebugSql = {
  __typename?: 'DjangoDebugSQL';
  /** The Django database alias (e.g. 'default'). */
  alias: Scalars['String']['output'];
  /** Duration of this database query in seconds. */
  duration: Scalars['Float']['output'];
  /** Postgres connection encoding if available. */
  encoding?: Maybe<Scalars['String']['output']>;
  /** Whether this database query was a SELECT. */
  isSelect: Scalars['Boolean']['output'];
  /** Whether this database query took more than 10 seconds. */
  isSlow: Scalars['Boolean']['output'];
  /** Postgres isolation level if available. */
  isoLevel?: Maybe<Scalars['String']['output']>;
  /** JSON encoded database query parameters. */
  params: Scalars['String']['output'];
  /** The raw SQL of this query, without params. */
  rawSql: Scalars['String']['output'];
  /** The actual SQL sent to this database. */
  sql?: Maybe<Scalars['String']['output']>;
  /** Start time of this database query. */
  startTime: Scalars['Float']['output'];
  /** Stop time of this database query. */
  stopTime: Scalars['Float']['output'];
  /** Postgres transaction ID if available. */
  transId?: Maybe<Scalars['String']['output']>;
  /** Postgres transaction status if available. */
  transStatus?: Maybe<Scalars['String']['output']>;
  /** The type of database being used (e.g. postrgesql, mysql, sqlite). */
  vendor: Scalars['String']['output'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String']['output'];
  messages: Array<Scalars['String']['output']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  _debug?: Maybe<DjangoDebug>;
  addToCart?: Maybe<AddToCartPayload>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  createOrder?: Maybe<CreateOrderPayload>;
  createProduct?: Maybe<CreateProductPayload>;
  createReview?: Maybe<CreateReviewPayload>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  deleteProduct?: Maybe<DeleteProduct>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Set user password - for passwordless registration
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, set
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordSet?: Maybe<PasswordSet>;
  /**
   * Same as `grapgql_jwt` implementation,
   * with change exception error message from "Error decoding signature" to "Invalid token.".
   */
  refreshToken?: Maybe<RefreshToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  removeFromCart?: Maybe<DeleteCart>;
  /**
   * Remove user secondary email.
   *
   * Require password confirmation.
   */
  removeSecondaryEmail?: Maybe<RemoveSecondaryEmail>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /**
   * Same as `grapgql_jwt` implementation,
   * with change exception error message from "Error decoding signature" to "Invalid token.".
   */
  revokeToken?: Maybe<RevokeToken>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivation>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmails>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  updateCart?: Maybe<UpdateCart>;
  updateProduct?: Maybe<UpdateProduct>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmail>;
  /**
   * Same as `grapgql_jwt` implementation,
   * with change exception error message from "Error decoding signature" to "Invalid token.".
   */
  verifyToken?: Maybe<VerifyToken>;
};


export type MutationsAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationsArchiveAccountArgs = {
  password: Scalars['String']['input'];
};


export type MutationsCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationsCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationsCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationsDeleteAccountArgs = {
  password: Scalars['String']['input'];
};


export type MutationsDeleteProductArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsPasswordChangeArgs = {
  newPassword1: Scalars['String']['input'];
  newPassword2: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationsPasswordResetArgs = {
  newPassword1: Scalars['String']['input'];
  newPassword2: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationsPasswordSetArgs = {
  newPassword1: Scalars['String']['input'];
  newPassword2: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationsRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsRegisterArgs = {
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationsRemoveFromCartArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsRemoveSecondaryEmailArgs = {
  password: Scalars['String']['input'];
};


export type MutationsResendActivationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationsRevokeTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsSendPasswordResetEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationsSendSecondaryEmailActivationArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationsSwapEmailsArgs = {
  password: Scalars['String']['input'];
};


export type MutationsTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateCartArgs = {
  productId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsUpdateProductArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  store?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsVerifyAccountArgs = {
  token: Scalars['String']['input'];
};


export type MutationsVerifySecondaryEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationsVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  refreshExpiresIn?: Maybe<Scalars['Int']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  unarchiving?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserNode>;
};

export type OrderItemType = {
  __typename?: 'OrderItemType';
  id: Scalars['ID']['output'];
  order: OrderType;
  product: ProductType;
  quantity: Scalars['Int']['output'];
};

export type OrderType = {
  __typename?: 'OrderType';
  billingAddress: Scalars['String']['output'];
  dateOrdered: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  orderitemSet: Array<OrderItemType>;
  shippingAddress: Scalars['String']['output'];
  status: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
  user: UserType;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Set user password - for passwordless registration
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, set
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordSet = {
  __typename?: 'PasswordSet';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  cartSet: Array<CartType>;
  category: AppProductCategoryChoices;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orderitemSet: Array<OrderItemType>;
  price: Scalars['Float']['output'];
  reviewSet: Array<ReviewType>;
  stock: Scalars['Int']['output'];
  store: StoreType;
};

export type Query = {
  __typename?: 'Query';
  _debug?: Maybe<DjangoDebug>;
  cart?: Maybe<Array<Maybe<CartType>>>;
  me?: Maybe<UserNode>;
  order?: Maybe<OrderType>;
  orderItems?: Maybe<Array<Maybe<OrderItemType>>>;
  orders?: Maybe<Array<Maybe<OrderType>>>;
  product?: Maybe<ProductType>;
  products?: Maybe<Array<Maybe<ProductType>>>;
  review?: Maybe<Array<Maybe<ReviewType>>>;
  store?: Maybe<StoreType>;
  stores?: Maybe<Array<Maybe<StoreType>>>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrderItemsArgs = {
  orderId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReviewArgs = {
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoreArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status_Archived?: InputMaybe<Scalars['Boolean']['input']>;
  status_SecondaryEmail?: InputMaybe<Scalars['String']['input']>;
  status_Verified?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_Icontains?: InputMaybe<Scalars['String']['input']>;
  username_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Same as `grapgql_jwt` implementation,
 * with change exception error message from "Error decoding signature" to "Invalid token.".
 */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  refreshExpiresIn?: Maybe<Scalars['Int']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Remove user secondary email.
 *
 * Require password confirmation.
 */
export type RemoveSecondaryEmail = {
  __typename?: 'RemoveSecondaryEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReviewType = {
  __typename?: 'ReviewType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  product: ProductType;
  rating: Scalars['Int']['output'];
  review: Scalars['String']['output'];
  user: UserType;
};

/**
 * Same as `grapgql_jwt` implementation,
 * with change exception error message from "Error decoding signature" to "Invalid token.".
 */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  revoked?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivation = {
  __typename?: 'SendSecondaryEmailActivation';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type StoreType = {
  __typename?: 'StoreType';
  address: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<ProductType>;
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmails = {
  __typename?: 'SwapEmails';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateCart = {
  __typename?: 'UpdateCart';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateProduct = {
  __typename?: 'UpdateProduct';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  product?: Maybe<ProductType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  address: Scalars['String']['output'];
  archived?: Maybe<Scalars['Boolean']['output']>;
  cartSet: Array<CartType>;
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  orderSet: Array<OrderType>;
  phone: Scalars['String']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  reviewSet: Array<ReviewType>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type UserType = {
  __typename?: 'UserType';
  address: Scalars['String']['output'];
  cartSet: Array<CartType>;
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  orderSet: Array<OrderType>;
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  reviewSet: Array<ReviewType>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmail = {
  __typename?: 'VerifySecondaryEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Same as `grapgql_jwt` implementation,
 * with change exception error message from "Error decoding signature" to "Invalid token.".
 */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export enum Category {
  /** Books Games */
  BooksMoviesMusicGames = 'BOOKS_MOVIES_MUSIC_GAMES',
  /** Electronics */
  Electronics = 'ELECTRONICS',
  /** Fashion */
  Fashion = 'FASHION',
  /** Furniture */
  FurnitureDecor = 'FURNITURE_DECOR',
  /** Health Beauty */
  HealthPersonalCareBeauty = 'HEALTH_PERSONAL_CARE_BEAUTY',
  /** Household */
  HouseholdItem = 'HOUSEHOLD_ITEM',
  /** Toys */
  ToysHobbies = 'TOYS_HOBBIES'
}
