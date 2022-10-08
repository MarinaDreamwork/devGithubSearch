export type LocalGithubUser = {
  login: string,
  id: number,
  avatar: string,
  name: string,
  company: string | null,
  bio: string | null,
  twitter: string | null,
  repos: number,
  followers: number,
  following: number,
  created: string,
  location: string | null,
  blog: string
}

export type GithubUser = {
  login: string,
  id: number,
  avatar_url: string,
  name: string,
  company: string | null,
  bio: string | null,
  twitter_username: string | null,
  public_repos: number,
  followers: number,
  following: number,
  created_at: string,
  location: string | null,
  blog: string
}

export type GithubError = {
  message: string,
  documentation_url: string
}