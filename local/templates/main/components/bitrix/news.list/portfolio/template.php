<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

<div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
    <? foreach ($arResult["ITEMS"] as $arItem): ?>
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-img"><img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
            <h4><?=$arItem["NAME"]?></h4>
            <p><?=$arItem["PREVIEW_TEXT"]?></p>
            <a href="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" data-gall="portfolioGallery" class="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
    </div>
    <? endforeach; ?>
</div>
