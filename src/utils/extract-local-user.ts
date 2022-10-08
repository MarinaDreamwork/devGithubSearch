import { GithubUser, LocalGithubUser } from "types";

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
  login: user.login,
  id: user.id,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  bio: user.bio,
  twitter: user.twitter_username,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
  location: user.location,
  blog: user.blog
});