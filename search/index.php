<?php
try {
    $table = "mysql:dbname=fullstomic_searchdb;host=localhost;charset=utf8";
    $user = 'fullstomic_root';
    $password = '46vi3y7u';
    $dbh = new PDO($table, $user, $password);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $counter = 0;

    if (isset($_GET["q"])) {
        $_GET["q"] = htmlspecialchars($_GET["q"]);
        $search_word = $_GET["q"];
        if (false !== strpos($search_word, " ")) {
            $array = explode(" ", $search_word);
        } else if (false !== strpos($search_word, "　")) {
            $array = explode("　", $search_word);
        } else {
            $array = explode(",", $search_word);
        }
        $sql = "select * from site_list where site_outline like :q0 ";
        for ($i = 1; $i < count($array); $i++) {
            $sql .= " or site_outline like :q" . $i;
        }

        $rec = $dbh->prepare($sql);
        $current = 0;
        foreach ($array as $search_array) {
            $current_word = '%' . $search_word . '%';
            $rec->bindParam(":q" . $current, $current_word, PDO::PARAM_STR);
            $current++;
        }
        $rec->execute();
        $result = $rec->fetchAll();
    }
} catch (Exception $e) {
    echo $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fullstomic｜お知らせ</title>
    <!--#region Material Design 3 -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <script type="importmap">
        {
        "imports": {
            "@material/web/": "https://esm.run/@material/web/"
        }
        }
    </script>
    <script type="module">
        import '@material/web/all.js';
        import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

        document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Sharp" rel="stylesheet">
    <!-- #endregion -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./../assets/css/common.css">
    <link rel="stylesheet" href="./../assets/css/news.css">
    <link rel="stylesheet" href="./../assets/css/search.css">
    <script src="./../assets/js/jquery.js"></script>
    <script src="./../assets/js/common.js"></script>
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/gh/alfrcr/paginathing/dist/paginathing.min.js"></script>
</head>

<body>
    <div class="search-window">
        <button class="search-window__close">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <form action=" ./../search/" class="search-window__form" method="get">
            <input type="text" name="q" required class="search-window__form--input">
            <button class="search-window__form--submit">
                <md-icon>search</md-icon>
            </button>
        </form>
    </div>
    <header class="header" id="header">
        <a href="./../" class="header__top-link">
            Fullstomic
        </a>
        <nav class="header__navigation">
            <ul>
                <li>
                    <a href="./../about/" class="header__navigation--link">
                        About
                    </a>
                </li>
                <li>
                    <a href="./../news/" class="header__navigation--link">
                        News
                    </a>
                </li>
                <li>
                    <a href="./../portfolio/" class="header__navigation--link">
                        Portfolio
                    </a>
                </li>
                <li>
                    <button class="header__navigation--search_open_button">
                        <md-icon>
                            search
                        </md-icon>
                    </button>
                </li>
            </ul>
        </nav>
        <div class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    <main>
        <section class="common-page-title">
            <h1 class="common-page-title__headline">
                Search
            </h1>
        </section>
        <section class="article-section">
            <h2 class="article-section__headline">
                <?php echo $_GET["q"]; ?>の検索結果
            </h2>
            <form action=" ./../search/" class="search-window__form search-page-form" method="get">
                <input type="text" name="q" required class="search-window__form--input">
                <button class="search-window__form--submit">
                    <md-icon>search</md-icon>
                </button>
            </form>
            <ul class="article-list">
                <?php
                foreach ($result as $results) {
                    ?>
                    <li class="article-list__li">
                        <a href="<?php echo $results['site_address'] ?>" class="article">
                            <h3 class="article__title">
                                <?php echo $results["site_title"]; ?>

                            </h3>
                            <span class="article__guide">
                                <md-icon>
                                    chevron_right
                                </md-icon>
                            </span>
                        </a>
                    </li>
                    <?php
                }
                ?>


            </ul>
        </section>
    </main>
    <footer class="footer">
        <section class="footer__content_section">
            <p class="footer__content_section--site_title">
                Fullstomic
            </p>
            <nav>
                <ul class="footer__content_section--link_list">
                    <li>
                        <a href="./" class="footer-link">Home</a>
                    </li>
                    <li>
                        <a href="./../about/" class="footer-link">about</a>
                    </li>
                    <li>
                        <a href="./../news/" class="footer-link">News</a>
                    </li>
                    <li>
                        <a href="./../portfolio/" class="footer-link">Portfolio</a>
                    </li>
                </ul>
            </nav>
        </section>
        <section class="footer__copyright_section">
            <p>
                Ⓒ2025 Fullstomic
            </p>
        </section>
    </footer>
</body>

</html>