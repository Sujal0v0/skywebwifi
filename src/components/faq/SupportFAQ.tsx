"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const SupportFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openDevice, setOpenDevice] = useState(null);

  const faqs = [
    {
      question: "How long does installation take?",
      answer:
        "Most installations are completed within 2-3 days, depending on property size. We handle all permitting and work around your guest schedules.",
    },
    {
      question: "What kind of revenue can I expect?",
      answer:
        "Properties typically generate $5k-$10k monthly through splash page advertising, premium Wi-Fi tiers, and partner promotions. Revenue varies by location and traffic.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We offer 24/7 monitoring and support. Our team proactively manages your system and fixes issues before guests notice problems.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Absolutely. We work with your current infrastructure and can integrate with property management systems, security cameras, and other technology.",
    },
    {
      question: "What's included in the 30-day guarantee?",
      answer:
        "If you're not completely satisfied within 30 days, we'll work with you to resolve any issues or remove the system at no cost.",
    },
  ];
  const devices = [
    {
      id: 1,
      name: "Vizio TV",
      steps: [
        "Press Menu on the remote.",
        "Use the arrow buttons to highlight the Network icon.",
        "Press OK. The Network Connection menu displays.",
        "Highlight Manual Setup and press OK. The IP Settings menu is displayed.",
        "At the bottom of the menu the RJ45 MAC (Wired) and the Wireless MAC addresses are displayed",
      ],
    },
    {
      id: 2,
      name: "Toshiba TV",
      steps: [
        "Settings.",
        "Preferences.",
        "Network Setup",
        "Advanced Network Settings (Green button)",
      ],
    },
    {
      id: 3,
      name: "Panasonic TV",
      steps: [
        "MENU and then",
        "NETWORK then",
        "Network status",
        "Details/ Device info",
      ],
    },
    {
      id: 4,
      name: "Hitachi TV",
      steps: [
        "Go to Network settings",
        "Advanced",
        "MAC address should be displayed at the bottom",
      ],
    },
    {
      id: 5,
      name: "Chromebook",
      steps: [
        "Click the network icon in the lower-right corner of your screen.",
        "Select your network status from the menu that appears.",
        "In the network menu that appears, click the 'i' icon in the lower-right corner.",
        "Your device's MAC address is listed in the message that appears.",
      ],
    },
    {
      id: 6,
      name: "Kindle Devices",
      variants: [
        {
          name: "Kindle/ Kindle Touch/ Kindle Paperwhite",
          steps: [
            "Tap the Menu button on the home screen.",
            "Select Settings.",
            "Tap the Menu button again.",
            "Select Device Info.",
            "Scroll down to find the Wi-Fi MAC Address.",
          ],
        },
        {
          name: "Kindle Fire / Kindle Fire HD / Kindle Fire HDX",
          steps: [
            "Tap the Settings icon on the home screen.",
            "Tap on More.",
            "Tap on Device.",
            "Scroll down to find the Wi-Fi MAC Address.",
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Android Tablet",
      steps: [
        "On the Home screen, tap the Android menu icon galaxy tab Menu key and go to Settings.",
        "Scroll down and tap About Tablet then tap Status and then scroll down to view Wi-Fi Mac address.",
      ],
    },
    {
      id: 8,
      name: "Samsung Smart TV",
      steps: [
        "Select Network Settings.",
        "Choose Network Status.",
        "The MAC address is the first thing in the list.",
      ],
    },
    {
      id: 9,
      name: "Samsung Galaxy Tab",
      variants: [
        {
          name: "Samsung Galaxy Tab 2",
          steps: [
            "From a home screen, select Apps Apps icon.",
            "Note Located at the bottom when viewed in portrait or at the right in landscape.",
            "From the Apps tab, select Settings.",
            "Select About device.",
            "Select Status.",
            "Locate the Wi-Fi MAC address.",
          ],
        },
        {
          name: "Samsung Galaxy Tab 4",
          steps: [
            "From the Home screen, select the app slider at the bottom-right portion of the screen.",
            "Tap 'Settings'.",
            "Choose the 'General' option at the top of the screen.",
            "Scroll down on the left pane and select 'About device'.",
            "Choose 'Status' on the right side.",
            "The Wi-Fi MAC address will be displayed on the screen.",
          ],
        },
      ],
    },
    {
      id: 10,
      name: "Samsung Phone",
      steps: [
        "Go to Settings.",
        "Select About phone or device at the bottom.",
        "Select Status.",
        "Scroll down to Wi-Fi MAC Address.",
      ],
    },
    {
      id: 11,
      name: "Apple Watch",
      steps: [
        "Go to Settings.",
        "Select General.",
        "Click About.",
        "The MAC Address (Watch) / Wi-Fi Address (iPhone) will be displayed.",
      ],
    },
    {
      id: 12,
      name: "Chromecast",
      steps: [
        "If you still have the original packaging the MAC will be displayed on the sticker.",
        "After opening the Google app, follow these instructions:",
        "Connect to your Chromecast using Bluetooth.",
        "Once connected begin the process to connect to Wi-Fi.",
        "On the bottom right of the page which asks you to select a Wi-Fi network, the MAC address is displayed.",
      ],
    },
    {
      id: 13,
      name: "Echo Dot",
      steps: [
        "Open Alexa App",
        "On the bottom, select the Devices tab",
        "You should now see 'Echo & Alexa' at the top. Select that.",
        "There should now be a list of all the things connected to Alexa through your Amazon account. Select the name of your Echo Dot.",
        "Scroll all the way to the bottom and select About",
        "You will now see your MAC Address of your Echo.",
      ],
    },
    {
      id: 14,
      name: "Windows",
      variants: [
        {
          name: "Windows XP/ Vista / 7 / 8 & 10",
          steps: [
            "Go to the Start menu and type CMD into the search bar.",
            "Click on Command Prompt.",
            "Once this opens type getmac and press Enter, this will show you the Wi-Fi MAC address of your device.",
          ],
        },
        {
          name: "Windows 7 / Vista",
          steps: [
            "Click the Wireless Network Connection icon from within your system tray (near the clock).",
            "Select Network and Sharing Center.",
            "Select View status.",
            "Select Details.",
            "The MAC address is listed as Physical Address.",
          ],
        },
        {
          name: "Windows 8",
          steps: [
            "Press the Windows Start key to open the Start screen.",
            "Type cmd and press Enter to launch the command prompt.",
            "Type ipconfig /all into the command prompt.",
            "The MAC address using a cabled connection is listed as Physical Address under Ethernet Adapter. For Wi-Fi Mac Address Look for the Physical Address under Wireless Adapter.",
            "Type exit and press Enter to exit the command prompt.",
          ],
        },
        {
          name: "Windows XP / 2000",
          steps: [
            "Double-click the Wireless Network Connection icon from within your system tray (near the clock).",
            "Select the Support tab.",
            "Select Details.",
            "The MAC address is listed as Physical Address.",
          ],
        },
      ],
    },
    {
      id: 15,
      name: "Nintendo Devices",
      variants: [
        {
          name: "Nintendo Switch",
          steps: [
            "From the home screen, touch the settings icon.",
            "Select the Internet option.",
            "The MAC address will be listed in the Connection Status portion of this page.",
          ],
        },
        {
          name: "Nintendo 3DS",
          steps: [
            "From the HOME menu, highlight and select the System Settings Icon.",
            "Select 'Internet Settings.'",
            "Tap 'Other Information.'",
            "Tap 'Confirm MAC Address.' Your system's MAC Address will be displayed on the screen.",
          ],
        },
        {
          name: "Nintendo DS",
          steps: [
            "Go to the Nintendo Wi-Fi Connection Setup in the game's menu.",
            "Select Options and System Information.",
            "The MAC Address is displayed on the top line.",
          ],
        },
        {
          name: "Nintendo Wii",
          steps: [
            "From the HOME menu, highlight and select the System Settings Icon.",
            "Select 'Internet Settings.'",
            "Tap 'Other Information.'",
            "Tap 'Confirm MAC Address.' Your system's MAC Address will be displayed on the screen.",
          ],
        },
        {
          name: "Nintendo Wii U",
          steps: [
            "From the Wii U Menu, select 'System Settings.'",
            "Using the Left Stick select the 'Internet' icon and press the A Button.",
            "Select 'View MAC Address' and wait a moment for the MAC address to be displayed",
          ],
        },
      ],
    },
    {
      id: 16,
      name: "IMAC",
      steps: [
        "Hold down the 'option' key on the keyboard and click on the Wi-Fi icon on the top right.",
        "There will be an Address a couple rows down, This will contain your MAC address.",
      ],
    },
    {
      id: 17,
      name: "Kindle",
      steps: [
        "Tap the Settings icon on the home screen.",
        "Tap on More.",
        "Tap on Device",
        "Scroll down to find the Wi-Fi MAC Address",
      ],
    },
    {
      id: 18,
      name: "Android",
      variants: [
        {
          name: "Option 1",
          steps: [
            "Click 'Settings'.",
            "Select 'Device'.",
            "Select 'Status'.",
            "The Wi-Fi MAC address should be displayed.",
          ],
        },
        {
          name: "Option 2",
          steps: [
            "Click 'Settings'.",
            "Select 'About Device'.",
            "Select 'Hardware Information'.",
            "The Wi-Fi MAC address should be displayed.",
          ],
        },
        {
          name: "Option 3",
          steps: [
            "Click 'Settings'.",
            "Select 'Wireless and network'.",
            "Select 'Wi-Fi Settings'.",
            "The MAC address should be displayed.",
          ],
        },
      ],
    },
    {
      id: 19,
      name: "iOS",
      steps: [
        "Tap Settings.",
        "Select General",
        "Select About.",
        "The Mac address is listed as Wi-Fi Address.",
      ],
    },
    {
      id: 20,
      name: "Media TV Boxes",
      steps: [
        "Click 'Settings'.",
        "Select 'System'.",
        "Select 'About'.",
        "Select 'Network'.",
        "The wireless MAC address should be displayed.",
      ],
    },
    {
      id: 21,
      name: "Amazon Firestick",
      steps: [
        "Click 'Settings'.",
        "Select 'Device'.",
        "Select 'About'.",
        "Select 'Network'.",
        "The wireless MAC address should be displayed.",
      ],
      alternative: {
        description: "If this is not available try:",
        steps: ["Click 'Settings'", "Select 'My Fire TV'", "Select 'About'"],
      },
    },
    {
      id: 22,
      name: "Toshiba Smart TV",
      steps: [
        "Click 'Settings'.",
        "Select 'Preferences', then 'Network Setup'.",
        "'Advanced Network Settings'",
        "The wireless MAC address should be displayed.",
      ],
    },
    {
      id: 23,
      name: "Playstation 4",
      steps: [
        "On the XMB, scroll and click on 'Settings'.",
        "Scroll down and click 'Network'.",
        "Then click 'View Connection Status'.",
        "You will see the MAC address for Wi-Fi.",
      ],
    },
    {
      id: 24,
      name: "Playstation 3",
      steps: [
        "In the XMB home menu, go to 'Settings' > 'System Settings'.",
        "Scroll until you see 'System Information'.",
        "You will see the MAC address listed.",
      ],
    },
    {
      id: 25,
      name: "Xbox One",
      variants: [
        {
          name: "At initial set-up",
          steps: [
            "Attempt to connect to the network.",
            "The connection will fail.",
            "The MAC address will be located on this page where it says the connection has failed.",
          ],
        },
        {
          name: "After initial set-up",
          steps: [
            "Navigate to the Settings page.",
            "Select Network.",
            "Select Advanced Settings.",
            "MAC address will be listed next to MAC on the right hand side of the screen.",
          ],
        },
      ],
    },
    {
      id: 26,
      name: "Xbox 360",
      variants: [
        {
          name: "Pre-NXE",
          steps: [
            "Go right to reach the System 'blade' of the Dashboard.",
            "Select Network Settings.",
            "Select Edit Settings.",
            "Under Basic Settings check to make sure IP Settings is on Automatic.",
            "Go right to get to the Additional Settings Tab.",
            "Go down to select Advanced Settings.",
            "Toward the bottom of the screen you should see the Wired MAC & Wi-Fi MAC.",
          ],
        },
        {
          name: "Post-NXE",
          steps: [
            "Scroll Down (if necessary) to 'My Xbox'.",
            "Go all the way to the right and select System Settings.",
            "On the new screen, select Network Settings.",
            "Select Configure Network.",
            "Under Basic Settings, check to make sure IP Settings is on Automatic.",
            "Go right to select the Additional Settings Tab.",
            "Go down and select the second item Advanced Settings.",
            "Toward the bottom of the screen you should see Wired MAC & Wi-Fi MAC.",
          ],
        },
      ],
    },
  ];

  const toggleDevice = (id) => {
    if (openDevice === id) {
      setOpenDevice(null);
    } else {
      setOpenDevice(id);
    }
  };
  return (
    <>
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Always On. Always Supported.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Whether it’s setup guidance, troubleshooting, or maximizing your
              network’s potential, our experts are ready to help—anytime,
              anywhere.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-4">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors py-4"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-muted-foreground pt-4">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find MAC Address of Your Device
            </h2>
            <p className="text-xl text-muted-foreground">
              Step-by-step instructions for various devices
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {devices.map((device, index) => (
              <Card key={index} className="mb-4">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors py-4"
                  onClick={() =>
                    setOpenDevice(openDevice === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                    {openDevice === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {openDevice === index && (
                  <CardContent>
                    <div className="text-muted-foreground pt-4">
                      {/* For devices with simple steps array */}
                      {device.steps && (
                        <ul className="list-decimal pl-5 space-y-2">
                          {device.steps.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ul>
                      )}

                      {/* For devices with variants */}
                      {device.variants &&
                        device.variants.map((variant, variantIndex) => (
                          <div key={variantIndex} className="mb-4">
                            <h4 className="font-semibold mb-2">
                              {variant.name}
                            </h4>
                            <ul className="list-decimal pl-5 space-y-2">
                              {variant.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                              ))}
                            </ul>
                          </div>
                        ))}

                      {/* For devices with alternative methods */}
                      {device.alternative && (
                        <div className="mt-4">
                          <p className="font-medium mb-2">
                            {device.alternative.description}
                          </p>
                          <ul className="list-none pl-5 space-y-2">
                            {device.alternative.steps.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportFAQ;
