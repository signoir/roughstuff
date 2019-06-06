/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 5/29/19 9:35 AM
 */

export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
}

export interface EmailPasswordPair {
  email: string;
  password: string;
}

export interface NewAccount {
  name: string;
  email: string;
  password: string;
}
