# 版本控制（git管理文件夹）

- 进入要管理的文件夹（进入）

- 初始化（提名）`git init` ，出现.git的隐藏文件

- 管理
  
  - ```检测当前文件状态
    git status    检测当前文件状态
    git add 文件名    管理文件
    git add .    管理当前未被管理的所有文件
    git commit -m '版本信息'    生成一个版本
    git log    查看版本记录
    ```

- 个人信息配置：用户名，邮箱（一次即可）
  
  - ```
    git config --global user.name "你的名字"
    git config --global user.email "你的邮箱"
    ```

- 生成版本 

# 三种状态的变化

- 红色：未被管理新文件，已经修改过文件

- 绿色：已经管理起来，没有生成版本

- 生成版本

# git三大区域

- 工作区
  
  - 已管理
  
  - 新文件/修改文件

- 暂存区（git add）

- 版本库(commit)

# 回滚

- ```
  向前回滚
  git reset --hard 版本号（git log查看 commit后）
  ```

- ```
  向后回滚
  git reflog    查看
  git reset --hard 版本号
  ```

# 命令总结

```
修改未管理==>未修改（复原）
git checkout -- 文件名
暂存区==>未暂存（复原）
git reset HEAD 文件名
```

![](assets/2026-10-05-09-31-18-image.png)

# 分支

```
创建分支
    git branch 分支名
查看分支
    git branch
切换分支
    git checkout 分支名
合并分支（可能产生冲突，手动修改）
    git checkout master    切换回主分支
    git merge 分支名
删除分支
    git branch -d 分支名
```

`merge v.(使)合并`

### 在新版 Git 中，很多人习惯把默认分支名从 `master` 修改为 `main`，初始化仓库时可以这样：

```
git init -b main
```

初始化后默认分支直接叫 main，不需要后续改名。

### 查看所有分支（包含远程分支，现在还没有远程仓库）

```
git branch -a
```
