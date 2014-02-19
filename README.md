js-proj-03
==========

#Github API

## List Commits on repo
###GET /repos/:owner/:repo/commits###

```
[
  {
    "url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
    "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e",
    "commit": {
      "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
      "author": {
        "name": "Monalisa Octocat",
        "email": "support@github.com",
        "date": "2011-04-14T16:00:49Z"
      },
      "committer": {
        "name": "Monalisa Octocat",
        "email": "support@github.com",
        "date": "2011-04-14T16:00:49Z"
      },
      "message": "Fix all the bugs",
      "tree": {
        "url": "https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
      }
    },
    "author": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
      }
    ]
  }
]
```

## Get Single Commit
###GET /repos/:owner/:repo/git/commits/:sha###

```
{
  "sha": "7638417db6d59f3c431d3e1f261cc637155684cd",
  "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd",
  "author": {
    "date": "2010-04-10T14:10:01-07:00",
    "name": "Scott Chacon",
    "email": "schacon@gmail.com"
  },
  "committer": {
    "date": "2010-04-10T14:10:01-07:00",
    "name": "Scott Chacon",
    "email": "schacon@gmail.com"
  },
  "message": "added readme, because im a good github citizen\n",
  "tree": {
    "url": "https://api.github.com/repos/octocat/Hello-World/git/trees/691272480426f78a0138979dd3ce63b77f706feb",
    "sha": "691272480426f78a0138979dd3ce63b77f706feb"
  },
  "parents": [
    {
      "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/1acc419d4d6a9ce985db7be48c6349a0475975b5",
      "sha": "1acc419d4d6a9ce985db7be48c6349a0475975b5"
    }
  ]
}
```

## Get User
###GET /users/:user###

```
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "somehexcode",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}
```

## List User's Repos
###GET /users/:user/repos###

```
0: Object{
  archive_url: "https://api.github.com/repos/erin-lee/guides/{archive_format}{/ref}"
  assignees_url: "https://api.github.com/repos/erin-lee/guides/assignees{/user}"
  blobs_url: "https://api.github.com/repos/erin-lee/guides/git/blobs{/sha}"
  branches_url: "https://api.github.com/repos/erin-lee/guides/branches{/branch}"
  clone_url: "https://github.com/erin-lee/guides.git"
  collaborators_url: "https://api.github.com/repos/erin-lee/guides/collaborators{/collaborator}"
  comments_url: "https://api.github.com/repos/erin-lee/guides/comments{/number}"
  commits_url: "https://api.github.com/repos/erin-lee/guides/commits{/sha}"
  compare_url: "https://api.github.com/repos/erin-lee/guides/compare/{base}...{head}"
  contents_url: "https://api.github.com/repos/erin-lee/guides/contents/{+path}"
  contributors_url: "https://api.github.com/repos/erin-lee/guides/contributors"
  created_at: "2014-02-16T05:16:20Z"
  default_branch: "master"
  // description: "A guide for programming in style."
  downloads_url: "https://api.github.com/repos/erin-lee/guides/downloads"
  events_url: "https://api.github.com/repos/erin-lee/guides/events"
  fork: true
  forks: 0
  forks_count: 0
  forks_url: "https://api.github.com/repos/erin-lee/guides/forks"
  // full_name: "erin-lee/guides"
  git_commits_url: "https://api.github.com/repos/erin-lee/guides/git/commits{/sha}"
  git_refs_url: "https://api.github.com/repos/erin-lee/guides/git/refs{/sha}"
  git_tags_url: "https://api.github.com/repos/erin-lee/guides/git/tags{/sha}"
  git_url: "git://github.com/erin-lee/guides.git"
  has_downloads: true
  has_issues: false
  has_wiki: false
  homepage: ""
  hooks_url: "https://api.github.com/repos/erin-lee/guides/hooks"
  // html_url: "https://github.com/erin-lee/guides"
  id: 16878953
  issue_comment_url: "https://api.github.com/repos/erin-lee/guides/issues/comments/{number}"
  issue_events_url: "https://api.github.com/repos/erin-lee/guides/issues/events{/number}"
  issues_url: "https://api.github.com/repos/erin-lee/guides/issues{/number}"
  keys_url: "https://api.github.com/repos/erin-lee/guides/keys{/key_id}"
  labels_url: "https://api.github.com/repos/erin-lee/guides/labels{/name}"
  language: "Ruby"
  languages_url: "https://api.github.com/repos/erin-lee/guides/languages"
  master_branch: "master"
  merges_url: "https://api.github.com/repos/erin-lee/guides/merges"
  milestones_url: "https://api.github.com/repos/erin-lee/guides/milestones{/number}"
  mirror_url: null
  name: "guides"
  notifications_url: "https://api.github.com/repos/erin-lee/guides/notifications{?since,all,participating}"
  open_issues: 0
  open_issues_count: 0}
```