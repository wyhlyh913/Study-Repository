# github

```
1. 给远程仓库起别名
    git remote add origin 远程仓库地址
2. 向远程推送分支
    git push -u origin 分支名
```

```
第一次
1. 克隆远程仓库代码
    git clone 远程仓库地址
2. 切换分支
    git checkout 分支
```

```
1. 切换到dev分支进行开发
    git checkout dev
2. 把master分支合并到dev[仅一次]
    git merge master
3. 修改代码
4. 提交代码
    git add .
    git commit -m 'xx'
    git push origin dev
```

```
1. 切换到dev分支开发
    git checkout dev
2. 拉代码
    git pull origin dev
3. 继续开发
4. 提交代码
    git add .
    git commit -m 'xx'
    git push origin dev
```

上线

```
1. 将dev分支合并到master,进行上线
    git checkout master
    git merge dev
    git push origin master
2. 把dev分支也推送到远程
    git checkout dev
    git merge master
    git push origin dev
```

```
git pull origin dev
等同于
git fetch origin dev
git merge origin/dev
```

![](assets/2026-10-05-19-44-43-image.png)

# rebase(变基)

使git记录简洁

1. 多个记录合并成一个记录

```
合并到哪个版本
    git rebase -i 版本号
合并几个
    git rebase -i HEAD~3
```

注：已经提交到仓库的不要合并

2. 将分支插入主线

```
1. 切回dev分支
    git checkout dev
2. master分支放dev
    git rebase master
3. 
    git checkout master
4. 
    git merge dev
```

# 快速解决冲突

1.  安装beyond compare

2. 在git中进行配置

```
起别名
    git config --local merge.tool bc
路径
    git config --local mergetool.bc.path '/usr/local/bin/bcomp'
不保留备份
    git config --local mergetool.keepBackup false
配套difftool
    git config --local diff.tool bc
    git config --local difftool.bc.path "D:\Beyond Compare 5\BComp.exe"
```

3. 应用beyond compare解决冲突

```
git mergetool
```


