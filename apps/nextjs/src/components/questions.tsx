import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>About Snapparoo</AccordionTrigger>
        <AccordionContent>
          Snapparoo's team of experienced photographers and e-commerce experts has invested years
          into refining our product photography process. We're proud to offer a service that
          represents the culmination of best practices and proven techniques extracted from
          countless successful e-commerce projects. Our extensively tested approach is more than
          just photography; it's a cornerstone of effective e-commerce strategy, consistently
          helping us deliver exceptional results for our clients. While informed by our unique
          experiences in the Chinese manufacturing sector, our solutions are meticulously
          chosen to address common challenges faced by e-commerce businesses globally. We believe
          our service offers a streamlined and efficient framework for capturing and delivering
          high-quality product images, empowering you to accelerate your product launches and
          boost your online sales.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why on-site photography?</AccordionTrigger>
        <AccordionContent>
          On-site photography at the source of manufacturing offers a range of benefits for
          e-commerce businesses. It significantly reduces time-to-market, eliminates shipping
          costs for samples, ensures consistent quality across product lines, and allows for
          immediate reshoots if necessary. This approach is known for its excellent efficiency,
          cost-effectiveness, and ability to provide high-quality images that accurately represent
          your products.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is Snapparoo right for your business?</AccordionTrigger>
        <AccordionContent>
          If you're an e-commerce business importing products from China and are looking for a
          way to streamline your product photography process, accelerate your time-to-market,
          and ensure consistent, high-quality images across your product line, then Snapparoo's
          service is an excellent resource to consider. Our approach encompasses a holistic
          solution to product photography, addressing common pain points such as delays,
          inconsistent quality, and high costs. Even if you're uncertain about whether our
          service fits your specific needs, exploring our offering can provide valuable insights
          into optimizing your product launch process. By learning about our methods, you can
          gain inspiration for improving your own product photography workflow. Whether you
          choose to fully leverage Snapparoo's services or simply draw ideas from our approach,
          we are confident that engaging with us will provide indispensable insights for anyone
          aiming to enhance their e-commerce product presentation and accelerate their
          go-to-market strategy.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
