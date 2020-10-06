import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from 'components/styles';
import Paper from '@material-ui/core/Paper';
import PageHeader from 'components/organisms/pageHeader';
import photo from 'static/images/mos.jpg';

const About = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <PageHeader
          description={'About Front Engineer Blog'} 
          title="ABOUT" 
          image={photo} 
        />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <div className={classes.textHeaderSpace}>
            <p className={classes.paragraph}>
              React でブログサイトを作りました。
              新機能を試して、そのままブログ投稿として表示できるので、フロントエンドエンジニアブログを書くには良いかと思っています。
              CMS のような管理画面も作れそうなので追々作ってみるのも面白そうです。
            </p>
            <p className={classes.paragraph}>
              テキストはMarkdownにしてもいいかと思っています。
              ライブラリは markdown-to-jsx がいいかな。
              API や DB は AWS か Firebase のどちらかにする予定です。
            </p>
          </div>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default About;
